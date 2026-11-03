// services/examEngine.js
// Động cơ sinh đề thi, đề tương tự thay số, ma trận & đặc tả cho HÓA 10, HÓA 11, HÓA 12

const { questionBank: questionBank12 } = require('../data/questionBank');
const { questionBank10 } = require('../data/questionBank10');
const { questionBank11 } = require('../data/questionBank11');

const { formatQuestionObject } = require('./chemFormatter');
const { getQuestionSpecMeta } = require('./specTagger');
const { EXAM_BLUEPRINTS, enrichExamWithBlueprint } = require('./blueprintEngine');
const {
  resolveMatrixToSlots,
  exactMatchQuery,
  bindSpecAttributesToQuestion,
  validateExamAgainstMatrix,
  generateAppendix2SpecTableHTML
} = require('./deterministicSlotEngine');

const matrixSpecGen12 = require('./matrixSpecGenerator');
const matrixSpecGen10 = require('./matrixSpecGenerator10');
const matrixSpecGen11 = require('./matrixSpecGenerator11');

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function getBank(grade = '12') {
  const g = String(grade).trim();
  if (g === '10') return questionBank10;
  if (g === '11') return questionBank11;
  return questionBank12;
}

function getMatrixSpecGen(grade = '12') {
  const g = String(grade).trim();
  if (g === '10') return matrixSpecGen10;
  if (g === '11') return matrixSpecGen11;
  return matrixSpecGen12;
}

function pickRandom(arr, count = 1) {
  if (!arr || arr.length === 0) return [];
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function mutateCalculationQuestion(q) {
  const qCopy = clone(q);
  if (q.category === 'tinh_toan' && typeof q.generator === 'function') {
    const generated = q.generator();
    qCopy.content = generated.content;
    if (generated.options) qCopy.options = generated.options;
    if (generated.correctAnswer) qCopy.correctAnswer = generated.correctAnswer;
    if (generated.explanation) qCopy.explanation = generated.explanation;
    qCopy.isMutated = true;
    qCopy.originalContent = q.content;
  }
  return formatQuestionObject(qCopy);
}


function formatPart4PointsAndSteps(q, grade = '12') {
  if (!q || q.part !== 'part4') return q;
  const g = String(grade || q.gradeNum || '12').trim();
  const order = q.order || 1;

  if (g === '10') {
    q.points = 1.0;
  } else if (g === '11') {
    q.points = (order === 1 ? 0.5 : (order === 2 ? 1.0 : 1.5));
  } else {
    q.points = (order === 1 ? 1.0 : 2.0);
  }

  if (!q.explanation) return q;
  let expl = q.explanation.trim();

  // If already formatted with points, skip
  if (expl.includes('điểm)')) return q;

  const pts = q.points;
  if (g === '10') {
    expl = expl.replace(/^a\)\s*/m, 'a) (0,50 điểm) ')
               .replace(/^b\)\s*/m, 'b) (0,50 điểm) ');
  } else if (g === '11') {
    if (Math.abs(pts - 0.5) < 0.01) {
      expl = expl.replace(/^a\)\s*/m, 'a) (0,25 điểm) ')
                 .replace(/^b\)\s*/m, 'b) (0,25 điểm) ');
    } else if (Math.abs(pts - 1.0) < 0.01) {
      expl = expl.replace(/^a\)\s*/m, 'a) (0,50 điểm) ')
                 .replace(/^b\)\s*/m, 'b) (0,50 điểm) ');
    } else { // 1.5đ
      expl = expl.replace(/^a\)\s*/m, 'a) (0,50 điểm) ')
                 .replace(/^b\)\s*/m, 'b) (1,00 điểm) ');
    }
  } else { // Grade 12
    if (Math.abs(pts - 1.0) < 0.01) {
      if (/^a\)/m.test(expl)) {
        expl = expl.replace(/^a\)\s*/m, 'a) (0,50 điểm) ')
                   .replace(/^b\)\s*/m, 'b) (0,50 điểm) ');
      } else if (/^1\./m.test(expl)) {
        expl = expl.replace(/^1\.\s*/m, '• Ý 1 (0,25 điểm): ')
                   .replace(/^2\.\s*/m, '• Ý 2 (0,25 điểm): ')
                   .replace(/^3\.\s*/m, '• Ý 3 (0,25 điểm): ')
                   .replace(/^4\.\s*/m, '• Ý 4 (0,25 điểm): ');
      }
    } else { // 2.0đ
      if (/^a\)/m.test(expl)) {
        expl = expl.replace(/^a\)\s*/m, 'a) (1,00 điểm) ')
                   .replace(/^b\)\s*/m, 'b) (1,00 điểm) ');
      } else if (/^1\./m.test(expl)) {
        const count = (expl.match(/^[0-9]\./gm) || []).length;
        if (count === 2) {
          expl = expl.replace(/^1\.\s*/m, '• Bước 1 (1,00 điểm): ')
                     .replace(/^2\.\s*/m, '• Bước 2 (1,00 điểm): ');
        } else if (count === 3) {
          expl = expl.replace(/^1\.\s*/m, '• Bước 1 (0,50 điểm): ')
                     .replace(/^2\.\s*/m, '• Bước 2 (0,50 điểm): ')
                     .replace(/^3\.\s*/m, '• Bước 3 (1,00 điểm): ');
        } else {
          expl = expl.replace(/^1\.\s*/m, '• Bước 1 (0,50 điểm): ')
                     .replace(/^2\.\s*/m, '• Bước 2 (0,50 điểm): ')
                     .replace(/^3\.\s*/m, '• Bước 3 (0,50 điểm): ')
                     .replace(/^4\.\s*/m, '• Bước 4 (0,50 điểm): ')
                     .replace(/^5\.\s*/m, '   - Ghi chú: ');
        }
      } else if (q.id === 'b2_tuluan_vd_2') {
        expl = '• Bước 1 (1,00 điểm) - Áp dụng ĐLBTKL:\n  m(muối) = m(chất béo) + m(NaOH) - m(glycerol) = 8,58 + 1,2 - 0,368 = 9,412 kg.\n• Bước 2 (1,00 điểm) - Tính khối lượng xà phòng:\n  Khối lượng xà phòng thu được: m(xà phòng) = 9,412 / 60% = 15,687 kg ≈ 15,7 kg.';
      } else if (q.id === 'b5_tuluan_vd_2') {
        expl = '• Bước 1 (1,00 điểm) - Tính năng lượng và lượng tinh bột trong 30 ngày:\n  Tổng calo từ tinh bột = 4 người × 2000 calo/ngày × 30 ngày × 55% = 132000 calo.\n  m(tinh bột) = 132000 / 4 = 33000 gam = 33 kg.\n• Bước 2 (1,00 điểm) - Tính khối lượng gạo thực tế cần dùng:\n  m(gạo) = 33 / 80% = 41,25 kg ≈ 41 kg.';
      } else if (q.id === 'b1_tuluan_vd_1') {
        expl = '• Bước 1 (1,00 điểm) - Tính số mol và xác định chất giới hạn:\n  n(CH₃COOH) = 9,0 / 60 = 0,15 mol; n(C₂H₅OH) = 9,2 / 46 = 0,20 mol.\n  Vì 0,15 < 0,20 nên hiệu suất tính theo CH₃COOH: n(este lí thuyết) = 0,15 mol.\n• Bước 2 (1,00 điểm) - Tính khối lượng este thực tế:\n  n(este thực tế) = 0,15 × 80% = 0,12 mol.\n  m(este) = 0,12 × 88 = 10,56 gam.';
      } else if (q.id === 'b2_tuluan_vd_1') {
        expl = '• Bước 1 (1,00 điểm) - Áp dụng định luật bảo toàn khối lượng:\n  Khối lượng NaOH = 40 × 30% = 12 kg.\n  Theo ĐLBTKL: m(chất béo) + m(NaOH) = m(muối) + m(glycerol) = 88 + 12 = 100 kg.\n• Bước 2 (1,00 điểm) - Tính khối lượng sản phẩm theo hiệu suất:\n  Với hiệu suất phản ứng 90%: m(sản phẩm thực tế) = 100 × 90% = 90 kg.';
      } else {
        expl = '• Lời giải chi tiết & Biểu điểm (' + pts.toFixed(1).replace('.', ',') + ' điểm):\n' + expl;
      }
    }
  }

  q.explanation = expl;
  return q;
}

function enrichQuestionWithSpec(q, grade = '12', term = 'giuaki') {
  if (!q) return q;
  const meta = getQuestionSpecMeta(q, grade, term);
  q.knowledgeUnit = meta.knowledgeUnit;
  q.levelName = meta.levelName;
  q.indicatorCode = meta.indicatorCode;
  q.specTagText = meta.specTagText;

  if (q.items && Array.isArray(q.items)) {
    q.items = q.items.map(it => {
      const itLevel = it.level === 'hieu' ? 'Thông hiểu' : (it.level === 'vd' ? 'Vận dụng' : 'Nhận biết');
      const itCode = it.code || it.indicatorCode || (it.level === 'hieu' ? 'HH.1.3' : (it.level === 'vd' ? 'HH.1.6' : 'HH.1.1'));
      const itKu = it.knowledgeUnit || q.knowledgeUnit || '';
      return {
        ...it,
        knowledgeUnit: itKu,
        levelName: itLevel,
        indicatorCode: itCode,
        specTagText: itKu 
          ? `[Đơn vị kiến thức: ${itKu} | Mức độ: ${itLevel} | Mã chỉ báo: ${itCode}]`
          : `[Mức độ: ${itLevel} | Mã chỉ báo: ${itCode}]`
      };
    });
  }
  if (q.part === 'part4') {
    const { EXAM_BLUEPRINTS } = require('./blueprintEngine');
    const gKey = String(grade || q.gradeNum || '12').trim();
    const bp = EXAM_BLUEPRINTS[gKey];
    if (bp && bp.part4 && bp.part4[q.order - 1] && bp.part4[q.order - 1].subItems) {
      q.subItems = bp.part4[q.order - 1].subItems;
    }
    formatPart4PointsAndSteps(q, grade);
  }
  return q;
}

// =========================================================================
// CẤU HÌNH 5 BỘ ĐỀ GỐC HOÀN TOÀN KHÔNG TRÙNG LẶP (0% OVERLAP)
// =========================================================================

// KHỐI 10 (Chủ đề 1: Cấu tạo nguyên tử + Chủ đề 2: Bảng tuần hoàn)
const DISJOINT_5_SUITE_SPECS_10 = [
  // BỘ 1: Mã 101 (Chuẩn 100% Ma trận & Bản đặc tả theo yêu cầu)
  {
    code: '101',
    p1: [
      'g10_p1_02', 'g10_p1_04', 'g10_p1_03', 'g10_p1_05', 'g10_p1_06', 'g10_p1_49', 'g10_p1_58',
      'g10_p1_08', 'g10_p1_12', 'g10_p1_53',
      'g10_p1_101_c11_vd',  // C11: Vận dụng (bài toán hệ hạt 2Z+N=40, 2Z-N=12 -> A=27)
      'g10_p1_101_c12_vd'   // C12: Vận dụng (PTHH minh họa tính phi kim Cl2 + H2S -> 2HCl + S)
    ],
    p2: ['g10_p2_s1_c1', 'g10_p2_s1_c2'],
    p3: [
      'g10_p3_01',           // C1: Biết (BTH có 8 nhóm A và 8 nhóm B -> 18 cột)
      'g10_p3_101_c02_biet', // C2: Biết (Nguyên tử Na Z=11, A=23 -> N = 12)
      'g10_p3_03',           // C3: Vận dụng (Nguyên tử khối trung bình của Ne -> 20,2)
      'g10_p3_101_c04_vd'    // C4: Vận dụng (Hai nguyên tố A, B kế tiếp chu kì nhỏ ZA+ZB=25 -> ZB = 13)
    ],
    p4: ['g10_p4_s1_c1', 'g10_p4_s1_c2', 'g10_p4_s1_c3']
  },
  // BỘ 2: Mã 201
  {
    code: '201',
    p1: ['g10_p1_14', 'g10_p1_16', 'g10_p1_15', 'g10_p1_17', 'g10_p1_18', 'g10_p1_50', 'g10_p1_xh_07', 'g10_p1_21', 'g10_p1_24', 'g10_p1_54', 'g10_p1_tp_vd_03', 'g10_p1_20'],
    p2: ['g10_p2_s2_c1', 'g10_p2_s2_c2'],
    p3: ['g10_p3_05', 'g10_p3_06', 'g10_p3_07', 'g10_p3_08'],
    p4: ['g10_p4_s2_c1', 'g10_p4_s2_c2', 'g10_p4_s2_c3']
  },
  // BỘ 3: Mã 301
  {
    code: '301',
    p1: ['g10_p1_25', 'g10_p1_28', 'g10_p1_27', 'g10_p1_29', 'g10_p1_31', 'g10_p1_51', 'g10_p1_xh_08', 'g10_p1_33', 'g10_p1_30', 'g10_p1_55', 'g10_p1_tp_vd_04', 'g10_p1_32'],
    p2: ['g10_p2_s3_c1', 'g10_p2_s3_c2'],
    p3: ['g10_p3_09', 'g10_p3_10', 'g10_p3_11', 'g10_p3_12'],
    p4: ['g10_p4_s3_c1', 'g10_p4_s3_c2', 'g10_p4_s3_c3']
  },
  // BỘ 4: Mã 401
  {
    code: '401',
    p1: ['g10_p1_37', 'g10_p1_38', 'g10_p1_09', 'g10_p1_43', 'g10_p1_10', 'g10_p1_52', 'g10_p1_xh_09', 'g10_p1_39', 'g10_p1_34', 'g10_p1_56', 'g10_p1_tp_vd_05', 'g10_p1_40'],
    p2: ['g10_p2_s4_c1', 'g10_p2_s4_c2'],
    p3: ['g10_p3_13', 'g10_p3_14', 'g10_p3_15', 'g10_p3_16'],
    p4: ['g10_p4_s4_c1', 'g10_p4_s4_c2', 'g10_p4_s4_c3']
  },
  // BỘ 5: Mã 501
  {
    code: '501',
    p1: ['g10_p1_26', 'g10_p1_42', 'g10_p1_45', 'g10_p1_22', 'g10_p1_11', 'g10_p1_57', 'g10_p1_xh_10', 'g10_p1_46', 'g10_p1_44', 'g10_p1_59', 'g10_p1_tp_vd_06', 'g10_p1_47'],
    p2: ['g10_p2_s5_c1', 'g10_p2_s5_c2'],
    p3: ['g10_p3_dv_nb_03', 'g10_p3_bth_nb_03', 'g10_p3_dv_vd_06', 'g10_p3_bth_vd_04'],
    p4: ['g10_p4_s5_c1', 'g10_p4_s5_c2', 'g10_p4_s5_c3']
  }
];

// KHỐI 11 (Chương 1: Cân bằng hóa học + Chương 2: Nitrogen & Sulfur)
const DISJOINT_5_SUITE_SPECS_11 = [
  // BỘ 1: Mã 101 (Chuẩn 100% Ma trận & Đặc tả theo yêu cầu)
  {
    code: '101',
    p1: [
      'g11_p1_01',      // C1: Bài 1 (Biết - Phản ứng thuận nghịch)
      'g11_p1_02',      // C2: Bài 1 (Biết - Yếu tố không làm chuyển dịch CB)
      'g11_p1_101_c03',  // C3: Bài 2 (Biết - Định nghĩa Base theo Brønsted-Lowry: nhận proton)
      'g11_p1_05',      // C4: Bài 2 (Biết - Chất không điện li trong nước: C12H22O11)
      'g11_p1_101_c05',  // C5: Bài 3 (Biết - Môi trường kiềm ở 25°C có pH > 7)
      'g11_p1_101_c06',  // C6: Bài 4 (Biết - Hoạt động N2 ở t° cao/sấm sét phản ứng O2 tạo NO)
      'g11_p1_101_c07',  // C7: Bài 5 (Biết - Hình học phân tử NH3: chóp tam giác)
      'g11_p1_101_c08',  // C8: Bài 5 (Biết - Phân đạm ammonium nitrate: NH4NO3)
      'g11_p1_101_c09',  // C9: Bài 2 (Hiểu - Phèn chua làm trong nước nhờ thủy phân Al3+ tạo keo Al(OH)3)
      'g11_p1_101_c10',  // C10: Bài 5 (Hiểu - Nguyên nhân hiện tượng phú dưỡng do dư thừa NO3-, PO43-)
      'g11_p1_101_c11',  // C11: Bài 3 (Vận dụng - Chuẩn độ 20 mL HCl cần 25 mL NaOH 0,1M -> CM = 0,125M)
      'g11_p1_101_c12'   // C12: Bài 5 (Vận dụng - Phản ứng Haber: 1 mol N2 + 3 mol H2 ra 0,4 mol NH3 -> H = 20%)
    ],
    p2: ['g11_p2_01', 'g11_p2_02'],
    p3: [
      'g11_p3_101_c01',  // C1: Bài 3 (Biết - Dung dịch có [H+] = 10^-4 M -> pH = 4)
      'g11_p3_101_c02',  // C2: Bài 1 (Hiểu - Đếm số tác động làm CB Haber chuyển dịch chiều thuận -> 3)
      'g11_p3_101_c03',  // C3: Bài 4 (Hiểu - Năng lượng liên kết ba N≡N rất lớn là 945 kJ/mol giải thích tính trơ)
      'g11_p3_101_c04'   // C4: Bài 5 (Vận dụng - Tính hiệu suất tổng hợp Haber NH3 -> 20%)
    ],
    p4: ['g11_p4_s1_c1', 'g11_p4_s1_c2', 'g11_p4_s1_c3']
  },
  // BỘ 2: Mã 201
  {
    code: '201',
    p1: ['g11_p1_03', 'g11_p1_13', 'g11_p1_07', 'g11_p1_14', 'g11_p1_17', 'g11_p1_16', 'g11_p1_18', 'g11_p1_21', 'g11_p1_25', 'g11_p1_55', 'g11_p1_b3_vd_02', 'g11_p1_b5_vd_02'],
    p2: ['g11_p2_s2_c1', 'g11_p2_s2_c2'],
    p3: ['g11_p3_03', 'g11_p3_16', 'g11_p3_b4_02', 'g11_p3_05'],
    p4: ['g11_p4_s2_c1', 'g11_p4_s2_c2', 'g11_p4_s2_c3']
  },
  // BỘ 3: Mã 301
  {
    code: '301',
    p1: ['g11_p1_26', 'g11_p1_27', 'g11_p1_15', 'g11_p1_28', 'g11_p1_29', 'g11_p1_31', 'g11_p1_32', 'g11_p1_33', 'g11_p1_52', 'g11_p1_b5_th_04', 'g11_p1_b3_vd_03', 'g11_p1_b5_vd_03'],
    p2: ['g11_p2_s3_c1', 'g11_p2_s3_c2'],
    p3: ['g11_p3_08', 'g11_p3_20', 'g11_p3_b4_03', 'g11_p3_07'],
    p4: ['g11_p4_s3_c1', 'g11_p4_s3_c2', 'g11_p4_s3_c3']
  },
  // BỘ 4: Mã 401
  {
    code: '401',
    p1: ['g11_p1_37', 'g11_p1_38', 'g11_p1_39', 'g11_p1_40', 'g11_p1_41', 'g11_p1_42', 'g11_p1_43', 'g11_p1_44', 'g11_p1_30', 'g11_p1_b5_th_05', 'g11_p1_b3_vd_04', 'g11_p1_b5_vd_04'],
    p2: ['g11_p2_s4_c1', 'g11_p2_s4_c2'],
    p3: ['g11_p3_b3_04', 'g11_p3_b1_04', 'g11_p3_b4_04', 'g11_p3_10'],
    p4: ['g11_p4_s4_c1', 'g11_p4_s4_c2', 'g11_p4_s4_c3']
  },
  // BỘ 5: Mã 501
  {
    code: '501',
    p1: ['g11_p1_49', 'g11_p1_b1_10', 'g11_p1_51', 'g11_p1_35', 'g11_p1_53', 'g11_p1_54', 'g11_p1_34', 'g11_p1_b5_10', 'g11_p1_36', 'g11_p1_45', 'g11_p1_b3_vd_05', 'g11_p1_b5_vd_05'],
    p2: ['g11_p2_s5_c1', 'g11_p2_s5_c2'],
    p3: ['g11_p3_b3_05', 'g11_p3_b1_05', 'g11_p3_b4_05', 'g11_p3_11'],
    p4: ['g11_p4_s5_c1', 'g11_p4_s5_c2', 'g11_p4_s5_c3']
  }
];

// KHỐI 12 (Chương 1: Ester - Lipid + Chương 2: Carbohydrate + Chương 3: Amine - Amino acid)
const DISJOINT_5_SUITE_SPECS_12 = [
  // BỘ ĐỀ 1: Mã 101
  {
    code: '101',
    p1: ['b1_tn_nb_1', 'b1_tn_nb_2', 'b2_tn_nb_1', 'b2_tn_nb_2', 'b3_tn_nb_1', 'b3_tn_th_1', 'b4_tn_nb_1', 'b4_tn_th_6', 'b5_tn_nb_1', 'b5_tn_th_9', 'b6_tn_nb_1', 'b7_tn_th_1'],
    p2: ['b1_ds_nb_1', 'b6_ds_nb_1'],
    p3: ['b1_tl_nb_1', 'b2_tl_nb_1', 'b5_tl_vd_3', 'b7_tl_nb_1'],
    p4: ['b2_tuluan_s1', 'b5_tuluan_s1']
  },
  // BỘ ĐỀ 2: Mã 201
  {
    code: '201',
    p1: ['b1_tn_nb_3', 'b1_tn_nb_4', 'b2_tn_nb_3', 'b2_tn_nb_4', 'b3_tn_nb_2', 'b3_tn_th_2', 'b4_tn_nb_2', 'b4_tn_th_7', 'b5_tn_nb_2', 'b5_tn_th_10', 'b6_tn_nb_2', 'b7_tn_th_2'],
    p2: ['b1_ds_nb_2', 'b6_ds_nb_2'],
    p3: ['b1_tl_nb_2', 'b2_tl_nb_2', 'b5_tl_vd_4', 'b7_tl_nb_2'],
    p4: ['b2_tuluan_s2', 'b5_tuluan_s2']
  },
  // BỘ ĐỀ 3: Mã 301
  {
    code: '301',
    p1: ['b1_tn_nb_5', 'b1_tn_nb_6', 'b2_tn_nb_5', 'b2_tn_nb_6', 'b3_tn_nb_3', 'b3_tn_th_3', 'b4_tn_nb_3', 'b4_tn_th_8', 'b5_tn_nb_3', 'b5_tn_th_11', 'b6_tn_nb_3', 'b7_tn_th_3'],
    p2: ['b1_ds_th_3', 'b6_ds_th_3'],
    p3: ['b1_tl_th_3', 'b2_tl_nb_3', 'b5_tl_vd_5', 'b7_tl_nb_3'],
    p4: ['b2_tuluan_s3', 'b5_tuluan_s3']
  },
  // BỘ ĐỀ 4: Mã 401
  {
    code: '401',
    p1: ['b1_tn_nb_7', 'b1_tn_nb_8', 'b2_tn_nb_7', 'b2_tn_nb_8', 'b3_tn_nb_4', 'b3_tn_th_4', 'b4_tn_nb_4', 'b4_tn_th_9', 'b5_tn_nb_4', 'b5_tn_th_12', 'b6_tn_nb_4', 'b7_tn_th_4'],
    p2: ['b1_ds_th_4', 'b6_ds_nb_4'],
    p3: ['b1_tl_th_4', 'b2_tl_nb_4', 'b5_tl_nb_1', 'b6_tl_nb_6'],
    p4: ['b2_tuluan_s4', 'b5_tuluan_s4']
  },
  // BỘ ĐỀ 5: Mã 501
  {
    code: '501',
    p1: ['b1_tn_nb_9', 'b1_tn_nb_10', 'b2_tn_nb_9', 'b2_tn_nb_10', 'b3_tn_nb_5', 'b3_tn_th_5', 'b4_tn_nb_5', 'b4_tn_th_10', 'b5_tn_nb_5', 'b5_tn_th_13', 'b6_tn_nb_5', 'b7_tn_th_5'],
    p2: ['b1_ds_s5_c1', 'b6_ds_nb_5'],
    p3: ['b1_tl_th_5', 'b2_tl_nb_5', 'b5_tl_nb_2', 'b5_tl_nb_5'],
    p4: ['b2_tuluan_s5', 'b5_tuluan_s5']
  },
  // BỘ ĐỀ 6: Mã 601 (Đề đặc biệt 1: Đúng-Sai & Trả lời ngắn theo ảnh gửi)
  {
    code: '601',
    p1: ['b1_tn_th_11', 'b1_tn_th_12', 'b2_tn_th_1', 'b2_tn_th_2', 'b3_tn_nb_1', 'b3_tn_th_1', 'b4_tn_th_11', 'b4_tn_th_6', 'b5_tn_nb_6', 'b5_tn_th_14', 'b6_tn_nb_6', 'b7_tn_nb_1'],
    p2: ['b1_ds_nb_1', 'b6_ds_nb_1'],
    p3: ['b1_tl_nb_1', 'b2_tl_nb_2', 'b5_tl_nb_7', 'b7_tl_nb_1'],
    p4: ['p4_lythuyet_xaphong', 'p4_lythuyet_trangbac']
  },
  // BỘ ĐỀ 7: Mã 701 (Đề đặc biệt 2: Đúng-Sai & Trả lời ngắn theo ảnh gửi)
  {
    code: '701',
    p1: ['b1_tn_th_13', 'b1_tn_th_14', 'b2_tn_nb_1', 'b2_tn_nb_2', 'b3_tn_nb_2', 'b3_tn_th_3', 'b4_tn_nb_1', 'b4_tn_th_8', 'b5_tn_nb_7', 'b5_tn_vd_15', 'b6_tn_nb_7', 'b7_tn_nb_2'],
    p2: ['b1_ds_th_3', 'b6_ds_th_3'],
    p3: ['b1_tl_th_3', 'b3_tl_nb_2', 'b5_tl_nb_6', 'b7_tl_nb_2'],
    p4: ['p4_lythuyet_lipid_suckhoe', 'b5_tuluan_hieu_chuyenhoa']
  }
];

// Sinh đề từ Đề cương theo đúng 100% Ma trận & Bản đặc tả
function generateExam(matrixConfig = {}, grade = '12') {
  const g = String(grade).trim();
  const bank = getBank(g);
  const generator = getMatrixSpecGen(g);
  const examId = "DE-" + Math.floor(100 + Math.random() * 900);
  const examCode = matrixConfig.examCode || "101";
  const term = matrixConfig.term || 'giuaki';
  const termName = (term === 'cuoiki' || term === 'ck1') ? 'CUỐI HỌC KÌ I' : 'GIỮA HỌC KÌ I';

  // 1. Phân giải ma trận thành danh sách Slots định danh rõ ràng
  const { slots } = resolveMatrixToSlots(g, term);
  const usedIds = new Set();

  const part1Slots = slots.filter(s => s.part === 'part1');
  const part2Slots = slots.filter(s => s.part === 'part2');
  const part3Slots = slots.filter(s => s.part === 'part3');
  const part4Slots = slots.filter(s => s.part === 'part4');

  // Lấy câu hỏi chuẩn xác 100% theo từng slot của Ma trận
  const part1 = part1Slots.map((slot, idx) => {
    let pool = exactMatchQuery(bank, slot, usedIds);
    let chosen = pool.length > 0 ? pickRandom(pool, 1)[0] : null;
    if (!chosen) {
      const fallbackPool = bank.filter(q => q.part === 'part1' && q.level === slot.level && !usedIds.has(q.id));
      chosen = fallbackPool.length > 0 ? pickRandom(fallbackPool, 1)[0] : (bank.filter(q => q.part === 'part1')[idx] || bank[0]);
    }
    if (chosen && chosen.id) usedIds.add(chosen.id);
    const qFormatted = formatQuestionObject({ ...clone(chosen), order: idx + 1, slotCode: slot.slotId });
    bindSpecAttributesToQuestion(qFormatted, slot);
    return enrichQuestionWithSpec(qFormatted, g, term);
  });

  const part2 = part2Slots.map((slot, idx) => {
    let pool = exactMatchQuery(bank, slot, usedIds);
    let chosen = pool.length > 0 ? pickRandom(pool, 1)[0] : null;
    if (!chosen) {
      const fallbackPool = bank.filter(q => q.part === 'part2' && !usedIds.has(q.id));
      chosen = fallbackPool.length > 0 ? pickRandom(fallbackPool, 1)[0] : (bank.filter(q => q.part === 'part2')[idx] || bank[0]);
    }
    if (chosen && chosen.id) usedIds.add(chosen.id);
    const qFormatted = formatQuestionObject({ ...clone(chosen), order: idx + 1, slotCode: slot.slotId });
    bindSpecAttributesToQuestion(qFormatted, slot);
    return enrichQuestionWithSpec(qFormatted, g, term);
  });

  const part3 = part3Slots.map((slot, idx) => {
    let pool = exactMatchQuery(bank, slot, usedIds);
    let chosen = pool.length > 0 ? pickRandom(pool, 1)[0] : null;
    if (!chosen) {
      const fallbackPool = bank.filter(q => q.part === 'part3' && q.level === slot.level && !usedIds.has(q.id));
      chosen = fallbackPool.length > 0 ? pickRandom(fallbackPool, 1)[0] : (bank.filter(q => q.part === 'part3')[idx] || bank[0]);
    }
    if (chosen && chosen.id) usedIds.add(chosen.id);
    const qFormatted = formatQuestionObject({ ...clone(chosen), order: idx + 1, slotCode: slot.slotId });
    bindSpecAttributesToQuestion(qFormatted, slot);
    return enrichQuestionWithSpec(qFormatted, g, term);
  });

  const part4 = part4Slots.map((slot, idx) => {
    let pool = exactMatchQuery(bank, slot, usedIds);
    let chosen = pool.length > 0 ? pickRandom(pool, 1)[0] : null;
    if (!chosen) {
      const fallbackPool = bank.filter(q => q.part === 'part4' && !usedIds.has(q.id));
      chosen = fallbackPool.length > 0 ? pickRandom(fallbackPool, 1)[0] : (bank.filter(q => q.part === 'part4')[idx] || bank[0]);
    }
    if (chosen && chosen.id) usedIds.add(chosen.id);
    const qCopy = clone(chosen);
    qCopy.points = slot.points;
    const qFormatted = formatQuestionObject({ ...qCopy, order: idx + 1, slotCode: slot.slotId });
    bindSpecAttributesToQuestion(qFormatted, slot);
    return enrichQuestionWithSpec(qFormatted, g, term);
  });

  const examResult = {
    examId,
    examCode,
    title: matrixConfig.title || `ĐỀ KIỂM TRA ${termName} - MÔN HÓA HỌC ${g}`,
    school: "TRƯỜNG THPT BÙI THỊ XUÂN – MŨI NÉ",
    grade: `HÓA HỌC ${g}`,
    gradeNum: g,
    term,
    termName,
    year: "2025 – 2026 / 2026 – 2027",
    timeMinutes: matrixConfig.timeMinutes || 45,
    createdAt: new Date().toISOString(),
    parts: {
      part1,
      part2,
      part3,
      part4
    }
  };

  enrichExamWithBlueprint(examResult);
  examResult.matrixHtml = generator.generateExamMatrixHTML(examResult);
  examResult.specHtml = generator.generateExamSpecHTML(examResult);
  examResult.appendix2SpecHtml = generateAppendix2SpecTableHTML(examResult, g, term);
  examResult.validationReport = validateExamAgainstMatrix(examResult, g, term);
  return examResult;
}

// Sinh đề tương tự:
// - Câu LÝ THUYẾT: Giữ nguyên y hệt từ đề cương
// - Câu TÍNH TOÁN: Thay số liệu ngẫu nhiên, tự động tính lại lời giải và đáp án
function generateSimilarExam(baseExam, newCode = "102", grade = '12') {
  const g = String(baseExam.gradeNum || grade).trim();
  const bank = getBank(g);
  const generator = getMatrixSpecGen(g);

  const similarExam = clone(baseExam);
  similarExam.examId = "DE-" + Math.floor(100 + Math.random() * 900);
  similarExam.examCode = String(newCode);
  similarExam.parentExamId = baseExam.examId;
  similarExam.parentExamCode = baseExam.examCode;
  similarExam.generatedType = "SIMILAR_MUTATED";

  for (const partKey of ['part1', 'part2', 'part3', 'part4']) {
    if (!similarExam.parts[partKey]) continue;
    similarExam.parts[partKey] = similarExam.parts[partKey].map(q => {
      const originalInBank = bank.find(b => b.id === q.id) || q;

      if (originalInBank.category === 'tinh_toan' && typeof originalInBank.generator === 'function') {
        const mutated = originalInBank.generator();
        const mutatedQ = {
          ...q,
          content: mutated.content,
          options: mutated.options || q.options,
          correctAnswer: mutated.correctAnswer || q.correctAnswer,
          explanation: mutated.explanation || q.explanation,
          isMutated: true,
          originalContent: originalInBank.content
        };
        return formatQuestionObject(mutatedQ);
      } else {
        // Lý thuyết: GIỮ NGUYÊN 100% TỪ ĐỀ CƯƠNG
        return formatQuestionObject({
          ...q,
          isMutated: false,
          isTheoryKept: true
        });
      }
    });
  }

  enrichExamWithBlueprint(similarExam);
  similarExam.matrixHtml = generator.generateExamMatrixHTML(similarExam);
  similarExam.specHtml = generator.generateExamSpecHTML(similarExam);
  similarExam.appendix2SpecHtml = generateAppendix2SpecTableHTML(similarExam, g, similarExam.term);
  similarExam.validationReport = validateExamAgainstMatrix(similarExam, g, similarExam.term);

  return similarExam;
}

// Sinh bộ 4 mã đề tương tự thay số (101, 102, 103, 104)
function generateExamPackage(baseExam, count = 4, grade = '12') {
  const baseCodeNum = parseInt(baseExam.examCode) || 101;
  const packageExams = [];

  packageExams.push(baseExam);

  for (let i = 1; i < count; i++) {
    const nextCode = String(baseCodeNum + i);
    const sim = generateSimilarExam(baseExam, nextCode, grade);
    packageExams.push(sim);
  }

  return packageExams;
}

// Sinh 5 bộ đề gốc HOÀN TOÀN KHÔNG TRÙNG LẶP kèm theo các đề tương tự thay số
function generate5BaseSuites(grade = '12', term = 'giuaki') {
  const g = String(grade).trim();
  const bank = getBank(g);
  const generator = getMatrixSpecGen(g);
  const termName = (term === 'cuoiki' || term === 'ck1' || term === 'hocki1') ? 'CUỐI HỌC KÌ I' : 'GIỮA HỌC KÌ I';
  const matrixRes = resolveMatrixToSlots(g, term);
  const slotMap = matrixRes.slotMap;

  let specs = DISJOINT_5_SUITE_SPECS_12;
  if (g === '10') specs = DISJOINT_5_SUITE_SPECS_10;
  else if (g === '11') specs = DISJOINT_5_SUITE_SPECS_11;

  const suites = [];

  for (let sIdx = 0; sIdx < specs.length; sIdx++) {
    const spec = specs[sIdx];
    const baseCode = spec.code;

    const part1 = spec.p1.map((id, idx) => {
      const q = bank.find(item => item.id === id) || { id, content: "Câu hỏi " + (idx+1), options: ["A", "B", "C", "D"], correctAnswer: "A" };
      const qFormatted = formatQuestionObject({ ...clone(q), order: idx + 1 });
      const slot = slotMap.get(`P1_C${idx + 1}`);
      if (slot) bindSpecAttributesToQuestion(qFormatted, slot);
      return enrichQuestionWithSpec(qFormatted, g, term);
    });

    const part2 = spec.p2.map((id, idx) => {
      const q = bank.find(item => item.id === id) || { id, content: "Câu hỏi Đúng/Sai " + (idx+1), items: [] };
      const qFormatted = formatQuestionObject({ ...clone(q), order: idx + 1 });
      const slot = slotMap.get(`P2_C${idx + 1}`);
      if (slot) bindSpecAttributesToQuestion(qFormatted, slot);
      return enrichQuestionWithSpec(qFormatted, g, term);
    });

    const part3 = spec.p3.map((id, idx) => {
      const q = bank.find(item => item.id === id) || { id, content: "Câu hỏi Trả lời ngắn " + (idx+1), correctAnswer: "" };
      const qFormatted = formatQuestionObject({ ...clone(q), order: idx + 1 });
      const slot = slotMap.get(`P3_C${idx + 1}`);
      if (slot) bindSpecAttributesToQuestion(qFormatted, slot);
      return enrichQuestionWithSpec(qFormatted, g, term);
    });

    const part4 = spec.p4.map((id, idx) => {
      const q = bank.find(item => item.id === id) || { id, content: "Câu hỏi Tự luận " + (idx+1) };
      const qCopy = clone(q);
      if (g === '10') {
        qCopy.points = 1.0;
      } else if (g === '11') {
        qCopy.points = idx === 0 ? 0.5 : (idx === 1 ? 1.0 : 1.5);
      } else {
        qCopy.points = idx === 0 ? 1.0 : 2.0;
      }
      const qFormatted = formatQuestionObject({ ...qCopy, order: idx + 1 });
      const slot = slotMap.get(`P4_C${idx + 1}`);
      if (slot) bindSpecAttributesToQuestion(qFormatted, slot);
      return enrichQuestionWithSpec(qFormatted, g, term);
    });

    const baseExam = {
      examId: `DE-GOC-${g}-${baseCode}`,
      examCode: baseCode,
      title: `ĐỀ KIỂM TRA ${termName} - MÔN HÓA HỌC ${g} (BỘ ĐỀ SỐ ${sIdx + 1})`,
      school: "TRƯỜNG THPT BÙI THỊ XUÂN – MŨI NÉ",
      grade: `HÓA HỌC ${g}`,
      gradeNum: g,
      term: term || 'giuaki',
      termName,
      year: "2025 – 2026 / 2026 – 2027",
      timeMinutes: 45,
      createdAt: new Date().toISOString(),
      parts: {
        part1,
        part2,
        part3,
        part4
      }
    };

    enrichExamWithBlueprint(baseExam);
    baseExam.matrixHtml = generator.generateExamMatrixHTML(baseExam);
    baseExam.specHtml = generator.generateExamSpecHTML(baseExam);
    baseExam.appendix2SpecHtml = generateAppendix2SpecTableHTML(baseExam, g, term);
    baseExam.validationReport = validateExamAgainstMatrix(baseExam, g, term);

    // Sinh 3 đề tương tự thay số đi kèm (ví dụ 102, 103, 104)
    const packageExams = generateExamPackage(baseExam, 4, g);

    suites.push({
      suiteIndex: sIdx + 1,
      grade: g,
      suiteName: `Bộ Đề Số ${sIdx + 1} (Mã ${baseCode} - ${parseInt(baseCode) + 3})`,
      baseCode: String(baseCode),
      exams: packageExams
    });
  }

  return suites;
}

module.exports = {
  getBank,
  getMatrixSpecGen,
  generateExam,
  generateSimilarExam,
  generateExamPackage,
  generate5BaseSuites,
  mutateCalculationQuestion,
  validateExamAgainstMatrix,
  resolveMatrixToSlots,
  generateAppendix2SpecTableHTML,
  bindSpecAttributesToQuestion,
  exactMatchQuery
};
