// services/blueprintEngine.js
// Kiến trúc Slotting Chuẩn 100% theo Ma trận & Bản đặc tả của Bộ GD&ĐT / THPT Bùi Thị Xuân
// Single Source of Truth cho Khối 10, Khối 11, Khối 12 theo CT GDPT 2018 & CV 7991

const { COMPETENCY_INDICATORS, COGNITIVE_LEVELS, getIndicatorDetail } = require('../data/standardIndicators');

const EXAM_BLUEPRINTS = {
  // =========================================================================
  // KHỐI 10 - GIỮA HỌC KÌ I
  // =========================================================================
  '10': {
    grade: '10',
    title: 'HÓA HỌC 10 - KIỂM TRA GIỮA HỌC KÌ I',
    term: 'giuaki',
    termName: 'GIỮA HỌC KÌ I',
    totalPoints: 10.0,
    part1: [
      {
        slot: 'P1_C1', order: 1, chapter: 'Cấu tạo nguyên tử',
        knowledgeUnit: 'Các thành phần của nguyên tử',
        level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.2',
        requirement: 'Trình bày được thành phần của nguyên tử (hạt nhân gồm proton, neutron; vỏ gồm electron).',
        points: 0.25, lessonId: 'chude1_nguyentu'
      },
      {
        slot: 'P1_C2', order: 2, chapter: 'Cấu tạo nguyên tử',
        knowledgeUnit: 'Nguyên tố hóa học, đồng vị',
        level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.2',
        requirement: 'Trình bày được khái niệm về nguyên tố hóa học, số hiệu nguyên tử, số khối và kí hiệu nguyên tử.',
        points: 0.25, lessonId: 'chude1_nguyento'
      },
      {
        slot: 'P1_C3', order: 3, chapter: 'Cấu tạo nguyên tử',
        knowledgeUnit: 'Cấu trúc lớp vỏ electron nguyên tử',
        level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.1',
        requirement: 'Nêu được khái niệm về orbital nguyên tử (AO), lớp, phân lớp electron.',
        points: 0.25, lessonId: 'chude1_voelectron'
      },
      {
        slot: 'P1_C4', order: 4, chapter: 'Bảng tuần hoàn các nguyên tố hóa học',
        knowledgeUnit: 'Cấu tạo của bảng tuần hoàn các nguyên tố hóa học',
        level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.1',
        requirement: 'Nêu được nguyên tắc sắp xếp của bảng tuần hoàn các nguyên tố hóa học, khái niệm ô, chu kì, nhóm.',
        points: 0.25, lessonId: 'chude2_bangtuanhoan'
      },
      {
        slot: 'P1_C5', order: 5, chapter: 'Bảng tuần hoàn các nguyên tố hóa học',
        knowledgeUnit: 'Cấu tạo của bảng tuần hoàn các nguyên tố hóa học',
        level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.1',
        requirement: 'Nêu được các khái niệm liên quan (ô, chu kì, nhóm A, nhóm B), xác định số thứ tự ô và chu kì.',
        points: 0.25, lessonId: 'chude2_bangtuanhoan'
      },
      {
        slot: 'P1_C6', order: 6, chapter: 'Bảng tuần hoàn các nguyên tố hóa học',
        knowledgeUnit: 'Xu hướng biến đổi một số tính chất của nguyên tử trong chu kì và phân nhóm',
        level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.6',
        requirement: 'Nhận xét được xu hướng biến đổi bán kính nguyên tử và độ âm điện trong một chu kì và trong nhóm A.',
        points: 0.25, lessonId: 'chude2_tuanhoan_tinhchat'
      },
      {
        slot: 'P1_C7', order: 7, chapter: 'Bảng tuần hoàn các nguyên tố hóa học',
        knowledgeUnit: 'Xu hướng biến đổi một số tính chất của nguyên tử trong chu kì và phân nhóm',
        level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.6',
        requirement: 'Nhận xét được xu hướng biến đổi tính kim loại, tính phi kim của các nguyên tố trong một chu kì và nhóm A.',
        points: 0.25, lessonId: 'chude2_tuanhoan_tinhchat'
      },
      {
        slot: 'P1_C8', order: 8, chapter: 'Cấu tạo nguyên tử',
        knowledgeUnit: 'Cấu trúc lớp vỏ electron nguyên tử',
        level: 'hieu', levelName: 'Thông hiểu', indicatorCode: 'HH.1.5',
        requirement: 'Viết được cấu hình electron nguyên tử theo lớp, phân lớp electron và theo ô orbital khi biết số hiệu nguyên tử Z của 20 nguyên tố đầu tiên.',
        points: 0.25, lessonId: 'chude1_voelectron'
      },
      {
        slot: 'P1_C9', order: 9, chapter: 'Bảng tuần hoàn các nguyên tố hóa học',
        knowledgeUnit: 'Cấu tạo của bảng tuần hoàn các nguyên tố hóa học',
        level: 'hieu', levelName: 'Thông hiểu', indicatorCode: 'HH.1.3',
        requirement: 'Phân loại được nguyên tố (dựa theo cấu hình electron: nguyên tố s, p, d, f; mối liên hệ giữa cấu hình e và vị trí).',
        points: 0.25, lessonId: 'chude2_bangtuanhoan'
      },
      {
        slot: 'P1_C10', order: 10, chapter: 'Bảng tuần hoàn các nguyên tố hóa học',
        knowledgeUnit: 'Xu hướng biến đổi một số tính chất của nguyên tử trong chu kì và phân nhóm',
        level: 'hieu', levelName: 'Thông hiểu', indicatorCode: 'HH.1.6',
        requirement: 'Giải thích được xu hướng biến đổi bán kính nguyên tử, độ âm điện và tính kim loại, phi kim trong chu kì và nhóm A.',
        points: 0.25, lessonId: 'chude2_tuanhoan_tinhchat'
      },
      {
        slot: 'P1_C11', order: 11, chapter: 'Cấu tạo nguyên tử',
        knowledgeUnit: 'Các thành phần của nguyên tử',
        level: 'vd', levelName: 'Vận dụng', indicatorCode: 'HH.1.4',
        requirement: 'Xác định số hạt proton, neutron, electron trong nguyên tử hoặc ion dựa vào hệ phương trình số hạt.',
        points: 0.25, lessonId: 'chude1_nguyentu'
      },
      {
        slot: 'P1_C12', order: 12, chapter: 'Bảng tuần hoàn các nguyên tố hóa học',
        knowledgeUnit: 'Xu hướng biến đổi một số tính chất của nguyên tử trong chu kì và phân nhóm',
        level: 'vd', levelName: 'Vận dụng', indicatorCode: 'HH.1.1',
        requirement: 'Viết được phương trình hóa học minh họa tính chất acid/base của các oxide và các hydroxide theo chu kì.',
        points: 0.25, lessonId: 'chude2_tuanhoan_tinhchat'
      }
    ],
    part2: [
      {
        slot: 'P2_C1', order: 1, chapter: 'Bảng tuần hoàn các nguyên tố hóa học',
        knowledgeUnit: 'Cấu tạo của bảng tuần hoàn các nguyên tố hóa học',
        level: 'biet_hieu', levelName: 'Nhận biết – Thông hiểu',
        points: 1.0, lessonId: 'chude2_bangtuanhoan',
        items: [
          { id: 'a', level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.1', knowledgeUnit: 'Cấu tạo của bảng tuần hoàn các nguyên tố hóa học', points: 0.25 },
          { id: 'b', level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.1', knowledgeUnit: 'Cấu tạo của bảng tuần hoàn các nguyên tố hóa học', points: 0.25 },
          { id: 'c', level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.1', knowledgeUnit: 'Cấu tạo của bảng tuần hoàn các nguyên tố hóa học', points: 0.25 },
          { id: 'd', level: 'hieu', levelName: 'Thông hiểu', indicatorCode: 'HH.1.3', knowledgeUnit: 'Cấu tạo của bảng tuần hoàn các nguyên tố hóa học', points: 0.25 }
        ]
      },
      {
        slot: 'P2_C2', order: 2, chapter: 'Bảng tuần hoàn các nguyên tố hóa học',
        knowledgeUnit: 'Xu hướng biến đổi một số tính chất của nguyên tử trong chu kì và phân nhóm',
        level: 'biet_hieu', levelName: 'Nhận biết – Thông hiểu',
        points: 1.0, lessonId: 'chude2_tuanhoan_tinhchat',
        items: [
          { id: 'a', level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.6', knowledgeUnit: 'Xu hướng biến đổi một số tính chất của nguyên tử trong chu kì và phân nhóm', points: 0.25 },
          { id: 'b', level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.6', knowledgeUnit: 'Xu hướng biến đổi một số tính chất của nguyên tử trong chu kì và phân nhóm', points: 0.25 },
          { id: 'c', level: 'hieu', levelName: 'Thông hiểu', indicatorCode: 'HH.1.6', knowledgeUnit: 'Xu hướng biến đổi một số tính chất của nguyên tử trong chu kì và phân nhóm', points: 0.25 },
          { id: 'd', level: 'hieu', levelName: 'Thông hiểu', indicatorCode: 'HH.1.6', knowledgeUnit: 'Xu hướng biến đổi một số tính chất của nguyên tử trong chu kì và phân nhóm', points: 0.25 }
        ]
      }
    ],
    part3: [
      {
        slot: 'P3_C1', order: 1, chapter: 'Cấu tạo nguyên tử',
        knowledgeUnit: 'Nguyên tố hóa học, đồng vị',
        level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.1',
        requirement: 'Nêu được số hiệu nguyên tử, số khối, số hạt cơ bản của đồng vị.',
        points: 0.50, lessonId: 'chude1_nguyento'
      },
      {
        slot: 'P3_C2', order: 2, chapter: 'Bảng tuần hoàn các nguyên tố hóa học',
        knowledgeUnit: 'Cấu tạo của bảng tuần hoàn các nguyên tố hóa học',
        level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.1',
        requirement: 'Nêu được số cột, số chu kì, nhóm A/B trong bảng tuần hoàn.',
        points: 0.50, lessonId: 'chude2_bangtuanhoan'
      },
      {
        slot: 'P3_C3', order: 3, chapter: 'Cấu tạo nguyên tử',
        knowledgeUnit: 'Nguyên tố hóa học, đồng vị',
        level: 'vd', levelName: 'Vận dụng', indicatorCode: 'HH.1.4',
        requirement: 'Tính được nguyên tử khối trung bình dựa vào số khối và phần trăm số nguyên tử của các đồng vị theo phổ khối lượng.',
        points: 0.50, lessonId: 'chude1_nguyento'
      },
      {
        slot: 'P3_C4', order: 4, chapter: 'Bảng tuần hoàn các nguyên tố hóa học',
        knowledgeUnit: 'Cấu tạo của bảng tuần hoàn các nguyên tố hóa học',
        level: 'vd', levelName: 'Vận dụng', indicatorCode: 'HH.3.3',
        requirement: 'Vận dụng kiến thức xác định số hiệu nguyên tử và vị trí của hai nguyên tố thuộc 2 chu kì hoặc phân nhóm kế tiếp.',
        points: 0.50, lessonId: 'chude2_bangtuanhoan'
      }
    ],
    part4: [
      {
        slot: 'P4_C1', order: 1, chapter: 'Cấu tạo nguyên tử',
        knowledgeUnit: 'Nguyên tố hóa học, đồng vị',
        level: 'hieu_vd', levelName: 'Thông hiểu – Vận dụng', indicatorCode: 'HH.1.2_HH.1.4',
        requirement: 'Phổ khối lượng của đồng vị: (a) Đọc dữ liệu phổ khối lượng; (b) Tính nguyên tử khối trung bình.',
        points: 1.00, lessonId: 'chude1_dongvi',
        subItems: [
          { id: 'a', levelName: 'Thông hiểu', indicatorCode: 'HH.1.2', points: 0.50 },
          { id: 'b', levelName: 'Vận dụng', indicatorCode: 'HH.1.4', points: 0.50 }
        ]
      },
      {
        slot: 'P4_C2', order: 2, chapter: 'Bảng tuần hoàn các nguyên tố hóa học',
        knowledgeUnit: 'Cấu tạo của bảng tuần hoàn các nguyên tố hóa học',
        level: 'hieu_vd', levelName: 'Thông hiểu – Vận dụng', indicatorCode: 'HH.1.6_HH.1.3',
        requirement: 'Xác định cấu hình electron, vị trí ô, chu kì, nhóm và tính kim loại/phi kim của các nguyên tố.',
        points: 1.00, lessonId: 'chude2_bangtuanhoan',
        subItems: [
          { id: 'a', levelName: 'Vận dụng', indicatorCode: 'HH.1.6', points: 0.50 },
          { id: 'b', levelName: 'Thông hiểu', indicatorCode: 'HH.1.3', points: 0.50 }
        ]
      },
      {
        slot: 'P4_C3', order: 3, chapter: 'Bảng tuần hoàn các nguyên tố hóa học',
        knowledgeUnit: 'Xu hướng biến đổi một số tính chất của nguyên tử trong chu kì và phân nhóm',
        level: 'hieu_vd', levelName: 'Thông hiểu – Vận dụng', indicatorCode: 'HH.1.1_HH.1.6',
        requirement: 'So sánh tính phi kim/kim loại, viết phương trình hóa học chứng minh tính chất acid/base.',
        points: 1.00, lessonId: 'chude2_tuanhoan_tinhchat',
        subItems: [
          { id: 'a', levelName: 'Vận dụng', indicatorCode: 'HH.1.1', points: 0.50 },
          { id: 'b', levelName: 'Thông hiểu', indicatorCode: 'HH.1.6', points: 0.50 }
        ]
      }
    ]
  },

  // =========================================================================
  // KHỐI 11 - GIỮA HỌC KÌ I
  // =========================================================================
  '11': {
    grade: '11',
    title: 'HÓA HỌC 11 - KIỂM TRA GIỮA HỌC KÌ I',
    term: 'giuaki',
    termName: 'GIỮA HỌC KÌ I',
    totalPoints: 10.0,
    part1: [
      {
        slot: 'P1_C1', order: 1, chapter: 'Cân bằng hóa học',
        knowledgeUnit: 'Bài 1. Mở đầu về cân bằng hóa học',
        level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.2',
        requirement: 'Trình bày được khái niệm phản ứng thuận nghịch và trạng thái cân bằng của một phản ứng thuận nghịch.',
        points: 0.25, lessonId: 'b1_canbang'
      },
      {
        slot: 'P1_C2', order: 2, chapter: 'Cân bằng hóa học',
        knowledgeUnit: 'Bài 1. Mở đầu về cân bằng hóa học',
        level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.3',
        requirement: 'Viết được biểu thức hằng số cân bằng (KC) của phản ứng thuận nghịch.',
        points: 0.25, lessonId: 'b1_canbang'
      },
      {
        slot: 'P1_C3', order: 3, chapter: 'Cân bằng hóa học',
        knowledgeUnit: 'Bài 2. Sự điện li, thuyết Brønsted – Lowry',
        level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.1',
        requirement: 'Nêu được khái niệm sự điện li, chất điện li, chất không điện li.',
        points: 0.25, lessonId: 'b2_dienli'
      },
      {
        slot: 'P1_C4', order: 4, chapter: 'Cân bằng hóa học',
        knowledgeUnit: 'Bài 2. Sự điện li, thuyết Brønsted – Lowry',
        level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.2',
        requirement: 'Trình bày được thuyết Brønsted – Lowry về acid – base.',
        points: 0.25, lessonId: 'b2_dienli'
      },
      {
        slot: 'P1_C5', order: 5, chapter: 'Cân bằng hóa học',
        knowledgeUnit: 'Bài 3. pH của dung dịch – chuẩn độ',
        level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.1',
        requirement: 'Nêu được khái niệm và ý nghĩa của pH trong thực tiễn.',
        points: 0.25, lessonId: 'b3_ph_chuando'
      },
      {
        slot: 'P1_C6', order: 6, chapter: 'Nitrogen và sulfur',
        knowledgeUnit: 'Bài 4. Đơn chất nitrogen',
        level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.2',
        requirement: 'Trình bày được sự hoạt động của đơn chất nitrogen ở nhiệt độ cao đối với hydrogen, oxygen.',
        points: 0.25, lessonId: 'b4_nitrogen'
      },
      {
        slot: 'P1_C7', order: 7, chapter: 'Nitrogen và sulfur',
        knowledgeUnit: 'Bài 5. Một số hợp chất của nitrogen',
        level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.3',
        requirement: 'Mô tả được công thức Lewis và dạng hình học của phân tử ammonia.',
        points: 0.25, lessonId: 'b5_ammonia'
      },
      {
        slot: 'P1_C8', order: 8, chapter: 'Nitrogen và sulfur',
        knowledgeUnit: 'Bài 5. Một số hợp chất của nitrogen',
        level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.2',
        requirement: 'Trình bày được ứng dụng của ammonium nitrate và một số muối ammonium tan.',
        points: 0.25, lessonId: 'b5_nitricacid'
      },
      {
        slot: 'P1_C9', order: 9, chapter: 'Cân bằng hóa học',
        knowledgeUnit: 'Bài 2. Sự điện li, thuyết Brønsted – Lowry',
        level: 'hieu', levelName: 'Thông hiểu', indicatorCode: 'HH.1.2',
        requirement: 'Trình bày được ý nghĩa thực tiễn cân bằng trong dung dịch nước của ion Al3+, Fe3+ và CO32-.',
        points: 0.25, lessonId: 'b2_dienli'
      },
      {
        slot: 'P1_C10', order: 10, chapter: 'Nitrogen và sulfur',
        knowledgeUnit: 'Bài 5. Một số hợp chất của nitrogen',
        level: 'hieu', levelName: 'Thông hiểu', indicatorCode: 'HH.1.6',
        requirement: 'Giải thích được nguyên nhân, hệ quả của hiện tượng phú dưỡng (do dư thừa NO3-, PO43-).',
        points: 0.25, lessonId: 'b5_ammonia'
      },
      {
        slot: 'P1_C11', order: 11, chapter: 'Cân bằng hóa học',
        knowledgeUnit: 'Bài 3. pH của dung dịch – chuẩn độ',
        level: 'vd', levelName: 'Vận dụng', indicatorCode: 'HH.3.3',
        requirement: 'Vận dụng các kiến thức, kĩ năng đã học về pH để tính toán nồng độ trong phương pháp chuẩn độ acid - base.',
        points: 0.25, lessonId: 'b3_ph_chuando'
      },
      {
        slot: 'P1_C12', order: 12, chapter: 'Nitrogen và sulfur',
        knowledgeUnit: 'Bài 5. Một số hợp chất của nitrogen',
        level: 'vd', levelName: 'Vận dụng', indicatorCode: 'HH.1.6',
        requirement: 'Vận dụng kiến thức về cân bằng hóa học cho phản ứng tổng hợp ammonia từ nitrogen và hydrogen trong quá trình Haber để tính hiệu suất.',
        points: 0.25, lessonId: 'b5_nitricacid'
      }
    ],
    part2: [
      {
        slot: 'P2_C1', order: 1, chapter: 'Cân bằng hóa học',
        knowledgeUnit: 'Cân bằng trong dung dịch nước',
        level: 'biet_hieu_vd', levelName: 'Nhận biết – Thông hiểu – Vận dụng',
        points: 1.0, lessonId: 'chude1_canbang_dungdich',
        items: [
          { id: 'a', level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.2', knowledgeUnit: 'Bài 2. Sự điện li, thuyết Brønsted – Lowry', points: 0.25 },
          { id: 'b', level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.1', knowledgeUnit: 'Bài 3. pH của dung dịch – chuẩn độ', points: 0.25 },
          { id: 'c', level: 'hieu', levelName: 'Thông hiểu', indicatorCode: 'HH.1.2', knowledgeUnit: 'Bài 3. pH của dung dịch – chuẩn độ', points: 0.25 },
          { id: 'd', level: 'vd', levelName: 'Vận dụng', indicatorCode: 'HH.3.3', knowledgeUnit: 'Bài 3. pH của dung dịch – chuẩn độ', points: 0.25 }
        ]
      },
      {
        slot: 'P2_C2', order: 2, chapter: 'Nitrogen và sulfur',
        knowledgeUnit: 'Nitrogen và hợp chất của nitrogen',
        level: 'biet_hieu_vd', levelName: 'Nhận biết – Thông hiểu – Vận dụng',
        points: 1.0, lessonId: 'chude2_nitrogen_hopchat',
        items: [
          { id: 'a', level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.1', knowledgeUnit: 'Bài 4. Đơn chất nitrogen', points: 0.25 },
          { id: 'b', level: 'hieu', levelName: 'Thông hiểu', indicatorCode: 'HH.1.6', knowledgeUnit: 'Bài 4. Đơn chất nitrogen', points: 0.25 },
          { id: 'c', level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.2', knowledgeUnit: 'Bài 5. Một số hợp chất của nitrogen', points: 0.25 },
          { id: 'd', level: 'vd', levelName: 'Vận dụng', indicatorCode: 'HH.1.6', knowledgeUnit: 'Bài 5. Một số hợp chất của nitrogen', points: 0.25 }
        ]
      }
    ],
    part3: [
      {
        slot: 'P3_C1', order: 1, chapter: 'Cân bằng hóa học',
        knowledgeUnit: 'Bài 3. pH của dung dịch – chuẩn độ',
        level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.1',
        requirement: 'Nêu được giá trị pH hoặc nồng độ [H⁺], [OH⁻] của dung dịch đơn giản.',
        points: 0.50, lessonId: 'b3_ph_chuando'
      },
      {
        slot: 'P3_C2', order: 2, chapter: 'Cân bằng hóa học',
        knowledgeUnit: 'Bài 1. Mở đầu về cân bằng hóa học',
        level: 'hieu', levelName: 'Thông hiểu', indicatorCode: 'HH.1.6',
        requirement: 'Vận dụng được nguyên lí chuyển dịch cân bằng Le Chatelier để giải thích và đếm số tác động làm cân bằng chuyển dịch.',
        points: 0.50, lessonId: 'b1_canbang'
      },
      {
        slot: 'P3_C3', order: 3, chapter: 'Nitrogen và sulfur',
        knowledgeUnit: 'Bài 4. Đơn chất nitrogen',
        level: 'hieu', levelName: 'Thông hiểu', indicatorCode: 'HH.1.6',
        requirement: 'Giải thích được tính trơ của đơn chất nitrogen ở nhiệt độ thường thông qua liên kết ba và giá trị năng lượng liên kết rất lớn (945 kJ/mol).',
        points: 0.50, lessonId: 'b4_nitrogen'
      },
      {
        slot: 'P3_C4', order: 4, chapter: 'Nitrogen và sulfur',
        knowledgeUnit: 'Bài 5. Một số hợp chất của nitrogen',
        level: 'vd', levelName: 'Vận dụng', indicatorCode: 'HH.1.6',
        requirement: 'Vận dụng kiến thức về cân bằng hóa học tính hiệu suất tổng hợp ammonia từ nitrogen và hydrogen trong quá trình Haber.',
        points: 0.50, lessonId: 'b5_nitricacid'
      }
    ],
    part4: [
      {
        slot: 'P4_C1', order: 1, chapter: 'Nitrogen và sulfur',
        knowledgeUnit: 'Bài 4. Đơn chất nitrogen',
        level: 'biet_hieu', levelName: 'Nhận biết – Thông hiểu', indicatorCode: 'HH.1.1_HH.1.6',
        requirement: 'Ứng dụng và tính chất của nitrogen: (a) Ứng dụng nitrogen lỏng; (b) Giải thích tính trơ hóa học của liên kết ba N≡N.',
        points: 0.50, lessonId: 'b4_nitrogen',
        subItems: [
          { id: 'a', levelName: 'Nhận biết', indicatorCode: 'HH.1.1', points: 0.25 },
          { id: 'b', levelName: 'Thông hiểu', indicatorCode: 'HH.1.6', points: 0.25 }
        ]
      },
      {
        slot: 'P4_C2', order: 2, chapter: 'Cân bằng hóa học',
        knowledgeUnit: 'Bài 3. pH của dung dịch – chuẩn độ',
        level: 'hieu_vd', levelName: 'Thông hiểu – Vận dụng', indicatorCode: 'HH.1.2_HH.3.3',
        requirement: 'Chuẩn độ acid - base: (a) Cơ sở phương pháp và nhận biết điểm tương đương; (b) Tính toán nồng độ mol dung dịch.',
        points: 1.00, lessonId: 'b3_ph_chuando',
        subItems: [
          { id: 'a', levelName: 'Thông hiểu', indicatorCode: 'HH.1.2', points: 0.50 },
          { id: 'b', levelName: 'Vận dụng', indicatorCode: 'HH.3.3', points: 0.50 }
        ]
      },
      {
        slot: 'P4_C3', order: 3, chapter: 'Nitrogen và sulfur',
        knowledgeUnit: 'Bài 1 & 5. Cân bằng quá trình Haber tổng hợp NH₃',
        level: 'hieu_vd', levelName: 'Thông hiểu – Vận dụng', indicatorCode: 'HH.1.6_HH.3.3',
        requirement: 'Quá trình Haber: (a) Vận dụng nguyên lí Le Chatelier giải thích điều kiện tối ưu; (b) Tính hiệu suất phản ứng tổng hợp NH₃.',
        points: 1.50, lessonId: 'b5_nitricacid',
        subItems: [
          { id: 'a', levelName: 'Thông hiểu', indicatorCode: 'HH.1.6', points: 0.50 },
          { id: 'b', levelName: 'Vận dụng', indicatorCode: 'HH.3.3', points: 1.00 }
        ]
      }
    ]
  },

  // =========================================================================
  // KHỐI 12 - GIỮA HỌC KÌ I
  // =========================================================================
  '12': {
    grade: '12',
    title: 'HÓA HỌC 12 - KIỂM TRA GIỮA HỌC KÌ I',
    term: 'giuaki',
    termName: 'GIỮA HỌC KÌ I',
    totalPoints: 10.0,
    part1: [
      {
        slot: 'P1_C1', order: 1, chapter: 'ESTER – LIPID',
        knowledgeUnit: 'Ester - lipid',
        level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.3',
        requirement: 'Viết được công thức cấu tạo và gọi tên của một số ester đơn giản (số nguyên tử C trong phân tử ≤ 5) và thường gặp.',
        points: 0.25, lessonId: 'b1_ester_lipid'
      },
      {
        slot: 'P1_C2', order: 2, chapter: 'ESTER – LIPID',
        knowledgeUnit: 'Ester - lipid',
        level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.1',
        requirement: 'Nêu được khái niệm về lipid, chất béo, acid béo và đặc điểm cấu tạo của ester.',
        points: 0.25, lessonId: 'b1_ester_lipid'
      },
      {
        slot: 'P1_C3', order: 3, chapter: 'ESTER – LIPID',
        knowledgeUnit: 'Xà phòng và chất giặt rửa',
        level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.1',
        requirement: 'Nêu được khái niệm xà phòng và chất giặt rửa tổng hợp.',
        points: 0.25, lessonId: 'b2_xaphong'
      },
      {
        slot: 'P1_C4', order: 4, chapter: 'ESTER – LIPID',
        knowledgeUnit: 'Xà phòng và chất giặt rửa',
        level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.1',
        requirement: 'Nêu được đặc điểm cấu tạo của xà phòng và chất giặt rửa tự nhiên, tổng hợp (đầu ưa nước, đuôi kị nước).',
        points: 0.25, lessonId: 'b2_xaphong'
      },
      {
        slot: 'P1_C5', order: 5, chapter: 'CARBOHYDRATE',
        knowledgeUnit: 'Glucose và fructose',
        level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.1',
        requirement: 'Nêu được khái niệm, cách phân loại carbohydrate, trạng thái tự nhiên của glucose, fructose.',
        points: 0.25, lessonId: 'b3_carb_glu_fru'
      },
      {
        slot: 'P1_C6', order: 6, chapter: 'CARBOHYDRATE',
        knowledgeUnit: 'Glucose và fructose',
        level: 'hieu', levelName: 'Thông hiểu', indicatorCode: 'HH.1.2',
        requirement: 'Trình bày được tính chất hóa học cơ bản của glucose và fructose (phản ứng với Cu(OH)2, nước bromine, thuốc thử Tollens).',
        points: 0.25, lessonId: 'b3_carb_glu_fru'
      },
      {
        slot: 'P1_C7', order: 7, chapter: 'CARBOHYDRATE',
        knowledgeUnit: 'Saccharose và maltose',
        level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.1',
        requirement: 'Nêu được trạng thái tự nhiên của saccharose, maltose.',
        points: 0.25, lessonId: 'b4_sac_mal'
      },
      {
        slot: 'P1_C8', order: 8, chapter: 'CARBOHYDRATE',
        knowledgeUnit: 'Saccharose và maltose',
        level: 'hieu', levelName: 'Thông hiểu', indicatorCode: 'HH.1.2',
        requirement: 'Trình bày được tính chất hóa học cơ bản của saccharose (phản ứng với Cu(OH)2, phản ứng thủy phân).',
        points: 0.25, lessonId: 'b4_sac_mal'
      },
      {
        slot: 'P1_C9', order: 9, chapter: 'CARBOHYDRATE',
        knowledgeUnit: 'Tinh bột và cellulose',
        level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.1',
        requirement: 'Nêu được trạng thái tự nhiên của tinh bột, cellulose.',
        points: 0.25, lessonId: 'b5_tinhbot_cel'
      },
      {
        slot: 'P1_C10', order: 10, chapter: 'CARBOHYDRATE',
        knowledgeUnit: 'Tinh bột và cellulose',
        level: 'hieu', levelName: 'Thông hiểu', indicatorCode: 'HH.1.2',
        requirement: 'Trình bày được tính chất hóa học cơ bản của tinh bột (thủy phân, phản ứng với iodine) và cellulose (thủy phân, tan trong nước Schweizer).',
        points: 0.25, lessonId: 'b5_tinhbot_cel'
      },
      {
        slot: 'P1_C11', order: 11, chapter: 'HỢP CHẤT NITROGEN',
        knowledgeUnit: 'Amine',
        level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.1',
        requirement: 'Nêu được khái niệm amine và phân loại amine (theo bậc của amine và bản chất gốc hydrocarbon).',
        points: 0.25, lessonId: 'b6_amine'
      },
      {
        slot: 'P1_C12', order: 12, chapter: 'HỢP CHẤT NITROGEN',
        knowledgeUnit: 'Amino acid và peptide',
        level: 'hieu', levelName: 'Thông hiểu', indicatorCode: 'HH.1.2',
        requirement: 'Trình bày được tính chất hóa học đặc trưng của amino acid (tính lưỡng tính, phản ứng ester hóa, phản ứng trùng ngưng).',
        points: 0.25, lessonId: 'b7_aminoacid_peptide'
      }
    ],
    part2: [
      {
        slot: 'P2_C1', order: 1, chapter: 'ESTER – LIPID',
        knowledgeUnit: 'Ester - lipid',
        level: 'biet_hieu_vd', levelName: 'Nhận biết – Thông hiểu – Vận dụng',
        points: 1.0, lessonId: 'b1_ester_lipid',
        items: [
          { id: 'a', level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.1', knowledgeUnit: 'Ester - lipid', points: 0.25 },
          { id: 'b', level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.2', knowledgeUnit: 'Ester - lipid', points: 0.25 },
          { id: 'c', level: 'hieu', levelName: 'Thông hiểu', indicatorCode: 'HH.1.2', knowledgeUnit: 'Ester - lipid', points: 0.25 },
          { id: 'd', level: 'vd', levelName: 'Vận dụng', indicatorCode: 'HH.3.1', knowledgeUnit: 'Ester - lipid', points: 0.25 }
        ]
      },
      {
        slot: 'P2_C2', order: 2, chapter: 'HỢP CHẤT NITROGEN',
        knowledgeUnit: 'Amine',
        level: 'biet_hieu_vd', levelName: 'Nhận biết – Thông hiểu – Vận dụng',
        points: 1.0, lessonId: 'b6_amine',
        items: [
          { id: 'a', level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.1', knowledgeUnit: 'Amine', points: 0.25 },
          { id: 'b', level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.1', knowledgeUnit: 'Amine', points: 0.25 },
          { id: 'c', level: 'hieu', levelName: 'Thông hiểu', indicatorCode: 'HH.1.2', knowledgeUnit: 'Amine', points: 0.25 },
          { id: 'd', level: 'vd', levelName: 'Vận dụng', indicatorCode: 'HH.3.1', knowledgeUnit: 'Amine', points: 0.25 }
        ]
      }
    ],
    part3: [
      {
        slot: 'P3_C1', order: 1, chapter: 'ESTER – LIPID',
        knowledgeUnit: 'Ester - lipid',
        level: 'hieu', levelName: 'Thông hiểu', indicatorCode: 'HH.1.2',
        requirement: 'Trình bày và phân tích các tính chất hóa học, số đồng phân, phản ứng thủy phân của ester, lipid.',
        points: 0.50, lessonId: 'b1_ester_lipid'
      },
      {
        slot: 'P3_C2', order: 2, chapter: 'ESTER – LIPID',
        knowledgeUnit: 'Xà phòng và chất giặt rửa',
        level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.1',
        requirement: 'Nêu được tính chất giặt rửa và thành phần cấu tạo của xà phòng, chất giặt rửa.',
        points: 0.50, lessonId: 'b2_xaphong'
      },
      {
        slot: 'P3_C3', order: 3, chapter: 'CARBOHYDRATE',
        knowledgeUnit: 'Tổng hợp carbohydrate',
        level: 'vd', levelName: 'Vận dụng', indicatorCode: 'HH.3.1',
        requirement: 'Vận dụng phản ứng của glucose với thuốc thử Tollens hoặc phản ứng thủy phân trong bài toán thực tế.',
        points: 0.50, lessonId: 'b5_tinhbot_cel'
      },
      {
        slot: 'P3_C4', order: 4, chapter: 'HỢP CHẤT NITROGEN',
        knowledgeUnit: 'Amino acid và peptide',
        level: 'biet', levelName: 'Nhận biết', indicatorCode: 'HH.1.1',
        requirement: 'Nêu được số nguyên tử nitrogen, số liên kết peptide hoặc đặc điểm cấu tạo của amino acid, peptide.',
        points: 0.50, lessonId: 'b7_aminoacid_peptide'
      }
    ],
    part4: [
      {
        slot: 'P4_C1', order: 1, chapter: 'ESTER – LIPID',
        knowledgeUnit: 'Xà phòng và chất giặt rửa',
        level: 'vd', levelName: 'Vận dụng', indicatorCode: 'HH.3.3',
        requirement: 'Vận dụng phương pháp điều chế xà phòng bằng phản ứng xà phòng hóa: Áp dụng ĐLBTKL tính khối lượng xà phòng thu được.',
        points: 1.00, lessonId: 'b2_xaphong'
      },
      {
        slot: 'P4_C2', order: 2, chapter: 'CARBOHYDRATE',
        knowledgeUnit: 'Tinh bột và cellulose',
        level: 'vd', levelName: 'Vận dụng', indicatorCode: 'HH.3.1',
        requirement: 'Vận dụng phản ứng thủy phân tinh bột và lên men glucose trong đời sống: Tính toán năng lượng tinh bột trong khẩu phần ăn hoặc sản xuất ethanol sinh học.',
        points: 2.00, lessonId: 'b5_tinhbot_cel'
      }
    ]
  }
};

/**
 * Gắn nhãn chuẩn 100% cho toàn bộ câu hỏi trong đề thi dựa trên Blueprint chính thức
 * Tuyệt đối không để xảy ra sai lệch giữa nhãn câu hỏi và bảng ma trận / đặc tả
 */
function enrichExamWithBlueprint(exam) {
  if (!exam || !exam.parts) return exam;
  const grade = String(exam.gradeNum || '12').trim();
  const bp = EXAM_BLUEPRINTS[grade] || EXAM_BLUEPRINTS['12'];

  // 1. Part 1 (12 câu)
  if (Array.isArray(exam.parts.part1)) {
    exam.parts.part1 = exam.parts.part1.map((q, idx) => {
      const slot = bp.part1[idx] || bp.part1[bp.part1.length - 1];
      q.chapter = slot.chapter;
      q.knowledgeUnit = slot.knowledgeUnit;
      q.level = slot.level;
      q.levelName = slot.levelName;
      q.indicatorCode = slot.indicatorCode;
      q.points = slot.points;
      q.slotCode = slot.slot;
      q.specTagText = `[Đơn vị kiến thức: ${slot.knowledgeUnit} | Mức độ: ${slot.levelName} | Mã chỉ báo: ${slot.indicatorCode}]`;
      return q;
    });
  }

  // 2. Part 2 (2 câu, mỗi câu 4 ý a, b, c, d)
  if (Array.isArray(exam.parts.part2)) {
    exam.parts.part2 = exam.parts.part2.map((q, idx) => {
      const slot = bp.part2[idx] || bp.part2[bp.part2.length - 1];
      q.chapter = slot.chapter;
      q.knowledgeUnit = slot.knowledgeUnit;
      q.level = slot.level;
      q.levelName = slot.levelName;
      q.points = slot.points;
      q.slotCode = slot.slot;
      q.specTagText = `[Đơn vị kiến thức: ${slot.knowledgeUnit} | Mức độ: ${slot.levelName}]`;

      if (Array.isArray(q.items) && Array.isArray(slot.items)) {
        q.items = q.items.map((it, iIdx) => {
          const itemSlot = slot.items[iIdx] || slot.items[slot.items.length - 1];
          it.knowledgeUnit = itemSlot.knowledgeUnit || slot.knowledgeUnit;
          it.level = itemSlot.level;
          it.levelName = itemSlot.levelName;
          it.indicatorCode = itemSlot.indicatorCode;
          it.points = itemSlot.points;
          it.specTagText = `[Đơn vị kiến thức: ${it.knowledgeUnit} | Mức độ: ${it.levelName} | Mã chỉ báo: ${it.indicatorCode}]`;
          return it;
        });
      }
      return q;
    });
  }

  // 3. Part 3 (4 câu)
  if (Array.isArray(exam.parts.part3)) {
    exam.parts.part3 = exam.parts.part3.map((q, idx) => {
      const slot = bp.part3[idx] || bp.part3[bp.part3.length - 1];
      q.chapter = slot.chapter;
      q.knowledgeUnit = slot.knowledgeUnit;
      q.level = slot.level;
      q.levelName = slot.levelName;
      q.indicatorCode = slot.indicatorCode;
      q.points = slot.points;
      q.slotCode = slot.slot;
      q.specTagText = `[Đơn vị kiến thức: ${slot.knowledgeUnit} | Mức độ: ${slot.levelName} | Mã chỉ báo: ${slot.indicatorCode}]`;
      return q;
    });
  }

  // 4. Part 4 (Tự luận)
  if (Array.isArray(exam.parts.part4)) {
    exam.parts.part4 = exam.parts.part4.map((q, idx) => {
      const slot = bp.part4[idx] || bp.part4[bp.part4.length - 1];
      q.chapter = slot.chapter;
      q.knowledgeUnit = slot.knowledgeUnit;
      q.level = slot.level;
      q.levelName = slot.levelName;
      q.indicatorCode = slot.indicatorCode;
      q.points = slot.points;
      q.slotCode = slot.slot;
      q.specTagText = `[Đơn vị kiến thức: ${slot.knowledgeUnit} | Mức độ: ${slot.levelName} | Mã chỉ báo: ${slot.indicatorCode}]`;
      return q;
    });
  }

  return exam;
}

module.exports = {
  EXAM_BLUEPRINTS,
  enrichExamWithBlueprint
};
