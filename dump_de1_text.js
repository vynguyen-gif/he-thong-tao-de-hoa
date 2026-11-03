const fs = require('fs');
const lines = fs.readFileSync('de_cuong_10_full.txt', 'utf8').split('\n');

console.log('=== ĐỀ ÔN TẬP SỐ 1 ===');
console.log(lines.slice(0, 166).join('\n'));
