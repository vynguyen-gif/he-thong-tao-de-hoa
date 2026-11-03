// test_verify.js
const { generate5BaseSuites } = require('./services/examEngine');

['10', '11', '12'].forEach(g => {
  const suites = generate5BaseSuites(g);
  console.log('=== GRADE', g, '===');
  console.log('Suites count:', suites.length);
  const baseQuestions = [];
  suites.forEach((s, idx) => {
    const baseExam = s.exams[0];
    const qIds = [
      ...baseExam.parts.part1.map(q => q.id),
      ...baseExam.parts.part2.map(q => q.id),
      ...baseExam.parts.part3.map(q => q.id),
      ...baseExam.parts.part4.map(q => q.id)
    ];
    console.log(`Suite ${idx+1} (${baseExam.examCode}): ${qIds.length} questions, ${s.exams.length} mã đề`);
    baseQuestions.push(qIds);
  });

  // Check overlap across 5 suites
  let overlapCount = 0;
  for (let i = 0; i < baseQuestions.length; i++) {
    for (let j = i + 1; j < baseQuestions.length; j++) {
      const intersect = baseQuestions[i].filter(id => baseQuestions[j].includes(id));
      if (intersect.length > 0) {
        console.log(`Overlap between suite ${i+1} and ${j+1}:`, intersect);
        overlapCount += intersect.length;
      }
    }
  }
  console.log('Total overlap across 5 suites for Grade', g, ':', overlapCount, overlapCount === 0 ? '--> PERFECT 0% OVERLAP!' : '--> HAS OVERLAP');
});
