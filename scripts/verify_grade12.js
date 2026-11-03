const examEngine = require('../services/examEngine');
const suites12 = examEngine.generate5BaseSuites('12');

console.log('=== GRADE 12 BASE SUITES VERIFICATION ===');
suites12.forEach((suite, idx) => {
  const exam = suite.exams[0];
  console.log(`\n--- Suite ${idx + 1} (Code: ${exam.examCode}) ---`);
  console.log('Part 1 count:', exam.parts.part1.length);
  console.log('Part 2 count:', exam.parts.part2.length);
  console.log('Part 3 count:', exam.parts.part3.length);
  console.log('Part 4 count:', exam.parts.part4.length);
  exam.parts.part4.forEach((q, qIdx) => {
    console.log(`  P4 Q${qIdx + 1} [${q.id}] (${q.points}đ): ${q.content.substring(0, 70)}...`);
  });
});
