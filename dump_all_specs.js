const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

const desktopDir = path.join(process.env.USERPROFILE, 'Desktop');
const hoaDir = fs.readdirSync(desktopDir).find(d => d.includes('10-11-12') || d.includes('HOA'));
const fullHoaDir = path.join(desktopDir, hoaDir);

// 1. HOA 10 Table 3
{
  const zip = new AdmZip(path.join(fullHoaDir, 'HOÁ 10-MA TRẬN-ĐẶC TẢ -KTGK1-2026.docx'));
  const xml = zip.readAsText('word/document.xml');
  const tblRegex = /<w:tbl[\s\S]*?<\/w:tbl>/g;
  const tables = xml.match(tblRegex) || [];
  const specTbl = tables[2]; // Table 3
  const rowRegex = /<w:tr[\s\S]*?<\/w:tr>/g;
  const rows = specTbl.match(rowRegex) || [];
  
  const extracted = rows.map((row, rIdx) => {
    const cellRegex = /<w:tc[\s\S]*?<\/w:tc>/g;
    const cells = row.match(cellRegex) || [];
    return cells.map(cell => {
      const tMatches = cell.match(/<w:t[^>]*>(.*?)<\/w:t>/g) || [];
      return tMatches.map(t => t.replace(/<[^>]+>/g, '')).join('');
    });
  });
  fs.writeFileSync('spec_hoa10_rows.json', JSON.stringify(extracted, null, 2), 'utf8');
  console.log('Saved spec_hoa10_rows.json, total rows:', extracted.length);
}

// 2. HOA 11 Table 2
{
  const zip = new AdmZip(path.join(fullHoaDir, 'MA TRẬN ĐỀ KIỂM TRA Gk1 H11(26-27).docx'));
  const xml = zip.readAsText('word/document.xml');
  const tblRegex = /<w:tbl[\s\S]*?<\/w:tbl>/g;
  const tables = xml.match(tblRegex) || [];
  const specTbl = tables[1]; // Table 2
  const rowRegex = /<w:tr[\s\S]*?<\/w:tr>/g;
  const rows = specTbl.match(rowRegex) || [];
  
  const extracted = rows.map((row, rIdx) => {
    const cellRegex = /<w:tc[\s\S]*?<\/w:tc>/g;
    const cells = row.match(cellRegex) || [];
    return cells.map(cell => {
      const tMatches = cell.match(/<w:t[^>]*>(.*?)<\/w:t>/g) || [];
      return tMatches.map(t => t.replace(/<[^>]+>/g, '')).join('');
    });
  });
  fs.writeFileSync('spec_hoa11_rows.json', JSON.stringify(extracted, null, 2), 'utf8');
  console.log('Saved spec_hoa11_rows.json, total rows:', extracted.length);
}

// 3. Print PDF 12 lines from pdf12_extracted.txt
const pdf12Text = fs.readFileSync('pdf12_extracted.txt', 'utf8');
const p2Start = pdf12Text.indexOf('II. BẢNG ĐẶC TẢ');
if (p2Start !== -1) {
  fs.writeFileSync('spec_hoa12_text.txt', pdf12Text.substring(p2Start), 'utf8');
  console.log('Saved spec_hoa12_text.txt');
}
