const fs = require('fs');

const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Times New Roman', serif; font-size: 12pt; line-height: 1.5; }
    .chem-arrow {
      display: inline-block;
      vertical-align: middle;
      text-align: center;
      line-height: 1;
      margin: 0 4px;
    }
    .chem-arrow .cond {
      display: block;
      font-size: 9pt;
      font-style: italic;
      color: #000;
      line-height: 1.1;
      padding-bottom: 1px;
    }
    .chem-arrow .arrow {
      display: block;
      font-size: 11pt;
      line-height: 1;
      letter-spacing: -1px;
    }
  </style>
</head>
<body>
  <p><b>Dạng 1 (ruby):</b> Tinh bột <ruby style="ruby-align:center; ruby-position:over;">──→<rt style="font-size:8.5pt; font-style:italic; font-weight:normal;">thủy phân</rt></ruby> Glucose <ruby style="ruby-align:center; ruby-position:over;">──→<rt style="font-size:8.5pt; font-style:italic; font-weight:normal;">lên men</rt></ruby> Ethanol</p>
  
  <p><b>Dạng 2 (span inline-block):</b> Tinh bột <span class="chem-arrow"><span class="cond">thủy phân</span><span class="arrow">──→</span></span> Glucose <span class="chem-arrow"><span class="cond">lên men</span><span class="arrow">──→</span></span> Ethanol</p>

  <p><b>Dạng 3 (inline-table):</b> Tinh bột <table style="display:inline-table; vertical-align:middle; text-align:center; border-collapse:collapse; margin:0 3px;"><tr><td style="padding:0; font-size:8.5pt; font-style:italic; text-align:center; line-height:1;">thủy phân</td></tr><tr><td style="padding:0; text-align:center; line-height:1; font-size:11pt;">──→</td></tr></table> Glucose</p>
</body>
</html>`;

fs.writeFileSync('C:/Users/admin/.gemini/antigravity/scratch/hoa12_exam_generator/test_arrow.html', html, 'utf8');
fs.writeFileSync('C:/Users/admin/.gemini/antigravity/scratch/hoa12_exam_generator/test_arrow.doc', html, 'utf8');
console.log('Saved test files');
