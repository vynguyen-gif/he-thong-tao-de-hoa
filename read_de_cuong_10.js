const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const desktopDir = path.join(process.env.USERPROFILE, 'Desktop');
const hoaDir = fs.readdirSync(desktopDir).find(d => d.includes('10-11-12') || d.includes('HOA'));
const pdfFile = path.join(desktopDir, hoaDir, 'De cuong hoa 10 giua ky 1 - HS (2).pdf');

const dataBuffer = fs.readFileSync(pdfFile);
const parser = new PDFParse(new Uint8Array(dataBuffer));
parser.getText().then(res => {
  console.log('Text length:', res.text.length);
  fs.writeFileSync('de_cuong_10_full.txt', res.text, 'utf8');
  console.log('Saved de_cuong_10_full.txt');
  
  // Search for "ĐỀ SỐ 1" or "ĐỀ 1" or "PHẦN 4" or "TỰ LUẬN"
  const lines = res.text.split('\n');
  lines.forEach((line, idx) => {
    if (line.includes('ĐỀ SỐ') || line.includes('ĐỀ ÔN TẬP') || line.includes('PHẦN IV') || line.includes('PHẦN 4') || line.includes('TỰ LUẬN')) {
      console.log(`Line ${idx}: ${line}`);
    }
  });
}).catch(console.error);
