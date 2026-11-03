// data/standardIndicators.js
// =========================================================================
// HỆ THỐNG TIÊU CHÍ, CHỈ BÁO NĂNG LỰC HÓA HỌC & CẤP ĐỘ TƯ DUY GDPT 2018
// (Ban hành theo quy chuẩn Chương trình GDPT 2018 & CV 7991/BGDĐT-GDTrH)
// =========================================================================

// 1. BẢNG TIÊU CHÍ, CHỈ BÁO CỦA MỖI THÀNH PHẦN NĂNG LỰC HÓA HỌC
const COMPETENCY_INDICATORS = {
  // HH.1: Nhận thức hoá học
  'HH.1': {
    name: 'Nhận thức hoá học',
    criteria: 'Nhận thức được các kiến thức cơ sở về cấu tạo chất; các quá trình hoá học; các dạng năng lượng và bảo toàn năng lượng; một số chất hoá học cơ bản và chuyển hoá hoá học; một số ứng dụng của hoá học trong đời sống và sản xuất.',
    indicators: {
      'HH.1.1': 'Nhận biết và nêu được tên của các đối tượng, sự kiện, khái niệm hoặc quá trình hoá học.',
      'HH.1.2': 'Trình bày được các sự kiện, đặc điểm, vai trò của các đối tượng, khái niệm hoặc quá trình hoá học.',
      'HH.1.3': 'Mô tả được đối tượng bằng các hình thức nói, viết, công thức, sơ đồ, biểu đồ, bảng.',
      'HH.1.4': 'So sánh, phân loại, lựa chọn được các đối tượng, khái niệm hoặc quá trình hoá học theo các tiêu chí khác nhau.',
      'HH.1.5': 'Phân tích được các khía cạnh của các đối tượng, khái niệm hoặc quá trình hoá học theo logic nhất định.',
      'HH.1.6': 'Giải thích và lập luận được về mối quan hệ giữa các đối tượng, khái niệm hoặc quá trình hoá học (cấu tạo – tính chất, nguyên nhân – kết quả,...).',
      'HH.1.7': 'Tìm được từ khoá, sử dụng được thuật ngữ khoa học, kết nối được thông tin theo logic có ý nghĩa, lập được dàn ý khi đọc và trình bày các văn bản khoa học.',
      'HH.1.8': 'Thảo luận, đưa ra được những nhận định phê phán có liên quan đến chủ đề.'
    }
  },
  // HH.2: Tìm hiểu thế giới tự nhiên dưới góc độ hoá học
  'HH.2': {
    name: 'Tìm hiểu thế giới tự nhiên dưới góc độ hoá học',
    criteria: 'Quan sát, thu thập thông tin; phân tích, xử lí số liệu; giải thích; dự đoán được kết quả nghiên cứu một số sự vật, hiện tượng trong tự nhiên và đời sống.',
    indicators: {
      'HH.2.1': 'Đề xuất vấn đề: nhận ra và đặt được câu hỏi liên quan đến vấn đề; phân tích được bối cảnh để đề xuất vấn đề; biểu đạt được vấn đề.',
      'HH.2.2': 'Đưa ra phán đoán và xây dựng giả thuyết: phân tích được vấn đề để nêu được phán đoán; xây dựng và phát biểu được giả thuyết nghiên cứu.',
      'HH.2.3': 'Lập kế hoạch thực hiện: xây dựng được khung logic nội dung tìm hiểu; lựa chọn được phương pháp thích hợp (quan sát, thực nghiệm, điều tra, phỏng vấn,...); lập được kế hoạch triển khai tìm hiểu.',
      'HH.2.4': 'Thực hiện kế hoạch: thu thập được sự kiện và chứng cứ (quan sát, ghi chép, thu thập dữ liệu, thực nghiệm); phân tích được dữ liệu nhằm chứng minh hay bác bỏ giả thuyết; rút ra được kết luận và điều chỉnh được kết luận khi cần thiết.',
      'HH.2.5': 'Viết, trình bày báo cáo và thảo luận: sử dụng được ngôn ngữ, hình vẽ, sơ đồ, biểu bảng để biểu đạt quá trình và kết quả tìm hiểu; viết được báo cáo sau quá trình tìm hiểu; phản biện và bảo vệ kết quả.'
    }
  },
  // HH.3: Vận dụng kiến thức, kĩ năng đã học
  'HH.3': {
    name: 'Vận dụng kiến thức, kĩ năng đã học',
    criteria: 'Vận dụng được kiến thức, kĩ năng đã học để giải quyết một số vấn đề trong học tập, nghiên cứu khoa học và một số tình huống cụ thể trong thực tiễn.',
    indicators: {
      'HH.3.1': 'Vận dụng được kiến thức hoá học để phát hiện, giải thích được một số hiện tượng tự nhiên, ứng dụng của hoá học trong cuộc sống.',
      'HH.3.2': 'Vận dụng được kiến thức hoá học để phản biện, đánh giá ảnh hưởng của một vấn đề thực tiễn.',
      'HH.3.3': 'Vận dụng được kiến thức tổng hợp để đánh giá ảnh hưởng của một vấn đề thực tiễn và đề xuất một số phương pháp, biện pháp, mô hình, kế hoạch giải quyết vấn đề.',
      'HH.3.4': 'Định hướng được ngành, nghề sẽ lựa chọn sau khi tốt nghiệp trung học phổ thông.',
      'HH.3.5': 'Ứng xử thích hợp trong các tình huống có liên quan đến bản thân, gia đình và cộng đồng phù hợp với yêu cầu phát triển bền vững xã hội và bảo vệ môi trường.'
    }
  }
};

// 2. BẢNG ĐỘNG TỪ HÀNH VI MÔ TẢ 3 CẤP ĐỘ TƯ DUY
const COGNITIVE_LEVELS = {
  biet: {
    levelName: 'Nhận biết',
    description: 'Tái hiện lại thông tin, nhận diện các sự kiện, khái niệm, định luật cơ bản mà không cần biến đổi hoặc suy luận sâu.',
    actionVerbs: [
      'gọi tên', 'viết được', 'biểu diễn được', 'lập được', 'phát biểu được', 'phân biệt được',
      'nêu được', 'xác định được', 'nhận ra được', 'tìm kiếm thông tin', 'tìm hiểu thông tin', 'tra cứu'
    ]
  },
  hieu: {
    levelName: 'Thông hiểu',
    description: 'Hiểu được ý nghĩa của các khái niệm, quy luật; diễn giải bằng ngôn ngữ cá nhân, so sánh, phân loại, giải thích mối quan hệ cấu tạo - tính chất.',
    actionVerbs: [
      'trình bày được', 'mô tả được', 'nhận xét được', 'thực hiện được thí nghiệm', 'quan sát',
      'phân tích được', 'phân loại được', 'so sánh được', 'dự đoán được', 'giải thích được', 'chứng minh được'
    ]
  },
  vd: {
    levelName: 'Vận dụng',
    description: 'Vận dụng kiến thức, kĩ năng vào tình huống mới, bối cảnh thực tiễn; tính toán phức tạp, giải quyết vấn đề, đề xuất giải pháp, STEM.',
    actionVerbs: [
      'vận dụng được', 'tính toán được', 'giải quyết được', 'đề xuất phương án', 'đánh giá được',
      'phản biện được', 'thiết kế được', 'xây dựng được', 'ứng xử thích hợp'
    ]
  }
};

// 3. DANH MỤC YÊU CẦU CẦN ĐẠT & CHỈ BÁO CHI TIẾT TỪNG BÀI THEO 3 KHỐI LỚP
const LESSON_INDICATORS = {
  // KHỐI 10
  '10': {
    // Chủ đề 1: Cấu tạo nguyên tử
    'thanh_phan_nguyen_tu': [
      { yccd: 'Trình bày được thành phần của nguyên tử (hạt nhân gồm proton, neutron; vỏ gồm electron).', indicator: 'HH.1.2', level: 'biet' },
      { yccd: 'So sánh được khối lượng của electron với proton và neutron.', indicator: 'HH.1.4', level: 'hieu' },
      { yccd: 'So sánh được kích thước của hạt nhân với nguyên tử.', indicator: 'HH.1.4', level: 'hieu' }
    ],
    'nguyen_to_hoa_hoc': [
      { yccd: 'Phát biểu được khái niệm đồng vị, nguyên tử khối.', indicator: 'HH.1.1', level: 'biet' },
      { yccd: 'Trình bày được khái niệm về nguyên tố hóa học, số hiệu nguyên tử, số khối và kí hiệu nguyên tử.', indicator: 'HH.1.2', level: 'biet' },
      { yccd: 'Tính được nguyên tử khối trung bình dựa vào số khối và phần trăm số nguyên tử của các đồng vị theo phổ khối lượng.', indicator: 'HH.1.4', level: 'vd' },
      { yccd: 'Vận dụng kiến thức, kĩ năng đã học để tính được nguyên tử khối trung bình của nguyên tố hóa học.', indicator: 'HH.3.3', level: 'vd' }
    ],
    'cau_truc_lop_vo_electron': [
      { yccd: 'Nêu được khái niệm về orbital nguyên tử (AO).', indicator: 'HH.1.1', level: 'biet' },
      { yccd: 'Trình bày được mô hình nguyên tử theo Rutherford – Bohr và mô hình hiện đại.', indicator: 'HH.1.2', level: 'biet' },
      { yccd: 'Trình bày được khái niệm lớp, phân lớp electron và mối quan hệ về số lượng phân lớp trong một lớp.', indicator: 'HH.1.2', level: 'biet' },
      { yccd: 'Mô tả được hình dạng của AO (s, p), số lượng electron trong một AO.', indicator: 'HH.1.3', level: 'hieu' },
      { yccd: 'Mô tả sự chuyển động của electron trong nguyên tử.', indicator: 'HH.1.3', level: 'hieu' },
      { yccd: 'So sánh được mô hình của Rutherford – Bohr với mô hình hiện đại.', indicator: 'HH.1.4', level: 'hieu' },
      { yccd: 'Liên hệ được về số lượng AO trong một phân lớp, trong một lớp.', indicator: 'HH.1.4', level: 'hieu' },
      { yccd: 'Viết được cấu hình electron nguyên tử theo lớp, phân lớp electron và theo ô orbital khi biết số hiệu nguyên tử Z của 20 nguyên tố đầu tiên trong bảng tuần hoàn.', indicator: 'HH.1.5', level: 'hieu' },
      { yccd: 'Dựa vào đặc điểm cấu hình electron lớp ngoài cùng của nguyên tử, dự đoán được tính chất hóa học cơ bản (kim loại hay phi kim) của nguyên tố tương ứng.', indicator: 'HH.1.6', level: 'hieu' },
      { yccd: 'Vận dụng kiến thức, kĩ năng đã học về đặc điểm cấu hình electron lớp ngoài cùng của nguyên tử để dự đoán được tính chất hóa học cơ bản của nguyên tố hóa học.', indicator: 'HH.3.3', level: 'vd' }
    ],
    // Chủ đề 2: Bảng tuần hoàn
    'cau_tao_bang_tuan_hoan': [
      { yccd: 'Nêu được lịch sử phát minh định luật tuần hoàn và bảng tuần hoàn các nguyên tố hóa học.', indicator: 'HH.1.1', level: 'biet' },
      { yccd: 'Nêu được các khái niệm liên quan (ô, chu kì, nhóm).', indicator: 'HH.1.1', level: 'biet' },
      { yccd: 'Nêu được nguyên tắc sắp xếp của bảng tuần hoàn các nguyên tố hóa học (dựa theo cấu hình electron).', indicator: 'HH.1.1', level: 'biet' },
      { yccd: 'Mô tả được cấu tạo của bảng tuần hoàn các nguyên tố hóa học.', indicator: 'HH.1.2', level: 'biet' },
      { yccd: 'Phân loại được nguyên tố (dựa theo cấu hình electron: nguyên tố s, p, d, f; dựa theo tính chất hóa học: kim loại, phi kim, khí hiếm).', indicator: 'HH.1.3', level: 'hieu' }
    ],
    'xu_huong_bien_doi': [
      { yccd: 'Viết được phương trình hóa học minh họa tính chất acid/base của các oxide và các hydroxide.', indicator: 'HH.1.1', level: 'vd' },
      { yccd: 'Giải thích được xu hướng biến đổi bán kính nguyên tử trong một chu kì, trong một nhóm (nhóm A).', indicator: 'HH.1.6', level: 'hieu' },
      { yccd: 'Nhận xét và giải thích được xu hướng biến đổi độ âm điện và tính kim loại, phi kim của nguyên tử các nguyên tố trong một chu kì, trong một nhóm (nhóm A).', indicator: 'HH.1.6', level: 'hieu' },
      { yccd: 'Nhận xét được xu hướng biến đổi thành phần và tính chất acid/base của các oxide và các hydroxide theo chu kì.', indicator: 'HH.1.6', level: 'hieu' }
    ],
    'dinh_luat_tuan_hoan': [
      { yccd: 'Phát biểu được định luật tuần hoàn các nguyên tố hóa học.', indicator: 'HH.1.1', level: 'biet' },
      { yccd: 'Trình bày được ý nghĩa của bảng tuần hoàn các nguyên tố hóa học: Mối quan hệ giữa vị trí (trong bảng tuần hoàn) với tính chất và ngược lại.', indicator: 'HH.1.2', level: 'hieu' }
    ]
  },

  // KHỐI 11
  '11': {
    // Chủ đề 1: Cân bằng hóa học
    'can_bang_hoa_hoc': [
      { yccd: 'Trình bày được khái niệm phản ứng thuận nghịch và trạng thái cân bằng của một phản ứng thuận nghịch.', indicator: 'HH.1.2', level: 'biet' },
      { yccd: 'Viết được biểu thức hằng số cân bằng (KC) của phản ứng thuận nghịch.', indicator: 'HH.1.3', level: 'hieu' },
      { yccd: 'Vận dụng được nguyên lí chuyển dịch cân bằng Le Chatelier để giải thích ảnh hưởng của nhiệt độ, nồng độ, áp suất đến cân bằng hóa học.', indicator: 'HH.1.6', level: 'hieu' }
    ],
    'can_bang_trong_dung_dich_nuoc': [
      { yccd: 'Nêu được khái niệm sự điện li, chất điện li, chất không điện li.', indicator: 'HH.1.1', level: 'biet' },
      { yccd: 'Nêu được khái niệm và ý nghĩa của pH trong thực tiễn.', indicator: 'HH.1.1', level: 'biet' },
      { yccd: 'Nêu được nguyên tắc xác định nồng độ acid, base mạnh bằng phương pháp chuẩn độ.', indicator: 'HH.1.1', level: 'biet' },
      { yccd: 'Trình bày được thuyết Brønsted – Lowry về acid – base.', indicator: 'HH.1.2', level: 'biet' },
      { yccd: 'Viết được biểu thức tính pH và biết cách sử dụng các chất chỉ thị để xác định pH bằng các chất chỉ thị phổ biến như giấy chỉ thị màu, quỳ tím, phenolphthalein.', indicator: 'HH.1.2', level: 'hieu' },
      { yccd: 'Trình bày được ý nghĩa thực tiễn cân bằng trong dung dịch nước của ion Al3+, Fe3+ và CO32-.', indicator: 'HH.1.2', level: 'hieu' },
      { yccd: 'Vận dụng các kiến thức, kĩ năng đã học về thuyết Brønsted – Lowry về acid – base để giải thích được ý nghĩa thực tiễn cân bằng trong dung dịch nước của ion Al3+, Fe3+ và CO32-.', indicator: 'HH.3.1', level: 'vd' },
      { yccd: 'Vận dụng các kiến thức, kĩ năng đã học về pH để giải bài toán chuẩn độ acid - base trong dung dịch.', indicator: 'HH.3.3', level: 'vd' }
    ],
    // Chủ đề 2: Nitrogen và Sulfur
    'don_chat_nitrogen': [
      { yccd: 'Phát biểu được trạng thái tự nhiên của nguyên tố nitrogen.', indicator: 'HH.1.1', level: 'biet' },
      { yccd: 'Trình bày được sự hoạt động của đơn chất nitrogen ở nhiệt độ cao đối với hydrogen, oxygen.', indicator: 'HH.1.2', level: 'biet' },
      { yccd: 'Giải thích được tính trơ của đơn chất nitrogen ở nhiệt độ thường thông qua liên kết ba và giá trị năng lượng liên kết rất lớn (945 kJ/mol).', indicator: 'HH.1.6', level: 'hieu' },
      { yccd: 'Liên hệ quá trình tạo và cung cấp nitrate cho đất từ nước mưa (sấm sét).', indicator: 'HH.1.6', level: 'hieu' },
      { yccd: 'Giải thích được các ứng dụng của đơn chất nitrogen khí và lỏng trong sản xuất, trong hoạt động nghiên cứu.', indicator: 'HH.1.6', level: 'hieu' }
    ],
    'ammonia_muoi_ammonium': [
      { yccd: 'Trình bày được tính chất cơ bản của muối ammonium và nhận biết ion ammonium trong dung dịch.', indicator: 'HH.1.2', level: 'biet' },
      { yccd: 'Trình bày được ứng dụng của ammonium nitrate và một số muối ammonium tan.', indicator: 'HH.1.2', level: 'biet' },
      { yccd: 'Mô tả được công thức Lewis và dạng hình học chóp tam giác của phân tử ammonia.', indicator: 'HH.1.3', level: 'biet' },
      { yccd: 'Từ cấu tạo của phân tử ammonia, giải thích được tính tan, tính base, tính khử. Viết được phương trình hóa học minh họa.', indicator: 'HH.1.6', level: 'hieu' },
      { yccd: 'Vận dụng kiến thức về cân bằng hóa học, tốc độ phản ứng, enthalpy cho phản ứng tổng hợp ammonia từ nitrogen và hydrogen trong quá trình Haber.', indicator: 'HH.1.6', level: 'vd' },
      { yccd: 'Vận dụng phản ứng tổng hợp Haber để tính toán hiệu suất hoặc thành phần hỗn hợp khí cân bằng.', indicator: 'HH.3.3', level: 'vd' }
    ],
    'hop_chat_nitrogen_oxygen': [
      { yccd: 'Nêu được cấu tạo của HNO3, tính acid, tính oxi hóa mạnh trong một số ứng dụng thực tiễn quan trọng của nitric acid.', indicator: 'HH.1.1', level: 'biet' },
      { yccd: 'Phân tích được nguồn gốc các oxide của nitrogen trong không khí và nguyên nhân gây hiện tượng mưa acid.', indicator: 'HH.1.2', level: 'hieu' },
      { yccd: 'Giải thích được nguyên nhân, hệ quả của hiện tượng phú dưỡng (do dư thừa NO3-, PO43-).', indicator: 'HH.1.6', level: 'hieu' }
    ]
  },

  // KHỐI 12
  '12': {
    // Chương 1: Ester - Lipid
    'ester_lipid': [
      { yccd: 'Nêu được khái niệm về lipid, chất béo, acid béo.', indicator: 'HH.1.1', level: 'biet' },
      { yccd: 'Nêu được đặc điểm cấu tạo của ester.', indicator: 'HH.1.1', level: 'biet' },
      { yccd: 'Viết được công thức cấu tạo và gọi tên của một số ester đơn giản (số nguyên tử C trong phân tử ≤ 5) và thường gặp.', indicator: 'HH.1.3', level: 'biet' },
      { yccd: 'Trình bày được đặc điểm về tính chất vật lí của ester và chất béo.', indicator: 'HH.1.2', level: 'biet' },
      { yccd: 'Trình bày được tính chất hóa học của ester (phản ứng thủy phân trong môi trường acid và base).', indicator: 'HH.1.2', level: 'hieu' },
      { yccd: 'Trình bày được phương pháp điều chế và ứng dụng của một số ester.', indicator: 'HH.1.2', level: 'hieu' },
      { yccd: 'Trình bày được tính chất hóa học của chất béo (phản ứng hydrogen hóa chất béo lỏng, phản ứng oxi hóa chất béo bởi oxygen không khí).', indicator: 'HH.1.2', level: 'hieu' },
      { yccd: 'Trình bày được ứng dụng của chất béo và acid béo (omega-3 và omega-6).', indicator: 'HH.1.2', level: 'biet' },
      { yccd: 'Vận dụng tính chất chất béo bị oxi hóa bằng oxygen không khí, phản ứng hydrogen hóa chất béo trong sản xuất bơ nhân tạo.', indicator: 'HH.3.1', level: 'vd' },
      { yccd: 'Vận dụng phản ứng thủy phân ester trong môi trường base để tính toán khối lượng sản phẩm theo hiệu suất.', indicator: 'HH.3.1', level: 'vd' },
      { yccd: 'Vận dụng phương pháp điều chế một số ester trong bài toán tính hiệu suất phản ứng ester hóa.', indicator: 'HH.3.2', level: 'vd' }
    ],
    'xa_phong_chat_giat_rua': [
      { yccd: 'Nêu được khái niệm xà phòng và chất giặt rửa tổng hợp.', indicator: 'HH.1.1', level: 'biet' },
      { yccd: 'Nêu được đặc điểm cấu tạo của xà phòng và chất giặt rửa tự nhiên, tổng hợp.', indicator: 'HH.1.1', level: 'biet' },
      { yccd: 'Nêu được tính chất giặt rửa của xà phòng và chất giặt rửa tự nhiên, tổng hợp.', indicator: 'HH.1.1', level: 'biet' },
      { yccd: 'Trình bày được một số phương pháp điều chế xà phòng và sản xuất chất giặt rửa tổng hợp.', indicator: 'HH.1.2', level: 'hieu' },
      { yccd: 'Trình bày được cách sử dụng hợp lí, an toàn xà phòng và chất giặt rửa tổng hợp trong đời sống.', indicator: 'HH.1.2', level: 'biet' },
      { yccd: 'Vận dụng phương pháp điều chế xà phòng bằng phản ứng xà phòng hóa để tính lượng xà phòng thu được.', indicator: 'HH.3.3', level: 'vd' },
      { yccd: 'Vận dụng ưu điểm và nhược điểm của các loại chất giặt rửa giải thích một số hiện tượng trong cuộc sống (nước cứng, ô nhiễm môi trường).', indicator: 'HH.3.1', level: 'vd' }
    ],
    // Chương 2: Carbohydrate
    'carbohydrate': [
      { yccd: 'Nêu được khái niệm, cách phân loại carbohydrate.', indicator: 'HH.1.1', level: 'biet' },
      { yccd: 'Nêu được trạng thái tự nhiên của glucose, fructose, saccharose, maltose, tinh bột, cellulose.', indicator: 'HH.1.1', level: 'biet' },
      { yccd: 'Viết được công thức cấu tạo dạng mạch hở, dạng mạch vòng và gọi được tên của glucose và fructose, saccharose, maltose, tinh bột, cellulose.', indicator: 'HH.1.3', level: 'hieu' },
      { yccd: 'Trình bày được tính chất hóa học cơ bản của glucose và fructose (phản ứng với Cu(OH)2, nước bromine, thuốc thử Tollens, lên men).', indicator: 'HH.1.2', level: 'hieu' },
      { yccd: 'Trình bày được tính chất hóa học cơ bản của saccharose (phản ứng với Cu(OH)2, phản ứng thủy phân).', indicator: 'HH.1.2', level: 'hieu' },
      { yccd: 'Trình bày được tính chất hóa học cơ bản của tinh bột (thủy phân, phản ứng màu với iodine) và cellulose (thủy phân, phản ứng với HNO3, nước Schweizer).', indicator: 'HH.1.2', level: 'hieu' },
      { yccd: 'Trình bày được ứng dụng của glucose, fructose, saccharose, maltose, tinh bột, cellulose; sự chuyển hóa tinh bột trong cơ thể.', indicator: 'HH.1.2', level: 'biet' },
      { yccd: 'Vận dụng phản ứng của glucose với thuốc thử Tollens trong việc tráng gương, tráng ruột phích.', indicator: 'HH.3.1', level: 'vd' },
      { yccd: 'Vận dụng phản ứng lên men của glucose trong cuộc sống và sản xuất ethanol sinh học.', indicator: 'HH.3.1', level: 'vd' },
      { yccd: 'Vận dụng phản ứng thủy phân tinh bột và lên men glucose trong đời sống (nấu rượu, làm giấm, khẩu phần ăn).', indicator: 'HH.3.1', level: 'vd' }
    ],
    // Chương 3: Amine, Amino acid, Protein
    'amine': [
      { yccd: 'Nêu được khái niệm amine và phân loại amine (theo bậc của amine và bản chất gốc hydrocarbon).', indicator: 'HH.1.1', level: 'biet' },
      { yccd: 'Viết được công thức cấu tạo và gọi tên một số amine theo danh pháp thay thế, danh pháp gốc-chức (số nguyên tử C ≤ 5), tên thông thường.', indicator: 'HH.1.3', level: 'biet' },
      { yccd: 'Nêu được đặc điểm về tính chất vật lí của amine (trạng thái, nhiệt độ sôi, nhiệt độ nóng chảy, khả năng hòa tan).', indicator: 'HH.1.1', level: 'biet' },
      { yccd: 'Trình bày được đặc điểm cấu tạo phân tử và hình dạng phân tử methylamine và aniline.', indicator: 'HH.1.2', level: 'biet' },
      { yccd: 'Trình bày được tính chất hóa học đặc trưng của amine: tính base (quỳ tím, HCl, FeCl3, HNO2), phản ứng thế ở nhân thơm của aniline với nước bromine, tạo phức Cu(OH)2.', indicator: 'HH.1.2', level: 'hieu' },
      { yccd: 'Trình bày được ứng dụng của amine (diamine và aniline) và các phương pháp điều chế amine.', indicator: 'HH.1.2', level: 'biet' },
      { yccd: 'Vận dụng tính base tác dụng với acid giải thích một số ứng dụng trong cuộc sống (khử mùi tanh của cá bằng giấm/chanh).', indicator: 'HH.3.1', level: 'vd' }
    ],
    'amino_acid': [
      { yccd: 'Nêu được khái niệm về amino acid, amino acid thiên nhiên, amino acid trong cơ thể; gọi tên, nêu đặc điểm cấu tạo phân tử.', indicator: 'HH.1.1', level: 'biet' },
      { yccd: 'Nêu được đặc điểm về tính chất vật lí của một số amino acid (trạng thái rắn, nhiệt độ nóng chảy cao, dễ tan).', indicator: 'HH.1.1', level: 'biet' },
      { yccd: 'Trình bày được tính chất hóa học đặc trưng của amino acid (tính lưỡng tính, phản ứng ester hóa, phản ứng trùng ngưng).', indicator: 'HH.1.2', level: 'hieu' },
      { yccd: 'Nêu được khả năng di chuyển của amino acid trong điện trường ở các giá trị pH khác nhau (tính chất điện di).', indicator: 'HH.1.1', level: 'biet' },
      { yccd: 'Vận dụng tính điện di của amino acid để tách amino acid ra khỏi hỗn hợp.', indicator: 'HH.3.3', level: 'vd' }
    ],
    'peptide_protein_enzyme': [
      { yccd: 'Nêu được khái niệm peptide, viết cấu tạo peptide; khái niệm, cấu tạo, tính chất vật lí của protein; vai trò đối với sự sống và enzyme.', indicator: 'HH.1.1', level: 'biet' },
      { yccd: 'Trình bày được tính chất hóa học đặc trưng của peptide (thủy phân, phản ứng màu biuret) và protein (thủy phân, phản ứng màu biuret, đông tụ bởi nhiệt/acid/base/muối).', indicator: 'HH.1.2', level: 'hieu' },
      { yccd: 'Vận dụng tính đông tụ của protein trong việc ứng dụng sát khuẩn (cồn y tế), chế biến thực phẩm (nấu riêu cua, làm đậu phụ).', indicator: 'HH.3.1', level: 'vd' }
    ]
  }
};

// 4. HÀM TRA CỨU TIÊU CHÍ VÀ CHỈ BÁO CHUẨN
function getIndicatorDetail(indicatorCode) {
  if (!indicatorCode) return null;
  const code = String(indicatorCode).trim().toUpperCase();
  const compKey = code.startsWith('HH.1') ? 'HH.1' : (code.startsWith('HH.2') ? 'HH.2' : (code.startsWith('HH.3') ? 'HH.3' : null));
  if (!compKey || !COMPETENCY_INDICATORS[compKey]) return null;
  
  const text = COMPETENCY_INDICATORS[compKey].indicators[code] || '';
  return {
    componentCode: compKey,
    componentName: COMPETENCY_INDICATORS[compKey].name,
    indicatorCode: code,
    indicatorText: text
  };
}

module.exports = {
  COMPETENCY_INDICATORS,
  COGNITIVE_LEVELS,
  LESSON_INDICATORS,
  getIndicatorDetail
};
