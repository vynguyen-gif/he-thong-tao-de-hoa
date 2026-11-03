// services/deterministicSlotEngine.js
// =========================================================================
// THUẬT TOÁN BỐC CÂU HỎI DETERMINISTIC (DETERMINISTIC SLOT-MATCHING ENGINE)
// & TẦNG KIỂM THỬ ĐỐI SOÁT (ASSERTION VALIDATOR) CHUẨN CÔNG VĂN 7991/BGDĐT
// =========================================================================

const { EXAM_BLUEPRINTS } = require('./blueprintEngine');
const { questionBank } = require('../data/questionBank');
const { questionBank11 } = require('../data/questionBank11');
const { questionBank10 } = require('../data/questionBank10');
const { formatQuestionObject, formatChem } = require('./chemFormatter');

// Lấy ngân hàng câu hỏi theo khối
function getBankByGrade(grade) {
  const g = String(grade || '12').trim();
  if (g === '10') return questionBank10;
  if (g === '11') return questionBank11;
  return questionBank;
}

// =========================================================================
// 1. PHÂN GIẢI MA TRẬN THÀNH DANH SÁCH CÁC 'KHE CẮM' (SLOTS)
// =========================================================================
function resolveMatrixToSlots(grade = '12', term = 'giuaki') {
  const g = String(grade || '12').trim();
  const bp = EXAM_BLUEPRINTS[g] || EXAM_BLUEPRINTS['12'];

  const slots = [];
  const slotMap = new Map();

  // 1.1. Slots Phần I (12 câu trắc nghiệm nhiều lựa chọn)
  if (bp.part1 && Array.isArray(bp.part1)) {
    bp.part1.forEach((s, idx) => {
      const slotDef = {
        slotId: s.slot || `P1_C${idx + 1}`,
        part: 'part1',
        format: 'part1',
        formatName: 'Trắc nghiệm nhiều lựa chọn',
        order: idx + 1,
        orderInPart: idx + 1,
        chapter: s.chapter || '',
        lessonId: s.lessonId || '',
        knowledgeUnit: s.knowledgeUnit || '',
        level: s.level || 'biet',
        levelName: s.levelName || (s.level === 'vd' ? 'Vận dụng' : (s.level === 'hieu' ? 'Thông hiểu' : 'Nhận biết')),
        points: s.points || 0.25,
        indicator_code: s.indicatorCode || s.indicator_code || 'HH.1.1',
        yccd_text: s.requirement || s.yccd_text || ''
      };
      slots.push(slotDef);
      slotMap.set(slotDef.slotId, slotDef);
    });
  }

  // 1.2. Slots Phần II (2 câu trắc nghiệm Đúng - Sai, mỗi câu 4 ý a,b,c,d)
  if (bp.part2 && Array.isArray(bp.part2)) {
    bp.part2.forEach((s, idx) => {
      const items = (s.items || []).map((it, itIdx) => ({
        id: it.id || ['a', 'b', 'c', 'd'][itIdx],
        level: it.level || 'biet',
        levelName: it.levelName || (it.level === 'vd' ? 'Vận dụng' : (it.level === 'hieu' ? 'Thông hiểu' : 'Nhận biết')),
        indicator_code: it.indicatorCode || it.indicator_code || 'HH.1.1',
        knowledgeUnit: it.knowledgeUnit || s.knowledgeUnit || '',
        yccd_text: it.requirement || it.yccd_text || s.requirement || '',
        points: it.points || 0.25
      }));

      const slotDef = {
        slotId: s.slot || `P2_C${idx + 1}`,
        part: 'part2',
        format: 'part2',
        formatName: 'Trắc nghiệm Đúng - Sai',
        order: idx + 1,
        orderInPart: idx + 1,
        chapter: s.chapter || '',
        lessonId: s.lessonId || '',
        knowledgeUnit: s.knowledgeUnit || '',
        level: s.level || 'biet_hieu',
        levelName: s.levelName || 'Nhận biết – Thông hiểu',
        points: s.points || 1.0,
        items
      };
      slots.push(slotDef);
      slotMap.set(slotDef.slotId, slotDef);
    });
  }

  // 1.3. Slots Phần III (4 câu trắc nghiệm trả lời ngắn)
  if (bp.part3 && Array.isArray(bp.part3)) {
    bp.part3.forEach((s, idx) => {
      const slotDef = {
        slotId: s.slot || `P3_C${idx + 1}`,
        part: 'part3',
        format: 'part3',
        formatName: 'Trắc nghiệm trả lời ngắn',
        order: idx + 1,
        orderInPart: idx + 1,
        chapter: s.chapter || '',
        lessonId: s.lessonId || '',
        knowledgeUnit: s.knowledgeUnit || '',
        level: s.level || 'biet',
        levelName: s.levelName || (s.level === 'vd' ? 'Vận dụng' : (s.level === 'hieu' ? 'Thông hiểu' : 'Nhận biết')),
        points: s.points || 0.50,
        indicator_code: s.indicatorCode || s.indicator_code || 'HH.1.1',
        yccd_text: s.requirement || s.yccd_text || ''
      };
      slots.push(slotDef);
      slotMap.set(slotDef.slotId, slotDef);
    });
  }

  // 1.4. Slots Phần IV (Tự luận: Khối 10: 3 câu, Khối 11: 3 câu, Khối 12: 2 câu)
  if (bp.part4 && Array.isArray(bp.part4)) {
    bp.part4.forEach((s, idx) => {
      const subItems = s.subItems ? s.subItems.map(sub => ({
        id: sub.id,
        levelName: sub.levelName,
        level: (sub.levelName || '').toLowerCase().includes('vận dụng') ? 'vd' : 'hieu',
        indicator_code: sub.indicatorCode || sub.indicator_code || '',
        points: sub.points || 0.50,
        yccd_text: sub.yccd_text || sub.requirement || ''
      })) : null;

      const slotDef = {
        slotId: s.slot || `P4_C${idx + 1}`,
        part: 'part4',
        format: 'part4',
        formatName: 'Tự luận',
        order: idx + 1,
        orderInPart: idx + 1,
        chapter: s.chapter || '',
        lessonId: s.lessonId || '',
        knowledgeUnit: s.knowledgeUnit || '',
        level: s.level || 'hieu_vd',
        levelName: s.levelName || 'Thông hiểu – Vận dụng',
        points: s.points || (idx === 0 ? 1.0 : (g === '12' ? 2.0 : 1.0)),
        indicator_code: s.indicatorCode || s.indicator_code || '',
        yccd_text: s.requirement || s.yccd_text || '',
        subItems
      };
      slots.push(slotDef);
      slotMap.set(slotDef.slotId, slotDef);
    });
  }

  return {
    grade: g,
    term: term || 'giuaki',
    title: bp.title || `HÓA HỌC ${g}`,
    totalSlots: slots.length,
    slots,
    slotMap
  };
}

// =========================================================================
// 2. TRUY VẤN CƠ SỞ DỮ LIỆU CHÍNH XÁC (EXACT MATCH QUERY)
// =========================================================================
function exactMatchQuery(bank, slot, excludeIds = new Set()) {
  if (!Array.isArray(bank) || !slot) return [];

  return bank.filter(q => {
    // 1. Loại trừ câu hỏi đã dùng nếu có
    if (excludeIds.has(q.id)) return false;

    // 2. Định dạng câu hỏi (Part) phải khớp 100%
    if (q.part !== slot.format) return false;

    // 3. Phần I và Phần III: Mức độ nhận thức phải khớp chính xác
    if (slot.format === 'part1' || slot.format === 'part3') {
      const qLevel = (q.level || 'biet').toLowerCase().trim();
      const sLevel = (slot.level || 'biet').toLowerCase().trim();
      if (qLevel !== sLevel) return false;
    }

    // 4. Khớp đơn vị kiến thức hoặc mã bài học
    const qLessonId = (q.lessonId || '').toLowerCase().trim();
    const sLessonId = (slot.lessonId || '').toLowerCase().trim();
    const qTitle = (q.lessonTitle || '').toLowerCase().trim();
    const sKu = (slot.knowledgeUnit || '').toLowerCase().trim();
    const sChapter = (slot.chapter || '').toLowerCase().trim();

    const lessonMatches = (qLessonId && sLessonId && qLessonId === sLessonId) ||
                          (sKu && qTitle && (qTitle.includes(sKu) || sKu.includes(qTitle))) ||
                          (sChapter && qTitle && qTitle.includes(sChapter));

    if (!lessonMatches) return false;

    // 5. Phần II: Kiểm tra nếu là câu Đúng - Sai thì phải đủ 4 ý
    if (slot.format === 'part2') {
      if (!q.items || q.items.length !== 4) return false;
      // Khớp mức độ từng ý a,b,c,d
      if (slot.items && slot.items.length === 4) {
        for (let i = 0; i < 4; i++) {
          const itQ = q.items[i];
          const itS = slot.items[i];
          const itQLevel = (itQ.level || 'biet').toLowerCase().trim();
          const itSLevel = (itS.level || 'biet').toLowerCase().trim();
          if (itQLevel !== itSLevel) return false;
        }
      }
    }

    return true;
  });
}

// =========================================================================
// 3. RÀNG BUỘC CHẶT CHẼ BẢN ĐẶC TẢ VÀO CÂU HỎI
// =========================================================================
function bindSpecAttributesToQuestion(q, slot) {
  if (!q || !slot) return q;

  q.slotId = slot.slotId;
  q.slotCode = slot.slotId;
  q.chapter = slot.chapter;
  q.knowledgeUnit = slot.knowledgeUnit;
  q.level = slot.level;
  q.levelName = slot.levelName;
  q.points = slot.points;
  q.indicator_code = slot.indicator_code;
  q.indicatorCode = slot.indicator_code;
  q.yccd_text = slot.yccd_text;
  q.requirement = slot.yccd_text;

  // Gắn nhãn Bản đặc tả (Tag hiển thị trên đề thi / file Word)
  q.specTagText = `[Đơn vị kiến thức: ${slot.knowledgeUnit} | Mức độ: ${slot.levelName} | Mã chỉ báo: ${slot.indicator_code}]`;

  // Ràng buộc cho từng ý Đúng - Sai (Phần II)
  if (slot.format === 'part2' && Array.isArray(q.items) && Array.isArray(slot.items)) {
    q.items = q.items.map((it, idx) => {
      const itSlot = slot.items[idx] || {};
      const itLevel = itSlot.levelName || (it.level === 'vd' ? 'Vận dụng' : (it.level === 'hieu' ? 'Thông hiểu' : 'Nhận biết'));
      const itCode = itSlot.indicator_code || it.code || 'HH.1.1';
      const itKu = itSlot.knowledgeUnit || slot.knowledgeUnit;
      const itYccd = itSlot.yccd_text || '';

      return {
        ...it,
        level: itSlot.level || it.level,
        levelName: itLevel,
        indicator_code: itCode,
        indicatorCode: itCode,
        knowledgeUnit: itKu,
        yccd_text: itYccd,
        points: itSlot.points || 0.25,
        specTagText: `[Đơn vị kiến thức: ${itKu} | Mức độ: ${itLevel} | Mã chỉ báo: ${itCode}]`
      };
    });
  }

  // Ràng buộc cho Tự luận (Phần IV)
  if (slot.format === 'part4' && slot.subItems && Array.isArray(slot.subItems)) {
    q.subItems = slot.subItems.map(sub => ({
      ...sub,
      indicator_code: sub.indicator_code || sub.indicatorCode,
      indicatorCode: sub.indicator_code || sub.indicatorCode
    }));
  }

  return q;
}

// =========================================================================
// 4. TẦNG KIỂM THỬ ĐỐI SOÁT (ASSERTION VALIDATOR) CHUẨN XÁC 100%
// =========================================================================
function validateExamAgainstMatrix(exam, grade = '12', term = 'giuaki') {
  const g = String(grade || exam.gradeNum || '12').trim();
  const matrixResolution = resolveMatrixToSlots(g, term);
  const { slots, slotMap } = matrixResolution;

  const errors = [];
  const warnings = [];
  const slotAudits = [];

  let totalScore = 0;
  let scoreBiet = 0;
  let scoreHieu = 0;
  let scoreVd = 0;

  // 4.1. Kiểm tra cấu trúc các phần
  const p1 = (exam.parts && exam.parts.part1) || [];
  const p2 = (exam.parts && exam.parts.part2) || [];
  const p3 = (exam.parts && exam.parts.part3) || [];
  const p4 = (exam.parts && exam.parts.part4) || [];

  if (p1.length !== 12) {
    errors.push(`Phần I có ${p1.length} câu (yêu cầu bắt buộc: 12 câu).`);
  }
  if (p2.length !== 2) {
    errors.push(`Phần II có ${p2.length} câu lớn (yêu cầu bắt buộc: 2 câu lớn).`);
  }
  if (p3.length !== 4) {
    errors.push(`Phần III có ${p3.length} câu (yêu cầu bắt buộc: 4 câu).`);
  }
  const expectedP4Count = (g === '12' ? 2 : 3);
  if (p4.length !== expectedP4Count) {
    errors.push(`Phần IV có ${p4.length} câu (yêu cầu bắt buộc đối với Khối ${g}: ${expectedP4Count} câu).`);
  }

  // 4.2. Kiểm tra từng Slot Phần I (P1_C1 -> P1_C12)
  p1.forEach((q, idx) => {
    const slotId = `P1_C${idx + 1}`;
    const slot = slotMap.get(slotId);
    const qPts = q.points || 0.25;
    totalScore += qPts;

    if (!slot) {
      errors.push(`Không tìm thấy định nghĩa Slot tương ứng cho câu ${slotId}.`);
      return;
    }

    // Tích lũy điểm nhận thức
    const qLvl = (q.level || 'biet').toLowerCase();
    if (qLvl === 'biet') scoreBiet += qPts;
    else if (qLvl === 'hieu') scoreHieu += qPts;
    else scoreVd += qPts;

    const matched = (q.level === slot.level) &&
                    (q.lessonId === slot.lessonId || (q.knowledgeUnit && q.knowledgeUnit === slot.knowledgeUnit));

    if (!matched) {
      errors.push(`[Sai lệch Slot ${slotId}] Câu hỏi ID=${q.id} có mức độ '${q.levelName || q.level}' (Ma trận yêu cầu: '${slot.levelName}') hoặc sai đơn vị kiến thức.`);
    }

    slotAudits.push({
      slotId,
      format: 'Phần I',
      order: idx + 1,
      questionId: q.id,
      levelRequired: slot.levelName,
      levelActual: q.levelName || q.level,
      knowledgeUnit: slot.knowledgeUnit,
      points: qPts,
      matched
    });
  });

  // 4.3. Kiểm tra từng Slot Phần II (P2_C1 -> P2_C2)
  p2.forEach((q, idx) => {
    const slotId = `P2_C${idx + 1}`;
    const slot = slotMap.get(slotId);
    let qPts = 0;

    if (!slot) {
      errors.push(`Không tìm thấy định nghĩa Slot cho ${slotId}.`);
      return;
    }

    if (!q.items || q.items.length !== 4) {
      errors.push(`[Sai lệch ${slotId}] Câu hỏi Đúng - Sai ID=${q.id} không có đủ 4 lệnh hỏi a, b, c, d.`);
      return;
    }

    let allItemsMatched = true;
    q.items.forEach((it, itIdx) => {
      const itPts = it.points || 0.25;
      qPts += itPts;
      totalScore += itPts;

      const itSlot = slot.items && slot.items[itIdx];
      const itLvl = (it.level || 'biet').toLowerCase();
      if (itLvl === 'biet') scoreBiet += itPts;
      else if (itLvl === 'hieu') scoreHieu += itPts;
      else scoreVd += itPts;

      if (itSlot && it.level !== itSlot.level) {
        errors.push(`[Sai lệch ${slotId}${it.id}] Ý ${it.id} có mức độ '${it.levelName || it.level}' (Ma trận yêu cầu: '${itSlot.levelName}').`);
        allItemsMatched = false;
      }
    });

    slotAudits.push({
      slotId,
      format: 'Phần II',
      order: idx + 1,
      questionId: q.id,
      levelRequired: slot.levelName,
      levelActual: allItemsMatched ? slot.levelName : 'LỆCH MỨC ĐỘ Ý CON',
      knowledgeUnit: slot.knowledgeUnit,
      points: qPts,
      matched: allItemsMatched
    });
  });

  // 4.4. Kiểm tra từng Slot Phần III (P3_C1 -> P3_C4)
  p3.forEach((q, idx) => {
    const slotId = `P3_C${idx + 1}`;
    const slot = slotMap.get(slotId);
    const qPts = q.points || 0.50;
    totalScore += qPts;

    if (!slot) {
      errors.push(`Không tìm thấy định nghĩa Slot cho ${slotId}.`);
      return;
    }

    const qLvl = (q.level || 'biet').toLowerCase();
    if (qLvl === 'biet') scoreBiet += qPts;
    else if (qLvl === 'hieu') scoreHieu += qPts;
    else scoreVd += qPts;

    const matched = (q.level === slot.level);
    if (!matched) {
      errors.push(`[Sai lệch Slot ${slotId}] Câu hỏi trả lời ngắn ID=${q.id} có mức độ '${q.levelName || q.level}' (Ma trận yêu cầu: '${slot.levelName}').`);
    }

    slotAudits.push({
      slotId,
      format: 'Phần III',
      order: idx + 1,
      questionId: q.id,
      levelRequired: slot.levelName,
      levelActual: q.levelName || q.level,
      knowledgeUnit: slot.knowledgeUnit,
      points: qPts,
      matched
    });
  });

  // 4.5. Kiểm tra từng Slot Phần IV (Tự luận)
  p4.forEach((q, idx) => {
    const slotId = `P4_C${idx + 1}`;
    const slot = slotMap.get(slotId);
    const qPts = q.points || (idx === 0 ? 1.0 : (g === '12' ? 2.0 : 1.0));
    totalScore += qPts;

    if (!slot) {
      errors.push(`Không tìm thấy định nghĩa Slot cho ${slotId}.`);
      return;
    }

    // Tích lũy điểm tự luận (theo subItems hoặc chia đều 50% hiểu, 50% vd)
    if (q.subItems && Array.isArray(q.subItems)) {
      q.subItems.forEach(sub => {
        const subPts = sub.points || (qPts / q.subItems.length);
        const subLvl = (sub.level || (sub.levelName || '').toLowerCase().includes('vận dụng') ? 'vd' : 'hieu');
        if (subLvl === 'vd') scoreVd += subPts;
        else scoreHieu += subPts;
      });
    } else {
      scoreHieu += qPts * 0.5;
      scoreVd += qPts * 0.5;
    }

    slotAudits.push({
      slotId,
      format: 'Phần IV',
      order: idx + 1,
      questionId: q.id,
      levelRequired: slot.levelName,
      levelActual: q.levelName || 'Thông hiểu – Vận dụng',
      knowledgeUnit: slot.knowledgeUnit,
      points: qPts,
      matched: true
    });
  });

  // 4.6. Kiểm tra tổng điểm và tỉ lệ %
  const roundedTotal = Math.round(totalScore * 10) / 10;
  if (Math.abs(roundedTotal - 10.0) > 0.05) {
    errors.push(`Tổng điểm toàn đề là ${roundedTotal} điểm (yêu cầu chuẩn tuyệt đối: 10,0 điểm).`);
  }

  const pctBiet = Math.round((scoreBiet / totalScore) * 100);
  const pctHieu = Math.round((scoreHieu / totalScore) * 100);
  const pctVd = Math.round((scoreVd / totalScore) * 100);

  // Chuẩn mực GDPT 2018: Biết 40%, Hiểu 30%, Vận dụng 30% (cho phép dung sai 5% do làm tròn)
  if (Math.abs(pctBiet - 40) > 5 || Math.abs(pctHieu - 30) > 5 || Math.abs(pctVd - 30) > 5) {
    warnings.push(`Tỉ lệ mức độ nhận thức thực tế: Biết ${pctBiet}% - Hiểu ${pctHieu}% - Vận dụng ${pctVd}% (Định mức chuẩn: 40% - 30% - 30%).`);
  }

  const isValid = errors.length === 0;

  return {
    isValid,
    grade: g,
    term,
    totalScore: roundedTotal,
    scoreBreakdown: {
      biet: Math.round(scoreBiet * 100) / 100,
      hieu: Math.round(scoreHieu * 100) / 100,
      vd: Math.round(scoreVd * 100) / 100
    },
    percentBreakdown: {
      biet: `${pctBiet}%`,
      hieu: `${pctHieu}%`,
      vd: `${pctVd}%`
    },
    totalQuestions: p1.length + p2.length + p3.length + p4.length,
    totalCommands: p1.length + (p2.length * 4) + p3.length + (p4.length * 2),
    slotAudits,
    errors,
    warnings
  };
}

// =========================================================================
// 5. TẠO BẢN ĐẶC TẢ ĐỀ KIỂM TRA PHỤ LỤC 2 (THEO CÔNG VĂN 7991/BGDĐT)
// =========================================================================
function generateAppendix2SpecTableHTML(exam, grade = '12', term = 'giuaki') {
  const g = String(grade || exam.gradeNum || '12').trim();
  const matrixResolution = resolveMatrixToSlots(g, term);
  const { slots } = matrixResolution;

  let rowsHtml = '';
  let rowIdx = 1;

  slots.forEach((slot, sIdx) => {
    let qCode = '';
    if (slot.format === 'part1') qCode = `Câu ${slot.order} (Phần I)`;
    else if (slot.format === 'part2') qCode = `Câu ${slot.order} (Phần II)`;
    else if (slot.format === 'part3') qCode = `Câu ${slot.order} (Phần III)`;
    else qCode = `Câu ${slot.order} (Phần IV)`;

    rowsHtml += `
      <tr>
        <td style="border: 1px solid #000; padding: 4px; text-align: center;">${rowIdx++}</td>
        <td style="border: 1px solid #000; padding: 4px; font-weight: bold;">${slot.chapter}</td>
        <td style="border: 1px solid #000; padding: 4px;">${slot.knowledgeUnit}</td>
        <td style="border: 1px solid #000; padding: 4px; text-align: center;">
          <span style="font-weight: bold; color: ${slot.level === 'vd' ? '#b91c1c' : (slot.level === 'hieu' ? '#1d4ed8' : '#047857')}">
            ${slot.levelName}
          </span>
        </td>
        <td style="border: 1px solid #000; padding: 4px; text-align: justify; line-height: 1.35;">
          ${slot.yccd_text}
          ${slot.indicator_code ? `<br><small style="color: #6b21a8; font-weight: bold;">[Mã chỉ báo: ${slot.indicator_code}]</small>` : ''}
        </td>
        <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold;">
          ${slot.format === 'part1' ? '1' : ''}
        </td>
        <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold;">
          ${slot.format === 'part2' ? '4 ý' : ''}
        </td>
        <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold;">
          ${slot.format === 'part3' ? '1' : ''}
        </td>
        <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold;">
          ${slot.format === 'part4' ? '1' : ''}
        </td>
        <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">
          ${qCode}
        </td>
      </tr>
    `;
  });

  return `
    <div style="font-family: 'Times New Roman', serif; font-size: 10pt; margin-top: 20px;">
      <p style="text-align: center; font-weight: bold; font-size: 11pt; text-transform: uppercase; margin-bottom: 8px;">
        PHỤ LỤC 2: BẢN ĐẶC TẢ ĐỀ KIỂM TRA ĐỊNH KÌ HÓA HỌC ${g}<br>
        (Ban hành kèm theo Công văn số 7991/BGDĐT-GDTrH của Bộ Giáo dục và Đào tạo)
      </p>
      <table style="width: 100%; border-collapse: collapse; border: 1px solid #000; font-size: 9.5pt;">
        <thead>
          <tr style="background-color: #f1f5f9; text-align: center; font-weight: bold;">
            <th style="border: 1px solid #000; padding: 4px; width: 3%;" rowspan="2">TT</th>
            <th style="border: 1px solid #000; padding: 4px; width: 14%;" rowspan="2">Chủ đề</th>
            <th style="border: 1px solid #000; padding: 4px; width: 18%;" rowspan="2">Đơn vị kiến thức</th>
            <th style="border: 1px solid #000; padding: 4px; width: 10%;" rowspan="2">Mức độ đánh giá</th>
            <th style="border: 1px solid #000; padding: 4px; width: 30%;" rowspan="2">Yêu cầu cần đạt</th>
            <th style="border: 1px solid #000; padding: 4px;" colspan="4">Số lượng câu hỏi</th>
            <th style="border: 1px solid #000; padding: 4px; width: 10%;" rowspan="2">Mã câu hỏi trong đề</th>
          </tr>
          <tr style="background-color: #f8fafc; text-align: center; font-size: 8.5pt;">
            <th style="border: 1px solid #000; padding: 3px; width: 4%;">TNKQ</th>
            <th style="border: 1px solid #000; padding: 3px; width: 4%;">Đ-S</th>
            <th style="border: 1px solid #000; padding: 3px; width: 4%;">TLN</th>
            <th style="border: 1px solid #000; padding: 3px; width: 4%;">TL</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>
    </div>
  `;
}

module.exports = {
  resolveMatrixToSlots,
  exactMatchQuery,
  bindSpecAttributesToQuestion,
  validateExamAgainstMatrix,
  generateAppendix2SpecTableHTML,
  getBankByGrade
};
