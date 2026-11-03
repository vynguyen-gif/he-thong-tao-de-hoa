const fs = require('fs');
const text = fs.readFileSync('de_cuong_10_full.txt', 'utf8');

const regex = /(phổ khối lượng|đồng vị|nguyên tử khối trung bình)/gi;
let m;
const results = [];
while ((m = regex.exec(text)) !== null) {
  const start = Math.max(0, m.index - 80);
  const end = Math.min(text.length, m.index + 250);
  results.push(text.substring(start, end));
}

console.log(`Found ${results.length} occurrences:`);
results.forEach((r, i) => {
  console.log(`\n[${i+1}] ${r.replace(/\s+/g, ' ').trim()}`);
});
