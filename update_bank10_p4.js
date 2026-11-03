const fs = require('fs');
const path = require('path');

const bankPath = path.join(__dirname, 'data', 'questionBank10.js');
let bankText = fs.readFileSync(bankPath, 'utf8');

const startMarker = '// PHẦN IV: TỰ LUẬN (3 CÂU / ĐỀ => 15 CÂU CHO 5 BỘ ĐỀ GỐC)';
const sIdx = bankText.indexOf(startMarker);

if (sIdx === -1) {
  console.error('Marker not found!');
  process.exit(1);
}

// Build JSON-safe or string-escaped content
const newPart4 = `// PHẦN IV: TỰ LUẬN (3 CÂU / ĐỀ => 15 CÂU CHO 5 BỘ ĐỀ GỐC)
  // Khớp 100% Ma trận & Bản đặc tả chuẩn:
  // - Câu 1: Đồng vị & Phổ khối lượng (Ý a: Hiểu - 0,5đ; Ý b: Vận dụng - 0,5đ)
  // - Câu 2: Cấu trúc vỏ e & Vị trí BTH (Ý a: Hiểu - 0,5đ; Ý b: Vận dụng - 0,5đ)
  // - Câu 3: Xu hướng biến đổi tính chất & PTHH minh họa (Ý a: Hiểu - 0,5đ; Ý b: Vận dụng - 0,5đ)
  // =========================================================================

  // --- BỘ 1 (MÃ 101) ---
  {
    id: "g10_p4_s1_c1",
    lessonId: "chude1_dongvi",
    lessonTitle: "Chủ đề 1: Phổ khối lượng và đồng vị của Neon",
    part: "part4",
    level: "hieu_vd",
    category: "tinh_toan",
    code: "H10.1.2",
    points: 1.0,
    generator: () => {
      const variants = [
        { name: "Neon (Ne)", d1: 20, pct1: 90.48, d2: 21, pct2: 0.27, d3: 22, pct3: 9.25, avg: "20,19" },
        { name: "Magnesium (Mg)", d1: 24, pct1: 78.99, d2: 25, pct2: 10.00, d3: 26, pct3: 11.01, avg: "24,32" },
        { name: "Silicon (Si)", d1: 28, pct1: 92.23, d2: 29, pct2: 4.67, d3: 30, pct3: 3.10, avg: "28,11" }
      ];
      const v = variants[Math.floor(Math.random() * variants.length)];
      return {
        content: "Tỉ lệ phần trăm số nguyên tử các đồng vị của " + v.name + " được xác định theo phổ khối lượng như sau: đồng vị " + v.d1 + " (chiếm " + v.pct1 + "%), đồng vị " + v.d2 + " (chiếm " + v.pct2 + "%) và đồng vị " + v.d3 + " (chiếm " + v.pct3 + "%).\\na) Dựa vào phổ khối lượng, cho biết " + v.name + " có bao nhiêu đồng vị bền trong tự nhiên? Nêu số khối và phần trăm số nguyên tử tương ứng của mỗi đồng vị.\\nb) Tính nguyên tử khối trung bình của " + v.name + " (kết quả làm tròn đến hàng phần trăm).",
        correctAnswer: "a) 3 đồng vị; b) A_tb = " + v.avg,
        explanation: "a) Dựa vào phổ khối lượng, nguyên tố có 3 đồng vị bền:\\n   • Đồng vị " + v.d1 + ": chiếm " + v.pct1 + "%\\n   • Đồng vị " + v.d2 + ": chiếm " + v.pct2 + "%\\n   • Đồng vị " + v.d3 + ": chiếm " + v.pct3 + "%\\nb) Nguyên tử khối trung bình:\\n   A_tb = (" + v.d1 + " × " + v.pct1 + " + " + v.d2 + " × " + v.pct2 + " + " + v.d3 + " × " + v.pct3 + ") / 100 = " + v.avg + " amu."
      };
    },
    content: "Tỉ lệ phần trăm số nguyên tử các đồng vị của neon (Ne) được xác định theo phổ khối lượng như sau: đồng vị ²⁰Ne (chiếm 90,48%), đồng vị ²¹Ne (chiếm 0,27%) và đồng vị ²²Ne (chiếm 9,25%).\\na) Dựa vào phổ khối lượng, cho biết nguyên tố Neon có bao nhiêu đồng vị bền trong tự nhiên? Nêu số khối và phần trăm số nguyên tử tương ứng của mỗi đồng vị.\\nb) Tính nguyên tử khối trung bình của Neon (kết quả làm tròn đến hàng phần trăm).",
    correctAnswer: "a) 3 đồng vị bền: ²⁰Ne (90,48%), ²¹Ne (0,27%), ²²Ne (9,25%); b) A_tb = 20,19 amu",
    explanation: "a) Dựa vào phổ khối lượng, nguyên tố Neon có 3 đồng vị bền trong tự nhiên:\\n   • Đồng vị ²⁰Ne: số khối A = 20, chiếm 90,48% số nguyên tử.\\n   • Đồng vị ²¹Ne: số khối A = 21, chiếm 0,27% số nguyên tử.\\n   • Đồng vị ²²Ne: số khối A = 22, chiếm 9,25% số nguyên tử.\\nb) Nguyên tử khối trung bình của Neon:\\n   A_tb = (20 × 90,48 + 21 × 0,27 + 22 × 9,25) / 100 = 2018,77 / 100 ≈ 20,19 (amu)."
  },
  {
    id: "g10_p4_s1_c2",
    lessonId: "chude1_voelectron",
    lessonTitle: "Chủ đề 1: Cấu trúc vỏ electron và vị trí trong BTH",
    part: "part4",
    level: "hieu_vd",
    category: "lythuyet",
    code: "H10.1.3",
    points: 1.0,
    content: "Cho hai nguyên tử nguyên tố X có số hiệu nguyên tử Z = 12 và nguyên tố Y có Z = 17.\\na) Viết cấu hình electron của nguyên tử X và Y. Cho biết X, Y là nguyên tố s, p, d hay f; là kim loại hay phi kim?\\nb) Xác định vị trí (ô số, chu kì, nhóm) của X và Y trong bảng tuần hoàn và giải thích ngắn gọn.",
    correctAnswer: "X (Z=12): [Ne] 3s² (nguyên tố s, kim loại, ô 12, chu kì 3, nhóm IIA); Y (Z=17): [Ne] 3s² 3p⁵ (nguyên tố p, phi kim, ô 17, chu kì 3, nhóm VIIA)",
    explanation: "a) Cấu hình electron và phân loại nguyên tố:\\n   • Nguyên tố X (Z = 12): 1s² 2s² 2p⁶ 3s² (hoặc [Ne] 3s²). Electron cuối cùng điền vào phân lớp s nên X là nguyên tố s; có 2 electron lớp ngoài cùng nên X là kim loại.\\n   • Nguyên tố Y (Z = 17): 1s² 2s² 2p⁶ 3s² 3p⁵ (hoặc [Ne] 3s² 3p⁵). Electron cuối cùng điền vào phân lớp p nên Y là nguyên tố p; có 7 electron lớp ngoài cùng nên Y là phi kim.\\nb) Vị trí trong bảng tuần hoàn:\\n   • X: Ô số 12 (do Z = 12); Chu kì 3 (do có 3 lớp electron); Nhóm IIA (do có 2 electron hóa trị ở phân lớp s ngoài cùng).\\n   • Y: Ô số 17 (do Z = 17); Chu kì 3 (do có 3 lớp electron); Nhóm VIIA (do có 7 electron hóa trị ở phân lớp s và p ngoài cùng)."
  },
  {
    id: "g10_p4_s1_c3",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Xu hướng biến đổi tính chất & PTHH minh họa",
    part: "part4",
    level: "hieu_vd",
    category: "lythuyet",
    code: "H10.2.2",
    points: 1.0,
    content: "Cho các nguyên tố thuộc chu kì 3: ₁₁Na, ₁₂Mg, ₁₃Al.\\na) So sánh bán kính nguyên tử và tính kim loại của Na, Mg, Al. Giải thích ngắn gọn xu hướng biến đổi từ trái sang phải trong chu kì.\\nb) Viết công thức oxide cao nhất của Na và Mg. Viết các phương trình hóa học khi cho từng oxide này tác dụng với dung dịch hydrochloric acid (HCl).",
    correctAnswer: "a) Bán kính: Na > Mg > Al; Tính kim loại: Na > Mg > Al; b) Oxide: Na₂O, MgO; PTHH: Na₂O + 2HCl -> 2NaCl + H₂O; MgO + 2HCl -> MgCl₂ + H₂O",
    explanation: "a) So sánh và giải thích xu hướng biến đổi:\\n   • Trong chu kì 3 theo chiều tăng của điện tích hạt nhân (từ Na đến Al), số lớp electron không đổi nhưng điện tích hạt nhân tăng làm lực hút giữa hạt nhân và electron ngoài cùng tăng, do đó bán kính nguyên tử giảm dần: Na > Mg > Al.\\n   • Bán kính giảm và điện tích hạt nhân tăng làm khả năng nhường electron giảm, do đó tính kim loại giảm dần: Na > Mg > Al.\\nb) Công thức oxide cao nhất và PTHH:\\n   • Na₂O và MgO.\\n   • PTHH: Na₂O + 2HCl -> 2NaCl + H₂O\\n   • PTHH: MgO + 2HCl -> MgCl₂ + H₂O"
  },

  // --- BỘ 2 (MÃ 201) ---
  {
    id: "g10_p4_s2_c1",
    lessonId: "chude1_dongvi",
    lessonTitle: "Chủ đề 1: Phổ khối lượng và đồng vị của Silver",
    part: "part4",
    level: "hieu_vd",
    category: "tinh_toan",
    code: "H10.1.2",
    points: 1.0,
    content: "Phổ khối lượng của nguyên tố silver (Ag) cho thấy trong tự nhiên silver có hai đồng vị bền là ¹⁰⁷Ag (chiếm 51,84%) và ¹⁰⁹Ag (chiếm 48,16%).\\na) Dựa vào phổ khối lượng, cho biết nguyên tố Silver có bao nhiêu đồng vị bền và nêu số khối cùng phần trăm số nguyên tử tương ứng của từng đồng vị.\\nb) Tính nguyên tử khối trung bình của nguyên tố Silver (kết quả làm tròn đến hàng phần nghìn).",
    correctAnswer: "a) 2 đồng vị bền: ¹⁰⁷Ag (51,84%), ¹⁰⁹Ag (48,16%); b) A_tb = 107,963 amu",
    explanation: "a) Dựa vào phổ khối lượng, silver có 2 đồng vị bền trong tự nhiên:\\n   • Đồng vị ¹⁰⁷Ag: số khối A = 107, chiếm 51,84%.\\n   • Đồng vị ¹⁰⁹Ag: số khối A = 109, chiếm 48,16%.\\nb) Nguyên tử khối trung bình của Silver:\\n   A_tb = (107 × 51,84 + 109 × 48,16) / 100 = (5546,88 + 5249,44) / 100 = 107,9632 ≈ 107,963 (amu)."
  },
  {
    id: "g10_p4_s2_c2",
    lessonId: "chude1_voelectron",
    lessonTitle: "Chủ đề 1: Cấu hình electron và vị trí của Na và S",
    part: "part4",
    level: "hieu_vd",
    category: "lythuyet",
    code: "H10.1.3",
    points: 1.0,
    content: "Cho hai nguyên tố A có Z = 11 và nguyên tố B có Z = 16.\\na) Viết cấu hình electron nguyên tử của A và B. Xác định số electron hóa trị của mỗi nguyên tử.\\nb) Xác định vị trí (ô, chu kì, nhóm) của A và B trong bảng tuần hoàn các nguyên tố hóa học.",
    correctAnswer: "A (Z=11): [Ne] 3s¹ (1e hóa trị, ô 11, chu kì 3, nhóm IA); B (Z=16): [Ne] 3s² 3p⁴ (6e hóa trị, ô 16, chu kì 3, nhóm VIA)",
    explanation: "a) Cấu hình electron và số e hóa trị:\\n   • A (Z = 11): 1s² 2s² 2p⁶ 3s¹ (hoặc [Ne] 3s¹). Số electron hóa trị là 1 (ở phân lớp 3s).\\n   • B (Z = 16): 1s² 2s² 2p⁶ 3s² 3p⁴ (hoặc [Ne] 3s² 3p⁴). Số electron hóa trị là 6 (2 ở phân lớp 3s và 4 ở phân lớp 3p).\\nb) Vị trí trong bảng tuần hoàn:\\n   • A (Sodium): Ô số 11, chu kì 3 (có 3 lớp e), nhóm IA (có 1 electron hóa trị ở phân lớp s).\\n   • B (Sulfur): Ô số 16, chu kì 3 (có 3 lớp e), nhóm VIA (có 6 electron hóa trị ở phân lớp s và p)."
  },
  {
    id: "g10_p4_s2_c3",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Xu hướng tính kim loại nhóm IA & chu kì 3",
    part: "part4",
    level: "hieu_vd",
    category: "lythuyet",
    code: "H10.2.2",
    points: 1.0,
    content: "Cho hai nguyên tố nhóm IA là ₁₁Na, ₁₉K và nguyên tố ₁₂Mg (chu kì 3, nhóm IIA).\\na) So sánh tính kim loại của Na với K; của Na với Mg. Giải thích ngắn gọn theo quy luật biến đổi tuần hoàn.\\nb) Viết các phương trình hóa học khi cho từng đơn chất Na và K tác dụng với nước ở điều kiện thường.",
    correctAnswer: "a) Tính kim loại: K > Na > Mg; b) 2Na + 2H₂O -> 2NaOH + H₂↑; 2K + 2H₂O -> 2KOH + H₂↑",
    explanation: "a) So sánh và giải thích tính kim loại:\\n   • Trong nhóm IA từ trên xuống dưới (từ Na đến K): số lớp electron tăng, bán kính nguyên tử tăng, lực hút hạt nhân giảm nên khả năng nhường e tăng => Tính kim loại tăng: K > Na.\\n   • Trong chu kì 3 từ trái sang phải (từ Na đến Mg): điện tích hạt nhân tăng, bán kính giảm nên khả năng nhường e giảm => Tính kim loại giảm: Na > Mg.\\n   • Kết luận: Tính kim loại: K > Na > Mg.\\nb) Phương trình hóa học tác dụng với nước:\\n   • 2Na + 2H₂O -> 2NaOH + H₂↑\\n   • 2K + 2H₂O -> 2KOH + H₂↑"
  },

  // --- BỘ 3 (MÃ 301) ---
  {
    id: "g10_p4_s3_c1",
    lessonId: "chude1_dongvi",
    lessonTitle: "Chủ đề 1: Đồng vị và nguyên tử khối trung bình của Silicon",
    part: "part4",
    level: "hieu_vd",
    category: "tinh_toan",
    code: "H10.1.2",
    points: 1.0,
    content: "Trong tự nhiên, nguyên tố Silicon có ba đồng vị bền với số khối lần lượt là 28 (chiếm 92,23%), 29 (chiếm 4,67%) và 30 (chiếm 3,10%). Biết nguyên tố silicon có số hiệu nguyên tử là 14.\\na) Viết kí hiệu nguyên tử của ba đồng vị trên và cho biết số neutron có trong hạt nhân của mỗi đồng vị.\\nb) Tính nguyên tử khối trung bình của Silicon (kết quả làm tròn đến hàng phần trăm).",
    correctAnswer: "a) ²⁸₁₄Si (14n), ²⁹₁₄Si (15n), ³⁰₁₄Si (16n); b) A_tb = 28,11 amu",
    explanation: "a) Kí hiệu nguyên tử và số neutron:\\n   • Đồng vị 1: ²⁸₁₄Si, số neutron n = 28 - 14 = 14.\\n   • Đồng vị 2: ²⁹₁₄Si, số neutron n = 29 - 14 = 15.\\n   • Đồng vị 3: ³⁰₁₄Si, số neutron n = 30 - 14 = 16.\\nb) Nguyên tử khối trung bình của Silicon:\\n   A_tb = (28 × 92,23 + 29 × 4,67 + 30 × 3,10) / 100 = (2582,44 + 135,43 + 93,00) / 100 = 28,1087 ≈ 28,11 (amu)."
  },
  {
    id: "g10_p4_s3_c2",
    lessonId: "chude1_voelectron",
    lessonTitle: "Chủ đề 1: Cấu hình electron và vị trí của P và K",
    part: "part4",
    level: "hieu_vd",
    category: "lythuyet",
    code: "H10.1.3",
    points: 1.0,
    content: "Nguyên tử của nguyên tố M có phân mức năng lượng cao nhất là 3p³ (Z = 15) và nguyên tố R có Z = 19.\\na) Viết cấu hình electron nguyên tử đầy đủ của M và R. Cho biết M và R là kim loại hay phi kim?\\nb) Xác định vị trí của M và R trong bảng tuần hoàn các nguyên tố hóa học (ô, chu kì, nhóm).",
    correctAnswer: "M (Z=15): [Ne] 3s² 3p³ (phi kim, ô 15, chu kì 3, nhóm VA); R (Z=19): [Ar] 4s¹ (kim loại, ô 19, chu kì 4, nhóm IA)",
    explanation: "a) Cấu hình electron và phân loại:\\n   • M (Z = 15): 1s² 2s² 2p⁶ 3s² 3p³. Có 5 electron ở lớp ngoài cùng => M là phi kim (Phosphorus).\\n   • R (Z = 19): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹. Có 1 electron ở lớp ngoài cùng => R là kim loại kiềm (Potassium).\\nb) Vị trí trong bảng tuần hoàn:\\n   • M: Ô số 15; chu kì 3 (có 3 lớp e); nhóm VA (có 5 electron hóa trị).\\n   • R: Ô số 19; chu kì 4 (có 4 lớp e); nhóm IA (có 1 electron hóa trị)."
  },
  {
    id: "g10_p4_s3_c3",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Xu hướng tính phi kim chu kì 3 & PTHH",
    part: "part4",
    level: "hieu_vd",
    category: "lythuyet",
    code: "H10.2.2",
    points: 1.0,
    content: "Cho các nguyên tố thuộc chu kì 3: ₁₄Si, ₁₅P, ₁₆S, ₁₇Cl.\\na) So sánh độ âm điện và tính phi kim giữa các nguyên tố trên. Giải thích quy luật biến đổi từ trái sang phải trong chu kì 3.\\nb) Viết công thức hydroxide cao nhất của phosphorus (P) và chlorine (Cl). Viết phương trình hóa học minh họa tính acid của phosphoric acid (H₃PO₄) khi tác dụng với dung dịch sodium hydroxide (NaOH) theo tỉ lệ mol 1 : 3.",
    correctAnswer: "a) Độ âm điện & tính phi kim: Si < P < S < Cl; b) H₃PO₄ và HClO₄; PTHH: H₃PO₄ + 3NaOH -> Na₃PO₄ + 3H₂O",
    explanation: "a) So sánh và giải thích xu hướng biến đổi:\\n   • Trong chu kì 3 từ trái sang phải (từ Si đến Cl), điện tích hạt nhân tăng dần, bán kính nguyên tử giảm dần làm khả năng hút electron tăng => Độ âm điện tăng dần: Si < P < S < Cl.\\n   • Do khả năng nhận electron tăng nên tính phi kim tăng dần: Si < P < S < Cl (Cl là phi kim mạnh nhất trong chu kì 3).\\nb) Công thức hydroxide và PTHH:\\n   • Hydroxide cao nhất của P là H₃PO₄ (phosphoric acid).\\n   • Hydroxide cao nhất của Cl là HClO₄ (perchloric acid).\\n   • PTHH (tỉ lệ 1 : 3): H₃PO₄ + 3NaOH -> Na₃PO₄ + 3H₂O."
  },

  // --- BỘ 4 (MÃ 401) ---
  {
    id: "g10_p4_s4_c1",
    lessonId: "chude1_dongvi",
    lessonTitle: "Chủ đề 1: Tính phần trăm đồng vị và hàm lượng khối lượng",
    part: "part4",
    level: "hieu_vd",
    category: "tinh_toan",
    code: "H10.1.2",
    points: 1.0,
    content: "Trong tự nhiên, nguyên tố Chlorine (Cl) có hai đồng vị bền là ³⁵Cl và ³⁷Cl với nguyên tử khối trung bình là 35,5.\\na) Tính phần trăm số nguyên tử của mỗi đồng vị ³⁵Cl và ³⁷Cl trong tự nhiên.\\nb) Tính phần trăm khối lượng của đồng vị ³⁵Cl có trong hợp chất sodium chloride (NaCl) (biết Na = 23).",
    correctAnswer: "a) %³⁵Cl = 75%, %³⁷Cl = 25%; b) %m(³⁵Cl) = 44,87%",
    explanation: "a) Gọi x là % số nguyên tử của đồng vị ³⁵Cl => % của ³⁷Cl là (100 - x)%.\\n   A_tb = [35x + 37(100 - x)] / 100 = 35,5 => -2x + 3700 = 3550 => 2x = 150 => x = 75%.\\n   Vậy: %³⁵Cl = 75%, %³⁷Cl = 25%.\\nb) Khối lượng phân tử của NaCl = 23 + 35,5 = 58,5 (amu).\\n   Khối lượng của đồng vị ³⁵Cl trong 1 mol phân tử NaCl = 35 × 75% = 26,25 (gam).\\n   Phần trăm khối lượng của ³⁵Cl trong NaCl = (26,25 / 58,5) × 100% ≈ 44,87%."
  },
  {
    id: "g10_p4_s4_c2",
    lessonId: "chude1_voelectron",
    lessonTitle: "Chủ đề 1: Cấu hình electron và vị trí của Cl và Ca",
    part: "part4",
    level: "hieu_vd",
    category: "lythuyet",
    code: "H10.1.3",
    points: 1.0,
    content: "Nguyên tử nguyên tố X có tổng số electron ở các phân lớp p là 11 (Z = 17) và nguyên tử nguyên tố Y có Z = 20.\\na) Viết cấu hình electron của nguyên tử X và Y. Xác định số electron lớp ngoài cùng của mỗi nguyên tử.\\nb) Xác định vị trí của X và Y trong bảng tuần hoàn các nguyên tố hóa học (ô, chu kì, nhóm).",
    correctAnswer: "X (Z=17): [Ne] 3s² 3p⁵ (7e ngoài cùng, ô 17, chu kì 3, nhóm VIIA); Y (Z=20): [Ar] 4s² (2e ngoài cùng, ô 20, chu kì 4, nhóm IIA)",
    explanation: "a) Cấu hình electron và số e lớp ngoài cùng:\\n   • X (có 11e ở phân lớp p): 1s² 2s² 2p⁶ 3s² 3p⁵ (Z = 17, Chlorine). Có 7 electron ở lớp ngoài cùng (lớp n = 3).\\n   • Y (Z = 20): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² (Calcium). Có 2 electron ở lớp ngoài cùng (lớp n = 4).\\nb) Vị trí trong bảng tuần hoàn:\\n   • X: Ô số 17, chu kì 3 (có 3 lớp e), nhóm VIIA (có 7 electron hóa trị).\\n   • Y: Ô số 20, chu kì 4 (có 4 lớp e), nhóm IIA (có 2 electron hóa trị)."
  },
  {
    id: "g10_p4_s4_c3",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Tính base hydroxide chu kì 3 & Tính lưỡng tính",
    part: "part4",
    level: "hieu_vd",
    category: "lythuyet",
    code: "H10.2.2",
    points: 1.0,
    content: "Cho các nguyên tố ₁₁Na, ₁₂Mg và ₁₃Al.\\na) Sắp xếp các hydroxide cao nhất của Na, Mg, Al theo thứ tự tính base giảm dần và giải thích ngắn gọn.\\nb) Viết các phương trình hóa học chứng minh aluminium hydroxide Al(OH)₃ có tính chất lưỡng tính (tác dụng với dung dịch HCl và tác dụng với dung dịch NaOH).",
    correctAnswer: "a) Tính base: NaOH > Mg(OH)₂ > Al(OH)₃; b) Al(OH)₃ + 3HCl -> AlCl₃ + 3H₂O; Al(OH)₃ + NaOH -> Na[Al(OH)₄]",
    explanation: "a) Sắp xếp và giải thích tính base:\\n   • Trong chu kì 3 theo chiều tăng điện tích hạt nhân (từ Na đến Al), bán kính nguyên tử giảm, độ âm điện tăng làm khả năng phân li ra ion OH⁻ giảm => Tính base giảm dần: NaOH (base mạnh) > Mg(OH)₂ (base yếu) > Al(OH)₃ (hydroxit lưỡng tính).\\nb) Phương trình hóa học chứng minh tính lưỡng tính của Al(OH)₃:\\n   • Tác dụng với acid: Al(OH)₃ + 3HCl -> AlCl₃ + 3H₂O\\n   • Tác dụng với base mạnh: Al(OH)₃ + NaOH -> Na[Al(OH)₄] (hoặc NaAlO₂ + 2H₂O)"
  },

  // --- BỘ 5 (MÃ 501) ---
  {
    id: "g10_p4_s5_c1",
    lessonId: "chude1_dongvi",
    lessonTitle: "Chủ đề 1: Đồng vị Copper và khối lượng trong dung dịch",
    part: "part4",
    level: "hieu_vd",
    category: "tinh_toan",
    code: "H10.1.2",
    points: 1.0,
    content: "Trong tự nhiên, copper (Cu) có hai đồng vị bền là ⁶³Cu và ⁶⁵Cu với tỉ lệ số nguyên tử tương ứng là 3 : 1.\\na) Tính phần trăm số nguyên tử của mỗi đồng vị và tính nguyên tử khối trung bình của copper.\\nb) Tính khối lượng của đồng vị ⁶³Cu có trong 67,25 gam dung dịch CuCl₂ 20% (biết nguyên tử khối của Cl là 35,5).",
    correctAnswer: "a) %⁶³Cu = 75%, %⁶⁵Cu = 25%, A_tb = 63,5 amu; b) m(⁶³Cu) = 4,725 gam",
    explanation: "a) Phần trăm đồng vị và nguyên tử khối trung bình:\\n   • Tỉ lệ 3 : 1 => %⁶³Cu = 3 / (3 + 1) × 100% = 75%; %⁶⁵Cu = 25%.\\n   • A_tb = (63 × 75 + 65 × 25) / 100 = 63,5 (amu).\\nb) Khối lượng đồng vị ⁶³Cu trong dung dịch:\\n   • m(CuCl₂) = 67,25 × 20% = 13,45 gam.\\n   • M(CuCl₂) = 63,5 + 35,5 × 2 = 134,5 g/mol => n(CuCl₂) = 13,45 / 134,5 = 0,1 mol.\\n   • n(⁶³Cu) = 0,1 × 75% = 0,075 mol.\\n   • m(⁶³Cu) = 0,075 × 63 = 4,725 gam."
  },
  {
    id: "g10_p4_s5_c2",
    lessonId: "chude1_voelectron",
    lessonTitle: "Chủ đề 1: Cấu hình electron và electron độc thân của Mg và S",
    part: "part4",
    level: "hieu_vd",
    category: "lythuyet",
    code: "H10.1.3",
    points: 1.0,
    content: "Cho hai nguyên tố ₁₂Mg và ₁₆S.\\na) Viết cấu hình electron nguyên tử của Mg và S. Cho biết mỗi nguyên tử có bao nhiêu electron độc thân?\\nb) Xác định vị trí (ô, chu kì, nhóm) của Mg và S trong bảng tuần hoàn và dự đoán ion bền tương ứng của chúng.",
    correctAnswer: "a) Mg có 0e độc thân, S có 2e độc thân; b) Mg (ô 12, chu kì 3, nhóm IIA, tạo Mg²⁺), S (ô 16, chu kì 3, nhóm VIA, tạo S²⁻)",
    explanation: "a) Cấu hình electron và electron độc thân:\\n   • Mg (Z = 12): 1s² 2s² 2p⁶ 3s². Phân lớp 3s đã bão hòa (có 2e ghép đôi) nên Mg có 0 electron độc thân.\\n   • S (Z = 16): 1s² 2s² 2p⁶ 3s² 3p⁴. Phân lớp 3p có 3 orbital: 1 orbital chứa 2e ghép đôi và 2 orbital chứa 1e độc thân => S có 2 electron độc thân.\\nb) Vị trí trong bảng tuần hoàn và ion bền:\\n   • Mg: Ô số 12, chu kì 3, nhóm IIA. Dễ nhường 2e để tạo cation bền Mg²⁺ có cấu hình của [Ne].\\n   • S: Ô số 16, chu kì 3, nhóm VIA. Dễ nhận 2e để tạo anion bền S²⁻ có cấu hình của [Ar]."
  },
  {
    id: "g10_p4_s5_c3",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Xu hướng bán kính nguyên tử và phản ứng với nước",
    part: "part4",
    level: "hieu_vd",
    category: "lythuyet",
    code: "H10.2.2",
    points: 1.0,
    content: "Cho ba nguyên tố X (Z = 11, Na), Y (Z = 12, Mg) và Z (Z = 19, K).\\na) Sắp xếp các nguyên tố trên theo chiều tăng dần bán kính nguyên tử và giải thích ngắn gọn.\\nb) Viết phương trình hóa học khi cho từng đơn chất Na và Mg tác dụng với nước (ghi rõ điều kiện nhiệt độ nếu có).",
    correctAnswer: "a) Bán kính: Mg < Na < K; b) 2Na + 2H₂O -> 2NaOH + H₂↑; Mg + 2H₂O -(t°)-> Mg(OH)₂ + H₂↑",
    explanation: "a) Sắp xếp và giải thích bán kính nguyên tử:\\n   • Na và Mg cùng chu kì 3: theo chiều Z tăng, bán kính giảm: Mg < Na.\\n   • Na và K cùng nhóm IA: theo chiều Z tăng, số lớp e tăng nên bán kính tăng: Na < K.\\n   • Thứ tự tăng dần bán kính: Mg < Na < K.\\nb) Phương trình hóa học với nước:\\n   • 2Na + 2H₂O -> 2NaOH + H₂↑ (phản ứng mãnh liệt ngay ở nhiệt độ phòng).\\n   • Mg + 2H₂O -> Mg(OH)₂ + H₂↑ (phản ứng rất chậm ở nhiệt độ thường, nhanh hơn khi đun nóng)."
  }
];

module.exports = { questionBank10 };
`;

bankText = bankText.substring(0, sIdx) + newPart4;
fs.writeFileSync(bankPath, bankText, 'utf8');
console.log('Successfully written Part 4 in questionBank10.js with clean escaping!');
