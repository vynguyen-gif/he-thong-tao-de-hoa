const fs = require('fs');
const path = require('path');

const newP4Questions = [
  // ==========================================
  // BỘ 1 (MÃ 101)
  // ==========================================
  {
    id: "g11_p4_s1_c1",
    lessonId: "b4_nitrogen",
    lessonTitle: "Bài 4: Đơn chất nitrogen",
    part: "part4",
    level: "biet",
    category: "lythuyet",
    code: "H11.1.1",
    points: 0.5,
    content: "Đơn chất nitrogen (N₂) là thành phần chính của khí quyển Trái Đất.\n" +
             "a) Cho biết phần trăm thể tích của khí nitrogen trong không khí và nêu trạng thái tồn tại của nguyên tố nitrogen trong tự nhiên (dạng đơn chất hay hợp chất).\n" +
             "b) Nêu 2 ứng dụng quan trọng của khí nitrogen lỏng trong y tế hoặc bảo quản thực phẩm, giải thích ngắn gọn dựa trên nhiệt độ sôi thấp của nó.",
    correctAnswer: "a) Chiếm khoảng 78% thể tích không khí; tồn tại cả ở dạng đơn chất (N₂) và dạng hợp chất (khoáng vật diêm tiêu NaNO₃, KNO₃, trong sinh vật: protein, nucleic acid).\n" +
                   "b) Ứng dụng: Bảo quản máu, tế bào sinh học, mẫu mô, tinh trùng/noãn; đóng gói bảo quản thực phẩm (chống oxi hóa, giòn thực phẩm). Do nitrogen lỏng sôi ở -196°C rất lạnh và trơ về mặt hóa học.",
    explanation: "Đơn chất nitrogen chiếm ~78% V không khí. Khí trơ, nhiệt độ sôi rất thấp (-196°C) nên nitrogen lỏng được dùng làm chất làm lạnh sâu để bảo quản mẫu sinh học."
  },
  {
    id: "g11_p4_s1_c2",
    lessonId: "b3_ph_chuando",
    lessonTitle: "Bài 3: pH của dung dịch - Chuẩn độ acid và base",
    part: "part4",
    level: "hieu",
    category: "thuchanh_lythuyet",
    code: "H11.2.4",
    points: 1.0,
    content: "Phương pháp chuẩn độ acid – base được dùng rộng rãi để xác định nồng độ dung dịch.\n" +
             "a) Nêu nguyên tắc xác định nồng độ dung dịch HCl bằng dung dịch chuẩn NaOH có nồng độ đã biết, sử dụng chất chỉ thị phenolphthalein.\n" +
             "b) Mô tả sự thay đổi màu sắc của dung dịch trong bình tam giác tại điểm tương đương. Viết phương trình hóa học dạng phân tử và ion thu gọn của phản ứng chuẩn độ.",
    correctAnswer: "a) Dùng dung dịch chuẩn NaOH đã biết chính xác nồng độ cho từ từ từ burette vào bình tam giác chứa thể tích xác định dung dịch HCl với chất chỉ thị phenolphthalein cho tới khi phản ứng vừa đủ.\n" +
                   "b) Tại điểm tương đương, dung dịch chuyển từ không màu sang màu hồng nhạt bền trong khoảng 30 giây thì dừng chuẩn độ. PTHH: NaOH + HCl ⟶ NaCl + H₂O. Phương trình ion thu gọn: H⁺ + OH⁻ ⟶ H₂O.",
    explanation: "Chuẩn độ acid mạnh - base mạnh bằng phenolphthalein: trước tương đương môi trường acid (không màu), tại điểm tương đương và vừa quá điểm tương đương dung dịch có môi trường kiềm nhẹ làm phenolphthalein xuất hiện màu hồng nhạt bền."
  },
  {
    id: "g11_p4_s1_c3",
    lessonId: "b5_ammonia",
    lessonTitle: "Bài 5: Một số hợp chất quan trọng của nitrogen - Cân bằng Haber",
    part: "part4",
    level: "vd",
    category: "tinh_toan",
    code: "H11.1.6",
    points: 1.5,
    content: "Trong công nghiệp, khí ammonia được tổng hợp từ nitrogen và hydrogen theo quá trình Haber – Bosch:\n" +
             "      N₂ (g) + 3H₂ (g) ⇌ 2NH₃ (g)   ΔrHo₂₉₈ = -92 kJ\n" +
             "a) Vận dụng nguyên lí chuyển dịch cân bằng Le Chatelier, giải thích vì sao phản ứng tổng hợp NH₃ được thực hiện ở áp suất cao (khoảng 150 – 200 bar).\n" +
             "b) Cho hỗn hợp khí gồm 0,3 mol N₂ và 0,7 mol H₂ vào bình kín có dung tích 10 lít ở t°C có xúc tác thích hợp. Khi phản ứng đạt trạng thái cân bằng, lượng NH₃ tạo thành là 0,2 mol. Tính hằng số cân bằng KC của phản ứng ở t°C.",
    correctAnswer: "a) Chiều thuận làm giảm số mol khí (từ 4 mol khí tạo 2 mol khí). Khi tăng áp suất, cân bằng chuyển dịch theo chiều làm giảm áp suất của hệ, tức chiều thuận (tạo ra nhiều NH₃ hơn).\n" +
                   "b) Theo PTHH: n(N₂ phản ứng) = 0,1 mol; n(H₂ phản ứng) = 0,3 mol.\n" +
                   "   Ở trạng thái cân bằng trong bình 10 L:\n" +
                   "   • [N₂] = (0,3 - 0,1) / 10 = 0,02 M.\n" +
                   "   • [H₂] = (0,7 - 0,3) / 10 = 0,04 M.\n" +
                   "   • [NH₃] = 0,2 / 10 = 0,02 M.\n" +
                   "   • KC = [NH₃]² / ([N₂] × [H₂]³) = (0,02)² / [0,02 × (0,04)³] = 0,02 / (6,4 × 10⁻⁵) = 312,5 (L²/mol²).",
    explanation: "a) Chiều thuận: 1 mol N2 + 3 mol H2 -> 2 mol NH3 (4 mol -> 2 mol khí). Tăng áp suất chuyển dịch theo chiều giảm thể tích mol khí (chiều thuận).\nb) Lập bảng tính mol ban đầu, phản ứng và cân bằng rồi chia thể tích V = 10 L để tìm nồng độ mol, áp dụng biểu thức Kc."
  },

  // ==========================================
  // BỘ 2 (MÃ 201)
  // ==========================================
  {
    id: "g11_p4_s2_c1",
    lessonId: "b4_nitrogen",
    lessonTitle: "Bài 4: Đơn chất nitrogen",
    part: "part4",
    level: "biet",
    category: "lythuyet",
    code: "H11.1.2",
    points: 0.5,
    content: "Đơn chất nitrogen có liên kết ba N≡N rất bền vững.\n" +
             "a) Giải thích vì sao ở nhiệt độ thường, đơn chất nitrogen tương đối trơ về mặt hóa học.\n" +
             "b) Viết phương trình hóa học của nitrogen tác dụng với hydrogen (tạo ammonia) và với oxygen (ở nhiệt độ khoảng 3000°C hoặc có tia lửa điện), ghi rõ điều kiện phản ứng.",
    correctAnswer: "a) Trong phân tử N₂, hai nguyên tử N liên kết với nhau bằng một liên kết ba (N≡N) có năng lượng liên kết rất lớn (Eb = 945 kJ/mol), nên rất khó bị bẻ gãy ở nhiệt độ thường, làm N₂ tương đối trơ.\n" +
                   "b) PTHH:\n" +
                   "   • N₂ + 3H₂ ⇌ 2NH₃ (đk: 450°C, xúc tác Fe, 200 bar)\n" +
                   "   • N₂ + O₂ ⇌ 2NO (đk: ~3000°C hoặc tia lửa điện / sấm sét).",
    explanation: "Phân tử N2 có năng lượng liên kết rất cao (945 kJ/mol), trơ ở điều kiện thường, chỉ phản ứng ở nhiệt độ cao hoặc có xúc tác/tia lửa điện."
  },
  {
    id: "g11_p4_s2_c2",
    lessonId: "b3_ph_chuando",
    lessonTitle: "Bài 3: pH của dung dịch - Chuẩn độ acid và base",
    part: "part4",
    level: "hieu",
    category: "thuchanh_lythuyet",
    code: "H11.1.2",
    points: 1.0,
    content: "pH là chỉ số đánh giá độ acid hoặc base của dung dịch nước.\n" +
             "a) Nêu biểu thức toán học xác định giá trị pH theo nồng độ ion H⁺. Một dung dịch có [H⁺] = 10⁻⁴ mol/L thì có pH bằng bao nhiêu? Dung dịch này có môi trường gì và làm đổi màu giấy quỳ tím như thế nào?\n" +
             "b) Trình bày cách xác định pH gần đúng của một dung dịch bằng giấy chỉ thị pH vạn năng trong phòng thí nghiệm.",
    correctAnswer: "a) Biểu thức: pH = -log[H⁺] (hoặc [H⁺] = 10^(-pH)).\n" +
                   "   • Khi [H⁺] = 10⁻⁴ mol/L => pH = -log(10⁻⁴) = 4.\n" +
                   "   • Môi trường dung dịch là acid (vì pH < 7). Làm giấy quỳ tím hóa đỏ (hồng).\n" +
                   "b) Cách xác định: Dùng đũa thủy tinh sạch nhúng vào dung dịch cần thử rồi chấm lên mẩu giấy chỉ thị pH đặt trên mặt kính đồng hồ. So sánh màu sắc xuất hiện trên giấy chỉ thị với thang màu pH chuẩn kèm theo hộp giấy để đọc giá trị pH tương ứng.",
    explanation: "pH = -log[H+]. pH < 7 là môi trường acid, quỳ tím chuyển màu đỏ. Giấy chỉ thị vạn năng dùng bảng so màu chuẩn xác định pH từ 1 đến 14."
  },
  {
    id: "g11_p4_s2_c3",
    lessonId: "b5_ammonia",
    lessonTitle: "Bài 5: Nhận biết ion ammonium và kim loại tác dụng với HNO₃",
    part: "part4",
    level: "vd",
    category: "tinh_toan",
    code: "H11.2.4",
    points: 1.5,
    content: "Các hợp chất của nitrogen như muối ammonium và nitric acid có nhiều tính chất hóa học quan trọng.\n" +
             "a) Nêu hóa chất, hiện tượng và viết phương trình hóa học dạng ion thu gọn dùng để nhận biết ion ammonium (NH₄⁺) trong phân đạm (ví dụ NH₄Cl).\n" +
             "b) Hòa tan hoàn toàn 12,0 gam hỗn hợp Cu và Fe vào dung dịch HNO₃ đặc, nguội (dư), thu được 4,958 lít khí NO₂ (sản phẩm khử duy nhất, ở đkc 25°C, 1 bar). Tính phần trăm khối lượng của Cu và Fe trong hỗn hợp ban đầu (biết Fe bị thụ động hóa trong HNO₃ đặc nguội).",
    correctAnswer: "a) Cho dung dịch kiềm mạnh (NaOH hoặc Ba(OH)₂) vào dung dịch mẫu thử rồi đun nóng nhẹ. Hiện tượng: Thoát ra chất khí có mùi khai (NH₃), làm xanh giấy quỳ tím ẩm đặt ở miệng ống nghiệm.\n" +
                   "   Phương trình ion thu gọn: NH₄⁺ + OH⁻ ⟶ NH₃↑ + H₂O.\n" +
                   "b) Do Fe bị thụ động hóa trong HNO₃ đặc nguội nên chỉ có Cu phản ứng:\n" +
                   "   • Cu + 4HNO₃(đặc) ⟶ Cu(NO₃)₂ + 2NO₂↑ + 2H₂O\n" +
                   "   • n(NO₂) = 4,958 / 24,79 = 0,2 mol => n(Cu) = 0,2 / 2 = 0,1 mol.\n" +
                   "   • m(Cu) = 0,1 × 64 = 6,4 g => %m(Cu) = (6,4 / 12,0) × 100% = 53,33%.\n" +
                   "   • %m(Fe) = 100% - 53,33% = 46,67%.",
    explanation: "Nhận biết NH4+ bằng OH- sinh khí NH3 mùi khai làm xanh quỳ tím ẩm. Fe bị thụ động trong HNO3 đặc nguội nên chỉ có Cu tan sinh khí NO2."
  },

  // ==========================================
  // BỘ 3 (MÃ 301)
  // ==========================================
  {
    id: "g11_p4_s3_c1",
    lessonId: "b4_nitrogen",
    lessonTitle: "Bài 4: Đơn chất nitrogen - Cung cấp đạm từ mưa dông",
    part: "part4",
    level: "biet",
    category: "lythuyet",
    code: "H11.1.2",
    points: 0.5,
    content: "Dân gian Việt Nam có câu ca dao: 'Lúa chiêm lấp ló đầu bờ - Hễ nghe tiếng sấm phất cờ mà lên'.\n" +
             "a) Dựa vào kiến thức hóa học về đơn chất nitrogen, hãy giải thích cơ sở khoa học của câu ca dao trên.\n" +
             "b) Viết phương trình hóa học của phản ứng giữa nitrogen và oxygen khi có tia sét tạo thành khí nitrogen monoxide (NO).",
    correctAnswer: "a) Khi có mưa dông kèm theo sấm sét (năng lượng nhiệt độ rất cao ~3000°C), khí N₂ kết hợp với O₂ tạo NO, sau đó NO bị oxi hóa thành NO₂ rồi hòa tan cùng nước mưa và oxygen tạo ra nitric acid (HNO₃). Khi rơi xuống đất, acid chuyển hóa thành các ion nitrate (NO₃⁻) là nguồn phân đạm tự nhiên rất tốt giúp cây lúa hấp thụ và phát triển nhanh chóng.\n" +
                   "b) PTHH: N₂ + O₂ ⇌ 2NO (tia lửa điện hoặc t° ~3000°C).",
    explanation: "Sấm sét kích hoạt N2 + O2 -> 2NO. Tiếp tục: 2NO + O2 -> 2NO2; 4NO2 + O2 + 2H2O -> 4HNO3 cung cấp ion đạm nitrate cho lúa."
  },
  {
    id: "g11_p4_s3_c2",
    lessonId: "b3_ph_chuando",
    lessonTitle: "Bài 3: pH của dung dịch - Chuẩn độ giấm ăn",
    part: "part4",
    level: "hieu",
    category: "thuchanh_lythuyet",
    code: "H11.2.4",
    points: 1.0,
    content: "Giấm ăn là dung dịch acetic acid (CH₃COOH) loãng.\n" +
             "a) Để xác định nồng độ mol của dung dịch CH₃COOH trong phòng thí nghiệm, một học sinh dùng dung dịch chuẩn NaOH 0,10 M với chất chỉ thị phenolphthalein. Hãy viết PTHH của phản ứng chuẩn độ.\n" +
             "b) Lấy chính xác 10,00 mL mẫu dung dịch acid cho vào bình tam giác rồi tiến hành chuẩn độ, thể tích dung dịch NaOH 0,10 M tiêu tốn trung bình qua 3 lần chuẩn độ là 15,00 mL. Tính nồng độ mol của dung dịch acid ban đầu.",
    correctAnswer: "a) PTHH: CH₃COOH + NaOH ⟶ CH₃COONa + H₂O\n" +
                   "b) Tại điểm tương đương: n(CH₃COOH) = n(NaOH)\n" +
                   "   • n(NaOH) = C_M × V = 0,10 × 0,015 = 1,5 × 10⁻³ mol.\n" +
                   "   • n(CH₃COOH) = 1,5 × 10⁻³ mol.\n" +
                   "   • C_M(CH₃COOH) = (1,5 × 10⁻³) / 0,010 = 0,15 M (mol/L).",
    explanation: "Phản ứng chuẩn độ 1:1. Số mol NaOH tiêu tốn = 0,10 * 0,015 = 0,0015 mol. Nồng độ acid = 0,0015 / 0,010 = 0,15 M."
  },
  {
    id: "g11_p4_s3_c3",
    lessonId: "b5_ammonia",
    lessonTitle: "Bài 5: Ammonia và Nitric acid",
    part: "part4",
    level: "vd",
    category: "tinh_toan",
    code: "H11.1.6",
    points: 1.5,
    content: "Ammonia và nitric acid là hai hợp chất quan trọng của nitrogen trong công nghiệp hóa chất.\n" +
             "a) Dựa vào đặc điểm cấu tạo phân tử NH₃ (còn 1 cặp electron tự do trên nguyên tử nitrogen) và khả năng tạo liên kết hydrogen, giải thích vì sao NH₃ tan rất nhiều trong nước và dung dịch NH₃ có tính base yếu. Viết phương trình hóa học khi cho dung dịch NH₃ tác dụng với dung dịch AlCl₃.\n" +
             "b) Hòa tan hoàn toàn 6,4 gam Cu bằng lượng vừa đủ dung dịch HNO₃ loãng, phản ứng sinh ra V lít khí NO (sản phẩm khử duy nhất, ở đkc 25°C, 1 bar). Viết phương trình hóa học và tính giá trị V.",
    correctAnswer: "a) Phân tử NH₃ có cấu trúc chóp tam giác, phân cực và có khả năng tạo liên kết hydrogen liên phân tử mạnh với nước nên cực kì dễ tan. Trong nước, một phần nhỏ phân tử NH₃ nhận proton H⁺ của nước nhờ cặp electron tự do: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻ làm dung dịch có môi trường kiềm yếu.\n" +
                   "   • PTHH: AlCl₃ + 3NH₃ + 3H₂O ⟶ Al(OH)₃↓ + 3NH₄Cl (kết tủa keo trắng Al(OH)₃ không tan trong NH₃ dư).\n" +
                   "b) PTHH: 3Cu + 8HNO₃(loãng) ⟶ 3Cu(NO₃)₂ + 2NO↑ + 4H₂O\n" +
                   "   • n(Cu) = 6,4 / 64 = 0,1 mol.\n" +
                   "   • Theo PTHH: n(NO) = (2/3) × n(Cu) = (2/3) × 0,1 = 0,2 / 3 mol.\n" +
                   "   • V(NO) ở đkc = (0,2 / 3) × 24,79 ≈ 1,65 lít.",
    explanation: "NH3 tan tốt do liên kết H với nước; tính base yếu do nhận H+ tạo OH-. Phản ứng Cu + HNO3 loãng tạo NO; n(NO) = 2/3 n(Cu)."
  },

  // ==========================================
  // BỘ 4 (MÃ 401)
  // ==========================================
  {
    id: "g11_p4_s4_c1",
    lessonId: "b4_nitrogen",
    lessonTitle: "Bài 4: Đơn chất nitrogen - Tính chất vật lí và bảo quản",
    part: "part4",
    level: "biet",
    category: "lythuyet",
    code: "H11.1.1",
    points: 0.5,
    content: "Khí nitrogen chiếm tỉ lệ lớn nhất trong khí quyển.\n" +
             "a) Nêu các tính chất vật lí cơ bản của khí nitrogen (màu sắc, mùi, vị, độ tan trong nước và tỉ khối so với không khí).\n" +
             "b) Giải thích vì sao người ta thường bơm khí nitrogen vào các gói bánh snack, khoai tây chiên hoặc bóng đèn sợi đốt.",
    correctAnswer: "a) Tính chất vật lí: Khí nitrogen là chất khí không màu, không mùi, không vị, nhẹ hơn không khí một chút (d ≈ 28/29), rất ít tan trong nước, hóa lỏng ở -196°C.\n" +
                   "b) Bơm vào gói bánh snack: Do khí nitrogen tương đối trơ ở nhiệt độ thường, không duy trì sự cháy, giúp loại bỏ khí oxygen ngăn chặn quá trình oxi hóa chất béo (gây ôi thiu bánh) và tạo đệm khí chống vỡ nát khi vận chuyển. Bơm vào bóng đèn sợi đốt giúp ngăn chặn sự oxi hóa dây tóc tungsten ở nhiệt độ cao.",
    explanation: "N2 không màu, không mùi, ít tan, d=28/29. Trơ hóa học ở nhiệt độ thường nên dùng tạo môi trường trơ bảo quản thực phẩm và đèn điện."
  },
  {
    id: "g11_p4_s4_c2",
    lessonId: "b3_ph_chuando",
    lessonTitle: "Bài 3: pH của dung dịch đất và biện pháp khử chua",
    part: "part4",
    level: "hieu",
    category: "thuchanh_lythuyet",
    code: "H11.3.6",
    points: 1.0,
    content: "Độ chua của đất trồng trọt ảnh hưởng lớn đến năng suất cây nông nghiệp.\n" +
             "a) Một mẫu đất nông nghiệp được đo có pH = 4,5. Hãy cho biết môi trường của đất là chua (acid), kiềm hay trung tính? Nêu tác động tiêu cực của đất quá chua đối với cây trồng.\n" +
             "b) Để cải tạo mẫu đất chua trên, người nông dân thường bón chất nào phổ biến nhất (vôi tôi Ca(OH)₂ hoặc vôi sống CaO hay muối ăn NaCl)? Giải thích cơ sở hóa học và viết một PTHH minh họa.",
    correctAnswer: "a) pH = 4,5 < 7 nên đất có môi trường chua (acid). Đất quá chua khiến cây trồng kém hấp thu dưỡng chất, rễ bị bó nghẹt, các vi sinh vật có hại phát triển, hòa tan các ion kim loại độc (Al³⁺, Fe³⁺) gây hại rễ non.\n" +
                   "b) Người nông dân thường bón vôi nông nghiệp (vôi sống CaO hoặc vôi tôi Ca(OH)₂ hoặc bột đá vôi CaCO₃).\n" +
                   "   • Cơ sở hóa học: Vôi có tính base, khi vào đất sẽ trung hòa lượng ion H⁺ dư thừa làm tăng pH của đất về vùng thích hợp cho cây trồng (pH ≈ 6 - 7).\n" +
                   "   • PTHH: Ca(OH)₂ + 2H⁺ ⟶ Ca²⁺ + 2H₂O (hoặc CaO + 2H⁺ ⟶ Ca²⁺ + H₂O).",
    explanation: "Đất pH 4.5 là đất chua. Bón vôi (CaO, Ca(OH)2) để trung hòa H+, đưa pH về mức thuận lợi cho cây trồng."
  },
  {
    id: "g11_p4_s4_c3",
    lessonId: "b5_nitricacid",
    lessonTitle: "Bài 5: Hiện tượng phú dưỡng và bài toán phân bón hóa học",
    part: "part4",
    level: "vd",
    category: "tinh_toan",
    code: "H11.1.6",
    points: 1.5,
    content: "Hiện tượng phú dưỡng (eutrophication) và phân bón nitrogen là những chủ đề quan trọng gắn liền với đời sống.\n" +
             "a) Nêu nguyên nhân và tác hại của hiện tượng phú dưỡng xảy ra ở các nguồn nước ao hồ tù đọng.\n" +
             "b) Phân đạm urea có công thức hóa học là (NH₂)₂CO. Một thửa ruộng cần được cung cấp 46 kg nguyên tố nitrogen (N). Giả thiết phân urea dùng là nguyên chất, tính khối lượng phân đạm urea cần bón cho thửa ruộng.",
    correctAnswer: "a) Nguyên nhân: Do ao hồ tiếp nhận nguồn nước thải sinh hoạt chưa qua xử lí, nước rửa trôi phân bón hóa học chứa hàm lượng cao các nguyên tố dinh dưỡng nitrogen (nitrate, ammonium) và phosphorus (phosphate).\n" +
                   "   • Tác hại: Làm các loài rong, tảo lục, bèo phát triển bùng nổ bao phủ mặt nước; khi chúng chết đi bị vi khuẩn phân hủy tiêu thụ lượng lớn oxygen hòa tan (DO giảm mạnh) khiến các sinh vật thủy sinh (cá, tôm) chết ngạt hàng loạt; nguồn nước bị ô nhiễm hôi thối.\n" +
                   "b) Phân tử khối của urea (NH₂)₂CO = 12 + 16 + 2×(14 + 2) = 60 g/mol.\n" +
                   "   • Trong 1 mol urea có 2 mol nguyên tử N (m(N) = 28 g).\n" +
                   "   • Phần trăm khối lượng N trong phân urea: %N = (28 / 60) × 100% ≈ 46,67%.\n" +
                   "   • Khối lượng urea cần dùng: m = 46 / (%N) = 46 / (28/60) = 46 × 60 / 28 ≈ 98,57 kg.",
    explanation: "Phú dưỡng do dư thừa N, P làm bùng nổ rong tảo, giảm O2 hòa tan. Bài toán phân bón: n(N) = 46/14 = 3,2857 kmol => n(urea) = 1,6428 kmol => m = 1,6428 * 60 = 98,57 kg."
  },

  // ==========================================
  // BỘ 5 (MÃ 501)
  // ==========================================
  {
    id: "g11_p4_s5_c1",
    lessonId: "b4_nitrogen",
    lessonTitle: "Bài 4: Đơn chất nitrogen - Phản ứng với kim loại hoạt động",
    part: "part4",
    level: "biet",
    category: "lythuyet",
    code: "H11.1.2",
    points: 0.5,
    content: "Khí nitrogen thể hiện tính oxi hóa khi tác dụng với các kim loại mạnh.\n" +
             "a) Kim loại duy nhất nào có thể tác dụng trực tiếp với khí nitrogen ngay ở nhiệt độ thường? Viết phương trình hóa học của phản ứng.\n" +
             "b) Ở nhiệt độ cao, nitrogen tác dụng được với magnesium (Mg). Viết phương trình hóa học và gọi tên hợp chất tạo thành.",
    correctAnswer: "a) Kim loại lithium (Li) phản ứng trực tiếp với N₂ ở nhiệt độ thường:\n" +
                   "   6Li + N₂ ⟶ 2Li₃N (lithium nitride).\n" +
                   "b) Ở nhiệt độ cao:\n" +
                   "   3Mg + N₂ ⟶ Mg₃N₂ (nhiệt độ cao)\n" +
                   "   Tên hợp chất tạo thành: Magnesium nitride.",
    explanation: "Li phản ứng với N2 ngay nhiệt độ thường tạo Li3N. Mg phản ứng ở t° cao tạo Mg3N2 (magnesium nitride)."
  },
  {
    id: "g11_p4_s5_c2",
    lessonId: "b3_ph_chuando",
    lessonTitle: "Bài 3: pH dung dịch dạ dày và thuốc kháng acid",
    part: "part4",
    level: "hieu",
    category: "thuchanh_lythuyet",
    code: "H11.3.6",
    points: 1.0,
    content: "Dịch vị dạ dày của người bình thường có chứa hydrochloric acid (HCl) với pH dao động khoảng 1,5 – 3,5 để tiêu hóa thức ăn và diệt khuẩn.\n" +
             "a) Khi nồng độ HCl trong dạ dày tăng cao (pH < 1,5), người bệnh xuất hiện triệu chứng ợ chua, đau rát thượng vị. Để giảm nhanh cơn đau, người ta thường dùng thuốc kháng acid chứa hoạt chất sodium hydrogencarbonate (NaHCO₃). Hãy giải thích tác dụng của thuốc và viết PTHH dạng phân tử và ion thu gọn.\n" +
             "b) Một mẫu dịch vị dạ dày có nồng độ H⁺ là 0,01 M. Tính giá trị pH của mẫu dịch vị này.",
    correctAnswer: "a) Giải thích: NaHCO₃ là muối lưỡng tính có tính base yếu, khi vào dạ dày sẽ tác dụng ngay với lượng dư acid HCl để trung hòa acid, nâng pH của dịch vị lên mức bình thường, từ đó giảm nhanh cơn đau và triệu chứng ợ chua.\n" +
                   "   • PTHH phân tử: NaHCO₃ + HCl ⟶ NaCl + CO₂↑ + H₂O\n" +
                   "   • Phương trình ion thu gọn: HCO₃⁻ + H⁺ ⟶ CO₂↑ + H₂O\n" +
                   "b) Giá trị pH = -log[H⁺] = -log(0,01) = -log(10⁻²) = 2.",
    explanation: "NaHCO3 phản ứng với HCl trung hòa acid dư thừa trong dạ dày, sinh CO2 và H2O. [H+] = 0,01 M => pH = 2."
  },
  {
    id: "g11_p4_s5_c3",
    lessonId: "b5_nitricacid",
    lessonTitle: "Bài 5: Tính chất oxi hóa của Nitric acid và phản ứng tạo muối ammonium",
    part: "part4",
    level: "vd",
    category: "tinh_toan",
    code: "H11.1.6",
    points: 1.5,
    content: "Nitric acid (HNO₃) là một trong những acid có tính oxi hóa mạnh nhất trong hóa học vô cơ.\n" +
             "a) Viết phương trình phản ứng khi cho dung dịch HNO₃ loãng tác dụng với Fe(OH)₃ (thể hiện tính acid) và khi tác dụng với Fe kim loại (thể hiện tính oxi hóa mạnh, tạo khí NO và muối iron(III) nitrate).\n" +
             "b) Hòa tan hoàn toàn 4,8 gam magnesium (Mg) vào lượng dư dung dịch HNO₃ rất loãng, phản ứng không sinh ra chất khí nhưng tạo thành dung dịch chứa muối magnesium nitrate và ammonium nitrate (NH₄NO₃). Viết phương trình hóa học và tính khối lượng muối NH₄NO₃ thu được trong dung dịch.",
    correctAnswer: "a) PTHH:\n" +
                   "   • Fe(OH)₃ + 3HNO₃ ⟶ Fe(NO₃)₃ + 3H₂O (thể hiện tính acid)\n" +
                   "   • Fe + 4HNO₃(loãng) ⟶ Fe(NO₃)₃ + NO↑ + 2H₂O (thể hiện tính oxi hóa)\n" +
                   "b) Phương trình hóa học:\n" +
                   "   4Mg + 10HNO₃ ⟶ 4Mg(NO₃)₂ + NH₄NO₃ + 3H₂O\n" +
                   "   • n(Mg) = 4,8 / 24 = 0,2 mol.\n" +
                   "   • Theo PTHH: n(NH₄NO₃) = (1/4) × n(Mg) = 0,2 / 4 = 0,05 mol.\n" +
                   "   • Khối lượng muối NH₄NO₃ = 0,05 × 80 = 4,0 gam.",
    explanation: "Fe(OH)3 + HNO3 là phản ứng trao đổi acid-base. Mg khử N+5 về N-3 trong NH4NO3: 4Mg + 10HNO3 -> 4Mg(NO3)2 + NH4NO3 + 3H2O. n(NH4NO3) = 0,2/4 = 0,05 mol => m = 4,0 g."
  }
];

// Read existing questionBank11.js
const bankPath = path.join(__dirname, 'data', 'questionBank11.js');
let bankContent = fs.readFileSync(bankPath, 'utf8');

// Replace questionBank11 array: filter out existing part4 and append newP4Questions
const { questionBank11 } = require('./data/questionBank11');
const nonP4Questions = questionBank11.filter(q => q.part !== 'part4');
const updatedBank = [...nonP4Questions, ...newP4Questions];

const fileOutput = `// data/questionBank11.js
// Ngân hàng câu hỏi Đề cương ôn tập & Kiểm tra Giữa Kì 1 - Hóa Học 11 (2026 - 2027)
// Gồm 60 câu Phần I, 10 câu Phần II, 20 câu Phần III, 15 câu Phần IV (3 câu/bộ đề x 5 bộ = 15 câu)
// Khớp 100% Ma trận & Đặc tả kiểm tra giữa kì 1 Hóa học 11

const questionBank11 = ${JSON.stringify(updatedBank, null, 2)};

module.exports = {
  questionBank11
};
`;

fs.writeFileSync(bankPath, fileOutput, 'utf8');
console.log('Successfully updated questionBank11.js with 15 Part 4 questions matching matrix & spec!');
