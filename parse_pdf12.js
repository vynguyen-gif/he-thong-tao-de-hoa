const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const desktopDir = path.join(process.env.USERPROFILE, 'Desktop');
const hoaDir = fs.readdirSync(desktopDir).find(d => d.includes('10-11-12') || d.includes('HOA'));
const pdfFile = path.join(desktopDir, hoaDir, 'MA TRẬN VÀ ĐẶC TẢ MA TRẬN KTRA GK1-HÓA 12-25-26.pdf');

const dataBuffer = fs.readFileSync(pdfFile);
const parser = new PDFParse(new Uint8Array(dataBuffer));
parser.getText().then(res => {
  console.log('Text length:', res.text.length);
  fs.writeFileSync('pdf12_extracted.txt', res.text, 'utf8');
  console.log('Saved to pdf12_extracted.txt');
  console.log('First 2000 chars:\n', res.text.substring(0, 2000));
}).catch(console.error);
