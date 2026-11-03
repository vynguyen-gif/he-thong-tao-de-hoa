// scripts/finalize_banks.js
const fs = require('fs');
const path = require('path');

// 1. Grade 12: b1_tl_th_5
const qb12Path = path.join(__dirname, '../data/questionBank.js');
let qb12Content = fs.readFileSync(qb12Path, 'utf8');
const q12Extra = [
  {
    id: "b1_tl_th_5",
    lessonId: "b1_ester_lipid",
    lessonTitle: "Bài 1: Ester - Lipid",
    part: "part3",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.3",
    content: "Cho các ester sau: ethyl formate, methyl acetate, vinyl acetate, benzyl acetate, phenyl acetate. Có bao nhiêu ester khi thủy phân trong dung dịch NaOH đun nóng tạo ra alcohol?",
    correctAnswer: "3",
    explanation: "Các ester tạo alcohol gồm: ethyl formate (tạo C2H5OH), methyl acetate (tạo CH3OH), benzyl acetate (tạo C6H5CH2OH). Vinyl acetate tạo aldehyde, phenyl acetate tạo 2 muối và nước. Vậy có 3 ester."
  }
];
const marker12 = 'const { formatQuestionObject }';
qb12Content = qb12Content.replace(marker12, `questionBank.push(...` + JSON.stringify(q12Extra, null, 2) + `);\n\n` + marker12);
fs.writeFileSync(qb12Path, qb12Content, 'utf8');
console.log('Finalized Grade 12 bank!');

// 2. Grade 11: 4 questions
const qb11Path = path.join(__dirname, '../data/questionBank11.js');
let qb11Content = fs.readFileSync(qb11Path, 'utf8');
const q11Extra = [
  {
    id: "g11_p1_b1_10",
    lessonId: "b1_canbang",
    lessonTitle: "Bài 1: Mở đầu về cân bằng hóa học",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH.1.2",
    content: "Hằng số cân bằng Kc của phản ứng thuận nghịch chỉ phụ thuộc vào",
    options: [
      "bản chất của phản ứng và nhiệt độ.",
      "nồng độ ban đầu của các chất phản ứng.",
      "áp suất chung của hệ.",
      "chất xúc tác."
    ],
    correctAnswer: "A",
    explanation: "Hằng số cân bằng Kc chỉ phụ thuộc vào bản chất phản ứng và nhiệt độ."
  },
  {
    id: "g11_p1_b5_vd_01",
    lessonId: "b5_ammonia",
    lessonTitle: "Bài 5: Một số hợp chất quan trọng của nitrogen",
    part: "part1",
    level: "vd",
    category: "tinh_toan",
    code: "HH.1.6",
    content: "Dẫn 3,7185 lít khí NH3 (ở đkc, tương ứng 0,15 mol) đi qua ống sứ đựng CuO dư nung nóng. Khối lượng Cu kim loại thu được sau phản ứng là",
    options: [
      "14,4 gam",
      "9,6 gam",
      "4,8 gam",
      "19,2 gam"
    ],
    correctAnswer: "A",
    explanation: "2NH3 + 3CuO --(t°)--> 3Cu + N2 + 3H2O. n(Cu) = 1,5 × n(NH3) = 1,5 × 0,15 = 0,225 mol -> m(Cu) = 0,225 × 64 = 14,4 gam."
  },
  {
    id: "g11_p1_b5_vd_02",
    lessonId: "b5_nitricacid",
    lessonTitle: "Bài 5: Một số hợp chất quan trọng của nitrogen",
    part: "part1",
    level: "vd",
    category: "tinh_toan",
    code: "HH.1.6",
    content: "Hòa tan hoàn toàn 2,7 gam bột Al vào dung dịch HNO3 loãng dư, thu được V lít khí NO (ở đkc, sản phẩm khử duy nhất). Giá trị của V là",
    options: [
      "2,479 lít",
      "1,2395 lít",
      "4,958 lít",
      "7,437 lít"
    ],
    correctAnswer: "A",
    explanation: "n(Al) = 2,7 / 27 = 0,1 mol. Al + 4HNO3 -> Al(NO3)3 + NO + 2H2O -> n(NO) = 0,1 mol -> V = 0,1 × 24,79 = 2,479 lít."
  },
  {
    id: "g11_p1_b5_vd_03",
    lessonId: "b5_ammonia",
    lessonTitle: "Bài 5: Một số hợp chất quan trọng của nitrogen",
    part: "part1",
    level: "vd",
    category: "tinh_toan",
    code: "HH.1.6",
    content: "Cho 0,1 mol muối (NH4)2SO4 tác dụng với lượng dư dung dịch NaOH đun nóng. Thể tích khí NH3 thoát ra (ở đkc 25°C, 1 bar) là",
    options: [
      "4,958 lít",
      "2,479 lít",
      "1,2395 lít",
      "3,7185 lít"
    ],
    correctAnswer: "A",
    explanation: "(NH4)2SO4 + 2NaOH -> Na2SO4 + 2NH3 + 2H2O. n(NH3) = 2 × 0,1 = 0,2 mol -> V = 0,2 × 24,79 = 4,958 lít."
  }
];
const marker11 = 'module.exports = { questionBank11 };';
qb11Content = qb11Content.replace(marker11, `questionBank11.push(...` + JSON.stringify(q11Extra, null, 2) + `);\n\n` + marker11);
fs.writeFileSync(qb11Path, qb11Content, 'utf8');
console.log('Finalized Grade 11 bank!');

// 3. Grade 10: 11 questions
const qb10Path = path.join(__dirname, '../data/questionBank10.js');
let qb10Content = fs.readFileSync(qb10Path, 'utf8');
const q10Extra = [
  {
    id: "g10_p1_tp_vd_06",
    lessonId: "chude1_nguyentu",
    lessonTitle: "Chủ đề 1: Thành phần của nguyên tử",
    part: "part1",
    level: "vd",
    category: "tinh_toan",
    code: "HH1.4",
    content: "Một nguyên tử nguyên tố X có tổng số hạt cơ bản là 36, trong đó số hạt mang điện gấp đôi số hạt không mang điện. Số hiệu nguyên tử của X là",
    options: [
      "12",
      "11",
      "13",
      "14"
    ],
    correctAnswer: "A",
    explanation: "2Z + N = 36 và 2Z = 2N -> N = 12, 2Z = 24 -> Z = 12 (Magnesium)."
  },
  {
    id: "g10_p1_tp_vd_07",
    lessonId: "chude1_nguyentu",
    lessonTitle: "Chủ đề 1: Thành phần của nguyên tử",
    part: "part1",
    level: "vd",
    category: "tinh_toan",
    code: "HH1.4",
    content: "Anion X²⁻ có tổng số hạt mang điện là 34. Số proton trong hạt nhân nguyên tử X là",
    options: [
      "16",
      "18",
      "15",
      "17"
    ],
    correctAnswer: "A",
    explanation: "Số hạt mang điện trong ion X²⁻ là 2Z + 2 = 34 -> 2Z = 32 -> Z = 16 (Sulfur)."
  },
  {
    id: "g10_p3_dv_nb_03",
    lessonId: "chude1_nguyento",
    lessonTitle: "Chủ đề 1: Nguyên tố hóa học, đồng vị",
    part: "part3",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Cho kí hiệu nguyên tử ³⁹₁₉K. Số khối (A) của nguyên tử potassium là bao nhiêu?",
    correctAnswer: "39",
    explanation: "Số khối A = 39."
  },
  {
    id: "g10_p3_dv_nb_04",
    lessonId: "chude1_nguyento",
    lessonTitle: "Chủ đề 1: Nguyên tố hóa học, đồng vị",
    part: "part3",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Một nguyên tử có 8 proton, 8 neutron và 8 electron. Số khối của nguyên tử này bằng bao nhiêu?",
    correctAnswer: "16",
    explanation: "Số khối A = Z + N = 8 + 8 = 16."
  },
  {
    id: "g10_p3_dv_nb_05",
    lessonId: "chude1_nguyento",
    lessonTitle: "Chủ đề 1: Nguyên tố hóa học, đồng vị",
    part: "part3",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Đồng vị carbon-14 (¹⁴₆C) có số hạt electron ở lớp vỏ nguyên tử là bao nhiêu?",
    correctAnswer: "6",
    explanation: "Số electron = Z = 6."
  },
  {
    id: "g10_p3_bth_nb_03",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Cấu tạo bảng tuần hoàn",
    part: "part3",
    level: "biet",
    category: "lythuyet",
    code: "HH1.2",
    content: "Nguyên tố calcium (Ca) có số hiệu nguyên tử Z = 20. Calcium nằm ở chu kì mấy trong bảng tuần hoàn?",
    correctAnswer: "4",
    explanation: "Cấu hình e của Ca (Z=20): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² có 4 lớp e -> chu kì 4."
  },
  {
    id: "g10_p3_bth_nb_04",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Cấu tạo bảng tuần hoàn",
    part: "part3",
    level: "biet",
    category: "lythuyet",
    code: "HH1.2",
    content: "Nguyên tố phosphorus (P) có Z = 15. Phosphorus thuộc nhóm mấy A trong bảng tuần hoàn?",
    correctAnswer: "5",
    explanation: "Cấu hình e của P: [Ne] 3s² 3p³ có 5 e hóa trị lớp ngoài cùng -> nhóm VA (nhóm 5A)."
  },
  {
    id: "g10_p3_bth_nb_05",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Cấu tạo bảng tuần hoàn",
    part: "part3",
    level: "biet",
    category: "lythuyet",
    code: "HH1.2",
    content: "Bảng tuần hoàn các nguyên tố hóa học hiện nay gồm bao nhiêu chu kì?",
    correctAnswer: "7",
    explanation: "Bảng tuần hoàn gồm 7 chu kì (từ chu kì 1 đến chu kì 7)."
  },
  {
    id: "g10_p3_dv_vd_06",
    lessonId: "chude1_nguyento",
    lessonTitle: "Chủ đề 1: Nguyên tố hóa học, đồng vị",
    part: "part3",
    level: "vd",
    category: "tinh_toan",
    code: "HH1.4",
    content: "Nguyên tố boron có 2 đồng vị là ¹⁰B (chiếm 20%) và ¹¹B (chiếm 80%). Nguyên tử khối trung bình của boron là bao nhiêu?",
    correctAnswer: "10,8",
    explanation: "M = (10 × 20 + 11 × 80) / 100 = (200 + 880) / 100 = 10,8."
  },
  {
    id: "g10_p3_bth_vd_04",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Cấu tạo bảng tuần hoàn",
    part: "part3",
    level: "vd",
    category: "tinh_toan",
    code: "HH1.6",
    content: "Hai nguyên tố X và Y đứng kế tiếp nhau trong cùng một chu kì của bảng tuần hoàn có tổng số hiệu nguyên tử là 25 (Z_X < Z_Y). Số hiệu nguyên tử của nguyên tố Y là bao nhiêu?",
    correctAnswer: "13",
    explanation: "Z_Y - Z_X = 1 và Z_X + Z_Y = 25 -> 2Z_Y = 26 -> Z_Y = 13 (Al)."
  },
  {
    id: "g10_p3_bth_vd_05",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Cấu tạo bảng tuần hoàn",
    part: "part3",
    level: "vd",
    category: "tinh_toan",
    code: "HH1.6",
    content: "Hai nguyên tố A và B thuộc cùng một nhóm A và ở hai chu kì liên tiếp có tổng số hiệu nguyên tử là 32 (Z_A < Z_B). Số hiệu nguyên tử của nguyên tố B là bao nhiêu?",
    correctAnswer: "20",
    explanation: "Z_B - Z_A = 8 và Z_A + Z_B = 32 -> 2Z_B = 40 -> Z_B = 20 (Calcium)."
  }
];
const marker10 = 'module.exports = { questionBank10 };';
qb10Content = qb10Content.replace(marker10, `questionBank10.push(...` + JSON.stringify(q10Extra, null, 2) + `);\n\n` + marker10);
fs.writeFileSync(qb10Path, qb10Content, 'utf8');
console.log('Finalized Grade 10 bank!');
