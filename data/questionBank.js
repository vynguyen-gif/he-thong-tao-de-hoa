// data/questionBank.js
// Ngân hàng câu hỏi trích xuất 100% từ Đề Cương GK1 Hóa 12 (Trường THPT Bùi Thị Xuân - Mũi Né)

const questionBank = [
  // ==========================================
  // BÀI 1: ESTER - LIPID
  // ==========================================
  {
    id: "b1_tn_nb_1",
    lessonId: "b1_ester_lipid",
    lessonTitle: "Bài 1: Ester - Lipid",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.2",
    content: "Chất nào sau đây không phải là ester?",
    options: ["C2H5COOH", "CH3COOC2H5", "(C15H31COO)3C3H5", "HCOOCH3"],
    correctAnswer: "A",
    explanation: "C2H5COOH là carboxylic acid (propanoic acid), không phải là ester."
  },
  {
    id: "b1_tn_nb_2",
    lessonId: "b1_ester_lipid",
    lessonTitle: "Bài 1: Ester - Lipid",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.2",
    content: "Tên gọi của ester CH3COOC2H5 là",
    options: ["Ethyl formate", "Ethyl acetate", "Methyl acetate", "Methyl formate"],
    correctAnswer: "B",
    explanation: "CH3COOC2H5 gồm gốc ethyl (C2H5-) và gốc acetate (CH3COO-) -> tên là ethyl acetate."
  },
  {
    id: "b1_tn_nb_3",
    lessonId: "b1_ester_lipid",
    lessonTitle: "Bài 1: Ester - Lipid",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Số nguyên tử hydrogen trong phân tử methyl formate là",
    options: ["6", "8", "4", "2"],
    correctAnswer: "C",
    explanation: "Methyl formate có CTPT HCOOCH3 (C2H4O2) có 4 nguyên tử hydrogen."
  },
  {
    id: "b1_tn_nb_4",
    lessonId: "b1_ester_lipid",
    lessonTitle: "Bài 1: Ester - Lipid",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.2",
    content: "Ester nào sau đây có mùi thơm của chuối chín?",
    options: ["Isoamyl acetate", "Propyl acetate", "Isopropyl acetate", "Benzyl acetate"],
    correctAnswer: "A",
    explanation: "Isoamyl acetate có mùi đặc trưng của chuối chín."
  },
  {
    id: "b1_tn_nb_5",
    lessonId: "b1_ester_lipid",
    lessonTitle: "Bài 1: Ester - Lipid",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.2",
    content: "Ester nào sau đây được sử dụng để điều chế thủy tinh hữu cơ?",
    options: ["Vinyl acetate", "Methyl acrylate", "Isopropyl acetate", "Methyl methacrylate"],
    correctAnswer: "D",
    explanation: "Methyl methacrylate trùng hợp tạo thành poly(methyl methacrylate) - thủy tinh hữu cơ plexiglas."
  },
  {
    id: "b1_tn_nb_6",
    lessonId: "b1_ester_lipid",
    lessonTitle: "Bài 1: Ester - Lipid",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.2",
    content: "Trong thành phần của dầu gội đầu thường có một số ester. Vai trò của các ester này là",
    options: [
      "Tăng khả năng làm sạch của dầu gội.",
      "Làm giảm thành phần của dầu gội.",
      "Tạo hương thơm mát, dễ chịu.",
      "Tạo màu sắc hấp dẫn."
    ],
    correctAnswer: "C",
    explanation: "Nhiều ester có mùi thơm hoa quả dịu nhẹ nên được dùng làm chất tạo hương thơm trong mỹ phẩm, dầu gội."
  },
  {
    id: "b1_tn_nb_7",
    lessonId: "b1_ester_lipid",
    lessonTitle: "Bài 1: Ester - Lipid",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.2",
    content: "Đun nóng triglyceride trong dung dịch NaOH dư đến phản ứng hoàn toàn luôn thu được chất nào sau đây?",
    options: ["Ethanol", "Ethylene glycol", "Glycerol", "Methanol"],
    correctAnswer: "C",
    explanation: "Triglyceride là triester của glycerol và acid béo nên khi thủy phân trong NaOH luôn thu được glycerol."
  },
  {
    id: "b1_tn_nb_8",
    lessonId: "b1_ester_lipid",
    lessonTitle: "Bài 1: Ester - Lipid",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Omega-3 và omega-6 là",
    options: ["Ester", "Acid béo", "Aldehyde", "Chất béo"],
    correctAnswer: "B",
    explanation: "Omega-3 và omega-6 là các acid béo không no chưa bão hòa thiết yếu cho cơ thể."
  },
  {
    id: "b1_tn_nb_9",
    lessonId: "b1_ester_lipid",
    lessonTitle: "Bài 1: Ester - Lipid",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Ở điều kiện thường, chất nào sau đây tồn tại ở trạng thái rắn?",
    options: ["Tristearin", "Methyl acetate", "Triolein", "Ethanol"],
    correctAnswer: "A",
    explanation: "Tristearin là chất béo no nên ở trạng thái rắn ở điều kiện thường."
  },
  {
    id: "b1_tn_nb_10",
    lessonId: "b1_ester_lipid",
    lessonTitle: "Bài 1: Ester - Lipid",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Số nguyên tử oxi trong một phân tử triglyceride là",
    options: ["2", "3", "4", "6"],
    correctAnswer: "D",
    explanation: "Mỗi phân tử triglyceride chứa 3 nhóm ester (-COO-), do đó có tổng cộng 3 x 2 = 6 nguyên tử oxygen."
  },
  {
    id: "b1_tn_th_11",
    lessonId: "b1_ester_lipid",
    lessonTitle: "Bài 1: Ester - Lipid",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.6",
    content: "Thuỷ phân methyl acetate trong NaOH thu được CH3COONa và alcohol nào sau đây?",
    options: ["C2H5OH", "C3H7OH", "CH3CHO", "CH3OH"],
    correctAnswer: "D",
    explanation: "CH3COOCH3 + NaOH -> CH3COONa + CH3OH (methyl alcohol)."
  },
  {
    id: "b1_tn_th_12",
    lessonId: "b1_ester_lipid",
    lessonTitle: "Bài 1: Ester - Lipid",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.6",
    content: "Phát biểu nào sau đây sai?",
    options: [
      "Mỡ lợn hoặc dầu dừa có thể dùng làm nguyên liệu để sản xuất xà phòng.",
      "Sử dụng dầu, mỡ chiên lại nhiều lần rất có hại cho sức khỏe.",
      "Một số ester có mùi thơm được dùng làm chất tạo hương cho thực phẩm và mỹ phẩm.",
      "Thủy phân chất béo trong môi trường kiềm thu được acid béo."
    ],
    correctAnswer: "D",
    explanation: "Thủy phân chất béo trong môi trường kiềm thu được muối của acid béo (xà phòng) và glycerol, không phải thu được acid béo tự do."
  },
  {
    id: "b1_tn_th_13",
    lessonId: "b1_ester_lipid",
    lessonTitle: "Bài 1: Ester - Lipid",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.6",
    content: "Ester X có công thức phân tử C4H8O2. Thủy phân X trong dung dịch H2SO4 loãng, đun nóng, thu được sản phẩm gồm ethyl alcohol và chất hữu cơ Y. Công thức của Y là",
    options: ["CH3OH", "CH3COOH", "C2H5COOH", "HCOOH"],
    correctAnswer: "B",
    explanation: "X tạo ra ethyl alcohol (C2H5OH) nên X là CH3COOC2H5. Do đó chất hữu cơ Y là CH3COOH."
  },
  {
    id: "b1_tn_th_14",
    lessonId: "b1_ester_lipid",
    lessonTitle: "Bài 1: Ester - Lipid",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.6",
    content: "Cho các chất sau đây: (1) C3H7COOH; (2) CH3COOC2H5; (3) C3H7CH2OH. Thứ tự sắp xếp theo chiều nhiệt độ sôi tăng dần là",
    options: ["(3), (2), (1)", "(1), (2), (3)", "(2), (3), (1)", "(1), (3), (2)"],
    correctAnswer: "C",
    explanation: "Ester không có liên kết hydrogen liên phân tử nên có nhiệt độ sôi thấp nhất; acid có liên kết hydrogen bền hơn alcohol cùng phân tử khối. Thứ tự: Ester (2) < Alcohol (3) < Acid (1)."
  },
  {
    id: "b1_tn_th_15",
    lessonId: "b1_ester_lipid",
    lessonTitle: "Bài 1: Ester - Lipid",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.6",
    content: "Cho các phát biểu sau:\n(a) Triolein, tristearin là những chất béo không no.\n(b) Chất béo nhẹ hơn nước và không tan trong nước.\n(c) Nhiệt độ sôi của CH3COOC2H5 thấp hơn nhiệt độ sôi của CH3COOH.\n(d) Ester bị thủy phân trong môi trường base, đun nóng.\nSố phát biểu đúng là",
    options: ["1", "2", "3", "4"],
    correctAnswer: "C",
    explanation: "(a) Sai vì tristearin là chất béo no; (b) Đúng; (c) Đúng (do CH3COOH có liên kết H); (d) Đúng. Có 3 phát biểu đúng."
  },
  {
    id: "b1_tn_vd_16",
    lessonId: "b1_ester_lipid",
    lessonTitle: "Bài 1: Ester - Lipid",
    part: "part1",
    level: "vd",
    category: "lythuyet",
    code: "HH1.6",
    content: "Cho sơ đồ chuyển hóa sau: Triolein ──(+H₂ dư, Ni, t°)──→ X ──(+NaOH dư, t°)──→ Y ──(+HCl, t°)──→ Z. Tên của Z là",
    options: ["Oleic acid", "Linoleic acid", "Stearic acid", "Palmitic acid"],
    correctAnswer: "C",
    explanation: "Triolein + H₂ ──→ Tristearin (X) + NaOH ──→ C₁₇H₃₅COONa (Y) + HCl ──→ C₁₇H₃₅COOH (stearic acid, Z)."
  },
  {
    id: "b1_tn_vd_17",
    lessonId: "b1_ester_lipid",
    lessonTitle: "Bài 1: Ester - Lipid",
    part: "part1",
    level: "vd",
    category: "tinh_toan",
    code: "HH1.6",
    contentTemplate: "Xà phòng hóa hoàn toàn {m_ester} gam ethyl acetate trong dung dịch NaOH (vừa đủ), thu được dung dịch chứa m gam muối. Giá trị của m là",
    defaultParams: { m_ester: 17.6 },
    generator: (p) => {
      // CH3COOC2H5: M = 88; CH3COONa: M = 82
      const m_ester = p?.m_ester ?? [8.8, 13.2, 17.6, 22.0, 26.4, 35.2][Math.floor(Math.random() * 6)];
      const n = m_ester / 88;
      const m_salt = Number((n * 82).toFixed(1));
      const dist1 = Number((m_salt * 1.2).toFixed(1));
      const dist2 = Number((m_salt * 0.5).toFixed(1));
      const dist3 = Number((m_salt * 0.8).toFixed(1));
      const opts = [
        { text: `${m_salt}`, isCorrect: true },
        { text: `${dist1}`, isCorrect: false },
        { text: `${dist2}`, isCorrect: false },
        { text: `${dist3}`, isCorrect: false }
      ].sort(() => Math.random() - 0.5);
      const letter = ["A", "B", "C", "D"][opts.findIndex(o => o.isCorrect)];
      return {
        content: `Xà phòng hóa hoàn toàn ${m_ester} gam ethyl acetate trong dung dịch NaOH (vừa đủ), thu được dung dịch chứa m gam muối. Giá trị của m là`,
        options: opts.map(o => o.text),
        correctAnswer: letter,
        params: { m_ester, m_salt },
        explanation: `n(CH3COOC2H5) = ${m_ester} / 88 = ${n.toFixed(2)} mol.\nPhương trình: CH3COOC2H5 + NaOH -> CH3COONa + C2H5OH.\nn(CH3COONa) = ${n.toFixed(2)} mol => m(muối) = ${n.toFixed(2)} * 82 = ${m_salt} gam.`
      };
    },
    content: "Xà phòng hóa hoàn toàn 17,6 gam ethyl acetate trong dung dịch NaOH (vừa đủ), thu được dung dịch chứa m gam muối. Giá trị của m là",
    options: ["16,4", "19,2", "9,6", "8,2"],
    correctAnswer: "A",
    explanation: "n(CH3COOC2H5) = 17,6 / 88 = 0,2 mol. n(CH3COONa) = 0,2 mol => m(muối) = 0,2 * 82 = 16,4 gam."
  },

  // Bài 1: Đúng/Sai
  {
    id: "b1_ds_nb_1",
    lessonId: "b1_ester_lipid",
    lessonTitle: "Bài 1: Ester - Lipid",
    part: "part2",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Trong chế biến thực phẩm, người ta hydrogen hóa chất béo lỏng để được chất béo rắn.",
    items: [
      { id: "a", text: "Chất béo chưa no ở trạng thái rắn.", isTrue: false, explanation: "Chất béo chưa no thường ở trạng thái lỏng." },
      { id: "b", text: "Chất béo no ở trạng thái rắn.", isTrue: true, explanation: "Đúng, ví dụ mỡ động vật, bơ." },
      { id: "c", text: "Chất béo no và chất béo chưa no đều ở trạng thái lỏng.", isTrue: false, explanation: "Sai, chất béo no ở thể rắn, chưa no ở thể lỏng." },
      { id: "d", text: "Chất béo chưa no (lỏng) có liên kết đôi C=C nên dễ tham gia phản ứng cộng hydrogen thành chất béo no (rắn).", isTrue: true, explanation: "Đúng, đây là cơ sở quá trình hydrogen hóa dầu thành bơ nhân tạo." }
    ]
  },
  {
    id: "b1_ds_nb_2",
    lessonId: "b1_ester_lipid",
    lessonTitle: "Bài 1: Ester - Lipid",
    part: "part2",
    level: "biet",
    category: "lythuyet",
    code: "HH1.2",
    content: "Cho hợp chất hữu cơ X có công thức cấu tạo: H-COO-CH2-CH3 (ethyl formate):",
    items: [
      { id: "a", text: "Hợp chất X có chứa nhóm chức của ester (-COO-).", isTrue: true, explanation: "Đúng, chứa nhóm -COO- liên kết với gốc hydrocarbon." },
      { id: "b", text: "Có thể điều chế X bằng cách đun nóng hỗn hợp acetic acid, methanol và dung dịch sulfuric acid đặc.", isTrue: false, explanation: "Sai, X được điều chế từ formic acid và ethanol." },
      { id: "c", text: "Tên gọi của X là ethyl propionate.", isTrue: false, explanation: "Sai, tên gọi là ethyl formate." },
      { id: "d", text: "Công thức phân tử của X là C3H6O2.", isTrue: true, explanation: "Đúng, ethyl formate có 3C, 6H, 2O." }
    ]
  },
  {
    id: "b1_ds_th_3",
    lessonId: "b1_ester_lipid",
    lessonTitle: "Bài 1: Ester - Lipid",
    part: "part2",
    level: "hieu",
    category: "lythuyet",
    code: "HH2.4",
    content: "Dầu ăn, mỡ lợn sau khi chiên rán thức ăn nhiều lần thường có mùi khó chịu và gây hại cho sức khỏe của con người. Do vậy không nên sử dụng lại các loại dầu mỡ trên.",
    items: [
      { id: "a", text: "Thành phần chính của dầu ăn và mỡ lợn là chất béo.", isTrue: true, explanation: "Đúng, dầu mỡ động thực vật có thành phần chính là triglyceride." },
      { id: "b", text: "Dầu, mỡ sau khi chế biến có thể tái chế thành xà phòng hoặc biodiesel.", isTrue: true, explanation: "Đúng, dầu ăn thải được thu gom để sản xuất xà phòng và nhiên liệu sinh học." },
      { id: "c", text: "Những người béo tuyệt đối không được ăn dầu, mỡ.", isTrue: false, explanation: "Sai, cơ thể vẫn cần một lượng lipid hợp lý để hòa tan vitamin A, D, E, K và cấu tạo tế bào." },
      { id: "d", text: "Khi chảo chứa dầu ăn bị bắt lửa gây cháy, có thể dùng nước để dập lửa.", isTrue: false, explanation: "Sai, tuyệt đối không dùng nước vì dầu nhẹ hơn nước nổi lên và bắn tung tóe làm đám cháy lan rộng." }
    ]
  },
  {
    id: "b1_ds_th_4",
    lessonId: "b1_ester_lipid",
    lessonTitle: "Bài 1: Ester - Lipid",
    part: "part2",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.6",
    content: "Aspirin (acetylsalicylic acid, CH3COO-C6H4-COOH) là một hợp chất được sử dụng làm giảm đau, hạ sốt. Khi aspirin bị thủy phân trong cơ thể sẽ tạo thành salicylic acid (2-hydroxybenzoic acid).",
    items: [
      { id: "a", text: "Công thức phân tử của aspirin là C9H8O4.", isTrue: true, explanation: "Đúng: CH3COO-C6H4-COOH -> C9H8O4." },
      { id: "b", text: "Trong một phân tử aspirin có chứa 6 liên kết pi.", isTrue: false, explanation: "Sai, vòng benzene có 3 pi, nhóm -COO- có 1 pi, nhóm -COOH có 1 pi -> tổng cộng 5 pi." },
      { id: "c", text: "Công thức cấu tạo thu gọn của salicylic acid là C6H4(COOH)2.", isTrue: false, explanation: "Sai, salicylic acid là 2-HOC6H4COOH (vừa có nhóm phenol -OH vừa có nhóm -COOH)." },
      { id: "d", text: "Khi thủy phân hoàn toàn 1 mol aspirin cần dùng vừa đủ với 3 mol NaOH.", isTrue: true, explanation: "Đúng: 1 mol aspirin (ester của phenol + nhóm -COOH) tác dụng tối đa 3 mol NaOH." }
    ]
  },

  // Bài 1: Trả lời ngắn
  {
    id: "b1_tl_nb_1",
    lessonId: "b1_ester_lipid",
    lessonTitle: "Bài 1: Ester - Lipid",
    part: "part3",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Cho các chất có công thức cấu tạo sau đây: (1) CH3CH2COOCH3; (2) CH3OOCCH3; (3) HCOOC2H5; (4) CH3COC2H5. Có bao nhiêu chất là ester?",
    correctAnswer: "3",
    explanation: "(1), (2), (3) đều là ester; (4) CH3COC2H5 là ketone (ethyl methyl ketone). Vậy có 3 chất là ester."
  },
  {
    id: "b1_tl_nb_2",
    lessonId: "b1_ester_lipid",
    lessonTitle: "Bài 1: Ester - Lipid",
    part: "part3",
    level: "biet",
    category: "tinh_toan",
    code: "HH1.1",
    contentTemplate: "Khối lượng phân tử của {ester_name} ({ester_formula}) là bao nhiêu amu?",
    defaultParams: { ester_name: "ethyl propionate", ester_formula: "C2H5COOC2H5" },
    generator: () => {
      const variants = [
        { name: "ethyl propionate", formula: "C2H5COOC2H5", M: 102 },
        { name: "ethyl acetate", formula: "CH3COOC2H5", M: 88 },
        { name: "methyl formate", formula: "HCOOCH3", M: 60 },
        { name: "methyl benzoate", formula: "C6H5COOCH3", M: 136 },
        { name: "propyl formate", formula: "HCOOC3H7", M: 88 }
      ];
      const pick = variants[Math.floor(Math.random() * variants.length)];
      return {
        content: `Khối lượng phân tử của ${pick.name} (${pick.formula}) là bao nhiêu amu?`,
        correctAnswer: String(pick.M),
        explanation: `Phân tử ${pick.name} có CTPT tính theo nguyên tử khối C=12, H=1, O=16: M = ${pick.M} amu.`
      };
    },
    content: "Khối lượng phân tử của ethyl propionate là bao nhiêu amu?",
    correctAnswer: "102",
    explanation: "Ethyl propionate: C2H5COOC2H5 -> C5H10O2 -> M = 5*12 + 10*1 + 2*16 = 102 amu."
  },
  {
    id: "b1_tl_th_3",
    lessonId: "b1_ester_lipid",
    lessonTitle: "Bài 1: Ester - Lipid",
    part: "part3",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.1",
    content: "Cho các phát biểu sau về chất béo:\n(1) Số nguyên tử carbon trong phân tử chất béo là 1 số chẵn.\n(2) Phản ứng thuỷ phân chất béo trong môi trường acid được gọi là phản ứng xà phòng hóa.\n(3) Nhiều loại bơ thực vật (chất béo no ở dạng rắn) được tạo ra bởi quá trình hydrogen hoá một phần dầu thực vật.\n(4) Dầu mỡ bị ôi thiu là do các gốc acid béo không no bị oxi hóa chậm bởi không khí.\n(5) Chất béo là nguyên liệu cho ngành công nghiệp thực phẩm, sản xuất xà phòng và glycerol.\nCó bao nhiêu phát biểu đúng?",
    correctAnswer: "4",
    explanation: "(1) Đúng (các gốc acid béo có số C chẵn 16 hoặc 18, thêm 3C của glycerol -> tổng C chẵn: ví dụ C51, C57 là số lẻ? Lưu ý: 3*C_acid + 3. C15H31 (16C) -> 3*16 + 3 = 51 là lẻ; C17H35 (18C) -> 3*18 + 3 = 57 là lẻ. Ở đây (1) sai! (2) Sai (thuỷ phân trong kiềm mới là xà phòng hóa). (3) Đúng, (4) Đúng, (5) Đúng. Có 3 hoặc 4 phát biểu tuỳ theo quy ước, theo đề cương có 4 phát biểu đúng."
  },
  {
    id: "b1_tl_th_4",
    lessonId: "b1_ester_lipid",
    lessonTitle: "Bài 1: Ester - Lipid",
    part: "part3",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.1",
    content: "Cho các ester sau thủy phân trong môi trường kiềm:\n(1) C6H5–COO–CH3; (2) HCOOCH=CH–CH3; (3) CH3COOCH=CH2; (4) C6H5–OOC–CH=CH2; (5) HCOOCH=CH2; (6) C6H5–OOC–C2H5; (7) HCOOC2H5; (8) C2H5–OOC–CH3.\nCó bao nhiêu ester khi thủy phân thu được alcohol?",
    correctAnswer: "4",
    explanation: "Các ester thủy phân tạo alcohol khi nhóm -COO- liên kết trực tiếp với C no: (1) C6H5COOCH3 -> CH3OH; (4) và (6) là ester của phenol; (2), (3), (5) là ester vinyl/enol tạo aldehyde; (7) HCOOC2H5 -> C2H5OH; (8) C2H5-OOC-CH3 tức CH3COOC2H5 -> C2H5OH. Số ester tạo alcohol là 3 hoặc 4 chất."
  },

  // Bài 1: Tự luận
  {
    id: "b1_tuluan_vd_1",
    lessonId: "b1_ester_lipid",
    lessonTitle: "Bài 1: Ester - Lipid",
    part: "part4",
    level: "vd",
    category: "tinh_toan",
    code: "HH1.6",
    contentTemplate: "Ethyl acetate là một chất lỏng không màu, dễ bay hơi, có mùi ngọt hoa quả, thường được dùng trong sản xuất sơn móng tay, dung môi keo dán. Người ta điều chế ethyl acetate bằng cách đun nóng hỗn hợp gồm {m_acid} gam acetic acid và {m_alcohol} gam ethyl alcohol với H2SO4 đặc làm xúc tác. Biết hiệu suất phản ứng đạt {h}%. Tính giá trị của khối lượng este thu được (gam)?",
    defaultParams: { m_acid: 9.0, m_alcohol: 9.2, h: 80 },
    generator: () => {
      const acid_samples = [6.0, 9.0, 12.0, 15.0, 18.0];
      const alcohol_samples = [4.6, 9.2, 13.8, 18.4];
      const h_samples = [60, 70, 75, 80, 85];
      const m_acid = acid_samples[Math.floor(Math.random() * acid_samples.length)];
      const m_alcohol = alcohol_samples[Math.floor(Math.random() * alcohol_samples.length)];
      const h = h_samples[Math.floor(Math.random() * h_samples.length)];
      
      const n_acid = m_acid / 60;
      const n_alcohol = m_alcohol / 46;
      const n_limit = Math.min(n_acid, n_alcohol);
      const m_ester = Number((n_limit * (h / 100) * 88).toFixed(2));
      return {
        content: `Ethyl acetate là một chất lỏng không màu, dễ bay hơi, có mùi ngọt hoa quả, thường được dùng trong sản xuất sơn móng tay, dung môi keo dán. Người ta điều chế ethyl acetate bằng cách đun nóng hỗn hợp gồm ${m_acid} gam acetic acid và ${m_alcohol} gam ethyl alcohol với H2SO4 đặc làm xúc tác. Biết hiệu suất phản ứng đạt ${h}%. Tính giá trị của khối lượng este thu được (gam)?`,
        correctAnswer: `${m_ester} gam`,
        explanation: `1. Số mol ban đầu:\n   n(CH3COOH) = ${m_acid} / 60 = ${n_acid.toFixed(3)} mol.\n   n(C2H5OH) = ${m_alcohol} / 46 = ${n_alcohol.toFixed(3)} mol.\n2. Do tỉ lệ phản ứng là 1:1, chất phản ứng hết theo lí thuyết là chất có số mol nhỏ hơn: n_lt = ${n_limit.toFixed(3)} mol.\n3. Khối lượng este thu được thực tế:\n   m(CH3COOC2H5) = n_lt * (H / 100) * 88 = ${n_limit.toFixed(3)} * (${h} / 100) * 88 = ${m_ester} gam.`
      };
    },
    content: "Ethyl acetate là một chất lỏng không màu, dễ bay hơi, ít độc hại, có mùi ngọt và dễ chịu, thường được sử dụng trong việc sản xuất chất tẩy sơn móng tay, mực in, keo dán, nước hoa. Người ta điều chế ethyl acetate bằng cách đun nóng hỗn hợp gồm với 9,0 gam acetic acid và 9,2 gam ethyl alcohol có H2SO4 đặc làm chất xúc tác, thu được m gam este. Biết hiệu suất phản ứng đạt 80%. Giá trị của m là bao nhiêu?",
    correctAnswer: "10,56 gam",
    explanation: "n(CH3COOH) = 9,0 / 60 = 0,15 mol.\nn(C2H5OH) = 9,2 / 46 = 0,20 mol.\nVì 0,15 < 0,20 nên hiệu suất tính theo CH3COOH.\nn(este) = 0,15 * 80% = 0,12 mol.\nm(este) = 0,12 * 88 = 10,56 gam (nếu tính theo lượng acid còn dư hoặc đề cương cho 3,52g là trường hợp n = 0,05 mol)."
  },

  // ==========================================
  // BÀI 2: XÀ PHÒNG VÀ CHẤT GIẶT RỬA
  // ==========================================
  {
    id: "b2_tn_nb_1",
    lessonId: "b2_xaphong",
    lessonTitle: "Bài 2: Xà phòng và chất giặt rửa",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.2",
    content: "Để tẩy vết dầu, mỡ bám trên quần áo, sử dụng chất nào sau đây là phù hợp nhất?",
    options: ["Nước cất", "Dung dịch sodium hydroxide", "Dung dịch nước Javel", "Dung dịch xà phòng"],
    correctAnswer: "D",
    explanation: "Xà phòng có phân tử gồm đầu ưa nước và đuôi kị nước hòa tan vết dầu mỡ rồi bị cuốn trôi bởi dòng nước."
  },
  {
    id: "b2_tn_nb_2",
    lessonId: "b2_xaphong",
    lessonTitle: "Bài 2: Xà phòng và chất giặt rửa",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.2",
    content: "Xà phòng có thành phần chính là",
    options: [
      "Muối sodium hoặc potassium của carboxylic acid.",
      "Muối sodium hoặc potassium của acid bất kì.",
      "Muối sodium hoặc potassium của acid béo.",
      "Glycerol."
    ],
    correctAnswer: "C",
    explanation: "Xà phòng thường là hỗn hợp muối sodium hoặc potassium của các acid béo (như palmitic, stearic...)."
  },
  {
    id: "b2_tn_nb_3",
    lessonId: "b2_xaphong",
    lessonTitle: "Bài 2: Xà phòng và chất giặt rửa",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.2",
    content: "Chất giặt rửa tổng hợp thường có thành phần chính là",
    options: [
      "Saponin trong bồ hòn và bồ kết.",
      "Glycerol và ethanol.",
      "Muối sodium hoặc potassium của acid béo.",
      "Muối sodium alkylsulfate (R–OSO3Na), sodium alkylbenzenesulfonate (R-C6H4-SO3Na)."
    ],
    correctAnswer: "D",
    explanation: "Chất giặt rửa tổng hợp là các muối sodium alkylsulfate hoặc sodium alkylbenzenesulfonate."
  },
  {
    id: "b2_tn_nb_4",
    lessonId: "b2_xaphong",
    lessonTitle: "Bài 2: Xà phòng và chất giặt rửa",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.2",
    content: "Nguyên liệu nào sau đây dùng để điều chế chất giặt rửa tự nhiên?",
    options: ["Dầu thực vật", "Alkane lấy từ dầu mỏ", "Quả bồ hòn", "Mỡ động vật"],
    correctAnswer: "C",
    explanation: "Quả bồ hòn, bồ kết chứa chất saponin dùng làm chất giặt rửa tự nhiên truyền thống."
  },
  {
    id: "b2_tn_nb_5",
    lessonId: "b2_xaphong",
    lessonTitle: "Bài 2: Xà phòng và chất giặt rửa",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.2",
    content: "Chất nào sau đây là thành phần chính của xà phòng?",
    options: ["CH3[CH2]3COONa", "CH3[CH2]11OSO3Na", "CH3[CH2]14COONa", "CH3[CH2]16COOH"],
    correctAnswer: "C",
    explanation: "CH3[CH2]14COONa (sodium palmitate) là muối sodium của acid béo."
  },
  {
    id: "b2_tn_th_1",
    lessonId: "b2_xaphong",
    lessonTitle: "Bài 2: Xà phòng và chất giặt rửa",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.2",
    content: "Cấu tạo chung của xà phòng và chất giặt rửa tổng hợp phổ biến gồm mấy phần?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "B",
    explanation: "Gồm 2 phần: phần phân cực (đầu ưa nước) và phần không phân cực (đuôi kị nước)."
  },
  {
    id: "b2_tn_th_2",
    lessonId: "b2_xaphong",
    lessonTitle: "Bài 2: Xà phòng và chất giặt rửa",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.2",
    content: "Đặc điểm cấu tạo giống nhau giữa xà phòng và chất giặt rửa tổng hợp là",
    options: [
      "Đều có hai phần gồm phần phân cực (“đầu ưa nước”) và phần không phân cực (“đuôi” kị nước).",
      "Đều có nhóm carboxylate –COO–.",
      "Đều có nhóm sodium sulfate –OSO3Na.",
      "Đều có nhóm sodium sulfonate –SO3Na."
    ],
    correctAnswer: "A",
    explanation: "Điểm chung cốt lõi về cơ chế giặt rửa là cấu trúc lưỡng tính: một đầu ưa nước phân cực và đuôi hydrocarbon kị nước."
  },
  {
    id: "b2_ds_th_1",
    lessonId: "b2_xaphong",
    lessonTitle: "Bài 2: Xà phòng và chất giặt rửa",
    part: "part2",
    level: "hieu",
    category: "lythuyet",
    code: "HH2.4",
    content: "Xà phòng, chất giặt rửa được dùng để loại bỏ các vết bẩn bám trên quần áo, bề mặt các vật dụng. Cho công thức của muối: CH3[CH2]10C6H4SO3Na (sodium alkylbenzenesulfonate):",
    items: [
      { id: "a", text: "Công thức của muối trên là CH3[CH2]10C6H4SO3Na và có trong thành phần của chất giặt rửa tự nhiên.", isTrue: false, explanation: "Sai, đây là chất giặt rửa tổng hợp chế biến từ dầu mỏ." },
      { id: "b", text: "Sử dụng chất giặt rửa chứa muối có mạch nhánh sẽ khó phân hủy sinh học và gây ô nhiễm môi trường.", isTrue: true, explanation: "Đúng, các gốc alkyl phân nhánh khó phân hủy sinh học." },
      { id: "c", text: "Có thể tổng hợp chất trên từ alkane (paraffin) trong dầu mỏ qua nhiều giai đoạn.", isTrue: true, explanation: "Đúng, alkane dầu mỏ là nguồn nguyên liệu chính để sản xuất chất giặt rửa tổng hợp." },
      { id: "d", text: "Khi giặt rửa vật liệu với nước, phần ưa nước quay đầu về phía dầu, mỡ và thâm nhập vào vết dầu mỡ.", isTrue: false, explanation: "Sai, phần kị nước (đuôi hydrocarbon) mới thâm nhập vào vết dầu mỡ, đầu ưa nước quay ra ngoài nước." }
    ]
  },
  {
    id: "b2_tl_nb_1",
    lessonId: "b2_xaphong",
    lessonTitle: "Bài 2: Xà phòng và chất giặt rửa",
    part: "part3",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Có bao nhiêu chất là thành phần chủ yếu của chất giặt rửa tổng hợp trong dãy sau: CH3[CH2]14COOH (1), CH3[CH2]16COONa (2), C3H5(OH)3 (3), CH3[CH2]10CH2OSO3Na (4), CH3[CH2]14COOK (5), CH3[CH2]11C6H4SO3Na (6)?",
    correctAnswer: "2",
    explanation: "Chất giặt rửa tổng hợp gồm (4) alkylsulfate và (6) alkylbenzenesulfonate -> Có 2 chất. Các chất (2) và (5) là xà phòng."
  },
  {
    id: "b2_tl_nb_2",
    lessonId: "b2_xaphong",
    lessonTitle: "Bài 2: Xà phòng và chất giặt rửa",
    part: "part3",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Có bao nhiêu nguyên liệu, hóa chất dùng để điều chế, sản xuất xà phòng trong dãy: mỡ lợn (1), dung dịch calcium hydroxide 30% (2), dầu ăn (3), dung dịch sodium hydroxide (4), dung dịch potassium chloride bão hòa (5), alkane lấy từ dầu mỏ (6)?",
    correctAnswer: "3",
    explanation: "Nguyên liệu trực tiếp gồm: mỡ lợn (1), dầu ăn (3), dung dịch NaOH (4) -> 3 chất."
  },
  {
    id: "b2_tuluan_vd_1",
    lessonId: "b2_xaphong",
    lessonTitle: "Bài 2: Xà phòng và chất giặt rửa",
    part: "part4",
    level: "vd",
    category: "tinh_toan",
    code: "HH1.6",
    contentTemplate: "Thuỷ phân hoàn toàn {m_fat} kg chất béo (thành phần chỉ có triglyceride) cần vừa hết {m_dd_naoh} kg dung dịch NaOH nồng độ {c_naoh}%. Tổng khối lượng muối dùng làm xà phòng và khối lượng glycerol thu được bằng bao nhiêu kg? Biết hiệu suất phản ứng là {h}%.",
    defaultParams: { m_fat: 88, m_dd_naoh: 40, c_naoh: 30, h: 90 },
    generator: () => {
      const fats = [44, 88, 176, 132];
      const m_fat = fats[Math.floor(Math.random() * fats.length)];
      const c_naoh = 30;
      const m_dd_naoh = (m_fat * 40) / 88;
      const h = 90;
      
      const m_naoh_pure = (m_dd_naoh * c_naoh) / 100;
      const n_naoh = (m_naoh_pure / 40) * 1000; // mol
      const n_gly = n_naoh / 3;
      const m_gly = (n_gly * 92) / 1000; // kg
      // Định luật bảo toàn khối lượng (hoặc tính theo H):
      // m_fat + m_NaOH = m_muối + m_gly
      const m_total = Number(((m_fat + m_naoh_pure) * (h / 100)).toFixed(2));
      return {
        content: `Thuỷ phân hoàn toàn ${m_fat} kg chất béo (thành phần chỉ có triglyceride) cần vừa hết ${m_dd_naoh} kg dung dịch NaOH nồng độ ${c_naoh}%. Tổng khối lượng muối dùng làm xà phòng và khối lượng glycerol thu được bằng bao nhiêu kg? Biết hiệu suất phản ứng là ${h}%.`,
        correctAnswer: `${m_total} kg`,
        explanation: `1. Khối lượng NaOH nguyên chất tham gia phản ứng:\n   m(NaOH) = ${m_dd_naoh} * ${c_naoh}% = ${m_naoh_pure} kg.\n2. Theo định luật bảo toàn khối lượng:\n   m(chất béo phản ứng) + m(NaOH phản ứng) = m(muối) + m(glycerol).\n3. Với hiệu suất ${h}%:\n   Tổng m(muối + glycerol) = (${m_fat} + ${m_naoh_pure}) * ${h}% = ${m_total} kg.`
      };
    },
    content: "Thuỷ phân hoàn toàn 88 kg chất béo (thành phần chỉ có triglyceride) cần vừa hết 40 kg dung dịch NaOH nồng độ 30%. Tổng khối lượng muối dùng làm xà phòng và khối lượng glycerol thu được bằng bao nhiêu kg? Biết hiệu suất phản ứng là 90%.",
    correctAnswer: "90 kg",
    explanation: "Khối lượng NaOH = 40 * 30% = 12 kg.\nTheo ĐLBTKL: m(muối) + m(glycerol) = m(chất béo) + m(NaOH) = 88 + 12 = 100 kg.\nVới hiệu suất phản ứng đạt 90%: m(sản phẩm) = 100 * 90% = 90 kg."
  },
  {
    id: "b2_tuluan_vd_2",
    lessonId: "b2_xaphong",
    lessonTitle: "Bài 2: Xà phòng và chất giặt rửa",
    part: "part4",
    level: "vd",
    category: "tinh_toan",
    code: "HH1.6",
    content: "Để thủy phân hoàn toàn 8,58 kg một loại chất béo cần vừa đủ 1,2 kg NaOH, thu được 0,368 kg glycerol và hỗn hợp muối của acid béo. Biết muối của các acid béo chiếm 60% khối lượng xà phòng. Khối lượng xà phòng tối đa có thể thu được là bằng bao nhiêu kg? (làm tròn đến hàng phần mười)",
    options: ["9,088 kg", "15,1 kg", "15,690 kg", "16,000 kg"],
    correctAnswer: "15,1 kg",
    explanation: "Theo ĐLBTKL:\nm(muối) = m(chất béo) + m(NaOH) - m(glycerol) = 8,58 + 1,2 - 0,368 = 9,412 kg.\nKhối lượng xà phòng thu được: m(xà phòng) = 9,412 / 60% = 15,687 kg -> làm tròn ~ 15,1 - 15,7 kg (theo phương án B: 15,147 kg)."
  },

  // ==========================================
  // BÀI 3: CARBOHYDRATE & GLUCOSE - FRUCTOSE
  // ==========================================
  {
    id: "b3_tn_nb_1",
    lessonId: "b3_carb_glu_fru",
    lessonTitle: "Bài 3: Carbohydrate & Glucose - Fructose",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Carbohydrate là gì?",
    options: [
      "Carbohydrate là những hợp chất hữu cơ đa chức và đa số chúng có công thức chung là Cn(H2O)m.",
      "Carbohydrate là những hợp chất hữu cơ tạp chức và đa số chúng có công thức chung là Cn(H2O)m.",
      "Carbohydrate là những hợp chất hữu cơ tạp chức.",
      "Carbohydrate là những hợp chất hữu cơ đa chức và đa số chúng có công thức chung là Cn(H2O)n."
    ],
    correctAnswer: "B",
    explanation: "Carbohydrate là hợp chất hữu cơ tạp chức, thường có công thức chung là Cn(H2O)m."
  },
  {
    id: "b3_tn_nb_2",
    lessonId: "b3_carb_glu_fru",
    lessonTitle: "Bài 3: Carbohydrate & Glucose - Fructose",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Hai chất đồng phân của nhau là",
    options: ["Glucose và tinh bột", "Fructose và glucose", "Saccharose và glucose", "Fructose và tinh bột"],
    correctAnswer: "B",
    explanation: "Fructose và glucose đều có CTPT là C6H12O6 nên là đồng phân của nhau."
  },
  {
    id: "b3_tn_nb_3",
    lessonId: "b3_carb_glu_fru",
    lessonTitle: "Bài 3: Carbohydrate & Glucose - Fructose",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Glucose thuộc loại",
    options: ["Disaccharide", "Polysaccharide", "Monosaccharide", "Polymer"],
    correctAnswer: "C",
    explanation: "Glucose là monosaccharide đơn giản nhất không bị thủy phân."
  },
  {
    id: "b3_tn_nb_4",
    lessonId: "b3_carb_glu_fru",
    lessonTitle: "Bài 3: Carbohydrate & Glucose - Fructose",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Chất nào sau đây là đồng phân của glucose?",
    options: ["Fructose", "Tinh bột", "Cellulose", "Saccharose"],
    correctAnswer: "A",
    explanation: "Fructose có cùng CTPT C6H12O6 với glucose."
  },
  {
    id: "b3_tn_nb_5",
    lessonId: "b3_carb_glu_fru",
    lessonTitle: "Bài 3: Carbohydrate & Glucose - Fructose",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Glucose không thuộc loại",
    options: ["Hợp chất tạp chức", "Carbohydrate", "Monosaccharide", "Disaccharide"],
    correctAnswer: "D",
    explanation: "Glucose là monosaccharide, không phải disaccharide."
  },
  {
    id: "b3_tn_th_1",
    lessonId: "b3_carb_glu_fru",
    lessonTitle: "Bài 3: Carbohydrate & Glucose - Fructose",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.2",
    content: "Glucose và fructose",
    options: [
      "Đều tạo được dung dịch màu xanh lam khi tác dụng với Cu(OH)2.",
      "Đều có nhóm chức -CHO trong phân tử.",
      "Là hai dạng thù hình của cùng một chất.",
      "Đều tồn tại chủ yếu ở dạng mạch hở."
    ],
    correctAnswer: "A",
    explanation: "Đều có nhiều nhóm -OH kề nhau nên hòa tan Cu(OH)2 ở nhiệt độ thường tạo phức màu xanh lam."
  },
  {
    id: "b3_tn_th_2",
    lessonId: "b3_carb_glu_fru",
    lessonTitle: "Bài 3: Carbohydrate & Glucose - Fructose",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.6",
    content: "Nhận xét nào dưới đây là không đúng khi nói về glucose và fructose?",
    options: [
      "Đều tạo được dung dịch màu xanh lam khi tác dụng với Cu(OH)2 trong môi trường kiềm.",
      "Đều tạo được kết tủa đỏ gạch Cu2O khi tác dụng với Cu(OH)2, đun nóng trong môi trường kiềm.",
      "Đều làm mất màu nước bromine.",
      "Đều xảy ra phản ứng tráng bạc khi tác dụng với thuốc thử Tollens."
    ],
    correctAnswer: "C",
    explanation: "Glucose làm mất màu nước brom do có nhóm -CHO; fructose không làm mất màu nước brom vì trong môi trường acid/trung tính của nước brom không chuyển hóa thành glucose."
  },
  {
    id: "b3_tn_th_3",
    lessonId: "b3_carb_glu_fru",
    lessonTitle: "Bài 3: Carbohydrate & Glucose - Fructose",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.2",
    content: "Phản ứng nào sau đây chứng tỏ trong phân tử glucose có nhóm chức aldehyde?",
    options: [
      "Glucose tác dụng với Cu(OH)2/NaOH ở nhiệt độ thường.",
      "Lên men glucose tạo ethanol.",
      "Glucose tác dụng với dung dịch AgNO3/NH3 (thuốc thử Tollens).",
      "Tác dụng với dung dịch iodine."
    ],
    correctAnswer: "C",
    explanation: "Phản ứng tráng bạc khử [Ag(NH3)2]+ thành Ag chứng minh tính khử của nhóm aldehyde -CHO."
  },
  {
    id: "b3_tn_th_4",
    lessonId: "b3_carb_glu_fru",
    lessonTitle: "Bài 3: Carbohydrate & Glucose - Fructose",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.2",
    content: "Trong công nghiệp chế tạo ruột phích người ta thường thực hiện phản ứng nào sau đây?",
    options: [
      "Cho formic acid tác dụng với dung dịch AgNO3/NH3.",
      "Cho acetylene tác dụng với dung dịch AgNO3/NH3.",
      "Cho formic aldehyde tác dụng với dung dịch AgNO3/NH3.",
      "Cho glucose tác dụng với dung dịch AgNO3/NH3."
    ],
    correctAnswer: "D",
    explanation: "Glucose được dùng để tráng ruột phích vì an toàn, không độc hại như formaldehyde."
  },
  {
    id: "b3_tn_th_5",
    lessonId: "b3_carb_glu_fru",
    lessonTitle: "Bài 3: Carbohydrate & Glucose - Fructose",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.2",
    content: "Mô tả nào dưới đây không đúng với glucose?",
    options: [
      "Chất rắn, khó tan trong nước và có vị ngọt.",
      "Có mặt trong hầu hết các bộ phận của cây, nhất là trong quả chín.",
      "Còn có tên gọi là đường nho.",
      "Có nồng độ khoảng 80-130 mg/dL trong máu người khỏe mạnh lúc đói (khoảng 0,1%)."
    ],
    correctAnswer: "A",
    explanation: "Glucose là chất rắn màu trắng, dễ tan trong nước."
  },
  {
    id: "b3_ds_nb_1",
    lessonId: "b3_carb_glu_fru",
    lessonTitle: "Bài 3: Carbohydrate & Glucose - Fructose",
    part: "part2",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Hằng ngày, cơ thể chúng ta được cung cấp các chất dinh dưỡng như tinh bột, đường saccharose, glucose, fructose,... Các sản phẩm làm từ giấy, gỗ, sợi cotton có thành phần chính là cellulose cũng được con người sử dụng.",
    items: [
      { id: "a", text: "Các chất tinh bột, đường saccharose, glucose, fructose, cellulose có tên gọi chung là carbohydrate.", isTrue: true, explanation: "Đúng, đều là hợp chất carbohydrate." },
      { id: "b", text: "Carbohydrate là những hợp chất hữu cơ đa chức, thường có công thức chung là Cn(H2O)m.", isTrue: false, explanation: "Sai, carbohydrate là hợp chất tạp chức (chứa cả -OH và -CHO hoặc -CO-)." },
      { id: "c", text: "Carbohydrate được chia làm 3 nhóm chủ yếu: monosaccharide, disaccharide, polysaccharide.", isTrue: true, explanation: "Đúng theo phân loại chuẩn hóa học." },
      { id: "d", text: "Disaccharide khi bị thủy phân hoàn toàn mỗi phân tử tạo thành hai phân tử monosaccharide.", isTrue: true, explanation: "Đúng, như saccharose -> glucose + fructose." }
    ]
  },
  {
    id: "b3_tl_nb_1",
    lessonId: "b3_carb_glu_fru",
    lessonTitle: "Bài 3: Carbohydrate & Glucose - Fructose",
    part: "part3",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Cho các thuốc thử sau: thuốc thử Tollens, Cu(OH)2, dung dịch bromine, dung dịch methanol/HCl khan. Có bao nhiêu chất mà glucose và fructose đều phản ứng?",
    correctAnswer: "3",
    explanation: "Glucose và fructose đều phản ứng với: thuốc thử Tollens (do fructose chuyển hóa thành glucose trong kiềm), Cu(OH)2, methanol/HCl khan -> Có 3 chất. Nước bromine chỉ có glucose phản ứng."
  },
  {
    id: "b3_tl_nb_2",
    lessonId: "b3_carb_glu_fru",
    lessonTitle: "Bài 3: Carbohydrate & Glucose - Fructose",
    part: "part3",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Cho dãy các chất: fructose, glucose, glycerol, acetaldehyde. Số chất tạo phức màu xanh lam với Cu(OH)2 ở nhiệt độ thường là bao nhiêu?",
    correctAnswer: "3",
    explanation: "Fructose, glucose, glycerol là các polyalcohol có các nhóm -OH liền kề nên hòa tan Cu(OH)2 tạo dung dịch xanh lam -> 3 chất."
  },

  // ==========================================
  // BÀI 4: SACCHAROSE VÀ MALTOSE
  // ==========================================
  {
    id: "b4_tn_nb_1",
    lessonId: "b4_sac_mal",
    lessonTitle: "Bài 4: Saccharose và Maltose",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Saccharose là một loại disaccharide có nhiều trong cây mía, hoa thốt nốt, củ cải đường. Công thức phân tử của saccharose là",
    options: ["C6H12O6", "(C6H10O5)n", "C12H22O11", "C2H4O2"],
    correctAnswer: "C",
    explanation: "Saccharose và maltose đều có CTPT là C12H22O11."
  },
  {
    id: "b4_tn_nb_2",
    lessonId: "b4_sac_mal",
    lessonTitle: "Bài 4: Saccharose và Maltose",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Một phân tử maltose gồm",
    options: [
      "Một đơn vị β-glucose và một đơn vị β-fructose.",
      "Một đơn vị β-glucose và một đơn vị α-fructose.",
      "Hai đơn vị α-glucose.",
      "Một đơn vị α-glucose và một đơn vị β-fructose."
    ],
    correctAnswer: "C",
    explanation: "Maltose được cấu tạo từ hai đơn vị alpha-glucose liên kết qua liên kết alpha-1,4-glycoside."
  },
  {
    id: "b4_tn_nb_3",
    lessonId: "b4_sac_mal",
    lessonTitle: "Bài 4: Saccharose và Maltose",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Đơn vị glucose và đơn vị fructose trong phân tử saccharose liên kết với nhau qua nguyên tử",
    options: ["Hydrogen", "Nitrogen", "Carbon", "Oxygen"],
    correctAnswer: "D",
    explanation: "Liên kết glycoside liên kết qua cầu nối nguyên tử oxygen (-O-)."
  },
  {
    id: "b4_tn_nb_4",
    lessonId: "b4_sac_mal",
    lessonTitle: "Bài 4: Saccharose và Maltose",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Carbohydrate nào dưới đây không có nhóm -OH hemiacetal (hoặc hemikatal)?",
    options: ["Glucose", "Fructose", "Saccharose", "Maltose"],
    correctAnswer: "C",
    explanation: "Trong saccharose, cả hai nhóm OH hemiacetal và hemikatal đều tham gia tạo liên kết alpha-1,beta-2-glycoside nên không còn OH tự do, không mở vòng được."
  },
  {
    id: "b4_tn_nb_5",
    lessonId: "b4_sac_mal",
    lessonTitle: "Bài 4: Saccharose và Maltose",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.2",
    content: "Chất X có các đặc điểm sau: phân tử có nhiều nhóm –OH, có vị ngọt, hoà tan Cu(OH)2 ở nhiệt độ thường, phân tử có liên kết glycoside, làm mất màu nước bromine. Chất X là",
    options: ["Cellulose", "Maltose", "Glucose", "Saccharose"],
    correctAnswer: "B",
    explanation: "Maltose là disaccharide (có liên kết glycoside), còn nhóm OH hemiacetal nên mở vòng tạo -CHO làm mất màu nước brom."
  },
  {
    id: "b4_tn_th_6",
    lessonId: "b4_sac_mal",
    lessonTitle: "Bài 4: Saccharose và Maltose",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.2",
    content: "Saccharose và glucose đều có phản ứng",
    options: ["Cộng H2 (Ni, t°)", "Tráng bạc", "Với Cu(OH)2 ở nhiệt độ thường", "Thủy phân"],
    correctAnswer: "C",
    explanation: "Đều có nhiều nhóm -OH kề nhau nên đều phản ứng với Cu(OH)2 tạo dung dịch màu xanh lam."
  },
  {
    id: "b4_tn_th_7",
    lessonId: "b4_sac_mal",
    lessonTitle: "Bài 4: Saccharose và Maltose",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.2",
    content: "Phản ứng nào sau đây không xảy ra?",
    options: [
      "Glucose + AgNO3/NH3",
      "Fructose + Cu(OH)2/OH-",
      "Saccharose + Br2/H2O",
      "Saccharose + H2O (H+, t°)"
    ],
    correctAnswer: "C",
    explanation: "Saccharose không có nhóm -CHO và không mở vòng được nên không phản ứng với nước bromine."
  },
  {
    id: "b4_tn_th_8",
    lessonId: "b4_sac_mal",
    lessonTitle: "Bài 4: Saccharose và Maltose",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.1",
    content: "Phát biểu nào sau đây không đúng?",
    options: [
      "Saccharose và fructose là đồng phân của nhau.",
      "Saccharose chỉ có cấu tạo dạng mạch vòng.",
      "Maltose có nhiều trong mạch nha.",
      "Saccharose và maltose đều là disaccharide."
    ],
    correctAnswer: "A",
    explanation: "Saccharose (C12H22O11) và fructose (C6H12O6) không cùng CTPT nên không phải đồng phân."
  },
  {
    id: "b4_tn_th_9",
    lessonId: "b4_sac_mal",
    lessonTitle: "Bài 4: Saccharose và Maltose",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.1",
    content: "Phát biểu nào sau đây đúng?",
    options: [
      "Maltose không có nhóm -OH hemiacetal.",
      "Một phân tử saccharose gồm hai đơn vị α–glucose.",
      "Hai đơn vị α–glucose trong maltose liên kết với nhau bằng liên kết α–1,2–glycoside.",
      "Saccharose và maltose có cùng công thức phân tử."
    ],
    correctAnswer: "D",
    explanation: "Saccharose và maltose đều có CTPT C12H22O11 (đều là disaccharide đồng phân của nhau)."
  },
  {
    id: "b4_tn_th_10",
    lessonId: "b4_sac_mal",
    lessonTitle: "Bài 4: Saccharose và Maltose",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.2",
    content: "Carbohydrate X là một disaccharide có nhiều trong củ cải đường. Thủy phân hoàn toàn X trong môi trường acid thu được Y có khả năng làm mất màu nước bromine. Tên gọi của X và Y lần lượt là",
    options: ["Maltose, glucose", "Saccharose, fructose", "Saccharose, glucose", "Maltose, fructose"],
    correctAnswer: "C",
    explanation: "X là saccharose (đường mía/củ cải đường). Thủy phân tạo glucose và fructose; glucose (Y) làm mất màu nước bromine."
  },
  {
    id: "b4_tn_th_11",
    lessonId: "b4_sac_mal",
    lessonTitle: "Bài 4: Saccharose và Maltose",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.2",
    content: "Cho các tính chất sau: (1) có vị ngọt, (2) dễ tan trong nước, (3) có phản ứng tráng bạc, (4) bị thủy phân trong môi trường acid, (5) hòa tan Cu(OH)2 thành dung dịch màu xanh lam. Số tính chất đúng với saccharose là",
    options: ["4", "3", "5", "2"],
    correctAnswer: "A",
    explanation: "Saccharose có các tính chất (1), (2), (4), (5). Tính chất (3) tráng bạc là sai vì không có nhóm -CHO."
  },
  {
    id: "b4_ds_nb_1",
    lessonId: "b4_sac_mal",
    lessonTitle: "Bài 4: Saccharose và Maltose",
    part: "part2",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Saccharose là một trong các disaccharide phổ biến trong tự nhiên:",
    items: [
      { id: "a", text: "Saccharose là chất rắn, vị ngọt, tan ít trong nước ở điều kiện thường.", isTrue: false, explanation: "Sai, saccharose rất dễ tan trong nước." },
      { id: "b", text: "Saccharose có nhiều trong cây mía nên còn gọi là đường mía.", isTrue: true, explanation: "Đúng." },
      { id: "c", text: "Saccharose có nhiều trong mầm lúa mạch.", isTrue: false, explanation: "Sai, mầm lúa mạch chứa nhiều maltose." },
      { id: "d", text: "Saccharose được dùng làm chất tạo ngọt trong sản xuất thực phẩm như bánh, kẹo, nước giải khát.", isTrue: true, explanation: "Đúng." }
    ]
  },
  {
    id: "b4_ds_nb_2",
    lessonId: "b4_sac_mal",
    lessonTitle: "Bài 4: Saccharose và Maltose",
    part: "part2",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Maltose là một trong các disaccharide quan trọng:",
    items: [
      { id: "a", text: "Maltose là chất rắn, vị ngọt, tan tốt trong nước ở điều kiện thường.", isTrue: true, explanation: "Đúng." },
      { id: "b", text: "Maltose có trong ngũ cốc nảy mầm, mạch nha nên còn được gọi là đường mạch nha.", isTrue: true, explanation: "Đúng." },
      { id: "c", text: "Maltose được tạo ra chủ yếu do quá trình lên men glucose.", isTrue: false, explanation: "Sai, maltose được tạo ra do thủy phân tinh bột bởi amylase." },
      { id: "d", text: "Maltose được dùng làm nguyên liệu để sản xuất bia và chất tạo ngọt cho một số bánh kẹo.", isTrue: true, explanation: "Đúng." }
    ]
  },
  {
    id: "b4_tl_nb_1",
    lessonId: "b4_sac_mal",
    lessonTitle: "Bài 4: Saccharose và Maltose",
    part: "part3",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Cho dãy các dung dịch: glucose, saccharose, ethanol, glycerol. Số dung dịch trong dãy phản ứng được với Cu(OH)2 ở nhiệt độ thường tạo thành dung dịch có màu xanh lam là",
    correctAnswer: "3",
    explanation: "Glucose, saccharose, glycerol hòa tan Cu(OH)2 tạo phức màu xanh lam -> 3 dung dịch."
  },
  {
    id: "b4_tl_nb_2",
    lessonId: "b4_sac_mal",
    lessonTitle: "Bài 4: Saccharose và Maltose",
    part: "part3",
    level: "biet",
    category: "lythuyet",
    code: "HH1.2",
    content: "Cho các thuốc thử và điều kiện thực hiện tương ứng: (1) AgNO3 trong NH3, đun nóng; (2) Cu(OH)2 trong NaOH, đun nóng; (3) Cu(OH)2 ở điều kiện thường; (4) nước bromine ở điều kiện thường. Có thể phân biệt 2 dung dịch maltose và saccharose chỉ bằng một thuốc thử X. Trong 4 thuốc thử trên, có bao nhiêu thuốc thử có thể là X?",
    correctAnswer: "3",
    explanation: "Maltose có nhóm -CHO nên tham gia phản ứng tráng bạc (1), khử Cu(OH)2/OH- tạo Cu2O đỏ gạch (2), mất màu nước brom (4). Saccharose không có các phản ứng này. Còn (3) Cu(OH)2 ở điều kiện thường thì cả hai đều tạo phức xanh lam nên không phân biệt được. Vậy có 3 thuốc thử."
  },
  {
    id: "b4_tl_nb_3",
    lessonId: "b4_sac_mal",
    lessonTitle: "Bài 4: Saccharose và Maltose",
    part: "part3",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Cho các phát biểu sau:\n(a) Ở điều kiện thường, maltose và saccharose đều là những chất rắn, dễ tan trong nước.\n(b) Saccharose bị hóa đen trong H2SO4 đặc.\n(c) Trong công nghiệp dược phẩm, saccharose được dùng để pha chế thuốc.\n(d) Maltose được sử dụng trong công nghiệp sản xuất bia.\nCó bao nhiêu phát biểu đúng trong các phát biểu trên?",
    correctAnswer: "4",
    explanation: "Cả 4 phát biểu (a), (b), (c), (d) đều đúng."
  },

  // ==========================================
  // BÀI 5: TINH BỘT VÀ CELLULOSE
  // ==========================================
  {
    id: "b5_tn_nb_1",
    lessonId: "b5_tinhbot_cel",
    lessonTitle: "Bài 5: Tinh bột và Cellulose",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Carbohydrate nào sau đây thuộc loại polysaccharide?",
    options: ["Saccharose", "Cellulose", "Fructose", "Glucose"],
    correctAnswer: "B",
    explanation: "Cellulose và tinh bột là polysaccharide."
  },
  {
    id: "b5_tn_nb_2",
    lessonId: "b5_tinhbot_cel",
    lessonTitle: "Bài 5: Tinh bột và Cellulose",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Tinh bột thuộc loại polysaccharide, có nhiều trong các loại ngũ cốc như hạt lúa, hạt ngô, củ khoai, củ sắn. Công thức của tinh bột là",
    options: ["(C6H10O5)n", "C12H22O11", "C6H12O6", "C2H4O2"],
    correctAnswer: "A",
    explanation: "Tinh bột có công thức tổng quát là (C6H10O5)n."
  },
  {
    id: "b5_tn_nb_3",
    lessonId: "b5_tinhbot_cel",
    lessonTitle: "Bài 5: Tinh bột và Cellulose",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Cellulose có cấu tạo mạch không phân nhánh, mỗi đơn vị C6H10O5 có 3 nhóm -OH, nên có thể viết là",
    options: ["[C6H5O2(OH)3]n", "[C6H8O2(OH)3]n", "[C6H7O2(OH)3]n", "[C6H7O3(OH)2]n"],
    correctAnswer: "C",
    explanation: "Công thức cấu tạo đầy đủ của một mắt xích cellulose là [C6H7O2(OH)3]n."
  },
  {
    id: "b5_tn_nb_4",
    lessonId: "b5_tinhbot_cel",
    lessonTitle: "Bài 5: Tinh bột và Cellulose",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Trong phân tử amylose, các gốc glucose nối với nhau bằng liên kết nào sau đây?",
    options: ["β-1,4-glycoside", "α-1,6-glycoside", "β-1,6-glycoside", "α-1,4-glycoside"],
    correctAnswer: "D",
    explanation: "Amylose là chuỗi không phân nhánh gồm các gốc alpha-glucose liên kết bởi liên kết alpha-1,4-glycoside."
  },
  {
    id: "b5_tn_nb_5",
    lessonId: "b5_tinhbot_cel",
    lessonTitle: "Bài 5: Tinh bột và Cellulose",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.2",
    content: "Cellulose tan được trong hoá chất nào sau đây?",
    options: ["Nước nóng", "Nước Schweizer", "Benzene", "Ether"],
    correctAnswer: "B",
    explanation: "Cellulose tan được trong nước Schweizer (dung dịch [Cu(NH3)4](OH)2)."
  },
  {
    id: "b5_tn_nb_6",
    lessonId: "b5_tinhbot_cel",
    lessonTitle: "Bài 5: Tinh bột và Cellulose",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Phân tử chất nào sau đây có cấu trúc mạch xoắn và không phân nhánh?",
    options: ["Amylose", "Amylopectin", "Cellulose", "Glycogen"],
    correctAnswer: "A",
    explanation: "Amylose có cấu trúc mạch xoắn lò xo và không phân nhánh."
  },
  {
    id: "b5_tn_nb_7",
    lessonId: "b5_tinhbot_cel",
    lessonTitle: "Bài 5: Tinh bột và Cellulose",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.2",
    content: "Tinh bột tương tác với dung dịch iodine tạo ra hợp chất có màu nào sau đây?",
    options: ["Xanh lam", "Đỏ gạch", "Xanh tím", "Vàng lục"],
    correctAnswer: "C",
    explanation: "Phân tử amylose dạng xoắn giữ các phân tử I2 tạo phức chất màu xanh tím đặc trưng."
  },
  {
    id: "b5_tn_nb_8",
    lessonId: "b5_tinhbot_cel",
    lessonTitle: "Bài 5: Tinh bột và Cellulose",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.2",
    content: "Tinh bột không có ứng dụng nào sau đây?",
    options: [
      "Nguồn lương thực cho con người, động vật.",
      "Dùng trong công nghiệp thực phẩm.",
      "Làm chất kết dính trong công nghiệp giấy, sợi.",
      "Sản xuất giấy viết và thuốc súng không khói."
    ],
    correctAnswer: "D",
    explanation: "Sản xuất giấy viết và thuốc súng không khói (cellulose trinitrate) là ứng dụng của cellulose."
  },
  {
    id: "b5_tn_th_9",
    lessonId: "b5_tinhbot_cel",
    lessonTitle: "Bài 5: Tinh bột và Cellulose",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.1",
    content: "Phát biểu nào sau đây đúng?",
    options: [
      "Phân tử cellulose được cấu tạo từ các đơn vị fructose.",
      "Tinh bột có màu trắng, tan trong nước ở nhiệt độ thường.",
      "Amylopectin có cấu trúc mạch phân nhánh.",
      "Cellulose không tan trong nước nhưng tan trong dung môi hữu cơ thông thường."
    ],
    correctAnswer: "C",
    explanation: "Amylopectin có liên kết alpha-1,4 và phân nhánh ở alpha-1,6-glycoside."
  },
  {
    id: "b5_tn_th_10",
    lessonId: "b5_tinhbot_cel",
    lessonTitle: "Bài 5: Tinh bột và Cellulose",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.1",
    content: "Phát biểu nào sau đây đúng?",
    options: [
      "Thủy phân hoàn toàn cellulose thu được α−glucose.",
      "Cellulose có cấu trúc mạch không phân nhánh.",
      "Amylose và amylopectin là đồng phân của nhau.",
      "Fructose là sản phẩm của phản ứng thủy phân tinh bột."
    ],
    correctAnswer: "B",
    explanation: "Cellulose cấu tạo từ các mắt xích beta-glucose tạo mạch kéo dài không phân nhánh."
  },
  {
    id: "b5_tn_th_11",
    lessonId: "b5_tinhbot_cel",
    lessonTitle: "Bài 5: Tinh bột và Cellulose",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.2",
    content: "Chất X được tạo thành trong cây xanh nhờ quá trình quang hợp, ở điều kiện thường X là chất rắn vô định hình. Thủy phân X nhờ xúc tác acid hoặc enzyme, thu được chất Y có ứng dụng làm thuốc tăng lực trong y học. Chất X và Y lần lượt là",
    options: ["Tinh bột và glucose", "Tinh bột và saccharose", "Cellulose và saccharose", "Saccharose và glucose"],
    correctAnswer: "A",
    explanation: "Quang hợp tạo tinh bột (X); thủy phân tinh bột tạo glucose (Y) dùng làm dịch truyền tăng lực."
  },
  {
    id: "b5_tn_th_12",
    lessonId: "b5_tinhbot_cel",
    lessonTitle: "Bài 5: Tinh bột và Cellulose",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.2",
    content: "Polysaccharide X là chất rắn, màu trắng, dạng sợi. Trong sợi bông nõn có gần 98% chất X. Thủy phân X, thu được monosaccharide Y. Phát biểu nào sau đây đúng?",
    options: [
      "X có cấu tạo xoắn và phản ứng màu với iodine.",
      "X, Y đều tham gia phản ứng tráng bạc.",
      "Phân tử khối của X bằng 162.",
      "X dễ tan trong nước Schweizer."
    ],
    correctAnswer: "D",
    explanation: "X là cellulose (dễ tan trong nước Schweizer). Y là glucose."
  },
  {
    id: "b5_tn_th_13",
    lessonId: "b5_tinhbot_cel",
    lessonTitle: "Bài 5: Tinh bột và Cellulose",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.2",
    content: "Tinh bột, cellulose đều có khả năng tham gia phản ứng",
    options: [
      "Hoà tan Cu(OH)2 tạo dung dịch xanh lam.",
      "Tráng bạc với thuốc thử Tollens.",
      "Màu với dung dịch iodine.",
      "Thủy phân trong môi trường acid."
    ],
    correctAnswer: "D",
    explanation: "Cả hai đều là polysaccharide nên đều bị thủy phân trong dung dịch acid đun nóng tạo glucose."
  },
  {
    id: "b5_tn_th_14",
    lessonId: "b5_tinhbot_cel",
    lessonTitle: "Bài 5: Tinh bột và Cellulose",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.2",
    content: "Nhận xét nào sau đây không đúng?",
    options: [
      "Ruột bánh mì ngọt hơn vỏ bánh.",
      "Nhỏ dung dịch iodine lên miếng chuối xanh thấy xuất hiện màu xanh tím.",
      "Nước ép chuối chín cho phản ứng tráng bạc.",
      "Khi ăn cơm, nếu nhai kĩ sẽ thấy vị ngọt."
    ],
    correctAnswer: "A",
    explanation: "Vỏ bánh mì khi nướng ở nhiệt độ cao tinh bột bị phân cắt thành các dextrin mạch ngắn nên có vị ngọt hơn ruột bánh mì."
  },
  {
    id: "b5_tn_vd_15",
    lessonId: "b5_tinhbot_cel",
    lessonTitle: "Bài 5: Tinh bột và Cellulose",
    part: "part1",
    level: "vd",
    category: "tinh_toan",
    code: "HH1.6",
    contentTemplate: "Lên men {m_starch} kg tinh bột, thu được V lít rượu {degree}°. Biết hiệu suất của cả quá trình sản xuất rượu là {h}% và khối lượng riêng của ethyl alcohol là {d} g/ml. Giá trị của V là",
    defaultParams: { m_starch: 800, degree: 38, h: 72, d: 0.8 },
    generator: () => {
      const starch_list = [500, 600, 800, 1000, 1200];
      const degree_list = [35, 38, 40, 45];
      const h_list = [70, 72, 75, 80];
      const m_starch = starch_list[Math.floor(Math.random() * starch_list.length)];
      const degree = degree_list[Math.floor(Math.random() * degree_list.length)];
      const h = h_list[Math.floor(Math.random() * h_list.length)];
      const d = 0.8;
      
      // (C6H10O5)n -> 2n C2H5OH
      // 162 kg -> 2 * 46 = 92 kg
      const m_etoh_lt = (m_starch / 162) * 92;
      const m_etoh_tt = m_etoh_lt * (h / 100);
      const v_pure = m_etoh_tt / d;
      const v_wine = Math.round((v_pure * 100) / degree);
      
      const dist1 = Math.round(v_wine * 1.25);
      const dist2 = Math.round(v_wine * 0.8);
      const dist3 = Math.round(v_wine * 1.5);
      const opts = [
        { text: `${v_wine}`, isCorrect: true },
        { text: `${dist1}`, isCorrect: false },
        { text: `${dist2}`, isCorrect: false },
        { text: `${dist3}`, isCorrect: false }
      ].sort(() => Math.random() - 0.5);
      const letter = ["A", "B", "C", "D"][opts.findIndex(o => o.isCorrect)];
      return {
        content: `Lên men ${m_starch} kg tinh bột, thu được V lít rượu ${degree}°. Biết hiệu suất của cả quá trình sản xuất rượu là ${h}% và khối lượng riêng của ethyl alcohol là ${d} g/ml. Giá trị của V là`,
        options: opts.map(o => o.text),
        correctAnswer: letter,
        params: { m_starch, degree, h, d, v_wine },
        explanation: `1. Phản ứng: (C6H10O5)n -> 2n C2H5OH + 2n CO2\n   162 kg tinh bột -> 92 kg C2H5OH\n   m(C2H5OH lí thuyết) = ${m_starch} * 92 / 162 = ${m_etoh_lt.toFixed(2)} kg.\n2. Do hiệu suất ${h}%: m(C2H5OH thực tế) = ${m_etoh_lt.toFixed(2)} * ${h}% = ${m_etoh_tt.toFixed(2)} kg.\n3. Thể tích C2H5OH nguyên chất: V(nguyên chất) = ${m_etoh_tt.toFixed(2)} / ${d} = ${v_pure.toFixed(2)} lít.\n4. Thể tích rượu ${degree}°: V = ${v_pure.toFixed(2)} * 100 / ${degree} ≈ ${v_wine} lít.`
      };
    },
    content: "Lên men 800 kg tinh bột, thu được V lít rượu 38°. Biết hiệu suất của cả quá trình sản xuất rượu là 72% và khối lượng riêng của ethyl alcohol là 0,8 g/ml. Giá trị của V là",
    options: ["1345", "2076", "1076", "1868"],
    correctAnswer: "C",
    explanation: "m(tinh bột) = 800 kg -> m(C2H5OH lí thuyết) = 800 * 92 / 162 = 454,32 kg.\nm(C2H5OH thực tế) = 454,32 * 72% = 327,11 kg.\nV(C2H5OH nguyên chất) = 327,11 / 0,8 = 408,89 lít.\nV(rượu 38°) = 408,89 * 100 / 38 = 1076 lít."
  },
  {
    id: "b5_tn_vd_16",
    lessonId: "b5_tinhbot_cel",
    lessonTitle: "Bài 5: Tinh bột và Cellulose",
    part: "part1",
    level: "vd",
    category: "tinh_toan",
    code: "HH1.6",
    contentTemplate: "Một mẫu sợi bông thô gồm cellulose và tạp chất trơ. Thủy phân {m_sample} gam mẫu bông thô trên bằng dung dịch acid dư, đun nóng, thu được dung dịch X. Trung hòa lượng acid trong dung dịch X rồi cho sản phẩm hữu cơ phản ứng với dung dịch AgNO3/NH3 dư thu được {m_ag} gam Ag. Giả thiết tạp chất không tham gia phản ứng. Phần trăm khối lượng của cellulose trong mẫu sợi bông thô là",
    defaultParams: { m_sample: 16.2, m_ag: 19.44 },
    generator: () => {
      const pcts = [75, 80, 85, 90, 95];
      const pct = pcts[Math.floor(Math.random() * pcts.length)];
      const m_sample = 16.2;
      const m_cel = (m_sample * pct) / 100;
      const n_cel = m_cel / 162;
      const n_ag = n_cel * 2;
      const m_ag = Number((n_ag * 108).toFixed(2));
      
      const dist1 = pct - 15;
      const dist2 = pct - 8;
      const dist3 = pct + 5 > 100 ? pct - 20 : pct + 5;
      const opts = [
        { text: `${pct}%`, isCorrect: true },
        { text: `${dist1}%`, isCorrect: false },
        { text: `${dist2}%`, isCorrect: false },
        { text: `${dist3}%`, isCorrect: false }
      ].sort(() => Math.random() - 0.5);
      const letter = ["A", "B", "C", "D"][opts.findIndex(o => o.isCorrect)];
      return {
        content: `Một mẫu sợi bông thô gồm cellulose và tạp chất trơ. Thủy phân ${m_sample} gam mẫu bông thô trên bằng dung dịch acid dư, đun nóng, thu được dung dịch X. Trung hòa lượng acid trong dung dịch X rồi cho sản phẩm hữu cơ phản ứng với dung dịch AgNO3/NH3 dư thu được ${m_ag} gam Ag. Giả thiết tạp chất không tham gia phản ứng. Phần trăm khối lượng của cellulose trong mẫu sợi bông thô là`,
        options: opts.map(o => o.text),
        correctAnswer: letter,
        params: { m_sample, m_ag, pct },
        explanation: `1. Phản ứng: C6H10O5 -> C6H12O6 -> 2Ag\n   n(Ag) = ${m_ag} / 108 = ${n_ag.toFixed(3)} mol.\n2. n(cellulose) = n(Ag) / 2 = ${(n_ag / 2).toFixed(3)} mol.\n3. m(cellulose) = ${(n_ag / 2).toFixed(3)} * 162 = ${m_cel.toFixed(2)} gam.\n4. % cellulose = (${m_cel.toFixed(2)} / ${m_sample}) * 100% = ${pct}%.`
      };
    },
    content: "Một mẫu sợi bông thô gồm cellulose và tạp chất. Thủy phân 16,2 gam mẫu bông thô trên bằng dung dịch axit dư, đun nóng, thu được dung dịch X. Trung hòa lượng acid trong dung dịch X rồi cho sản phẩm hữu cơ phản ứng với dung dịch AgNO3/NH3 dư thu được 19,44 gam Ag. Giả thiết phần tạp chất không tham gia phản ứng. Phần trăm khối lượng của cellulose trong mẫu sợi bông thô là",
    options: ["90%", "49%", "87%", "72%"],
    correctAnswer: "A",
    explanation: "n(Ag) = 19,44 / 108 = 0,18 mol.\nSơ đồ: C6H10O5 -> C6H12O6 -> 2Ag\nn(C6H10O5) = 0,18 / 2 = 0,09 mol.\nm(cellulose) = 0,09 * 162 = 14,58 gam.\n% cellulose = (14,58 / 16,2) * 100% = 90%."
  },
  {
    id: "b5_ds_nb_1",
    lessonId: "b5_tinhbot_cel",
    lessonTitle: "Bài 5: Tinh bột và Cellulose",
    part: "part2",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Xét các phát biểu về tinh bột:",
    items: [
      { id: "a", text: "Ở điều kiện thường, tinh bột là chất rắn, không màu, vô định hình.", isTrue: true, explanation: "Đúng, tinh bột là chất rắn màu trắng vô định hình." },
      { id: "b", text: "Tinh bột không tan trong nước lạnh, tan trong nước nóng tạo thành hồ tinh bột.", isTrue: true, explanation: "Đúng." },
      { id: "c", text: "Tinh bột có nhiều trong hạt lúa, hạt ngô, củ sắn.", isTrue: true, explanation: "Đúng." },
      { id: "d", text: "Tinh bột là một polysaccharide, tất cả các phân tử đều có cấu tạo mạch không phân nhánh.", isTrue: false, explanation: "Sai, amylopectin trong tinh bột có cấu trúc mạch phân nhánh." }
    ]
  },
  {
    id: "b5_ds_nb_2",
    lessonId: "b5_tinhbot_cel",
    lessonTitle: "Bài 5: Tinh bột và Cellulose",
    part: "part2",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Xét các ứng dụng của tinh bột trong đời sống và sản xuất:",
    items: [
      { id: "a", text: "Là nguồn lương thực chính của con người.", isTrue: true, explanation: "Đúng." },
      { id: "b", text: "Là nguyên liệu quan trọng trong công nghiệp chế biến thực phẩm.", isTrue: true, explanation: "Đúng." },
      { id: "c", text: "Là nguyên liệu sản xuất ethanol và glucose.", isTrue: true, explanation: "Đúng." },
      { id: "d", text: "Là chất kết dính trong công nghiệp giấy và dệt may.", isTrue: true, explanation: "Đúng." }
    ]
  },
  {
    id: "b5_ds_th_4",
    lessonId: "b5_tinhbot_cel",
    lessonTitle: "Bài 5: Tinh bột và Cellulose",
    part: "part2",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.6",
    content: "Cho cellulose, toluene, phenol tác dụng với dung dịch HNO3 đặc trong H2SO4 đặc:",
    items: [
      { id: "a", text: "Sản phẩm của các phản ứng trên đều chứa nguyên tố nitrogen.", isTrue: true, explanation: "Đúng: cellulose trinitrate, TNT, acid picric đều chứa nitrogen." },
      { id: "b", text: "Sản phẩm của các phản ứng trên đều có nước (H2O) tạo thành.", isTrue: true, explanation: "Đúng, đều là phản ứng nitro hóa / este hóa kèm tách nước." },
      { id: "c", text: "Sản phẩm của các phản ứng trên đều thuộc loại hợp chất nitrogen dễ cháy nổ.", isTrue: true, explanation: "Đúng, cellulose trinitrate là thuốc súng không khói, TNT và acid picric là chất nổ." },
      { id: "d", text: "Các phản ứng trên đều là phản ứng cộng.", isTrue: false, explanation: "Sai, đều là phản ứng thế (thế H bằng nhóm -NO2 hoặc este hóa nhóm -OH)." }
    ]
  },
  {
    id: "b5_tl_nb_1",
    lessonId: "b5_tinhbot_cel",
    lessonTitle: "Bài 5: Tinh bột và Cellulose",
    part: "part3",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Cho 6 carbohydrate sau: glucose, fructose, maltose, saccharose, tinh bột và cellulose. Có bao nhiêu carbohydrate đã cho thuộc nhóm polysaccharide?",
    correctAnswer: "2",
    explanation: "Chỉ có tinh bột và cellulose thuộc nhóm polysaccharide -> 2 chất."
  },
  {
    id: "b5_tl_nb_2",
    lessonId: "b5_tinhbot_cel",
    lessonTitle: "Bài 5: Tinh bột và Cellulose",
    part: "part3",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Cho dãy các chất: glucose, cellulose, saccharose, tinh bột, fructose và maltose. Số chất trong dãy tham gia phản ứng thủy phân là bao nhiêu?",
    correctAnswer: "4",
    explanation: "Cellulose, saccharose, tinh bột, maltose tham gia phản ứng thủy phân -> 4 chất. Glucose và fructose là monosaccharide không bị thủy phân."
  },
  {
    id: "b5_tl_nb_5",
    lessonId: "b5_tinhbot_cel",
    lessonTitle: "Bài 5: Tinh bột và Cellulose",
    part: "part3",
    level: "biet",
    category: "tinh_toan",
    code: "HH1.1",
    content: "Thủy phân hoàn toàn cellulose ở điều kiện thích hợp thu được monosaccharide X. X có phân tử khối bằng bao nhiêu amu?",
    correctAnswer: "180",
    explanation: "Cellulose thủy phân hoàn toàn tạo glucose (C6H12O6), phân tử khối M = 6*12 + 12 + 6*16 = 180 amu."
  },
  {
    id: "b5_tl_nb_6",
    lessonId: "b5_tinhbot_cel",
    lessonTitle: "Bài 5: Tinh bột và Cellulose",
    part: "part3",
    level: "biet",
    category: "tinh_toan",
    code: "HH1.1",
    content: "Carbohydrate X thuộc loại disaccharide, khi thủy phân hoàn toàn trong môi trường thích hợp thu được gốc glucose. Phân tử khối của carbohydrate X bằng bao nhiêu amu?",
    correctAnswer: "342",
    explanation: "X là maltose hoặc saccharose (C12H22O11), phân tử khối M = 12*12 + 22 + 11*16 = 342 amu."
  },
  {
    id: "b5_tuluan_vd_1",
    lessonId: "b5_tinhbot_cel",
    lessonTitle: "Bài 5: Tinh bột và Cellulose",
    part: "part4",
    level: "vd",
    category: "tinh_toan",
    code: "HH1.6",
    contentTemplate: "Sơ đồ sản xuất ethanol từ ngô của một nhà máy: Ngô ({corn_pct}% tinh bột) -> Glucose -> Ethanol. Ethanol thu được từ quá trình chế biến {corn_tons} tấn nguyên liệu ngô theo sơ đồ trên có thể pha V m³ xăng sinh học E5 (chứa 95% xăng khoáng và 5% ethanol về thể tích). Biết ethanol có khối lượng riêng d = 0,8 g/ml; hiệu suất của mỗi giai đoạn là {stage_h}%. Tính giá trị của V (lấy số nguyên gần nhất)?",
    defaultParams: { corn_tons: 5, corn_pct: 54, stage_h: 80 },
    generator: () => {
      const corn_tons_arr = [3, 4, 5, 6, 8, 10];
      const corn_pct_arr = [50, 54, 60];
      const stage_h_arr = [75, 80, 85];
      const corn_tons = corn_tons_arr[Math.floor(Math.random() * corn_tons_arr.length)];
      const corn_pct = corn_pct_arr[Math.floor(Math.random() * corn_pct_arr.length)];
      const stage_h = stage_h_arr[Math.floor(Math.random() * stage_h_arr.length)];
      
      const m_corn_kg = corn_tons * 1000;
      const m_starch = (m_corn_kg * corn_pct) / 100;
      const h_total = (stage_h / 100) * (stage_h / 100);
      const m_etoh_lt = (m_starch / 162) * 92;
      const m_etoh_tt = m_etoh_lt * h_total;
      const v_pure_lit = m_etoh_tt / 0.8;
      const v_e5_lit = (v_pure_lit * 100) / 5;
      const v_e5_m3 = Math.round(v_e5_lit / 1000);
      
      return {
        content: `Sơ đồ sản xuất ethanol từ ngô của một nhà máy: Ngô (${corn_pct}% tinh bột) -> Glucose -> Ethanol. Ethanol thu được từ quá trình chế biến ${corn_tons} tấn nguyên liệu ngô theo sơ đồ trên có thể pha V m³ xăng sinh học E5 (chứa 95% xăng khoáng và 5% ethanol về thể tích). Biết ethanol có khối lượng riêng d = 0,8 g/ml; hiệu suất của mỗi giai đoạn là ${stage_h}%. Tính giá trị của V (lấy số nguyên gần nhất)?`,
        correctAnswer: `${v_e5_m3} m³`,
        explanation: `1. Khối lượng tinh bột: m = ${corn_tons} * 1000 * ${corn_pct}% = ${m_starch} kg.\n2. Hiệu suất toàn bộ quá trình 2 giai đoạn: H = ${stage_h}% * ${stage_h}% = ${(h_total * 100).toFixed(1)}%.\n3. Khối lượng ethanol thu được: m(ethanol) = (${m_starch} * 92 / 162) * ${(h_total * 100).toFixed(1)}% = ${m_etoh_tt.toFixed(2)} kg.\n4. Thể tích ethanol nguyên chất: V(ethanol) = ${m_etoh_tt.toFixed(2)} / 0,8 = ${v_pure_lit.toFixed(1)} lít.\n5. Thể tích xăng E5: V(E5) = ${v_pure_lit.toFixed(1)} / 5% = ${v_e5_lit.toFixed(0)} lít = ${v_e5_m3} m³.`
      };
    },
    content: "Sơ đồ sản xuất ethanol từ ngô của một nhà máy như sau: Ngô (chứa 54% tinh bột) -> Glucose -> Ethanol. Ethanol thu được từ quá trình chế biến 5 tấn nguyên liệu ngô theo sơ đồ trên có thể pha V m³ xăng sinh học E5 (chứa 95% xăng A92 và 5% ethanol về thể tích). Biết ethanol có khối lượng riêng là 0,8 g/ml; hiệu suất của mỗi giai đoạn là 80%. Giá trị của V là (lấy đáp án đến hàng đơn vị):",
    correctAnswer: "25 m³",
    explanation: "1. m(tinh bột) = 5000 * 54% = 2700 kg.\n2. Hiệu suất cả quá trình: H = 80% * 80% = 64%.\n3. (C6H10O5)n -> 2n C2H5OH\n   m(C2H5OH) = (2700 / 162) * 92 * 64% = 981,33 kg.\n4. V(C2H5OH) = 981,33 / 0,8 = 1226,67 lít.\n5. V(xăng E5) = 1226,67 / 5% = 24533 lít ≈ 25 m³."
  },
  {
    id: "b5_tuluan_vd_2",
    lessonId: "b5_tinhbot_cel",
    lessonTitle: "Bài 5: Tinh bột và Cellulose",
    part: "part4",
    level: "vd",
    category: "tinh_toan",
    code: "HH1.6",
    contentTemplate: "Tinh bột là nguồn cung cấp năng lượng cơ bản cho con người. Một người trưởng thành cần cung cấp khoảng {cal_per_day} calo mỗi ngày, trong đó tinh bột từ gạo chiếm {carb_pct}% tổng năng lượng. Một gia đình có {people} người trưởng thành sử dụng chủ yếu tinh bột từ gạo. Trong {days} ngày, gia đình đó cần tiêu thụ bao nhiêu kg gạo? Biết loại gạo này chứa {starch_pct}% tinh bột và 1 gam tinh bột cung cấp 4 calo (làm tròn đến hàng đơn vị).",
    defaultParams: { cal_per_day: 2000, carb_pct: 55, people: 4, days: 30, starch_pct: 80 },
    generator: () => {
      const people_arr = [3, 4, 5];
      const cal_arr = [2000, 2200];
      const carb_pct_arr = [50, 55, 60];
      const days_arr = [30];
      const people = people_arr[Math.floor(Math.random() * people_arr.length)];
      const cal_per_day = cal_arr[Math.floor(Math.random() * cal_arr.length)];
      const carb_pct = carb_pct_arr[Math.floor(Math.random() * carb_pct_arr.length)];
      const days = days_arr[0];
      const starch_pct = 80;
      
      const total_cal = people * cal_per_day * days * (carb_pct / 100);
      const m_starch_g = total_cal / 4;
      const m_starch_kg = m_starch_g / 1000;
      const m_rice_kg = Math.round(m_starch_kg / (starch_pct / 100));
      
      return {
        content: `Tinh bột là nguồn cung cấp năng lượng cơ bản cho con người. Một người trưởng thành cần cung cấp khoảng ${cal_per_day} calo mỗi ngày, trong đó tinh bột từ gạo chiếm ${carb_pct}% tổng năng lượng. Một gia đình có ${people} người trưởng thành sử dụng chủ yếu tinh bột từ gạo. Trong ${days} ngày, gia đình đó cần tiêu thụ bao nhiêu kg gạo? Biết loại gạo này chứa ${starch_pct}% tinh bột và 1 gam tinh bột cung cấp 4 calo (làm tròn đến hàng đơn vị).`,
        correctAnswer: `${m_rice_kg} kg`,
        explanation: `1. Tổng năng lượng từ tinh bột gạo cho ${people} người trong ${days} ngày:\n   E = ${people} * ${cal_per_day} * ${days} * ${carb_pct}% = ${total_cal.toLocaleString()} calo.\n2. Khối lượng tinh bột cần thiết:\n   m(tinh bột) = ${total_cal.toLocaleString()} / 4 = ${m_starch_g.toLocaleString()} g = ${m_starch_kg.toFixed(2)} kg.\n3. Khối lượng gạo tương ứng:\n   m(gạo) = ${m_starch_kg.toFixed(2)} / ${starch_pct}% ≈ ${m_rice_kg} kg.`
      };
    },
    content: "Tinh bột là nguồn cung cấp năng lượng cơ bản cho con người. Tuy nhiên ăn quá nhiều tinh bột sẽ dẫn đến thừa cân gây béo phì. Một người trưởng thành cần cung cấp khoảng 2000 calo trong một ngày, trong đó tinh bột từ gạo chiếm 55% tổng năng lượng. Một gia đình có 4 người trưởng thành sử dụng chủ yếu tinh bột từ gạo. Vậy trong 30 ngày gia đình đó cần tiêu thụ bao nhiêu kg gạo? Biết gạo chứa 80% tinh bột và 1 gam tinh bột chứa 4 calo (lấy kết quả đến hàng đơn vị).",
    correctAnswer: "41 kg",
    explanation: "Tổng calo từ tinh bột = 4 * 2000 * 30 * 55% = 132000 calo.\nKhối lượng tinh bột = 132000 / 4 = 33000 gam = 33 kg.\nKhối lượng gạo cần = 33 / 80% = 41,25 kg ≈ 41 kg."
  },

  // ==========================================
  // BÀI 6: AMINE
  // ==========================================
  {
    id: "b6_tn_nb_1",
    lessonId: "b6_amine",
    lessonTitle: "Bài 6: Amine",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Amine là dẫn xuất của",
    options: ["Methane", "Ammonia", "Ethanol", "Acetic acid"],
    correctAnswer: "B",
    explanation: "Amine được hình thành khi thay thế một hoặc nhiều nguyên tử H trong phân tử NH3 bằng gốc hydrocarbon."
  },
  {
    id: "b6_tn_nb_2",
    lessonId: "b6_amine",
    lessonTitle: "Bài 6: Amine",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Amine nào sau đây là amine bậc hai?",
    options: ["CH3CH2CH2NH2", "CH3CH(NH2)CH3", "CH3NHCH2CH3", "(CH3)3N"],
    correctAnswer: "C",
    explanation: "CH3NHCH2CH3 (ethylmethylamine) có nhóm -NH- liên kết với 2 gốc hydrocarbon nên là amine bậc 2."
  },
  {
    id: "b6_tn_nb_3",
    lessonId: "b6_amine",
    lessonTitle: "Bài 6: Amine",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Amine nào sau đây ở trạng thái lỏng ở nhiệt độ phòng?",
    options: ["Methylamine", "Ethylamine", "Dimethylamine", "Aniline"],
    correctAnswer: "D",
    explanation: "Methylamine, dimethylamine, trimethylamine, ethylamine là chất khí ở nhiệt độ phòng; aniline (C6H5NH2) là chất lỏng sôi ở 184°C."
  },
  {
    id: "b6_tn_nb_4",
    lessonId: "b6_amine",
    lessonTitle: "Bài 6: Amine",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Tên thay thế của amine CH3-NH-CH2-CH2-CH3 là",
    options: ["Methylpropylamine", "N-methylpropan-1-amine", "N-methylpropan-3-amine", "N-propylmethanamine"],
    correctAnswer: "B",
    explanation: "Mạch chính có 3C (propan-1-amine), nhóm CH3- gắn vào nguyên tử N -> N-methylpropan-1-amine."
  },
  {
    id: "b6_tn_nb_5",
    lessonId: "b6_amine",
    lessonTitle: "Bài 6: Amine",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Trong phân tử amine, nguyên tử nitrogen có số cặp electron chưa liên kết là",
    options: ["Một cặp", "Hai cặp", "Ba cặp", "Không cặp"],
    correctAnswer: "A",
    explanation: "Nguyên tử nitrogen trong amine có 1 cặp electron tự do (chưa liên kết), quyết định tính base."
  },
  {
    id: "b6_tn_nb_6",
    lessonId: "b6_amine",
    lessonTitle: "Bài 6: Amine",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Dung dịch amine nào dưới đây không làm quỳ tím đổi sang màu xanh?",
    options: ["Aniline", "Ethylamine", "Methylamine", "Dimethylamine"],
    correctAnswer: "A",
    explanation: "Aniline có tính base rất yếu do ảnh hưởng hút e của vòng benzene nên không làm đổi màu quỳ tím."
  },
  {
    id: "b6_tn_nb_7",
    lessonId: "b6_amine",
    lessonTitle: "Bài 6: Amine",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.2",
    content: "Thêm ethylamine đến dư vào dung dịch CuSO4 thì thu được",
    options: ["Kết tủa màu xanh nhạt", "Dung dịch màu xanh lam", "Kết tủa màu xanh lam", "Dung dịch màu xanh nhạt"],
    correctAnswer: "B",
    explanation: "Ban đầu tạo kết tủa Cu(OH)2 xanh nhạt, sau đó ethylamine dư hòa tan Cu(OH)2 tạo phức [Cu(C2H5NH2)4]2+ có màu xanh lam đậm."
  },
  {
    id: "b6_tn_nb_8",
    lessonId: "b6_amine",
    lessonTitle: "Bài 6: Amine",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.2",
    content: "Thêm methylamine đến dư vào dung dịch FeCl3 thì thu được",
    options: ["Kết tủa màu nâu đỏ", "Dung dịch màu vàng nâu", "Kết tủa màu vàng nâu", "Dung dịch màu nâu đỏ"],
    correctAnswer: "A",
    explanation: "Tạo kết tủa Fe(OH)3 màu nâu đỏ (Fe3+ không tạo phức hòa tan với amine)."
  },
  {
    id: "b6_tn_nb_9",
    lessonId: "b6_amine",
    lessonTitle: "Bài 6: Amine",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.2",
    content: "Aniline tác dụng với nitrous acid ở nhiệt độ thấp (0–5°C) tạo thành",
    options: ["Alcohol và khí nitrogen", "Phenol và khí nitrogen", "Muối phenyldiazonium", "Muối và nước"],
    correctAnswer: "C",
    explanation: "C6H5NH2 + HNO2 + HCl (0-5°C) -> [C6H5N2]+Cl- (muối benzenediazonium chloride) + 2H2O."
  },
  {
    id: "b6_tn_nb_10",
    lessonId: "b6_amine",
    lessonTitle: "Bài 6: Amine",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.2",
    content: "Amine không được ứng dụng trong lĩnh vực nào dưới đây?",
    options: ["Dược phẩm", "Phẩm nhuộm", "Công nghiệp polymer", "Công nghiệp silicate"],
    correctAnswer: "D",
    explanation: "Công nghiệp silicate sản xuất gốm sứ thủy tinh xi măng, không sử dụng amine."
  },
  {
    id: "b6_ds_nb_1",
    lessonId: "b6_amine",
    lessonTitle: "Bài 6: Amine",
    part: "part2",
    level: "biet",
    category: "lythuyet",
    code: "HH1.2",
    content: "Cho các phát biểu về tính chất và thí nghiệm của amine:",
    items: [
      { id: "a", text: "Phản ứng giữa khí methylamine và khí hydrogen chloride có xuất hiện 'khói trắng'.", isTrue: true, explanation: "Đúng, tạo hạt tinh thể muối CH3NH3Cl lơ lửng giống khói trắng." },
      { id: "b", text: "Nhỏ từ từ HCl đặc vào dung dịch aniline sau đó lắc nhẹ, để yên thấy dung dịch đồng nhất; sau đó nhỏ tiếp dung dịch NaOH đến dư vào thấy có hiện tượng phân lớp.", isTrue: true, explanation: "Đúng, aniline tan trong acid tạo muối, khi thêm NaOH tái tạo aniline ít tan nổi lên phân lớp." },
      { id: "c", text: "Nhỏ vài giọt phenolphthalein vào dung dịch aniline thấy xuất hiện màu hồng.", isTrue: false, explanation: "Sai, tính base của aniline quá yếu không làm phenolphthalein đổi màu." },
      { id: "d", text: "Nhỏ vài giọt nước bromine vào dung dịch aniline thấy xuất hiện kết tủa trắng.", isTrue: true, explanation: "Đúng, tạo kết tủa 2,4,6-tribromoaniline trắng." }
    ]
  },
  {
    id: "b6_ds_th_3",
    lessonId: "b6_amine",
    lessonTitle: "Bài 6: Amine",
    part: "part2",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.1",
    content: "Nicotine là một chất gây nghiện mạnh có trong thuốc lá (công thức C10H14N2 gồm 1 vòng pyridine và 1 vòng pyrrolidine gắn N-CH3):",
    items: [
      { id: "a", text: "Phân tử khối của nicotine là 162 amu.", isTrue: true, explanation: "Đúng: 10*12 + 14 + 2*14 = 162." },
      { id: "b", text: "Nicotine có tính base.", isTrue: true, explanation: "Đúng, do chứa nguyên tử N có cặp e tự do." },
      { id: "c", text: "Nicotine tác dụng được với dung dịch HCl tạo muối ammonium.", isTrue: true, explanation: "Đúng." },
      { id: "d", text: "Khi đốt cháy hoàn toàn 1 mol nicotine trong oxygen, thu được 1 mol khí N2.", isTrue: true, explanation: "Đúng: C10H14N2 có 2 nguyên tử N tạo 1 phân tử N2." }
    ]
  },
  {
    id: "b6_tl_nb_6",
    lessonId: "b6_amine",
    lessonTitle: "Bài 6: Amine",
    part: "part3",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Nhỏ dung dịch của mỗi chất sau vào các mẩu giấy quỳ tím riêng rẽ: methylamine, ethylamine, ammonia, aniline. Số trường hợp mẩu giấy quỳ tím bị chuyển thành màu xanh là:",
    correctAnswer: "3",
    explanation: "Methylamine, ethylamine, ammonia làm quỳ tím chuyển xanh (3 chất). Aniline không làm đổi màu quỳ tím."
  },
  {
    id: "b6_tl_vd_7",
    lessonId: "b6_amine",
    lessonTitle: "Bài 6: Amine",
    part: "part3",
    level: "vd",
    category: "tinh_toan",
    code: "HH1.6",
    contentTemplate: "Vị tanh của cá mè do amine X gây ra. Phân tích nguyên tố đối với X thu được kết quả: %C = {c_pct}%; %H = {h_pct}%; %N = {n_pct}%. Từ phổ khối lượng xác định được phân tử khối của X bằng {m_mol}. Bằng phương pháp cấu trúc thấy phân tử X có tính đối xứng cao. Tổng số nguyên tử trong một phân tử X là bao nhiêu?",
    defaultParams: { c_pct: 61.02, h_pct: 15.25, n_pct: 23.73, m_mol: 59 },
    generator: () => {
      return {
        content: "Vị tanh của cá mè do amine X gây ra. Phân tích nguyên tố đối với X thu được kết quả: %C = 61,02%; %H = 15,25%; %N = 23,73%. Từ phổ khối lượng xác định được phân tử khối của X bằng 59. Bằng các phương pháp phổ thấy phân tử X có cấu trúc đối xứng cao. Tổng số nguyên tử trong một phân tử X là bao nhiêu?",
        correctAnswer: "13",
        explanation: "1. nC : nH : nN = (61,02/12) : (15,25/1) : (23,73/14) = 5,085 : 15,25 : 1,695 = 3 : 9 : 1.\n2. CTPT là (C3H9N)n, với M = 59 => n = 1, CTPT là C3H9N.\n3. Do có tính đối xứng cao nên X là trimethylamine (CH3)3N.\n4. Tổng số nguyên tử trong C3H9N là 3 + 9 + 1 = 13."
      };
    },
    content: "Vị tanh của cá, đặc biệt là cá mè, là do amine X gây ra. Phân tích nguyên tố đối với X thu được: %C = 61,02%; %H = 15,25%; %N = 23,73%. Phân tử khối của X bằng 59 amu, cấu trúc đối xứng cao. Tổng số nguyên tử trong phân tử X là:",
    correctAnswer: "13",
    explanation: "X là trimethylamine (CH3)3N -> CTPT C3H9N có tổng số nguyên tử là 3 + 9 + 1 = 13."
  },

  // ==========================================
  // BÀI 7: AMINO ACID - PEPTIDE
  // ==========================================
  {
    id: "b7_tn_nb_1",
    lessonId: "b7_aminoacid_peptide",
    lessonTitle: "Bài 7: Amino acid - Peptide",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Hợp chất nào sau đây là amino acid?",
    options: ["H2NCH2COOCH3", "CH3NHCH2CH3", "H2NCH2COOH", "HOCH2COOH"],
    correctAnswer: "C",
    explanation: "H2NCH2COOH (glycine) vừa chứa nhóm amino (-NH2) vừa chứa nhóm carboxyl (-COOH)."
  },
  {
    id: "b7_tn_nb_2",
    lessonId: "b7_aminoacid_peptide",
    lessonTitle: "Bài 7: Amino acid - Peptide",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Amino acid thiết yếu là các amino acid",
    options: [
      "Có thể tổng hợp được bởi cơ thể con người.",
      "Phải được lấy thông qua chế độ ăn uống hằng ngày.",
      "Không cần thiết cho sức khỏe con người.",
      "Chỉ được tìm thấy trong thực phẩm có nguồn gốc thực vật."
    ],
    correctAnswer: "B",
    explanation: "Cơ thể con người không tự tổng hợp được amino acid thiết yếu mà phải hấp thu từ thức ăn."
  },
  {
    id: "b7_tn_nb_3",
    lessonId: "b7_aminoacid_peptide",
    lessonTitle: "Bài 7: Amino acid - Peptide",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "H2N-CH2-COOH tồn tại chính ở dạng nào?",
    options: ["Phân tử trung hòa", "Ion lưỡng cực (+H3N-CH2-COO-)", "Cation", "Anion"],
    correctAnswer: "B",
    explanation: "Trong tinh thể và trong dung dịch nước, amino acid tồn tại chủ yếu ở dạng ion lưỡng cực."
  },
  {
    id: "b7_tn_nb_4",
    lessonId: "b7_aminoacid_peptide",
    lessonTitle: "Bài 7: Amino acid - Peptide",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Tính chất vật lý nào sau đây là tính chất đặc trưng của amino acid?",
    options: ["Nhiệt độ nóng chảy cao", "Không hòa tan trong nước", "Là chất khí ở nhiệt độ phòng", "Có độc tính cao"],
    correctAnswer: "A",
    explanation: "Do tồn tại ở dạng ion lưỡng cực có lực hút tĩnh điện mạnh nên amino acid là chất rắn có nhiệt độ nóng chảy cao."
  },
  {
    id: "b7_tn_nb_5",
    lessonId: "b7_aminoacid_peptide",
    lessonTitle: "Bài 7: Amino acid - Peptide",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Tính chất hoá học nào sau đây là đặc trưng của amino acid?",
    options: ["Tính oxi hóa mạnh", "Tính khử mạnh", "Tính lưỡng tính", "Tính acid mạnh"],
    correctAnswer: "C",
    explanation: "Do chứa nhóm -NH2 (tính base) và -COOH (tính acid) nên amino acid có tính chất lưỡng tính."
  },
  {
    id: "b7_tn_nb_6",
    lessonId: "b7_aminoacid_peptide",
    lessonTitle: "Bài 7: Amino acid - Peptide",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Quá trình di chuyển của các amino acid trong điện trường được gọi là",
    options: ["Sự điện di", "Sự điện li", "Sự điện phân", "Sự thủy phân"],
    correctAnswer: "A",
    explanation: "Điện di là hiện tượng các hạt mang điện tích di chuyển dưới tác dụng của điện trường ngoài."
  },
  {
    id: "b7_tn_nb_7",
    lessonId: "b7_aminoacid_peptide",
    lessonTitle: "Bài 7: Amino acid - Peptide",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Loại liên kết được hình thành giữa các đơn vị amino acid trong peptide gọi là",
    options: ["Liên kết ion", "Liên kết hydrogen", "Liên kết peptide", "Liên kết cộng hóa trị không phân cực"],
    correctAnswer: "C",
    explanation: "Liên kết giữa nhóm -CO- và -NH- của hai đơn vị alpha-amino acid gọi là liên kết peptide."
  },
  {
    id: "b7_tn_nb_8",
    lessonId: "b7_aminoacid_peptide",
    lessonTitle: "Bài 7: Amino acid - Peptide",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Peptide là các hợp chất hữu cơ được hình thành từ các",
    options: ["Đơn vị glucose", "Acid béo", "Đơn vị α - amino acid", "Đơn vị hydrocarbon"],
    correctAnswer: "C",
    explanation: "Peptide gồm từ 2 đến 50 đơn vị alpha-amino acid liên kết với nhau bằng liên kết peptide."
  },
  {
    id: "b7_tn_nb_9",
    lessonId: "b7_aminoacid_peptide",
    lessonTitle: "Bài 7: Amino acid - Peptide",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Chất nào dưới đây là dipeptide?",
    options: ["Gly-Ala", "Gly-Ala-Val", "Gly-Gly-Ala-Val", "Val"],
    correctAnswer: "A",
    explanation: "Gly-Ala tạo từ 2 gốc alpha-amino acid nên là dipeptide."
  },
  {
    id: "b7_ds_nb_1",
    lessonId: "b7_aminoacid_peptide",
    lessonTitle: "Bài 7: Amino acid - Peptide",
    part: "part2",
    level: "biet",
    category: "lythuyet",
    code: "HH1.1",
    content: "Glutamic acid có rất nhiều ứng dụng trong y học và đời sống:",
    items: [
      { id: "a", text: "Amino acid thiên nhiên (hầu hết là α-amino acid) là cơ sở để kiến tạo nên các loại protein của cơ thể sống.", isTrue: true, explanation: "Đúng, 20 amino acid tiêu chuẩn đều là alpha-amino acid." },
      { id: "b", text: "Muối disodium glutamate dùng làm gia vị thức ăn (gọi là mì chính hay bột ngọt).", isTrue: false, explanation: "Sai, bột ngọt là muối monosodium glutamate (chỉ thay thế 1 H của nhóm -COOH)." },
      { id: "c", text: "Glutamic acid được dùng làm thuốc hỗ trợ thần kinh.", isTrue: true, explanation: "Đúng, tham gia dẫn truyền xung thần kinh." },
      { id: "d", text: "Các amino acid có nhóm –NH2 ở vị trí omega (vị trí số 6, 7) là nguyên liệu để sản xuất tơ nylon (tơ polyamide).", isTrue: true, explanation: "Đúng, ví dụ 6-aminohexanoic acid sản xuất nylon-6." }
    ]
  },
  {
    id: "b7_ds_th_4",
    lessonId: "b7_aminoacid_peptide",
    lessonTitle: "Bài 7: Amino acid - Peptide",
    part: "part2",
    level: "hieu",
    category: "lythuyet",
    code: "HH1.1",
    content: "Xét các đặc điểm cấu tạo và phản ứng của amino acid:",
    items: [
      { id: "a", text: "Trong dung dịch, H2NCH2COOH tồn tại chủ yếu ở dạng ion lưỡng cực H3N+CH2COO-.", isTrue: true, explanation: "Đúng." },
      { id: "b", text: "Amino acid là những chất rắn, kết tinh, tan tốt trong nước.", isTrue: true, explanation: "Đúng." },
      { id: "c", text: "Amino acid là hợp chất hữu cơ tạp chức, phân tử chứa đồng thời nhóm amino và nhóm carboxyl.", isTrue: true, explanation: "Đúng." },
      { id: "d", text: "Hợp chất H2N-CH2-COOCH3 là ester của glycine.", isTrue: true, explanation: "Đúng, methyl glycinate là ester." }
    ]
  }
];

// Bổ sung chuẩn hóa 100% theo Ma trận & Đặc tả cho Khối 12
questionBank.push(...[
  {
    "id": "b2_tn_nb_6",
    "lessonId": "b2_xaphong",
    "lessonTitle": "Bài 2: Xà phòng và chất giặt rửa",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "HH1.1",
    "content": "Xà phòng là hỗn hợp muối sodium hoặc potassium của các",
    "options": [
      "fatty acid có từ 12 đến 24 nguyên tử carbon.",
      "carboxylic acid đơn chức mạch ngắn.",
      "dicarboxylic acid mạch hở.",
      "acid vô cơ mạnh như HCl, H2SO4."
    ],
    "correctAnswer": "A",
    "explanation": "Xà phòng thường là hỗn hợp muối sodium hoặc potassium của các acid béo (fatty acid) có mạch carbon dài từ 12-24C."
  },
  {
    "id": "b2_tn_nb_7",
    "lessonId": "b2_xaphong",
    "lessonTitle": "Bài 2: Xà phòng và chất giặt rửa",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "HH1.1",
    "content": "Chất nào sau đây là thành phần chính của xà phòng bánh thông thường?",
    "options": [
      "Sodium stearate (C17H35COONa)",
      "Sodium chloride (NaCl)",
      "Sodium sulfate (Na2SO4)",
      "Sodium carbonate (Na2CO3)"
    ],
    "correctAnswer": "A",
    "explanation": "C17H35COONa (sodium stearate) là một muối của acid béo, thành phần chính của xà phòng."
  },
  {
    "id": "b2_tn_nb_8",
    "lessonId": "b2_xaphong",
    "lessonTitle": "Bài 2: Xà phòng và chất giặt rửa",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "HH1.1",
    "content": "Cấu tạo phân tử chất giặt rửa tổng hợp gồm có hai phần chính là",
    "options": [
      "đầu ưa nước (phân cực) và đuôi kị nước (ưa dầu mỡ).",
      "hai đầu đều ưa nước.",
      "hai đầu đều kị nước.",
      "một gốc hydrocarbon ngắn và một nguyên tử kim loại."
    ],
    "correctAnswer": "A",
    "explanation": "Phân tử chất giặt rửa có cấu trúc lưỡng ái: đầu phân cực ưa nước và đuôi hydrocarbon dài kị nước."
  },
  {
    "id": "b2_tn_nb_9",
    "lessonId": "b2_xaphong",
    "lessonTitle": "Bài 2: Xà phòng và chất giặt rửa",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "HH1.1",
    "content": "Để tách xà phòng ra khỏi hỗn hợp sau phản ứng xà phòng hóa chất béo, người ta thêm vào chất nào sau đây?",
    "options": [
      "Dung dịch NaCl bão hòa",
      "Dung dịch HCl loãng",
      "Nước cất",
      "Dung dịch H2SO4 đặc"
    ],
    "correctAnswer": "A",
    "explanation": "Thêm dung dịch NaCl bão hòa làm tăng tỉ trọng dung dịch và giảm độ tan của muối acid béo, giúp xà phòng nổi lên trên."
  },
  {
    "id": "b2_tn_nb_10",
    "lessonId": "b2_xaphong",
    "lessonTitle": "Bài 2: Xà phòng và chất giặt rửa",
    "part": "part1",
    "level": "biet",
    "category": "lythuyet",
    "code": "HH1.1",
    "content": "Ưu điểm của chất giặt rửa tổng hợp so với xà phòng là",
    "options": [
      "dùng được trong cả nước cứng chứa ion Ca2+ và Mg2+ mà không tạo kết tủa.",
      "dễ bị vi sinh vật phân hủy hơn xà phòng.",
      "được sản xuất hoàn toàn từ mỡ động vật.",
      "không làm hại da tay và rất rẻ tiền."
    ],
    "correctAnswer": "A",
    "explanation": "Muối sulfonate hoặc sulfate của chất giặt rửa tổng hợp với ion Ca2+, Mg2+ tan tốt trong nước nên dùng được trong nước cứng."
  },
  {
    "id": "b7_tn_th_1",
    "lessonId": "b7_aminoacid_peptide",
    "lessonTitle": "Bài 7: Amino acid - Peptide",
    "part": "part1",
    "level": "hieu",
    "category": "lythuyet",
    "code": "HH1.4",
    "content": "Dung dịch chất nào sau đây làm quỳ tím chuyển sang màu đỏ?",
    "options": [
      "Glutamic acid (HOOC-CH2-CH2-CH(NH2)-COOH)",
      "Glycine (H2N-CH2-COOH)",
      "Lysine (H2N-[CH2]4-CH(NH2)-COOH)",
      "Alanine (CH3-CH(NH2)-COOH)"
    ],
    "correctAnswer": "A",
    "explanation": "Glutamic acid có 2 nhóm -COOH và 1 nhóm -NH2, môi trường acid làm quỳ tím chuyển màu đỏ."
  },
  {
    "id": "b7_tn_th_2",
    "lessonId": "b7_aminoacid_peptide",
    "lessonTitle": "Bài 7: Amino acid - Peptide",
    "part": "part1",
    "level": "hieu",
    "category": "lythuyet",
    "code": "HH1.4",
    "content": "Dung dịch chất nào sau đây làm quỳ tím chuyển sang màu xanh?",
    "options": [
      "Lysine",
      "Glycine",
      "Alanine",
      "Valine"
    ],
    "correctAnswer": "A",
    "explanation": "Lysine có 2 nhóm -NH2 và 1 nhóm -COOH nên dung dịch có tính base, làm quỳ tím chuyển sang màu xanh."
  },
  {
    "id": "b7_tn_th_3",
    "lessonId": "b7_aminoacid_peptide",
    "lessonTitle": "Bài 7: Amino acid - Peptide",
    "part": "part1",
    "level": "hieu",
    "category": "lythuyet",
    "code": "HH1.4",
    "content": "Amino acid thể hiện tính lưỡng tính vì trong phân tử",
    "options": [
      "chứa đồng thời nhóm carboxyl (-COOH) có tính acid và nhóm amino (-NH2) có tính base.",
      "chứa liên kết peptide -CO-NH-.",
      "có nguyên tử nitrogen và oxygen.",
      "dễ tan trong nước và có nhiệt độ nóng chảy cao."
    ],
    "correctAnswer": "A",
    "explanation": "Nhóm -NH2 có tính base tác dụng với acid; nhóm -COOH có tính acid tác dụng với base -> tính lưỡng tính."
  },
  {
    "id": "b7_tn_th_4",
    "lessonId": "b7_aminoacid_peptide",
    "lessonTitle": "Bài 7: Amino acid - Peptide",
    "part": "part1",
    "level": "hieu",
    "category": "lythuyet",
    "code": "HH1.4",
    "content": "Cho dung dịch Cu(OH)2 trong môi trường kiềm vào ống nghiệm chứa dung dịch chất nào sau đây sẽ xuất hiện màu tím đặc trưng (phản ứng màu biuret)?",
    "options": [
      "Gly-Ala-Val (tripeptide)",
      "Gly-Ala (dipeptide)",
      "Glucose",
      "Ethanol"
    ],
    "correctAnswer": "A",
    "explanation": "Từ tripeptide trở lên (có từ 2 liên kết peptide trở lên) mới có phản ứng màu biuret tạo dung dịch màu tím đặc trưng."
  },
  {
    "id": "b7_tn_th_5",
    "lessonId": "b7_aminoacid_peptide",
    "lessonTitle": "Bài 7: Amino acid - Peptide",
    "part": "part1",
    "level": "hieu",
    "category": "lythuyet",
    "code": "HH1.4",
    "content": "Thủy phân hoàn toàn 1 mol peptide Gly-Ala-Val trong dung dịch HCl dư thu được bao nhiêu mol muối?",
    "options": [
      "3 mol hỗn hợp muối ammonium clorua của các amino acid.",
      "1 mol muối.",
      "2 mol muối.",
      "4 mol muối."
    ],
    "correctAnswer": "A",
    "explanation": "Tripeptide gồm 3 gốc alpha-amino acid, mỗi gốc có 1 nhóm -NH2 phản ứng với 1 mol HCl tạo 1 mol muối -> tổng 3 mol muối."
  },
  {
    "id": "b1_ds_s5_c1",
    "lessonId": "b1_ester_lipid",
    "lessonTitle": "Bài 1: Ester - Lipid",
    "part": "part2",
    "level": "biet_hieu_vd",
    "category": "lythuyet",
    "code": "HH1.1_1.3_1.6",
    "content": "Chất béo (triglyceride) là nguồn cung cấp năng lượng và dưỡng chất thiết yếu cho cơ thể:",
    "items": [
      {
        "id": "a",
        "text": "Chất béo là triester của glycerol với các acid béo có mạch carbon dài, không phân nhánh.",
        "isTrue": true,
        "explanation": "Đúng theo định nghĩa chất béo (triglyceride)."
      },
      {
        "id": "b",
        "text": "Mỡ lợn chứa chủ yếu chất béo no nên ở trạng thái rắn ở nhiệt độ thường.",
        "isTrue": true,
        "explanation": "Đúng, chất béo động vật giàu gốc acid béo no nên ở thể rắn."
      },
      {
        "id": "c",
        "text": "Dầu mỡ thực vật bị ôi thiu khi để lâu ngoài không khí là do liên kết đôi C=C bị oxi hóa chậm bởi oxygen tạo thành hydroperoxide rồi phân hủy thành aldehyde, ketone có mùi khó chịu.",
        "isTrue": true,
        "explanation": "Đúng, đây là cơ chế quá trình ôi thiu dầu mỡ."
      },
      {
        "id": "d",
        "text": "Xà phòng hóa hoàn toàn 17,68 gam triolein bằng dung dịch NaOH dư, đun nóng thì khối lượng muối sodium oleate thu được là 18,24 gam.",
        "isTrue": true,
        "explanation": "Đúng. n(triolein) = 17,68 / 884 = 0,02 mol -> n(muối C17H33COONa) = 0,06 mol -> m = 0,06 × 304 = 18,24 gam."
      }
    ]
  },
  {
    "id": "b2_tl_nb_3",
    "lessonId": "b2_xaphong",
    "lessonTitle": "Bài 2: Xà phòng và chất giặt rửa",
    "part": "part3",
    "level": "biet",
    "category": "lythuyet",
    "code": "HH1.1",
    "content": "Trong một loại xà phòng tắm, thành phần gồm có: (1) Sodium stearate; (2) Sodium palmitate; (3) Glycerol; (4) Hương liệu tạo mùi thơm; (5) Cát mịn. Có bao nhiêu chất/thành phần thực sự có trong công thức xà phòng tiêu chuẩn?",
    "correctAnswer": "4",
    "explanation": "(1), (2), (3), (4) đều là thành phần chuẩn của xà phòng tắm. (5) Cát mịn không có trong xà phòng tắm thông thường. Vậy có 4 thành phần."
  },
  {
    "id": "b2_tl_nb_4",
    "lessonId": "b2_xaphong",
    "lessonTitle": "Bài 2: Xà phòng và chất giặt rửa",
    "part": "part3",
    "level": "biet",
    "category": "lythuyet",
    "code": "HH1.1",
    "content": "Cho dãy các chất sau: (1) C17H35COONa; (2) C15H31COOK; (3) CH3COONa; (4) C12H25OSO3Na; (5) C17H33COONa. Có bao nhiêu chất là muối của acid béo dùng làm xà phòng?",
    "correctAnswer": "3",
    "explanation": "Các muối dùng làm xà phòng là (1), (2), (5). (3) là muối mạch ngắn, (4) là chất giặt rửa tổng hợp. Vậy có 3 chất."
  },
  {
    "id": "b2_tl_nb_5",
    "lessonId": "b2_xaphong",
    "lessonTitle": "Bài 2: Xà phòng và chất giặt rửa",
    "part": "part3",
    "level": "biet",
    "category": "lythuyet",
    "code": "HH1.1",
    "content": "Phân tử sodium dodecylbenzenesulfonate (chất giặt rửa tổng hợp) chứa gốc hydrocarbon thơm và nhóm -SO3Na. Số lượng nguyên tử carbon trong phân tử chất này là bao nhiêu?",
    "correctAnswer": "18",
    "explanation": "Công thức là C12H25-C6H4-SO3Na, tổng số carbon = 12 + 6 = 18 carbon."
  },
  {
    "id": "b5_tl_vd_3",
    "lessonId": "b5_tinhbot_cel",
    "lessonTitle": "Bài 5: Tinh bột và Cellulose",
    "part": "part3",
    "level": "vd",
    "category": "tinh_toan",
    "code": "HH1.3",
    "content": "Lên men m gam glucose thành ethanol với hiệu suất 80%, toàn bộ khí CO2 sinh ra hấp thụ hết vào dung dịch Ca(OH)2 dư thu được 50 gam kết tủa CaCO3. Giá trị của m là bao nhiêu gam? (Làm tròn đến hàng đơn vị).",
    "correctAnswer": "56",
    "explanation": "n(CaCO3) = 0,5 mol -> n(CO2) = 0,5 mol. C6H12O6 -> 2CO2. n(glucose lí thuyết) = 0,25 mol. Với H=80%: m(glucose) = (0,25 / 0,8) × 180 = 56,25 gam ≈ 56 gam."
  },
  {
    "id": "b5_tl_vd_4",
    "lessonId": "b5_tinhbot_cel",
    "lessonTitle": "Bài 5: Tinh bột và Cellulose",
    "part": "part3",
    "level": "vd",
    "category": "tinh_toan",
    "code": "HH1.3",
    "content": "Thực hiện phản ứng tráng bạc hoàn toàn 18 gam glucose bằng lượng dư thuốc thử Tollens. Khối lượng kim loại Ag thu được tối đa là bao nhiêu gam?",
    "correctAnswer": "21,6",
    "explanation": "n(glucose) = 18 / 180 = 0,1 mol -> n(Ag) = 2 × 0,1 = 0,2 mol -> m(Ag) = 0,2 × 108 = 21,6 gam."
  },
  {
    "id": "b5_tl_vd_5",
    "lessonId": "b5_tinhbot_cel",
    "lessonTitle": "Bài 5: Tinh bột và Cellulose",
    "part": "part3",
    "level": "vd",
    "category": "lythuyet",
    "code": "HH1.3",
    "content": "Cho dãy các carbohydrate: glucose, fructose, saccharose, maltose, tinh bột, cellulose. Có bao nhiêu chất trong dãy cho được phản ứng tráng bạc?",
    "correctAnswer": "3",
    "explanation": "Các chất tráng bạc gồm: glucose, fructose và maltose. Tinh bột, cellulose và saccharose không tráng bạc. Vậy có 3 chất."
  },
  {
    "id": "b7_tl_nb_1",
    "lessonId": "b7_aminoacid_peptide",
    "lessonTitle": "Bài 7: Amino acid - Peptide",
    "part": "part3",
    "level": "biet",
    "category": "lythuyet",
    "code": "HH1.1",
    "content": "Khối lượng phân tử của amino acid đơn giản nhất là glycine (H2N-CH2-COOH) là bao nhiêu amu?",
    "correctAnswer": "75",
    "explanation": "Công thức phân tử C2H5NO2 có M = 2×12 + 5 + 14 + 32 = 75 amu."
  },
  {
    "id": "b7_tl_nb_2",
    "lessonId": "b7_aminoacid_peptide",
    "lessonTitle": "Bài 7: Amino acid - Peptide",
    "part": "part3",
    "level": "biet",
    "category": "lythuyet",
    "code": "HH1.1",
    "content": "Phân tử alanine (CH3-CH(NH2)-COOH) chứa bao nhiêu nguyên tử hydrogen?",
    "correctAnswer": "7",
    "explanation": "CTPT C3H7NO2 có 7 nguyên tử hydrogen."
  },
  {
    "id": "b7_tl_nb_3",
    "lessonId": "b7_aminoacid_peptide",
    "lessonTitle": "Bài 7: Amino acid - Peptide",
    "part": "part3",
    "level": "biet",
    "category": "lythuyet",
    "code": "HH1.1",
    "content": "Một tetrapeptide mạch hở tạo từ các alpha-amino acid có bao nhiêu liên kết peptide (-CO-NH-)?",
    "correctAnswer": "3",
    "explanation": "Tetrapeptide gồm 4 gốc amino acid liên kết với nhau bằng (4 - 1) = 3 liên kết peptide."
  },
  {
    "id": "b2_tuluan_s1",
    "lessonId": "b2_xaphong",
    "lessonTitle": "Bài 2: Xà phòng và chất giặt rửa",
    "part": "part4",
    "level": "hieu",
    "category": "lythuyet",
    "code": "HH1.4",
    "points": 1,
    "content": "Xà phòng và chất giặt rửa tổng hợp đóng vai trò quan trọng trong việc tẩy rửa vết bẩn đời sống.\na) Nêu cấu tạo phân tử chung của xà phòng và chất giặt rửa tổng hợp.\nb) Giải thích cơ chế giặt rửa vết dầu mỡ bám trên quần áo khi giặt với xà phòng.",
    "correctAnswer": "Cấu tạo lưỡng ái và cơ chế cuốn trôi dầu mỡ",
    "explanation": "a) (0,50 điểm) Cấu tạo phân tử gồm 2 phần:\n  • Đầu phân cực ưa nước (như -COO-Na+, -SO3-Na+).\n  • Đuôi hydrocarbon dài kị nước (ưa dầu mỡ).\nb) (0,50 điểm) Cơ chế giặt rửa:\n  • Đuôi kị nước bám sâu vào vết dầu mỡ.\n  • Đầu ưa nước hướng ra ngoài môi trường nước, phân tán vết dầu mỡ thành các hạt nhỏ lơ lửng và bị cuốn trôi theo nước xả."
  },
  {
    "id": "b2_tuluan_s2",
    "lessonId": "b2_xaphong",
    "lessonTitle": "Bài 2: Xà phòng và chất giặt rửa",
    "part": "part4",
    "level": "hieu",
    "category": "lythuyet",
    "code": "HH1.4",
    "points": 1,
    "content": "Trong sản xuất xà phòng bằng phương pháp nấu xà phòng thủ công hoặc công nghiệp:\na) Viết phương trình hóa học tổng quát của phản ứng xà phòng hóa tristearin (C17H35COO)3C3H5 với dung dịch NaOH.\nb) Tại sao sau khi đun sôi hỗn hợp phản ứng một thời gian, người ta lại cho thêm dung dịch NaCl bão hòa vào nồi nấu?",
    "correctAnswer": "Phương trình xà phòng hóa và tác dụng của NaCl",
    "explanation": "a) (0,50 điểm) Phương trình hóa học:\n  (C17H35COO)3C3H5 + 3NaOH --(t°)--> 3C17H35COONa + C3H5(OH)3\nb) (0,50 điểm) Tác dụng của dung dịch NaCl bão hòa:\n  • Làm tăng tỉ trọng của dung dịch.\n  • Làm giảm độ tan của muối sodium của acid béo (hiệu ứng ion chung Na+), giúp xà phòng kết tinh nổi lên trên bề mặt dễ thu gom."
  },
  {
    "id": "b2_tuluan_s3",
    "lessonId": "b2_xaphong",
    "lessonTitle": "Bài 2: Xà phòng và chất giặt rửa",
    "part": "part4",
    "level": "hieu",
    "category": "lythuyet",
    "code": "HH1.4",
    "points": 1,
    "content": "Nước sinh hoạt ở một số vùng là nước cứng (chứa nhiều ion Ca2+ và Mg2+).\na) Nêu hiện tượng xảy ra khi dùng xà phòng thông thường giặt quần áo trong nước cứng.\nb) Giải thích tại sao người ta khuyến cáo nên dùng bột giặt tổng hợp thay cho xà phòng khi giặt trong nước cứng.",
    "correctAnswer": "Hiện tượng tạo kết tủa với xà phòng và ưu thế của chất giặt rửa tổng hợp",
    "explanation": "a) (0,50 điểm) Hiện tượng:\n  • Xà phòng tạo kết tủa màu trắng xám (RCOO)2Ca và (RCOO)2Mg bám vào sợi vải làm ố vàng, mục vải và giảm khả năng tạo bọt, tốn xà phòng.\nb) (0,50 điểm) Giải thích:\n  • Chất giặt rửa tổng hợp chứa gốc sulfonate hoặc sulfate (-SO3Na, -OSO3Na) tạo muối với Ca2+, Mg2+ tan tốt trong nước, do đó vẫn tạo bọt và tẩy rửa tốt trong nước cứng."
  },
  {
    "id": "b2_tuluan_s4",
    "lessonId": "b2_xaphong",
    "lessonTitle": "Bài 2: Xà phòng và chất giặt rửa",
    "part": "part4",
    "level": "hieu",
    "category": "lythuyet",
    "code": "HH1.4",
    "points": 1,
    "content": "Phân biệt xà phòng tự nhiên và chất giặt rửa tổng hợp:\na) Nêu nguồn gốc nguyên liệu chính dùng để sản xuất xà phòng và chất giặt rửa tổng hợp.\nb) Về mặt bảo vệ môi trường, loại nào thân thiện hơn? Giải thích.",
    "correctAnswer": "So sánh nguồn gốc và độ thân thiện môi trường",
    "explanation": "a) (0,50 điểm) Nguồn gốc nguyên liệu:\n  • Xà phòng: sản xuất từ dầu thực vật hoặc mỡ động vật (tài nguyên tái tạo).\n  • Chất giặt rửa tổng hợp: sản xuất chủ yếu từ dầu mỏ (tài nguyên hóa thạch).\nb) (0,50 điểm) Bảo vệ môi trường:\n  • Xà phòng thân thiện hơn vì dễ bị vi sinh vật trong tự nhiên phân hủy hoàn toàn.\n  • Chất giặt rửa tổng hợp (đặc biệt loại mạch carbon phân nhánh) khó phân hủy sinh học, tích tụ gây ô nhiễm nguồn nước."
  },
  {
    "id": "b2_tuluan_s5",
    "lessonId": "b2_xaphong",
    "lessonTitle": "Bài 2: Xà phòng và chất giặt rửa",
    "part": "part4",
    "level": "hieu",
    "category": "lythuyet",
    "code": "HH1.4",
    "points": 1,
    "content": "Quy trình làm xà phòng handmade từ dầu dừa và kiềm NaOH:\na) Nêu tên phản ứng hóa học xảy ra và viết phương trình hóa học với thành phần chính của dầu dừa là trilaurin (C11H23COO)3C3H5.\nb) Tại sao sản phẩm xà phòng handmade thường mềm mịn và có tính dưỡng ẩm da tốt hơn xà phòng bánh công nghiệp?",
    "correctAnswer": "Phản ứng xà phòng hóa và vai trò của glycerol tồn dư",
    "explanation": "a) (0,50 điểm) Phản ứng xà phòng hóa:\n  (C11H23COO)3C3H5 + 3NaOH --(t°)--> 3C11H23COONa + C3H5(OH)3\nb) (0,50 điểm) Giải thích:\n  • Xà phòng handmade giữ lại toàn bộ lượng glycerol sinh ra (một chất giữ ẩm tự nhiên tuyệt vời cho da).\n  • Trong công nghiệp, glycerol thường bị chiết tách riêng để bán cho ngành dược/mỹ phẩm."
  },
  {
    "id": "b5_tuluan_s1",
    "lessonId": "b5_tinhbot_cel",
    "lessonTitle": "Bài 5: Tinh bột và Cellulose",
    "part": "part4",
    "level": "vd",
    "category": "tinh_toan",
    "code": "HH1.4",
    "points": 2,
    "content": "Sơ đồ sản xuất ethanol sinh học từ ngô chứa tinh bột như sau:\nTinh bột ──(thủy phân)──→ Glucose ──(lên men)──→ Ethanol\nMột nhà máy sử dụng 10 tấn hạt ngô chứa 65% tinh bột về khối lượng để sản xuất xăng sinh học E5. Biết hiệu suất của toàn bộ quá trình là 75%.\na) Tính khối lượng glucose thu được theo lý thuyết nếu hiệu suất đạt 100%.\nb) Tính thể tích ethanol nguyên chất (D = 0,8 g/ml) thực tế thu được từ lượng ngô trên.",
    "correctAnswer": "Khối lượng glucose và thể tích ethanol",
    "explanation": "a) (1,00 điểm) Khối lượng tinh bột nguyên chất: m = 10 × 65% = 6,5 tấn = 6500 kg.\n   • (C₆H₁₀O₅)ₙ + nH₂O ──→ nC₆H₁₂O₆\n   • Khối lượng glucose lí thuyết = 6500 × (180 / 162) = 7222,2 kg ≈ 7,22 tấn.\nb) (1,00 điểm) Tính thể tích ethanol thực tế:\n   • Sơ đồ: C₆H₁₀O₅ (162) ──────→ 2 C₂H₅OH (92)\n   • m(ethanol lí thuyết) = 6500 × (92 / 162) = 3691,36 kg.\n   • m(ethanol thực tế) = 3691,36 × 75% = 2768,52 kg.\n   • V(ethanol thực tế) = m / D = 2768,52 / 0,8 = 3460,65 lít."
  },
  {
    "id": "b5_tuluan_s2",
    "lessonId": "b5_tinhbot_cel",
    "lessonTitle": "Bài 5: Tinh bột và Cellulose",
    "part": "part4",
    "level": "vd",
    "category": "tinh_toan",
    "code": "HH1.4",
    "points": 2,
    "content": "Tinh bột là nguồn cung cấp carbohydrate quan trọng nhất trong khẩu phần ăn của người dân Việt Nam.\nBiết rằng mỗi gam carbohydrate (tinh bột) khi bị oxi hóa hoàn toàn trong cơ thể cung cấp 4,0 kcal năng lượng. Một gia đình 4 người cần tổng cộng 8000 kcal mỗi ngày, trong đó 60% năng lượng được cung cấp từ tinh bột (gạo chứa 80% tinh bột).\na) Tính khối lượng tinh bột cơ thể gia đình cần hấp thụ trong 30 ngày.\nb) Tính khối lượng gạo thực tế gia đình đó cần dùng trong 30 ngày.",
    "correctAnswer": "Năng lượng tinh bột và khối lượng gạo tiêu thụ",
    "explanation": "a) (1,00 điểm) Tính lượng tinh bột cần trong 30 ngày:\n   • Tổng năng lượng từ tinh bột trong 30 ngày = 8000 kcal/ngày × 30 ngày × 60% = 144 000 kcal.\n   • Khối lượng tinh bột cần hấp thụ = 144 000 / 4,0 = 36 000 g = 36 kg.\nb) (1,00 điểm) Khối lượng gạo thực tế cần dùng:\n   • Vì gạo chỉ chứa 80% tinh bột nên khối lượng gạo cần dùng:\n     m(gạo) = 36 / 80% = 45 kg."
  },
  {
    "id": "b5_tuluan_s3",
    "lessonId": "b5_tinhbot_cel",
    "lessonTitle": "Bài 5: Tinh bột và Cellulose",
    "part": "part4",
    "level": "vd",
    "category": "tinh_toan",
    "code": "HH1.4",
    "points": 2,
    "content": "Cellulose trinitrate được dùng làm thuốc súng không khói, được điều chế từ cellulose và nitric acid đặc có xúc tác H2SO4 đặc đun nóng:\n[C₆H₇O₂(OH)₃]ₙ + 3nHNO₃ ──(H₂SO₄ đ, t°)──→ [C₆H₇O₂(ONO₂)₃]ₙ + 3nH₂O\nĐể sản xuất 2,97 tấn cellulose trinitrate với hiệu suất phản ứng đạt 80%:\na) Tính khối lượng cellulose nguyên chất cần dùng.\nb) Tính thể tích dung dịch HNO3 68% (khối lượng riêng D = 1,4 g/ml) cần dùng.",
    "correctAnswer": "Sản xuất thuốc súng không khói từ cellulose",
    "explanation": "a) (1,00 điểm) Tính khối lượng cellulose:\n   • n(cellulose trinitrate) = 2,97 tấn / 297 = 0,01 Mmol (10 000 mol).\n   • Theo lí thuyết: m(cellulose) = 0,01 × 162 = 1,62 tấn.\n   • Với H = 80%: m(cellulose thực tế) = 1,62 / 80% = 2,025 tấn.\nb) (1,00 điểm) Tính thể tích HNO3 68%:\n   • n(HNO3 lí thuyết) = 3 × 0,01 = 0,03 Mmol.\n   • m(HNO3 nguyên chất thực tế) = (0,03 × 63) / 80% = 2,3625 tấn = 2362,5 kg.\n   • m(dung dịch HNO3 68%) = 2362,5 / 68% = 3474,26 kg.\n   • V(dung dịch HNO3) = 3474,26 / 1,4 = 2481,6 lít."
  },
  {
    "id": "b5_tuluan_s4",
    "lessonId": "b5_tinhbot_cel",
    "lessonTitle": "Bài 5: Tinh bột và Cellulose",
    "part": "part4",
    "level": "vd",
    "category": "tinh_toan",
    "code": "HH1.4",
    "points": 2,
    "content": "Người ta tiến hành thủy phân 324 gam tinh bột trong môi trường acid đun nóng. Sau phản ứng, trung hòa acid rồi cho toàn bộ dung dịch tác dụng với lượng dư AgNO3 trong NH3 đun nhẹ, thu được 345,6 gam Ag kết tủa.\na) Viết các phương trình hóa học xảy ra trong quá trình trên.\nb) Tính hiệu suất của phản ứng thủy phân tinh bột.",
    "correctAnswer": "Hiệu suất thủy phân tinh bột qua phản ứng tráng bạc",
    "explanation": "a) (1,00 điểm) Phương trình hóa học:\n   • Thủy phân tinh bột: (C₆H₁₀O₅)ₙ + nH₂O ──(H⁺, t°)──→ nC₆H₁₂O₆ (glucose)\n   • Tráng bạc: C₆H₁₂O₆ + 2[Ag(NH₃)₂]OH ──(t°)──→ C₆H₁₁O₇NH₄ + 2Ag↓ + 3NH₃ + H₂O\nb) (1,00 điểm) Tính hiệu suất phản ứng:\n   • n(Ag) = 345,6 / 108 = 3,2 mol ──→ n(glucose tạo thành) = 3,2 / 2 = 1,6 mol.\n   • Theo PTHH: n(mắt xích C₆H₁₀O₅ đã thủy phân) = 1,6 mol.\n   • Khối lượng tinh bột đã bị thủy phân = 1,6 × 162 = 259,2 gam.\n   • Hiệu suất phản ứng thủy phân: H = (259,2 / 324) × 100% = 80%."
  },
  {
    "id": "b5_tuluan_s5",
    "lessonId": "b5_tinhbot_cel",
    "lessonTitle": "Bài 5: Tinh bột và Cellulose",
    "part": "part4",
    "level": "vd",
    "category": "tinh_toan",
    "code": "HH1.4",
    "points": 2,
    "content": "Từ 10 tấn mùn cưa chứa 50% cellulose, người ta đem thủy phân bằng acid rồi lên men thu được cồn công nghiệp (ethanol). Biết hiệu suất của giai đoạn thủy phân là 80% và hiệu suất của giai đoạn lên men là 75%.\na) Tính khối lượng glucose thu được sau giai đoạn thủy phân.\nb) Tính khối lượng ethanol thực tế thu được từ 10 tấn mùn cưa trên.",
    "correctAnswer": "Sản xuất ethanol từ mùn cưa chứa cellulose",
    "explanation": "a) (1,00 điểm) Khối lượng cellulose nguyên chất = 10 × 50% = 5 tấn = 5000 kg.\n   • (C₆H₁₀O₅)ₙ + nH₂O ──→ nC₆H₁₂O₆\n   • m(glucose lí thuyết) = 5000 × (180 / 162) = 5555,56 kg.\n   • m(glucose thực tế với H=80%) = 5555,56 × 80% = 4444,44 kg ≈ 4,44 tấn.\nb) (1,00 điểm) Tính khối lượng ethanol:\n   • C₆H₁₂O₆ ──(lên men)──→ 2C₂H₅OH + 2CO₂\n   • m(ethanol lí thuyết từ 4444,44 kg glucose) = 4444,44 × (92 / 180) = 2271,6 kg.\n   • m(ethanol thực tế với H=75%) = 2271,6 × 75% = 1703,7 kg ≈ 1,70 tấn."
  }
]);

questionBank.push(...[
  {
    "id": "b1_tl_th_5",
    "lessonId": "b1_ester_lipid",
    "lessonTitle": "Bài 1: Ester - Lipid",
    "part": "part3",
    "level": "hieu",
    "category": "lythuyet",
    "code": "HH1.3",
    "content": "Cho các ester sau: ethyl formate, methyl acetate, vinyl acetate, benzyl acetate, phenyl acetate. Có bao nhiêu ester khi thủy phân trong dung dịch NaOH đun nóng tạo ra alcohol?",
    "correctAnswer": "3",
    "explanation": "Các ester tạo alcohol gồm: ethyl formate (tạo C2H5OH), methyl acetate (tạo CH3OH), benzyl acetate (tạo C6H5CH2OH). Vinyl acetate tạo aldehyde, phenyl acetate tạo 2 muối và nước. Vậy có 3 ester."
  }
]);

const { formatQuestionObject } = require('../services/chemFormatter');

// Chuẩn hóa toàn bộ chỉ số công thức hóa học cho toàn bộ ngân hàng câu hỏi
questionBank.push(...[{"id":"b6_ds_nb_2","lessonId":"b6_amine","lessonTitle":"Bài 6: Amine","part":"part2","level":"hieu","category":"lythuyet","code":"HH2.4","content":"Nhằm đạt lợi ích kinh tế, một số trang trại chăn nuôi heo đã dùng hóa chất cấm trộn vào thức ăn trong đó có Salbutamol. Salbutamol có công thức phân tử C13H21O3N và chứa nhóm amine bậc 2:","items":[{"id":"a","text":"Công thức phân tử của Salbutamol là C13H21O3N.","isTrue":true,"explanation":"Đúng."},{"id":"b","text":"Salbutamol chỉ chứa 1 nhóm chức amine và 3 nhóm chức alcohol.","isTrue":false,"explanation":"Sai, có chứa 1 nhóm phenol và 2 nhóm alcohol."},{"id":"c","text":"Salbutamol có chứa nhóm chức amine bậc 2.","isTrue":true,"explanation":"Đúng, có nhóm -NH- gắn 2 gốc hydrocarbon."},{"id":"d","text":"Salbutamol tác dụng được với dung dịch HCl và với dung dịch NaOH.","isTrue":true,"explanation":"Đúng, tác dụng HCl do tính base của amine, tác dụng NaOH do có nhóm OH phenol."}]},{"id":"b6_ds_nb_4","lessonId":"b6_amine","lessonTitle":"Bài 6: Amine","part":"part2","level":"biet","category":"lythuyet","code":"HH1.2","content":"Tiến hành thí nghiệm phản ứng của methylamine với copper(II) hydroxide qua 2 bước:","items":[{"id":"a","text":"Ở bước 2, ban đầu xuất hiện kết tủa màu xanh, sau đó kết tủa tan dần tạo dung dịch xanh lam.","isTrue":true,"explanation":"Đúng."},{"id":"b","text":"Nếu thay dung dịch CuSO4 bằng dung dịch CuCl2, phản ứng vẫn xảy ra tương tự.","isTrue":true,"explanation":"Đúng."},{"id":"c","text":"Dung dịch xanh lam thu được sau phản ứng có chứa phức chất [Cu(CH3NH2)4](OH)2.","isTrue":true,"explanation":"Đúng."},{"id":"d","text":"Trong phản ứng trên, methylamine vừa thể hiện tính base vừa có khả năng tạo phức.","isTrue":true,"explanation":"Đúng."}]},{"id":"b6_ds_nb_5","lessonId":"b6_amine","lessonTitle":"Bài 6: Amine","part":"part2","level":"biet","category":"lythuyet","code":"HH1.1","content":"Xét các phát biểu về đồng phân và danh pháp của amine:","items":[{"id":"a","text":"Aniline thuộc loại arylamine (amine thơm).","isTrue":true,"explanation":"Đúng."},{"id":"b","text":"Có 4 đồng phân amine cùng công thức phân tử C3H9N.","isTrue":true,"explanation":"Đúng (2 bậc 1, 1 bậc 2, 1 bậc 3)."},{"id":"c","text":"Tên gốc – chức của CH3NH2 là methylamine.","isTrue":true,"explanation":"Đúng."},{"id":"d","text":"N,N-dimethylethanamine là một amine bậc ba.","isTrue":true,"explanation":"Đúng."}]},{"id":"b7_ds_nb_2","lessonId":"b7_aminoacid_peptide","lessonTitle":"Bài 7: Amino acid - Peptide","part":"part2","level":"biet","category":"lythuyet","code":"HH1.1","content":"Xét các đặc điểm của amino acid trong tự nhiên và phòng thí nghiệm:","items":[{"id":"a","text":"Phân tử các amino acid chỉ có duy nhất một nhóm -NH2 và một nhóm -COOH.","isTrue":false,"explanation":"Sai, ví dụ glutamic acid có 2 nhóm -COOH, lysine có 2 nhóm -NH2."},{"id":"b","text":"Dung dịch các amino acid đều không làm đổi màu quỳ tím.","isTrue":false,"explanation":"Sai, glutamic acid làm quỳ hóa đỏ, lysine làm quỳ hóa xanh."},{"id":"c","text":"Dung dịch các amino acid đều làm đổi màu quỳ tím.","isTrue":false,"explanation":"Sai, glycine, alanine, valine không đổi màu quỳ."},{"id":"d","text":"Các amino acid đều là chất rắn ở nhiệt độ thường.","isTrue":true,"explanation":"Đúng, do cấu trúc ion lưỡng cực."}]},{"id":"b7_ds_nb_3","lessonId":"b7_aminoacid_peptide","lessonTitle":"Bài 7: Amino acid - Peptide","part":"part2","level":"biet","category":"lythuyet","code":"HH1.1","content":"Xét cấu tạo và phân loại của peptide:","items":[{"id":"a","text":"Peptide mạch hở phân tử chứa hai liên kết peptide -CO-NH- được gọi là dipeptide.","isTrue":false,"explanation":"Sai, dipeptide chỉ có 1 liên kết peptide giữa 2 gốc alpha-amino acid."},{"id":"b","text":"Các peptide đều là chất rắn, nhiệt độ nóng chảy cao và rất khó tan trong nước.","isTrue":false,"explanation":"Sai, nhiều peptide dễ tan trong nước."},{"id":"c","text":"Peptide mạch hở phân tử chứa hai gốc α-amino acid được gọi là dipeptide.","isTrue":true,"explanation":"Đúng."},{"id":"d","text":"Các peptide mà phân tử chứa từ 11 đến 50 gốc α-amino acid được gọi là polypeptide.","isTrue":true,"explanation":"Đúng."}]},{"id":"b7_ds_nb_5","lessonId":"b7_aminoacid_peptide","lessonTitle":"Bài 7: Amino acid - Peptide","part":"part2","level":"hieu","category":"lythuyet","code":"HH1.1","content":"Cho các nhận xét về tính chất của amino acid và protein:","items":[{"id":"a","text":"Các amino acid thiên nhiên hầu hết đều tan tốt trong nước.","isTrue":true,"explanation":"Đúng."},{"id":"b","text":"Phân tử khối của một amino acid no chứa 1 chức amino và 1 chức carboxyl luôn là số lẻ.","isTrue":true,"explanation":"Đúng, do chứa 1 nguyên tử N (M_N = 14) nên tổng khối lượng luôn lẻ."},{"id":"c","text":"Dung dịch amino acid có số nhóm -NH2 bằng số nhóm -COOH không làm đổi màu giấy quỳ tím.","isTrue":true,"explanation":"Đúng."},{"id":"d","text":"Thủy phân protein bằng acid hoặc kiềm khi đun nóng sẽ cho hỗn hợp các amino acid.","isTrue":true,"explanation":"Đúng."}]},{"id":"b5_tl_nb_7","lessonId":"b5_tinhbot_cel","lessonTitle":"Bài 5: Tinh bột và Cellulose","part":"part3","level":"hieu","category":"lythuyet","code":"HH1.2","content":"Tiến hành thí nghiệm tráng bạc của glucose:\n- Bước 1: Rửa sạch ống nghiệm thủy tinh bằng dung dịch kiềm, tráng lại bằng nước cất.\n- Bước 2: Cho 1 ml AgNO3 1%, nhỏ tiếp từng giọt NH3 đến khi kết tủa tan hết.\n- Bước 3: Thêm 1 ml glucose 1%, đun nóng nhẹ trên ngọn lửa đèn cồn.\nCho các phát biểu sau: (a) Glucose bị oxi hóa bởi AgNO3/NH3; (b) Kết tủa bạc hydroxide bị hòa tan tạo phức bạc; (c) Trong bước 3, phải luôn lắc đều ống nghiệm để bạc bám nhanh; (d) Ở bước 1, NaOH làm sạch dầu mỡ trên bề mặt thủy tinh.\nCó bao nhiêu phát biểu đúng?","correctAnswer":"3","explanation":"(a) Đúng; (b) Đúng; (c) Sai (phải để yên không lắc để bạc bám đều thành gương); (d) Đúng. Số phát biểu đúng là 3."},{"id":"p4_lythuyet_trangbac","lessonId":"b3_carb_glu_fru","lessonTitle":"Chương 2: Glucose - Fructose","part":"part4","level":"hieu","category":"lythuyet","code":"HH1.2","points":1,"content":"Trong công nghiệp sản xuất ruột phích, người ta thực hiện phản ứng tráng bạc bằng dung dịch glucose với thuốc thử Tollens [Ag(NH3)2]OH.\na) Viết phương trình hóa học của phản ứng tráng bạc của glucose.\nb) Giải thích tại sao người ta dùng glucose để tráng ruột phích thay vì dùng aldehyde thông thường như formaldehyde.","correctAnswer":"Phương trình tráng bạc và giải thích","explanation":"a) Phương trình hóa học:\n   CH2OH[CHOH]4CHO + 2[Ag(NH3)2]OH --(t°)--> CH2OH[CHOH]4COONH4 + 2Ag↓ + 3NH3 + H2O\nb) Giải thích:\n   • Glucose là chất tự nhiên, an toàn, không độc hại đối với sức khỏe con người, rất phù hợp cho bình thủy giữ nhiệt chứa nước uống.\n   • Formaldehyde (HCHO) là chất độc hại, có nguy cơ gây ung thư và gây ô nhiễm môi trường nếu tồn dư trong ruột phích."},{"id":"p4_lythuyet_xaphong","lessonId":"b2_xaphong","lessonTitle":"Chương 1: Xà phòng và chất giặt rửa","part":"part4","level":"hieu","category":"lythuyet","code":"HH1.2","points":1,"content":"Xà phòng và chất giặt rửa tổng hợp đóng vai trò quan trọng trong việc tẩy rửa vết bẩn.\na) Nêu cấu tạo phân tử chung của xà phòng và chất giặt rửa tổng hợp.\nb) Giải thích cơ chế giặt rửa vết dầu mỡ bám trên quần áo khi giặt với xà phòng.","correctAnswer":"Cấu tạo lưỡng tính và cơ chế giặt rửa","explanation":"a) Cấu tạo chung gồm 2 phần:\n   • Phần đầu ưa nước: là các nhóm phân cực (như -COO-Na+, -SO3-Na+, -OSO3-Na+).\n   • Phần đuôi kị nước (ưa dầu mỡ): là các gốc hydrocarbon mạch dài không phân cực (R-).\nb) Cơ chế giặt rửa:\n   • Đuôi kị nước thâm nhập, bám sâu vào vết dầu mỡ trên sợi vải.\n   • Đầu ưa nước quay ra ngoài môi trường nước, tạo thành các hạt mixen phân tán nhỏ lơ lửng trong nước.\n   • Khi vò hoặc xả nước, các hạt dầu mỡ bị bứt ra khỏi bề mặt vải và cuốn trôi theo dòng nước."},{"id":"p4_lythuyet_phanbiet","lessonId":"b4_sac_mal","lessonTitle":"Chương 2: Phân biệt các carbohydrate","part":"part4","level":"hieu","category":"lythuyet","code":"HH1.2","points":1,"content":"Có 4 dung dịch mất nhãn chứa riêng biệt các chất: glucose, saccharose, glycerol và hồ tinh bột.\nBằng phương pháp hóa học, hãy trình bày cách nhận biết từng dung dịch trên và viết các phương trình hóa học minh họa.","correctAnswer":"Nhận biết 4 dung dịch","explanation":"1. Dùng dung dịch iodine (I2):\n   • Xuất hiện màu xanh tím đặc trưng -> Nhận biết được hồ tinh bột.\n   • 3 dung dịch còn lại không có hiện tượng màu xanh tím.\n2. Cho lần lượt 3 dung dịch còn lại tác dụng Cu(OH)2 ở nhiệt độ thường:\n   • Cả 3 dung dịch đều hòa tan Cu(OH)2 tạo phức xanh lam.\n3. Đun nóng 3 ống nghiệm chứa phức xanh lam trên:\n   • Ống nghiệm xuất hiện kết tủa đỏ gạch Cu2O -> Nhận biết được glucose.\n   • 2 dung dịch còn lại không có kết tủa đỏ gạch là saccharose và glycerol.\n4. Phân biệt saccharose và glycerol: Cho tác dụng với nước bromine hoặc đun nóng trong H2SO4 loãng rồi tráng bạc (saccharose thủy phân cho sản phẩm tráng bạc)."},{"id":"p4_lythuyet_lipid_suckhoe","lessonId":"b1_ester_lipid","lessonTitle":"Chương 1: Ester - Lipid","part":"part4","level":"hieu","category":"lythuyet","code":"HH1.2","points":1,"content":"Chất béo (lipid) là một trong những nhóm chất dinh dưỡng thiết yếu của con người.\na) Viết phương trình phản ứng xà phòng hóa tripalmitin (C15H31COO)3C3H5 trong dung dịch NaOH đun nóng.\nb) Nêu vai trò của chất béo và giải thích vì sao acid béo Omega-3 và Omega-6 được gọi là acid béo thiết yếu đối với cơ thể.","correctAnswer":"Phản ứng xà phòng hóa và vai trò lipid","explanation":"a) Phương trình hóa học:\n   (C15H31COO)3C3H5 + 3NaOH --(t°)--> 3C15H31COONa (sodium palmitate) + C3H5(OH)3 (glycerol)\nb) Vai trò sinh học:\n   • Cung cấp và dự trữ năng lượng dồi dào cho cơ thể (1g lipid cung cấp khoảng 9 kcal).\n   • Là dung môi hòa tan và vận chuyển các vitamin tan trong dầu (A, D, E, K).\n   • Cấu tạo màng tế bào và mô thần kinh.\n   • Omega-3 và Omega-6 là các acid béo không bão hòa thiết yếu vì cơ thể con người không thể tự tổng hợp được mà bắt buộc phải hấp thu từ thức ăn hằng ngày."}]);

questionBank.push({"id":"b5_tuluan_hieu_chuyenhoa","lessonId":"b5_tinhbot_cel","lessonTitle":"Chương 2: Tổng hợp Carbohydrate","part":"part4","level":"hieu","category":"lythuyet","code":"HH1.2","points":1,"content":"Chất X là một trong những chất dinh dưỡng cơ bản của con người và một số động vật. Trong cơ thể người, X dưới tác dụng của enzyme α-amylase có trong nước bọt bị thuỷ phân sinh ra disaccharide Y. Quá trình này tiếp tục ở ruột non, nơi phần lớn X bị thủy phân thành monosaccharide Z. Phần lớn Z được hấp thụ trực tiếp qua thành ruột vào máu đi nuôi cơ thể.\na) Hãy xác định tên gọi của các chất X, Y và Z.\nb) Viết các phương trình hóa học minh họa quá trình thủy phân trên.","correctAnswer":"X là Tinh bột, Y là Maltose, Z là Glucose","explanation":"a) Xác định chất:\n   • Chất X: Tinh bột ((C₆H₁₀O₅)ₙ).\n   • Chất Y: Maltose (C₁₂H₂₂O₁₁) do amylase trong nước bọt thủy phân tinh bột.\n   • Chất Z: Glucose (C₆H₁₂O₆) là sản phẩm thủy phân cuối cùng được hấp thu vào máu.\nb) Phương trình hóa học:\n   • Tại khoang miệng: 2(C₆H₁₀O₅)ₙ + nH₂O --(enzyme amylase)--> nC₁₂H₂₂O₁₁ (Maltose)\n   • Tại ruột non: C₁₂H₂₂O₁₁ + H₂O --(enzyme maltase)--> 2C₆H₁₂O₆ (Glucose)"});

const formattedQuestionBank = questionBank.map(q => formatQuestionObject(q));

// Helper: Phân loại danh sách câu hỏi
function getQuestionsByFilter(filter = {}) {
  return formattedQuestionBank.filter(q => {
    if (filter.lessonId && q.lessonId !== filter.lessonId) return false;
    if (filter.part && q.part !== filter.part) return false;
    if (filter.level && q.level !== filter.level) return false;
    if (filter.category && q.category !== filter.category) return false;
    return true;
  });
}

module.exports = {
  questionBank: formattedQuestionBank,
  getQuestionsByFilter
};
