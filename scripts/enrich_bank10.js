// scripts/enrich_bank10.js
const fs = require('fs');
const path = require('path');

const additionalQuestions10 = [
  // --- P1 C6, C7: Xu hướng BTH (Biết) ---
  {
    id: "g10_p1_xh_07",
    lessonId: "chude2_tuanhoan_tinhchat",
    lessonTitle: "Chủ đề 2: Xu hướng biến đổi tính chất",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.6",
    content: "Trong một chu kì, theo chiều tăng của điện tích hạt nhân, bán kính nguyên tử của các nguyên tố nhóm A nhìn chung",
    options: [
      "giảm dần.",
      "tăng dần.",
      "không đổi.",
      "biến đổi tuần hoàn."
    ],
    correctAnswer: "A",
    explanation: "Trong một chu kì, số lớp electron như nhau nhưng điện tích hạt nhân Z tăng làm lực hút hạt nhân với vỏ e tăng -> bán kính giảm dần."
  },
  {
    id: "g10_p1_xh_08",
    lessonId: "chude2_tuanhoan_tinhchat",
    lessonTitle: "Chủ đề 2: Xu hướng biến đổi tính chất",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.6",
    content: "Đại lượng nào sau đây đặc trưng cho khả năng hút electron của nguyên tử khi hình thành liên kết hóa học?",
    options: [
      "Độ âm điện.",
      "Bán kính nguyên tử.",
      "Năng lượng ion hóa.",
      "Khối lượng nguyên tử."
    ],
    correctAnswer: "A",
    explanation: "Độ âm điện đặc trưng cho khả năng hút electron của nguyên tử trong phân tử."
  },
  {
    id: "g10_p1_xh_09",
    lessonId: "chude2_tuanhoan_tinhchat",
    lessonTitle: "Chủ đề 2: Xu hướng biến đổi tính chất",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.6",
    content: "Trong một nhóm A, theo chiều từ trên xuống dưới (theo chiều tăng điện tích hạt nhân), tính kim loại của các nguyên tố",
    options: [
      "tăng dần, tính phi kim giảm dần.",
      "giảm dần, tính phi kim tăng dần.",
      "không thay đổi.",
      "tăng giảm thất thường."
    ],
    correctAnswer: "A",
    explanation: "Từ trên xuống dưới trong nhóm A, số lớp e tăng, bán kính tăng, khả năng nhường e tăng -> tính kim loại tăng dần, tính phi kim giảm dần."
  },
  {
    id: "g10_p1_xh_10",
    lessonId: "chude2_tuanhoan_tinhchat",
    lessonTitle: "Chủ đề 2: Xu hướng biến đổi tính chất",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.6",
    content: "Nguyên tố nào sau đây có độ âm điện lớn nhất trong toàn bộ bảng tuần hoàn?",
    options: [
      "Fluorine (F)",
      "Oxygen (O)",
      "Chlorine (Cl)",
      "Cesium (Cs)"
    ],
    correctAnswer: "A",
    explanation: "Fluorine (F) có độ âm điện lớn nhất trong bảng tuần hoàn (xấp xỉ 3,98 theo Pauling)."
  },

  // --- P1 C11: Thành phần nguyên tử (Vận dụng tìm hạt p, n, e) ---
  {
    id: "g10_p1_tp_vd_03",
    lessonId: "chude1_nguyentu",
    lessonTitle: "Chủ đề 1: Thành phần của nguyên tử",
    part: "part1",
    level: "vd",
    category: "tinh_toan",
    code: "HH1.4",
    content: "Tổng số hạt proton, neutron và electron trong nguyên tử của nguyên tố X là 40, trong đó số hạt mang điện nhiều hơn số hạt không mang điện là 12. Số khối (A) của nguyên tử X là",
    options: [
      "27",
      "26",
      "28",
      "13"
    ],
    correctAnswer: "A",
    explanation: "2Z + N = 40 và 2Z - N = 12 -> 4Z = 52 -> Z = 13 (Al), N = 14 -> Số khối A = Z + N = 13 + 14 = 27."
  },
  {
    id: "g10_p1_tp_vd_04",
    lessonId: "chude1_nguyentu",
    lessonTitle: "Chủ đề 1: Thành phần của nguyên tử",
    part: "part1",
    level: "vd",
    category: "tinh_toan",
    code: "HH1.4",
    content: "Nguyên tử nguyên tố Y có tổng số hạt cơ bản là 58, trong đó số hạt mang điện gấp 1,9 lần số hạt không mang điện. Số proton trong nguyên tử Y là",
    options: [
      "19",
      "20",
      "18",
      "39"
    ],
    correctAnswer: "A",
    explanation: "2Z + N = 58 và 2Z = 1,9N -> 2,9N = 58 -> N = 20 -> 2Z = 38 -> Z = 19 (Potassium - K)."
  },
  {
    id: "g10_p1_tp_vd_05",
    lessonId: "chude1_nguyentu",
    lessonTitle: "Chủ đề 1: Thành phần của nguyên tử",
    part: "part1",
    level: "vd",
    category: "tinh_toan",
    code: "HH1.4",
    content: "Một cation M²⁺ có tổng số hạt mang điện là 22. Tên của nguyên tố M là",
    options: [
      "Magnesium (Z = 12)",
      "Calcium (Z = 20)",
      "Sodium (Z = 11)",
      "Iron (Z = 26)"
    ],
    correctAnswer: "A",
    explanation: "Số hạt mang điện trong ion M²⁺ là 2Z - 2 = 22 -> 2Z = 24 -> Z = 12 (Magnesium)."
  },

  // --- P3 C1: Đồng vị (Biết) ---
  {
    id: "g10_p3_dv_04",
    lessonId: "chude1_nguyento",
    lessonTitle: "Chủ đề 1: Nguyên tố hóa học, đồng vị",
    part: "part3",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Nguyên tử carbon-12 (¹²₆C) có bao nhiêu hạt neutron trong hạt nhân?",
    correctAnswer: "6",
    explanation: "N = A - Z = 12 - 6 = 6 hạt neutron."
  },
  {
    id: "g10_p3_dv_05",
    lessonId: "chude1_nguyento",
    lessonTitle: "Chủ đề 1: Nguyên tố hóa học, đồng vị",
    part: "part3",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Cho kí hiệu nguyên tử ²³₁₁Na. Số hạt electron ở lớp vỏ nguyên tử sodium là bao nhiêu?",
    correctAnswer: "11",
    explanation: "Số e = Z = 11."
  },

  // --- P3 C3: Đồng vị (Vận dụng tính NTK trung bình) ---
  {
    id: "g10_p3_dv_vd_04",
    lessonId: "chude1_nguyento",
    lessonTitle: "Chủ đề 1: Nguyên tố hóa học, đồng vị",
    part: "part3",
    level: "vd",
    category: "tinh_toan",
    code: "HH1.4",
    content: "Nguyên tố chlorine có hai đồng vị bền trong tự nhiên là ³⁵Cl (chiếm 75%) và ³⁷Cl (chiếm 25%). Nguyên tử khối trung bình của chlorine là bao nhiêu?",
    correctAnswer: "35,5",
    explanation: "M = (35 × 75 + 37 × 25) / 100 = 35,5."
  },
  {
    id: "g10_p3_dv_vd_05",
    lessonId: "chude1_nguyento",
    lessonTitle: "Chủ đề 1: Nguyên tố hóa học, đồng vị",
    part: "part3",
    level: "vd",
    category: "tinh_toan",
    code: "HH1.4",
    content: "Nguyên tố đồng (copper) trong tự nhiên có hai đồng vị là ⁶³Cu (chiếm 73%) và ⁶⁵Cu (chiếm 27%). Nguyên tử khối trung bình của Cu là bao nhiêu? (Làm tròn đến 2 chữ số thập phân).",
    correctAnswer: "63,54",
    explanation: "M = (63 × 73 + 65 × 27) / 100 = (4599 + 1755) / 100 = 63,54."
  }
];

// Nạp vào questionBank10.js
const qbPath = path.join(__dirname, '../data/questionBank10.js');
let qbContent = fs.readFileSync(qbPath, 'utf8');

const insertMarker = 'module.exports = { questionBank10 };';
if (qbContent.includes(insertMarker)) {
  const insertCode = `// Bổ sung chuẩn hóa 100% theo Ma trận & Đặc tả cho Khối 10\nquestionBank10.push(...` + JSON.stringify(additionalQuestions10, null, 2) + `);\n\n`;
  qbContent = qbContent.replace(insertMarker, insertCode + insertMarker);
  fs.writeFileSync(qbPath, qbContent, 'utf8');
  console.log('Successfully enriched Grade 10 Question Bank with', additionalQuestions10.length, 'questions!');
} else {
  console.error('Cannot find insertMarker in questionBank10.js');
}
