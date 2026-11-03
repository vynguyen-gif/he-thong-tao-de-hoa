// scripts/enrich_bank12.js
const fs = require('fs');
const path = require('path');

const additionalQuestions12 = [
  // --- P1 C3, C4 (Xà phòng và chất giặt rửa, biet) - thêm 5 câu cho đủ 10 câu ---
  {
    id: "b2_tn_nb_6",
    lessonId: "b2_xaphong",
    lessonTitle: "Bài 2: Xà phòng và chất giặt rửa",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Xà phòng là hỗn hợp muối sodium hoặc potassium của các",
    options: [
      "fatty acid có từ 12 đến 24 nguyên tử carbon.",
      "carboxylic acid đơn chức mạch ngắn.",
      "dicarboxylic acid mạch hở.",
      "acid vô cơ mạnh như HCl, H2SO4."
    ],
    correctAnswer: "A",
    explanation: "Xà phòng thường là hỗn hợp muối sodium hoặc potassium của các acid béo (fatty acid) có mạch carbon dài từ 12-24C."
  },
  {
    id: "b2_tn_nb_7",
    lessonId: "b2_xaphong",
    lessonTitle: "Bài 2: Xà phòng và chất giặt rửa",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Chất nào sau đây là thành phần chính của xà phòng bánh thông thường?",
    options: [
      "Sodium stearate (C17H35COONa)",
      "Sodium chloride (NaCl)",
      "Sodium sulfate (Na2SO4)",
      "Sodium carbonate (Na2CO3)"
    ],
    correctAnswer: "A",
    explanation: "C17H35COONa (sodium stearate) là một muối của acid béo, thành phần chính của xà phòng."
  },
  {
    id: "b2_tn_nb_8",
    lessonId: "b2_xaphong",
    lessonTitle: "Bài 2: Xà phòng và chất giặt rửa",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Cấu tạo phân tử chất giặt rửa tổng hợp gồm có hai phần chính là",
    options: [
      "đầu ưa nước (phân cực) và đuôi kị nước (ưa dầu mỡ).",
      "hai đầu đều ưa nước.",
      "hai đầu đều kị nước.",
      "một gốc hydrocarbon ngắn và một nguyên tử kim loại."
    ],
    correctAnswer: "A",
    explanation: "Phân tử chất giặt rửa có cấu trúc lưỡng ái: đầu phân cực ưa nước và đuôi hydrocarbon dài kị nước."
  },
  {
    id: "b2_tn_nb_9",
    lessonId: "b2_xaphong",
    lessonTitle: "Bài 2: Xà phòng và chất giặt rửa",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Để tách xà phòng ra khỏi hỗn hợp sau phản ứng xà phòng hóa chất béo, người ta thêm vào chất nào sau đây?",
    options: [
      "Dung dịch NaCl bão hòa",
      "Dung dịch HCl loãng",
      "Nước cất",
      "Dung dịch H2SO4 đặc"
    ],
    correctAnswer: "A",
    explanation: "Thêm dung dịch NaCl bão hòa làm tăng tỉ trọng dung dịch và giảm độ tan của muối acid béo, giúp xà phòng nổi lên trên."
  },
  {
    id: "b2_tn_nb_10",
    lessonId: "b2_xaphong",
    lessonTitle: "Bài 2: Xà phòng và chất giặt rửa",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Ưu điểm của chất giặt rửa tổng hợp so với xà phòng là",
    options: [
      "dùng được trong cả nước cứng chứa ion Ca2+ và Mg2+ mà không tạo kết tủa.",
      "dễ bị vi sinh vật phân hủy hơn xà phòng.",
      "được sản xuất hoàn toàn từ mỡ động vật.",
      "không làm hại da tay và rất rẻ tiền."
    ],
    correctAnswer: "A",
    explanation: "Muối sulfonate hoặc sulfate của chất giặt rửa tổng hợp với ion Ca2+, Mg2+ tan tốt trong nước nên dùng được trong nước cứng."
  },

  // --- P1 C12 (Amino acid và peptide, hieu) - 5 câu mức Thông hiểu ---
  {
    id: "b7_tn_th_1",
    lessonId: "b7_aminoacid_peptide",
    lessonTitle: "Bài 7: Amino acid - Peptide",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.4",
    content: "Dung dịch chất nào sau đây làm quỳ tím chuyển sang màu đỏ?",
    options: [
      "Glutamic acid (HOOC-CH2-CH2-CH(NH2)-COOH)",
      "Glycine (H2N-CH2-COOH)",
      "Lysine (H2N-[CH2]4-CH(NH2)-COOH)",
      "Alanine (CH3-CH(NH2)-COOH)"
    ],
    correctAnswer: "A",
    explanation: "Glutamic acid có 2 nhóm -COOH và 1 nhóm -NH2, môi trường acid làm quỳ tím chuyển màu đỏ."
  },
  {
    id: "b7_tn_th_2",
    lessonId: "b7_aminoacid_peptide",
    lessonTitle: "Bài 7: Amino acid - Peptide",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.4",
    content: "Dung dịch chất nào sau đây làm quỳ tím chuyển sang màu xanh?",
    options: [
      "Lysine",
      "Glycine",
      "Alanine",
      "Valine"
    ],
    correctAnswer: "A",
    explanation: "Lysine có 2 nhóm -NH2 và 1 nhóm -COOH nên dung dịch có tính base, làm quỳ tím chuyển sang màu xanh."
  },
  {
    id: "b7_tn_th_3",
    lessonId: "b7_aminoacid_peptide",
    lessonTitle: "Bài 7: Amino acid - Peptide",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.4",
    content: "Amino acid thể hiện tính lưỡng tính vì trong phân tử",
    options: [
      "chứa đồng thời nhóm carboxyl (-COOH) có tính acid và nhóm amino (-NH2) có tính base.",
      "chứa liên kết peptide -CO-NH-.",
      "có nguyên tử nitrogen và oxygen.",
      "dễ tan trong nước và có nhiệt độ nóng chảy cao."
    ],
    correctAnswer: "A",
    explanation: "Nhóm -NH2 có tính base tác dụng với acid; nhóm -COOH có tính acid tác dụng với base -> tính lưỡng tính."
  },
  {
    id: "b7_tn_th_4",
    lessonId: "b7_aminoacid_peptide",
    lessonTitle: "Bài 7: Amino acid - Peptide",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.4",
    content: "Cho dung dịch Cu(OH)2 trong môi trường kiềm vào ống nghiệm chứa dung dịch chất nào sau đây sẽ xuất hiện màu tím đặc trưng (phản ứng màu biuret)?",
    options: [
      "Gly-Ala-Val (tripeptide)",
      "Gly-Ala (dipeptide)",
      "Glucose",
      "Ethanol"
    ],
    correctAnswer: "A",
    explanation: "Từ tripeptide trở lên (có từ 2 liên kết peptide trở lên) mới có phản ứng màu biuret tạo dung dịch màu tím đặc trưng."
  },
  {
    id: "b7_tn_th_5",
    lessonId: "b7_aminoacid_peptide",
    lessonTitle: "Bài 7: Amino acid - Peptide",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.4",
    content: "Thủy phân hoàn toàn 1 mol peptide Gly-Ala-Val trong dung dịch HCl dư thu được bao nhiêu mol muối?",
    options: [
      "3 mol hỗn hợp muối ammonium clorua của các amino acid.",
      "1 mol muối.",
      "2 mol muối.",
      "4 mol muối."
    ],
    correctAnswer: "A",
    explanation: "Tripeptide gồm 3 gốc alpha-amino acid, mỗi gốc có 1 nhóm -NH2 phản ứng với 1 mol HCl tạo 1 mol muối -> tổng 3 mol muối."
  },

  // --- P2 C1 (Ester - lipid, part2) - thêm câu số 5 cho Bộ 5 ---
  {
    id: "b1_ds_s5_c1",
    lessonId: "b1_ester_lipid",
    lessonTitle: "Bài 1: Ester - Lipid",
    part: "part2",
    level: "biet_hieu_vd",
    category: "lythuyet",
    code: "HH1.1_1.3_1.6",
    content: "Chất béo (triglyceride) là nguồn cung cấp năng lượng và dưỡng chất thiết yếu cho cơ thể:",
    items: [
      {
        id: "a",
        text: "Chất béo là triester của glycerol với các acid béo có mạch carbon dài, không phân nhánh.",
        isTrue: true,
        explanation: "Đúng theo định nghĩa chất béo (triglyceride)."
      },
      {
        id: "b",
        text: "Mỡ lợn chứa chủ yếu chất béo no nên ở trạng thái rắn ở nhiệt độ thường.",
        isTrue: true,
        explanation: "Đúng, chất béo động vật giàu gốc acid béo no nên ở thể rắn."
      },
      {
        id: "c",
        text: "Dầu mỡ thực vật bị ôi thiu khi để lâu ngoài không khí là do liên kết đôi C=C bị oxi hóa chậm bởi oxygen tạo thành hydroperoxide rồi phân hủy thành aldehyde, ketone có mùi khó chịu.",
        isTrue: true,
        explanation: "Đúng, đây là cơ chế quá trình ôi thiu dầu mỡ."
      },
      {
        id: "d",
        text: "Xà phòng hóa hoàn toàn 17,68 gam triolein bằng dung dịch NaOH dư, đun nóng thì khối lượng muối sodium oleate thu được là 18,24 gam.",
        isTrue: true,
        explanation: "Đúng. n(triolein) = 17,68 / 884 = 0,02 mol -> n(muối C17H33COONa) = 0,06 mol -> m = 0,06 × 304 = 18,24 gam."
      }
    ]
  },

  // --- P3 C2 (Xà phòng và chất giặt rửa, biet) - thêm 3 câu cho đủ 5 câu ---
  {
    id: "b2_tl_nb_3",
    lessonId: "b2_xaphong",
    lessonTitle: "Bài 2: Xà phòng và chất giặt rửa",
    part: "part3",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Trong một loại xà phòng tắm, thành phần gồm có: (1) Sodium stearate; (2) Sodium palmitate; (3) Glycerol; (4) Hương liệu tạo mùi thơm; (5) Cát mịn. Có bao nhiêu chất/thành phần thực sự có trong công thức xà phòng tiêu chuẩn?",
    correctAnswer: "4",
    explanation: "(1), (2), (3), (4) đều là thành phần chuẩn của xà phòng tắm. (5) Cát mịn không có trong xà phòng tắm thông thường. Vậy có 4 thành phần."
  },
  {
    id: "b2_tl_nb_4",
    lessonId: "b2_xaphong",
    lessonTitle: "Bài 2: Xà phòng và chất giặt rửa",
    part: "part3",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Cho dãy các chất sau: (1) C17H35COONa; (2) C15H31COOK; (3) CH3COONa; (4) C12H25OSO3Na; (5) C17H33COONa. Có bao nhiêu chất là muối của acid béo dùng làm xà phòng?",
    correctAnswer: "3",
    explanation: "Các muối dùng làm xà phòng là (1), (2), (5). (3) là muối mạch ngắn, (4) là chất giặt rửa tổng hợp. Vậy có 3 chất."
  },
  {
    id: "b2_tl_nb_5",
    lessonId: "b2_xaphong",
    lessonTitle: "Bài 2: Xà phòng và chất giặt rửa",
    part: "part3",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Phân tử sodium dodecylbenzenesulfonate (chất giặt rửa tổng hợp) chứa gốc hydrocarbon thơm và nhóm -SO3Na. Số lượng nguyên tử carbon trong phân tử chất này là bao nhiêu?",
    correctAnswer: "18",
    explanation: "Công thức là C12H25-C6H4-SO3Na, tổng số carbon = 12 + 6 = 18 carbon."
  },

  // --- P3 C3 (Tổng hợp carbohydrate, vd) - thêm 3 câu ---
  {
    id: "b5_tl_vd_3",
    lessonId: "b5_tinhbot_cel",
    lessonTitle: "Bài 5: Tinh bột và Cellulose",
    part: "part3",
    level: "vd",
    category: "tinh_toan",
    code: "HH1.3",
    content: "Lên men m gam glucose thành ethanol với hiệu suất 80%, toàn bộ khí CO2 sinh ra hấp thụ hết vào dung dịch Ca(OH)2 dư thu được 50 gam kết tủa CaCO3. Giá trị của m là bao nhiêu gam? (Làm tròn đến hàng đơn vị).",
    correctAnswer: "56",
    explanation: "n(CaCO3) = 0,5 mol -> n(CO2) = 0,5 mol. C6H12O6 -> 2CO2. n(glucose lí thuyết) = 0,25 mol. Với H=80%: m(glucose) = (0,25 / 0,8) × 180 = 56,25 gam ≈ 56 gam."
  },
  {
    id: "b5_tl_vd_4",
    lessonId: "b5_tinhbot_cel",
    lessonTitle: "Bài 5: Tinh bột và Cellulose",
    part: "part3",
    level: "vd",
    category: "tinh_toan",
    code: "HH1.3",
    content: "Thực hiện phản ứng tráng bạc hoàn toàn 18 gam glucose bằng lượng dư thuốc thử Tollens. Khối lượng kim loại Ag thu được tối đa là bao nhiêu gam?",
    correctAnswer: "21,6",
    explanation: "n(glucose) = 18 / 180 = 0,1 mol -> n(Ag) = 2 × 0,1 = 0,2 mol -> m(Ag) = 0,2 × 108 = 21,6 gam."
  },
  {
    id: "b5_tl_vd_5",
    lessonId: "b5_tinhbot_cel",
    lessonTitle: "Bài 5: Tinh bột và Cellulose",
    part: "part3",
    level: "vd",
    category: "lythuyet",
    code: "HH1.3",
    content: "Cho dãy các carbohydrate: glucose, fructose, saccharose, maltose, tinh bột, cellulose. Có bao nhiêu chất trong dãy cho được phản ứng tráng bạc?",
    correctAnswer: "3",
    explanation: "Các chất tráng bạc gồm: glucose, fructose và maltose. Tinh bột, cellulose và saccharose không tráng bạc. Vậy có 3 chất."
  },

  // --- P3 C4 (Amino acid và peptide, biet) - thêm 3 câu ---
  {
    id: "b7_tl_nb_1",
    lessonId: "b7_aminoacid_peptide",
    lessonTitle: "Bài 7: Amino acid - Peptide",
    part: "part3",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Khối lượng phân tử của amino acid đơn giản nhất là glycine (H2N-CH2-COOH) là bao nhiêu amu?",
    correctAnswer: "75",
    explanation: "Công thức phân tử C2H5NO2 có M = 2×12 + 5 + 14 + 32 = 75 amu."
  },
  {
    id: "b7_tl_nb_2",
    lessonId: "b7_aminoacid_peptide",
    lessonTitle: "Bài 7: Amino acid - Peptide",
    part: "part3",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Phân tử alanine (CH3-CH(NH2)-COOH) chứa bao nhiêu nguyên tử hydrogen?",
    correctAnswer: "7",
    explanation: "CTPT C3H7NO2 có 7 nguyên tử hydrogen."
  },
  {
    id: "b7_tl_nb_3",
    lessonId: "b7_aminoacid_peptide",
    lessonTitle: "Bài 7: Amino acid - Peptide",
    part: "part3",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Một tetrapeptide mạch hở tạo từ các alpha-amino acid có bao nhiêu liên kết peptide (-CO-NH-)?",
    correctAnswer: "3",
    explanation: "Tetrapeptide gồm 4 gốc amino acid liên kết với nhau bằng (4 - 1) = 3 liên kết peptide."
  },

  // --- P4 C1 (Xà phòng và chất giặt rửa, hieu, 1.00đ) - chuẩn hóa 5 đề gốc ---
  {
    id: "b2_tuluan_s1",
    lessonId: "b2_xaphong",
    lessonTitle: "Bài 2: Xà phòng và chất giặt rửa",
    part: "part4",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.4",
    points: 1.0,
    content: "Xà phòng và chất giặt rửa tổng hợp đóng vai trò quan trọng trong việc tẩy rửa vết bẩn đời sống.\na) Nêu cấu tạo phân tử chung của xà phòng và chất giặt rửa tổng hợp.\nb) Giải thích cơ chế giặt rửa vết dầu mỡ bám trên quần áo khi giặt với xà phòng.",
    correctAnswer: "Cấu tạo lưỡng ái và cơ chế cuốn trôi dầu mỡ",
    explanation: "a) (0,50 điểm) Cấu tạo phân tử gồm 2 phần:\n  • Đầu phân cực ưa nước (như -COO-Na+, -SO3-Na+).\n  • Đuôi hydrocarbon dài kị nước (ưa dầu mỡ).\nb) (0,50 điểm) Cơ chế giặt rửa:\n  • Đuôi kị nước bám sâu vào vết dầu mỡ.\n  • Đầu ưa nước hướng ra ngoài môi trường nước, phân tán vết dầu mỡ thành các hạt nhỏ lơ lửng và bị cuốn trôi theo nước xả."
  },
  {
    id: "b2_tuluan_s2",
    lessonId: "b2_xaphong",
    lessonTitle: "Bài 2: Xà phòng và chất giặt rửa",
    part: "part4",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.4",
    points: 1.0,
    content: "Trong sản xuất xà phòng bằng phương pháp nấu xà phòng thủ công hoặc công nghiệp:\na) Viết phương trình hóa học tổng quát của phản ứng xà phòng hóa tristearin (C17H35COO)3C3H5 với dung dịch NaOH.\nb) Tại sao sau khi đun sôi hỗn hợp phản ứng một thời gian, người ta lại cho thêm dung dịch NaCl bão hòa vào nồi nấu?",
    correctAnswer: "Phương trình xà phòng hóa và tác dụng của NaCl",
    explanation: "a) (0,50 điểm) Phương trình hóa học:\n  (C17H35COO)3C3H5 + 3NaOH --(t°)--> 3C17H35COONa + C3H5(OH)3\nb) (0,50 điểm) Tác dụng của dung dịch NaCl bão hòa:\n  • Làm tăng tỉ trọng của dung dịch.\n  • Làm giảm độ tan của muối sodium của acid béo (hiệu ứng ion chung Na+), giúp xà phòng kết tinh nổi lên trên bề mặt dễ thu gom."
  },
  {
    id: "b2_tuluan_s3",
    lessonId: "b2_xaphong",
    lessonTitle: "Bài 2: Xà phòng và chất giặt rửa",
    part: "part4",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.4",
    points: 1.0,
    content: "Nước sinh hoạt ở một số vùng là nước cứng (chứa nhiều ion Ca2+ và Mg2+).\na) Nêu hiện tượng xảy ra khi dùng xà phòng thông thường giặt quần áo trong nước cứng.\nb) Giải thích tại sao người ta khuyến cáo nên dùng bột giặt tổng hợp thay cho xà phòng khi giặt trong nước cứng.",
    correctAnswer: "Hiện tượng tạo kết tủa với xà phòng và ưu thế của chất giặt rửa tổng hợp",
    explanation: "a) (0,50 điểm) Hiện tượng:\n  • Xà phòng tạo kết tủa màu trắng xám (RCOO)2Ca và (RCOO)2Mg bám vào sợi vải làm ố vàng, mục vải và giảm khả năng tạo bọt, tốn xà phòng.\nb) (0,50 điểm) Giải thích:\n  • Chất giặt rửa tổng hợp chứa gốc sulfonate hoặc sulfate (-SO3Na, -OSO3Na) tạo muối với Ca2+, Mg2+ tan tốt trong nước, do đó vẫn tạo bọt và tẩy rửa tốt trong nước cứng."
  },
  {
    id: "b2_tuluan_s4",
    lessonId: "b2_xaphong",
    lessonTitle: "Bài 2: Xà phòng và chất giặt rửa",
    part: "part4",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.4",
    points: 1.0,
    content: "Phân biệt xà phòng tự nhiên và chất giặt rửa tổng hợp:\na) Nêu nguồn gốc nguyên liệu chính dùng để sản xuất xà phòng và chất giặt rửa tổng hợp.\nb) Về mặt bảo vệ môi trường, loại nào thân thiện hơn? Giải thích.",
    correctAnswer: "So sánh nguồn gốc và độ thân thiện môi trường",
    explanation: "a) (0,50 điểm) Nguồn gốc nguyên liệu:\n  • Xà phòng: sản xuất từ dầu thực vật hoặc mỡ động vật (tài nguyên tái tạo).\n  • Chất giặt rửa tổng hợp: sản xuất chủ yếu từ dầu mỏ (tài nguyên hóa thạch).\nb) (0,50 điểm) Bảo vệ môi trường:\n  • Xà phòng thân thiện hơn vì dễ bị vi sinh vật trong tự nhiên phân hủy hoàn toàn.\n  • Chất giặt rửa tổng hợp (đặc biệt loại mạch carbon phân nhánh) khó phân hủy sinh học, tích tụ gây ô nhiễm nguồn nước."
  },
  {
    id: "b2_tuluan_s5",
    lessonId: "b2_xaphong",
    lessonTitle: "Bài 2: Xà phòng và chất giặt rửa",
    part: "part4",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.4",
    points: 1.0,
    content: "Quy trình làm xà phòng handmade từ dầu dừa và kiềm NaOH:\na) Nêu tên phản ứng hóa học xảy ra và viết phương trình hóa học với thành phần chính của dầu dừa là trilaurin (C11H23COO)3C3H5.\nb) Tại sao sản phẩm xà phòng handmade thường mềm mịn và có tính dưỡng ẩm da tốt hơn xà phòng bánh công nghiệp?",
    correctAnswer: "Phản ứng xà phòng hóa và vai trò của glycerol tồn dư",
    explanation: "a) (0,50 điểm) Phản ứng xà phòng hóa:\n  (C11H23COO)3C3H5 + 3NaOH --(t°)--> 3C11H23COONa + C3H5(OH)3\nb) (0,50 điểm) Giải thích:\n  • Xà phòng handmade giữ lại toàn bộ lượng glycerol sinh ra (một chất giữ ẩm tự nhiên tuyệt vời cho da).\n  • Trong công nghiệp, glycerol thường bị chiết tách riêng để bán cho ngành dược/mỹ phẩm."
  },

  // --- P4 C2 (Tinh bột và cellulose, vd, 2.00đ) - chuẩn hóa 5 đề gốc ---
  {
    id: "b5_tuluan_s1",
    lessonId: "b5_tinhbot_cel",
    lessonTitle: "Bài 5: Tinh bột và Cellulose",
    part: "part4",
    level: "vd",
    category: "tinh_toan",
    code: "HH1.4",
    points: 2.0,
    content: "Sơ đồ sản xuất ethanol sinh học từ ngô chứa tinh bột như sau:\nTinh bột -(thủy phân)-> Glucose -(lên men)-> Ethanol\nMột nhà máy sử dụng 10 tấn hạt ngô chứa 65% tinh bột về khối lượng để sản xuất xăng sinh học E5. Biết hiệu suất của toàn bộ quá trình là 75%.\na) Tính khối lượng glucose thu được theo lý thuyết nếu hiệu suất đạt 100%.\nb) Tính thể tích ethanol nguyên chất (D = 0,8 g/ml) thực tế thu được từ lượng ngô trên.",
    correctAnswer: "Khối lượng glucose và thể tích ethanol",
    explanation: "a) (1,00 điểm) Khối lượng tinh bột nguyên chất: m = 10 × 65% = 6,5 tấn = 6500 kg.\n   • (C6H10O5)n + nH2O -> nC6H12O6\n   • Khối lượng glucose lí thuyết = 6500 × (180 / 162) = 7222,2 kg ≈ 7,22 tấn.\nb) (1,00 điểm) Tính thể tích ethanol thực tế:\n   • Sơ đồ: C6H10O5 (162) ---> 2 C2H5OH (92)\n   • m(ethanol lí thuyết) = 6500 × (92 / 162) = 3691,36 kg.\n   • m(ethanol thực tế) = 3691,36 × 75% = 2768,52 kg.\n   • V(ethanol thực tế) = m / D = 2768,52 / 0,8 = 3460,65 lít."
  },
  {
    id: "b5_tuluan_s2",
    lessonId: "b5_tinhbot_cel",
    lessonTitle: "Bài 5: Tinh bột và Cellulose",
    part: "part4",
    level: "vd",
    category: "tinh_toan",
    code: "HH1.4",
    points: 2.0,
    content: "Tinh bột là nguồn cung cấp carbohydrate quan trọng nhất trong khẩu phần ăn của người dân Việt Nam.\nBiết rằng mỗi gam carbohydrate (tinh bột) khi bị oxi hóa hoàn toàn trong cơ thể cung cấp 4,0 kcal năng lượng. Một gia đình 4 người cần tổng cộng 8000 kcal mỗi ngày, trong đó 60% năng lượng được cung cấp từ tinh bột (gạo chứa 80% tinh bột).\na) Tính khối lượng tinh bột cơ thể gia đình cần hấp thụ trong 30 ngày.\nb) Tính khối lượng gạo thực tế gia đình đó cần dùng trong 30 ngày.",
    correctAnswer: "Năng lượng tinh bột và khối lượng gạo tiêu thụ",
    explanation: "a) (1,00 điểm) Tính lượng tinh bột cần trong 30 ngày:\n   • Tổng năng lượng từ tinh bột trong 30 ngày = 8000 kcal/ngày × 30 ngày × 60% = 144 000 kcal.\n   • Khối lượng tinh bột cần hấp thụ = 144 000 / 4,0 = 36 000 g = 36 kg.\nb) (1,00 điểm) Khối lượng gạo thực tế cần dùng:\n   • Vì gạo chỉ chứa 80% tinh bột nên khối lượng gạo cần dùng:\n     m(gạo) = 36 / 80% = 45 kg."
  },
  {
    id: "b5_tuluan_s3",
    lessonId: "b5_tinhbot_cel",
    lessonTitle: "Bài 5: Tinh bột và Cellulose",
    part: "part4",
    level: "vd",
    category: "tinh_toan",
    code: "HH1.4",
    points: 2.0,
    content: "Cellulose trinitrate được dùng làm thuốc súng không khói, được điều chế từ cellulose và nitric acid đặc có xúc tác H2SO4 đặc đun nóng:\n[C6H7O2(OH)3]n + 3nHNO3 --(H2SO4 đ, t°)--> [C6H7O2(ONO2)3]n + 3nH2O\nĐể sản xuất 2,97 tấn cellulose trinitrate với hiệu suất phản ứng đạt 80%:\na) Tính khối lượng cellulose nguyên chất cần dùng.\nb) Tính thể tích dung dịch HNO3 68% (khối lượng riêng D = 1,4 g/ml) cần dùng.",
    correctAnswer: "Sản xuất thuốc súng không khói từ cellulose",
    explanation: "a) (1,00 điểm) Tính khối lượng cellulose:\n   • n(cellulose trinitrate) = 2,97 tấn / 297 = 0,01 Mmol (10 000 mol).\n   • Theo lí thuyết: m(cellulose) = 0,01 × 162 = 1,62 tấn.\n   • Với H = 80%: m(cellulose thực tế) = 1,62 / 80% = 2,025 tấn.\nb) (1,00 điểm) Tính thể tích HNO3 68%:\n   • n(HNO3 lí thuyết) = 3 × 0,01 = 0,03 Mmol.\n   • m(HNO3 nguyên chất thực tế) = (0,03 × 63) / 80% = 2,3625 tấn = 2362,5 kg.\n   • m(dung dịch HNO3 68%) = 2362,5 / 68% = 3474,26 kg.\n   • V(dung dịch HNO3) = 3474,26 / 1,4 = 2481,6 lít."
  },
  {
    id: "b5_tuluan_s4",
    lessonId: "b5_tinhbot_cel",
    lessonTitle: "Bài 5: Tinh bột và Cellulose",
    part: "part4",
    level: "vd",
    category: "tinh_toan",
    code: "HH1.4",
    points: 2.0,
    content: "Người ta tiến hành thủy phân 324 gam tinh bột trong môi trường acid đun nóng. Sau phản ứng, trung hòa acid rồi cho toàn bộ dung dịch tác dụng với lượng dư AgNO3 trong NH3 đun nhẹ, thu được 345,6 gam Ag kết tủa.\na) Viết các phương trình hóa học xảy ra trong quá trình trên.\nb) Tính hiệu suất của phản ứng thủy phân tinh bột.",
    correctAnswer: "Hiệu suất thủy phân tinh bột qua phản ứng tráng bạc",
    explanation: "a) (1,00 điểm) Phương trình hóa học:\n   • Thủy phân tinh bột: (C6H10O5)n + nH2O --(H+, t°)--> nC6H12O6 (glucose)\n   • Tráng bạc: C6H12O6 + 2[Ag(NH3)2]OH --(t°)--> C6H11O7NH4 + 2Ag + 3NH3 + H2O\nb) (1,00 điểm) Tính hiệu suất phản ứng:\n   • n(Ag) = 345,6 / 108 = 3,2 mol -> n(glucose tạo thành) = 3,2 / 2 = 1,6 mol.\n   • Theo PTHH: n(mắt xích C6H10O5 đã thủy phân) = 1,6 mol.\n   • Khối lượng tinh bột đã bị thủy phân = 1,6 × 162 = 259,2 gam.\n   • Hiệu suất phản ứng thủy phân: H = (259,2 / 324) × 100% = 80%."
  },
  {
    id: "b5_tuluan_s5",
    lessonId: "b5_tinhbot_cel",
    lessonTitle: "Bài 5: Tinh bột và Cellulose",
    part: "part4",
    level: "vd",
    category: "tinh_toan",
    code: "HH1.4",
    points: 2.0,
    content: "Từ 10 tấn mùn cưa chứa 50% cellulose, người ta đem thủy phân bằng acid rồi lên men thu được cồn công nghiệp (ethanol). Biết hiệu suất của giai đoạn thủy phân là 80% và hiệu suất của giai đoạn lên men là 75%.\na) Tính khối lượng glucose thu được sau giai đoạn thủy phân.\nb) Tính khối lượng ethanol thực tế thu được từ 10 tấn mùn cưa trên.",
    correctAnswer: "Sản xuất ethanol từ mùn cưa chứa cellulose",
    explanation: "a) (1,00 điểm) Khối lượng cellulose nguyên chất = 10 × 50% = 5 tấn = 5000 kg.\n   • (C6H10O5)n + nH2O -> nC6H12O6\n   • m(glucose lí thuyết) = 5000 × (180 / 162) = 5555,56 kg.\n   • m(glucose thực tế với H=80%) = 5555,56 × 80% = 4444,44 kg ≈ 4,44 tấn.\nb) (1,00 điểm) Tính khối lượng ethanol:\n   • C6H12O6 --(lên men)--> 2C2H5OH + 2CO2\n   • m(ethanol lí thuyết từ 4444,44 kg glucose) = 4444,44 × (92 / 180) = 2271,6 kg.\n   • m(ethanol thực tế với H=75%) = 2271,6 × 75% = 1703,7 kg ≈ 1,70 tấn."
  }
];

// Nạp vào questionBank.js
const qbPath = path.join(__dirname, '../data/questionBank.js');
let qbContent = fs.readFileSync(qbPath, 'utf8');

// Chèn trước "const { formatQuestionObject }"
const insertMarker = 'const { formatQuestionObject }';
if (qbContent.includes(insertMarker)) {
  const insertCode = `// Bổ sung chuẩn hóa 100% theo Ma trận & Đặc tả cho Khối 12\nquestionBank.push(...` + JSON.stringify(additionalQuestions12, null, 2) + `);\n\n`;
  qbContent = qbContent.replace(insertMarker, insertCode + insertMarker);
  fs.writeFileSync(qbPath, qbContent, 'utf8');
  console.log('Successfully enriched Grade 12 Question Bank with', additionalQuestions12.length, 'questions!');
} else {
  console.error('Cannot find insertMarker in questionBank.js');
}
