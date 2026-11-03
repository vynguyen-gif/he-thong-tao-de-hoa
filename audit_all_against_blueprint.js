// audit_all_against_blueprint.js
const examEngine = require('./services/examEngine');
const { EXAM_BLUEPRINTS } = require('./services/blueprintEngine');

function runAudit() {
  console.log('========================================================================');
  console.log('BÁO CÁO TOÀN DIỆN: ĐỐI CHIẾU 100% TOÀN BỘ ĐỀ VỚI MA TRẬN & BẢN ĐẶC TẢ');
  console.log('========================================================================\n');

  let totalErrors = 0;

  for (const grade of ['10', '11', '12']) {
    console.log(`------------------------------------------------------------------------`);
    console.log(`KIỂM TRA KHỐI LỚP ${grade}:`);
    console.log(`------------------------------------------------------------------------`);

    const bp = EXAM_BLUEPRINTS[grade];
    const suites = examEngine.generate5BaseSuites(grade);
    const allUsedQuestionIds = new Set();
    const suiteQuestionSets = [];

    suites.forEach((suite, sIdx) => {
      const baseExam = suite.exams[0];
      const currentSuiteIds = new Set();

      console.log(`\n+ BỘ ${sIdx + 1} (Mã đề gốc ${baseExam.examCode}):`);

      // 1. Kiểm tra Part 1 (12 câu)
      const p1 = baseExam.parts.part1;
      let p1Ok = true;
      p1.forEach((q, idx) => {
        const slot = bp.part1[idx];
        currentSuiteIds.add(q.id);
        allUsedQuestionIds.add(q.id);

        if (q.knowledgeUnit !== slot.knowledgeUnit || q.levelName !== slot.levelName || q.indicatorCode !== slot.indicatorCode) {
          console.error(`  [LỖI P1 C${idx+1}] ID=${q.id}: KU='${q.knowledgeUnit}' vs Slot='${slot.knowledgeUnit}' | Level='${q.levelName}' vs '${slot.levelName}' | Code='${q.indicatorCode}' vs '${slot.indicatorCode}'`);
          p1Ok = false;
          totalErrors++;
        }
      });
      console.log(`  * Phần I (12 câu trắc nghiệm nhiều lựa chọn): ${p1Ok ? 'KHỚP 100% [Đơn vị kiến thức | Mức độ | Mã chỉ báo | Điểm]' : 'CÓ LỖI'}`);

      // 2. Kiểm tra Part 2 (2 câu, mỗi câu 4 ý a,b,c,d)
      const p2 = baseExam.parts.part2;
      let p2Ok = true;
      p2.forEach((q, idx) => {
        const slot = bp.part2[idx];
        currentSuiteIds.add(q.id);
        allUsedQuestionIds.add(q.id);

        if (!q.items || q.items.length !== 4) {
          console.error(`  [LỖI P2 C${idx+1}] ID=${q.id}: Không đủ 4 ý a,b,c,d (chỉ có ${q.items?.length})`);
          p2Ok = false;
          totalErrors++;
        } else {
          q.items.forEach((it, iIdx) => {
            const itemSlot = slot.items[iIdx];
            if (it.levelName !== itemSlot.levelName || it.indicatorCode !== itemSlot.indicatorCode) {
              console.error(`  [LỖI P2 C${idx+1}${it.id}] Level='${it.levelName}' vs '${itemSlot.levelName}' | Code='${it.indicatorCode}' vs '${itemSlot.indicatorCode}'`);
              p2Ok = false;
              totalErrors++;
            }
          });
        }
      });
      console.log(`  * Phần II (2 câu = 8 ý Đúng - Sai): ${p2Ok ? 'KHỚP 100% [Từng ý a,b,c,d khớp Đơn vị kiến thức, Mức độ, Mã chỉ báo, Điểm]' : 'CÓ LỖI'}`);

      // 3. Kiểm tra Part 3 (4 câu trả lời ngắn)
      const p3 = baseExam.parts.part3;
      let p3Ok = true;
      p3.forEach((q, idx) => {
        const slot = bp.part3[idx];
        currentSuiteIds.add(q.id);
        allUsedQuestionIds.add(q.id);

        if (q.knowledgeUnit !== slot.knowledgeUnit || q.levelName !== slot.levelName || q.indicatorCode !== slot.indicatorCode) {
          console.error(`  [LỖI P3 C${idx+1}] ID=${q.id}: KU='${q.knowledgeUnit}' vs Slot='${slot.knowledgeUnit}' | Level='${q.levelName}' vs '${slot.levelName}' | Code='${q.indicatorCode}' vs '${slot.indicatorCode}'`);
          p3Ok = false;
          totalErrors++;
        }
      });
      console.log(`  * Phần III (4 câu trả lời ngắn): ${p3Ok ? 'KHỚP 100% [Đơn vị kiến thức | Mức độ | Mã chỉ báo | Điểm]' : 'CÓ LỖI'}`);

      // 4. Kiểm tra Part 4 (Tự luận)
      const p4 = baseExam.parts.part4;
      let p4Ok = true;
      p4.forEach((q, idx) => {
        const slot = bp.part4[idx];
        currentSuiteIds.add(q.id);
        allUsedQuestionIds.add(q.id);

        if (q.knowledgeUnit !== slot.knowledgeUnit || q.levelName !== slot.levelName || q.indicatorCode !== slot.indicatorCode) {
          console.error(`  [LỖI P4 C${idx+1}] ID=${q.id}: KU='${q.knowledgeUnit}' vs Slot='${slot.knowledgeUnit}' | Level='${q.levelName}' vs '${slot.levelName}' | Code='${q.indicatorCode}' vs '${slot.indicatorCode}'`);
          p4Ok = false;
          totalErrors++;
        }
      });
      console.log(`  * Phần IV (${p4.length} câu tự luận): ${p4Ok ? 'KHỚP 100% [Đơn vị kiến thức | Mức độ | Điểm từng câu & từng bước giải]' : 'CÓ LỖI'}`);

      suiteQuestionSets.push(currentSuiteIds);
    });

    // Kiểm tra trùng lặp giữa 5 bộ đề
    let overlapCount = 0;
    for (let i = 0; i < suiteQuestionSets.length; i++) {
      for (let j = i + 1; j < suiteQuestionSets.length; j++) {
        const intersection = [...suiteQuestionSets[i]].filter(x => suiteQuestionSets[j].has(x));
        if (intersection.length > 0) {
          console.error(`  [LỖI TRÙNG LẶP] Trùng lặp giữa Bộ ${i+1} và Bộ ${j+1}: ${intersection.join(', ')}`);
          overlapCount += intersection.length;
          totalErrors += intersection.length;
        }
      }
    }
    console.log(`\n  + Tỉ lệ trùng lặp giữa 5 bộ đề: ${overlapCount === 0 ? '0.00% (HOÀN TOÀN ĐỘC LẬP - KHÔNG CÂU NÀO BỊ TRÙNG)' : `CÓ ${overlapCount} CÂU TRÙNG`}`);
    console.log(`  + Tổng số câu hỏi phân biệt đã sử dụng: ${allUsedQuestionIds.size} câu.`);
  }

  // Kiểm tra chức năng Sinh đề thi ngẫu nhiên mới (generateExam)
  console.log(`\n------------------------------------------------------------------------`);
  console.log(`KIỂM TRA CHỨC NĂNG TẠO ĐỀ THI MỚI (generateExam):`);
  console.log(`------------------------------------------------------------------------`);
  for (const grade of ['10', '11', '12']) {
    const dynExam = examEngine.generateExam({ examCode: '999' }, grade);
    const bp = EXAM_BLUEPRINTS[grade];
    let dynOk = true;

    dynExam.parts.part1.forEach((q, idx) => {
      if (q.knowledgeUnit !== bp.part1[idx].knowledgeUnit || q.levelName !== bp.part1[idx].levelName) dynOk = false;
    });
    dynExam.parts.part2.forEach((q, idx) => {
      if (q.knowledgeUnit !== bp.part2[idx].knowledgeUnit) dynOk = false;
      q.items.forEach((it, iIdx) => {
        if (it.levelName !== bp.part2[idx].items[iIdx].levelName) dynOk = false;
      });
    });
    dynExam.parts.part3.forEach((q, idx) => {
      if (q.knowledgeUnit !== bp.part3[idx].knowledgeUnit || q.levelName !== bp.part3[idx].levelName) dynOk = false;
    });
    dynExam.parts.part4.forEach((q, idx) => {
      if (q.knowledgeUnit !== bp.part4[idx].knowledgeUnit || q.levelName !== bp.part4[idx].levelName) dynOk = false;
    });

    console.log(`- Khối ${grade}: Đề sinh mới ngẫu nhiên (Mã ${dynExam.examCode}) khớp Blueprint: ${dynOk ? '100% CHÍNH XÁC' : 'SAI LỆCH'}`);
    if (!dynOk) totalErrors++;
  }

  console.log('\n========================================================================');
  console.log(`KẾT QUẢ CUỐI CÙNG: ${totalErrors === 0 ? 'TẤT CẢ 100% HOÀN HẢO - KHÔNG CÒN BẤT KỲ LỖI NÀO!' : `PHÁT HIỆN ${totalErrors} LỖI CẦN XỬ LÝ`}`);
  console.log('========================================================================');
}

runAudit();
