const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

const desktopDir = path.join(process.env.USERPROFILE, 'Desktop');
const hoaDir = fs.readdirSync(desktopDir).find(d => d.includes('10-11-12') || d.includes('HOA'));
const fullHoaDir = path.join(desktopDir, hoaDir);
console.log('Target directory:', fullHoaDir);

const files = fs.readdirSync(fullHoaDir);
console.log('Files:', files);

files.forEach(f => {
  if (f.endsWith('.docx') && f.toLowerCase().includes('ma tr')) {
    console.log('\n======================================================');
    console.log('PARSING DOCX:', f);
    console.log('======================================================');
    const zip = new AdmZip(path.join(fullHoaDir, f));
    const xml = zip.readAsText('word/document.xml');
    
    // Find all tables <w:tbl>
    const tblRegex = /<w:tbl[\s\S]*?<\/w:tbl>/g;
    const tables = xml.match(tblRegex) || [];
    console.log(`Found ${tables.length} tables`);
    
    tables.forEach((tbl, tIdx) => {
      console.log(`\n--- TABLE ${tIdx + 1} ---`);
      const rowRegex = /<w:tr[\s\S]*?<\/w:tr>/g;
      const rows = tbl.match(rowRegex) || [];
      console.log(`Rows: ${rows.length}`);
      
      // Print first 5 rows
      rows.slice(0, 10).forEach((row, rIdx) => {
        const cellRegex = /<w:tc[\s\S]*?<\/w:tc>/g;
        const cells = row.match(cellRegex) || [];
        const cellTexts = cells.map(cell => {
          const tMatches = cell.match(/<w:t[^>]*>(.*?)<\/w:t>/g) || [];
          return tMatches.map(t => t.replace(/<[^>]+>/g, '')).join('');
        });
        console.log(`Row ${rIdx + 1} [${cells.length} cells]:`, cellTexts.join(' | '));
      });
    });
  }
});
