const { questionBank10 } = require('./data/questionBank10');
const examEngine = require('./services/examEngine');

const suites = examEngine.generate5BaseSuites('10');
suites.forEach((s, sIdx) => {
  console.log(`\n=== GRADE 10 - SUITE ${sIdx + 1} (MÃ ${s.exams[0].examCode}) - PART 1 ===`);
  const p1 = s.exams[0].parts.part1;
  p1.forEach((q, qIdx) => {
    console.log(`C${qIdx + 1} [id: ${q.id}]: level=${q.level}, lesson=${q.lessonTitle}`);
  });
});
