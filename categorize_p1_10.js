const { questionBank10 } = require('./data/questionBank10');

const p1 = questionBank10.filter(q => q.part === 'part1');
console.log('Total P1 questions:', p1.length);

// Check topics
p1.forEach((q, idx) => {
  console.log(`[${idx + 1}] ${q.id} | level=${q.level} | ${q.lessonTitle} | ${q.content.substring(0, 50)}...`);
});
