const fs = require('fs');
const path = require('path');

let neonImgBase64 = '';
try {
  const p = path.join(__dirname, '../public/images/pho_khoi_luong_ne.jpg');
  if (fs.existsSync(p)) {
    neonImgBase64 = 'data:image/jpeg;base64,' + fs.readFileSync(p).toString('base64');
  }
} catch (e) {}

const questionBank10 = [
  {
    "id": "g10_p1_01",
    "lessonId": "chude1_nguyentu",
    "lessonTitle": "Chủ đề 1: Nhập môn Hóa học",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.1.1",
    "content": "Đối tượng nghiên cứu của hóa học là",
    "options": [
      "nghiên cứu về vật chất, năng lượng và sự vận động của chúng.",
      "thế giới sinh vật gần gũi với đời sống hằng ngày của học sinh.",
      "chất và sự biến đổi của chất.",
      "nghệ thuật ngôn từ."
    ],
    "correctAnswer": "C",
    "explanation": "Hóa học là ngành khoa học thuộc lĩnh vực khoa học tự nhiên, nghiên cứu về chất và sự biến đổi của chất."
  },
  {
    "id": "g10_p1_02",
    "lessonId": "chude1_nguyentu",
    "lessonTitle": "Chủ đề 1: Thành phần nguyên tử",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.1.1",
    "content": "Hạt mang điện trong nguyên tử",
    "options": [
      "chỉ có proton.",
      "là proton và neutron.",
      "là proton và electron.",
      "là electron và neutron."
    ],
    "correctAnswer": "C",
    "explanation": "Trong nguyên tử, proton mang điện tích dương (+), electron mang điện tích âm (-), neutron không mang điện."
  },
  {
    "id": "g10_p1_03",
    "lessonId": "chude1_voelectron",
    "lessonTitle": "Chủ đề 1: Cấu trúc lớp vỏ electron",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.1.3",
    "content": "Phân lớp nào dưới đây chưa bão hòa?",
    "options": [
      "s².",
      "f¹⁴.",
      "p⁶.",
      "d⁸."
    ],
    "correctAnswer": "D",
    "explanation": "Số electron tối đa trên các phân lớp s, p, d, f lần lượt là 2, 6, 10, 14. Phân lớp d⁸ có 8 electron < 10 nên chưa bão hòa."
  },
  {
    "id": "g10_p1_04",
    "lessonId": "chude1_nguyento",
    "lessonTitle": "Chủ đề 1: Nguyên tố hóa học",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.1.2",
    "content": "Số hiệu nguyên tử cho biết thông tin nào sau đây?",
    "options": [
      "Số proton.",
      "Số neutron.",
      "Số khối.",
      "Nguyên tử khối."
    ],
    "correctAnswer": "A",
    "explanation": "Số hiệu nguyên tử Z = số proton = số đơn vị điện tích hạt nhân = số electron trong nguyên tử."
  },
  {
    "id": "g10_p1_05",
    "lessonId": "chude2_bangtuanhoan",
    "lessonTitle": "Chủ đề 2: Cấu tạo bảng tuần hoàn",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.2.1",
    "content": "Các nguyên tố được sắp xếp trong bảng tuần hoàn theo nguyên tắc nào sau đây?",
    "options": [
      "Theo chiều tăng dần của nguyên tử khối.",
      "Các nguyên tố có cùng số lớp electron được xếp vào một nhóm.",
      "Theo chiều tăng dần của điện tích hạt nhân.",
      "Các nguyên tố có cùng số electron hóa trị được xếp vào một chu kì."
    ],
    "correctAnswer": "C",
    "explanation": "Bảng tuần hoàn sắp xếp các nguyên tố theo chiều tăng dần của điện tích hạt nhân nguyên tử."
  },
  {
    "id": "g10_p1_06",
    "lessonId": "chude2_bangtuanhoan",
    "lessonTitle": "Chủ đề 2: Nhóm B trong BTH",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.2.1",
    "content": "Nhóm B của bảng tuần hoàn gồm các nguyên tố",
    "options": [
      "s.",
      "s và p.",
      "d.",
      "d và f."
    ],
    "correctAnswer": "D",
    "explanation": "Các nguyên tố nhóm B gồm các nguyên tố kim loại chuyển tiếp khối d và khối f."
  },
  {
    "id": "g10_p1_07",
    "lessonId": "chude1_nguyentu",
    "lessonTitle": "Chủ đề 1: Cấu trúc rỗng của nguyên tử",
    "part": "part1",
    "level": "hieu",
    "category": "lythuyet",
    "code": "H10.1.1",
    "content": "Phát biểu nào sau đây không đúng?",
    "options": [
      "Electron có khối lượng xấp xỉ 0,00055 amu.",
      "Hạt tạo thành tia âm cực là electron.",
      "Nguyên tử có cấu trúc rỗng, gồm lớp vỏ và hạt nhân.",
      "Khối lượng nguyên tử hầu như tập trung ở lớp vỏ nguyên tử."
    ],
    "correctAnswer": "D",
    "explanation": "Khối lượng nguyên tử hầu như tập trung ở hạt nhân nguyên tử do proton và neutron có khối lượng lớn hơn electron rất nhiều."
  },
  {
    "id": "g10_p1_08",
    "lessonId": "chude1_nguyento",
    "lessonTitle": "Chủ đề 1: Khái niệm đồng vị",
    "part": "part1",
    "level": "hieu",
    "category": "lythuyet",
    "code": "H10.1.2",
    "content": "Cho ba nguyên tử có cấu tạo hạt nhân: nguyên tử (1) có 8p và 8n; nguyên tử (2) có 8p và 9n; nguyên tử (3) có 9p và 9n. Nhận xét nào sau đây không đúng?",
    "options": [
      "(1) và (2) là các đồng vị của cùng một nguyên tố hóa học.",
      "(1) và (3) là các đồng vị của cùng một nguyên tố hóa học.",
      "(1) và (2) là nguyên tử của cùng nguyên tố hóa học.",
      "(1) và (2) có cùng số proton trong hạt nhân."
    ],
    "correctAnswer": "B",
    "explanation": "Đồng vị là những nguyên tử có cùng số proton nhưng khác số neutron. (1) và (3) khác số proton (8p và 9p) nên thuộc hai nguyên tố khác nhau."
  },
  {
    "id": "g10_p1_09",
    "lessonId": "chude1_voelectron",
    "lessonTitle": "Chủ đề 1: Cấu hình khí hiếm",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.1.3",
    "content": "Cấu hình electron nguyên tử nào sau đây là của nguyên tố khí hiếm?",
    "options": [
      "1s² 2s² 2p⁶ 3s² 3p⁵.",
      "1s² 2s² 2p⁶ 3s².",
      "1s² 2s² 2p⁶ 3s² 3p⁶.",
      "1s² 2s² 2p⁶ 3s² 3p¹."
    ],
    "correctAnswer": "C",
    "explanation": "Khí hiếm có 8 electron ở lớp ngoài cùng (trừ He có 2 electron). Cấu hình 1s² 2s² 2p⁶ 3s² 3p⁶ có lớp ngoài cùng 3s² 3p⁶ (8e) là khí hiếm Argon (Ar)."
  },
  {
    "id": "g10_p1_10",
    "lessonId": "chude2_bangtuanhoan",
    "lessonTitle": "Chủ đề 2: Xác định chu kì",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.2.1",
    "content": "Số thứ tự của chu kì được xác định bằng",
    "options": [
      "số electron.",
      "số lớp electron.",
      "số electron hóa trị.",
      "số electron lớp ngoài cùng."
    ],
    "correctAnswer": "B",
    "explanation": "Số thứ tự chu kì = số lớp electron của nguyên tử."
  },
  {
    "id": "g10_p1_11",
    "lessonId": "chude2_bangtuanhoan",
    "lessonTitle": "Chủ đề 2: Chu kì 3",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.2.1",
    "content": "Số nguyên tố thuộc chu kì 3 của bảng tuần hoàn là",
    "options": [
      "2.",
      "8.",
      "18.",
      "32."
    ],
    "correctAnswer": "B",
    "explanation": "Chu kì 3 bắt đầu từ Na (Z=11) đến Ar (Z=18), gồm 8 nguyên tố."
  },
  {
    "id": "g10_p1_12",
    "lessonId": "chude2_bangtuanhoan",
    "lessonTitle": "Chủ đề 2: Vị trí của Oxygen",
    "part": "part1",
    "level": "hieu",
    "category": "lythuyet",
    "code": "H10.2.1",
    "content": "Cấu hình electron nguyên tử của oxygen là 1s² 2s² 2p⁴. Vị trí của oxygen trong bảng tuần hoàn là",
    "options": [
      "chu kì 2, nhóm VIA.",
      "chu kì 3, nhóm VIA.",
      "chu kì 2, nhóm IVA.",
      "chu kì 2, nhóm VIB."
    ],
    "correctAnswer": "A",
    "explanation": "Oxygen có 2 lớp electron => chu kì 2; có 6 electron hóa trị ở phân lớp s và p => nhóm VIA."
  },
  {
    "id": "g10_p1_13",
    "lessonId": "chude1_voelectron",
    "lessonTitle": "Chủ đề 1: Chuyển động của electron",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.1.3",
    "content": "Sự chuyển động của electron theo quan điểm hiện đại được mô tả là",
    "options": [
      "electron chuyển động rất nhanh xung quanh hạt nhân không theo một quỹ đạo xác định.",
      "chuyển động của electron trong nguyên tử theo một quỹ đạo nhất định hình tròn hay hình bầu dục.",
      "electron chuyển động cạnh hạt nhân theo một quỹ đạo xác định tạo thành vỏ nguyên tử.",
      "electron chuyển động rất chậm gần hạt nhân theo một quỹ đạo xác định tạo thành vỏ nguyên tử."
    ],
    "correctAnswer": "A",
    "explanation": "Theo mô hình hiện đại, electron chuyển động rất nhanh xung quanh hạt nhân không theo quỹ đạo xác định, tạo thành đám mây electron."
  },
  {
    "id": "g10_p1_14",
    "lessonId": "chude1_nguyentu",
    "lessonTitle": "Chủ đề 1: Hạt mang điện âm",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.1.1",
    "content": "Trong nguyên tử, hạt mang điện âm là",
    "options": [
      "electron.",
      "proton và electron.",
      "neutron.",
      "electron và neutron."
    ],
    "correctAnswer": "A",
    "explanation": "Hạt mang điện âm duy nhất trong nguyên tử là electron (e)."
  },
  {
    "id": "g10_p1_15",
    "lessonId": "chude1_voelectron",
    "lessonTitle": "Chủ đề 1: Số orbital các phân lớp",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.1.3",
    "content": "Số orbital trong các phân lớp s, p, d lần lượt là",
    "options": [
      "1, 3, 5.",
      "2, 3, 5.",
      "1, 5, 7.",
      "1, 3, 7."
    ],
    "correctAnswer": "A",
    "explanation": "Phân lớp s có 1 AO, phân lớp p có 3 AO, phân lớp d có 5 AO, phân lớp f có 7 AO."
  },
  {
    "id": "g10_p1_16",
    "lessonId": "chude1_nguyento",
    "lessonTitle": "Chủ đề 1: Định nghĩa nguyên tố",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.1.2",
    "content": "Nguyên tố hóa học là tập hợp những nguyên tử có cùng",
    "options": [
      "số neutron.",
      "số proton.",
      "số khối.",
      "khối lượng."
    ],
    "correctAnswer": "B",
    "explanation": "Nguyên tố hóa học là tập hợp các nguyên tử có cùng số proton trong hạt nhân (cùng điện tích hạt nhân)."
  },
  {
    "id": "g10_p1_17",
    "lessonId": "chude2_bangtuanhoan",
    "lessonTitle": "Chủ đề 2: Số nguyên tố",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.2.1",
    "content": "Tính đến năm 2016, số nguyên tố được xác định trong bảng tuần hoàn các nguyên tố hóa học là",
    "options": [
      "118 nguyên tố.",
      "119 nguyên tố.",
      "120 nguyên tố.",
      "121 nguyên tố."
    ],
    "correctAnswer": "A",
    "explanation": "Bảng tuần hoàn hiện nay gồm 118 nguyên tố hóa học đã được IUPAC công nhận."
  },
  {
    "id": "g10_p1_18",
    "lessonId": "chude2_bangtuanhoan",
    "lessonTitle": "Chủ đề 2: Tổng số nhóm",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.2.1",
    "content": "Tổng số nhóm A và B trong bảng tuần hoàn các nguyên tố hóa học là",
    "options": [
      "16.",
      "10.",
      "18.",
      "8."
    ],
    "correctAnswer": "A",
    "explanation": "Bảng tuần hoàn gồm 8 nhóm A và 8 nhóm B => Tổng số nhóm A và B là 16."
  },
  {
    "id": "g10_p1_19",
    "lessonId": "chude1_nguyentu",
    "lessonTitle": "Chủ đề 1: Kích thước hạt nhân",
    "part": "part1",
    "level": "hieu",
    "category": "lythuyet",
    "code": "H10.1.1",
    "content": "Phát biểu nào sau đây không đúng?",
    "options": [
      "Khối lượng nguyên tử tập trung hầu hết ở hạt nhân.",
      "Nguyên tử có cấu tạo rỗng và trung hòa điện.",
      "Kích thước lớp vỏ không đáng kể so với nguyên tử.",
      "Điện tích hạt nhân là tổng điện tích các hạt proton."
    ],
    "correctAnswer": "C",
    "explanation": "Lớp vỏ nguyên tử chiếm hầu như toàn bộ kích thước nguyên tử, kích thước hạt nhân rất nhỏ so với kích thước nguyên tử."
  },
  {
    "id": "g10_p1_20",
    "lessonId": "chude1_nguyento",
    "lessonTitle": "Chủ đề 1: Cặp đồng vị Silicon",
    "part": "part1",
    "level": "hieu",
    "category": "lythuyet",
    "code": "H10.1.2",
    "content": "Cặp nguyên tử nào sau đây là đồng vị của cùng một nguyên tố hóa học?",
    "options": [
      "⁴⁰₁₈X và ⁴⁰₁₉Y.",
      "²⁸₁₄X và ²⁹₁₄Y.",
      "¹⁴₆X và ¹⁴₇Y.",
      "¹⁹₉X và ²⁰₁₀Y."
    ],
    "correctAnswer": "B",
    "explanation": "Đồng vị là các nguyên tử có cùng số proton Z nhưng khác số khối A. Hai nguyên tử ²⁸₁₄X và ²⁹₁₄Y đều có Z = 14."
  },
  {
    "id": "g10_p1_21",
    "lessonId": "chude1_voelectron",
    "lessonTitle": "Chủ đề 1: Số e ngoài cùng và tính kim loại/phi kim",
    "part": "part1",
    "level": "hieu",
    "category": "lythuyet",
    "code": "H10.1.3",
    "content": "Phát biểu nào sau đây đúng?",
    "options": [
      "Các nguyên tử của nguyên tố khí hiếm đều có 8 electron lớp ngoài cùng.",
      "Các nguyên tố mà nguyên tử có 1, 2 hoặc 3 electron lớp ngoài cùng đều là kim loại.",
      "Chỉ các nguyên tố mà nguyên tử có 5, 6 hoặc 7 electron lớp ngoài cùng là phi kim.",
      "Nguyên tố mà nguyên tử có 4 electron lớp ngoài cùng có thể là kim loại hoặc phi kim."
    ],
    "correctAnswer": "D",
    "explanation": "Nguyên tố có 4 electron lớp ngoài cùng có thể là phi kim (C, Si) hoặc kim loại (Sn, Pb)."
  },
  {
    "id": "g10_p1_22",
    "lessonId": "chude2_bangtuanhoan",
    "lessonTitle": "Chủ đề 2: Đặc điểm nhóm A",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.2.1",
    "content": "Nguyên tử của các nguyên tố trong cùng một nhóm A của bảng tuần hoàn có cùng",
    "options": [
      "số neutron.",
      "số electron.",
      "số proton.",
      "số electron lớp ngoài cùng."
    ],
    "correctAnswer": "D",
    "explanation": "Các nguyên tố thuộc cùng một nhóm A có cùng số electron lớp ngoài cùng."
  },
  {
    "id": "g10_p1_23",
    "lessonId": "chude1_voelectron",
    "lessonTitle": "Chủ đề 1: Phân lớp ngoài cùng Sulfur",
    "part": "part1",
    "level": "hieu",
    "category": "lythuyet",
    "code": "H10.1.3",
    "content": "Sulfur dạng kem bôi được sử dụng để điều trị mụn trứng cá. Nguyên tử sulfur có phân lớp electron ngoài cùng là 3p⁴. Phát biểu nào sau đây không đúng về nguyên tử sulfur?",
    "options": [
      "Lớp ngoài cùng có 4 electron.",
      "Nguyên tử có 16 electron.",
      "Thuộc chu kỳ 3 trong bảng tuần hoàn.",
      "Thuộc nhóm VIA trong bảng tuần hoàn."
    ],
    "correctAnswer": "A",
    "explanation": "Sulfur (Z = 16) có cấu hình: 1s² 2s² 2p⁶ 3s² 3p⁴ => Lớp ngoài cùng (lớp 3) có 2 + 4 = 6 electron."
  },
  {
    "id": "g10_p1_24",
    "lessonId": "chude2_bangtuanhoan",
    "lessonTitle": "Chủ đề 2: Vị trí nguyên tố X (Z=14)",
    "part": "part1",
    "level": "hieu",
    "category": "lythuyet",
    "code": "H10.2.1",
    "content": "Cấu hình electron của nguyên tử nguyên tố X là 1s² 2s² 2p⁶ 3s² 3p². Vị trí của X trong bảng tuần hoàn là",
    "options": [
      "ô 12, chu kì 3, nhóm IIA.",
      "ô 14, chu kì 3, nhóm IIA.",
      "ô 12, chu kì 3, nhóm IVA.",
      "ô 14, chu kì 3, nhóm IVA."
    ],
    "correctAnswer": "D",
    "explanation": "X có Z = 14 => Ô 14, 3 lớp electron => Chu kì 3, 4 electron hóa trị => Nhóm IVA (Silicon)."
  },
  {
    "id": "g10_p1_25",
    "lessonId": "chude1_nguyentu",
    "lessonTitle": "Chủ đề 1: Khối lượng và điện tích hạt cơ bản",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.1.1",
    "content": "Trường hợp nào sau đây có sự tương ứng đúng giữa hạt cơ bản với khối lượng và điện tích của chúng?",
    "options": [
      "Proton, m ≈ 0,00055 amu, q = +1.",
      "Neutron, m ≈ 1 amu, q = 0.",
      "Electron, m ≈ 1 amu, q = -1.",
      "Proton, m ≈ 1 amu, q = -1."
    ],
    "correctAnswer": "B",
    "explanation": "Neutron có khối lượng gần bằng 1 amu và không mang điện (q = 0)."
  },
  {
    "id": "g10_p1_26",
    "lessonId": "chude1_nguyentu",
    "lessonTitle": "Chủ đề 1: Số khối Fluorine",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.1.1",
    "content": "Nguyên tử F có 9 proton, 9 electron và 10 neutron. Số khối của F là",
    "options": [
      "9.",
      "10.",
      "19.",
      "28."
    ],
    "correctAnswer": "C",
    "explanation": "Số khối A = Z + N = 9 + 10 = 19."
  },
  {
    "id": "g10_p1_27",
    "lessonId": "chude1_voelectron",
    "lessonTitle": "Chủ đề 1: Định nghĩa Orbital",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.1.3",
    "content": "Orbital nguyên tử là",
    "options": [
      "đám mây chứa electron có dạng hình cầu.",
      "đám mây chứa electron có dạng hình số tám nổi.",
      "vùng không gian xung quanh hạt nhân mà ở đó xác suất có mặt electron là lớn nhất.",
      "quỹ đạo chuyển động của electron quanh hạt nhân có kích thước và năng lượng xác định."
    ],
    "correctAnswer": "C",
    "explanation": "Orbital nguyên tử là vùng không gian xung quanh hạt nhân mà tại đó xác suất có mặt electron khoảng 90%."
  },
  {
    "id": "g10_p1_28",
    "lessonId": "chude1_nguyento",
    "lessonTitle": "Chủ đề 1: Sự khác nhau giữa các đồng vị",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.1.2",
    "content": "Hai đồng vị của nguyên tố carbon khác nhau về",
    "options": [
      "cấu hình electron.",
      "số khối.",
      "số hiệu nguyên tử.",
      "số proton."
    ],
    "correctAnswer": "B",
    "explanation": "Các đồng vị của cùng một nguyên tố có cùng Z nhưng khác N nên khác số khối A."
  },
  {
    "id": "g10_p1_29",
    "lessonId": "chude2_bangtuanhoan",
    "lessonTitle": "Chủ đề 2: Ô nguyên tố và Z",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.2.1",
    "content": "Số hiệu nguyên tử của nguyên tố hóa học bằng",
    "options": [
      "số thứ tự của ô nguyên tố.",
      "số thứ tự của chu kì.",
      "số thứ tự của nhóm.",
      "số electron lớp ngoài cùng."
    ],
    "correctAnswer": "A",
    "explanation": "Số thứ tự ô nguyên tố trong BTH đúng bằng số hiệu nguyên tử Z của nguyên tố."
  },
  {
    "id": "g10_p1_30",
    "lessonId": "chude2_bangtuanhoan",
    "lessonTitle": "Chủ đề 2: Tính chất nhóm",
    "part": "part1",
    "level": "hieu",
    "category": "lythuyet",
    "code": "H10.2.1",
    "content": "Các nguyên tố trong cùng một nhóm của bảng tuần hoàn có",
    "options": [
      "cùng số lớp electron.",
      "cùng số electron ở lớp vỏ.",
      "tính chất hóa học tương tự nhau.",
      "cùng điện tích hạt nhân."
    ],
    "correctAnswer": "C",
    "explanation": "Các nguyên tố cùng nhóm có cấu hình electron tương tự nhau nên có tính chất hóa học tương tự nhau."
  },
  {
    "id": "g10_p1_31",
    "lessonId": "chude2_bangtuanhoan",
    "lessonTitle": "Chủ đề 2: Số nhóm A và B",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.2.1",
    "content": "Bảng tuần hoàn hiện nay có số nhóm A và nhóm B là",
    "options": [
      "8 và 8.",
      "8 và 10.",
      "7 và 8.",
      "7 và 9."
    ],
    "correctAnswer": "A",
    "explanation": "Bảng tuần hoàn có 8 nhóm A và 8 nhóm B."
  },
  {
    "id": "g10_p1_32",
    "lessonId": "chude1_nguyento",
    "lessonTitle": "Chủ đề 1: Kí hiệu Lithium",
    "part": "part1",
    "level": "hieu",
    "category": "lythuyet",
    "code": "H10.1.2",
    "content": "Phát biểu nào sau đây đúng về ⁷₃Li?",
    "options": [
      "Hạt nhân nguyên tử có 3 proton và 7 neutron.",
      "Số khối của hạt nhân nguyên tử là 3, số hiệu nguyên tử là 7.",
      "Nguyên tử có 3 electron, hạt nhân có 3 proton và 4 neutron.",
      "Nguyên tử có 3 electron, hạt nhân có 4 proton và 3 neutron."
    ],
    "correctAnswer": "C",
    "explanation": "⁷₃Li có Z = 3 => p = e = 3. Số neutron n = 7 - 3 = 4."
  },
  {
    "id": "g10_p1_33",
    "lessonId": "chude1_voelectron",
    "lessonTitle": "Chủ đề 1: Số electron lớp ngoài cùng",
    "part": "part1",
    "level": "hieu",
    "category": "lythuyet",
    "code": "H10.1.3",
    "content": "Phát biểu nào sau đây không đúng?",
    "options": [
      "Các nguyên tử có 2 electron lớp ngoài cùng đều là nguyên tử kim loại.",
      "Các electron lớp ngoài cùng quyết định tính chất hóa học của nguyên tố.",
      "Các nguyên tử có 8 electron lớp ngoài cùng đều là nguyên tử khí hiếm.",
      "Đối với nguyên tử của tất cả các nguyên tố, lớp ngoài cùng có nhiều nhất 8 electron."
    ],
    "correctAnswer": "A",
    "explanation": "Helium (He, Z=2) có 2e lớp ngoài cùng là khí hiếm phi kim, không phải kim loại."
  },
  {
    "id": "g10_p1_34",
    "lessonId": "chude2_bangtuanhoan",
    "lessonTitle": "Chủ đề 2: Nguyên tắc xếp BTH",
    "part": "part1",
    "level": "hieu",
    "category": "lythuyet",
    "code": "H10.2.1",
    "content": "Phát biểu nào sau đây không phù hợp với nguyên tắc sắp xếp các nguyên tố trong bảng tuần hoàn?",
    "options": [
      "Các nguyên tố được xếp theo chiều tăng của điện tích hạt nhân.",
      "Các nguyên tố có cùng số lớp electron được xếp thành một hàng.",
      "Các nguyên tố có cùng số electron hóa trị được xếp thành một cột.",
      "Các nguyên tố được xếp theo chiều tăng của nguyên tử khối."
    ],
    "correctAnswer": "D",
    "explanation": "Bảng tuần hoàn sắp xếp theo điện tích hạt nhân Z, không phải nguyên tử khối."
  },
  {
    "id": "g10_p1_35",
    "lessonId": "chude1_voelectron",
    "lessonTitle": "Chủ đề 1: Lớp electron Potassium",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.1.3",
    "content": "Nguyên tử nguyên tố K (Z = 19) có số lớp electron là",
    "options": [
      "1.",
      "2.",
      "3.",
      "4."
    ],
    "correctAnswer": "D",
    "explanation": "K (Z = 19): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ => Có 4 lớp electron."
  },
  {
    "id": "g10_p1_36",
    "lessonId": "chude1_voelectron",
    "lessonTitle": "Chủ đề 1: Cấu hình nguyên tố s",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.1.3",
    "content": "Cấu hình electron nguyên tử nào sau đây là của nguyên tố s?",
    "options": [
      "1s² 2s² 2p³.",
      "1s² 2s² 2p⁶ 3s¹.",
      "1s² 2s² 2p⁶ 3s² 3p⁵.",
      "1s² 2s² 2p⁶ 3s² 3p⁴."
    ],
    "correctAnswer": "B",
    "explanation": "1s² 2s² 2p⁶ 3s¹ có electron cuối cùng điền vào phân lớp s nên là nguyên tố s (Natri)."
  },
  {
    "id": "g10_p1_37",
    "lessonId": "chude1_nguyentu",
    "lessonTitle": "Chủ đề 1: Khối lượng electron",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.1.1",
    "content": "Trong nguyên tử, loại hạt có khối lượng không đáng kể so với các hạt còn lại là",
    "options": [
      "proton.",
      "electron.",
      "neutron.",
      "alpha."
    ],
    "correctAnswer": "B",
    "explanation": "Khối lượng của electron xấp xỉ 0,00055 amu, rất nhỏ so với proton và neutron."
  },
  {
    "id": "g10_p1_38",
    "lessonId": "chude1_nguyento",
    "lessonTitle": "Chủ đề 1: Số neutron Đồng",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.1.2",
    "content": "Nguyên tử ⁶³₂₉Cu có số neutron là",
    "options": [
      "34.",
      "63.",
      "92.",
      "87."
    ],
    "correctAnswer": "A",
    "explanation": "N = A - Z = 63 - 29 = 34."
  },
  {
    "id": "g10_p1_39",
    "lessonId": "chude1_voelectron",
    "lessonTitle": "Chủ đề 1: Mức năng lượng",
    "part": "part1",
    "level": "hieu",
    "category": "lythuyet",
    "code": "H10.1.3",
    "content": "Theo thứ tự mức năng lượng, sự sắp xếp nào sau đây không đúng?",
    "options": [
      "1s < 2s.",
      "4s > 3s.",
      "4d < 5s.",
      "3p < 3d."
    ],
    "correctAnswer": "C",
    "explanation": "Mức năng lượng: 5s < 4d nên viết 4d < 5s là không đúng."
  },
  {
    "id": "g10_p1_40",
    "lessonId": "chude1_nguyento",
    "lessonTitle": "Chủ đề 1: Phân tử đồng vị N2",
    "part": "part1",
    "level": "hieu",
    "category": "lythuyet",
    "code": "H10.1.2",
    "content": "Nguyên tố nitrogen có hai đồng vị tự nhiên là ¹⁴₇N và ¹⁵₇N. Số loại phân tử N₂ tạo thành là",
    "options": [
      "3.",
      "2.",
      "4.",
      "1."
    ],
    "correctAnswer": "A",
    "explanation": "Gồm 3 loại phân tử: ¹⁴N-¹⁴N, ¹⁴N-¹⁵N, ¹⁵N-¹⁵N."
  },
  {
    "id": "g10_p1_41",
    "lessonId": "chude1_voelectron",
    "lessonTitle": "Chủ đề 1: Số electron độc thân của P",
    "part": "part1",
    "level": "hieu",
    "category": "lythuyet",
    "code": "H10.1.3",
    "content": "Sự phân bố electron vào orbital của nguyên tử phosphorus (P, Z = 15) ở phân lớp 3p là [↑][↑][↑]. Số electron độc thân của nguyên tử phosphorus là",
    "options": [
      "1.",
      "2.",
      "3.",
      "4."
    ],
    "correctAnswer": "C",
    "explanation": "Phân lớp 3p³ có 3 orbital, mỗi orbital chứa 1 electron độc thân."
  },
  {
    "id": "g10_p1_42",
    "lessonId": "chude1_nguyento",
    "lessonTitle": "Chủ đề 1: Tính chất các đồng vị",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.1.2",
    "content": "Phát biểu nào sau đây không đúng về các đồng vị của cùng một nguyên tố hóa học?",
    "options": [
      "Có số khối khác nhau.",
      "Có số neutron khác nhau.",
      "Có cùng điện tích hạt nhân.",
      "Có số electron khác nhau."
    ],
    "correctAnswer": "D",
    "explanation": "Các đồng vị của cùng một nguyên tố có cùng số proton Z nên luôn có cùng số electron."
  },
  {
    "id": "g10_p1_43",
    "lessonId": "chude2_bangtuanhoan",
    "lessonTitle": "Chủ đề 2: Chu kì nhỏ và lớn",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.2.1",
    "content": "Trong bảng tuần hoàn các nguyên tố, số chu kì nhỏ và số chu kì lớn lần lượt là",
    "options": [
      "3 và 3.",
      "4 và 3.",
      "4 và 4.",
      "3 và 4."
    ],
    "correctAnswer": "D",
    "explanation": "Chu kì 1, 2, 3 là chu kì nhỏ (3 chu kì); chu kì 4, 5, 6, 7 là chu kì lớn (4 chu kì)."
  },
  {
    "id": "g10_p1_44",
    "lessonId": "chude2_bangtuanhoan",
    "lessonTitle": "Chủ đề 2: Vị trí ion X2-",
    "part": "part1",
    "level": "hieu",
    "category": "lythuyet",
    "code": "H10.2.1",
    "content": "Ion X²⁻ có cấu hình electron lớp ngoài cùng là 3s² 3p⁶. Vị trí (chu kì, nhóm) của nguyên tố X trong bảng tuần hoàn là",
    "options": [
      "chu kì 3, nhóm VIA.",
      "chu kì 4, nhóm IIIA.",
      "chu kì 3, nhóm IVA.",
      "chu kì 4, nhóm IIA."
    ],
    "correctAnswer": "A",
    "explanation": "Nguyên tử X có cấu hình lớp ngoài cùng là 3s² 3p⁴ (Z=16, S) => Chu kì 3, nhóm VIA."
  },
  {
    "id": "g10_p1_45",
    "lessonId": "chude1_voelectron",
    "lessonTitle": "Chủ đề 1: Số phân lớp của lớp L",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.1.3",
    "content": "Lớp L (n = 2) có số phân lớp electron bằng",
    "options": [
      "1.",
      "3.",
      "2.",
      "4."
    ],
    "correctAnswer": "C",
    "explanation": "Lớp thứ n có n phân lớp. Lớp L có n = 2 nên có 2 phân lớp: 2s và 2p."
  },
  {
    "id": "g10_p1_46",
    "lessonId": "chude1_voelectron",
    "lessonTitle": "Chủ đề 1: Cấu hình electron Cu",
    "part": "part1",
    "level": "hieu",
    "category": "lythuyet",
    "code": "H10.1.3",
    "content": "Cấu hình electron của Cu (Z = 29) là",
    "options": [
      "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s¹.",
      "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁹ 4s².",
      "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁹.",
      "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰."
    ],
    "correctAnswer": "A",
    "explanation": "Cu chuyển 1 electron từ 4s sang 3d để đạt cấu hình bão hòa 3d¹⁰ bền: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s¹."
  },
  {
    "id": "g10_p1_47",
    "lessonId": "chude2_bangtuanhoan",
    "lessonTitle": "Chủ đề 2: Nguyên tố cùng nhóm",
    "part": "part1",
    "level": "hieu",
    "category": "lythuyet",
    "code": "H10.2.1",
    "content": "Sự phân bố electron trong nguyên tử của 4 nguyên tố như sau: X (2, 8, 1); Y (2, 7); Z (2, 8, 8, 1); T (2, 1). Những nguyên tố thuộc cùng nhóm là",
    "options": [
      "X, Y.",
      "X, Z.",
      "Y, T.",
      "X, Z, T."
    ],
    "correctAnswer": "D",
    "explanation": "X, Z, T đều có 1 electron ở lớp ngoài cùng nên cùng thuộc nhóm IA."
  },
  {
    "id": "g10_p1_48",
    "lessonId": "chude1_voelectron",
    "lessonTitle": "Chủ đề 1: Nguyên tố phân lớp ngoài cùng 3p5",
    "part": "part1",
    "level": "hieu",
    "category": "lythuyet",
    "code": "H10.1.3",
    "content": "Nguyên tử nguyên tố X có phân lớp electron ngoài cùng trong nguyên tử là 3p⁵. Phát biểu nào sau đây không đúng?",
    "options": [
      "X có 17 proton trong hạt nhân.",
      "Lớp ngoài cùng của X có 5 electron.",
      "X thuộc chu kì 3.",
      "X thuộc nhóm VIIA."
    ],
    "correctAnswer": "B",
    "explanation": "Lớp ngoài cùng là lớp 3 gồm 3s² 3p⁵ có 2 + 5 = 7 electron, không phải 5."
  },
  {
    "id": "g10_p1_49",
    "lessonId": "chude2_tuanhoan_tinhchat",
    "lessonTitle": "Chủ đề 2: Xu hướng bán kính nguyên tử trong chu kì",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.2.2",
    "content": "Trong một chu kì, theo chiều từ trái sang phải, bán kính nguyên tử của các nguyên tố thuộc nhóm A",
    "options": [
      "tăng dần.",
      "giảm dần.",
      "không thay đổi.",
      "biến đổi không theo quy luật."
    ],
    "correctAnswer": "B",
    "explanation": "Trong một chu kì từ trái sang phải, điện tích hạt nhân tăng, lực hút e ngoài cùng mạnh hơn nên bán kính giảm dần."
  },
  {
    "id": "g10_p1_50",
    "lessonId": "chude2_tuanhoan_tinhchat",
    "lessonTitle": "Chủ đề 2: Xu hướng bán kính nguyên tử trong nhóm",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.2.2",
    "content": "Trong một nhóm A, theo chiều từ trên xuống dưới, bán kính nguyên tử của các nguyên tố",
    "options": [
      "tăng dần.",
      "giảm dần.",
      "không thay đổi.",
      "biến đổi không theo quy luật."
    ],
    "correctAnswer": "A",
    "explanation": "Từ trên xuống dưới trong nhóm A, số lớp electron tăng dần nên bán kính nguyên tử tăng dần."
  },
  {
    "id": "g10_p1_51",
    "lessonId": "chude2_tuanhoan_tinhchat",
    "lessonTitle": "Chủ đề 2: Khái niệm độ âm điện",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.2.2",
    "content": "Độ âm điện đặc trưng cho khả năng",
    "options": [
      "hút electron của nguyên tử trong phân tử.",
      "nhường electron của nguyên tử này cho nguyên tử khác.",
      "tham gia phản ứng mạnh hay yếu.",
      "nhường proton của nguyên tử này cho nguyên tử khác."
    ],
    "correctAnswer": "A",
    "explanation": "Độ âm điện biểu thị khả năng hút electron liên kết về phía nguyên tử."
  },
  {
    "id": "g10_p1_52",
    "lessonId": "chude2_tuanhoan_tinhchat",
    "lessonTitle": "Chủ đề 2: Tính kim loại trong chu kì",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.2.2",
    "content": "Trong mỗi chu kì, theo chiều tăng của điện tích hạt nhân, tính kim loại của các nguyên tố",
    "options": [
      "giảm dần.",
      "tăng dần.",
      "không thay đổi.",
      "biến đổi không theo quy luật."
    ],
    "correctAnswer": "A",
    "explanation": "Trong chu kì theo chiều tăng Z, tính kim loại giảm dần và tính phi kim tăng dần."
  },
  {
    "id": "g10_p1_53",
    "lessonId": "chude2_tuanhoan_tinhchat",
    "lessonTitle": "Chủ đề 2: Nguyên tố có bán kính lớn nhất",
    "part": "part1",
    "level": "hieu",
    "category": "lythuyet",
    "code": "H10.2.2",
    "content": "Nguyên tử của nguyên tố nào có bán kính lớn nhất trong các nguyên tử: Al, P, S, K?",
    "options": [
      "Al.",
      "P.",
      "S.",
      "K."
    ],
    "correctAnswer": "D",
    "explanation": "K thuộc chu kì 4 (4 lớp electron) nên có bán kính lớn hơn các nguyên tố chu kì 3 (Al, P, S)."
  },
  {
    "id": "g10_p1_54",
    "lessonId": "chude2_tuanhoan_tinhchat",
    "lessonTitle": "Chủ đề 2: Thứ tự giảm dần bán kính nguyên tử",
    "part": "part1",
    "level": "hieu",
    "category": "lythuyet",
    "code": "H10.2.2",
    "content": "Bán kính nguyên tử của các nguyên tố: ₃Li, ₈O, ₉F, ₁₁Na được xếp theo thứ tự giảm dần từ trái sang phải là",
    "options": [
      "F, O, Li, Na.",
      "F, Na, O, Li.",
      "Li, Na, O, F.",
      "Na, Li, O, F."
    ],
    "correctAnswer": "D",
    "explanation": "Na (chu kì 3, 3 lớp e) > Li (chu kì 2) > O > F (theo chiều tăng Z trong chu kì 2)."
  },
  {
    "id": "g10_p1_55",
    "lessonId": "chude2_tuanhoan_tinhchat",
    "lessonTitle": "Chủ đề 2: Tính phi kim lớn nhất",
    "part": "part1",
    "level": "hieu",
    "category": "lythuyet",
    "code": "H10.2.2",
    "content": "Cho các nguyên tố ₈O, ₉F, ₁₄Si, ₁₆S. Nguyên tố có tính phi kim lớn nhất là",
    "options": [
      "O.",
      "F.",
      "S.",
      "Si."
    ],
    "correctAnswer": "B",
    "explanation": "Fluorine (F) có độ âm điện lớn nhất (3,98) và tính phi kim mạnh nhất."
  },
  {
    "id": "g10_p1_56",
    "lessonId": "chude2_tuanhoan_tinhchat",
    "lessonTitle": "Chủ đề 2: Tính kim loại mạnh nhất",
    "part": "part1",
    "level": "hieu",
    "category": "lythuyet",
    "code": "H10.2.2",
    "content": "Nguyên tử của nguyên tố nào sau đây có tính kim loại mạnh nhất? Cho biết nguyên tố này được sử dụng trong đồng hồ nguyên tử.",
    "options": [
      "Hydrogen.",
      "Berylium.",
      "Caesium.",
      "Phosphorus."
    ],
    "correctAnswer": "C",
    "explanation": "Caesium (Cs) ở đáy nhóm IA có bán kính lớn nhất, năng lượng ion hóa nhỏ nhất, tính kim loại mạnh nhất."
  },
  {
    "id": "g10_p1_57",
    "lessonId": "chude2_tuanhoan_tinhchat",
    "lessonTitle": "Chủ đề 2: Oxide cao nhất nhóm IIIA",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.2.3",
    "content": "X là nguyên tố nhóm IIIA. Công thức oxide ứng với hóa trị cao nhất của X là",
    "options": [
      "XO.",
      "XO₂.",
      "X₂O.",
      "X₂O₃."
    ],
    "correctAnswer": "D",
    "explanation": "Nguyên tố nhóm IIIA có hóa trị cao nhất là III => Oxide là X₂O₃."
  },
  {
    "id": "g10_p1_58",
    "lessonId": "chude2_tuanhoan_tinhchat",
    "lessonTitle": "Chủ đề 2: Oxide cao nhất của Silicon",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.2.3",
    "content": "Nguyên tố silicon (Si) thuộc chu kì 3, nhóm IVA trong bảng tuần hoàn các nguyên tố hoá học. Công thức oxide cao nhất của silicon là",
    "options": [
      "SiO₂.",
      "SiO.",
      "H₂SiO₃.",
      "SiH₄."
    ],
    "correctAnswer": "A",
    "explanation": "Silicon nhóm IVA có hóa trị cao nhất là IV => Oxide cao nhất là SiO₂."
  },
  {
    "id": "g10_p1_59",
    "lessonId": "chude2_tuanhoan_tinhchat",
    "lessonTitle": "Chủ đề 2: Acid mạnh nhất chu kì 3",
    "part": "part1",
    "level": "hieu",
    "category": "lythuyet",
    "code": "H10.2.3",
    "content": "Trong các hydroxide của các nguyên tố chu kỳ 3, acid mạnh nhất là",
    "options": [
      "H₂SO₄.",
      "HClO₄.",
      "H₂SiO₃.",
      "H₃PO₄."
    ],
    "correctAnswer": "B",
    "explanation": "HClO₄ (perchloric acid) có tính acid mạnh nhất trong chu kì 3."
  },
  {
    "id": "g10_p1_60",
    "lessonId": "chude2_tuanhoan_tinhchat",
    "lessonTitle": "Chủ đề 2: Giảm dần tính base oxide",
    "part": "part1",
    "level": "hieu",
    "category": "lythuyet",
    "code": "H10.2.3",
    "content": "Cho các oxide sau: Na₂O, Al₂O₃, SiO₂, MgO. Thứ tự giảm dần tính base là",
    "options": [
      "Na₂O > Al₂O₃ > MgO > SiO₂.",
      "Al₂O₃ > SiO₂ > MgO > Na₂O.",
      "Na₂O > MgO > Al₂O₃ > SiO₂.",
      "MgO > Na₂O > Al₂O₃ > SiO₂."
    ],
    "correctAnswer": "C",
    "explanation": "Trong chu kì 3: Na₂O (base mạnh) > MgO (base yếu) > Al₂O₃ (lưỡng tính) > SiO₂ (oxide acid)."
  },
  {
    "id": "g10_p3_01",
    "lessonId": "chude2_bangtuanhoan",
    "lessonTitle": "Chủ đề 2: Cấu trúc cột BTH",
    "part": "part3",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.2.1",
    "content": "Bảng tuần hoàn hiện nay gồm 8 nhóm A và 8 nhóm B tương ứng với bao nhiêu cột?",
    "correctAnswer": "18",
    "explanation": "Bảng tuần hoàn gồm 18 cột (nhóm VIIIB gồm 3 cột)."
  },
  {
    "id": "g10_p3_02",
    "lessonId": "chude1_voelectron",
    "lessonTitle": "Chủ đề 1: Đếm số nguyên tố kim loại",
    "part": "part3",
    "level": "hieu",
    "category": "lythuyet",
    "code": "H10.1.3",
    "content": "Cho cấu hình electron của các nguyên tử: (1) 1s²; (2) 1s² 2s² 2p⁶ 3s¹; (3) 1s² 2s² 2p⁶ 3s² 3p⁴; (4) 1s² 2s² 2p⁶ 3s² 3p¹; (5) 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²; (6) 1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁵. Số lượng các nguyên tố kim loại là bao nhiêu?",
    "correctAnswer": "3",
    "explanation": "Gồm (2) Na, (4) Al, (5) Fe. Tổng cộng 3 nguyên tố kim loại."
  },
  {
    "id": "g10_p3_03",
    "lessonId": "chude1_nguyento",
    "lessonTitle": "Chủ đề 1: Nguyên tử khối trung bình Neon",
    "part": "part3",
    "level": "vd",
    "category": "tinh_toan",
    "code": "H10.1.2",
    "imageUrl": "/images/pho_khoi_luong_ne.jpg",
    "imageBase64": neonImgBase64,
    "imageCaption": "Hình 1. Phổ khối lượng của nguyên tố Neon (Ne)",
    "content": "Tỉ lệ phần trăm số nguyên tử các đồng vị của neon (Ne) xác định theo phổ khối lượng gồm: ²⁰Ne (90,0%), ²¹Ne (1,0%) và ²²Ne (9,0%). Nguyên tử khối trung bình của Neon là bao nhiêu? (Làm tròn đến hàng phần mười)",
    "correctAnswer": "20,2",
    "explanation": "A_tb = (20×90,0 + 21×1,0 + 22×9,0)/100 = 20,19 ≈ 20,2."
  },
  {
    "id": "g10_p3_04",
    "lessonId": "chude1_voelectron",
    "lessonTitle": "Chủ đề 1: Đếm nguyên tố có 1e hóa trị",
    "part": "part3",
    "level": "hieu",
    "category": "lythuyet",
    "code": "H10.1.3",
    "content": "Cho nguyên tử của các nguyên tố sau: ₃X, ₉Y, ₁₂Z, ₁₃T, ₁₉G, ₂₀R. Có bao nhiêu nguyên tố có 1 electron hóa trị?",
    "correctAnswer": "2",
    "explanation": "Có 2 nguyên tố là ₃X (Li, 2s¹) và ₁₉G (K, 4s¹)."
  },
  {
    "id": "g10_p3_05",
    "lessonId": "chude1_voelectron",
    "lessonTitle": "Chủ đề 1: Đếm nguyên tố s",
    "part": "part3",
    "level": "hieu",
    "category": "lythuyet",
    "code": "H10.1.3",
    "content": "Cho các nguyên tố sau: ₃Li, ₈O, ₉F, ₁₁Na, ₁₅P, ₂₀Ca. Có bao nhiêu nguyên tố trong dãy trên là nguyên tố s?",
    "correctAnswer": "3",
    "explanation": "Gồm ₃Li (2s¹), ₁₁Na (3s¹), ₂₀Ca (4s²). Có 3 nguyên tố s."
  },
  {
    "id": "g10_p3_06",
    "lessonId": "chude1_voelectron",
    "lessonTitle": "Chủ đề 1: Số electron lớp L của Sulfur",
    "part": "part3",
    "level": "hieu",
    "category": "lythuyet",
    "code": "H10.1.3",
    "content": "Nguyên tố sulfur (S) nằm ở ô thứ 16 trong bảng hệ thống tuần hoàn. Số electron thuộc lớp L (n = 2) trong nguyên tử sulfur là bao nhiêu?",
    "correctAnswer": "8",
    "explanation": "Lớp L (n=2) gồm 2s² 2p⁶ có 2 + 6 = 8 electron."
  },
  {
    "id": "g10_p3_07",
    "lessonId": "chude1_nguyento",
    "lessonTitle": "Chủ đề 1: Tính số khối đồng vị thứ hai",
    "part": "part3",
    "level": "vd",
    "category": "tinh_toan",
    "code": "H10.1.2",
    "content": "Nguyên tố Y có hai đồng vị bền với nguyên tử khối trung bình là 24,4. Đồng vị thứ nhất có số khối bằng 24 và chiếm 60% số nguyên tử. Số khối của đồng vị thứ hai là bao nhiêu?",
    "correctAnswer": "25",
    "explanation": "A_tb = (24×60 + A₂×40)/100 = 24,4 => 40 A₂ = 1000 => A₂ = 25 (Magnesium)."
  },
  {
    "id": "g10_p3_08",
    "lessonId": "chude2_bangtuanhoan",
    "lessonTitle": "Chủ đề 2: Xác định số proton Y cùng nhóm A",
    "part": "part3",
    "level": "vd",
    "category": "tinh_toan",
    "code": "H10.2.1",
    "content": "X, Y là hai nguyên tố thuộc cùng nhóm A ở hai chu kì liên tiếp nhau trong bảng tuần hoàn, có tổng số proton trong hai hạt nhân là 32 (ZX < ZY). Số hiệu nguyên tử của Y là bao nhiêu?",
    "correctAnswer": "20",
    "explanation": "Z_Y - Z_X = 8 và Z_X + Z_Y = 32 => Z_Y = (32 + 8)/2 = 20 (Calcium)."
  },
  {
    "id": "g10_p3_09",
    "lessonId": "chude1_voelectron",
    "lessonTitle": "Chủ đề 1: Số electron tối đa lớp thứ 3",
    "part": "part3",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.1.3",
    "content": "Lớp thứ 3 (lớp M) có số electron tối đa là bao nhiêu?",
    "correctAnswer": "18",
    "explanation": "Số electron tối đa lớp n = 2n² => lớp 3 có 2 × 3² = 18 electron."
  },
  {
    "id": "g10_p3_10",
    "lessonId": "chude1_nguyento",
    "lessonTitle": "Chủ đề 1: Số hợp chất NO từ đồng vị",
    "part": "part3",
    "level": "hieu",
    "category": "lythuyet",
    "code": "H10.1.2",
    "content": "Oxygen có 3 đồng vị là ¹⁶O, ¹⁷O và ¹⁸O. Nitrogen có 2 đồng vị là ¹⁴N, ¹⁵N. Có bao nhiêu hợp chất phân tử NO khác nhau được tạo thành bởi các đồng vị trên?",
    "correctAnswer": "6",
    "explanation": "Số loại phân tử NO = 2 (đồng vị N) × 3 (đồng vị O) = 6 phân tử."
  },
  {
    "id": "g10_p3_11",
    "lessonId": "chude2_bangtuanhoan",
    "lessonTitle": "Chủ đề 2: Số nguyên tố chu kì 5",
    "part": "part3",
    "level": "biet",
    "category": "lythuyet",
    "code": "H10.2.1",
    "content": "Trong bảng tuần hoàn các nguyên tố hóa học, có bao nhiêu nguyên tố thuộc chu kì 5?",
    "correctAnswer": "18",
    "explanation": "Chu kì 5 gồm 18 nguyên tố từ Rb (Z=37) đến Xe (Z=54)."
  },
  {
    "id": "g10_p3_12",
    "lessonId": "chude1_voelectron",
    "lessonTitle": "Chủ đề 1: Số electron phân lớp s của Sắt",
    "part": "part3",
    "level": "hieu",
    "category": "lythuyet",
    "code": "H10.1.3",
    "content": "Ở trạng thái cơ bản, nguyên tử M có phân lớp electron điền sau cùng là 3d⁶. Tổng số electron ở các phân lớp s của nguyên tử M là bao nhiêu?",
    "correctAnswer": "8",
    "explanation": "M có cấu hình 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s² (Fe, Z=26). Các phân lớp s gồm 1s², 2s², 3s², 4s² có tổng 2 + 2 + 2 + 2 = 8 electron."
  },
  {
    "id": "g10_p3_13",
    "lessonId": "chude1_voelectron",
    "lessonTitle": "Chủ đề 1: Số orbital chứa electron của Aluminium",
    "part": "part3",
    "level": "hieu",
    "category": "lythuyet",
    "code": "H10.1.3",
    "content": "Nguyên tử của nguyên tố aluminium (Al) có 13 electron. Ở trạng thái cơ bản, Al có số orbital chứa electron là bao nhiêu?",
    "correctAnswer": "7",
    "explanation": "Al (Z = 13): 1s² (1 AO) 2s² (1 AO) 2p⁶ (3 AO) 3s² (1 AO) 3p¹ (1 AO chứa electron) => Tổng số AO chứa electron = 1 + 1 + 3 + 1 + 1 = 7 AO."
  },
  {
    "id": "g10_p3_14",
    "lessonId": "chude1_nguyentu",
    "lessonTitle": "Chủ đề 1: Hạt mang điện trong Cu2O",
    "part": "part3",
    "level": "vd",
    "category": "tinh_toan",
    "code": "H10.1.1",
    "content": "Nguyên tố Y thuộc chu kì 4, nhóm IB (Z = 29, Cu). Tổng số hạt mang điện trong hợp chất phân tử Y₂O là bao nhiêu? Biết số hiệu nguyên tử của oxygen bằng 8.",
    "correctAnswer": "132",
    "explanation": "Hạt mang điện gồm proton và electron. Mỗi nguyên tử có số hạt mang điện = 2Z. Trong Cu₂O: Tổng số hạt mang điện = 2 × (2 × 29) + (2 × 8) = 116 + 16 = 132."
  },
  {
    "id": "g10_p3_15",
    "lessonId": "chude2_bangtuanhoan",
    "lessonTitle": "Chủ đề 2: Ô nguyên tố Iodine",
    "part": "part3",
    "level": "hieu",
    "category": "lythuyet",
    "code": "H10.2.1",
    "content": "Nguyên tố vi lượng X thuộc nhóm VIIA, chu kì 5 trong bảng tuần hoàn rất cần thiết cho tuyến giáp (thiếu X gây bệnh bướu cổ). Cho biết nguyên tố X ở ô số bao nhiêu trong bảng tuần hoàn?",
    "correctAnswer": "53",
    "explanation": "Nguyên tố đó là Iodine (I) nằm ở ô số 53 trong bảng tuần hoàn."
  },
  {
    "id": "g10_p3_16",
    "lessonId": "chude1_voelectron",
    "lessonTitle": "Chủ đề 1: Cấu hình electron có 2e độc thân",
    "part": "part3",
    "level": "vd",
    "category": "lythuyet",
    "code": "H10.1.3",
    "content": "Nguyên tử của nguyên tố X có 3 lớp electron và có 2 electron độc thân ở trạng thái cơ bản. Có bao nhiêu cấu hình electron nguyên tử thỏa mãn với X?",
    "correctAnswer": "2",
    "explanation": "Nguyên tử có 3 lớp e với 2 electron độc thân: lớp 3 có thể là 3s² 3p² (Silicon, 2e độc thân ở phân lớp 3p) hoặc 3s² 3p⁴ (Sulfur, 2e độc thân ở phân lớp 3p). Vậy có 2 cấu hình thỏa mãn."
  },
  {
    "id": "g10_p3_17",
    "lessonId": "chude2_bangtuanhoan",
    "lessonTitle": "Chủ đề 2: Ô nguyên tố ion Br-",
    "part": "part3",
    "level": "hieu",
    "category": "lythuyet",
    "code": "H10.2.1",
    "content": "Nguyên tố bromine (Br) có số hiệu nguyên tử là 35. Nguyên tử nguyên tố X có số electron nhỏ hơn số electron của ion Br⁻ là 6. Cho biết X nằm ở ô số mấy trong bảng tuần hoàn?",
    "correctAnswer": "30",
    "explanation": "Ion Br⁻ có 35 + 1 = 36 electron. Số electron của X = 36 - 6 = 30 => X ở ô số 30 (Kẽm - Zn)."
  },
  {
    "id": "g10_p3_18",
    "lessonId": "chude1_voelectron",
    "lessonTitle": "Chủ đề 1: Đếm kim loại trong dãy số hiệu Z",
    "part": "part3",
    "level": "hieu",
    "category": "lythuyet",
    "code": "H10.1.3",
    "content": "Cho các nguyên tử: X (Z = 2), Y (Z = 6), Z (Z = 8), T (Z = 10), R (Z = 11), G (Z = 17), M (Z = 26). Có bao nhiêu nguyên tố kim loại trong dãy các nguyên tử trên?",
    "correctAnswer": "2",
    "explanation": "Kim loại gồm: R (Na, Z=11) và M (Fe, Z=26). Tổng cộng có 2 nguyên tố kim loại."
  },
  {
    "id": "g10_p3_19",
    "lessonId": "chude2_tuanhoan_tinhchat",
    "lessonTitle": "Chủ đề 2: So sánh bán kính lớn hơn Phosphorus",
    "part": "part3",
    "level": "vd",
    "category": "lythuyet",
    "code": "H10.2.2",
    "content": "Cho các nguyên tố: (1) Mg, (2) Si, (3) Cl, (4) Al, (5) Na, (6) S. Hãy sắp xếp các nguyên tố có bán kính nguyên tử lớn hơn phosphorus (P) thành bộ số theo số thứ tự tăng dần (ví dụ 12, 134, ...).",
    "correctAnswer": "145",
    "explanation": "Trong chu kì 3 theo chiều tăng Z bán kính giảm: Na > Mg > Al > Si > P > S > Cl. Các nguyên tố có bán kính lớn hơn P là (1) Mg, (4) Al, (5) Na => Bộ số: 145."
  },
  {
    "id": "g10_p3_20",
    "lessonId": "chude2_tuanhoan_tinhchat",
    "lessonTitle": "Chủ đề 2: Kim loại mạnh hơn Sodium",
    "part": "part3",
    "level": "vd",
    "category": "lythuyet",
    "code": "H10.2.2",
    "content": "Cho các nguyên tố: (1) Cs, (2) Li, (3) K, (4) Rb. Hãy sắp xếp các nguyên tố có tính kim loại mạnh hơn nguyên tố sodium (Na) thành bộ số theo số thứ tự tăng dần (ví dụ 12, 134, ...).",
    "correctAnswer": "134",
    "explanation": "Trong nhóm IA, tính kim loại tăng theo chiều: Li < Na < K < Rb < Cs. Các kim loại mạnh hơn Na là (1) Cs, (3) K, (4) Rb => Bộ số: 134."
  },
  {
    "id": "g10_p4_s1_c1",
    "lessonId": "chude1_dongvi",
    "lessonTitle": "Chủ đề 1: Phổ khối lượng và đồng vị của Neon",
    "part": "part4",
    "level": "hieu_vd",
    "category": "tinh_toan",
    "code": "H10.1.2",
    "points": 1,
    "imageUrl": "/images/pho_khoi_luong_ne.jpg",
    "imageBase64": neonImgBase64,
    "imageCaption": "Hình 1. Phổ khối lượng của nguyên tố Neon (Ne)",
    "content": "Tỉ lệ phần trăm số nguyên tử các đồng vị của neon (Ne) được xác định theo phổ khối lượng ở hình bên:\na) Dựa vào phổ khối lượng, cho biết nguyên tố Neon có bao nhiêu đồng vị bền trong tự nhiên? Nêu số khối và phần trăm số nguyên tử tương ứng của mỗi đồng vị.\nb) Tính nguyên tử khối trung bình của Neon (kết quả làm tròn đến hàng phần trăm).",
    "correctAnswer": "a) 3 đồng vị bền: ²⁰Ne (90,0% hoặc 90,48%), ²¹Ne (1,0% hoặc 0,27%), ²²Ne (9,0% hoặc 9,25%); b) A_tb = 20,19 amu",
    "explanation": "a) (0,50 điểm) Dựa vào phổ khối lượng, nguyên tố Neon có 3 đồng vị bền trong tự nhiên:\n   • Đồng vị ²⁰Ne (hoặc ²⁰₁₀Ne): số khối A = 20, chiếm 90,0% (hoặc thực nghiệm 90,48%) số nguyên tử.\n   • Đồng vị ²¹Ne (hoặc ²¹₁₀Ne): số khối A = 21, chiếm 1,0% (hoặc thực nghiệm 0,27%) số nguyên tử.\n   • Đồng vị ²²Ne (hoặc ²²₁₀Ne): số khối A = 22, chiếm 9,0% (hoặc thực nghiệm 9,25%) số nguyên tử.\nb) (0,50 điểm) Nguyên tử khối trung bình của Neon:\n   • Theo số liệu phổ khối lượng trong hình:\n     A_tb = (20 × 90,0 + 21 × 1,0 + 22 × 9,0) / 100 = 2019 / 100 = 20,19 (amu).\n   • (Nếu tính theo số liệu chi tiết: A_tb = (20 × 90,48 + 21 × 0,27 + 22 × 9,25) / 100 = 2018,77 / 100 ≈ 20,19 amu)."
  },
  {
    "id": "g10_p4_s1_c2",
    "lessonId": "chude1_voelectron",
    "lessonTitle": "Chủ đề 1: Cấu trúc vỏ electron và vị trí trong BTH",
    "part": "part4",
    "level": "hieu_vd",
    "category": "lythuyet",
    "code": "H10.1.3",
    "points": 1,
    "content": "Cho hai nguyên tử nguyên tố X có số hiệu nguyên tử Z = 12 và nguyên tố Y có Z = 17.\na) Xác định vị trí (ô số, chu kì, nhóm) của X và Y trong bảng tuần hoàn và giải thích ngắn gọn dựa vào cấu hình electron.\nb) Viết cấu hình electron của nguyên tử X và Y. Cho biết X, Y là nguyên tố s, p, d hay f; là kim loại, phi kim hay khí hiếm?",
    "correctAnswer": "X (Z=12): [Ne] 3s² (nguyên tố s, kim loại, ô 12, chu kì 3, nhóm IIA); Y (Z=17): [Ne] 3s² 3p⁵ (nguyên tố p, phi kim, ô 17, chu kì 3, nhóm VIIA)",
    "explanation": "a) (0,50 điểm) [Vận dụng] Vị trí trong bảng tuần hoàn:\n   • X: Ô số 12 (do Z = 12); Chu kì 3 (do có 3 lớp electron); Nhóm IIA (do có 2 electron hóa trị ở phân lớp s ngoài cùng).\n   • Y: Ô số 17 (do Z = 17); Chu kì 3 (do có 3 lớp electron); Nhóm VIIA (do có 7 electron hóa trị ở phân lớp s và p ngoài cùng).\nb) (0,50 điểm) [Thông hiểu] Cấu hình electron và phân loại nguyên tố:\n   • Nguyên tố X (Z = 12): 1s² 2s² 2p⁶ 3s² (hoặc [Ne] 3s²). Electron cuối cùng điền vào phân lớp s nên X là nguyên tố s; có 2 electron lớp ngoài cùng nên X là kim loại.\n   • Nguyên tố Y (Z = 17): 1s² 2s² 2p⁶ 3s² 3p⁵ (hoặc [Ne] 3s² 3p⁵). Electron cuối cùng điền vào phân lớp p nên Y là nguyên tố p; có 7 electron lớp ngoài cùng nên Y là phi kim."
  },
  {
    "id": "g10_p4_s1_c3",
    "lessonId": "chude2_bangtuanhoan",
    "lessonTitle": "Chủ đề 2: Xu hướng biến đổi tính chất & PTHH minh họa",
    "part": "part4",
    "level": "hieu_vd",
    "category": "lythuyet",
    "code": "H10.2.2",
    "points": 1,
    "content": "Cho các nguyên tố thuộc chu kì 3: ₁₁Na, ₁₂Mg, ₁₃Al.\na) Viết công thức oxide cao nhất của Na và Mg. Viết các phương trình hóa học khi cho từng oxide này tác dụng với dung dịch hydrochloric acid (HCl).\nb) So sánh bán kính nguyên tử và tính kim loại của Na, Mg, Al. Giải thích ngắn gọn xu hướng biến đổi từ trái sang phải trong chu kì 3.",
    "correctAnswer": "a) Bán kính: Na > Mg > Al; Tính kim loại: Na > Mg > Al; b) Oxide: Na₂O, MgO; PTHH: Na₂O + 2HCl -> 2NaCl + H₂O; MgO + 2HCl -> MgCl₂ + H₂O",
    "explanation": "a) (0,50 điểm) [Vận dụng] Công thức oxide cao nhất và PTHH minh họa:\n   • Oxide cao nhất tương ứng: Na₂O và MgO.\n   • PTHH: Na₂O + 2HCl ⟶ 2NaCl + H₂O\n   • PTHH: MgO + 2HCl ⟶ MgCl₂ + H₂O\nb) (0,50 điểm) [Thông hiểu] So sánh và giải thích xu hướng biến đổi:\n   • Trong chu kì 3 theo chiều tăng của điện tích hạt nhân (từ Na đến Al), số lớp electron không đổi nhưng điện tích hạt nhân tăng làm lực hút giữa hạt nhân và electron ngoài cùng tăng, do đó bán kính nguyên tử giảm dần: Na > Mg > Al.\n   • Bán kính giảm và điện tích hạt nhân tăng làm khả năng nhường electron giảm, do đó tính kim loại giảm dần: Na > Mg > Al."
  },
  {
    "id": "g10_p4_s2_c1",
    "lessonId": "chude1_dongvi",
    "lessonTitle": "Chủ đề 1: Phổ khối lượng và đồng vị của Silver",
    "part": "part4",
    "level": "hieu_vd",
    "category": "tinh_toan",
    "code": "H10.1.2",
    "points": 1,
    "content": "Phổ khối lượng của nguyên tố silver (Ag) cho thấy trong tự nhiên silver có hai đồng vị bền là ¹⁰⁷Ag (chiếm 51,84%) và ¹⁰⁹Ag (chiếm 48,16%).\na) Dựa vào phổ khối lượng, cho biết nguyên tố Silver có bao nhiêu đồng vị bền và nêu số khối cùng phần trăm số nguyên tử tương ứng của từng đồng vị.\nb) Tính nguyên tử khối trung bình của nguyên tố Silver (kết quả làm tròn đến hàng phần nghìn).",
    "correctAnswer": "a) 2 đồng vị bền: ¹⁰⁷Ag (51,84%), ¹⁰⁹Ag (48,16%); b) A_tb = 107,963 amu",
    "explanation": "a) (0,50 điểm) Dựa vào phổ khối lượng, silver có 2 đồng vị bền trong tự nhiên:\n   • Đồng vị ¹⁰⁷Ag: số khối A = 107, chiếm 51,84%.\n   • Đồng vị ¹⁰⁹Ag: số khối A = 109, chiếm 48,16%.\nb) (0,50 điểm) Nguyên tử khối trung bình của Silver:\n   A_tb = (107 × 51,84 + 109 × 48,16) / 100 = (5546,88 + 5249,44) / 100 = 107,9632 ≈ 107,963 (amu)."
  },
  {
    "id": "g10_p4_s2_c2",
    "lessonId": "chude1_voelectron",
    "lessonTitle": "Chủ đề 1: Cấu hình electron và vị trí của Na và S",
    "part": "part4",
    "level": "hieu_vd",
    "category": "lythuyet",
    "code": "H10.1.3",
    "points": 1,
    "content": "Cho hai nguyên tố A có Z = 11 và nguyên tố B có Z = 16.\na) Viết cấu hình electron nguyên tử của A và B. Xác định số electron hóa trị của mỗi nguyên tử.\nb) Xác định vị trí (ô, chu kì, nhóm) của A và B trong bảng tuần hoàn các nguyên tố hóa học.",
    "correctAnswer": "A (Z=11): [Ne] 3s¹ (1e hóa trị, ô 11, chu kì 3, nhóm IA); B (Z=16): [Ne] 3s² 3p⁴ (6e hóa trị, ô 16, chu kì 3, nhóm VIA)",
    "explanation": "a) (0,50 điểm) Cấu hình electron và số e hóa trị:\n   • A (Z = 11): 1s² 2s² 2p⁶ 3s¹ (hoặc [Ne] 3s¹). Số electron hóa trị là 1 (ở phân lớp 3s).\n   • B (Z = 16): 1s² 2s² 2p⁶ 3s² 3p⁴ (hoặc [Ne] 3s² 3p⁴). Số electron hóa trị là 6 (2 ở phân lớp 3s và 4 ở phân lớp 3p).\nb) (0,50 điểm) Vị trí trong bảng tuần hoàn:\n   • A (Sodium): Ô số 11, chu kì 3 (có 3 lớp e), nhóm IA (có 1 electron hóa trị ở phân lớp s).\n   • B (Sulfur): Ô số 16, chu kì 3 (có 3 lớp e), nhóm VIA (có 6 electron hóa trị ở phân lớp s và p)."
  },
  {
    "id": "g10_p4_s2_c3",
    "lessonId": "chude2_bangtuanhoan",
    "lessonTitle": "Chủ đề 2: Xu hướng tính kim loại nhóm IA & chu kì 3",
    "part": "part4",
    "level": "hieu_vd",
    "category": "lythuyet",
    "code": "H10.2.2",
    "points": 1,
    "content": "Cho hai nguyên tố nhóm IA là ₁₁Na, ₁₉K và nguyên tố ₁₂Mg (chu kì 3, nhóm IIA).\na) So sánh tính kim loại của Na với K; của Na với Mg. Giải thích ngắn gọn theo quy luật biến đổi tuần hoàn.\nb) Viết các phương trình hóa học khi cho từng đơn chất Na và K tác dụng với nước ở điều kiện thường.",
    "correctAnswer": "a) Tính kim loại: K > Na > Mg; b) 2Na + 2H₂O -> 2NaOH + H₂↑; 2K + 2H₂O -> 2KOH + H₂↑",
    "explanation": "a) (0,50 điểm) So sánh và giải thích tính kim loại:\n   • Trong nhóm IA từ trên xuống dưới (từ Na đến K): số lớp electron tăng, bán kính nguyên tử tăng, lực hút hạt nhân giảm nên khả năng nhường e tăng => Tính kim loại tăng: K > Na.\n   • Trong chu kì 3 từ trái sang phải (từ Na đến Mg): điện tích hạt nhân tăng, bán kính giảm nên khả năng nhường e giảm => Tính kim loại giảm: Na > Mg.\n   • Kết luận: Tính kim loại: K > Na > Mg.\nb) (0,50 điểm) Phương trình hóa học tác dụng với nước:\n   • 2Na + 2H₂O -> 2NaOH + H₂↑\n   • 2K + 2H₂O -> 2KOH + H₂↑"
  },
  {
    "id": "g10_p4_s3_c1",
    "lessonId": "chude1_dongvi",
    "lessonTitle": "Chủ đề 1: Đồng vị và nguyên tử khối trung bình của Silicon",
    "part": "part4",
    "level": "hieu_vd",
    "category": "tinh_toan",
    "code": "H10.1.2",
    "points": 1,
    "content": "Trong tự nhiên, nguyên tố Silicon có ba đồng vị bền với số khối lần lượt là 28 (chiếm 92,23%), 29 (chiếm 4,67%) và 30 (chiếm 3,10%). Biết nguyên tố silicon có số hiệu nguyên tử là 14.\na) Viết kí hiệu nguyên tử của ba đồng vị trên và cho biết số neutron có trong hạt nhân của mỗi đồng vị.\nb) Tính nguyên tử khối trung bình của Silicon (kết quả làm tròn đến hàng phần trăm).",
    "correctAnswer": "a) ²⁸₁₄Si (14n), ²⁹₁₄Si (15n), ³⁰₁₄Si (16n); b) A_tb = 28,11 amu",
    "explanation": "a) (0,50 điểm) Kí hiệu nguyên tử và số neutron:\n   • Đồng vị 1: ²⁸₁₄Si, số neutron n = 28 - 14 = 14.\n   • Đồng vị 2: ²⁹₁₄Si, số neutron n = 29 - 14 = 15.\n   • Đồng vị 3: ³⁰₁₄Si, số neutron n = 30 - 14 = 16.\nb) (0,50 điểm) Nguyên tử khối trung bình của Silicon:\n   A_tb = (28 × 92,23 + 29 × 4,67 + 30 × 3,10) / 100 = (2582,44 + 135,43 + 93,00) / 100 = 28,1087 ≈ 28,11 (amu)."
  },
  {
    "id": "g10_p4_s3_c2",
    "lessonId": "chude1_voelectron",
    "lessonTitle": "Chủ đề 1: Cấu hình electron và vị trí của P và K",
    "part": "part4",
    "level": "hieu_vd",
    "category": "lythuyet",
    "code": "H10.1.3",
    "points": 1,
    "content": "Nguyên tử của nguyên tố M có phân mức năng lượng cao nhất là 3p³ (Z = 15) và nguyên tố R có Z = 19.\na) Viết cấu hình electron nguyên tử đầy đủ của M và R. Cho biết M và R là kim loại hay phi kim?\nb) Xác định vị trí của M và R trong bảng tuần hoàn các nguyên tố hóa học (ô, chu kì, nhóm).",
    "correctAnswer": "M (Z=15): [Ne] 3s² 3p³ (phi kim, ô 15, chu kì 3, nhóm VA); R (Z=19): [Ar] 4s¹ (kim loại, ô 19, chu kì 4, nhóm IA)",
    "explanation": "a) (0,50 điểm) Cấu hình electron và phân loại:\n   • M (Z = 15): 1s² 2s² 2p⁶ 3s² 3p³. Có 5 electron ở lớp ngoài cùng => M là phi kim (Phosphorus).\n   • R (Z = 19): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹. Có 1 electron ở lớp ngoài cùng => R là kim loại kiềm (Potassium).\nb) (0,50 điểm) Vị trí trong bảng tuần hoàn:\n   • M: Ô số 15; chu kì 3 (có 3 lớp e); nhóm VA (có 5 electron hóa trị).\n   • R: Ô số 19; chu kì 4 (có 4 lớp e); nhóm IA (có 1 electron hóa trị)."
  },
  {
    "id": "g10_p4_s3_c3",
    "lessonId": "chude2_bangtuanhoan",
    "lessonTitle": "Chủ đề 2: Xu hướng tính phi kim chu kì 3 & PTHH",
    "part": "part4",
    "level": "hieu_vd",
    "category": "lythuyet",
    "code": "H10.2.2",
    "points": 1,
    "content": "Cho các nguyên tố thuộc chu kì 3: ₁₄Si, ₁₅P, ₁₆S, ₁₇Cl.\na) So sánh độ âm điện và tính phi kim giữa các nguyên tố trên. Giải thích quy luật biến đổi từ trái sang phải trong chu kì 3.\nb) Viết công thức hydroxide cao nhất của phosphorus (P) và chlorine (Cl). Viết phương trình hóa học minh họa tính acid của phosphoric acid (H₃PO₄) khi tác dụng với dung dịch sodium hydroxide (NaOH) theo tỉ lệ mol 1 : 3.",
    "correctAnswer": "a) Độ âm điện & tính phi kim: Si < P < S < Cl; b) H₃PO₄ và HClO₄; PTHH: H₃PO₄ + 3NaOH -> Na₃PO₄ + 3H₂O",
    "explanation": "a) (0,50 điểm) So sánh và giải thích xu hướng biến đổi:\n   • Trong chu kì 3 từ trái sang phải (từ Si đến Cl), điện tích hạt nhân tăng dần, bán kính nguyên tử giảm dần làm khả năng hút electron tăng => Độ âm điện tăng dần: Si < P < S < Cl.\n   • Do khả năng nhận electron tăng nên tính phi kim tăng dần: Si < P < S < Cl (Cl là phi kim mạnh nhất trong chu kì 3).\nb) (0,50 điểm) Công thức hydroxide và PTHH:\n   • Hydroxide cao nhất của P là H₃PO₄ (phosphoric acid).\n   • Hydroxide cao nhất của Cl là HClO₄ (perchloric acid).\n   • PTHH (tỉ lệ 1 : 3): H₃PO₄ + 3NaOH -> Na₃PO₄ + 3H₂O."
  },
  {
    "id": "g10_p4_s4_c1",
    "lessonId": "chude1_dongvi",
    "lessonTitle": "Chủ đề 1: Tính phần trăm đồng vị và hàm lượng khối lượng",
    "part": "part4",
    "level": "hieu_vd",
    "category": "tinh_toan",
    "code": "H10.1.2",
    "points": 1,
    "content": "Trong tự nhiên, nguyên tố Chlorine (Cl) có hai đồng vị bền là ³⁵Cl và ³⁷Cl với nguyên tử khối trung bình là 35,5.\na) Tính phần trăm số nguyên tử của mỗi đồng vị ³⁵Cl và ³⁷Cl trong tự nhiên.\nb) Tính phần trăm khối lượng của đồng vị ³⁵Cl có trong hợp chất sodium chloride (NaCl) (biết Na = 23).",
    "correctAnswer": "a) %³⁵Cl = 75%, %³⁷Cl = 25%; b) %m(³⁵Cl) = 44,87%",
    "explanation": "a) (0,50 điểm) Gọi x là % số nguyên tử của đồng vị ³⁵Cl => % của ³⁷Cl là (100 - x)%.\n   A_tb = [35x + 37(100 - x)] / 100 = 35,5 => -2x + 3700 = 3550 => 2x = 150 => x = 75%.\n   Vậy: %³⁵Cl = 75%, %³⁷Cl = 25%.\nb) (0,50 điểm) Khối lượng phân tử của NaCl = 23 + 35,5 = 58,5 (amu).\n   Khối lượng của đồng vị ³⁵Cl trong 1 mol phân tử NaCl = 35 × 75% = 26,25 (gam).\n   Phần trăm khối lượng của ³⁵Cl trong NaCl = (26,25 / 58,5) × 100% ≈ 44,87%."
  },
  {
    "id": "g10_p4_s4_c2",
    "lessonId": "chude1_voelectron",
    "lessonTitle": "Chủ đề 1: Cấu hình electron và vị trí của Cl và Ca",
    "part": "part4",
    "level": "hieu_vd",
    "category": "lythuyet",
    "code": "H10.1.3",
    "points": 1,
    "content": "Nguyên tử nguyên tố X có tổng số electron ở các phân lớp p là 11 (Z = 17) và nguyên tử nguyên tố Y có Z = 20.\na) Viết cấu hình electron của nguyên tử X và Y. Xác định số electron lớp ngoài cùng của mỗi nguyên tử.\nb) Xác định vị trí của X và Y trong bảng tuần hoàn các nguyên tố hóa học (ô, chu kì, nhóm).",
    "correctAnswer": "X (Z=17): [Ne] 3s² 3p⁵ (7e ngoài cùng, ô 17, chu kì 3, nhóm VIIA); Y (Z=20): [Ar] 4s² (2e ngoài cùng, ô 20, chu kì 4, nhóm IIA)",
    "explanation": "a) (0,50 điểm) Cấu hình electron và số e lớp ngoài cùng:\n   • X (có 11e ở phân lớp p): 1s² 2s² 2p⁶ 3s² 3p⁵ (Z = 17, Chlorine). Có 7 electron ở lớp ngoài cùng (lớp n = 3).\n   • Y (Z = 20): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² (Calcium). Có 2 electron ở lớp ngoài cùng (lớp n = 4).\nb) (0,50 điểm) Vị trí trong bảng tuần hoàn:\n   • X: Ô số 17, chu kì 3 (có 3 lớp e), nhóm VIIA (có 7 electron hóa trị).\n   • Y: Ô số 20, chu kì 4 (có 4 lớp e), nhóm IIA (có 2 electron hóa trị)."
  },
  {
    "id": "g10_p4_s4_c3",
    "lessonId": "chude2_bangtuanhoan",
    "lessonTitle": "Chủ đề 2: Tính base hydroxide chu kì 3 & Tính lưỡng tính",
    "part": "part4",
    "level": "hieu_vd",
    "category": "lythuyet",
    "code": "H10.2.2",
    "points": 1,
    "content": "Cho các nguyên tố ₁₁Na, ₁₂Mg và ₁₃Al.\na) Sắp xếp các hydroxide cao nhất của Na, Mg, Al theo thứ tự tính base giảm dần và giải thích ngắn gọn.\nb) Viết các phương trình hóa học chứng minh aluminium hydroxide Al(OH)₃ có tính chất lưỡng tính (tác dụng với dung dịch HCl và tác dụng với dung dịch NaOH).",
    "correctAnswer": "a) Tính base: NaOH > Mg(OH)₂ > Al(OH)₃; b) Al(OH)₃ + 3HCl -> AlCl₃ + 3H₂O; Al(OH)₃ + NaOH -> Na[Al(OH)₄]",
    "explanation": "a) (0,50 điểm) Sắp xếp và giải thích tính base:\n   • Trong chu kì 3 theo chiều tăng điện tích hạt nhân (từ Na đến Al), bán kính nguyên tử giảm, độ âm điện tăng làm khả năng phân li ra ion OH⁻ giảm => Tính base giảm dần: NaOH (base mạnh) > Mg(OH)₂ (base yếu) > Al(OH)₃ (hydroxit lưỡng tính).\nb) (0,50 điểm) Phương trình hóa học chứng minh tính lưỡng tính của Al(OH)₃:\n   • Tác dụng với acid: Al(OH)₃ + 3HCl -> AlCl₃ + 3H₂O\n   • Tác dụng với base mạnh: Al(OH)₃ + NaOH -> Na[Al(OH)₄] (hoặc NaAlO₂ + 2H₂O)"
  },
  {
    "id": "g10_p4_s5_c1",
    "lessonId": "chude1_dongvi",
    "lessonTitle": "Chủ đề 1: Đồng vị Copper và khối lượng trong dung dịch",
    "part": "part4",
    "level": "hieu_vd",
    "category": "tinh_toan",
    "code": "H10.1.2",
    "points": 1,
    "content": "Trong tự nhiên, copper (Cu) có hai đồng vị bền là ⁶³Cu và ⁶⁵Cu với tỉ lệ số nguyên tử tương ứng là 3 : 1.\na) Tính phần trăm số nguyên tử của mỗi đồng vị và tính nguyên tử khối trung bình của copper.\nb) Tính khối lượng của đồng vị ⁶³Cu có trong 67,25 gam dung dịch CuCl₂ 20% (biết nguyên tử khối của Cl là 35,5).",
    "correctAnswer": "a) %⁶³Cu = 75%, %⁶⁵Cu = 25%, A_tb = 63,5 amu; b) m(⁶³Cu) = 4,725 gam",
    "explanation": "a) (0,50 điểm) Phần trăm đồng vị và nguyên tử khối trung bình:\n   • Tỉ lệ 3 : 1 => %⁶³Cu = 3 / (3 + 1) × 100% = 75%; %⁶⁵Cu = 25%.\n   • A_tb = (63 × 75 + 65 × 25) / 100 = 63,5 (amu).\nb) (0,50 điểm) Khối lượng đồng vị ⁶³Cu trong dung dịch:\n   • m(CuCl₂) = 67,25 × 20% = 13,45 gam.\n   • M(CuCl₂) = 63,5 + 35,5 × 2 = 134,5 g/mol => n(CuCl₂) = 13,45 / 134,5 = 0,1 mol.\n   • n(⁶³Cu) = 0,1 × 75% = 0,075 mol.\n   • m(⁶³Cu) = 0,075 × 63 = 4,725 gam."
  },
  {
    "id": "g10_p4_s5_c2",
    "lessonId": "chude1_voelectron",
    "lessonTitle": "Chủ đề 1: Cấu hình electron và electron độc thân của Mg và S",
    "part": "part4",
    "level": "hieu_vd",
    "category": "lythuyet",
    "code": "H10.1.3",
    "points": 1,
    "content": "Cho hai nguyên tố ₁₂Mg và ₁₆S.\na) Viết cấu hình electron nguyên tử của Mg và S. Cho biết mỗi nguyên tử có bao nhiêu electron độc thân?\nb) Xác định vị trí (ô, chu kì, nhóm) của Mg và S trong bảng tuần hoàn và dự đoán ion bền tương ứng của chúng.",
    "correctAnswer": "a) Mg có 0e độc thân, S có 2e độc thân; b) Mg (ô 12, chu kì 3, nhóm IIA, tạo Mg²⁺), S (ô 16, chu kì 3, nhóm VIA, tạo S²⁻)",
    "explanation": "a) (0,50 điểm) Cấu hình electron và electron độc thân:\n   • Mg (Z = 12): 1s² 2s² 2p⁶ 3s². Phân lớp 3s đã bão hòa (có 2e ghép đôi) nên Mg có 0 electron độc thân.\n   • S (Z = 16): 1s² 2s² 2p⁶ 3s² 3p⁴. Phân lớp 3p có 3 orbital: 1 orbital chứa 2e ghép đôi và 2 orbital chứa 1e độc thân => S có 2 electron độc thân.\nb) (0,50 điểm) Vị trí trong bảng tuần hoàn và ion bền:\n   • Mg: Ô số 12, chu kì 3, nhóm IIA. Dễ nhường 2e để tạo cation bền Mg²⁺ có cấu hình của [Ne].\n   • S: Ô số 16, chu kì 3, nhóm VIA. Dễ nhận 2e để tạo anion bền S²⁻ có cấu hình của [Ar]."
  },
  {
    "id": "g10_p4_s5_c3",
    "lessonId": "chude2_bangtuanhoan",
    "lessonTitle": "Chủ đề 2: Xu hướng bán kính nguyên tử và phản ứng với nước",
    "part": "part4",
    "level": "hieu_vd",
    "category": "lythuyet",
    "code": "H10.2.2",
    "points": 1,
    "content": "Cho ba nguyên tố X (Z = 11, Na), Y (Z = 12, Mg) và Z (Z = 19, K).\na) Sắp xếp các nguyên tố trên theo chiều tăng dần bán kính nguyên tử và giải thích ngắn gọn.\nb) Viết phương trình hóa học khi cho từng đơn chất Na và Mg tác dụng với nước (ghi rõ điều kiện nhiệt độ nếu có).",
    "correctAnswer": "a) Bán kính: Mg < Na < K; b) 2Na + 2H₂O -> 2NaOH + H₂↑; Mg + 2H₂O -(t°)-> Mg(OH)₂ + H₂↑",
    "explanation": "a) (0,50 điểm) Sắp xếp và giải thích bán kính nguyên tử:\n   • Na và Mg cùng chu kì 3: theo chiều Z tăng, bán kính giảm: Mg < Na.\n   • Na và K cùng nhóm IA: theo chiều Z tăng, số lớp e tăng nên bán kính tăng: Na < K.\n   • Thứ tự tăng dần bán kính: Mg < Na < K.\nb) (0,50 điểm) Phương trình hóa học với nước:\n   • 2Na + 2H₂O -> 2NaOH + H₂↑ (phản ứng mãnh liệt ngay ở nhiệt độ phòng).\n   • Mg + 2H₂O -> Mg(OH)₂ + H₂↑ (phản ứng rất chậm ở nhiệt độ thường, nhanh hơn khi đun nóng)."
  },
  {
    "id": "g10_p2_s1_c1",
    "lessonId": "chude2_bth",
    "lessonTitle": "Chủ đề 2: Nguyên tắc sắp xếp và cấu tạo BTH",
    "part": "part2",
    "level": "biet_hieu",
    "category": "lythuyet",
    "code": "H10.1.1",
    "content": "Nguyên tắc sắp xếp các nguyên tố vào bảng tuần hoàn hiện đại:",
    "items": [
      {
        "id": "a",
        "text": "Các nguyên tố được sắp xếp theo chiều tăng dần của điện tích hạt nhân nguyên tử.",
        "isTrue": true,
        "level": "biet",
        "explanation": "Đúng. Đây là nguyên tắc sắp xếp cơ bản thứ nhất của BTH hiện đại."
      },
      {
        "id": "b",
        "text": "Các nguyên tố có cùng số lớp electron trong nguyên tử được xếp thành một hàng (gọi là chu kì).",
        "isTrue": true,
        "level": "biet",
        "explanation": "Đúng. Số thứ tự chu kì bằng số lớp electron trong nguyên tử."
      },
      {
        "id": "c",
        "text": "Các nguyên tố có cùng số electron hóa trị trong nguyên tử được xếp thành một cột (gọi là nhóm).",
        "isTrue": true,
        "level": "biet",
        "explanation": "Đúng. Các nguyên tố nhóm A có số e hóa trị bằng số thứ tự nhóm."
      },
      {
        "id": "d",
        "text": "Bảng tuần hoàn hiện nay gồm có 7 chu kì và 8 nhóm A, 8 nhóm B tương ứng với 18 cột.",
        "isTrue": true,
        "level": "hieu",
        "explanation": "Đúng. Gồm 7 chu kì (3 chu kì nhỏ, 4 chu kì lớn) và 18 cột (8 nhóm A, 8 nhóm B; trong đó nhóm VIIIB có 3 cột)."
      }
    ]
  },
  {
    "id": "g10_p2_s1_c2",
    "lessonId": "chude2_xuhuong",
    "lessonTitle": "Chủ đề 2: Xu hướng biến đổi tính chất nhóm Halogen (VIIA)",
    "part": "part2",
    "level": "biet_hieu",
    "category": "lythuyet",
    "code": "H10.1.6",
    "content": "Cho các nguyên tố thuộc nhóm halogen (nhóm VIIA): ₉F, ₁₇Cl, ₃₅Br, ₅₃I.",
    "items": [
      {
        "id": "a",
        "text": "Theo chiều từ F đến I, độ âm điện của các nguyên tử giảm dần.",
        "isTrue": true,
        "level": "biet",
        "explanation": "Đúng. Trong một nhóm A, theo chiều từ trên xuống dưới độ âm điện giảm dần (F = 3,98 lớn nhất)."
      },
      {
        "id": "b",
        "text": "Theo chiều tăng của điện tích hạt nhân, bán kính nguyên tử của các halogen tăng dần.",
        "isTrue": true,
        "level": "biet",
        "explanation": "Đúng. Số lớp electron tăng dần từ F (2 lớp) đến I (5 lớp) nên bán kính nguyên tử tăng dần."
      },
      {
        "id": "c",
        "text": "Nguyên tử của nguyên tố F có lực hút giữa hạt nhân và electron lớp ngoài cùng mạnh nhất trong nhóm.",
        "isTrue": true,
        "level": "hieu",
        "explanation": "Đúng. F có bán kính nhỏ nhất và độ âm điện lớn nhất nên lực hút giữ e ngoài cùng mạnh nhất."
      },
      {
        "id": "d",
        "text": "Tính phi kim của các nguyên tố tăng dần theo thứ tự: F < Cl < Br < I.",
        "isTrue": false,
        "level": "hieu",
        "explanation": "Sai. Trong nhóm VIIA, tính phi kim giảm dần từ trên xuống dưới: F > Cl > Br > I."
      }
    ]
  },
  {
    "id": "g10_p2_s2_c1",
    "lessonId": "chude2_bth",
    "lessonTitle": "Chủ đề 2: Cấu tạo và vị trí của nguyên tố Calcium (Ca)",
    "part": "part2",
    "level": "biet_hieu",
    "category": "lythuyet",
    "code": "H10.1.2",
    "content": "Nguyên tố calcium (Ca, Z = 20) có vai trò thiết yếu đối với xương và răng của con người. Trong bảng tuần hoàn, Ca ở ô thứ 20, chu kì 4, nhóm IIA.",
    "items": [
      {
        "id": "a",
        "text": "Số thứ tự ô của nguyên tố Ca trong bảng tuần hoàn bằng số hiệu nguyên tử (Z = 20).",
        "isTrue": true,
        "level": "biet",
        "explanation": "Đúng. Số thứ tự ô nguyên tố bằng số hiệu nguyên tử Z."
      },
      {
        "id": "b",
        "text": "Nguyên tử Ca có 4 lớp electron nên nguyên tố Ca thuộc chu kì 4.",
        "isTrue": true,
        "level": "biet",
        "explanation": "Đúng. Số thứ tự chu kì bằng số lớp electron trong nguyên tử."
      },
      {
        "id": "c",
        "text": "Phân lớp electron ngoài cùng của Ca là 4s² nên Ca là nguyên tố s.",
        "isTrue": true,
        "level": "biet",
        "explanation": "Đúng. Electron cuối cùng điền vào phân lớp s nên Ca là nguyên tố s."
      },
      {
        "id": "d",
        "text": "Cấu hình electron nguyên tử Ca là 1s² 2s² 2p⁶ 3s² 3p⁶ 4s², Ca có 2 electron hóa trị và là kim loại.",
        "isTrue": true,
        "level": "hieu",
        "explanation": "Đúng. Lớp ngoài cùng có 2 electron (4s²), thuộc nhóm IIA nên là kim loại kiềm thổ điển hình."
      }
    ]
  },
  {
    "id": "g10_p2_s2_c2",
    "lessonId": "chude2_xuhuong",
    "lessonTitle": "Chủ đề 2: Xu hướng biến đổi tính chất của các nguyên tố C, F, Si",
    "part": "part2",
    "level": "biet_hieu",
    "category": "lythuyet",
    "code": "H10.1.6",
    "content": "Cho các nguyên tố X, Y, Z có số hiệu nguyên tử lần lượt là 6 (C), 9 (F), 14 (Si).",
    "items": [
      {
        "id": "a",
        "text": "Nguyên tố F (Y) thuộc chu kì 2, nhóm VIIA có độ âm điện lớn nhất trong 3 nguyên tố.",
        "isTrue": true,
        "level": "biet",
        "explanation": "Đúng. F có độ âm điện 3,98 là lớn nhất trong bảng tuần hoàn."
      },
      {
        "id": "b",
        "text": "Trong 3 nguyên tố trên, nguyên tố có tính phi kim mạnh nhất là Y (F).",
        "isTrue": true,
        "level": "biet",
        "explanation": "Đúng. F là phi kim hoạt động mạnh nhất."
      },
      {
        "id": "c",
        "text": "Trong 3 nguyên tố trên, nguyên tố có bán kính nguyên tử lớn nhất là Z (Si).",
        "isTrue": true,
        "level": "hieu",
        "explanation": "Đúng. Si thuộc chu kì 3 (có 3 lớp electron) nên có bán kính nguyên tử lớn hơn C và F (chu kì 2)."
      },
      {
        "id": "d",
        "text": "Hydroxide tương ứng với oxide cao nhất có tính acid yếu nhất là hydroxide của Z (H₂SiO₃).",
        "isTrue": true,
        "level": "hieu",
        "explanation": "Đúng. H2SiO3 là acid rất yếu (acid silicic), trong khi H2CO3 và các acid tương ứng đều có tính acid lớn hơn."
      }
    ]
  },
  {
    "id": "g10_p2_s3_c1",
    "lessonId": "chude2_bth",
    "lessonTitle": "Chủ đề 2: Cấu tạo các chu kì và phân nhóm trong BTH",
    "part": "part2",
    "level": "biet_hieu",
    "category": "lythuyet",
    "code": "H10.1.1",
    "content": "Mỗi phát biểu sau đây về cấu tạo của bảng tuần hoàn các nguyên tố hóa học là đúng hay sai?",
    "items": [
      {
        "id": "a",
        "text": "Chu kì là dãy các nguyên tố mà nguyên tử của chúng có cùng số lớp electron.",
        "isTrue": true,
        "level": "biet",
        "explanation": "Đúng. Định nghĩa chuẩn về chu kì trong BTH."
      },
      {
        "id": "b",
        "text": "Bảng tuần hoàn gồm 3 chu kì nhỏ (1, 2, 3) và 4 chu kì lớn (4, 5, 6, 7).",
        "isTrue": true,
        "level": "biet",
        "explanation": "Đúng. Chu kì 1 (2 ngtố), 2 (8 ngtố), 3 (8 ngtố) là chu kì nhỏ."
      },
      {
        "id": "c",
        "text": "Nhóm A gồm các nguyên tố s và nguyên tố p; số electron hóa trị bằng số thứ tự của nhóm.",
        "isTrue": true,
        "level": "biet",
        "explanation": "Đúng. Các nguyên tố nhóm A có cấu hình e ngoài cùng ns¹⁻² hoặc ns²np¹⁻⁶."
      },
      {
        "id": "d",
        "text": "Nhóm B chỉ gồm các nguyên tố kim loại chuyển tiếp (nguyên tố d và f).",
        "isTrue": true,
        "level": "hieu",
        "explanation": "Đúng. Tất cả các nguyên tố nhóm B đều là kim loại chuyển tiếp."
      }
    ]
  },
  {
    "id": "g10_p2_s3_c2",
    "lessonId": "chude2_xuhuong",
    "lessonTitle": "Chủ đề 2: Xu hướng biến đổi tính chất các nguyên tố chu kì 3",
    "part": "part2",
    "level": "biet_hieu",
    "category": "lythuyet",
    "code": "H10.1.6",
    "content": "Xét các nguyên tố thuộc chu kì 3 trong bảng tuần hoàn từ ₁₁Na đến ₁₇Cl theo chiều tăng của điện tích hạt nhân:",
    "items": [
      {
        "id": "a",
        "text": "Bán kính nguyên tử của các nguyên tố giảm dần từ Na đến Cl.",
        "isTrue": true,
        "level": "biet",
        "explanation": "Đúng. Trong một chu kì, từ trái sang phải điện tích hạt nhân tăng, lực hút electron tăng làm bán kính giảm."
      },
      {
        "id": "b",
        "text": "Độ âm điện của nguyên tử các nguyên tố tăng dần từ Na đến Cl.",
        "isTrue": true,
        "level": "biet",
        "explanation": "Đúng. Trong chu kì, độ âm điện tăng dần từ kim loại kiềm đến halogen."
      },
      {
        "id": "c",
        "text": "Tính kim loại giảm dần, đồng thời tính phi kim tăng dần từ Na đến Cl.",
        "isTrue": true,
        "level": "hieu",
        "explanation": "Đúng. Khả năng nhường electron giảm dần (tính kim loại giảm), khả năng nhận electron tăng dần (tính phi kim tăng)."
      },
      {
        "id": "d",
        "text": "Tính base của các hydroxide giảm dần (NaOH > Mg(OH)₂ > Al(OH)₃), tính acid của các acid tăng dần (H₃PO₄ < H₂SO₄ < HClO₄).",
        "isTrue": true,
        "level": "hieu",
        "explanation": "Đúng. Theo chiều từ trái sang phải, tính base của hydroxide giảm dần và tính acid tăng dần."
      }
    ]
  },
  {
    "id": "g10_p2_s4_c1",
    "lessonId": "chude2_bth",
    "lessonTitle": "Chủ đề 2: Vị trí và cấu tạo nguyên tử của nguyên tố Sulfur (S)",
    "part": "part2",
    "level": "biet_hieu",
    "category": "lythuyet",
    "code": "H10.1.2",
    "content": "Nguyên tử của nguyên tố X có số hiệu nguyên tử Z = 16 (sulfur), có cấu hình electron: 1s² 2s² 2p⁶ 3s² 3p⁴.",
    "items": [
      {
        "id": "a",
        "text": "Điện tích hạt nhân của nguyên tử X là +16.",
        "isTrue": true,
        "level": "biet",
        "explanation": "Đúng. Z = 16 nên điện tích hạt nhân là +16."
      },
      {
        "id": "b",
        "text": "Nguyên tử X có 3 lớp electron nên nguyên tố X thuộc chu kì 3 trong bảng tuần hoàn.",
        "isTrue": true,
        "level": "biet",
        "explanation": "Đúng. Số thứ tự chu kì bằng số lớp electron = 3."
      },
      {
        "id": "c",
        "text": "Lớp ngoài cùng của nguyên tử X có 6 electron (3s² 3p⁴).",
        "isTrue": true,
        "level": "biet",
        "explanation": "Đúng. Lớp ngoài cùng n = 3 có 2 + 4 = 6 electron."
      },
      {
        "id": "d",
        "text": "X thuộc nhóm VIA trong bảng tuần hoàn và là một nguyên tố phi kim.",
        "isTrue": true,
        "level": "hieu",
        "explanation": "Đúng. Là nguyên tố p có 6 electron hóa trị nên thuộc nhóm VIA, có 6e lớp ngoài cùng nên là phi kim."
      }
    ]
  },
  {
    "id": "g10_p2_s4_c2",
    "lessonId": "chude2_xuhuong",
    "lessonTitle": "Chủ đề 2: Xu hướng biến đổi tính chất nhóm kim loại kiềm (IA)",
    "part": "part2",
    "level": "biet_hieu",
    "category": "lythuyet",
    "code": "H10.1.6",
    "content": "Cho các nguyên tố kim loại kiềm thuộc nhóm IA: ₃Li, ₁₁Na, ₁₉K, ₃₇Rb, ₅₅Cs.",
    "items": [
      {
        "id": "a",
        "text": "Các nguyên tử kim loại nhóm IA đều có 1 electron ở lớp ngoài cùng (cấu hình ns¹).",
        "isTrue": true,
        "level": "biet",
        "explanation": "Đúng. Đặc điểm chung của kim loại kiềm nhóm IA là có 1 electron hóa trị ns¹."
      },
      {
        "id": "b",
        "text": "Trong nhóm IA, theo chiều từ Li đến Cs, bán kính nguyên tử tăng dần.",
        "isTrue": true,
        "level": "biet",
        "explanation": "Đúng. Đi từ trên xuống dưới số lớp electron tăng dần nên bán kính nguyên tử tăng dần."
      },
      {
        "id": "c",
        "text": "Năng lượng ion hóa thứ nhất (I₁) của các nguyên tử giảm dần từ Li đến Cs.",
        "isTrue": true,
        "level": "hieu",
        "explanation": "Đúng. Bán kính tăng khiến lực hút giữa hạt nhân và electron ngoài cùng yếu đi, electron dễ bứt ra hơn."
      },
      {
        "id": "d",
        "text": "Tính kim loại tăng dần từ Li đến Cs, mức độ phản ứng với nước ngày càng mãnh liệt hơn.",
        "isTrue": true,
        "level": "hieu",
        "explanation": "Đúng. Đi từ trên xuống dưới trong nhóm IA tính kim loại tăng dần, Cs phản ứng nổ nguy hiểm với nước."
      }
    ]
  },
  {
    "id": "g10_p2_s5_c1",
    "lessonId": "chude2_bth",
    "lessonTitle": "Chủ đề 2: Phân loại nguyên tố và cấu trúc BTH",
    "part": "part2",
    "level": "biet_hieu",
    "category": "lythuyet",
    "code": "H10.1.1",
    "content": "Cho các phát biểu sau về cấu tạo bảng tuần hoàn và phân loại nguyên tố:",
    "items": [
      {
        "id": "a",
        "text": "Số thứ tự của chu kì bằng số lớp electron trong nguyên tử của các nguyên tố thuộc chu kì đó.",
        "isTrue": true,
        "level": "biet",
        "explanation": "Đúng. Đây là quy tắc xác định số thứ tự chu kì."
      },
      {
        "id": "b",
        "text": "Các nguyên tố nhóm IA (trừ hydrogen) đều là các kim loại kiềm.",
        "isTrue": true,
        "level": "biet",
        "explanation": "Đúng. Nhóm IA gồm Li, Na, K, Rb, Cs, Fr đều là kim loại kiềm."
      },
      {
        "id": "c",
        "text": "Khí hiếm nằm ở nhóm VIIIA, nguyên tử đều có 8 electron ở lớp ngoài cùng (trừ He có 2 electron).",
        "isTrue": true,
        "level": "biet",
        "explanation": "Đúng. Lớp ngoài cùng bão hòa bền vững ns²np⁶ (He là 1s²)."
      },
      {
        "id": "d",
        "text": "Nguyên tố d là nguyên tố mà nguyên tử có electron điền sau cùng vào phân lớp d.",
        "isTrue": true,
        "level": "hieu",
        "explanation": "Đúng. Phân loại nguyên tố s, p, d, f căn cứ vào phân lớp electron điền cuối cùng theo mức năng lượng."
      }
    ]
  },
  {
    "id": "g10_p2_s5_c2",
    "lessonId": "chude2_xuhuong",
    "lessonTitle": "Chủ đề 2: Xu hướng biến đổi tính chất các nguyên tố trong phân tử Paracetamol",
    "part": "part2",
    "level": "biet_hieu",
    "category": "lythuyet",
    "code": "H10.1.6",
    "content": "Phân tử thuốc giảm đau paracetamol chứa các nguyên tố: H (Z = 1), C (Z = 6), N (Z = 7), O (Z = 8).",
    "items": [
      {
        "id": "a",
        "text": "Các nguyên tố C, N, O đều thuộc cùng chu kì 2 trong bảng tuần hoàn.",
        "isTrue": true,
        "level": "biet",
        "explanation": "Đúng. C (Z=6), N (Z=7), O (Z=8) đều có 2 lớp electron nên thuộc chu kì 2."
      },
      {
        "id": "b",
        "text": "Độ âm điện tăng dần theo thứ tự: C < N < O.",
        "isTrue": true,
        "level": "biet",
        "explanation": "Đúng. Trong chu kì 2, theo chiều tăng Z thì độ âm điện tăng dần: C (2,55) < N (3,04) < O (3,44)."
      },
      {
        "id": "c",
        "text": "Trong các nguyên tố trên, nguyên tố có tính phi kim mạnh nhất là oxygen (O).",
        "isTrue": true,
        "level": "hieu",
        "explanation": "Đúng. O có độ âm điện lớn nhất trong số các nguyên tố tạo nên paracetamol nên có tính phi kim mạnh nhất."
      },
      {
        "id": "d",
        "text": "Trong 3 nguyên tố chu kì 2 (C, N, O), nguyên tố có bán kính nguyên tử lớn nhất là carbon (C).",
        "isTrue": true,
        "level": "hieu",
        "explanation": "Đúng. Trong cùng chu kì 2, đi từ trái sang phải bán kính nguyên tử giảm dần nên r(C) > r(N) > r(O)."
      }
    ]
  }
];

// Bổ sung chuẩn hóa 100% theo Ma trận & Đặc tả cho Khối 10
questionBank10.push(...[
  {
    "id": "g10_p1_xh_07",
    "lessonId": "chude2_tuanhoan_tinhchat",
    "lessonTitle": "Chủ đề 2: Xu hướng biến đổi tính chất",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "HH1.6",
    "content": "Trong một chu kì, theo chiều tăng của điện tích hạt nhân, bán kính nguyên tử của các nguyên tố nhóm A nhìn chung",
    "options": [
      "giảm dần.",
      "tăng dần.",
      "không đổi.",
      "biến đổi tuần hoàn."
    ],
    "correctAnswer": "A",
    "explanation": "Trong một chu kì, số lớp electron như nhau nhưng điện tích hạt nhân Z tăng làm lực hút hạt nhân với vỏ e tăng -> bán kính giảm dần."
  },
  {
    "id": "g10_p1_xh_08",
    "lessonId": "chude2_tuanhoan_tinhchat",
    "lessonTitle": "Chủ đề 2: Xu hướng biến đổi tính chất",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "HH1.6",
    "content": "Đại lượng nào sau đây đặc trưng cho khả năng hút electron của nguyên tử khi hình thành liên kết hóa học?",
    "options": [
      "Độ âm điện.",
      "Bán kính nguyên tử.",
      "Năng lượng ion hóa.",
      "Khối lượng nguyên tử."
    ],
    "correctAnswer": "A",
    "explanation": "Độ âm điện đặc trưng cho khả năng hút electron của nguyên tử trong phân tử."
  },
  {
    "id": "g10_p1_xh_09",
    "lessonId": "chude2_tuanhoan_tinhchat",
    "lessonTitle": "Chủ đề 2: Xu hướng biến đổi tính chất",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "HH1.6",
    "content": "Trong một nhóm A, theo chiều từ trên xuống dưới (theo chiều tăng điện tích hạt nhân), tính kim loại của các nguyên tố",
    "options": [
      "tăng dần, tính phi kim giảm dần.",
      "giảm dần, tính phi kim tăng dần.",
      "không thay đổi.",
      "tăng giảm thất thường."
    ],
    "correctAnswer": "A",
    "explanation": "Từ trên xuống dưới trong nhóm A, số lớp e tăng, bán kính tăng, khả năng nhường e tăng -> tính kim loại tăng dần, tính phi kim giảm dần."
  },
  {
    "id": "g10_p1_xh_10",
    "lessonId": "chude2_tuanhoan_tinhchat",
    "lessonTitle": "Chủ đề 2: Xu hướng biến đổi tính chất",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "HH1.6",
    "content": "Nguyên tố nào sau đây có độ âm điện lớn nhất trong toàn bộ bảng tuần hoàn?",
    "options": [
      "Fluorine (F)",
      "Oxygen (O)",
      "Chlorine (Cl)",
      "Cesium (Cs)"
    ],
    "correctAnswer": "A",
    "explanation": "Fluorine (F) có độ âm điện lớn nhất trong bảng tuần hoàn (xấp xỉ 3,98 theo Pauling)."
  },
  {
    "id": "g10_p1_tp_vd_03",
    "lessonId": "chude1_nguyentu",
    "lessonTitle": "Chủ đề 1: Thành phần của nguyên tử",
    "part": "part1",
    "level": "vd",
    "category": "tinh_toan",
    "code": "HH1.4",
    "content": "Tổng số hạt proton, neutron và electron trong nguyên tử của nguyên tố X là 40, trong đó số hạt mang điện nhiều hơn số hạt không mang điện là 12. Số khối (A) của nguyên tử X là",
    "options": [
      "27",
      "26",
      "28",
      "13"
    ],
    "correctAnswer": "A",
    "explanation": "2Z + N = 40 và 2Z - N = 12 -> 4Z = 52 -> Z = 13 (Al), N = 14 -> Số khối A = Z + N = 13 + 14 = 27."
  },
  {
    "id": "g10_p1_tp_vd_04",
    "lessonId": "chude1_nguyentu",
    "lessonTitle": "Chủ đề 1: Thành phần của nguyên tử",
    "part": "part1",
    "level": "vd",
    "category": "tinh_toan",
    "code": "HH1.4",
    "content": "Nguyên tử nguyên tố Y có tổng số hạt cơ bản là 58, trong đó số hạt mang điện gấp 1,9 lần số hạt không mang điện. Số proton trong nguyên tử Y là",
    "options": [
      "19",
      "20",
      "18",
      "39"
    ],
    "correctAnswer": "A",
    "explanation": "2Z + N = 58 và 2Z = 1,9N -> 2,9N = 58 -> N = 20 -> 2Z = 38 -> Z = 19 (Potassium - K)."
  },
  {
    "id": "g10_p1_tp_vd_05",
    "lessonId": "chude1_nguyentu",
    "lessonTitle": "Chủ đề 1: Thành phần của nguyên tử",
    "part": "part1",
    "level": "vd",
    "category": "tinh_toan",
    "code": "HH1.4",
    "content": "Một cation M²⁺ có tổng số hạt mang điện là 22. Tên của nguyên tố M là",
    "options": [
      "Magnesium (Z = 12)",
      "Calcium (Z = 20)",
      "Sodium (Z = 11)",
      "Iron (Z = 26)"
    ],
    "correctAnswer": "A",
    "explanation": "Số hạt mang điện trong ion M²⁺ là 2Z - 2 = 22 -> 2Z = 24 -> Z = 12 (Magnesium)."
  },
  {
    "id": "g10_p3_dv_04",
    "lessonId": "chude1_nguyento",
    "lessonTitle": "Chủ đề 1: Nguyên tố hóa học, đồng vị",
    "part": "part3",
    "level": "biet",
    "category": "lythuyet",
    "code": "HH1.1",
    "content": "Nguyên tử carbon-12 (¹²₆C) có bao nhiêu hạt neutron trong hạt nhân?",
    "correctAnswer": "6",
    "explanation": "N = A - Z = 12 - 6 = 6 hạt neutron."
  },
  {
    "id": "g10_p3_dv_05",
    "lessonId": "chude1_nguyento",
    "lessonTitle": "Chủ đề 1: Nguyên tố hóa học, đồng vị",
    "part": "part3",
    "level": "biet",
    "category": "lythuyet",
    "code": "HH1.1",
    "content": "Cho kí hiệu nguyên tử ²³₁₁Na. Số hạt electron ở lớp vỏ nguyên tử sodium là bao nhiêu?",
    "correctAnswer": "11",
    "explanation": "Số e = Z = 11."
  },
  {
    "id": "g10_p3_dv_vd_04",
    "lessonId": "chude1_nguyento",
    "lessonTitle": "Chủ đề 1: Nguyên tố hóa học, đồng vị",
    "part": "part3",
    "level": "vd",
    "category": "tinh_toan",
    "code": "HH1.4",
    "content": "Nguyên tố chlorine có hai đồng vị bền trong tự nhiên là ³⁵Cl (chiếm 75%) và ³⁷Cl (chiếm 25%). Nguyên tử khối trung bình của chlorine là bao nhiêu?",
    "correctAnswer": "35,5",
    "explanation": "M = (35 × 75 + 37 × 25) / 100 = 35,5."
  },
  {
    "id": "g10_p3_dv_vd_05",
    "lessonId": "chude1_nguyento",
    "lessonTitle": "Chủ đề 1: Nguyên tố hóa học, đồng vị",
    "part": "part3",
    "level": "vd",
    "category": "tinh_toan",
    "code": "HH1.4",
    "content": "Nguyên tố đồng (copper) trong tự nhiên có hai đồng vị là ⁶³Cu (chiếm 73%) và ⁶⁵Cu (chiếm 27%). Nguyên tử khối trung bình của Cu là bao nhiêu? (Làm tròn đến 2 chữ số thập phân).",
    "correctAnswer": "63,54",
    "explanation": "M = (63 × 73 + 65 × 27) / 100 = (4599 + 1755) / 100 = 63,54."
  }
]);

questionBank10.push(...[
  {
    "id": "g10_p1_tp_vd_06",
    "lessonId": "chude1_nguyentu",
    "lessonTitle": "Chủ đề 1: Thành phần của nguyên tử",
    "part": "part1",
    "level": "vd",
    "category": "tinh_toan",
    "code": "HH1.4",
    "content": "Một nguyên tử nguyên tố X có tổng số hạt cơ bản là 36, trong đó số hạt mang điện gấp đôi số hạt không mang điện. Số hiệu nguyên tử của X là",
    "options": [
      "12",
      "11",
      "13",
      "14"
    ],
    "correctAnswer": "A",
    "explanation": "2Z + N = 36 và 2Z = 2N -> N = 12, 2Z = 24 -> Z = 12 (Magnesium)."
  },
  {
    "id": "g10_p1_tp_vd_07",
    "lessonId": "chude1_nguyentu",
    "lessonTitle": "Chủ đề 1: Thành phần của nguyên tử",
    "part": "part1",
    "level": "vd",
    "category": "tinh_toan",
    "code": "HH1.4",
    "content": "Anion X²⁻ có tổng số hạt mang điện là 34. Số proton trong hạt nhân nguyên tử X là",
    "options": [
      "16",
      "18",
      "15",
      "17"
    ],
    "correctAnswer": "A",
    "explanation": "Số hạt mang điện trong ion X²⁻ là 2Z + 2 = 34 -> 2Z = 32 -> Z = 16 (Sulfur)."
  },
  {
    "id": "g10_p3_dv_nb_03",
    "lessonId": "chude1_nguyento",
    "lessonTitle": "Chủ đề 1: Nguyên tố hóa học, đồng vị",
    "part": "part3",
    "level": "biet",
    "category": "lythuyet",
    "code": "HH1.1",
    "content": "Cho kí hiệu nguyên tử ³⁹₁₉K. Số khối (A) của nguyên tử potassium là bao nhiêu?",
    "correctAnswer": "39",
    "explanation": "Số khối A = 39."
  },
  {
    "id": "g10_p3_dv_nb_04",
    "lessonId": "chude1_nguyento",
    "lessonTitle": "Chủ đề 1: Nguyên tố hóa học, đồng vị",
    "part": "part3",
    "level": "biet",
    "category": "lythuyet",
    "code": "HH1.1",
    "content": "Một nguyên tử có 8 proton, 8 neutron và 8 electron. Số khối của nguyên tử này bằng bao nhiêu?",
    "correctAnswer": "16",
    "explanation": "Số khối A = Z + N = 8 + 8 = 16."
  },
  {
    "id": "g10_p3_dv_nb_05",
    "lessonId": "chude1_nguyento",
    "lessonTitle": "Chủ đề 1: Nguyên tố hóa học, đồng vị",
    "part": "part3",
    "level": "biet",
    "category": "lythuyet",
    "code": "HH1.1",
    "content": "Đồng vị carbon-14 (¹⁴₆C) có số hạt electron ở lớp vỏ nguyên tử là bao nhiêu?",
    "correctAnswer": "6",
    "explanation": "Số electron = Z = 6."
  },
  {
    "id": "g10_p3_bth_nb_03",
    "lessonId": "chude2_bangtuanhoan",
    "lessonTitle": "Chủ đề 2: Cấu tạo bảng tuần hoàn",
    "part": "part3",
    "level": "biet",
    "category": "lythuyet",
    "code": "HH1.2",
    "content": "Nguyên tố calcium (Ca) có số hiệu nguyên tử Z = 20. Calcium nằm ở chu kì mấy trong bảng tuần hoàn?",
    "correctAnswer": "4",
    "explanation": "Cấu hình e của Ca (Z=20): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² có 4 lớp e -> chu kì 4."
  },
  {
    "id": "g10_p3_bth_nb_04",
    "lessonId": "chude2_bangtuanhoan",
    "lessonTitle": "Chủ đề 2: Cấu tạo bảng tuần hoàn",
    "part": "part3",
    "level": "biet",
    "category": "lythuyet",
    "code": "HH1.2",
    "content": "Nguyên tố phosphorus (P) có Z = 15. Phosphorus thuộc nhóm mấy A trong bảng tuần hoàn?",
    "correctAnswer": "5",
    "explanation": "Cấu hình e của P: [Ne] 3s² 3p³ có 5 e hóa trị lớp ngoài cùng -> nhóm VA (nhóm 5A)."
  },
  {
    "id": "g10_p3_bth_nb_05",
    "lessonId": "chude2_bangtuanhoan",
    "lessonTitle": "Chủ đề 2: Cấu tạo bảng tuần hoàn",
    "part": "part3",
    "level": "biet",
    "category": "lythuyet",
    "code": "HH1.2",
    "content": "Bảng tuần hoàn các nguyên tố hóa học hiện nay gồm bao nhiêu chu kì?",
    "correctAnswer": "7",
    "explanation": "Bảng tuần hoàn gồm 7 chu kì (từ chu kì 1 đến chu kì 7)."
  },
  {
    "id": "g10_p3_dv_vd_06",
    "lessonId": "chude1_nguyento",
    "lessonTitle": "Chủ đề 1: Nguyên tố hóa học, đồng vị",
    "part": "part3",
    "level": "vd",
    "category": "tinh_toan",
    "code": "HH1.4",
    "content": "Nguyên tố boron có 2 đồng vị là ¹⁰B (chiếm 20%) và ¹¹B (chiếm 80%). Nguyên tử khối trung bình của boron là bao nhiêu?",
    "correctAnswer": "10,8",
    "explanation": "M = (10 × 20 + 11 × 80) / 100 = (200 + 880) / 100 = 10,8."
  },
  {
    "id": "g10_p3_bth_vd_04",
    "lessonId": "chude2_bangtuanhoan",
    "lessonTitle": "Chủ đề 2: Cấu tạo bảng tuần hoàn",
    "part": "part3",
    "level": "vd",
    "category": "tinh_toan",
    "code": "HH1.6",
    "content": "Hai nguyên tố X và Y đứng kế tiếp nhau trong cùng một chu kì của bảng tuần hoàn có tổng số hiệu nguyên tử là 25 (Z_X < Z_Y). Số hiệu nguyên tử của nguyên tố Y là bao nhiêu?",
    "correctAnswer": "13",
    "explanation": "Z_Y - Z_X = 1 và Z_X + Z_Y = 25 -> 2Z_Y = 26 -> Z_Y = 13 (Al)."
  },
  {
    "id": "g10_p3_bth_vd_05",
    "lessonId": "chude2_bangtuanhoan",
    "lessonTitle": "Chủ đề 2: Cấu tạo bảng tuần hoàn",
    "part": "part3",
    "level": "vd",
    "category": "tinh_toan",
    "code": "HH1.6",
    "content": "Hai nguyên tố A và B thuộc cùng một nhóm A và ở hai chu kì liên tiếp có tổng số hiệu nguyên tử là 32 (Z_A < Z_B). Số hiệu nguyên tử của nguyên tố B là bao nhiêu?",
    "correctAnswer": "20",
    "explanation": "Z_B - Z_A = 8 và Z_A + Z_B = 32 -> 2Z_B = 40 -> Z_B = 20 (Calcium)."
  }
]);



// BỔ SUNG CÁC CÂU HỎI CHUẨN 100% THEO ĐẶC TẢ MA TRẬN CHO KHỐI 10 MÃ GỐC 101
questionBank10.push(...[
  {
    "id": "g10_p1_101_c11_vd",
    "lessonId": "chude1_nguyentu",
    "lessonTitle": "Chủ đề 1: Thành phần nguyên tử - Bài toán hạt",
    "part": "part1",
    "level": "vd",
    "category": "toan",
    "code": "HH1.4",
    "content": "Tổng số hạt proton, neutron và electron trong nguyên tử của một nguyên tố X là 40. Trong đó số hạt mang điện nhiều hơn số hạt không mang điện là 12. Số khối (A) của nguyên tử X là",
    "options": [
      "27.",
      "13.",
      "14.",
      "28."
    ],
    "correctAnswer": "A",
    "explanation": "Gọi số hạt là p, n, e (với p = e = Z). Ta có hệ: 2Z + N = 40 và 2Z - N = 12. Giải hệ phương trình thu được: Z = 13 (Al) và N = 14. Số khối A = Z + N = 13 + 14 = 27."
  },
  {
    "id": "g10_p1_101_c12_vd",
    "lessonId": "chude2_tuanhoan_tinhchat",
    "lessonTitle": "Chủ đề 2: Xu hướng biến đổi tính chất - PTHH minh họa",
    "part": "part1",
    "level": "vd",
    "category": "lythuyet",
    "code": "HH1.2",
    "content": "Phương trình hoá học nào sau đây chứng minh tính phi kim của chlorine mạnh hơn sulfur theo quy luật biến đổi trong bảng tuần hoàn?",
    "options": [
      "Cl₂ + H₂S ⟶ 2HCl + S↓.",
      "2HCl + FeS ⟶ FeCl₂ + H₂S↑.",
      "Cl₂ + 2NaOH ⟶ NaCl + NaClO + H₂O.",
      "S + O₂ ⟶ SO₂."
    ],
    "correctAnswer": "A",
    "explanation": "Trong phản ứng Cl₂ + H₂S ⟶ 2HCl + S↓, chlorine đóng vai trò chất oxi hóa mạnh hơn đã đẩy được phi kim sulfur ra khỏi hợp chất H₂S, chứng minh tính phi kim của Cl mạnh hơn S."
  },
  {
    "id": "g10_p3_101_c02_biet",
    "lessonId": "chude1_nguyento",
    "lessonTitle": "Chủ đề 1: Nguyên tố hóa học, đồng vị",
    "part": "part3",
    "level": "biet",
    "category": "toan",
    "code": "HH1.1",
    "content": "Nguyên tử của nguyên tố sodium (Na) có số hiệu nguyên tử Z = 11 và số khối A = 23. Số hạt neutron trong hạt nhân của nguyên tử sodium là bao nhiêu?",
    "correctAnswer": "12",
    "answer": "12",
    "explanation": "Số hạt neutron N = A - Z = 23 - 11 = 12."
  },
  {
    "id": "g10_p3_101_c04_vd",
    "lessonId": "chude2_bangtuanhoan",
    "lessonTitle": "Chủ đề 2: Cấu tạo bảng tuần hoàn - Vị trí 2 nguyên tố liên tiếp",
    "part": "part3",
    "level": "vd",
    "category": "toan",
    "code": "HH1.6",
    "content": "Hai nguyên tố A và B đứng kế tiếp nhau trong cùng một chu kì của bảng tuần hoàn (chu kì nhỏ, có Z_A < Z_B). Tổng số proton trong hai hạt nhân nguyên tử A và B là 25. Số hiệu nguyên tử của nguyên tố B là bao nhiêu?",
    "correctAnswer": "13",
    "answer": "13",
    "explanation": "Hai nguyên tố liên tiếp trong cùng một chu kì nhỏ nên Z_B - Z_A = 1. Kết hợp với tổng số proton: Z_A + Z_B = 25. Giải hệ ta được Z_A = 12 (Mg) và Z_B = 13 (Al). Số hiệu nguyên tử của nguyên tố B là 13."
  }
]);

module.exports = { questionBank10 };
