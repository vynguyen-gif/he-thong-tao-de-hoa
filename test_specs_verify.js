const examEngine = require('./services/examEngine');

for (const g of ['10', '11', '12']) {
  console.log(`\n=================== VERIFYING GRADE ${g} ===================`);
  const suites = examEngine.generate5BaseSuites(g);
  console.log(`Generated ${suites.length} suites for Grade ${g}`);
  const baseExam = suites[0].exams[0];
  console.log(`Exam Code: ${baseExam.examCode}, Title: ${baseExam.title}`);
  console.log(`matrixHtml length: ${baseExam.matrixHtml?.length || 0}`);
  console.log(`specHtml length: ${baseExam.specHtml?.length || 0}`);
  
  // Verify 9 columns in specHtml
  const spec = baseExam.specHtml;
  const hasCol1 = spec.includes('(1)');
  const hasCol6 = spec.includes('Nhiều lựa chọn');
  const hasCol7 = spec.includes('Đúng');
  const hasCol8 = spec.includes('Trả lời ngắn');
  const hasCol9 = spec.includes('Tự luận');
  console.log(`Col 1 (TT): ${hasCol1}, Col 6 (Part I): ${hasCol6}, Col 7 (Part II): ${hasCol7}, Col 8 (Part III): ${hasCol8}, Col 9 (Part IV): ${hasCol9}`);
  if (!hasCol1 || !hasCol6 || !hasCol7 || !hasCol8 || !hasCol9) {
    console.error(`FAILED: Specification does not have all 9 columns for Grade ${g}`);
    process.exit(1);
  }
}

console.log('\n>>> ALL 3 GRADES SPECIFICATIONS (10, 11, 12) VERIFIED 100% SUCCESSFUL! <<<');
