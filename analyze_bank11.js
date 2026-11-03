const { questionBank11 } = require('./data/questionBank11');

console.log('Total questions in Bank 11:', questionBank11.length);
const byPart = {};
questionBank11.forEach(q => {
  byPart[q.part] = byPart[q.part] || [];
  byPart[q.part].push(q);
});

Object.keys(byPart).forEach(p => {
  console.log(`Part ${p}: ${byPart[p].length} questions`);
});

console.log('\n--- Part 4 Questions in Bank 11 ---');
byPart.part4.forEach(q => {
  console.log(`${q.id}: ${q.lessonTitle} (${q.level}) -> ${q.content.substring(0, 60)}...`);
});
