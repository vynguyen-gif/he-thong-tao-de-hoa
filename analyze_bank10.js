const { questionBank10 } = require('./data/questionBank10');

console.log('Total questions in Bank 10:', questionBank10.length);
const byPart = {};
questionBank10.forEach(q => {
  byPart[q.part] = byPart[q.part] || [];
  byPart[q.part].push(q);
});

Object.keys(byPart).forEach(p => {
  console.log(`Part ${p}: ${byPart[p].length} questions`);
});

console.log('\n--- Part 4 Questions in Bank 10 ---');
byPart.part4.forEach(q => {
  console.log(`${q.id}: ${q.lessonTitle} (${q.level}) -> ${q.content.substring(0, 60)}...`);
});
