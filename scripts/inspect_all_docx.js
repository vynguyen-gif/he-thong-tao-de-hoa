const AdmZip = require('adm-zip');

function dumpDocx(file) {
  console.log('====================================');
  console.log('FILE:', file);
  console.log('====================================');
  const zip = new AdmZip(file);
  const content = zip.readAsText('word/document.xml');
  const rows = content.match(/<w:tr[\s\S]*?<\/w:tr>/g) || [];
  rows.forEach((r, idx) => {
    const cells = (r.match(/<w:tc[\s\S]*?<\/w:tc>/g) || []).map(c => c.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
    console.log('[R' + idx + '] ' + cells.join(' | '));
  });
}

try {
  dumpDocx('C:/Users/admin/Desktop/HÓA 10-11-12/HOÁ 10-MA TRẬN-ĐẶC TẢ -KTGK1-2026.docx');
  dumpDocx('C:/Users/admin/Desktop/HÓA 10-11-12/MA TRẬN ĐỀ KIỂM TRA Gk1 H11(26-27).docx');
} catch (e) {
  console.error(e);
}
