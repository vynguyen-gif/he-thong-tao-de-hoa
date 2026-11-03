const fs = require('fs');

// Check Grade 11
const spec11 = JSON.parse(fs.readFileSync('spec_hoa11_rows.json', 'utf8'));
console.log('=== GRADE 11 SPEC ROWS WITH TỰ LUẬN (Col 8) ===');
spec11.forEach((r, idx) => {
  const col9 = r[r.length - 1]; // last column
  if (col9 && col9.trim() !== '' && col9.trim() !== '(9)' && col9.trim() !== 'Tự luận') {
    console.log(`Row ${idx + 1}: ${r[1] || ''} | ${r[2] || ''} | ${r[3] || ''} | Col 9 = "${col9}"`);
    console.log(`   Yêu cầu: ${r[4]}`);
  }
});

// Check Grade 10
const spec10 = JSON.parse(fs.readFileSync('spec_hoa10_rows.json', 'utf8'));
console.log('\n=== GRADE 10 SPEC ROWS WITH TỰ LUẬN (Col 9) ===');
spec10.forEach((r, idx) => {
  const col9 = r[r.length - 1];
  if (col9 && col9.trim() !== '' && col9.trim() !== '(9)' && col9.trim() !== 'Tự luận') {
    console.log(`Row ${idx + 1}: ${r[1] || ''} | ${r[2] || ''} | ${r[3] || ''} | Col 9 = "${col9}"`);
    console.log(`   Yêu cầu: ${r[4]}`);
  }
});
