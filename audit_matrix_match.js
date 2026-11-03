const examEngine = require('./services/examEngine');

function auditMatrixMatch() {
  console.log('========================================================================');
  console.log('KIỂM TRA ĐỐI CHIẾU NỘI DUNG TỪNG CÂU VỚI MA TRẬN & BẢN ĐẶC TẢ');
  console.log('========================================================================\n');

  // 1. Grade 10
  console.log('--- KHỐI 10 ---');
  const suites10 = examEngine.generate5BaseSuites('10');
  suites10.forEach((s, idx) => {
    const exam = s.exams[0];
    console.log(`\nBộ ${idx + 1} (Mã đề gốc ${exam.examCode}):`);
    
    // Check Part IV:
    const p4 = exam.parts.part4;
    console.log(`  * Phần IV (Tự luận): ${p4.length} câu`);
    p4.forEach((q, qIdx) => {
      // Check sub-items: must have a and b, NO c
      const hasA = q.content.includes('a)');
      const hasB = q.content.includes('b)');
      const hasC = q.content.includes('c)');
      console.log(`    Câu ${qIdx + 1} [${q.id}]:`);
      console.log(`      - Tiêu đề/chủ đề: ${q.lessonTitle}`);
      console.log(`      - Các ý hỏi: a: ${hasA}, b: ${hasB}, c (không được có): ${hasC}`);
      console.log(`      - Mức độ: ${q.level}, Điểm: ${q.points || 1.0}đ`);
      console.log(`      - Nội dung tóm tắt: ${q.content.substring(0, 80).replace(/\n/g, ' ')}...`);
    });

    // Check Part I (C1 to C12 mapping):
    const p1 = exam.parts.part1;
    console.log(`  * Phần I (Trắc nghiệm 12 câu):`);
    console.log(`    C1 (Biết - TPNT): ${p1[0].content.substring(0, 40)}...`);
    console.log(`    C2 (Biết - NTHH, đồng vị): ${p1[1].content.substring(0, 40)}...`);
    console.log(`    C3 (Biết - Cấu trúc vỏ e): ${p1[2].content.substring(0, 40)}...`);
    console.log(`    C4,5 (Biết - Cấu tạo BTH): ${p1[3].content.substring(0, 30)}... | ${p1[4].content.substring(0, 30)}...`);
    console.log(`    C6,7 (Biết - Xu hướng BTH): ${p1[5].content.substring(0, 30)}... | ${p1[6].content.substring(0, 30)}...`);
    console.log(`    C8 (Hiểu - Vỏ e): ${p1[7].content.substring(0, 40)}...`);
    console.log(`    C9 (Hiểu - Cấu tạo BTH): ${p1[8].content.substring(0, 40)}...`);
    console.log(`    C10 (Hiểu - Xu hướng BTH): ${p1[9].content.substring(0, 40)}...`);
    console.log(`    C11 (VD - TPNT): ${p1[10].content.substring(0, 40)}...`);
    console.log(`    C12 (VD - Xu hướng BTH): ${p1[11].content.substring(0, 40)}...`);
  });

  // 2. Grade 11
  console.log('\n\n--- KHỐI 11 ---');
  const suites11 = examEngine.generate5BaseSuites('11');
  suites11.forEach((s, idx) => {
    const exam = s.exams[0];
    console.log(`\nBộ ${idx + 1} (Mã đề gốc ${exam.examCode}):`);
    const p4 = exam.parts.part4;
    console.log(`  * Phần IV (Tự luận): ${p4.length} câu`);
    p4.forEach((q, qIdx) => {
      console.log(`    Câu ${qIdx + 1} [${q.id}]:`);
      console.log(`      - Chủ đề: ${q.lessonTitle}`);
      console.log(`      - Mức độ: ${q.level}, Điểm: ${q.points}đ`);
      console.log(`      - Nội dung tóm tắt: ${q.content.substring(0, 80).replace(/\n/g, ' ')}...`);
    });
  });

  // 3. Grade 12
  console.log('\n\n--- KHỐI 12 ---');
  const suites12 = examEngine.generate5BaseSuites('12');
  suites12.forEach((s, idx) => {
    const exam = s.exams[0];
    console.log(`\nBộ ${idx + 1} (Mã đề gốc ${exam.examCode}):`);
    const p4 = exam.parts.part4;
    console.log(`  * Phần IV (Tự luận): ${p4.length} câu`);
    p4.forEach((q, qIdx) => {
      console.log(`    Câu ${qIdx + 1} [${q.id}]:`);
      console.log(`      - Chủ đề: ${q.lessonTitle}`);
      console.log(`      - Mức độ: ${q.level}, Điểm: ${q.points}đ`);
      console.log(`      - Nội dung tóm tắt: ${q.content.substring(0, 80).replace(/\n/g, ' ')}...`);
    });
  });
}

auditMatrixMatch();
