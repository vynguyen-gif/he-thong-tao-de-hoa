// scripts/create_bank10.js
const fs = require('fs');
const path = require('path');

const content = `// data/questionBank10.js
// Ngân hàng câu hỏi trích xuất 100% từ Đề cương Ôn tập Giữa kì 1 Hóa 10 (Năm học 2026 - 2027)

const questionBank10 = [
  // =========================================================================
  // PHẦN I: TRẮC NGHIỆM NHIỀU LỰA CHỌN (TỪ ĐỀ ÔN TẬP 1 ĐẾN ĐỀ ÔN TẬP 5)
  // =========================================================================

  // --- ĐỀ 1 - PHẦN I ---
  {
    id: "g10_d1_p1_c1",
    lessonId: "chude1_nguyentu",
    lessonTitle: "Chủ đề 1: Cấu tạo nguyên tử - Nhập môn hóa học",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.1.1",
    content: "Đối tượng nghiên cứu của hóa học là",
    options: [
      "nghiên cứu về vật chất, năng lượng và sự vận động của chúng.",
      "thế giới sinh vật gần gũi với đời sống hằng ngày của học sinh.",
      "chất và sự biến đổi của chất.",
      "nghệ thuật ngôn từ."
    ],
    correctAnswer: "C",
    explanation: "Hóa học là ngành khoa học thuộc lĩnh vực khoa học tự nhiên, nghiên cứu về chất và sự biến đổi của chất."
  },
  {
    id: "g10_d1_p1_c2",
    lessonId: "chude1_nguyentu",
    lessonTitle: "Chủ đề 1: Thành phần nguyên tử",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.1.1",
    content: "Hạt mang điện trong nguyên tử",
    options: [
      "chỉ có proton.",
      "là proton và neutron.",
      "là proton và electron.",
      "là electron và neutron."
    ],
    correctAnswer: "C",
    explanation: "Trong nguyên tử, proton mang điện tích dương (+), electron mang điện tích âm (-), neutron không mang điện."
  },
  {
    id: "g10_d1_p1_c3",
    lessonId: "chude1_voelectron",
    lessonTitle: "Chủ đề 1: Cấu trúc lớp vỏ electron",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.1.3",
    content: "Phân lớp nào dưới đây chưa bão hòa?",
    options: ["s²", "f¹⁴", "p⁶", "d⁸"],
    correctAnswer: "D",
    explanation: "Số electron tối đa trên các phân lớp s, p, d, f lần lượt là 2, 6, 10, 14. Phân lớp d⁸ có 8 electron < 10 nên chưa bão hòa."
  },
  {
    id: "g10_d1_p1_c4",
    lessonId: "chude1_nguyento",
    lessonTitle: "Chủ đề 1: Nguyên tố hóa học",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.1.2",
    content: "Số hiệu nguyên tử cho biết thông tin nào sau đây?",
    options: ["Số proton.", "Số neutron.", "Số khối.", "Nguyên tử khối."],
    correctAnswer: "A",
    explanation: "Số hiệu nguyên tử Z = số proton = số đơn vị điện tích hạt nhân = số electron trong nguyên tử."
  },
  {
    id: "g10_d1_p1_c5",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Cấu tạo bảng tuần hoàn",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.2.1",
    content: "Các nguyên tố được sắp xếp trong bảng tuần hoàn theo nguyên tắc nào sau đây?",
    options: [
      "Theo chiều tăng dần của nguyên tử khối.",
      "Các nguyên tố có cùng số lớp electron được xếp vào một nhóm.",
      "Theo chiều tăng dần của điện tích hạt nhân.",
      "Các nguyên tố có cùng số electron hóa trị được xếp vào một chu kì."
    ],
    correctAnswer: "C",
    explanation: "Bảng tuần hoàn sắp xếp các nguyên tố theo chiều tăng dần của điện tích hạt nhân nguyên tử."
  },
  {
    id: "g10_d1_p1_c6",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Cấu tạo bảng tuần hoàn",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.2.1",
    content: "Nhóm B của bảng tuần hoàn gồm các nguyên tố",
    options: ["s.", "s và p.", "d.", "d và f."],
    correctAnswer: "D",
    explanation: "Các nguyên tố nhóm B gồm các nguyên tố kim loại chuyển tiếp d và f."
  },
  {
    id: "g10_d1_p1_c7",
    lessonId: "chude1_nguyentu",
    lessonTitle: "Chủ đề 1: Thành phần nguyên tử",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "H10.1.1",
    content: "Phát biểu nào sau đây không đúng?",
    options: [
      "Electron có khối lượng xấp xỉ 0,00055 amu.",
      "Hạt tạo thành tia âm cực là electron.",
      "Nguyên tử có cấu trúc rỗng, gồm lớp vỏ và hạt nhân.",
      "Khối lượng nguyên tử hầu như tập trung ở lớp vỏ nguyên tử."
    ],
    correctAnswer: "D",
    explanation: "Khối lượng nguyên tử hầu như tập trung ở hạt nhân nguyên tử do proton và neutron có khối lượng lớn hơn electron rất nhiều."
  },
  {
    id: "g10_d1_p1_c8",
    lessonId: "chude1_nguyento",
    lessonTitle: "Chủ đề 1: Đồng vị - Nguyên tố hóa học",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "H10.1.2",
    content: "Cho ba nguyên tử có cấu tạo hạt nhân: nguyên tử (1) có 8p và 8n; nguyên tử (2) có 8p và 9n; nguyên tử (3) có 9p và 9n. Nhận xét nào sau đây không đúng?",
    options: [
      "(1) và (2) là các đồng vị của cùng một nguyên tố hóa học.",
      "(1) và (3) là các đồng vị của cùng một nguyên tố hóa học.",
      "(1) và (2) là nguyên tử của cùng nguyên tố hóa học.",
      "(1) và (2) có cùng số proton trong hạt nhân."
    ],
    correctAnswer: "B",
    explanation: "Đồng vị là những nguyên tử có cùng số proton nhưng khác số neutron. (1) và (3) khác số proton (8p và 9p) nên thuộc hai nguyên tố khác nhau."
  },
  {
    id: "g10_d1_p1_c9",
    lessonId: "chude1_voelectron",
    lessonTitle: "Chủ đề 1: Cấu trúc lớp vỏ electron",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.1.3",
    content: "Cấu hình electron nguyên tử nào sau đây là của nguyên tố khí hiếm?",
    options: [
      "1s² 2s² 2p⁶ 3s² 3p⁵.",
      "1s² 2s² 2p⁶ 3s².",
      "1s² 2s² 2p⁶ 3s² 3p⁶.",
      "1s² 2s² 2p⁶ 3s² 3p¹."
    ],
    correctAnswer: "C",
    explanation: "Khí hiếm có 8 electron ở lớp ngoài cùng (trừ He có 2 electron). Cấu hình 1s² 2s² 2p⁶ 3s² 3p⁶ có lớp ngoài cùng 3s² 3p⁶ (8e) là khí hiếm Argon (Ar)."
  },
  {
    id: "g10_d1_p1_c10",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Bảng tuần hoàn",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.2.1",
    content: "Số thứ tự của chu kì được xác định bằng",
    options: ["số electron.", "số lớp electron.", "số electron hóa trị.", "số electron lớp ngoài cùng."],
    correctAnswer: "B",
    explanation: "Số thứ tự chu kì = số lớp electron của nguyên tử."
  },
  {
    id: "g10_d1_p1_c11",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Bảng tuần hoàn",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.2.1",
    content: "Số nguyên tố thuộc chu kì 3 của bảng tuần hoàn là",
    options: ["2.", "8.", "18.", "32."],
    correctAnswer: "B",
    explanation: "Chu kì 3 bắt đầu từ Na (Z=11) đến Ar (Z=18), gồm 8 nguyên tố."
  },
  {
    id: "g10_d1_p1_c12",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Vị trí nguyên tố trong BTH",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "H10.2.1",
    content: "Cấu hình electron nguyên tử của oxygen là 1s² 2s² 2p⁴. Vị trí của oxygen trong bảng tuần hoàn là",
    options: [
      "chu kì 2, nhóm VIA.",
      "chu kì 3, nhóm VIA.",
      "chu kì 2, nhóm IVA.",
      "chu kì 2, nhóm VIB."
    ],
    correctAnswer: "A",
    explanation: "Oxygen có 2 lớp electron => chu kì 2; có 6 electron hóa trị ở phân lớp s và p => nhóm VIA."
  },
  {
    id: "g10_d1_p1_c13",
    lessonId: "chude1_voelectron",
    lessonTitle: "Chủ đề 1: Electron hóa trị",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.1.3",
    content: "Nguyên tố Mg (Z = 12) có số electron hóa trị là",
    options: ["3.", "4.", "2.", "1."],
    correctAnswer: "C",
    explanation: "Cấu hình e của Mg (Z = 12): 1s² 2s² 2p⁶ 3s² => có 2 electron hóa trị (ở phân lớp 3s)."
  },
  {
    id: "g10_d1_p1_c14",
    lessonId: "chude1_voelectron",
    lessonTitle: "Chủ đề 1: Điện tích hạt nhân",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "H10.1.3",
    content: "Nguyên tử X có 3 lớp electron và có 7 electron lớp ngoài cùng. Số đơn vị điện tích hạt nhân của X là",
    options: ["10.", "17.", "15.", "14."],
    correctAnswer: "B",
    explanation: "X có 3 lớp e và 7e lớp ngoài cùng => Cấu hình e: 1s² 2s² 2p⁶ 3s² 3p⁵ => Tổng số electron = 17 => Z = 17 (Chlorine)."
  },
  {
    id: "g10_d1_p1_c15",
    lessonId: "chude1_voelectron",
    lessonTitle: "Chủ đề 1: Lớp electron",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "H10.1.3",
    content: "Phát biểu nào sau đây đúng?",
    options: [
      "Lớp N có chứa tối đa 32 electron.",
      "Những electron ở gần hạt nhân có mức năng lượng cao nhất.",
      "Electron ở orbital 3p có mức năng lượng thấp hơn electron ở orbital 3s.",
      "Các electron trong cùng một lớp có mức năng lượng bằng nhau."
    ],
    correctAnswer: "A",
    explanation: "Lớp N là lớp thứ 4 (n=4), số electron tối đa = 2n² = 2 × 4² = 32 electron."
  },
  {
    id: "g10_d1_p1_c16",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Chu kì trong BTH",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "H10.2.1",
    content: "Cho các nguyên tố Y₁, Y₂, Y₃, Y₄ lần lượt có cấu hình electron là: 1s² 2s² 2p⁶ 3s² 3p⁴, 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹, 1s² 2s² 2p⁴, 1s² 2s² 2p⁶ 3s² 3p⁶ 4s². Các nguyên tố cùng một chu kì là",
    options: ["Y₁ và Y₃.", "Y₂ và Y₄.", "Y₁ và Y₂.", "Y₂ và Y₃."],
    correctAnswer: "B",
    explanation: "Y₂ và Y₄ đều có 4 lớp electron nên cùng thuộc chu kì 4."
  },
  {
    id: "g10_d1_p1_c17",
    lessonId: "chude1_nguyentu",
    lessonTitle: "Chủ đề 1: Cấu tạo ion",
    part: "part1",
    level: "vd",
    category: "tinh_toan",
    code: "H10.1.3",
    content: "Ion XY₂⁻ có tổng số hạt mang điện âm là 30. Trong đó số hạt mang điện của X nhiều hơn của Y là 10. Phát biểu nào sau đây đúng?",
    options: [
      "X thuộc nhóm IIIA và Y thuộc nhóm VA.",
      "X và Y đều thuộc chu kì 3.",
      "X là kim loại, Y là phi kim.",
      "Tổng số proton của X và Y là 28."
    ],
    correctAnswer: "D",
    explanation: "e_X + 2e_Y + 1 = 30 => e_X + 2e_Y = 29. Lại có hạt mang điện của X nhiều hơn Y là 10 => 2e_X - 2e_Y = 10 => e_X - e_Y = 5. Giải hệ: e_X = 13 (Al, Z=13), e_Y = 8 (O, Z=8). Tổng số proton = 13 + 8 = 21 (hoặc xét tương ứng AlO₂⁻)."
  },
  {
    id: "g10_d1_p1_c18",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Tính chất nguyên tố Sulfur",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "H10.2.1",
    content: "Sulfur dạng kem bôi được sử dụng để điều trị mụn trứng cá. Nguyên tử sulfur có phân lớp electron ngoài cùng là 3p⁴. Phát biểu nào sau đây không đúng về nguyên tử sulfur?",
    options: [
      "Lớp ngoài cùng có 4 electron.",
      "Nguyên tử có 16 electron.",
      "Thuộc chu kỳ 3 trong bảng tuần hoàn.",
      "Thuộc nhóm VIA trong bảng tuần hoàn."
    ],
    correctAnswer: "A",
    explanation: "Cấu hình e của sulfur là 1s² 2s² 2p⁶ 3s² 3p⁴ => Lớp ngoài cùng (lớp 3) có 2 + 4 = 6 electron, không phải 4."
  },

  // --- ĐỀ 2 - PHẦN I ---
  {
    id: "g10_d2_p1_c1",
    lessonId: "chude1_voelectron",
    lessonTitle: "Chủ đề 1: Chuyển động của electron",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.1.3",
    content: "Sự chuyển động của electron theo quan điểm hiện đại được mô tả là",
    options: [
      "electron chuyển động rất nhanh xung quanh hạt nhân không theo một quỹ đạo xác định.",
      "chuyển động của electron trong nguyên tử theo một quỹ đạo nhất định hình tròn hay hình bầu dục.",
      "electron chuyển động cạnh hạt nhân theo một quỹ đạo xác định tạo thành vỏ nguyên tử.",
      "electron chuyển động rất chậm gần hạt nhân theo một quỹ đạo xác định tạo thành vỏ nguyên tử."
    ],
    correctAnswer: "A",
    explanation: "Theo mô hình hiện đại, electron chuyển động rất nhanh xung quanh hạt nhân không theo những quỹ đạo xác định, tạo thành đám mây electron."
  },
  {
    id: "g10_d2_p1_c2",
    lessonId: "chude1_nguyentu",
    lessonTitle: "Chủ đề 1: Hạt mang điện âm",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.1.1",
    content: "Trong nguyên tử, hạt mang điện âm là",
    options: ["electron.", "proton và electron.", "neutron.", "electron và neutron."],
    correctAnswer: "A",
    explanation: "Hạt mang điện âm duy nhất trong nguyên tử là electron (e)."
  },
  {
    id: "g10_d2_p1_c3",
    lessonId: "chude1_voelectron",
    lessonTitle: "Chủ đề 1: Orbital nguyên tử",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.1.3",
    content: "Số orbital trong các phân lớp s, p, d lần lượt là",
    options: ["1, 3, 5.", "2, 3, 5.", "1, 5, 7.", "1, 3, 7."],
    correctAnswer: "A",
    explanation: "Phân lớp s có 1 AO, phân lớp p có 3 AO, phân lớp d có 5 AO, phân lớp f có 7 AO."
  },
  {
    id: "g10_d2_p1_c4",
    lessonId: "chude1_nguyento",
    lessonTitle: "Chủ đề 1: Định nghĩa nguyên tố hóa học",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.1.2",
    content: "Nguyên tố hóa học là tập hợp những nguyên tử có cùng",
    options: ["số neutron.", "số proton.", "số khối.", "khối lượng."],
    correctAnswer: "B",
    explanation: "Nguyên tố hóa học là tập hợp các nguyên tử có cùng số đơn vị điện tích hạt nhân (cùng số proton)."
  },
  {
    id: "g10_d2_p1_c5",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Số nguyên tố trong BTH",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.2.1",
    content: "Tính đến năm 2016, số nguyên tố được xác định trong bảng tuần hoàn các nguyên tố hóa học là",
    options: ["118 nguyên tố.", "119 nguyên tố.", "120 nguyên tố.", "121 nguyên tố."],
    correctAnswer: "A",
    explanation: "Hiện nay bảng tuần hoàn đã ghi nhận 118 nguyên tố hóa học từ Z=1 đến Z=118 (Oganesson)."
  },
  {
    id: "g10_d2_p1_c6",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Cấu tạo BTH",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.2.1",
    content: "Tổng số nhóm A và B trong bảng tuần hoàn các nguyên tố hóa học là",
    options: ["16.", "10.", "18.", "8."],
    correctAnswer: "A",
    explanation: "Bảng tuần hoàn gồm 8 nhóm A (IA đến VIIIA) và 8 nhóm B (IB đến VIIIB, trong đó VIIIB gồm 3 cột) => Tổng cộng 16 nhóm."
  },
  {
    id: "g10_d2_p1_c7",
    lessonId: "chude1_nguyentu",
    lessonTitle: "Chủ đề 1: Cấu trúc nguyên tử",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "H10.1.1",
    content: "Phát biểu nào sau đây không đúng?",
    options: [
      "Khối lượng nguyên tử tập trung hầu hết ở hạt nhân.",
      "Nguyên tử có cấu tạo rỗng và trung hòa điện.",
      "Kích thước lớp vỏ không đáng kể so với nguyên tử.",
      "Điện tích hạt nhân là tổng điện tích các hạt proton."
    ],
    correctAnswer: "C",
    explanation: "Lớp vỏ nguyên tử chiếm hầu hết thể tích của nguyên tử, đường kính nguyên tử gấp khoảng 10.000 đến 100.000 lần đường kính hạt nhân."
  },
  {
    id: "g10_d2_p1_c8",
    lessonId: "chude1_nguyento",
    lessonTitle: "Chủ đề 1: Cặp đồng vị",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "H10.1.2",
    content: "Cặp nguyên tử nào sau đây là đồng vị của cùng một nguyên tố hóa học?",
    options: [
      "⁴⁰₁₈X và ⁴⁰₁₉Y.",
      "²⁸₁₄X và ²⁹₁₄Y.",
      "¹⁴₆X và ¹⁴₇Y.",
      "¹⁹₉X và ²⁰₁₀Y."
    ],
    correctAnswer: "B",
    explanation: "Đồng vị là các nguyên tử có cùng số proton Z nhưng khác số khối A. Ở phương án B, cả hai đều có Z = 14 (Silicon)."
  },
  {
    id: "g10_d2_p1_c9",
    lessonId: "chude1_voelectron",
    lessonTitle: "Chủ đề 1: Phân loại nguyên tố theo electron",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "H10.1.3",
    content: "Phát biểu nào sau đây đúng?",
    options: [
      "Các nguyên tử của nguyên tố khí hiếm đều có 8 electron lớp ngoài cùng.",
      "Các nguyên tố mà nguyên tử có 1, 2 hoặc 3 electron lớp ngoài cùng đều là kim loại.",
      "Chỉ các nguyên tố mà nguyên tử có 5, 6 hoặc 7 electron lớp ngoài cùng là phi kim.",
      "Nguyên tố mà nguyên tử có 4 electron lớp ngoài cùng có thể là kim loại hoặc phi kim."
    ],
    correctAnswer: "D",
    explanation: "Nguyên tố có 4e lớp ngoài cùng có thể là phi kim (C, Si) hoặc kim loại (Sn, Pb)."
  },
  {
    id: "g10_d2_p1_c10",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Nhóm A trong BTH",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.2.1",
    content: "Nguyên tử của các nguyên tố trong cùng một nhóm A của bảng tuần hoàn có cùng",
    options: ["số neutron.", "số electron.", "số proton.", "số electron lớp ngoài cùng."],
    correctAnswer: "D",
    explanation: "Các nguyên tố thuộc cùng một nhóm A có cùng số electron lớp ngoài cùng (bằng số thứ tự nhóm)."
  },
  {
    id: "g10_d2_p1_c11",
    lessonId: "chude1_nguyentu",
    lessonTitle: "Chủ đề 1: Tính số hạt cơ bản",
    part: "part1",
    level: "hieu",
    category: "tinh_toan",
    code: "H10.1.1",
    defaultParams: { z: 6, a: 12 },
    contentTemplate: "Kim cương là một dạng thù hình được biết đến nhiều nhất của nguyên tố carbon có số hiệu nguyên tử là {z} và số khối là {a}. Tổng số hạt proton, electron và neutron trong nguyên tử carbon là",
    generator: () => {
      const atoms = [
        { name: "carbon", z: 6, a: 12 },
        { name: "oxygen", z: 8, a: 16 },
        { name: "sodium", z: 11, a: 23 },
        { name: "magnesium", z: 12, a: 24 },
        { name: "aluminium", z: 13, a: 27 },
        { name: "phosphorus", z: 15, a: 31 }
      ];
      const at = atoms[Math.floor(Math.random() * atoms.length)];
      const total = at.z * 2 + (at.a - at.z); // = Z + A
      const dist1 = total + 2;
      const dist2 = total - 4;
      const dist3 = at.a;
      const opts = [
        { text: `${total}.`, isCorrect: true },
        { text: `${dist1}.`, isCorrect: false },
        { text: `${dist2}.`, isCorrect: false },
        { text: `${dist3}.`, isCorrect: false }
      ].sort(() => Math.random() - 0.5);
      const letter = ["A", "B", "C", "D"][opts.findIndex(o => o.isCorrect)];
      return {
        content: `Nguyên tử của nguyên tố ${at.name} có số hiệu nguyên tử là ${at.z} và số khối là ${at.a}. Tổng số hạt proton, electron và neutron trong nguyên tử ${at.name} là`,
        options: opts.map(o => o.text),
        correctAnswer: letter,
        explanation: `Số proton = p = ${at.z}; Số electron = e = p = ${at.z}; Số neutron = n = A - Z = ${at.a} - ${at.z} = ${at.a - at.z}.\nTổng số hạt = p + e + n = 2Z + N = ${at.z} + ${at.z} + ${at.a - at.z} = ${total}.`
      };
    },
    content: "Kim cương là một dạng thù hình được biết đến nhiều nhất của nguyên tố carbon. Kim cương có độ cứng rất cao, độ khúc xạ cực tốt nên được ứng dụng trong các ngành công nghiệp và đặc biệt làm đồ trang sức có giá trị kinh tế rất cao. Nguyên tử của nguyên tố carbon có số hiệu nguyên tử là 6 và số khối là 12. Tổng số hạt proton, electron và neutron trong nguyên tử carbon là",
    options: ["38.", "28.", "18.", "8."],
    correctAnswer: "C",
    explanation: "Carbon có Z = 6 => p = e = 6. Số neutron n = A - Z = 12 - 6 = 6. Tổng số hạt = p + e + n = 6 + 6 + 6 = 18."
  },
  {
    id: "g10_d2_p1_c12",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Chu kì trong BTH",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "H10.2.1",
    content: "Cấu hình electron nguyên tử của các nguyên tố X, Y, Z, T lần lượt là: 1s² 2s² 2p⁶ 3s² 3p¹, 1s² 2s² 2p⁶ 3s² 3p⁶ 4s², 1s² 2s² 2p⁶ 3s² 3p³, 1s² 2s² 2p⁶ 3s¹. Dãy gồm các nguyên tố thuộc cùng chu kì là",
    options: ["X, Y, Z, T.", "X, Z.", "X, Z, T.", "Y, Z, T."],
    correctAnswer: "C",
    explanation: "X, Z, T đều có 3 lớp electron nên cùng thuộc chu kì 3. Y có 4 lớp electron thuộc chu kì 4."
  },
  {
    id: "g10_d2_p1_c13",
    lessonId: "chude1_voelectron",
    lessonTitle: "Chủ đề 1: Cấu hình electron nguyên tử",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.1.3",
    content: "Nguyên tử phosphorus (Z = 15) có số electron lớp ngoài cùng là",
    options: ["7.", "4.", "3.", "5."],
    correctAnswer: "D",
    explanation: "Phosphorus (Z = 15): 1s² 2s² 2p⁶ 3s² 3p³ => Lớp ngoài cùng là lớp 3 có 2 + 3 = 5 electron."
  },
  {
    id: "g10_d2_p1_c14",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Vị trí nguyên tố trong BTH",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "H10.2.1",
    content: "Cấu hình electron của nguyên tử nguyên tố X là 1s² 2s² 2p⁶ 3s² 3p². Vị trí của X trong bảng tuần hoàn là",
    options: [
      "ô 12, chu kì 3, nhóm IIA.",
      "ô 14, chu kì 3, nhóm IIA.",
      "ô 12, chu kì 3, nhóm IVA.",
      "ô 14, chu kì 3, nhóm IVA."
    ],
    correctAnswer: "D",
    explanation: "Tổng số e = 14 => Ô 14; có 3 lớp e => Chu kì 3; có 4 electron hóa trị (3s² 3p²) => Nhóm IVA (Silicon)."
  },
  {
    id: "g10_d2_p1_c15",
    lessonId: "chude1_voelectron",
    lessonTitle: "Chủ đề 1: Năng lượng electron các lớp",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "H10.1.3",
    content: "Phát biểu nào sau đây không đúng?",
    options: [
      "Các electron trên cùng một phân lớp có mức năng lượng gần bằng nhau.",
      "Lớp thứ ba có tối đa 18 electron.",
      "Lớp K liên kết với hạt nhân chặt chẽ nhất.",
      "Lớp K có mức năng lượng thấp nhất."
    ],
    correctAnswer: "A",
    explanation: "Các electron trên cùng một phân lớp có mức năng lượng bằng nhau (không phải 'gần bằng nhau')."
  },
  {
    id: "g10_d2_p1_c16",
    lessonId: "chude1_nguyentu",
    lessonTitle: "Chủ đề 1: Phương pháp nghiên cứu hóa học",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "H10.1.1",
    content: "Khi nghiên cứu thành phần hóa học và bước đầu ứng dụng tinh dầu tràm trà trong sản xuất nước súc miệng, các nhà nghiên cứu đã tiến hành: 'Nghiên cứu thành phần hóa học, ứng dụng của tinh dầu tràm trà làm nước súc miệng qua các công trình khoa học trên các tạp chí đã được xuất bản'. Bước làm này ứng với bước nào trong phương pháp nghiên cứu hóa học?",
    options: [
      "Xác định vấn đề nghiên cứu.",
      "Nêu giả thuyết khoa học.",
      "Thực hiện nghiên cứu (lí thuyết, thực nghiệm, ứng dụng).",
      "Viết báo cáo: thảo luận kết quả và kết luận vấn đề."
    ],
    correctAnswer: "A",
    explanation: "Tìm hiểu thông tin tổng quan từ y văn và công trình đã xuất bản để khảo sát và xác định rõ vấn đề nghiên cứu."
  },
  {
    id: "g10_d2_p1_c17",
    lessonId: "chude1_nguyento",
    lessonTitle: "Chủ đề 1: Đồng vị Copper trong CuCl2",
    part: "part1",
    level: "vd",
    category: "tinh_toan",
    code: "H10.1.2",
    defaultParams: { m_dd: 67.25, c_pct: 20 },
    contentTemplate: "Trong tự nhiên copper có hai đồng vị ⁶³Cu và ⁶⁵Cu tương ứng với tỉ lệ số nguyên tử là 3 : 1. Khối lượng ⁶³Cu trong {m_dd} gam dung dịch CuCl₂ {c_pct}% là bao nhiêu gam? Biết nguyên tử khối của Cl là 35,5.",
    generator: () => {
      const dd_list = [67.25, 134.5, 201.75];
      const m_dd = dd_list[Math.floor(Math.random() * dd_list.length)];
      const c_pct = 20;
      // M_Cu_tb = (63*3 + 65*1)/4 = 63.5
      // M_CuCl2 = 63.5 + 71 = 134.5
      const m_cucl2 = (m_dd * c_pct) / 100;
      const n_cucl2 = m_cucl2 / 134.5;
      const n_cu63 = n_cucl2 * 0.75;
      const m_cu63 = Number((n_cu63 * 63).toFixed(3));
      const dist1 = Number((m_cu63 * 0.5).toFixed(3));
      const dist2 = Number((m_cu63 * 1.5).toFixed(3));
      const dist3 = Number((m_cu63 * 1.25).toFixed(3));
      const opts = [
        { text: `${m_cu63.toString().replace('.', ',')}.`, isCorrect: true },
        { text: `${dist1.toString().replace('.', ',')}.`, isCorrect: false },
        { text: `${dist2.toString().replace('.', ',')}.`, isCorrect: false },
        { text: `${dist3.toString().replace('.', ',')}.`, isCorrect: false }
      ].sort(() => Math.random() - 0.5);
      const letter = ["A", "B", "C", "D"][opts.findIndex(o => o.isCorrect)];
      return {
        content: `Trong tự nhiên copper có hai đồng vị ⁶³Cu và ⁶⁵Cu tương ứng với tỉ lệ số nguyên tử là 3 : 1. Khối lượng ⁶³Cu trong ${m_dd.toString().replace('.', ',')} gam dung dịch CuCl₂ ${c_pct}% là bao nhiêu gam? Biết nguyên tử khối của Cl là 35,5.`,
        options: opts.map(o => o.text),
        correctAnswer: letter,
        explanation: `Nguyên tử khối trung bình Cu = (63×3 + 65×1)/4 = 63,5.\nM(CuCl₂) = 63,5 + 35,5×2 = 134,5.\nm(CuCl₂) = ${m_dd} × ${c_pct}% = ${m_cucl2} gam => n(CuCl₂) = ${n_cucl2.toFixed(3)} mol.\nVì tỉ lệ ⁶³Cu : ⁶⁵Cu = 3 : 1 => % số nguyên tử ⁶³Cu = 75%.\nn(⁶³Cu) = ${n_cucl2.toFixed(3)} × 75% = ${n_cu63.toFixed(4)} mol.\nm(⁶³Cu) = ${n_cu63.toFixed(4)} × 63 = ${m_cu63} gam.`
      };
    },
    content: "Trong tự nhiên copper có hai đồng vị ⁶³Cu và ⁶⁵Cu tương ứng với tỉ lệ số nguyên tử là 3 : 1. Khối lượng ⁶³Cu trong 67,25 gam dung dịch CuCl₂ 20% là bao nhiêu gam? Biết nguyên tử khối của Cl là 35,5.",
    options: ["6,300.", "1,575.", "4,785.", "4,725."],
    correctAnswer: "D",
    explanation: "M_tb(Cu) = (63×3 + 65×1)/4 = 63,5. M(CuCl₂) = 134,5.\nm(CuCl₂) = 67,25 × 20% = 13,45 gam => n(CuCl₂) = 0,1 mol.\nn(⁶³Cu) = 0,1 × (3/4) = 0,075 mol => m(⁶³Cu) = 0,075 × 63 = 4,725 gam."
  },
  {
    id: "g10_d2_p1_c18",
    lessonId: "chude1_nguyentu",
    lessonTitle: "Chủ đề 1: Bài toán tổng số hạt",
    part: "part1",
    level: "vd",
    category: "tinh_toan",
    code: "H10.1.1",
    defaultParams: { total: 40, diff: 12 },
    contentTemplate: "Hợp kim chứa nguyên tố X nhẹ và bền, dùng chế tạo vỏ máy bay, tên lửa. Trong nguyên tử X tổng số hạt proton, electron và neutron là {total}. Trong đó tổng số hạt mang điện nhiều hơn tổng số hạt không mang điện là {diff}. Kí hiệu của nguyên tử X là",
    generator: () => {
      const elements = [
        { name: "Aluminium (Al)", z: 13, a: 27, total: 40, diff: 12, sym: "²⁷₁₃X" },
        { name: "Magnesium (Mg)", z: 12, a: 24, total: 36, diff: 12, sym: "²⁴₁₂X" },
        { name: "Sodium (Na)", z: 11, a: 23, total: 34, diff: 10, sym: "²³₁₁X" },
        { name: "Silicon (Si)", z: 14, a: 28, total: 42, diff: 14, sym: "²⁸₁₄X" },
        { name: "Potassium (K)", z: 19, a: 39, total: 58, diff: 18, sym: "³⁹₁₉X" }
      ];
      const el = elements[Math.floor(Math.random() * elements.length)];
      const dist1 = `²⁸₁₄X`;
      const dist2 = `²⁷₁₄X`;
      const dist3 = `²⁸₁₅X`;
      const opts = [
        { text: el.sym, isCorrect: true },
        { text: dist1, isCorrect: dist1 === el.sym ? false : true && false },
        { text: dist2, isCorrect: false },
        { text: dist3, isCorrect: false }
      ];
      // Đảm bảo 4 đáp án phân biệt
      const uniqueOpts = Array.from(new Set([el.sym, "²⁷₁₄X", "²⁸₁₄X", "²⁸₁₅X"]));
      while (uniqueOpts.length < 4) uniqueOpts.push(`³⁰₁₅X`);
      const finalOpts = uniqueOpts.map(t => ({ text: t, isCorrect: t === el.sym })).sort(() => Math.random() - 0.5);
      const letter = ["A", "B", "C", "D"][finalOpts.findIndex(o => o.isCorrect)];
      return {
        content: `Hợp kim chứa nguyên tố X nhẹ và bền, dùng chế tạo vỏ máy bay, tên lửa, đồ gia dụng. Trong nguyên tử X tổng số hạt proton, electron và neutron là ${el.total}. Trong đó tổng số hạt mang điện nhiều hơn tổng số hạt không mang điện là ${el.diff}. Kí hiệu của nguyên tử X là`,
        options: finalOpts.map(o => o.text),
        correctAnswer: letter,
        explanation: `Gọi p, e, n là các loại hạt cơ bản của X. Vì p = e nên:\n2p + n = ${el.total}\n2p - n = ${el.diff}\nCộng hai vế: 4p = ${el.total + el.diff} => p = ${(el.total + el.diff)/4} = ${el.z} => e = ${el.z}.\nThay vào: n = ${el.total} - 2×${el.z} = ${el.a - el.z}.\nSố khối A = p + n = ${el.z} + ${el.a - el.z} = ${el.a}.\nKí hiệu nguyên tử: ${el.sym}.`
      };
    },
    content: "Hợp kim chứa nguyên tố X nhẹ và bền, dùng chế tạo vỏ máy bay, tên lửa. Nguyên tố X còn được sử dụng trong xây dựng, ngành điện và đồ gia dụng. Trong nguyên tử X tổng số hạt proton, electron và neutron là 40. Trong đó tổng số hạt mang điện nhiều hơn tổng số hạt không mang điện là 12. Kí hiệu của nguyên tử X là",
    options: ["²⁷₁₄X.", "²⁷₁₃X.", "²⁸₁₄X.", "²⁸₁₅X."],
    correctAnswer: "B",
    explanation: "Hệ phương trình: 2p + n = 40 và 2p - n = 12 => 4p = 52 => p = 13 (Al). n = 14 => A = 13 + 14 = 27. Kí hiệu nguyên tử là ²⁷₁₃X."
  },

  // --- ĐỀ 3 - PHẦN I ---
  {
    id: "g10_d3_p1_c1",
    lessonId: "chude1_nguyentu",
    lessonTitle: "Chủ đề 1: Khối lượng và điện tích hạt cơ bản",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.1.1",
    content: "Trường hợp nào sau đây có sự tương ứng đúng giữa hạt cơ bản với khối lượng và điện tích của chúng?",
    options: [
      "Proton, m ≈ 0,00055 amu, q = +1.",
      "Neutron, m ≈ 1 amu, q = 0.",
      "Electron, m ≈ 1 amu, q = -1.",
      "Proton, m ≈ 1 amu, q = -1."
    ],
    correctAnswer: "B",
    explanation: "Neutron có khối lượng xấp xỉ 1 amu và không mang điện tích (q = 0)."
  },
  {
    id: "g10_d3_p1_c2",
    lessonId: "chude1_nguyentu",
    lessonTitle: "Chủ đề 1: Số khối của nguyên tử",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.1.1",
    content: "Nguyên tử F có 9 proton, 9 electron và 10 neutron. Số khối của F là",
    options: ["9.", "10.", "19.", "28."],
    correctAnswer: "C",
    explanation: "Số khối A = số proton + số neutron = 9 + 10 = 19."
  },
  {
    id: "g10_d3_p1_c3",
    lessonId: "chude1_voelectron",
    lessonTitle: "Chủ đề 1: Khái niệm Orbital nguyên tử (AO)",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.1.3",
    content: "Orbital nguyên tử là",
    options: [
      "đám mây chứa electron có dạng hình cầu.",
      "đám mây chứa electron có dạng hình số tám nổi.",
      "vùng không gian xung quanh hạt nhân mà ở đó xác suất có mặt electron là lớn nhất (khoảng 90%).",
      "quỹ đạo chuyển động của electron quanh hạt nhân có kích thước và năng lượng xác định."
    ],
    correctAnswer: "C",
    explanation: "Orbital nguyên tử (AO) là khu vực không gian xung quanh hạt nhân mà tại đó xác suất tìm thấy electron là lớn nhất (khoảng 90%)."
  },
  {
    id: "g10_d3_p1_c4",
    lessonId: "chude1_nguyento",
    lessonTitle: "Chủ đề 1: Đồng vị của nguyên tố",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.1.2",
    content: "Hai đồng vị của nguyên tố carbon khác nhau về",
    options: ["cấu hình electron.", "số khối.", "số hiệu nguyên tử.", "số proton."],
    correctAnswer: "B",
    explanation: "Các đồng vị của cùng một nguyên tố có cùng số proton Z nhưng khác số neutron N nên khác số khối A."
  },
  {
    id: "g10_d3_p1_c5",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Ô nguyên tố",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.2.1",
    content: "Số hiệu nguyên tử của nguyên tố hóa học bằng",
    options: [
      "số thứ tự của ô nguyên tố.",
      "số thứ tự của chu kì.",
      "số thứ tự của nhóm.",
      "số electron lớp ngoài cùng."
    ],
    correctAnswer: "A",
    explanation: "Số thứ tự của ô nguyên tố trong bảng tuần hoàn bằng số hiệu nguyên tử (Z) của nguyên tố đó."
  },
  {
    id: "g10_d3_p1_c6",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Tính chất nhóm nguyên tố",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "H10.2.1",
    content: "Các nguyên tố trong cùng một nhóm của bảng tuần hoàn có",
    options: [
      "cùng số lớp electron.",
      "cùng số electron ở lớp vỏ.",
      "tính chất hóa học tương tự nhau.",
      "cùng điện tích hạt nhân."
    ],
    correctAnswer: "C",
    explanation: "Các nguyên tố trong cùng một nhóm có cấu hình electron lớp ngoài cùng tương tự nhau nên có tính chất hóa học tương tự nhau."
  },
  {
    id: "g10_d3_p1_c7",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Bảng tuần hoàn",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.2.1",
    content: "Bảng tuần hoàn hiện nay có số nhóm A và nhóm B là",
    options: ["8 và 8.", "8 và 10.", "7 và 8.", "7 và 9."],
    correctAnswer: "A",
    explanation: "Bảng tuần hoàn gồm 8 nhóm A và 8 nhóm B."
  },
  {
    id: "g10_d3_p1_c8",
    lessonId: "chude1_nguyento",
    lessonTitle: "Chủ đề 1: Kí hiệu nguyên tử Lithium",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "H10.1.2",
    content: "Phát biểu nào sau đây đúng về ⁷₃Li?",
    options: [
      "Hạt nhân nguyên tử có 3 proton và 7 neutron.",
      "Số khối của hạt nhân nguyên tử là 3, số hiệu nguyên tử là 7.",
      "Nguyên tử có 3 electron, hạt nhân có 3 proton và 4 neutron.",
      "Nguyên tử có 3 electron, hạt nhân có 4 proton và 3 neutron."
    ],
    correctAnswer: "C",
    explanation: "⁷₃Li có Z = 3 => p = e = 3. Số neutron n = A - Z = 7 - 3 = 4."
  },
  {
    id: "g10_d3_p1_c9",
    lessonId: "chude1_voelectron",
    lessonTitle: "Chủ đề 1: Số electron lớp ngoài cùng",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "H10.1.3",
    content: "Phát biểu nào sau đây không đúng?",
    options: [
      "Các nguyên tử có 2 electron lớp ngoài cùng đều là nguyên tử kim loại.",
      "Các electron lớp ngoài cùng quyết định tính chất hóa học của nguyên tố.",
      "Các nguyên tử có 8 electron lớp ngoài cùng đều là nguyên tử khí hiếm.",
      "Đối với nguyên tử của tất cả các nguyên tố, lớp ngoài cùng có nhiều nhất 8 electron."
    ],
    correctAnswer: "A",
    explanation: "Helium (He, Z=2) có 2 electron lớp ngoài cùng nhưng là phi kim (khí hiếm); Hydrogen có 1e; chỉ có 2e không nhất thiết là kim loại."
  },
  {
    id: "g10_d3_p1_c10",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Nguyên tắc sắp xếp BTH",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "H10.2.1",
    content: "Phát biểu nào sau đây không phù hợp với nguyên tắc sắp xếp các nguyên tố trong bảng tuần hoàn?",
    options: [
      "Các nguyên tố được xếp theo chiều tăng của điện tích hạt nhân.",
      "Các nguyên tố có cùng số lớp electron được xếp thành một hàng.",
      "Các nguyên tố có cùng số electron hóa trị được xếp thành một cột.",
      "Các nguyên tố được xếp theo chiều tăng của nguyên tử khối."
    ],
    correctAnswer: "D",
    explanation: "Bảng tuần hoàn sắp xếp theo chiều tăng của điện tích hạt nhân, không phải theo nguyên tử khối (có trường hợp đảo nguyên tử khối như Ar và K, Te và I)."
  },
  {
    id: "g10_d3_p1_c11",
    lessonId: "chude1_nguyentu",
    lessonTitle: "Chủ đề 1: Điện tích lớp vỏ nguyên tử",
    part: "part1",
    level: "hieu",
    category: "tinh_toan",
    code: "H10.1.1",
    content: "Nguyên tử magnesium (Mg) có 12 electron. Biết điện tích của 1 electron là -1,602.10⁻¹⁹ C. Điện tích của lớp vỏ nguyên tử Mg là",
    options: [
      "-1,9224.10⁻¹⁸ C.",
      "-12 C.",
      "+1,9224.10⁻¹⁸ C.",
      "-3,8448.10⁻¹⁸ C."
    ],
    correctAnswer: "A",
    explanation: "q(vỏ) = 12 × (-1,602.10⁻¹⁹ C) = -1,9224.10⁻¹⁸ C."
  },
  {
    id: "g10_d3_p1_c12",
    lessonId: "chude1_voelectron",
    lessonTitle: "Chủ đề 1: Lớp electron Potassium",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.1.3",
    content: "Nguyên tử nguyên tố K (Z = 19) có số lớp electron là",
    options: ["1.", "2.", "3.", "4."],
    correctAnswer: "D",
    explanation: "Cấu hình e của K (Z = 19): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ => có 4 lớp electron."
  },
  {
    id: "g10_d3_p1_c13",
    lessonId: "chude1_voelectron",
    lessonTitle: "Chủ đề 1: Nguyên tố s",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.1.3",
    content: "Cấu hình electron nguyên tử nào sau đây là của nguyên tố s?",
    options: [
      "1s² 2s² 2p³.",
      "1s² 2s² 2p⁶ 3s¹.",
      "1s² 2s² 2p⁶ 3s² 3p⁵.",
      "1s² 2s² 2p⁶ 3s² 3p⁴."
    ],
    correctAnswer: "B",
    explanation: "Nguyên tố s là nguyên tố có electron cuối cùng được điền vào phân lớp s. 1s² 2s² 2p⁶ 3s¹ là nguyên tố s (Natri)."
  },
  {
    id: "g10_d3_p1_c14",
    lessonId: "chude1_nguyento",
    lessonTitle: "Chủ đề 1: Phổ khối lượng đồng vị Silver (Ag)",
    part: "part1",
    level: "vd",
    category: "tinh_toan",
    code: "H10.1.2",
    content: "Cho phổ khối lượng MS của silver (Ag) gồm hai đồng vị: ¹⁰⁷Ag chiếm 51,8% và ¹⁰⁹Ag chiếm 48,2%. Nguyên tử khối trung bình của nguyên tố silver là",
    options: ["107,964.", "108,000.", "107,987.", "108,012."],
    correctAnswer: "A",
    explanation: "A_tb = (107 × 51,8 + 109 × 48,2) / 100 = (5542,6 + 5253,8) / 100 = 107,964."
  },
  {
    id: "g10_d3_p1_c15",
    lessonId: "chude1_voelectron",
    lessonTitle: "Chủ đề 1: Năng lượng orbital",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "H10.1.3",
    content: "Phát biểu nào đúng khi nói về các orbital trong một phân lớp electron?",
    options: [
      "Có cùng sự định hướng không gian.",
      "Có cùng mức năng lượng.",
      "Khác nhau về mức năng lượng.",
      "Có hình dạng không phụ thuộc vào đặc điểm mỗi phân lớp."
    ],
    correctAnswer: "B",
    explanation: "Các orbital thuộc cùng một phân lớp electron luôn có mức năng lượng bằng nhau."
  },
  {
    id: "g10_d3_p1_c16",
    lessonId: "chude1_nguyentu",
    lessonTitle: "Chủ đề 1: Biến đổi vật lí và hóa học",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.1.1",
    content: "Cho các quá trình biến đổi sau: (1) Nước sôi bay hơi. (2) Nhúng đinh sắt vào dung dịch hydrochloric acid thấy sủi bọt khí và đinh sắt tan dần. Khẳng định nào sau đây là đúng?",
    options: [
      "(1) là quá trình biến đổi vật lí, (2) là quá trình biến đổi hóa học.",
      "(1) là quá trình biến đổi hóa học, (2) là quá trình biến đổi vật lí.",
      "Cả (1) và (2) đều là quá trình biến đổi hóa học.",
      "Cả (1) và (2) đều là quá trình biến đổi vật lí."
    ],
    correctAnswer: "A",
    explanation: "(1) Nước bay hơi là hiện tượng chuyển thể (vật lí). (2) Fe + 2HCl -> FeCl₂ + H₂ sinh ra chất mới là hiện tượng hóa học."
  },
  {
    id: "g10_d3_p1_c17",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Vị trí nguyên tố trong BTH",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "H10.2.1",
    content: "Hạt nhân nguyên tử của nguyên tố X có điện tích là 7+. Vị trí của X trong bảng tuần hoàn là",
    options: [
      "chu kì 2, nhóm IIIA.",
      "chu kì 2, nhóm IIIB.",
      "chu kì 2, nhóm VA.",
      "chu kì 2, nhóm VB."
    ],
    correctAnswer: "C",
    explanation: "Điện tích hạt nhân 7+ => Z = 7 => Cấu hình e: 1s² 2s² 2p³ => 2 lớp e (chu kì 2), 5 electron hóa trị (nhóm VA, Nitrogen)."
  },
  {
    id: "g10_d3_p1_c18",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Tính chất phi kim nhóm VIA",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "H10.2.1",
    content: "Nguyên tử nguyên tố X có phân lớp electron ngoài cùng là 3p⁴. Phát biểu nào sau đây về X không đúng?",
    options: ["X có 16 proton.", "X là kim loại.", "X thuộc chu kì 3.", "X thuộc nhóm VIA."],
    correctAnswer: "B",
    explanation: "X có cấu hình 1s² 2s² 2p⁶ 3s² 3p⁴ (Z=16, S) có 6 electron lớp ngoài cùng nên là phi kim, không phải kim loại."
  },

  // --- ĐỀ 4 & 5 - PHẦN I ---
  {
    id: "g10_d4_p1_c1",
    lessonId: "chude1_nguyentu",
    lessonTitle: "Chủ đề 1: Đối tượng nghiên cứu",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.1.1",
    content: "Nội dung nào dưới đây không phải là đối tượng nghiên cứu của hóa học?",
    options: [
      "Thành phần, cấu trúc của chất.",
      "Tính chất và sự biến đổi của chất.",
      "Ứng dụng của chất.",
      "Sự lớn lên và sinh sản của tế bào."
    ],
    correctAnswer: "D",
    explanation: "Sự lớn lên và sinh sản của tế bào là đối tượng nghiên cứu của sinh học."
  },
  {
    id: "g10_d4_p1_c2",
    lessonId: "chude1_nguyentu",
    lessonTitle: "Chủ đề 1: Khối lượng hạt cơ bản",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.1.1",
    content: "Trong nguyên tử, loại hạt có khối lượng không đáng kể so với các hạt còn lại là",
    options: ["proton.", "electron.", "neutron.", "alpha."],
    correctAnswer: "B",
    explanation: "Khối lượng của electron xấp xỉ 0,00055 amu, rất nhỏ (khoảng 1/1836 khối lượng proton) nên xem như không đáng kể."
  },
  {
    id: "g10_d4_p1_c3",
    lessonId: "chude1_nguyento",
    lessonTitle: "Chủ đề 1: Số neutron của Đồng (Cu)",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.1.2",
    content: "Nguyên tử ⁶³₂₉Cu có số neutron là",
    options: ["34.", "63.", "92.", "87."],
    correctAnswer: "A",
    explanation: "Số neutron N = A - Z = 63 - 29 = 34."
  },
  {
    id: "g10_d4_p1_c4",
    lessonId: "chude1_voelectron",
    lessonTitle: "Chủ đề 1: Trật tự mức năng lượng",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "H10.1.3",
    content: "Theo thứ tự mức năng lượng, sự sắp xếp nào sau đây không đúng?",
    options: ["1s < 2s.", "4s > 3s.", "4d < 5s.", "3p < 3d."],
    correctAnswer: "C",
    explanation: "Theo nguyên lí Klechkowski: 5s có mức năng lượng thấp hơn 4d (5s < 4d)."
  },
  {
    id: "g10_d4_p1_c6",
    lessonId: "chude1_nguyento",
    lessonTitle: "Chủ đề 1: Đồng vị phân tử N2",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "H10.1.2",
    content: "Nguyên tố nitrogen có hai đồng vị tự nhiên là ¹⁴₇N và ¹⁵₇N. Số loại phân tử N₂ tạo thành từ hai đồng vị trên là",
    options: ["3.", "2.", "4.", "1."],
    correctAnswer: "A",
    explanation: "Có 3 loại phân tử N₂: ¹⁴N-¹⁴N, ¹⁴N-¹⁵N, ¹⁵N-¹⁵N."
  },
  {
    id: "g10_d4_p1_c7",
    lessonId: "chude1_voelectron",
    lessonTitle: "Chủ đề 1: Electron độc thân Phosphorus",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "H10.1.3",
    content: "Sự phân bố electron vào orbital của nguyên tử phosphorus (P, Z = 15) ở phân lớp 3p là [↑][↑][↑]. Số electron độc thân của nguyên tử phosphorus là",
    options: ["1.", "2.", "3.", "4."],
    correctAnswer: "C",
    explanation: "Phân lớp 3p có 3 electron chia đều vào 3 orbital p theo quy tắc Hund, do đó có 3 electron độc thân."
  },
  {
    id: "g10_d4_p1_c11",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Chu kì nhỏ và chu kì lớn",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.2.1",
    content: "Trong bảng tuần hoàn các nguyên tố, số chu kì nhỏ và số chu kì lớn lần lượt là",
    options: ["3 và 3.", "4 và 3.", "4 và 4.", "3 và 4."],
    correctAnswer: "D",
    explanation: "Chu kì 1, 2, 3 là các chu kì nhỏ; chu kì 4, 5, 6, 7 là các chu kì lớn => Có 3 chu kì nhỏ và 4 chu kì lớn."
  },
  {
    id: "g10_d4_p1_c12",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Cấu hình ion X2-",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "H10.2.1",
    content: "Ion X²⁻ có cấu hình electron lớp ngoài cùng là 3s² 3p⁶. Vị trí (chu kì, nhóm) của nguyên tố X trong bảng tuần hoàn là",
    options: [
      "chu kì 3, nhóm VIA.",
      "chu kì 4, nhóm IIIA.",
      "chu kì 3, nhóm IVA.",
      "chu kì 4, nhóm IIA."
    ],
    correctAnswer: "A",
    explanation: "Ion X²⁻ nhận 2e để có cấu hình 3s² 3p⁶ => Nguyên tử X có cấu hình ngoài cùng 3s² 3p⁴ (Z=16) => Chu kì 3, nhóm VIA."
  },
  {
    id: "g10_d4_p1_c17",
    lessonId: "chude1_voelectron",
    lessonTitle: "Chủ đề 1: Cấu hình electron của Đồng (Cu)",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "H10.1.3",
    content: "Cấu hình electron đúng của Cu (Z = 29) là",
    options: [
      "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s¹.",
      "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁹ 4s².",
      "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁹.",
      "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰."
    ],
    correctAnswer: "A",
    explanation: "Cu có hiện tượng bán bão hòa chuyển 1e từ 4s sang 3d để đạt cấu hình bão hòa 3d¹⁰ bền vững: [Ar] 3d¹⁰ 4s¹."
  },
  {
    id: "g10_d5_p1_c6",
    lessonId: "chude2_tuanhoan_tinhchat",
    lessonTitle: "Chủ đề 2: Xu hướng bán kính nguyên tử trong chu kì",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.2.2",
    content: "Trong một chu kì, theo chiều từ trái sang phải, bán kính nguyên tử của các nguyên tố thuộc nhóm A",
    options: ["tăng dần.", "giảm dần.", "không thay đổi.", "biến đổi không theo quy luật."],
    correctAnswer: "B",
    explanation: "Trong một chu kì từ trái sang phải, điện tích hạt nhân tăng dần trong khi số lớp e không đổi làm lực hút giữa hạt nhân và e lớp ngoài cùng tăng, bán kính nguyên tử giảm dần."
  },
  {
    id: "g10_d5_p1_c7",
    lessonId: "chude2_tuanhoan_tinhchat",
    lessonTitle: "Chủ đề 2: Xu hướng bán kính nguyên tử trong nhóm",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.2.2",
    content: "Trong một nhóm A, theo chiều từ trên xuống dưới, bán kính nguyên tử của các nguyên tố",
    options: ["tăng dần.", "giảm dần.", "không thay đổi.", "biến đổi không theo quy luật."],
    correctAnswer: "A",
    explanation: "Trong một nhóm A từ trên xuống dưới, số lớp electron tăng dần làm bán kính nguyên tử tăng dần."
  },
  {
    id: "g10_d5_p1_c8",
    lessonId: "chude2_tuanhoan_tinhchat",
    lessonTitle: "Chủ đề 2: Khái niệm độ âm điện",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.2.2",
    content: "Độ âm điện đặc trưng cho khả năng",
    options: [
      "hút electron của nguyên tử trong phân tử.",
      "nhường electron của nguyên tử này cho nguyên tử khác.",
      "tham gia phản ứng mạnh hay yếu.",
      "nhường proton của nguyên tử này cho nguyên tử khác."
    ],
    correctAnswer: "A",
    explanation: "Độ âm điện của một nguyên tử đặc trưng cho khả năng hút electron của nguyên tử đó khi hình thành liên kết hóa học."
  },
  {
    id: "g10_d5_p1_c11",
    lessonId: "chude2_tuanhoan_tinhchat",
    lessonTitle: "Chủ đề 2: Biến đổi tính kim loại trong chu kì",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.2.2",
    content: "Trong mỗi chu kì, theo chiều tăng của điện tích hạt nhân, tính kim loại của các nguyên tố",
    options: ["giảm dần.", "tăng dần.", "không thay đổi.", "biến đổi không theo quy luật."],
    correctAnswer: "A",
    explanation: "Trong một chu kì từ trái sang phải, tính kim loại giảm dần và tính phi kim tăng dần."
  },
  {
    id: "g10_d5_p1_c17",
    lessonId: "chude2_tuanhoan_tinhchat",
    lessonTitle: "Chủ đề 2: So sánh bán kính nguyên tử",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "H10.2.2",
    content: "Nguyên tử của nguyên tố nào có bán kính lớn nhất trong các nguyên tử sau đây: Al, P, S, K?",
    options: ["Al.", "P.", "S.", "K."],
    correctAnswer: "D",
    explanation: "K thuộc chu kì 4 (có 4 lớp electron), trong khi Al, P, S thuộc chu kì 3 (3 lớp electron). Do đó K có bán kính nguyên tử lớn nhất."
  },
  {
    id: "g10_d5_p1_c21",
    lessonId: "chude2_tuanhoan_tinhchat",
    lessonTitle: "Chủ đề 2: Thứ tự giảm dần bán kính nguyên tử",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "H10.2.2",
    content: "Bán kính nguyên tử của các nguyên tố: ₃Li, ₈O, ₉F, ₁₁Na được xếp theo thứ tự giảm dần từ trái sang phải là",
    options: [
      "F, O, Li, Na.",
      "F, Na, O, Li.",
      "Li, Na, O, F.",
      "Na, Li, O, F."
    ],
    correctAnswer: "D",
    explanation: "Na chu kì 3 có 3 lớp e lớn nhất. Li, O, F chu kì 2 (2 lớp e) giảm dần theo chiều tăng Z: Li > O > F => Thứ tự: Na > Li > O > F."
  },
  {
    id: "g10_d5_p1_c28",
    lessonId: "chude2_tuanhoan_tinhchat",
    lessonTitle: "Chủ đề 2: Phi kim mạnh nhất",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "H10.2.2",
    content: "Cho các nguyên tố ₈O, ₉F, ₁₄Si, ₁₆S. Nguyên tố có tính phi kim lớn nhất trong số các nguyên tố trên là",
    options: ["O.", "F.", "S.", "Si."],
    correctAnswer: "B",
    explanation: "Fluorine (F) có độ âm điện lớn nhất (3,98) và là phi kim hoạt động mạnh nhất trong bảng tuần hoàn."
  },
  {
    id: "g10_d5_p1_c32",
    lessonId: "chude2_tuanhoan_tinhchat",
    lessonTitle: "Chủ đề 2: Kim loại mạnh nhất",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "H10.2.2",
    content: "Nguyên tử của nguyên tố nào sau đây có tính kim loại mạnh nhất? Cho biết nguyên tố này được sử dụng trong đồng hồ nguyên tử với độ chính xác cao.",
    options: ["Hydrogen.", "Berylium.", "Caesium.", "Phosphorus."],
    correctAnswer: "C",
    explanation: "Caesium (Cs) là kim loại kiềm nhóm IA có bán kính lớn, độ âm điện nhỏ nhất trong các nguyên tố bền nên có tính kim loại mạnh nhất."
  },
  {
    id: "g10_d5_p1_c40",
    lessonId: "chude2_tuanhoan_tinhchat",
    lessonTitle: "Chủ đề 2: Công thức oxide cao nhất nhóm IIIA",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.2.3",
    content: "X là nguyên tố nhóm IIIA. Công thức oxide ứng với hóa trị cao nhất của X là",
    options: ["XO.", "XO₂.", "X₂O.", "X₂O₃."],
    correctAnswer: "D",
    explanation: "Nguyên tố nhóm IIIA có hóa trị cao nhất với oxygen là III => Công thức oxide cao nhất là X₂O₃."
  },
  {
    id: "g10_d5_p1_c44",
    lessonId: "chude2_tuanhoan_tinhchat",
    lessonTitle: "Chủ đề 2: Oxide cao nhất của Silicon",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "H10.2.3",
    content: "Nguyên tố silicon (Si) thuộc chu kì 3, nhóm IVA trong bảng tuần hoàn các nguyên tố hoá học. Công thức oxide cao nhất của silicon là",
    options: ["SiO₂.", "SiO.", "H₂SiO₃.", "SiH₄."],
    correctAnswer: "A",
    explanation: "Silicon nhóm IVA có hóa trị cao nhất là IV => Công thức oxide cao nhất là SiO₂."
  },
  {
    id: "g10_d5_p1_c46",
    lessonId: "chude2_tuanhoan_tinhchat",
    lessonTitle: "Chủ đề 2: Acid mạnh nhất chu kì 3",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "H10.2.3",
    content: "Trong các hydroxide của các nguyên tố chu kỳ 3, acid mạnh nhất là",
    options: ["H₂SO₄.", "HClO₄.", "H₂SiO₃.", "H₃PO₄."],
    correctAnswer: "B",
    explanation: "Trong chu kì 3 từ trái sang phải tính acid tăng dần: H₂SiO₃ < H₃PO₄ < H₂SO₄ < HClO₄ (perchloric acid là acid mạnh nhất)."
  },
  {
    id: "g10_d5_p1_c48",
    lessonId: "chude2_tuanhoan_tinhchat",
    lessonTitle: "Chủ đề 2: Thứ tự giảm dần tính base",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "H10.2.3",
    content: "Cho các oxide sau: Na₂O, Al₂O₃, SiO₂, MgO. Thứ tự giảm dần tính base là",
    options: [
      "Na₂O > Al₂O₃ > MgO > SiO₂.",
      "Al₂O₃ > SiO₂ > MgO > Na₂O.",
      "Na₂O > MgO > Al₂O₃ > SiO₂.",
      "MgO > Na₂O > Al₂O₃ > SiO₂."
    ],
    correctAnswer: "C",
    explanation: "Trong chu kì 3 theo chiều tăng Z, tính base của các oxide giảm dần: Na₂O (base mạnh) > MgO (base yếu) > Al₂O₃ (lưỡng tính) > SiO₂ (oxide acid yếu)."
  },

  // =========================================================================
  // PHẦN II: TRẮC NGHIỆM ĐÚNG - SAI (TỪ ĐỀ ÔN TẬP 1 ĐẾN 5)
  // =========================================================================
  {
    id: "g10_p2_d1_c1",
    lessonId: "chude1_nguyentu",
    lessonTitle: "Chủ đề 1: Cấu tạo nguyên tử Sắt (Fe)",
    part: "part2",
    level: "hieu",
    category: "lythuyet",
    code: "H10.1.1",
    content: "X là nguyên tố phổ biến thứ 4 trong vỏ Trái Đất, X có trong hemoglobin của máu làm nhiệm vụ vận chuyển oxygen duy trì sự sống. Nguyên tử X có 26 proton và 30 neutron trong hạt nhân.",
    items: [
      { id: "a", text: "X có 26 electron ở lớp vỏ nguyên tử.", isTrue: true, explanation: "Đúng, nguyên tử trung hòa điện nên số e = số p = 26." },
      { id: "b", text: "Điện tích hạt nhân của nguyên tử X là +30.", isTrue: false, explanation: "Sai, điện tích hạt nhân bằng +Z = +26." },
      { id: "c", text: "Số khối của nguyên tử X bằng 56.", isTrue: true, explanation: "Đúng, số khối A = p + n = 26 + 30 = 56." },
      { id: "d", text: "Kí hiệu nguyên tử X là ⁵⁶₂₆X.", isTrue: true, explanation: "Đúng, kí hiệu nguyên tử có số khối 56 ở trên và số hiệu 26 ở dưới." }
    ]
  },
  {
    id: "g10_p2_d1_c2",
    lessonId: "chude1_nguyento",
    lessonTitle: "Chủ đề 1: Kí hiệu và đồng vị nguyên tử",
    part: "part2",
    level: "hieu",
    category: "lythuyet",
    code: "H10.1.2",
    content: "Cho ba nguyên tử có kí hiệu sau: ²⁶₁₃X, ⁵⁵₂₆Y, ²⁶₁₂Z.",
    items: [
      { id: "a", text: "X và Z có cùng số khối.", isTrue: true, explanation: "Đúng, cả X và Z đều có số khối A = 26." },
      { id: "b", text: "X và Z là 2 đồng vị của cùng một nguyên tố hoá học.", isTrue: false, explanation: "Sai, X có Z=13 còn Z có Z=12 nên thuộc hai nguyên tố khác nhau." },
      { id: "c", text: "X và Y có cùng số neutron.", isTrue: false, explanation: "Sai, n(X) = 26 - 13 = 13; n(Y) = 55 - 26 = 29." },
      { id: "d", text: "Y và Z thuộc cùng một nguyên tố hoá học.", isTrue: false, explanation: "Sai, Y có Z=26 còn Z có Z=12." }
    ]
  },
  {
    id: "g10_p2_d1_c3",
    lessonId: "chude1_voelectron",
    lessonTitle: "Chủ đề 1: Orbital nguyên tử (AO)",
    part: "part2",
    level: "hieu",
    category: "lythuyet",
    code: "H10.1.3",
    content: "Cho các phát biểu sau về orbital nguyên tử (AO):",
    items: [
      { id: "a", text: "Orbital nguyên tử là khu vực không gian xung quanh hạt nhân mà xác suất có mặt electron khoảng 90%.", isTrue: true, explanation: "Đúng, theo định nghĩa AO." },
      { id: "b", text: "AO s có dạng hình cầu, AO p có hình dạng số 8 nổi.", isTrue: true, explanation: "Đúng, AO s đối xứng cầu, AO p có dạng số 8 nổi định hướng theo các trục x, y, z." },
      { id: "c", text: "Số AO trong phân lớp p và d lần lượt là 6, 10.", isTrue: false, explanation: "Sai, số AO trong phân lớp p là 3, phân lớp d là 5 (chứa tối đa 6e và 10e)." },
      { id: "d", text: "Mỗi orbital chứa tối đa là 2 electron và có chiều tự quay ngược nhau.", isTrue: true, explanation: "Đúng, theo nguyên lí loại trừ Pauli." }
    ]
  },
  {
    id: "g10_p2_d2_c2",
    lessonId: "chude1_nguyento",
    lessonTitle: "Chủ đề 1: Đồng vị Silicon (Si)",
    part: "part2",
    level: "hieu",
    category: "lythuyet",
    code: "H10.1.2",
    content: "Silicon (Si) là nguyên tố được sử dụng để chế tạo vật liệu bán dẫn, có vai trò quan trọng trong sản xuất vi mạch công nghệ. Trong tự nhiên, nguyên tố này có 3 đồng vị với số khối lần lượt là 28, 29, 30. Biết nguyên tố silicon có số hiệu nguyên tử là 14.",
    items: [
      { id: "a", text: "Kí hiệu các đồng vị của silicon: ²⁸₁₄Si, ²⁹₁₄Si, ³⁰₁₄Si.", isTrue: true, explanation: "Đúng, các đồng vị đều có Z=14 và số khối tương ứng." },
      { id: "b", text: "Các đồng vị của Si cùng số proton nhưng khác số khối.", isTrue: true, explanation: "Đúng, cùng Z = 14 nhưng số neutron khác nhau (14, 15, 16)." },
      { id: "c", text: "Các đồng vị của Si có tính chất vật lí giống nhau.", isTrue: false, explanation: "Sai, các đồng vị khác nhau về một số tính chất vật lí như khối lượng, nhiệt độ nóng chảy." },
      { id: "d", text: "Các đồng vị của Si có tính chất hóa học cơ bản giống nhau.", isTrue: true, explanation: "Đúng, các đồng vị có cùng cấu hình electron nên tính chất hóa học giống nhau." }
    ]
  },
  {
    id: "g10_p2_d2_c3",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Cấu tạo và vị trí của Calcium (Ca)",
    part: "part2",
    level: "hieu",
    category: "lythuyet",
    code: "H10.2.1",
    content: "Nguyên tố calcium (Ca, Z = 20) đóng vai trò quan trọng đối với cơ thể sinh vật, đặc biệt là xương và răng. Trong bảng tuần hoàn Ca ở chu kì 4, nhóm IIA.",
    items: [
      { id: "a", text: "Cấu hình electron của nguyên tử Ca là 1s² 2s² 2p⁶ 3s² 3p⁶ 4s².", isTrue: true, explanation: "Đúng, Ca có Z=20 với cấu hình [Ar] 4s²." },
      { id: "b", text: "Lớp ngoài cùng của nguyên tử Ca có 4 electron.", isTrue: false, explanation: "Sai, Ca có 2 electron ở phân lớp ngoài cùng 4s²." },
      { id: "c", text: "Ca là nguyên tố kim loại.", isTrue: true, explanation: "Đúng, Ca có 2e lớp ngoài cùng là kim loại kiềm thổ điển hình." },
      { id: "d", text: "Khi nguyên tử Ca nhường đi 2 electron thì tạo thành ion Ca²⁺ có 18 electron.", isTrue: true, explanation: "Đúng, Ca nhường 2e tạo cation Ca²⁺ có 18e (cấu hình bền của Ar)." }
    ]
  },
  {
    id: "g10_p2_d3_c2",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Vị trí và tính chất nguyên tố X",
    part: "part2",
    level: "hieu",
    category: "lythuyet",
    code: "H10.2.1",
    content: "Nguyên tử nguyên tố X có 3 lớp electron, lớp ngoài cùng có 4 electron.",
    items: [
      { id: "a", text: "Nguyên tố X thuộc chu kì 3, nhóm IVA trong bảng tuần hoàn các nguyên tố hóa học.", isTrue: true, explanation: "Đúng, 3 lớp e => chu kì 3; 4e ngoài cùng nhóm IVA." },
      { id: "b", text: "Số hiệu nguyên tử của X là 12.", isTrue: false, explanation: "Sai, Cấu hình e là 1s² 2s² 2p⁶ 3s² 3p² => Z = 14 (Silicon)." },
      { id: "c", text: "Ở trạng thái cơ bản, các phân lớp electron của nguyên tử X đã bão hòa.", isTrue: false, explanation: "Sai, phân lớp 3p có 2e chưa bão hòa (tối đa 6e)." },
      { id: "d", text: "X là nguyên tố kim loại.", isTrue: false, explanation: "Sai, Silicon (Z=14) là một phi kim (chất bán dẫn)." }
    ]
  },
  {
    id: "g10_p2_d5_c1",
    lessonId: "chude2_tuanhoan_tinhchat",
    lessonTitle: "Chủ đề 2: Tính chất nhóm Halogen (VIIA)",
    part: "part2",
    level: "hieu",
    category: "lythuyet",
    code: "H10.2.2",
    content: "Cho các nguyên tố thuộc nhóm halogen (VIIA): F, Cl, Br, I.",
    items: [
      { id: "a", text: "Độ âm điện giảm dần theo thứ tự: F, Cl, Br, I.", isTrue: true, explanation: "Đúng, trong nhóm A từ trên xuống dưới, độ âm điện giảm dần: F (3,98) > Cl (3,16) > Br (2,96) > I (2,66)." },
      { id: "b", text: "Bán kính nguyên tử tăng dần theo thứ tự: F, Cl, Br, I.", isTrue: true, explanation: "Đúng, từ trên xuống dưới số lớp electron tăng dần nên bán kính tăng dần." },
      { id: "c", text: "Nguyên tử của nguyên tố F có lực hút giữa hạt nhân và electron lớp ngoài cùng lớn nhất.", isTrue: true, explanation: "Đúng, do F có bán kính nhỏ nhất và độ âm điện lớn nhất." },
      { id: "d", text: "Nguyên tử của nguyên tố I dễ nhận electron nhất.", isTrue: false, explanation: "Sai, F có độ âm điện lớn nhất nên dễ nhận electron nhất; I có tính phi kim yếu nhất trong nhóm." }
    ]
  },

  // =========================================================================
  // PHẦN III: TRẮC NGHIỆM TRẢ LỜI NGẮN (TỪ ĐỀ ÔN TẬP 1 ĐẾN 5)
  // =========================================================================
  {
    id: "g10_p3_d1_c1",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Cấu trúc cột BTH",
    part: "part3",
    level: "biet",
    category: "lythuyet",
    code: "H10.2.1",
    content: "Bảng tuần hoàn hiện nay gồm 8 nhóm A và 8 nhóm B tương ứng với bao nhiêu cột?",
    correctAnswer: "18",
    explanation: "Bảng tuần hoàn gồm 18 cột: nhóm IA đến VIIIA (8 cột), nhóm IB đến VIIB (7 cột), và nhóm VIIIB gồm 3 cột. Tổng cộng 18 cột."
  },
  {
    id: "g10_p3_d1_c2",
    lessonId: "chude1_voelectron",
    lessonTitle: "Chủ đề 1: Đếm số nguyên tố kim loại",
    part: "part3",
    level: "hieu",
    category: "lythuyet",
    code: "H10.1.3",
    content: "Cho cấu hình electron của các nguyên tử nguyên tố: (1) 1s²; (2) 1s² 2s² 2p⁶ 3s¹; (3) 1s² 2s² 2p⁶ 3s² 3p⁴; (4) 1s² 2s² 2p⁶ 3s² 3p¹; (5) 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²; (6) 1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁵. Số lượng các nguyên tố kim loại trong số các nguyên tố trên là bao nhiêu?",
    correctAnswer: "3",
    explanation: "(1) He: khí hiếm; (2) Na: kim loại; (3) S: phi kim; (4) Al: kim loại; (5) Fe: kim loại chuyển tiếp; (6) Br: phi kim. Vậy có 3 nguyên tố kim loại là (2), (4), (5)."
  },
  {
    id: "g10_p3_d1_c4",
    lessonId: "chude1_nguyento",
    lessonTitle: "Chủ đề 1: Phổ khối lượng đồng vị Neon",
    part: "part3",
    level: "vd",
    category: "tinh_toan",
    code: "H10.1.2",
    content: "Tỉ lệ phần trăm số nguyên tử các đồng vị của neon (Ne) xác định theo phổ khối lượng gồm: ²⁰Ne (90,0%), ²¹Ne (1,0%) và ²²Ne (9,0%). Nguyên tử khối trung bình của Neon là bao nhiêu? (Làm tròn đến hàng phần mười)",
    correctAnswer: "20,2",
    explanation: "A_tb = (20×90,0 + 21×1,0 + 22×9,0) / 100 = (1800 + 21 + 198) / 100 = 2019 / 100 = 20,19 ≈ 20,2."
  },
  {
    id: "g10_p3_d1_c5",
    lessonId: "chude1_voelectron",
    lessonTitle: "Chủ đề 1: Đếm nguyên tố có 1 electron hóa trị",
    part: "part3",
    level: "hieu",
    category: "lythuyet",
    code: "H10.1.3",
    content: "Cho nguyên tử của các nguyên tố sau: ₃X, ₉Y, ₁₂Z, ₁₃T, ₁₉G, ₂₀R. Có bao nhiêu nguyên tố có 1 electron hóa trị?",
    correctAnswer: "2",
    explanation: "₃X (Li: 1s² 2s¹ -> 1e hóa trị); ₉Y (F: 2s² 2p⁵ -> 7e); ₁₂Z (Mg: 3s² -> 2e); ₁₃T (Al: 3s² 3p¹ -> 3e); ₁₉G (K: 4s¹ -> 1e hóa trị); ₂₀R (Ca: 4s² -> 2e). Có 2 nguyên tố là ₃X và ₁₉G."
  },
  {
    id: "g10_p3_d2_c1",
    lessonId: "chude1_voelectron",
    lessonTitle: "Chủ đề 1: Đếm nguyên tố s",
    part: "part3",
    level: "hieu",
    category: "lythuyet",
    code: "H10.1.3",
    content: "Cho các nguyên tố sau: ₃Li, ₈O, ₉F, ₁₁Na, ₁₅P, ₂₀Ca. Có bao nhiêu nguyên tố trong dãy trên là nguyên tố s?",
    correctAnswer: "3",
    explanation: "Nguyên tố s có e cuối cùng điền vào phân lớp s: ₃Li (2s¹), ₁₁Na (3s¹), ₂₀Ca (4s²). Các nguyên tố ₈O (2p⁴), ₉F (2p⁵), ₁₅P (3p³) là nguyên tố p. Có 3 nguyên tố s."
  },
  {
    id: "g10_p3_d2_c4",
    lessonId: "chude1_voelectron",
    lessonTitle: "Chủ đề 1: Số electron lớp L của Sulfur",
    part: "part3",
    level: "hieu",
    category: "lythuyet",
    code: "H10.1.3",
    content: "Nguyên tố sulfur (S) nằm ở ô thứ 16 trong bảng hệ thống tuần hoàn. Số electron thuộc lớp L (n = 2) trong nguyên tử sulfur là bao nhiêu?",
    correctAnswer: "8",
    explanation: "Sulfur (Z = 16) có cấu hình e: 1s² 2s² 2p⁶ 3s² 3p⁴. Lớp L (n = 2) gồm 2s² 2p⁶ có 2 + 6 = 8 electron."
  },
  {
    id: "g10_p3_d2_c5",
    lessonId: "chude1_nguyento",
    lessonTitle: "Chủ đề 1: Xác định số khối đồng vị thứ hai",
    part: "part3",
    level: "vd",
    category: "tinh_toan",
    code: "H10.1.2",
    defaultParams: { a_tb: 24.4, a1: 24, pct1: 60 },
    contentTemplate: "Nguyên tố Y có hai đồng vị bền với nguyên tử khối trung bình là {a_tb}. Đồng vị thứ nhất có số khối bằng {a1} và chiếm {pct1}% số nguyên tử. Số khối của đồng vị thứ hai là bao nhiêu?",
    generator: () => {
      const data = [
        { a_tb: 24.4, a1: 24, pct1: 60, a2: 25 }, // Magnesium
        { a_tb: 63.5, a1: 63, pct1: 75, a2: 65 }, // Copper
        { a_tb: 35.5, a1: 35, pct1: 75, a2: 37 }, // Chlorine
        { a_tb: 10.8, a1: 11, pct1: 80, a2: 10 }  // Boron
      ];
      const d = data[Math.floor(Math.random() * data.length)];
      const pct2 = 100 - d.pct1;
      return {
        content: `Nguyên tố Y có hai đồng vị bền với nguyên tử khối trung bình là ${d.a_tb.toString().replace('.', ',')}. Đồng vị thứ nhất có số khối bằng ${d.a1} và chiếm ${d.pct1}% số nguyên tử. Số khối của đồng vị thứ hai là bao nhiêu?`,
        correctAnswer: `${d.a2}`,
        explanation: `% số nguyên tử đồng vị thứ hai = 100% - ${d.pct1}% = ${pct2}%.\nÁp dụng công thức nguyên tử khối trung bình:\nA_tb = (${d.a1} × ${d.pct1} + A₂ × ${pct2}) / 100 = ${d.a_tb}\n=> A₂ × ${pct2} = ${d.a_tb * 100} - ${d.a1 * d.pct1} = ${(d.a_tb * 100) - (d.a1 * d.pct1)}\n=> A₂ = ${d.a2}.`
      };
    },
    content: "Nguyên tố Y có hai đồng vị bền với nguyên tử khối trung bình là 24,4. Đồng vị thứ nhất có số khối bằng 24 và chiếm 60% số nguyên tử. Xem nguyên tử khối có giá trị xấp xỉ số khối. Số khối của đồng vị thứ hai là bao nhiêu?",
    correctAnswer: "25",
    explanation: "% đồng vị thứ hai = 100% - 60% = 40%.\nA_tb = (24 × 60 + A₂ × 40)/100 = 24,4 => 1440 + 40 A₂ = 2440 => 40 A₂ = 1000 => A₂ = 25."
  },
  {
    id: "g10_p3_d3_c6",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Xác định 2 nguyên tố cùng nhóm A",
    part: "part3",
    level: "vd",
    category: "tinh_toan",
    code: "H10.2.1",
    defaultParams: { sum_z: 32 },
    contentTemplate: "X, Y là hai nguyên tố thuộc cùng nhóm A ở hai chu kì liên tiếp nhau trong bảng tuần hoàn, có tổng số proton trong hai hạt nhân là {sum_z} (ZX < ZY). Số hiệu nguyên tử của Y là bao nhiêu?",
    generator: () => {
      const pairs = [
        { zx: 12, zy: 20, sum: 32, nameX: "Mg", nameY: "Ca" }, // nhóm IIA (CK3, CK4 cách 8)
        { zx: 11, zy: 19, sum: 30, nameX: "Na", nameY: "K" },  // nhóm IA
        { zx: 7, zy: 15, sum: 22, nameX: "N", nameY: "P" },    // nhóm VA (CK2, CK3 cách 8)
        { zx: 8, zy: 16, sum: 24, nameX: "O", nameY: "S" },    // nhóm VIA
        { zx: 9, zy: 17, sum: 26, nameX: "F", nameY: "Cl" }    // nhóm VIIA
      ];
      const p = pairs[Math.floor(Math.random() * pairs.length)];
      return {
        content: `X, Y là hai nguyên tố thuộc cùng nhóm A ở hai chu kì liên tiếp nhau trong bảng tuần hoàn, có tổng số proton trong hai hạt nhân là ${p.sum} (Z_X < Z_Y). Số hiệu nguyên tử của Y là bao nhiêu?`,
        correctAnswer: `${p.zy}`,
        explanation: `Do X và Y ở cùng một nhóm A ở 2 chu kì liên tiếp, Z_Y - Z_X = 8.\nLại có Z_X + Z_Y = ${p.sum}.\nGiải hệ: Z_Y = (${p.sum} + 8) / 2 = ${p.zy} (${p.nameY}); Z_X = ${p.zx} (${p.nameX}).`
      };
    },
    content: "X, Y là hai nguyên tố thuộc cùng nhóm A ở hai chu kì liên tiếp nhau trong bảng tuần hoàn, có tổng số proton trong hai hạt nhân là 32 (ZX < ZY). Số hiệu nguyên tử của Y là bao nhiêu?",
    correctAnswer: "20",
    explanation: "Vì X và Y ở cùng phân nhóm chính (nhóm A) và 2 chu kì liên tiếp: Z_Y - Z_X = 8.\nTa có: Z_X + Z_Y = 32 => Z_Y = (32 + 8)/2 = 20 (Calcium, Ca) và Z_X = 12 (Magnesium, Mg)."
  },

  // =========================================================================
  // PHẦN IV: TỰ LUẬN (3 CÂU = 3,0 ĐIỂM THEO CHUẨN MA TRẬN KHỐI 10)
  // - Câu 1: Cấu tạo nguyên tử & Cấu hình electron (1,0 điểm - Hiểu)
  // - Câu 2: Bảng tuần hoàn & Định luật tuần hoàn (1,0 điểm - Vận dụng)
  // - Câu 3: Bài toán cấu tạo hạt / đồng vị / oxide (1,0 điểm - Vận dụng)
  // =========================================================================
  {
    id: "g10_p4_tl_c1_suite1",
    lessonId: "chude1_voelectron",
    lessonTitle: "Chủ đề 1: Cấu trúc vỏ electron và vị trí trong BTH",
    part: "part4",
    level: "hieu",
    category: "lythuyet",
    code: "H10.1.3",
    points: 1.0,
    content: "Cho nguyên tử nguyên tố X có số hiệu nguyên tử Z = 17 và nguyên tử nguyên tố Y có Z = 12.\na) Viết cấu hình electron của nguyên tử X và Y.\nb) Xác định vị trí (ô, chu kì, nhóm) của X và Y trong bảng tuần hoàn.\nc) Cho biết X, Y là kim loại, phi kim hay khí hiếm? Giải thích.",
    correctAnswer: "X: 1s² 2s² 2p⁶ 3s² 3p⁵ (ô 17, chu kì 3, nhóm VIIA, phi kim); Y: 1s² 2s² 2p⁶ 3s² (ô 12, chu kì 3, nhóm IIA, kim loại)",
    explanation: "a) Cấu hình electron:\n   • X (Z = 17): 1s² 2s² 2p⁶ 3s² 3p⁵ (hoặc [Ne] 3s² 3p⁵).\n   • Y (Z = 12): 1s² 2s² 2p⁶ 3s² (hoặc [Ne] 3s²).\nb) Vị trí trong bảng tuần hoàn:\n   • Nguyên tố X: Ô số 17 (Z = 17); Chu kì 3 (có 3 lớp electron); Nhóm VIIA (có 7 electron hóa trị ở phân lớp s và p).\n   • Nguyên tố Y: Ô số 12 (Z = 12); Chu kì 3 (có 3 lớp electron); Nhóm IIA (có 2 electron hóa trị ở phân lớp s).\nc) Phân loại nguyên tố:\n   • X có 7 electron ở lớp ngoài cùng => X là phi kim điển hình (Halogen).\n   • Y có 2 electron ở lớp ngoài cùng => Y là kim loại điển hình (kim loại kiềm thổ)."
  },
  {
    id: "g10_p4_tl_c2_suite1",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Xu hướng biến đổi tính chất trong BTH",
    part: "part4",
    level: "vd",
    category: "lythuyet",
    code: "H10.2.2",
    points: 1.0,
    content: "Cho các nguyên tố sau: ₁₁Na, ₁₂Mg, ₁₃Al và ₁₉K.\na) Sắp xếp các nguyên tố trên theo thứ tự bán kính nguyên tử tăng dần. Giải thích ngắn gọn.\nb) Sắp xếp các nguyên tố trên theo thứ tự tính kim loại giảm dần.\nc) Viết công thức hydroxide cao nhất của các nguyên tố trên và so sánh tính base giữa chúng.",
    correctAnswer: "Bán kính: Al < Mg < Na < K; Tính kim loại: K > Na > Mg > Al; Base: KOH > NaOH > Mg(OH)₂ > Al(OH)₃",
    explanation: "a) Bán kính nguyên tử:\n   • Na, Mg, Al cùng thuộc chu kì 3: theo chiều tăng Z từ trái sang phải, bán kính giảm dần: Al < Mg < Na.\n   • K thuộc chu kì 4 (có 4 lớp electron), Na thuộc chu kì 3 (3 lớp electron) nên bán kính K > Na.\n   • Thứ tự tăng dần bán kính: Al < Mg < Na < K.\nb) Thứ tự tính kim loại giảm dần:\n   • Trong chu kì 3: Na > Mg > Al.\n   • Trong nhóm IA: K > Na.\n   • Thứ tự giảm dần tính kim loại: K > Na > Mg > Al.\nc) Công thức hydroxide cao nhất và so sánh tính base:\n   • Các hydroxide: KOH, NaOH, Mg(OH)₂, Al(OH)₃.\n   • Tính base giảm dần theo tính kim loại: KOH > NaOH > Mg(OH)₂ > Al(OH)₃ (Al(OH)₃ là hydroxide lưỡng tính)."
  },
  {
    id: "g10_p4_tl_c3_suite1",
    lessonId: "chude1_nguyentu",
    lessonTitle: "Chủ đề 1: Bài toán tổng hạt cơ bản nguyên tử",
    part: "part4",
    level: "vd",
    category: "tinh_toan",
    code: "H10.1.1",
    points: 1.0,
    defaultParams: { total: 40, diff: 12 },
    generator: () => {
      const data = [
        { total: 40, diff: 12, p: 13, n: 14, name: "Aluminium (Al)", symbol: "Al" },
        { total: 36, diff: 12, p: 12, n: 12, name: "Magnesium (Mg)", symbol: "Mg" },
        { total: 34, diff: 10, p: 11, n: 12, name: "Sodium (Na)", symbol: "Na" },
        { total: 58, diff: 18, p: 19, n: 20, name: "Potassium (K)", symbol: "K" }
      ];
      const d = data[Math.floor(Math.random() * data.length)];
      return {
        content: `Hợp kim chứa nguyên tố R được sử dụng phổ biến trong ngành hàng không vũ trụ và chế tạo đồ gia dụng cao cấp. Trong nguyên tử R có tổng số hạt cơ bản (proton, neutron, electron) là ${d.total}. Trong đó tổng số hạt mang điện nhiều hơn tổng số hạt không mang điện là ${d.diff}.\na) Xác định số lượng từng loại hạt (p, n, e) và số khối A của nguyên tử R.\nb) Viết cấu hình electron của nguyên tử R và xác định vị trí của R trong bảng tuần hoàn.\nc) Khi R tạo thành ion bền nhất, hãy viết cấu hình electron của ion đó.`,
        correctAnswer: `p = e = ${d.p}, n = ${d.n}, A = ${d.p + d.n}; Kí hiệu: ${d.symbol}`,
        explanation: `a) Gọi p, e, n lần lượt là số proton, electron và neutron của nguyên tử R. Vì nguyên tử trung hòa điện nên e = p.\n   Theo đề bài:\n   • Tổng số hạt: 2p + n = ${d.total} (1)\n   • Số hạt mang điện nhiều hơn không mang điện: 2p - n = ${d.diff} (2)\n   Cộng (1) và (2): 4p = ${d.total + d.diff} => p = ${(d.total + d.diff)/4} => e = ${d.p}.\n   Thay vào (1): n = ${d.total} - 2×${d.p} = ${d.n}.\n   Số khối A = p + n = ${d.p} + ${d.n} = ${d.p + d.n}.\n   Vậy R là nguyên tố ${d.name} (${d.symbol}).\nb) Cấu hình electron của R (Z = ${d.p}):\n   Vị trí trong BTH: Ô số ${d.p}, Chu kì ${d.p > 18 ? 4 : 3}.\nc) R nhường electron tạo cation bền: R -> R⁺/R²⁺/R³⁺ có cấu hình khí hiếm bền vững.`
      };
    },
    content: "Hợp kim chứa nguyên tố R được sử dụng phổ biến trong ngành hàng không vũ trụ và chế tạo đồ gia dụng cao cấp. Trong nguyên tử R có tổng số hạt cơ bản (proton, neutron, electron) là 40. Trong đó tổng số hạt mang điện nhiều hơn tổng số hạt không mang điện là 12.\na) Xác định số lượng từng loại hạt (p, n, e) và số khối A của nguyên tử R.\nb) Viết cấu hình electron của nguyên tử R và xác định vị trí của R trong bảng tuần hoàn.\nc) Khi R tạo thành ion bền nhất, hãy viết cấu hình electron của ion đó.",
    correctAnswer: "p = e = 13, n = 14, A = 27; R là Aluminium (Al)",
    explanation: "a) Gọi p, e, n lần lượt là số hạt proton, electron, neutron của R (p = e).\n   • 2p + n = 40 (1)\n   • 2p - n = 12 (2)\n   Giải hệ: 4p = 52 => p = e = 13; n = 14.\n   Số khối A = p + n = 13 + 14 = 27. Nguyên tố R là Al (Aluminium).\nb) Cấu hình electron của Al (Z = 13): 1s² 2s² 2p⁶ 3s² 3p¹.\n   • Vị trí: Ô số 13, chu kì 3 (có 3 lớp e), nhóm IIIA (3 electron hóa trị).\nc) Ion bền nhất là Al³⁺: Al -> Al³⁺ + 3e.\n   Cấu hình electron của Al³⁺: 1s² 2s² 2p⁶ (cấu hình bền vững của khí hiếm Ne)."
  },

  // Thêm các câu tự luận phong phú cho Suite 2, 3, 4, 5
  {
    id: "g10_p4_tl_c1_suite2",
    lessonId: "chude1_voelectron",
    lessonTitle: "Chủ đề 1: Cấu hình electron và sự hình thành ion",
    part: "part4",
    level: "hieu",
    category: "lythuyet",
    code: "H10.1.3",
    points: 1.0,
    content: "Nguyên tố A có số hiệu nguyên tử Z = 16 và nguyên tố B có Z = 19.\na) Viết cấu hình electron nguyên tử của A và B.\nb) Cho biết vị trí (ô, chu kì, nhóm) của A và B trong bảng tuần hoàn.\nc) Viết cấu hình electron của các ion tương ứng khi A và B đạt trạng thái bền vững.",
    correctAnswer: "A: 1s² 2s² 2p⁶ 3s² 3p⁴ (S); B: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ (K)",
    explanation: "a) Cấu hình e: A (Z=16): 1s² 2s² 2p⁶ 3s² 3p⁴; B (Z=19): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹.\nb) Vị trí: A ở ô 16, chu kì 3, nhóm VIA; B ở ô 19, chu kì 4, nhóm IA.\nc) Ion bền: A nhận 2e tạo A²⁻: 1s² 2s² 2p⁶ 3s² 3p⁶; B nhường 1e tạo B⁺: 1s² 2s² 2p⁶ 3s² 3p⁶."
  },
  {
    id: "g10_p4_tl_c2_suite2",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Xác định 2 nguyên tố ở hai chu kì liên tiếp",
    part: "part4",
    level: "vd",
    category: "tinh_toan",
    code: "H10.2.1",
    points: 1.0,
    content: "Hai nguyên tố X và Y thuộc cùng một nhóm A và ở hai chu kì liên tiếp trong bảng tuần hoàn. Tổng số hạt proton trong hạt nhân của hai nguyên tử X và Y là 32 (Z_X < Z_Y).\na) Xác định số hiệu nguyên tử Z_X và Z_Y. Tên của hai nguyên tố X và Y là gì?\nb) Viết cấu hình electron của nguyên tử X và Y.\nc) So sánh tính kim loại giữa X và Y. Giải thích.",
    correctAnswer: "Z_X = 12 (Mg), Z_Y = 20 (Ca); Tính kim loại: Ca > Mg",
    explanation: "a) Do X và Y ở 2 chu kì liên tiếp cùng nhóm A nên Z_Y - Z_X = 8.\n   Ta có hệ: Z_X + Z_Y = 32 và Z_Y - Z_X = 8 => Z_Y = 20 (Calcium, Ca), Z_X = 12 (Magnesium, Mg).\nb) Cấu hình e: X (Mg, Z=12): 1s² 2s² 2p⁶ 3s²; Y (Ca, Z=20): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s².\nc) Trong một nhóm A theo chiều từ trên xuống dưới, tính kim loại tăng dần do bán kính tăng, lực hút hạt nhân với e hóa trị giảm => Tính kim loại của Ca mạnh hơn Mg."
  },
  {
    id: "g10_p4_tl_c3_suite2",
    lessonId: "chude1_nguyento",
    lessonTitle: "Chủ đề 1: Bài toán đồng vị nguyên tử khối trung bình",
    part: "part4",
    level: "vd",
    category: "tinh_toan",
    code: "H10.1.2",
    points: 1.0,
    content: "Trong tự nhiên, nguyên tố Chlorine (Cl) có hai đồng vị bền là ³⁵Cl và ³⁷Cl với nguyên tử khối trung bình là 35,5.\na) Tính phần trăm số nguyên tử của mỗi đồng vị ³⁵Cl và ³⁷Cl trong tự nhiên.\nb) Tính phần trăm khối lượng của đồng vị ³⁵Cl có trong hợp chất sodium chloride (NaCl). Biết nguyên tử khối của Na = 23.",
    correctAnswer: "a) %³⁵Cl = 75%, %³⁷Cl = 25%; b) %m(³⁵Cl) = 44,87%",
    explanation: "a) Gọi x là % số nguyên tử của ³⁵Cl => % của ³⁷Cl là (100 - x)%.\n   A_tb = [35x + 37(100 - x)] / 100 = 35,5 => -2x + 3700 = 3550 => 2x = 150 => x = 75%.\n   Vậy: %³⁵Cl = 75%, %³⁷Cl = 25%.\nb) Khối lượng mol của NaCl = 23 + 35,5 = 58,5 g/mol.\n   Khối lượng của đồng vị ³⁵Cl trong 1 mol NaCl = 35 × 75% = 26,25 gam.\n   Phần trăm khối lượng của ³⁵Cl trong NaCl = (26,25 / 58,5) × 100% = 44,87%."
  },
  {
    id: "g10_p4_tl_c1_suite3",
    lessonId: "chude1_voelectron",
    lessonTitle: "Chủ đề 1: Cấu hình electron và tính chất phi kim",
    part: "part4",
    level: "hieu",
    category: "lythuyet",
    code: "H10.1.3",
    points: 1.0,
    content: "Nguyên tử của nguyên tố M có phân mức năng lượng cao nhất là 3p³.\na) Viết cấu hình electron đầy đủ của nguyên tử M.\nb) Xác định vị trí của M trong bảng tuần hoàn.\nc) Viết công thức oxide cao nhất và hydroxide cao nhất tương ứng của M, nêu tính acid hay base của chúng.",
    correctAnswer: "M là Phosphorus (P, Z=15); Oxide: P₂O₅ (oxide acid); Hydroxide: H₃PO₄ (acid trung bình)",
    explanation: "a) Phân mức năng lượng cao nhất là 3p³ => Cấu hình e đầy đủ: 1s² 2s² 2p⁶ 3s² 3p³ (Z = 15, Phosphorus).\nb) Vị trí: Ô số 15; chu kì 3 (có 3 lớp e); nhóm VA (có 5 electron hóa trị).\nc) Oxide cao nhất: P₂O₅ (tính oxide acid); Hydroxide cao nhất: H₃PO₄ (phosphoric acid, tính acid trung bình)."
  },
  {
    id: "g10_p4_tl_c2_suite3",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: So sánh độ âm điện và bán kính",
    part: "part4",
    level: "vd",
    category: "lythuyet",
    code: "H10.2.2",
    points: 1.0,
    content: "Cho 4 nguyên tố: ₉F, ₁₇Cl, ₁₆S, ₁₅P.\na) Sắp xếp các nguyên tố trên theo chiều tăng dần độ âm điện. Giải thích.\nb) Sắp xếp các nguyên tố trên theo chiều giảm dần bán kính nguyên tử.\nc) Trong các nguyên tố trên, nguyên tố nào có tính phi kim mạnh nhất? Giải thích.",
    correctAnswer: "Độ âm điện: P < S < Cl < F; Bán kính: P > S > Cl > F; F là phi kim mạnh nhất",
    explanation: "a) Độ âm điện: Trong chu kì 3: P < S < Cl; trong nhóm VIIA: Cl < F => Chiều tăng dần: P < S < Cl < F.\nb) Bán kính: Trong chu kì 3: P > S > Cl; Cl (3 lớp) > F (2 lớp) => Bán kính giảm dần: P > S > Cl > F.\nc) F có tính phi kim mạnh nhất vì có độ âm điện lớn nhất (3,98) và bán kính nhỏ nhất, lực hút e mạnh nhất."
  },
  {
    id: "g10_p4_tl_c3_suite3",
    lessonId: "chude1_nguyentu",
    lessonTitle: "Chủ đề 1: Bài toán cấu tạo hạt nguyên tử kim loại",
    part: "part4",
    level: "vd",
    category: "tinh_toan",
    code: "H10.1.1",
    points: 1.0,
    content: "Tổng số hạt proton, neutron và electron trong một nguyên tử kim loại kiềm M là 34. Trong đó, số hạt mang điện nhiều hơn số hạt không mang điện là 10 hạt.\na) Tìm số proton, neutron và electron của nguyên tử M.\nb) Xác định tên kim loại M và viết phương trình hóa học khi cho M tác dụng với nước ở điều kiện thường.\nc) Tính thể tích khí hydrogen (ở điều kiện chuẩn 25°C, 1 bar) thoát ra khi cho 4,6 gam kim loại M tan hoàn toàn trong nước dư.",
    correctAnswer: "M là Sodium (Na, Z=11); V(H₂) = 2,479 lít",
    explanation: "a) Hệ: 2p + n = 34 và 2p - n = 10 => 4p = 44 => p = e = 11; n = 12.\n   Số khối A = 11 + 12 = 23 => M là Sodium (Na).\nb) PTHH: 2Na + 2H₂O -> 2NaOH + H₂↑.\nc) n(Na) = 4,6 / 23 = 0,2 mol => n(H₂) = 0,2 / 2 = 0,1 mol.\n   V(H₂) (đkc) = 0,1 × 24,79 = 2,479 lít."
  },
  {
    id: "g10_p4_tl_c1_suite4",
    lessonId: "chude1_voelectron",
    lessonTitle: "Chủ đề 1: Cấu hình electron nguyên tử và ion",
    part: "part4",
    level: "hieu",
    category: "lythuyet",
    code: "H10.1.3",
    points: 1.0,
    content: "Nguyên tử nguyên tố X có tổng số electron ở các phân lớp p là 11.\na) Viết cấu hình electron của nguyên tử X và xác định số hiệu nguyên tử Z của X.\nb) Xác định vị trí của X trong bảng tuần hoàn.\nc) X tạo thành hợp chất ion với kim loại magnesium. Viết công thức hóa học của hợp chất này.",
    correctAnswer: "X là Chlorine (Cl, Z=17); Hợp chất: MgCl₂",
    explanation: "a) Phân lớp p có 11e: 2p⁶ và 3p⁵ => Cấu hình đầy đủ: 1s² 2s² 2p⁶ 3s² 3p⁵ => Z = 17 (Chlorine).\nb) Vị trí: Ô số 17, chu kì 3 (3 lớp e), nhóm VIIA (7e hóa trị).\nc) Khi kết hợp với Mg (hóa trị II, tạo Mg²⁺), ion Cl⁻ tạo hợp chất ionic là MgCl₂ (magnesium chloride)."
  },
  {
    id: "g10_p4_tl_c2_suite4",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Oxide cao nhất và tỉ lệ khối lượng",
    part: "part4",
    level: "vd",
    category: "tinh_toan",
    code: "H10.2.3",
    points: 1.0,
    content: "Nguyên tố R thuộc nhóm VA trong bảng tuần hoàn các nguyên tố hóa học. Trong oxide cao nhất của R, oxygen chiếm 74,07% về khối lượng.\na) Xác định công thức oxide cao nhất của R và tên nguyên tố R.\nb) Viết phương trình hóa học khi cho oxide cao nhất của R tác dụng với nước.\nc) Viết công thức hợp chất khí với hydrogen của R và nêu tính chất acid - base của dung dịch hợp chất đó trong nước.",
    correctAnswer: "R là Nitrogen (N); Oxide: N₂O₅; Hydride: NH₃ (tính base)",
    explanation: "a) R thuộc nhóm VA => Công thức oxide cao nhất là R₂O₅.\n   %m(O) = (16 × 5) / (2R + 16 × 5) × 100% = 74,07%\n   => 80 / (2R + 80) = 0,7407 => 2R + 80 = 108 => 2R = 28 => R = 14 (Nitrogen, N).\n   Công thức oxide cao nhất là N₂O₅ (dinitrogen pentoxide).\nb) N₂O₅ + H₂O -> 2HNO₃.\nc) Hợp chất khí với hydrogen: NH₃ (ammonia); dung dịch NH₃ trong nước có tính base yếu."
  },
  {
    id: "g10_p4_tl_c3_suite4",
    lessonId: "chude1_nguyentu",
    lessonTitle: "Chủ đề 1: Bài toán tổng hạt ion",
    part: "part4",
    level: "vd",
    category: "tinh_toan",
    code: "H10.1.1",
    points: 1.0,
    content: "Một cation M²⁺ có tổng số hạt proton, neutron và electron là 80. Trong đó số hạt mang điện nhiều hơn số hạt không mang điện là 20 hạt.\na) Xác định số lượng từng loại hạt trong nguyên tử M.\nb) Viết cấu hình electron của nguyên tử M và cation M²⁺.\nc) Cho biết M thuộc khối nguyên tố nào (s, p, d hay f)?",
    correctAnswer: "M có p = e = 26, n = 30 (Sắt - Fe); M²⁺: [Ar] 3d⁶; Khối nguyên tố d",
    explanation: "a) Trong cation M²⁺: số proton là p, số neutron là n, số electron là (p - 2).\n   • Tổng số hạt: p + n + (p - 2) = 80 => 2p + n = 82 (1)\n   • Hạt mang điện nhiều hơn không mang điện: [p + (p - 2)] - n = 20 => 2p - n = 22 (2)\n   Cộng (1) và (2): 4p = 104 => p = 26 (Iron, Fe).\n   Thay vào (1): n = 82 - 2×26 = 30.\n   Trong nguyên tử M: p = e = 26, n = 30.\nb) Cấu hình electron:\n   • M (Z = 26): 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s².\n   • M²⁺: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ (mất 2 electron ở phân lớp 4s ngoài cùng).\nc) M có electron điền cuối cùng vào phân lớp 3d nên M thuộc khối nguyên tố d (kim loại chuyển tiếp)."
  },
  {
    id: "g10_p4_tl_c1_suite5",
    lessonId: "chude1_voelectron",
    lessonTitle: "Chủ đề 1: Cấu hình electron khí hiếm và ion",
    part: "part4",
    level: "hieu",
    category: "lythuyet",
    code: "H10.1.3",
    points: 1.0,
    content: "Cho các nguyên tử và ion sau: Ne (Z = 10), Na⁺ (Z = 11), F⁻ (Z = 9), Mg²⁺ (Z = 12), O²⁻ (Z = 8).\na) Viết cấu hình electron của từng nguyên tử và ion trên.\nb) Nhận xét về số electron và cấu trúc lớp vỏ của các hạt trên.\nc) Sắp xếp các hạt trên theo chiều giảm dần của bán kính hạt. Giải thích.",
    correctAnswer: "Đều có cấu hình 1s² 2s² 2p⁶ (10e); Bán kính: O²⁻ > F⁻ > Ne > Na⁺ > Mg²⁺",
    explanation: "a) Cấu hình electron của tất cả các hạt đều là: 1s² 2s² 2p⁶.\nb) Các hạt trên đều có 10 electron và có cấu trúc vỏ electron bền vững của khí hiếm neon (đẳng electron).\nc) So sánh bán kính: Khi có cùng số electron (10e), hạt nào có điện tích hạt nhân Z càng lớn thì lực hút giữa hạt nhân và electron càng mạnh, làm bán kính càng nhỏ.\n   • Z: O (8) < F (9) < Ne (10) < Na (11) < Mg (12).\n   • Thứ tự giảm dần bán kính: O²⁻ > F⁻ > Ne > Na⁺ > Mg²⁺."
  },
  {
    id: "g10_p4_tl_c2_suite5",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Xu hướng tính kim loại - phi kim",
    part: "part4",
    level: "vd",
    category: "lythuyet",
    code: "H10.2.2",
    points: 1.0,
    content: "Cho ba nguyên tố X, Y, Z lần lượt có số hiệu nguyên tử là 11, 12 và 19.\na) Xác định vị trí của X, Y, Z trong bảng tuần hoàn.\nb) So sánh tính kim loại của X, Y, Z. Giải thích ngắn gọn.\nc) Viết các phương trình hóa học khi cho từng đơn chất X, Y tác dụng với nước (ghi rõ điều kiện nếu có).",
    correctAnswer: "X (Na), Y (Mg), Z (K); Tính kim loại: K > Na > Mg",
    explanation: "a) Vị trí: X (Na, Z=11): ô 11, chu kì 3, nhóm IA; Y (Mg, Z=12): ô 12, chu kì 3, nhóm IIA; Z (K, Z=19): ô 19, chu kì 4, nhóm IA.\nb) So sánh tính kim loại:\n   • Trong chu kì 3: Na > Mg (tính kim loại giảm từ trái sang phải).\n   • Trong nhóm IA: K > Na (tính kim loại tăng từ trên xuống dưới).\n   • Kết luận: Tính kim loại: K > Na > Mg.\nc) PTHH:\n   • 2Na + 2H₂O -> 2NaOH + H₂↑ (phản ứng mãnh liệt ở điều kiện thường).\n   • Mg + 2H₂O -> Mg(OH)₂ + H₂↑ (phản ứng rất chậm ở nhiệt độ thường, nhanh hơn khi đun nóng)."
  },
  {
    id: "g10_p4_tl_c3_suite5",
    lessonId: "chude2_bangtuanhoan",
    lessonTitle: "Chủ đề 2: Xác định 2 nguyên tố thuộc 2 nhóm A liên tiếp",
    part: "part4",
    level: "vd",
    category: "tinh_toan",
    code: "H10.2.1",
    points: 1.0,
    content: "Hai nguyên tố X và Y ở hai nhóm A liên tiếp trong bảng tuần hoàn (Z_X < Z_Y). Ở trạng thái đơn chất, X và Y không phản ứng với nhau. Tổng số hạt proton trong hai hạt nhân X và Y bằng 23.\na) Tìm số proton Z_X và Z_Y. Xác định tên của X và Y.\nb) Viết cấu hình electron của nguyên tử X và Y.\nc) Nêu tính chất hóa học đặc trưng của đơn chất X và Y.",
    correctAnswer: "Z_X = 10 (Ne), Z_Y = 13 (Al) hoặc X (Na: 11), Y (Mg: 12)",
    explanation: "a) Xét các cặp có Z_X + Z_Y = 23:\n   • Trường hợp X và Y cùng chu kì: Z_Y - Z_X = 1 => Z_X = 11 (Na), Z_Y = 12 (Mg). Cả hai đều là kim loại nên ở trạng thái đơn chất không phản ứng với nhau.\n   • Hoặc Z_X = 10 (Ne - khí hiếm), Z_Y = 13 (Al) không phản ứng.\nb) Cấu hình electron:\n   • Na (Z = 11): 1s² 2s² 2p⁶ 3s¹.\n   • Mg (Z = 12): 1s² 2s² 2p⁶ 3s².\nc) Na và Mg là các kim loại có tính khử mạnh (Na > Mg), dễ nhường electron tạo cation Na⁺ và Mg²⁺."
  }
];

module.exports = { questionBank10 };
`;

fs.writeFileSync(path.join(__dirname, '../data/questionBank10.js'), content, 'utf8');
console.log('Successfully created data/questionBank10.js!');
