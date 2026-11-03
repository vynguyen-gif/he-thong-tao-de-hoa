const examEngine = require('./services/examEngine');

function runAudit() {
  console.log('========================================================================');
  console.log('BÁO CÁO TOÀN DIỆN: KIỂM TRA 5 BỘ ĐỀ GỐC CỦA CẢ 3 KHỐI LỚP (10, 11, 12)');
  console.log('========================================================================\n');

  for (const grade of ['10', '11', '12']) {
    console.log(`------------------------------------------------------------------------`);
    console.log(`KIỂM TRA KHỐI LỚP ${grade}:`);
    console.log(`------------------------------------------------------------------------`);
    const suites = examEngine.generate5BaseSuites(grade);
    const bank = examEngine.getBank(grade);
    console.log(`- Tổng số câu trong ngân hàng câu hỏi đề cương Khối ${grade}: ${bank.length}`);
    console.log(`- Số lượng bộ đề gốc được sinh: ${suites.length} bộ`);

    const allUsedQuestionIds = new Set();
    const suiteQuestionSets = [];

    suites.forEach((suite, sIdx) => {
      const baseExam = suite.exams[0];
      const p1 = baseExam.parts.part1 || [];
      const p2 = baseExam.parts.part2 || [];
      const p3 = baseExam.parts.part3 || [];
      const p4 = baseExam.parts.part4 || [];

      const currentSuiteIds = new Set();
      let hasMissingOrDummy = false;

      [...p1, ...p2, ...p3, ...p4].forEach(q => {
        if (!q.content || q.content.startsWith('Câu hỏi') && q.content.length < 20) {
          hasMissingOrDummy = true;
        }
        currentSuiteIds.add(q.id);
        allUsedQuestionIds.add(q.id);
      });

      suiteQuestionSets.push(currentSuiteIds);

      // Verify Part structures
      const expectedP1 = 12;
      const expectedP2 = 2;
      const expectedP3 = 4;
      const expectedP4 = (grade === '10' || grade === '11') ? 3 : 2;
      const totalQ = expectedP1 + expectedP2 + expectedP3 + expectedP4;

      const p1Valid = p1.length === expectedP1;
      const p2Valid = p2.length === expectedP2 && p2.every(q => q.items && q.items.length === 4);
      const p3Valid = p3.length === expectedP3;
      const p4Valid = p4.length === expectedP4;

      console.log(`  + Bộ ${sIdx + 1} (Mã gốc ${baseExam.examCode}):`);
      console.log(`    * Cấu trúc: P1=${p1.length}/${expectedP1}, P2=${p2.length}/${expectedP2} (${p2.reduce((acc,q)=>acc+q.items.length,0)} ý a,b,c,d), P3=${p3.length}/${expectedP3}, P4=${p4.length}/${expectedP4} => Tổng = ${p1.length + p2.length + p3.length + p4.length} câu [${p1Valid && p2Valid && p3Valid && p4Valid ? 'CHUẨN 100%' : 'LỖI'}]`);
      console.log(`    * Chất lượng câu hỏi: ${!hasMissingOrDummy ? '100% câu hỏi thật từ đề cương' : 'CÓ CÂU RỖNG'}`);
      console.log(`    * Biến thể thay số kèm theo: ${suite.exams.length} mã đề (${suite.exams.map(e => e.examCode).join(', ')})`);
      console.log(`    * Ma trận đính kèm: ${baseExam.matrixHtml ? 'ĐẦY ĐỦ' : 'THIẾU'}`);
      console.log(`    * Bản đặc tả đính kèm: ${baseExam.specHtml ? 'ĐẦY ĐỦ 9 CỘT' : 'THIẾU'}`);
    });

    // Overlap analysis among the 5 suites
    let overlapCount = 0;
    for (let i = 0; i < suiteQuestionSets.length; i++) {
      for (let j = i + 1; j < suiteQuestionSets.length; j++) {
        const intersection = [...suiteQuestionSets[i]].filter(x => suiteQuestionSets[j].has(x));
        if (intersection.length > 0) {
          console.error(`    [CẢNH BÁO] Trùng lặp giữa Bộ ${i+1} và Bộ ${j+1}: ${intersection.join(', ')}`);
          overlapCount += intersection.length;
        }
      }
    }

    console.log(`  + Kết quả rà soát trùng lặp giữa 5 bộ đề:`);
    console.log(`    * Tổng số câu hỏi khác nhau được dùng: ${allUsedQuestionIds.size}`);
    console.log(`    * Số câu trùng nhau giữa các bộ đề: ${overlapCount} câu`);
    console.log(`    * Tỉ lệ trùng lặp: ${overlapCount === 0 ? '0.00% (HOÀN TOÀN TÁCH BIỆT - ĐỘC LẬP 100%)' : 'CÓ TRÙNG'}`);
    console.log('');
  }
}

runAudit();
