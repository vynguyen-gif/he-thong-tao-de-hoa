const fs = require('fs');
const text = fs.readFileSync('de_cuong_10_full.txt', 'utf8');

const matches = [];
const regex = /(TỰ LUẬN|Tự luận|tự luận|PHẦN IV|Phần IV|phần 4|PHẦN 4)/gi;
let m;
while ((m = regex.exec(text)) !== null) {
  const start = Math.max(0, m.index - 100);
  const end = Math.min(text.length, m.index + 200);
  matches.push(text.substring(start, end));
}

console.log(`Found ${matches.length} matches:`);
matches.slice(0, 10).forEach((mat, idx) => {
  console.log(`\n--- MATCH ${idx + 1} ---`);
  console.log(mat);
});
