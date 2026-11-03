const fs = require('fs');

const wordHTML = `<html xmlns:o='urn:schemas-microsoft-com:office:office' 
      xmlns:w='urn:schemas-microsoft-com:office:word' 
      xmlns='http://www.w3.org/TR/REC-html40'>
<head>
  <meta charset='utf-8'>
  <title>Test Arrow Word</title>
  <style>
    body {
      font-family: 'Times New Roman', Times, serif;
      font-size: 12pt;
      line-height: 1.3;
      color: #000;
    }
    ruby.chem-arrow {
      ruby-align: center;
      ruby-position: over;
    }
    ruby.chem-arrow rt {
      font-size: 8pt;
      font-style: italic;
      color: #000;
      font-family: 'Times New Roman', Times, serif;
    }
  </style>
</head>
<body>
  <p><b>Câu 2 (2,00 điểm):</b></p>
  <p>Sơ đồ sản xuất ethanol sinh học từ ngô chứa tinh bột như sau:</p>
  <p style="margin: 8px 0; font-size: 12pt;">
    Tinh bột <ruby class="chem-arrow">───→<rt>thủy phân</rt></ruby> Glucose <ruby class="chem-arrow">───→<rt>lên men</rt></ruby> Ethanol
  </p>
  <p>Một nhà máy sử dụng 10 tấn hạt ngô chứa 65% tinh bột về khối lượng...</p>

  <p><b>Đáp án & Hướng dẫn chấm:</b></p>
  <p>Phương trình hóa học:</p>
  <p>• (C₆H₁₀O₅)ₙ + nH₂O <ruby class="chem-arrow">──→<rt>H⁺, t°</rt></ruby> nC₆H₁₂O₆</p>
  <p>• C₆H₁₂O₆ <ruby class="chem-arrow">───→<rt>lên men</rt></ruby> 2C₂H₅OH + 2CO₂</p>
  <p>• Sơ đồ tính: C₆H₁₀O₅ (162) ──→ 2 C₂H₅OH (92)</p>
</body>
</html>`;

fs.writeFileSync('C:/Users/admin/.gemini/antigravity/scratch/hoa12_exam_generator/test_chem_ruby.doc', wordHTML, 'utf8');
console.log('Saved test_chem_ruby.doc successfully');
