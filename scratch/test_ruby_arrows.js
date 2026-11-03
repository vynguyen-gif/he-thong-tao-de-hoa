function formatChemArrows(text) {
  if (!text || typeof text !== 'string') return text;
  let str = text;

  // 1. Mũi tên dài thuần túy không có điều kiện: thu gọn lại còn 2 gạch cho ngắn đẹp
  str = str.replace(/-{3,}>|─{3,}→/g, ' ──→ ');

  // 2. Mũi tên chuẩn: -->
  str = str.replace(/\s*-->\s*/g, ' ──→ ');

  // 3. Mũi tên đơn giữa chất / công thức phản ứng: ->
  str = str.replace(/([A-Za-z0-9\)\}\]₀-₉⁺⁻°\u00C0-\u1EF9])\s*->\s*([A-Za-z0-9\(\{\[₀-₉\u00C0-\u1EF9])/g, function(m, p1, p2) {
    return p1 + ' ──→ ' + p2;
  });

  // 4. Mũi tên thuận nghịch (cân bằng hóa học): <=> hoặc <-> hoặc <==>
  str = str.replace(/\s*(?:<=>|<->|<==>)\s*/g, ' ⇌ ');

  // 5. Mũi tên có điều kiện: -(thủy phân)->, ──(thủy phân)──→, --(t°)-->
  str = str.replace(/(?:-{1,4}|─{1,4})\s*[\(\[]([^()\[\]]+)[\)\]]\s*(?:-{1,4}|─{1,4})(?:>|→)/g, function(m, p1) {
    const cond = p1.trim();
    const baseArrow = cond.length > 7 ? '───→' : '──→';
    return ' <ruby class="chem-arrow">' + baseArrow + '<rt>' + cond + '</rt></ruby> ';
  });

  // Thu gọn khoảng trắng thừa
  return str.replace(/[ \t]{2,}/g, ' ');
}

const tests = [
  'Tinh bột -(thủy phân)-> Glucose -(lên men)-> Ethanol',
  'Tinh bột ──(thủy phân)──→ Glucose ──(lên men)──→ Ethanol',
  'Triolein ──(+H2 dư, Ni, t°)──→ X',
  'A --(t°)--> B',
  'C6H10O5 (162) ---> 2 C2H5OH (92)',
  'N2 + 3H2 <=> 2NH3'
];

tests.forEach(t => console.log(formatChemArrows(t)));
