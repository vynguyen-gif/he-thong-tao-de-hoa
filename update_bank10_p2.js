const fs = require('fs');
const path = require('path');

const newP2Questions = [
  // =========================================================================
  // BỘ 1 (MÃ 101)
  // =========================================================================
  // Câu 1: Cấu tạo BTH (a, b, c: Biết; d: Hiểu)
  {
    id: "g10_p2_s1_c1",
    lessonId: "chude2_bth",
    lessonTitle: "Chủ đề 2: Nguyên tắc sắp xếp và cấu tạo BTH",
    part: "part2",
    level: "biet_hieu",
    category: "lythuyet",
    code: "H10.1.1",
    content: "Nguyên tắc sắp xếp các nguyên tố vào bảng tuần hoàn hiện đại:",
    items: [
      {
        id: "a",
        text: "Các nguyên tố được sắp xếp theo chiều tăng dần của điện tích hạt nhân nguyên tử.",
        isTrue: true,
        level: "biet",
        explanation: "Đúng. Đây là nguyên tắc sắp xếp cơ bản thứ nhất của BTH hiện đại."
      },
      {
        id: "b",
        text: "Các nguyên tố có cùng số lớp electron trong nguyên tử được xếp thành một hàng (gọi là chu kì).",
        isTrue: true,
        level: "biet",
        explanation: "Đúng. Số thứ tự chu kì bằng số lớp electron trong nguyên tử."
      },
      {
        id: "c",
        text: "Các nguyên tố có cùng số electron hóa trị trong nguyên tử được xếp thành một cột (gọi là nhóm).",
        isTrue: true,
        level: "biet",
        explanation: "Đúng. Các nguyên tố nhóm A có số e hóa trị bằng số thứ tự nhóm."
      },
      {
        id: "d",
        text: "Bảng tuần hoàn hiện nay gồm có 7 chu kì và 8 nhóm A, 8 nhóm B tương ứng với 18 cột.",
        isTrue: true,
        level: "hieu",
        explanation: "Đúng. Gồm 7 chu kì (3 chu kì nhỏ, 4 chu kì lớn) và 18 cột (8 nhóm A, 8 nhóm B; trong đó nhóm VIIIB có 3 cột)."
      }
    ]
  },
  // Câu 2: Xu hướng biến đổi tính chất (a, b: Biết; c, d: Hiểu)
  {
    id: "g10_p2_s1_c2",
    lessonId: "chude2_xuhuong",
    lessonTitle: "Chủ đề 2: Xu hướng biến đổi tính chất nhóm Halogen (VIIA)",
    part: "part2",
    level: "biet_hieu",
    category: "lythuyet",
    code: "H10.1.6",
    content: "Cho các nguyên tố thuộc nhóm halogen (nhóm VIIA): ₉F, ₁₇Cl, ₃₅Br, ₅₃I.",
    items: [
      {
        id: "a",
        text: "Theo chiều từ F đến I, độ âm điện của các nguyên tử giảm dần.",
        isTrue: true,
        level: "biet",
        explanation: "Đúng. Trong một nhóm A, theo chiều từ trên xuống dưới độ âm điện giảm dần (F = 3,98 lớn nhất)."
      },
      {
        id: "b",
        text: "Theo chiều tăng của điện tích hạt nhân, bán kính nguyên tử của các halogen tăng dần.",
        isTrue: true,
        level: "biet",
        explanation: "Đúng. Số lớp electron tăng dần từ F (2 lớp) đến I (5 lớp) nên bán kính nguyên tử tăng dần."
      },
      {
        id: "c",
        text: "Nguyên tử của nguyên tố F có lực hút giữa hạt nhân và electron lớp ngoài cùng mạnh nhất trong nhóm.",
        isTrue: true,
        level: "hieu",
        explanation: "Đúng. F có bán kính nhỏ nhất và độ âm điện lớn nhất nên lực hút giữ e ngoài cùng mạnh nhất."
      },
      {
        id: "d",
        text: "Tính phi kim của các nguyên tố tăng dần theo thứ tự: F < Cl < Br < I.",
        isTrue: false,
        level: "hieu",
        explanation: "Sai. Trong nhóm VIIA, tính phi kim giảm dần từ trên xuống dưới: F > Cl > Br > I."
      }
    ]
  },

  // =========================================================================
  // BỘ 2 (MÃ 201)
  // =========================================================================
  // Câu 1: Cấu tạo BTH (a, b, c: Biết; d: Hiểu)
  {
    id: "g10_p2_s2_c1",
    lessonId: "chude2_bth",
    lessonTitle: "Chủ đề 2: Cấu tạo và vị trí của nguyên tố Calcium (Ca)",
    part: "part2",
    level: "biet_hieu",
    category: "lythuyet",
    code: "H10.1.2",
    content: "Nguyên tố calcium (Ca, Z = 20) có vai trò thiết yếu đối với xương và răng của con người. Trong bảng tuần hoàn, Ca ở ô thứ 20, chu kì 4, nhóm IIA.",
    items: [
      {
        id: "a",
        text: "Số thứ tự ô của nguyên tố Ca trong bảng tuần hoàn bằng số hiệu nguyên tử (Z = 20).",
        isTrue: true,
        level: "biet",
        explanation: "Đúng. Số thứ tự ô nguyên tố bằng số hiệu nguyên tử Z."
      },
      {
        id: "b",
        text: "Nguyên tử Ca có 4 lớp electron nên nguyên tố Ca thuộc chu kì 4.",
        isTrue: true,
        level: "biet",
        explanation: "Đúng. Số thứ tự chu kì bằng số lớp electron trong nguyên tử."
      },
      {
        id: "c",
        text: "Phân lớp electron ngoài cùng của Ca là 4s² nên Ca là nguyên tố s.",
        isTrue: true,
        level: "biet",
        explanation: "Đúng. Electron cuối cùng điền vào phân lớp s nên Ca là nguyên tố s."
      },
      {
        id: "d",
        text: "Cấu hình electron nguyên tử Ca là 1s² 2s² 2p⁶ 3s² 3p⁶ 4s², Ca có 2 electron hóa trị và là kim loại.",
        isTrue: true,
        level: "hieu",
        explanation: "Đúng. Lớp ngoài cùng có 2 electron (4s²), thuộc nhóm IIA nên là kim loại kiềm thổ điển hình."
      }
    ]
  },
  // Câu 2: Xu hướng biến đổi tính chất (a, b: Biết; c, d: Hiểu)
  {
    id: "g10_p2_s2_c2",
    lessonId: "chude2_xuhuong",
    lessonTitle: "Chủ đề 2: Xu hướng biến đổi tính chất của các nguyên tố C, F, Si",
    part: "part2",
    level: "biet_hieu",
    category: "lythuyet",
    code: "H10.1.6",
    content: "Cho các nguyên tố X, Y, Z có số hiệu nguyên tử lần lượt là 6 (C), 9 (F), 14 (Si).",
    items: [
      {
        id: "a",
        text: "Nguyên tố F (Y) thuộc chu kì 2, nhóm VIIA có độ âm điện lớn nhất trong 3 nguyên tố.",
        isTrue: true,
        level: "biet",
        explanation: "Đúng. F có độ âm điện 3,98 là lớn nhất trong bảng tuần hoàn."
      },
      {
        id: "b",
        text: "Trong 3 nguyên tố trên, nguyên tố có tính phi kim mạnh nhất là Y (F).",
        isTrue: true,
        level: "biet",
        explanation: "Đúng. F là phi kim hoạt động mạnh nhất."
      },
      {
        id: "c",
        text: "Trong 3 nguyên tố trên, nguyên tố có bán kính nguyên tử lớn nhất là Z (Si).",
        isTrue: true,
        level: "hieu",
        explanation: "Đúng. Si thuộc chu kì 3 (có 3 lớp electron) nên có bán kính nguyên tử lớn hơn C và F (chu kì 2)."
      },
      {
        id: "d",
        text: "Hydroxide tương ứng với oxide cao nhất có tính acid yếu nhất là hydroxide của Z (H₂SiO₃).",
        isTrue: true,
        level: "hieu",
        explanation: "Đúng. H2SiO3 là acid rất yếu (acid silicic), trong khi H2CO3 và các acid tương ứng đều có tính acid lớn hơn."
      }
    ]
  },

  // =========================================================================
  // BỘ 3 (MÃ 301)
  // =========================================================================
  // Câu 1: Cấu tạo BTH (a, b, c: Biết; d: Hiểu)
  {
    id: "g10_p2_s3_c1",
    lessonId: "chude2_bth",
    lessonTitle: "Chủ đề 2: Cấu tạo các chu kì và phân nhóm trong BTH",
    part: "part2",
    level: "biet_hieu",
    category: "lythuyet",
    code: "H10.1.1",
    content: "Mỗi phát biểu sau đây về cấu tạo của bảng tuần hoàn các nguyên tố hóa học là đúng hay sai?",
    items: [
      {
        id: "a",
        text: "Chu kì là dãy các nguyên tố mà nguyên tử của chúng có cùng số lớp electron.",
        isTrue: true,
        level: "biet",
        explanation: "Đúng. Định nghĩa chuẩn về chu kì trong BTH."
      },
      {
        id: "b",
        text: "Bảng tuần hoàn gồm 3 chu kì nhỏ (1, 2, 3) và 4 chu kì lớn (4, 5, 6, 7).",
        isTrue: true,
        level: "biet",
        explanation: "Đúng. Chu kì 1 (2 ngtố), 2 (8 ngtố), 3 (8 ngtố) là chu kì nhỏ."
      },
      {
        id: "c",
        text: "Nhóm A gồm các nguyên tố s và nguyên tố p; số electron hóa trị bằng số thứ tự của nhóm.",
        isTrue: true,
        level: "biet",
        explanation: "Đúng. Các nguyên tố nhóm A có cấu hình e ngoài cùng ns¹⁻² hoặc ns²np¹⁻⁶."
      },
      {
        id: "d",
        text: "Nhóm B chỉ gồm các nguyên tố kim loại chuyển tiếp (nguyên tố d và f).",
        isTrue: true,
        level: "hieu",
        explanation: "Đúng. Tất cả các nguyên tố nhóm B đều là kim loại chuyển tiếp."
      }
    ]
  },
  // Câu 2: Xu hướng biến đổi tính chất (a, b: Biết; c, d: Hiểu)
  {
    id: "g10_p2_s3_c2",
    lessonId: "chude2_xuhuong",
    lessonTitle: "Chủ đề 2: Xu hướng biến đổi tính chất các nguyên tố chu kì 3",
    part: "part2",
    level: "biet_hieu",
    category: "lythuyet",
    code: "H10.1.6",
    content: "Xét các nguyên tố thuộc chu kì 3 trong bảng tuần hoàn từ ₁₁Na đến ₁₇Cl theo chiều tăng của điện tích hạt nhân:",
    items: [
      {
        id: "a",
        text: "Bán kính nguyên tử của các nguyên tố giảm dần từ Na đến Cl.",
        isTrue: true,
        level: "biet",
        explanation: "Đúng. Trong một chu kì, từ trái sang phải điện tích hạt nhân tăng, lực hút electron tăng làm bán kính giảm."
      },
      {
        id: "b",
        text: "Độ âm điện của nguyên tử các nguyên tố tăng dần từ Na đến Cl.",
        isTrue: true,
        level: "biet",
        explanation: "Đúng. Trong chu kì, độ âm điện tăng dần từ kim loại kiềm đến halogen."
      },
      {
        id: "c",
        text: "Tính kim loại giảm dần, đồng thời tính phi kim tăng dần từ Na đến Cl.",
        isTrue: true,
        level: "hieu",
        explanation: "Đúng. Khả năng nhường electron giảm dần (tính kim loại giảm), khả năng nhận electron tăng dần (tính phi kim tăng)."
      },
      {
        id: "d",
        text: "Tính base của các hydroxide giảm dần (NaOH > Mg(OH)₂ > Al(OH)₃), tính acid của các acid tăng dần (H₃PO₄ < H₂SO₄ < HClO₄).",
        isTrue: true,
        level: "hieu",
        explanation: "Đúng. Theo chiều từ trái sang phải, tính base của hydroxide giảm dần và tính acid tăng dần."
      }
    ]
  },

  // =========================================================================
  // BỘ 4 (MÃ 401)
  // =========================================================================
  // Câu 1: Cấu tạo BTH (a, b, c: Biết; d: Hiểu)
  {
    id: "g10_p2_s4_c1",
    lessonId: "chude2_bth",
    lessonTitle: "Chủ đề 2: Vị trí và cấu tạo nguyên tử của nguyên tố Sulfur (S)",
    part: "part2",
    level: "biet_hieu",
    category: "lythuyet",
    code: "H10.1.2",
    content: "Nguyên tử của nguyên tố X có số hiệu nguyên tử Z = 16 (sulfur), có cấu hình electron: 1s² 2s² 2p⁶ 3s² 3p⁴.",
    items: [
      {
        id: "a",
        text: "Điện tích hạt nhân của nguyên tử X là +16.",
        isTrue: true,
        level: "biet",
        explanation: "Đúng. Z = 16 nên điện tích hạt nhân là +16."
      },
      {
        id: "b",
        text: "Nguyên tử X có 3 lớp electron nên nguyên tố X thuộc chu kì 3 trong bảng tuần hoàn.",
        isTrue: true,
        level: "biet",
        explanation: "Đúng. Số thứ tự chu kì bằng số lớp electron = 3."
      },
      {
        id: "c",
        text: "Lớp ngoài cùng của nguyên tử X có 6 electron (3s² 3p⁴).",
        isTrue: true,
        level: "biet",
        explanation: "Đúng. Lớp ngoài cùng n = 3 có 2 + 4 = 6 electron."
      },
      {
        id: "d",
        text: "X thuộc nhóm VIA trong bảng tuần hoàn và là một nguyên tố phi kim.",
        isTrue: true,
        level: "hieu",
        explanation: "Đúng. Là nguyên tố p có 6 electron hóa trị nên thuộc nhóm VIA, có 6e lớp ngoài cùng nên là phi kim."
      }
    ]
  },
  // Câu 2: Xu hướng biến đổi tính chất (a, b: Biết; c, d: Hiểu)
  {
    id: "g10_p2_s4_c2",
    lessonId: "chude2_xuhuong",
    lessonTitle: "Chủ đề 2: Xu hướng biến đổi tính chất nhóm kim loại kiềm (IA)",
    part: "part2",
    level: "biet_hieu",
    category: "lythuyet",
    code: "H10.1.6",
    content: "Cho các nguyên tố kim loại kiềm thuộc nhóm IA: ₃Li, ₁₁Na, ₁₉K, ₃₇Rb, ₅₅Cs.",
    items: [
      {
        id: "a",
        text: "Các nguyên tử kim loại nhóm IA đều có 1 electron ở lớp ngoài cùng (cấu hình ns¹).",
        isTrue: true,
        level: "biet",
        explanation: "Đúng. Đặc điểm chung của kim loại kiềm nhóm IA là có 1 electron hóa trị ns¹."
      },
      {
        id: "b",
        text: "Trong nhóm IA, theo chiều từ Li đến Cs, bán kính nguyên tử tăng dần.",
        isTrue: true,
        level: "biet",
        explanation: "Đúng. Đi từ trên xuống dưới số lớp electron tăng dần nên bán kính nguyên tử tăng dần."
      },
      {
        id: "c",
        text: "Năng lượng ion hóa thứ nhất (I₁) của các nguyên tử giảm dần từ Li đến Cs.",
        isTrue: true,
        level: "hieu",
        explanation: "Đúng. Bán kính tăng khiến lực hút giữa hạt nhân và electron ngoài cùng yếu đi, electron dễ bứt ra hơn."
      },
      {
        id: "d",
        text: "Tính kim loại tăng dần từ Li đến Cs, mức độ phản ứng với nước ngày càng mãnh liệt hơn.",
        isTrue: true,
        level: "hieu",
        explanation: "Đúng. Đi từ trên xuống dưới trong nhóm IA tính kim loại tăng dần, Cs phản ứng nổ nguy hiểm với nước."
      }
    ]
  },

  // =========================================================================
  // BỘ 5 (MÃ 501)
  // =========================================================================
  // Câu 1: Cấu tạo BTH (a, b, c: Biết; d: Hiểu)
  {
    id: "g10_p2_s5_c1",
    lessonId: "chude2_bth",
    lessonTitle: "Chủ đề 2: Phân loại nguyên tố và cấu trúc BTH",
    part: "part2",
    level: "biet_hieu",
    category: "lythuyet",
    code: "H10.1.1",
    content: "Cho các phát biểu sau về cấu tạo bảng tuần hoàn và phân loại nguyên tố:",
    items: [
      {
        id: "a",
        text: "Số thứ tự của chu kì bằng số lớp electron trong nguyên tử của các nguyên tố thuộc chu kì đó.",
        isTrue: true,
        level: "biet",
        explanation: "Đúng. Đây là quy tắc xác định số thứ tự chu kì."
      },
      {
        id: "b",
        text: "Các nguyên tố nhóm IA (trừ hydrogen) đều là các kim loại kiềm.",
        isTrue: true,
        level: "biet",
        explanation: "Đúng. Nhóm IA gồm Li, Na, K, Rb, Cs, Fr đều là kim loại kiềm."
      },
      {
        id: "c",
        text: "Khí hiếm nằm ở nhóm VIIIA, nguyên tử đều có 8 electron ở lớp ngoài cùng (trừ He có 2 electron).",
        isTrue: true,
        level: "biet",
        explanation: "Đúng. Lớp ngoài cùng bão hòa bền vững ns²np⁶ (He là 1s²)."
      },
      {
        id: "d",
        text: "Nguyên tố d là nguyên tố mà nguyên tử có electron điền sau cùng vào phân lớp d.",
        isTrue: true,
        level: "hieu",
        explanation: "Đúng. Phân loại nguyên tố s, p, d, f căn cứ vào phân lớp electron điền cuối cùng theo mức năng lượng."
      }
    ]
  },
  // Câu 2: Xu hướng biến đổi tính chất (a, b: Biết; c, d: Hiểu)
  {
    id: "g10_p2_s5_c2",
    lessonId: "chude2_xuhuong",
    lessonTitle: "Chủ đề 2: Xu hướng biến đổi tính chất các nguyên tố trong phân tử Paracetamol",
    part: "part2",
    level: "biet_hieu",
    category: "lythuyet",
    code: "H10.1.6",
    content: "Phân tử thuốc giảm đau paracetamol chứa các nguyên tố: H (Z = 1), C (Z = 6), N (Z = 7), O (Z = 8).",
    items: [
      {
        id: "a",
        text: "Các nguyên tố C, N, O đều thuộc cùng chu kì 2 trong bảng tuần hoàn.",
        isTrue: true,
        level: "biet",
        explanation: "Đúng. C (Z=6), N (Z=7), O (Z=8) đều có 2 lớp electron nên thuộc chu kì 2."
      },
      {
        id: "b",
        text: "Độ âm điện tăng dần theo thứ tự: C < N < O.",
        isTrue: true,
        level: "biet",
        explanation: "Đúng. Trong chu kì 2, theo chiều tăng Z thì độ âm điện tăng dần: C (2,55) < N (3,04) < O (3,44)."
      },
      {
        id: "c",
        text: "Trong các nguyên tố trên, nguyên tố có tính phi kim mạnh nhất là oxygen (O).",
        isTrue: true,
        level: "hieu",
        explanation: "Đúng. O có độ âm điện lớn nhất trong số các nguyên tố tạo nên paracetamol nên có tính phi kim mạnh nhất."
      },
      {
        id: "d",
        text: "Trong 3 nguyên tố chu kì 2 (C, N, O), nguyên tố có bán kính nguyên tử lớn nhất là carbon (C).",
        isTrue: true,
        level: "hieu",
        explanation: "Đúng. Trong cùng chu kì 2, đi từ trái sang phải bán kính nguyên tử giảm dần nên r(C) > r(N) > r(O)."
      }
    ]
  }
];

// Update questionBank10.js
const bankPath = path.join(__dirname, 'data', 'questionBank10.js');
const { questionBank10 } = require('./data/questionBank10');
const nonP2Questions = questionBank10.filter(q => q.part !== 'part2');
const updatedBank = [...nonP2Questions, ...newP2Questions];

const fileOutput = `// data/questionBank10.js
// Ngân hàng câu hỏi Đề cương ôn tập & Kiểm tra Giữa Kì 1 - Hóa Học 10 (2026 - 2027)
// Gồm 60 câu Phần I, 10 câu Phần II (5 câu Cấu tạo BTH + 5 câu Xu hướng BTH), 20 câu Phần III, 15 câu Phần IV (3 câu/bộ đề x 5 bộ = 15 câu)
// Khớp 100% Ma trận & Đặc tả kiểm tra giữa kì 1 Hóa học 10

const questionBank10 = ${JSON.stringify(updatedBank, null, 2)};

module.exports = {
  questionBank10
};
`;

fs.writeFileSync(bankPath, fileOutput, 'utf8');
console.log('Successfully updated questionBank10.js with 10 clean Part 2 questions strictly matching Cấu tạo BTH & Xu hướng BTH!');
