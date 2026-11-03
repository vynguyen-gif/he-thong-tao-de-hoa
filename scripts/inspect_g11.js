const AdmZip = require('adm-zip');

const zip = new AdmZip('C:/Users/admin/Desktop/HÓA 10-11-12/MA TRẬN ĐỀ KIỂM TRA Gk1 H11(26-27).docx');
const content = zip.readAsText('word/document.xml');
const rows = content.match(/<w:tr[\s\S]*?<\/w:tr>/g) || [];
console.log('Total rows in Grade 11 docx:', rows.length);
rows.forEach((r, idx) => {
  const cells = (r.match(/<w:tc[\s\S]*?<\/w:tc>/g) || []).map(c => c.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
  console.log('[R' + idx + '] ' + cells.join(' | '));
});
