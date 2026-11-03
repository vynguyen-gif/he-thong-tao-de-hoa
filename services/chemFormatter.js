// services/chemFormatter.js
// Bộ chuyển đổi và chuẩn hóa chỉ số công thức hóa học (subscript & superscript) và mũi tên phản ứng

const SUBSCRIPTS = {
  '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄',
  '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉',
  'n': 'ₙ', 'm': 'ₘ', '+': '₊', '-': '₋'
};

const SUPERSCRIPTS = {
  '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
  '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
  '+': '⁺', '-': '⁻'
};

// Chuẩn hóa mũi tên phản ứng hóa học (điều kiện hiển thị phía trên mũi tên, độ dài vừa vặn, chuẩn sư phạm)
function formatChemArrows(text) {
  if (!text || typeof text !== 'string') return text;
  let str = text;

  // 1. Mũi tên có điều kiện phản ứng: -(thủy phân)->, ──(thủy phân)──→, --(t°)-->, -[men]->
  // Đưa điều kiện phản ứng lên phía trên dấu mũi tên (<ruby><rt>điều kiện</rt></ruby>)
  str = str.replace(/(?:-{1,4}|─{1,4})\s*[\(\[]([^()\[\]]+)[\)\]]\s*(?:-{1,4}|─{1,4})(?:>|→)/g, function(m, p1) {
    const cond = p1.trim();
    const baseArrow = cond.length > 7 ? '───→' : '──→';
    return '<ruby class="chem-arrow">' + baseArrow + '<rt>' + cond + '</rt></ruby>';
  });

  // 2. Mũi tên dài thuần túy dạng ASCII (---> hoặc ---->): thu gọn lại còn 2 gạch cho ngắn đẹp
  str = str.replace(/-{3,}>/g, ' ──→ ');

  // 3. Mũi tên chuẩn: -->
  str = str.replace(/\s*-->\s*/g, ' ──→ ');

  // 4. Mũi tên đơn giữa chất / công thức phản ứng: ->
  str = str.replace(/([A-Za-z0-9\)\}\]₀-₉⁺⁻°\u00C0-\u1EF9])\s*->\s*([A-Za-z0-9\(\{\[₀-₉\u00C0-\u1EF9])/g, function(m, p1, p2) {
    return p1 + ' ──→ ' + p2;
  });

  // 5. Mũi tên thuận nghịch (cân bằng hóa học): <=> hoặc <-> hoặc <==>
  str = str.replace(/\s*(?:<=>|<->|<==>)\s*/g, ' ⇌ ');

  // Thu gọn khoảng trắng thừa
  return str.replace(/[ \t]{2,}/g, ' ');
}

// Từ điển thay thế chính xác các chất và ion phổ biến trong đề cương Hóa 12
const FORMULA_REPLACEMENTS = [
  // CTPT & Ester - Lipid
  { re: /\bC2H5COOH\b/g, rep: 'C₂H₅COOH' },
  { re: /\bCH3COOC2H5\b/g, rep: 'CH₃COOC₂H₅' },
  { re: /\(C15H31COO\)3C3H5/g, rep: '(C₁₅H₃₁COO)₃C₃H₅' },
  { re: /\(C17H35COO\)3C3H5/g, rep: '(C₁₇H₃₅COO)₃C₃H₅' },
  { re: /\(C17H33COO\)3C3H5/g, rep: '(C₁₇H₃₃COO)₃C₃H₅' },
  { re: /\bHCOOCH3\b/g, rep: 'HCOOCH₃' },
  { re: /\bHCOOC2H5\b/g, rep: 'HCOOC₂H₅' },
  { re: /\bHCOOC3H7\b/g, rep: 'HCOOC₃H₇' },
  { re: /\bCH3COOCH3\b/g, rep: 'CH₃COOCH₃' },
  { re: /\bCH3COOC3H7\b/g, rep: 'CH₃COOC₃H₇' },
  { re: /\bC2H5COOC2H5\b/g, rep: 'C₂H₅COOC₂H₅' },
  { re: /\bC2H5COOCH3\b/g, rep: 'C₂H₅COOCH₃' },
  { re: /\bC4H8O2\b/g, rep: 'C₄H₈O₂' },
  { re: /\bC3H6O2\b/g, rep: 'C₃H₆O₂' },
  { re: /\bC2H4O2\b/g, rep: 'C₂H₄O₂' },
  { re: /\bC5H10O2\b/g, rep: 'C₅H₁₀O₂' },
  { re: /\bCH3OH\b/g, rep: 'CH₃OH' },
  { re: /\bCH3COOH\b/g, rep: 'CH₃COOH' },
  { re: /\bC2H5OH\b/g, rep: 'C₂H₅OH' },
  { re: /\bC3H7COOH\b/g, rep: 'C₃H₇COOH' },
  { re: /\bC3H7CH2OH\b/g, rep: 'C₃H₇CH₂OH' },
  { re: /\bCH3COONa\b/g, rep: 'CH₃COONa' },
  { re: /\bC17H35COONa\b/g, rep: 'C₁₇H₃₅COONa' },
  { re: /\bC17H35COOH\b/g, rep: 'C₁₇H₃₅COOH' },
  { re: /\bCH3CH2COOCH3\b/g, rep: 'CH₃CH₂COOCH₃' },
  { re: /\bCH3OOCCH3\b/g, rep: 'CH₃OOCCH₃' },
  { re: /\bCH3COC2H5\b/g, rep: 'CH₃COC₂H₅' },
  { re: /\bC6H5COOCH3\b/g, rep: 'C₆H₅COOCH₃' },
  { re: /\bC6H5–COO–CH3\b/g, rep: 'C₆H₅–COO–CH₃' },
  { re: /\bC6H5–OOC–CH=CH2\b/g, rep: 'C₆H₅–OOC–CH=CH₂' },
  { re: /\bC6H5–OOC–C2H5\b/g, rep: 'C₆H₅–OOC–C₂H₅' },
  { re: /\bC2H5–OOC–CH3\b/g, rep: 'C₂H₅–OOC–CH₃' },
  { re: /\bCH3COOCH=CH2\b/g, rep: 'CH₃COOCH=CH₂' },
  { re: /\bHCOOCH=CH2\b/g, rep: 'HCOOCH=CH₂' },
  { re: /\bHCOOCH=CH–CH3\b/g, rep: 'HCOOCH=CH–CH₃' },

  // Xà phòng & chất giặt rửa
  { re: /CH3\[CH2\]10C6H4SO3Na/g, rep: 'CH₃[CH₂]₁₀C₆H₄SO₃Na' },
  { re: /CH3\[CH2\]14COONa/g, rep: 'CH₃[CH₂]₁₄COONa' },
  { re: /CH3\[CH2\]16COONa/g, rep: 'CH₃[CH₂]₁₆COONa' },
  { re: /CH3\[CH2\]16COOH/g, rep: 'CH₃[CH₂]₁₆COOH' },
  { re: /CH3\[CH2\]11OSO3Na/g, rep: 'CH₃[CH₂]₁₁OSO₃Na' },
  { re: /CH3\[CH2\]3COONa/g, rep: 'CH₃[CH₂]₃COONa' },
  { re: /C3H5\(OH\)3/g, rep: 'C₃H₅(OH)₃' },
  { re: /CH3\[CH2\]10CH2OSO3Na/g, rep: 'CH₃[CH₂]₁₀CH₂OSO₃Na' },
  { re: /CH3\[CH2\]14COOK/g, rep: 'CH₃[CH₂]₁₄COOK' },
  { re: /CH3\[CH2\]11C6H4SO3Na/g, rep: 'CH₃[CH₂]₁₁C₆H₄SO₃Na' },
  { re: /CH3\[CH2\]14COOH/g, rep: 'CH₃[CH₂]₁₄COOH' },
  { re: /R–OSO3Na/g, rep: 'R–OSO₃Na' },
  { re: /R-OSO3Na/g, rep: 'R-OSO₃Na' },
  { re: /R-C6H4-SO3Na/g, rep: 'R-C₆H₄-SO₃Na' },
  { re: /R–C6H4–SO3Na/g, rep: 'R–C₆H₄–SO₃Na' },

  // Carbohydrate
  { re: /\bC6H12O6\b/g, rep: 'C₆H₁₂O₆' },
  { re: /\(C6H10O5\)n/g, rep: '(C₆H₁₀O₅)ₙ' },
  { re: /\bC12H22O11\b/g, rep: 'C₁₂H₂₂O₁₁' },
  { re: /\[C6H7O2\(OH\)3\]n/g, rep: '[C₆H₇O₂(OH)₃]ₙ' },
  { re: /\[C6H5O2\(OH\)3\]n/g, rep: '[C₆H₅O₂(OH)₃]ₙ' },
  { re: /\[C6H8O2\(OH\)3\]n/g, rep: '[C₆H₈O₂(OH)₃]ₙ' },
  { re: /\[C6H7O3\(OH\)2\]n/g, rep: '[C₆H₇O₃(OH)₂]ₙ' },
  { re: /\bCn\(H2O\)m\b/g, rep: 'Cₙ(H₂O)ₘ' },
  { re: /\bCn\(H2O\)n\b/g, rep: 'Cₙ(H₂O)ₙ' },
  { re: /2n C2H5OH/g, rep: '2n C₂H₅OH' },
  { re: /2n CO2/g, rep: '2n CO₂' },
  { re: /nC12H22O11/g, rep: 'nC₁₂H₂₂O₁₁' },
  { re: /2C6H12O6/g, rep: '2C₆H₁₂O₆' },

  // Amine, Amino acid, Peptide
  { re: /\bCH3NH2\b/g, rep: 'CH₃NH₂' },
  { re: /\bC2H5NH2\b/g, rep: 'C₂H₅NH₂' },
  { re: /\bCH3NH3Cl\b/g, rep: 'CH₃NH₃Cl' },
  { re: /\bC3H9N\b/g, rep: 'C₃H₉N' },
  { re: /\(CH3\)3N/g, rep: '(CH₃)₃N' },
  { re: /\bC6H5NH2\b/g, rep: 'C₆H₅NH₂' },
  { re: /\bC13H21O3N\b/g, rep: 'C₁₃H₂₁O₃N' },
  { re: /\bC10H14N2\b/g, rep: 'C₁₀H₁₄N₂' },
  { re: /\bC9H8O4\b/g, rep: 'C₉H₈O₄' },
  { re: /\bC6H4\(COOH\)2\b/g, rep: 'C₆H₄(COOH)₂' },
  { re: /\b2-HOC6H4COOH\b/g, rep: '2-HOC₆H₄COOH' },
  { re: /\bCH3CH2CH2NH2\b/g, rep: 'CH₃CH₂CH₂NH₂' },
  { re: /\bCH3CH\(NH2\)CH3\b/g, rep: 'CH₃CH(NH₂)CH₃' },
  { re: /\bCH3NHCH2CH3\b/g, rep: 'CH₃NHCH₂CH₃' },
  { re: /\bCH3-NH-CH2-CH2-CH3\b/g, rep: 'CH₃-NH-CH₂-CH₂-CH₃' },
  { re: /\bH2NCH2COOCH3\b/g, rep: 'H₂NCH₂COOCH₃' },
  { re: /\bH2NCH2COOH\b/g, rep: 'H₂NCH₂COOH' },
  { re: /\bHOCH2COOH\b/g, rep: 'HOCH₂COOH' },
  { re: /\bH2N-CH2-COOH\b/g, rep: 'H₂N-CH₂-COOH' },
  { re: /\bH2N-CH2-COOCH3\b/g, rep: 'H₂N-CH₂-COOCH₃' },
  { re: /\b\+H3N-CH2-COO-\b/g, rep: '⁺H₃N-CH₂-COO⁻' },
  { re: /\bH3N\+CH2COO-\b/g, rep: 'H₃N⁺CH₂COO⁻' },
  { re: /–NH2\b/g, rep: '–NH₂' },
  { re: /-NH2\b/g, rep: '-NH₂' },
  { re: /\[Cu\(CH3NH2\)4\]\(OH\)2/g, rep: '[Cu(CH₃NH₂)₄](OH)₂' },
  { re: /\[Cu\(C2H5NH2\)4\]2\+/g, rep: '[Cu(C₂H₅NH₂)₄]²⁺' },
  { re: /\[Cu\(NH3\)4\]\(OH\)2/g, rep: '[Cu(NH₃)₄](OH)₂' },
  { re: /\[Ag\(NH3\)2\]\+/g, rep: '[Ag(NH₃)₂]⁺' },
  { re: /\[C6H5N2\]\+Cl-/g, rep: '[C₆H₅N₂]⁺Cl⁻' },

  // Vô cơ thường gặp
  { re: /\bCu\(OH\)2\b/g, rep: 'Cu(OH)₂' },
  { re: /\bCu2O\b/g, rep: 'Cu₂O' },
  { re: /\bAgNO3\/NH3\b/g, rep: 'AgNO₃/NH₃' },
  { re: /\bAgNO3\b/g, rep: 'AgNO₃' },
  { re: /\bH2SO4\b/g, rep: 'H₂SO₄' },
  { re: /\bHNO3\b/g, rep: 'HNO₃' },
  { re: /\bHNO2\b/g, rep: 'HNO₂' },
  { re: /\bFeCl3\b/g, rep: 'FeCl₃' },
  { re: /\bFe\(OH\)3\b/g, rep: 'Fe(OH)₃' },
  { re: /\bCuSO4\b/g, rep: 'CuSO₄' },
  { re: /\bCuCl2\b/g, rep: 'CuCl₂' },
  { re: /\bKMnO4\b/g, rep: 'KMnO₄' },
  { re: /\bCO2\b/g, rep: 'CO₂' },
  { re: /\bH2O\b/g, rep: 'H₂O' },
  { re: /\bNH3\b/g, rep: 'NH₃' },
  { re: /\bN2\b/g, rep: 'N₂' },
  { re: /\bH2\b/g, rep: 'H₂' },
  { re: /\bI2\b/g, rep: 'I₂' },
  { re: /\bBr2\/H2O\b/g, rep: 'Br₂/H₂O' },
  { re: /\bBr2\b/g, rep: 'Br₂' },
  { re: /\bO2\b/g, rep: 'O₂' },

  // Cation / Anion / Đơn vị & Kí hiệu
  { re: /\bFe2\+\b/g, rep: 'Fe²⁺' },
  { re: /\bFe3\+\b/g, rep: 'Fe³⁺' },
  { re: /\bCu2\+\b/g, rep: 'Cu²⁺' },
  { re: /\bCa2\+\b/g, rep: 'Ca²⁺' },
  { re: /\bBa2\+\b/g, rep: 'Ba²⁺' },
  { re: /\bMg2\+\b/g, rep: 'Mg²⁺' },
  { re: /\bAl3\+\b/g, rep: 'Al³⁺' },
  { re: /\bNH4\+\b/g, rep: 'NH₄⁺' },
  { re: /\bH3O\+\b/g, rep: 'H₃O⁺' },
  { re: /\bH\+\b/g, rep: 'H⁺' },
  { re: /\bOH-\b/g, rep: 'OH⁻' },
  { re: /\bCl-\b/g, rep: 'Cl⁻' },
  { re: /\bBr-\b/g, rep: 'Br⁻' },
  { re: /\bI-\b/g, rep: 'I⁻' },
  { re: /\bNO3-\b/g, rep: 'NO₃⁻' },
  { re: /\bNO2-\b/g, rep: 'NO₂⁻' },
  { re: /\bSO42-\b/g, rep: 'SO₄²⁻' },
  { re: /\bSO32-\b/g, rep: 'SO₃²⁻' },
  { re: /\bCO32-\b/g, rep: 'CO₃²⁻' },
  { re: /\bPO43-\b/g, rep: 'PO₄³⁻' },
  { re: /\bO2-\b/g, rep: 'O²⁻' },
  { re: /\bS2-\b/g, rep: 'S²⁻' },
  { re: /\bXY2-\b/g, rep: 'XY₂⁻' },
  { re: /\bV m3\b/g, rep: 'V m³' },
  { re: /\bm3\b/g, rep: 'm³' },
  { re: /\b38o\b/g, rep: '38°' },
  { re: /\bt0\b/g, rep: 't°' },
  { re: /, t[o0]\b/g, rep: ', t°' },
  { re: /\(t[o0]\)/g, rep: '(t°)' },
  { re: /\(Ni, t[o0]\)/g, rep: '(Ni, t°)' },
  { re: /\(H\+, t[o0]\)/g, rep: '(H⁺, t°)' },
  { re: /Ni, t[o0]\b/g, rep: 'Ni, t°' },
  { re: /HCl, t[o0]\b/g, rep: 'HCl, t°' },
  { re: /NaOH.*, t[o0]\b/g, rep: 'NaOH (dư), t°' },
  { re: /0–5oC/g, rep: '0–5°C' },
  { re: /0-5°C/g, rep: '0–5°C' },
  { re: /0–5°C/g, rep: '0–5°C' },
  { re: /alpha-amylase/g, rep: 'α-amylase' },
  { re: /alpha-amino/g, rep: 'α-amino' },
  { re: /alpha-glucose/g, rep: 'α-glucose' },
  { re: /beta-glucose/g, rep: 'β-glucose' },
  { re: /alpha-1,4-glycoside/g, rep: 'α-1,4-glycoside' },
  { re: /beta-1,4-glycoside/g, rep: 'β-1,4-glycoside' },
  { re: /alpha-1,6-glycoside/g, rep: 'α-1,6-glycoside' }
];

// Hàm format toàn diện chuỗi văn bản bất kì
function formatChem(text) {
  if (!text || typeof text !== 'string') return text;

  let str = text;

  // Chuẩn hóa dấu mũi tên phản ứng hóa học
  str = formatChemArrows(str);

  // Áp dụng từ điển chất đặc thù
  for (const item of FORMULA_REPLACEMENTS) {
    str = str.replace(item.re, item.rep);
  }

  // Format electron configuration: 1s2 -> 1s², 2p6 -> 2p⁶, 3d10 -> 3d¹⁰
  str = str.replace(/\b([1-7][spdf])([0-9]{1,2})\b/g, (match, orb, exponent) => {
    const supExp = exponent.split('').map(d => SUPERSCRIPTS[d] || d).join('');
    return orb + supExp;
  });

  // Regex thông minh bổ sung: Biến các số sau ký hiệu nguyên tố hóa học thành chỉ số dưới nếu chưa được format
  // Ví dụ: C2H5OH -> C₂H₅OH, Al2(SO4)3 -> Al₂(SO₄)₃, Na2CO3 -> Na₂CO₃
  str = str.replace(/([A-Z][a-z]?|\))([0-9]+)/g, (match, prefix, digits) => {
    // Không chuyển nếu là tiền tố câu hỏi hoặc số thập phân (như Câu 1, 16.2g, 90%, 0.15)
    if (prefix === 'Câu ' || prefix === 'C' && digits.length >= 3) return match;
    const subDigits = digits.split('').map(d => SUBSCRIPTS[d] || d).join('');
    return prefix + subDigits;
  });

  return str;
}

// Format toàn bộ object câu hỏi
function formatQuestionObject(q) {
  if (!q) return q;
  const cloneQ = { ...q };

  if (cloneQ.content) cloneQ.content = formatChem(cloneQ.content);
  if (cloneQ.explanation) cloneQ.explanation = formatChem(cloneQ.explanation);
  const rawAns = cloneQ.correctAnswer || cloneQ.answer;
  if (rawAns !== undefined && rawAns !== null) {
    cloneQ.correctAnswer = formatChem(String(rawAns));
    cloneQ.answer = cloneQ.correctAnswer;
  }

  if (Array.isArray(cloneQ.options)) {
    cloneQ.options = cloneQ.options.map(opt => formatChem(opt));
  }

  if (Array.isArray(cloneQ.items)) {
    cloneQ.items = cloneQ.items.map(it => ({
      ...it,
      text: formatChem(it.text),
      explanation: formatChem(it.explanation)
    }));
  }

  return cloneQ;
}

module.exports = {
  formatChem,
  formatChemArrows,
  formatQuestionObject,
  SUBSCRIPTS,
  SUPERSCRIPTS
};
