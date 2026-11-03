const fs = require('fs');
const text = fs.readFileSync('de_cuong_10_full.txt', 'utf8');

const lines = text.split('\n');
lines.forEach((l, i) => {
  if (l.toUpperCase().includes('PHẦN') || l.toUpperCase().includes('BÀI TẬP') || l.toUpperCase().includes('CÂU 1') && l.length < 30) {
    console.log(`Line ${i}: ${l}`);
  }
});
