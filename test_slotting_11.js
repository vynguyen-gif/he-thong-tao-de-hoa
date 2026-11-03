const { questionBank11 } = require('./data/questionBank11');
const p1 = questionBank11.filter(q => q.part === 'part1');

// Categorize all 60 questions into pools matching the 12 slots:
// Pool 1 & 2: Bài 1 (Biết): need 10 questions (2 per suite x 5)
// Pool 3 & 4: Bài 2 (Biết): need 10 questions
// Pool 5: Bài 3 (Biết): need 5 questions
// Pool 6: Bài 4 (Biết): need 5 questions
// Pool 7 & 8: Bài 5 (Biết): need 10 questions
// Pool 9: Bài 2 (Hiểu): need 5 questions
// Pool 10: Bài 5 (Hiểu): need 5 questions
// Pool 11: Bài 3 (VD): need 5 questions
// Pool 12: Bài 5 (VD): need 5 questions

console.log('Total P1 questions:', p1.length);
const byLesson = {};
p1.forEach(q => {
  const k = q.lessonId + '_' + q.level;
  byLesson[k] = (byLesson[k] || []);
  byLesson[k].push(q);
});

for (let k in byLesson) {
  console.log(k, byLesson[k].length);
}
