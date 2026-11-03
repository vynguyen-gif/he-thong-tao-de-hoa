// scripts/enrich_bank11.js
const fs = require('fs');
const path = require('path');

const additionalQuestions11 = [
  // --- P1 C5: Bài 3. pH của dung dịch (Biết) ---
  {
    id: "g11_p1_b3_04",
    lessonId: "b3_ph_chuando",
    lessonTitle: "Bài 3: pH của dung dịch – chuẩn độ",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH.1.1",
    content: "Môi trường kiềm là môi trường có",
    options: [
      "[H⁺] < 1,0 × 10⁻⁷ M (hoặc pH > 7).",
      "[H⁺] > 1,0 × 10⁻⁷ M (hoặc pH < 7).",
      "[H⁺] = 1,0 × 10⁻⁷ M (hoặc pH = 7).",
      "[H⁺] = [OH⁻]."
    ],
    correctAnswer: "A",
    explanation: "Môi trường kiềm có [H⁺] < 10⁻⁷ M (pH > 7) và [OH⁻] > 10⁻⁷ M."
  },
  {
    id: "g11_p1_b3_05",
    lessonId: "b3_ph_chuando",
    lessonTitle: "Bài 3: pH của dung dịch – chuẩn độ",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH.1.1",
    content: "Dung dịch nào sau đây làm quỳ tím chuyển sang màu đỏ?",
    options: [
      "Dung dịch HCl 0,01 M",
      "Dung dịch NaOH 0,01 M",
      "Dung dịch NaCl 1 M",
      "Dung dịch Ba(OH)2 0,05 M"
    ],
    correctAnswer: "A",
    explanation: "HCl là acid mạnh làm quỳ tím chuyển màu đỏ."
  },

  // --- P1 C6: Bài 4. Đơn chất nitrogen (Biết) ---
  {
    id: "g11_p1_b4_05",
    lessonId: "b4_nitrogen",
    lessonTitle: "Bài 4: Đơn chất nitrogen",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH.1.1",
    content: "Trong công nghiệp, phần lớn lượng đơn chất nitrogen sản xuất ra được dùng để",
    options: [
      "tổng hợp ammonia (NH3) để sản xuất phân đạm, nitric acid.",
      "làm chất đẩy trong các bình xịt.",
      "bảo quản mẫu sinh học trong y học.",
      "sản xuất thuốc nổ và pháo hoa."
    ],
    correctAnswer: "A",
    explanation: "Khoảng 80% sản lượng N2 trong công nghiệp dùng để tổng hợp ammonia qua chu trình Haber-Bosch."
  },

  // --- P1 C7, C8: Bài 5. Một số hợp chất của nitrogen (Biết) ---
  {
    id: "g11_p1_b5_10",
    lessonId: "b5_ammonia",
    lessonTitle: "Bài 5: Một số hợp chất quan trọng của nitrogen",
    part: "part1",
    level: "biet",
    category: "lythuyet",
    code: "HH.1.3",
    content: "Khí ammonia (NH3) có mùi gì đặc trưng?",
    options: [
      "Mùi khai và xốc.",
      "Mùi trứng thối.",
      "Mùi hắc, gây ho.",
      "Không có mùi."
    ],
    correctAnswer: "A",
    explanation: "Ammonia là chất khí không màu, có mùi khai và xốc đặc trưng, độc khi hít phải lượng nhiều."
  },

  // --- P1 C10: Bài 5. Một số hợp chất của nitrogen (Thông hiểu) ---
  {
    id: "g11_p1_b5_th_04",
    lessonId: "b5_ammonia",
    lessonTitle: "Bài 5: Một số hợp chất quan trọng của nitrogen",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "HH.1.2",
    content: "Nguyên nhân chính dẫn đến hiện tượng phú dưỡng (eutrophication) trong các ao, hồ là do",
    options: [
      "sự dư thừa nguồn dinh dưỡng nitrate (NO3⁻) và phosphate (PO4³⁻) từ phân bón và nước thải.",
      "sự thiếu hụt oxygen hòa tan do nhiệt độ nước tăng cao.",
      "nước ao hồ bị nhiễm kim loại nặng như chì và thủy ngân.",
      "sự phát triển quá mức của cá và động vật thủy sinh."
    ],
    correctAnswer: "A",
    explanation: "Dư thừa nitrate và phosphate kích thích tảo và thực vật phù du nở hoa bùng phát, gây phú dưỡng."
  },
  {
    id: "g11_p1_b5_th_05",
    lessonId: "b5_nitricacid",
    lessonTitle: "Bài 5: Một số hợp chất quan trọng của nitrogen",
    part: "part1",
    level: "hieu",
    category: "lythuyet",
    code: "HH.1.2",
    content: "Dung dịch HNO3 đặc nguội có thể đựng được trong bình làm bằng kim loại nào sau đây nhờ hiện tượng thụ động hóa?",
    options: [
      "Al hoặc Fe",
      "Cu hoặc Ag",
      "Zn hoặc Mg",
      "Pb hoặc Sn"
    ],
    correctAnswer: "A",
    explanation: "Al và Fe bị thụ động hóa trong HNO3 đặc nguội (tạo màng oxide bền bảo vệ bề mặt)."
  },

  // --- P1 C11: Bài 3. pH của dung dịch – chuẩn độ (Vận dụng) - 5 câu ---
  {
    id: "g11_p1_b3_vd_01",
    lessonId: "b3_ph_chuando",
    lessonTitle: "Bài 3: pH của dung dịch – chuẩn độ acid và base",
    part: "part1",
    level: "vd",
    category: "tinh_toan",
    code: "HH.3.6",
    content: "Trộn 100 ml dung dịch HCl 0,1 M với 100 ml dung dịch NaOH 0,08 M thu được dung dịch X. Giá trị pH của dung dịch X là",
    options: ["2,0", "1,0", "12,0", "7,0"],
    correctAnswer: "A",
    explanation: "n(H+) = 0,01 mol; n(OH-) = 0,008 mol -> n(H+ dư) = 0,002 mol. V = 0,2 lít -> [H+] = 0,01 M -> pH = 2."
  },
  {
    id: "g11_p1_b3_vd_02",
    lessonId: "b3_ph_chuando",
    lessonTitle: "Bài 3: pH của dung dịch – chuẩn độ acid và base",
    part: "part1",
    level: "vd",
    category: "tinh_toan",
    code: "HH.3.6",
    content: "Pha loãng 10 ml dung dịch HCl có pH = 2 bằng nước cất thành 1000 ml dung dịch. Dung dịch mới thu được có giá trị pH là",
    options: ["4,0", "3,0", "5,0", "7,0"],
    correctAnswer: "A",
    explanation: "Thể tích tăng 100 lần (từ 10 ml lên 1000 ml) -> nồng độ [H+] giảm 100 lần (10² lần) -> pH tăng 2 đơn vị: 2 + 2 = 4."
  },
  {
    id: "g11_p1_b3_vd_03",
    lessonId: "b3_ph_chuando",
    lessonTitle: "Bài 3: pH của dung dịch – chuẩn độ acid và base",
    part: "part1",
    level: "vd",
    category: "tinh_toan",
    code: "HH.3.6",
    content: "Hòa tan hoàn toàn 0,04 gam NaOH vào nước để được 100 ml dung dịch Y. Giá trị pH của dung dịch Y là",
    options: ["12,0", "2,0", "13,0", "11,0"],
    correctAnswer: "A",
    explanation: "n(NaOH) = 0,04 / 40 = 0,001 mol -> [OH-] = 0,001 / 0,1 = 0,01 M -> pOH = 2 -> pH = 14 - 2 = 12."
  },
  {
    id: "g11_p1_b3_vd_04",
    lessonId: "b3_ph_chuando",
    lessonTitle: "Bài 3: pH của dung dịch – chuẩn độ acid và base",
    part: "part1",
    level: "vd",
    category: "tinh_toan",
    code: "HH.3.6",
    content: "Chuẩn độ 20 ml dung dịch HCl chưa biết nồng độ bằng dung dịch chuẩn NaOH 0,1 M. Khi chất chỉ thị phenolphthalein vừa đổi màu, thể tích NaOH đã dùng là 25 ml. Nồng độ mol của dung dịch HCl là",
    options: ["0,125 M", "0,08 M", "0,15 M", "0,20 M"],
    correctAnswer: "A",
    explanation: "C(HCl) × V(HCl) = C(NaOH) × V(NaOH) -> C(HCl) = (0,1 × 25) / 20 = 0,125 M."
  },
  {
    id: "g11_p1_b3_vd_05",
    lessonId: "b3_ph_chuando",
    lessonTitle: "Bài 3: pH của dung dịch – chuẩn độ acid và base",
    part: "part1",
    level: "vd",
    category: "tinh_toan",
    code: "HH.3.6",
    content: "Trộn 200 ml dung dịch Ba(OH)2 0,05 M với 300 ml dung dịch HCl 0,04 M. Giá trị pH của dung dịch sau phản ứng là",
    options: ["12,0", "2,0", "13,0", "7,0"],
    correctAnswer: "A",
    explanation: "n(OH-) = 2 × 0,2 × 0,05 = 0,02 mol; n(H+) = 0,3 × 0,04 = 0,012 mol -> n(OH- dư) = 0,008 mol. V = 0,5 lít -> [OH-] = 0,016 M -> pOH = 1,8 -> pH ≈ 12,2 (làm tròn 12,0)."
  },

  // --- P1 C12: Bài 5. Một số hợp chất của nitrogen (Vận dụng) ---
  {
    id: "g11_p1_b5_vd_04",
    lessonId: "b5_nitricacid",
    lessonTitle: "Bài 5: Một số hợp chất quan trọng của nitrogen",
    part: "part1",
    level: "vd",
    category: "tinh_toan",
    code: "HH.1.6",
    content: "Hòa tan hoàn toàn 6,4 gam Cu trong lượng dư dung dịch HNO3 đặc nóng. Thể tích khí NO2 duy nhất (ở đkc, 25°C và 1 bar, 1 mol = 24,79 lít) thu được là",
    options: ["4,958 lít", "2,479 lít", "1,239 lít", "7,437 lít"],
    correctAnswer: "A",
    explanation: "n(Cu) = 6,4 / 64 = 0,1 mol. Cu + 4HNO3 -> Cu(NO3)2 + 2NO2 + 2H2O -> n(NO2) = 0,2 mol -> V = 0,2 × 24,79 = 4,958 lít."
  },
  {
    id: "g11_p1_b5_vd_05",
    lessonId: "b5_ammonia",
    lessonTitle: "Bài 5: Một số hợp chất quan trọng của nitrogen",
    part: "part1",
    level: "vd",
    category: "tinh_toan",
    code: "HH.1.6",
    content: "Cho hỗn hợp gồm 1 mol N2 và 3 mol H2 vào bình kín phản ứng tổng hợp NH3 có xúc tác bột Fe. Sau một thời gian, trong bình có 0,4 mol NH3. Hiệu suất của phản ứng tổng hợp là",
    options: ["20%", "40%", "10%", "30%"],
    correctAnswer: "A",
    explanation: "N2 + 3H2 ⇌ 2NH3. n(NH3 lí thuyết) = 2 mol. H = (0,4 / 2) × 100% = 20%."
  },

  // --- P2 C1: Cân bằng trong dung dịch (4 đề gốc 201, 301, 401, 501) ---
  {
    id: "g11_p2_s2_c1",
    lessonId: "chude1_canbang_dungdich",
    lessonTitle: "Chương 1: Cân bằng trong dung dịch nước",
    part: "part2",
    level: "biet_hieu_vd",
    category: "lythuyet",
    code: "HH.1.2_1.1_2.4_3.6",
    content: "Xét các cân bằng acid - base và sự điện li trong dung dịch nước:",
    items: [
      { id: "a", level: "biet", text: "Acetic acid (CH3COOH) là một chất điện li yếu, trong nước phân li thuận nghịch tạo ion H+ và CH3COO-.", isTrue: true, explanation: "Đúng, acid yếu chỉ phân li một phần." },
      { id: "b", level: "biet", text: "Thang pH thường dùng có giá trị từ 1 đến 14 để biểu thị độ acid hoặc base của dung dịch.", isTrue: true, explanation: "Đúng theo thang pH thông dụng." },
      { id: "c", level: "hieu", text: "Theo thuyết Brønsted – Lowry, trong cân bằng: NH3 + H2O ⇌ NH4+ + OH-, nước (H2O) đóng vai trò là acid vì nó nhường proton (H+).", isTrue: true, explanation: "Đúng, H2O nhường H+ cho NH3 nên đóng vai trò là acid." },
      { id: "d", level: "vd", text: "Để trung hòa hoàn toàn 100 ml dung dịch Ba(OH)2 0,05 M cần dùng vừa đủ 50 ml dung dịch HCl 0,2 M.", isTrue: true, explanation: "Đúng. n(OH-) = 2 × 0,1 × 0,05 = 0,01 mol. n(H+) = 0,05 × 0,2 = 0,01 mol." }
    ]
  },
  {
    id: "g11_p2_s3_c1",
    lessonId: "chude1_canbang_dungdich",
    lessonTitle: "Chương 1: Cân bằng trong dung dịch nước",
    part: "part2",
    level: "biet_hieu_vd",
    category: "lythuyet",
    code: "HH.1.2_1.1_2.4_3.6",
    content: "Cho các nhận xét về chất điện li và môi trường pH của dung dịch:",
    items: [
      { id: "a", level: "biet", text: "Dung dịch dẫn điện được là do trong dung dịch có các ion chuyển động tự do.", isTrue: true, explanation: "Đúng, các cation và anion tự do mang điện tích." },
      { id: "b", level: "biet", text: "Nước nguyên chất ở 25°C có tích số ion Kw = [H+][OH-] = 1,0 × 10⁻¹⁴.", isTrue: true, explanation: "Đúng." },
      { id: "c", level: "hieu", text: "Dung dịch muối Na2CO3 có pH > 7 do ion CO3²⁻ nhận proton từ nước (CO3²⁻ + H2O ⇌ HCO3⁻ + OH⁻) tạo môi trường kiềm.", isTrue: true, explanation: "Đúng, thủy phân anion gốc acid yếu tạo OH-." },
      { id: "d", level: "vd", text: "Trộn 50 ml dung dịch H2SO4 0,1 M với 50 ml dung dịch NaOH 0,2 M thì dung dịch thu được có pH = 7.", isTrue: true, explanation: "Đúng. n(H+) = 2 × 0,05 × 0,1 = 0,01 mol = n(OH-) = 0,05 × 0,2 = 0,01 mol. Trung hòa hoàn toàn -> pH = 7." }
    ]
  },
  {
    id: "g11_p2_s4_c1",
    lessonId: "chude1_canbang_dungdich",
    lessonTitle: "Chương 1: Cân bằng trong dung dịch nước",
    part: "part2",
    level: "biet_hieu_vd",
    category: "lythuyet",
    code: "HH.1.2_1.1_2.4_3.6",
    content: "Trong phòng thí nghiệm và đời sống, các dung dịch acid - base có nhiều ứng dụng quan trọng:",
    items: [
      { id: "a", level: "biet", text: "Hydrochloric acid (HCl) và nitric acid (HNO3) đều là các chất điện li mạnh trong nước.", isTrue: true, explanation: "Đúng." },
      { id: "b", level: "biet", text: "Máu người bình thường có pH ổn định trong khoảng 7,35 – 7,45 nhờ có hệ đệm.", isTrue: true, explanation: "Đúng." },
      { id: "c", level: "hieu", text: "Theo thuyết Brønsted – Lowry, ion HCO3⁻ là chất lưỡng tính vì vừa có khả năng nhường H+ vừa có khả năng nhận H+.", isTrue: true, explanation: "Đúng." },
      { id: "d", level: "vd", text: "Một mẫu nước mưa có [H+] = 2,5 × 10⁻⁵ M có giá trị pH < 5,6 nên được xếp vào loại mưa acid.", isTrue: true, explanation: "Đúng. pH = -log(2,5×10⁻⁵) ≈ 4,6 < 5,6 -> mưa acid." }
    ]
  },
  {
    id: "g11_p2_s5_c1",
    lessonId: "chude1_canbang_dungdich",
    lessonTitle: "Chương 1: Cân bằng trong dung dịch nước",
    part: "part2",
    level: "biet_hieu_vd",
    category: "lythuyet",
    code: "HH.1.2_1.1_2.4_3.6",
    content: "Thực hiện thí nghiệm chuẩn độ dung dịch HCl bằng dung dịch chuẩn NaOH 0,10 M sử dụng phenolphthalein làm chất chỉ thị:",
    items: [
      { id: "a", level: "biet", text: "Các dung dịch acid, base, muối khi hòa tan trong nước đều phân li thành ion.", isTrue: true, explanation: "Đúng theo thuyết điện li của Arrhenius." },
      { id: "b", level: "biet", text: "Chất chỉ thị phenolphthalein không màu trong môi trường acid và chuyển sang màu hồng trong môi trường kiềm.", isTrue: true, explanation: "Đúng." },
      { id: "c", level: "hieu", text: "Thời điểm dung dịch đổi màu từ không màu sang hồng nhạt bền vững trong 30 giây được gọi là điểm tương đương (hoặc điểm cuối chuẩn độ).", isTrue: true, explanation: "Đúng." },
      { id: "d", level: "vd", text: "Chuẩn độ 10,0 ml mẫu giấm ăn cần dùng 15,0 ml dung dịch NaOH 0,10 M. Nồng độ CH3COOH trong mẫu giấm ăn là 0,15 M.", isTrue: true, explanation: "Đúng. C = (0,10 × 15) / 10 = 0,15 M." }
    ]
  },

  // --- P2 C2: Nitrogen và hợp chất (4 đề gốc 201, 301, 401, 501) ---
  {
    id: "g11_p2_s2_c2",
    lessonId: "chude2_nitrogen_hopchat",
    lessonTitle: "Chương 2: Nitrogen và hợp chất của nitrogen",
    part: "part2",
    level: "biet_hieu_vd",
    category: "lythuyet",
    code: "HH.1.1_1.6_1.2_1.6",
    content: "Xét các đặc tính hóa học và ứng dụng của đơn chất nitrogen cùng hợp chất:",
    items: [
      { id: "a", level: "biet", text: "Ở điều kiện thường, đơn chất nitrogen là chất khí không màu, không mùi, nhẹ hơn không khí.", isTrue: true, explanation: "Đúng (M_N2 = 28 < 29)." },
      { id: "b", level: "hieu", text: "Phân tử nitrogen rất bền ở nhiệt độ thường do có liên kết ba N≡N với năng lượng liên kết rất lớn (945 kJ/mol).", isTrue: true, explanation: "Đúng, đây là nguyên nhân tính trơ hóa học của N2." },
      { id: "c", level: "biet", text: "Dung dịch ammonia có tính base yếu, làm quỳ tím ẩm chuyển sang màu xanh.", isTrue: true, explanation: "Đúng." },
      { id: "d", level: "vd", text: "Cho 2,8 gam khí N2 tác dụng với H2 dư (xúc tác Fe, t°) thu được 0,04 mol NH3. Hiệu suất của phản ứng là 20%.", isTrue: true, explanation: "Đúng. n(N2) = 0,1 mol -> n(NH3 lí thuyết) = 0,2 mol. H = (0,04 / 0,2) × 100% = 20%." }
    ]
  },
  {
    id: "g11_p2_s3_c2",
    lessonId: "chude2_nitrogen_hopchat",
    lessonTitle: "Chương 2: Nitrogen và hợp chất của nitrogen",
    part: "part2",
    level: "biet_hieu_vd",
    category: "lythuyet",
    code: "HH.1.1_1.6_1.2_1.6",
    content: "Các oxide của nitrogen (NOx) và nitric acid có vai trò quan trọng trong tự nhiên và công nghiệp:",
    items: [
      { id: "a", level: "biet", text: "Trong tự nhiên, khí nitrogen chiếm khoảng 78% thể tích của khí quyển.", isTrue: true, explanation: "Đúng." },
      { id: "b", level: "hieu", text: "Phản ứng giữa N2 và O2 tạo NO chỉ xảy ra ở nhiệt độ rất cao (khoảng 3000°C) hoặc có tia lửa điện (sấm sét).", isTrue: true, explanation: "Đúng, N2 + O2 ⇌ 2NO." },
      { id: "c", level: "biet", text: "Muối ammonium (NH4+) đều tan tốt trong nước và khi đun nóng với dung dịch kiềm sẽ sinh ra khí ammonia có mùi khai.", isTrue: true, explanation: "Đúng." },
      { id: "d", level: "vd", text: "Hòa tan hết 1,92 gam Cu trong dung dịch HNO3 loãng dư thu được 0,4958 lít khí NO (ở đkc 25°C, 1 bar).", isTrue: true, explanation: "Đúng. n(Cu) = 0,03 mol -> n(NO) = (2/3) × 0,03 = 0,02 mol -> V = 0,02 × 24,79 = 0,4958 lít." }
    ]
  },
  {
    id: "g11_p2_s4_c2",
    lessonId: "chude2_nitrogen_hopchat",
    lessonTitle: "Chương 2: Nitrogen và hợp chất của nitrogen",
    part: "part2",
    level: "biet_hieu_vd",
    category: "lythuyet",
    code: "HH.1.1_1.6_1.2_1.6",
    content: "Khí ammonia và phân đạm chứa nguyên tố nitrogen:",
    items: [
      { id: "a", level: "biet", text: "Khí nitrogen lỏng sôi ở -196°C, được sử dụng rộng rãi để bảo quản mẫu máu, mô sinh học và thực phẩm.", isTrue: true, explanation: "Đúng." },
      { id: "b", level: "hieu", text: "Ammonia thể hiện tính khử khi tác dụng với các chất oxi hóa mạnh như O2, Cl2, CuO ở nhiệt độ cao.", isTrue: true, explanation: "Đúng, số oxi hóa của N tăng từ -3 lên 0." },
      { id: "c", level: "biet", text: "Phân đạm cung cấp nguyên tố dinh dưỡng nitrogen cho cây trồng dưới dạng ion NH4+ hoặc NO3⁻.", isTrue: true, explanation: "Đúng." },
      { id: "d", level: "vd", text: "Nhiệt phân hoàn toàn 16,0 gam muối NH4NO3 thu được 0,2 mol khí dinitrogen monoxide (N2O) và nước.", isTrue: true, explanation: "Đúng. NH4NO3 --(t°)--> N2O + 2H2O. n = 16 / 80 = 0,2 mol -> n(N2O) = 0,2 mol." }
    ]
  },
  {
    id: "g11_p2_s5_c2",
    lessonId: "chude2_nitrogen_hopchat",
    lessonTitle: "Chương 2: Nitrogen và hợp chất của nitrogen",
    part: "part2",
    level: "biet_hieu_vd",
    category: "lythuyet",
    code: "HH.1.1_1.6_1.2_1.6",
    content: "Nitric acid (HNO3) là một hóa chất công nghiệp vô cùng quan trọng:",
    items: [
      { id: "a", level: "biet", text: "Nitric acid tinh khiết là chất lỏng không màu, bốc khói mạnh trong không khí ẩm.", isTrue: true, explanation: "Đúng." },
      { id: "b", level: "hieu", text: "Dung dịch HNO3 đặc khi để lâu ngoài ánh sáng thường có màu vàng nâu do bị phân hủy chậm thành khí NO2 hòa tan vào acid.", isTrue: true, explanation: "Đúng: 4HNO3 -> 4NO2 + O2 + 2H2O." },
      { id: "c", level: "biet", text: "Trong công nghiệp, nitric acid được dùng chủ yếu để sản xuất phân bón (như NH4NO3), thuốc nổ và phẩm nhuộm.", isTrue: true, explanation: "Đúng." },
      { id: "d", level: "vd", text: "Cho 5,4 gam Al tác dụng hết với dung dịch HNO3 loãng dư thu được 0,2 mol khí NO duy nhất.", isTrue: true, explanation: "Đúng. n(Al) = 0,2 mol. Al + 4HNO3 -> Al(NO3)3 + NO + 2H2O -> n(NO) = n(Al) = 0,2 mol." }
    ]
  },

  // --- P3 C1: Bài 3. pH của dung dịch (Biết) ---
  {
    id: "g11_p3_b3_04",
    lessonId: "b3_ph_chuando",
    lessonTitle: "Bài 3: pH của dung dịch – chuẩn độ",
    part: "part3",
    level: "biet",
    category: "lythuyet",
    code: "HH.1.1",
    content: "Một dung dịch có nồng độ [H⁺] = 1,0 × 10⁻⁴ M. Giá trị pH của dung dịch này bằng bao nhiêu?",
    correctAnswer: "4",
    explanation: "pH = -log[H+] = -log(10⁻⁴) = 4."
  },
  {
    id: "g11_p3_b3_05",
    lessonId: "b3_ph_chuando",
    lessonTitle: "Bài 3: pH của dung dịch – chuẩn độ",
    part: "part3",
    level: "biet",
    category: "lythuyet",
    code: "HH.1.1",
    content: "Dung dịch KOH 0,001 M có giá trị pH bằng bao nhiêu?",
    correctAnswer: "11",
    explanation: "[OH-] = 10⁻³ M -> pOH = 3 -> pH = 14 - 3 = 11."
  },

  // --- P3 C2: Bài 1. Mở đầu về cân bằng hóa học (Thông hiểu) ---
  {
    id: "g11_p3_b1_04",
    lessonId: "b1_canbang",
    lessonTitle: "Bài 1: Mở đầu về cân bằng hóa học",
    part: "part3",
    level: "hieu",
    category: "tinh_toan",
    code: "HH.1.6",
    content: "Cho phản ứng thuận nghịch ở trạng thái cân bằng: N2(g) + 3H2(g) ⇌ 2NH3(g) có nồng độ ở trạng thái cân bằng là: [N2] = 0,2 M; [H2] = 0,4 M; [NH3] = 0,4 M. Giá trị hằng số cân bằng Kc của phản ứng tại nhiệt độ này là bao nhiêu?",
    correctAnswer: "12,5",
    explanation: "Kc = [NH3]² / ([N2] × [H2]³) = (0,4)² / (0,2 × 0,4³) = 0,16 / (0,2 × 0,064) = 12,5."
  },
  {
    id: "g11_p3_b1_05",
    lessonId: "b1_canbang",
    lessonTitle: "Bài 1: Mở đầu về cân bằng hóa học",
    part: "part3",
    level: "hieu",
    category: "tinh_toan",
    code: "HH.1.6",
    content: "Cho phản ứng: CO(g) + Cl2(g) ⇌ COCl2(g). Ở trạng thái cân bằng tại nhiệt độ T, nồng độ [CO] = 0,02 M; [Cl2] = 0,01 M; [COCl2] = 0,04 M. Giá trị Kc của phản ứng là bao nhiêu?",
    correctAnswer: "200",
    explanation: "Kc = [COCl2] / ([CO][Cl2]) = 0,04 / (0,02 × 0,01) = 200."
  },

  // --- P3 C3: Bài 4. Đơn chất nitrogen (Thông hiểu) ---
  {
    id: "g11_p3_b4_02",
    lessonId: "b4_nitrogen",
    lessonTitle: "Bài 4: Đơn chất nitrogen",
    part: "part3",
    level: "hieu",
    category: "tinh_toan",
    code: "HH.1.6",
    content: "Đốt cháy hoàn toàn 2,479 lít khí nitrogen (đkc, 25°C, 1 bar) với lượng dư khí hydrogen trong điều kiện tối ưu thu được 0,05 mol khí ammonia (NH3). Hiệu suất của phản ứng tổng hợp là bao nhiêu phần trăm?",
    correctAnswer: "25",
    explanation: "n(N2) = 2,479 / 24,79 = 0,1 mol -> n(NH3 lí thuyết) = 0,2 mol. H = (0,05 / 0,2) × 100% = 25%."
  },
  {
    id: "g11_p3_b4_03",
    lessonId: "b4_nitrogen",
    lessonTitle: "Bài 4: Đơn chất nitrogen",
    part: "part3",
    level: "hieu",
    category: "tinh_toan",
    code: "HH.1.6",
    content: "Cho 4,8 gam kim loại Mg phản ứng hoàn toàn với khí nitrogen dư ở nhiệt độ cao theo phản ứng: 3Mg + N2 --(t°)--> Mg3N2. Khối lượng muối magnesium nitride thu được là bao nhiêu gam? (Làm tròn đến 1 chữ số thập phân).",
    correctAnswer: "6,7",
    explanation: "n(Mg) = 4,8 / 24 = 0,2 mol -> n(Mg3N2) = 0,2 / 3 mol -> m = (0,2 / 3) × 100 = 6,67 gam ≈ 6,7 gam."
  },
  {
    id: "g11_p3_b4_04",
    lessonId: "b4_nitrogen",
    lessonTitle: "Bài 4: Đơn chất nitrogen",
    part: "part3",
    level: "hieu",
    category: "tinh_toan",
    code: "HH.1.6",
    content: "Trong một tia sét có nhiệt độ cao, 1,2395 lít khí N2 (ở đkc, tương ứng 0,05 mol) phản ứng hết với O2 tạo thành khí nitrogen monoxide (NO). Thể tích khí NO (ở đkc) sinh ra là bao nhiêu lít?",
    correctAnswer: "2,479",
    explanation: "N2 + O2 --(tia lửa điện)--> 2NO -> n(NO) = 2 × 0,05 = 0,1 mol -> V = 0,1 × 24,79 = 2,479 lít."
  },
  {
    id: "g11_p3_b4_05",
    lessonId: "b4_nitrogen",
    lessonTitle: "Bài 4: Đơn chất nitrogen",
    part: "part3",
    level: "hieu",
    category: "tinh_toan",
    code: "HH.1.6",
    content: "Để nạp khí trơ vào 100 túi khoai tây chiên, mỗi túi cần 0,2479 lít khí nitrogen (đkc, tương ứng 0,01 mol N2). Tổng khối lượng nitrogen cần dùng là bao nhiêu gam?",
    correctAnswer: "28",
    explanation: "Tổng số mol N2 = 100 × 0,01 = 1,0 mol -> m(N2) = 1,0 × 28 = 28 gam."
  }
];

// Nạp vào questionBank11.js
const qbPath = path.join(__dirname, '../data/questionBank11.js');
let qbContent = fs.readFileSync(qbPath, 'utf8');

// Chèn trước module.exports
const insertMarker = 'module.exports = { questionBank11 };';
if (qbContent.includes(insertMarker)) {
  const insertCode = `// Bổ sung chuẩn hóa 100% theo Ma trận & Đặc tả cho Khối 11\nquestionBank11.push(...` + JSON.stringify(additionalQuestions11, null, 2) + `);\n\n`;
  qbContent = qbContent.replace(insertMarker, insertCode + insertMarker);
  fs.writeFileSync(qbPath, qbContent, 'utf8');
  console.log('Successfully enriched Grade 11 Question Bank with', additionalQuestions11.length, 'questions!');
} else {
  console.error('Cannot find insertMarker in questionBank11.js');
}
