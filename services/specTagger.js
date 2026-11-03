// services/specTagger.js
// Bộ gắn nhãn [Đơn vị kiến thức | Mức độ | Mã chỉ báo] chuẩn 100% theo Bản đặc tả GDPT 2018 & CV 7991
const { EXAM_BLUEPRINTS } = require('./blueprintEngine');
const { getIndicatorDetail } = require('../data/standardIndicators');

function getLevelLabel(level) {
  if (!level) return 'Nhận biết';
  const l = level.toLowerCase();
  if (l.includes('vdc') || l.includes('cao')) return 'Vận dụng cao';
  if (l.includes('biet') && l.includes('hieu')) return 'Nhận biết – Thông hiểu';
  if (l.includes('hieu') && l.includes('vd')) return 'Thông hiểu – Vận dụng';
  if (l.includes('vd') || l.includes('van dung')) return 'Vận dụng';
  if (l.includes('hieu') || l.includes('thong hieu')) return 'Thông hiểu';
  return 'Nhận biết';
}

function getQuestionSpecMeta(q, grade = '12', examTerm = 'giuaki') {
  const g = String(grade || q.gradeNum || '12').trim();
  const bp = EXAM_BLUEPRINTS[g] || EXAM_BLUEPRINTS['12'];

  // Nếu câu hỏi đã có slotCode (vd: P1_C1, P3_C2...) hoặc có part và order
  if (q.slotCode) {
    const [partKey, orderStr] = q.slotCode.split('_');
    const order = parseInt(orderStr.replace(/\D/g, '')) || q.order || 1;
    const partMap = { P1: 'part1', P2: 'part2', P3: 'part3', P4: 'part4' };
    const pKey = partMap[partKey] || q.part;
    if (bp[pKey] && bp[pKey][order - 1]) {
      const slot = bp[pKey][order - 1];
      return {
        knowledgeUnit: slot.knowledgeUnit,
        levelName: slot.levelName,
        indicatorCode: slot.indicatorCode || 'HH.1.1',
        specTagText: `[Đơn vị kiến thức: ${slot.knowledgeUnit} | Mức độ: ${slot.levelName} | Mã chỉ báo: ${slot.indicatorCode || 'HH.1.1'}]`
      };
    }
  }

  if (q.part && q.order && bp[q.part] && bp[q.part][q.order - 1]) {
    const slot = bp[q.part][q.order - 1];
    return {
      knowledgeUnit: slot.knowledgeUnit,
      levelName: slot.levelName,
      indicatorCode: slot.indicatorCode || 'HH.1.1',
      specTagText: `[Đơn vị kiến thức: ${slot.knowledgeUnit} | Mức độ: ${slot.levelName} | Mã chỉ báo: ${slot.indicatorCode || 'HH.1.1'}]`
    };
  }

  // Fallback theo lessonId nếu câu hỏi đứng độc lập ngoài đề
  let knowledgeUnit = q.knowledgeUnit || '';
  let indicatorCode = q.code || q.indicatorCode || '';
  let levelName = getLevelLabel(q.level);

  if (g === '10') {
    const lId = (q.lessonId || '').toLowerCase();
    if (lId.includes('xuhuong') || lId.includes('tinhchat')) {
      knowledgeUnit = 'Xu hướng biến đổi một số tính chất của nguyên tử trong chu kì và phân nhóm';
      if (!indicatorCode) indicatorCode = q.level === 'vd' ? 'HH.1.1' : (q.level === 'hieu' ? 'HH.1.6' : 'HH.1.6');
    } else if (lId.includes('bth') || lId.includes('bangtuanhoan')) {
      knowledgeUnit = 'Cấu tạo của bảng tuần hoàn các nguyên tố hóa học';
      if (!indicatorCode) indicatorCode = q.level === 'biet' ? 'HH.1.1' : (q.level === 'hieu' ? 'HH.1.3' : 'HH.3.3');
    } else if (lId.includes('voelectron')) {
      knowledgeUnit = 'Cấu trúc lớp vỏ electron nguyên tử';
      if (!indicatorCode) indicatorCode = q.level === 'biet' ? 'HH.1.1' : 'HH.1.5';
    } else if (lId.includes('nguyento') || lId.includes('dongvi')) {
      knowledgeUnit = 'Nguyên tố hóa học, đồng vị';
      if (!indicatorCode) indicatorCode = q.level === 'biet' ? 'HH.1.1' : (q.level === 'hieu' ? 'HH.1.2' : 'HH.1.4');
    } else {
      knowledgeUnit = 'Các thành phần của nguyên tử';
      if (!indicatorCode) indicatorCode = q.level === 'biet' ? 'HH.1.2' : 'HH.1.4';
    }
  } else if (g === '11') {
    const lId = (q.lessonId || '').toLowerCase();
    if (lId.includes('b1') || lId.includes('canbang')) {
      knowledgeUnit = 'Bài 1. Mở đầu về cân bằng hóa học';
      if (!indicatorCode) indicatorCode = q.level === 'biet' ? 'HH.1.2' : 'HH.1.6';
    } else if (lId.includes('b2') || lId.includes('dienli')) {
      knowledgeUnit = 'Bài 2. Sự điện li, thuyết Brønsted – Lowry';
      if (!indicatorCode) indicatorCode = q.level === 'biet' ? 'HH.1.1' : 'HH.1.2';
    } else if (lId.includes('b3') || lId.includes('ph')) {
      knowledgeUnit = 'Bài 3. pH của dung dịch – chuẩn độ';
      if (!indicatorCode) indicatorCode = q.level === 'biet' ? 'HH.1.1' : (q.level === 'hieu' ? 'HH.1.2' : 'HH.3.3');
    } else if (lId.includes('b4') || lId.includes('nitrogen')) {
      knowledgeUnit = 'Bài 4. Đơn chất nitrogen';
      if (!indicatorCode) indicatorCode = q.level === 'biet' ? 'HH.1.1' : 'HH.1.6';
    } else {
      knowledgeUnit = 'Bài 5. Một số hợp chất của nitrogen';
      if (!indicatorCode) indicatorCode = q.level === 'biet' ? 'HH.1.3' : (q.level === 'hieu' ? 'HH.1.2' : 'HH.1.6');
    }
  } else {
    const lId = (q.lessonId || '').toLowerCase();
    if (lId.includes('b2') || lId.includes('xaphong')) {
      knowledgeUnit = 'Xà phòng và chất giặt rửa';
      if (!indicatorCode) indicatorCode = q.level === 'biet' ? 'HH.1.1' : 'HH.3.3';
    } else if (lId.includes('b3') || lId.includes('glu')) {
      knowledgeUnit = 'Glucose và fructose';
      if (!indicatorCode) indicatorCode = q.level === 'biet' ? 'HH.1.1' : 'HH.1.2';
    } else if (lId.includes('b4') || lId.includes('sac')) {
      knowledgeUnit = 'Saccharose và maltose';
      if (!indicatorCode) indicatorCode = q.level === 'biet' ? 'HH.1.1' : 'HH.1.2';
    } else if (lId.includes('b5') || lId.includes('tinhbot')) {
      knowledgeUnit = 'Tinh bột và cellulose';
      if (!indicatorCode) indicatorCode = q.level === 'biet' ? 'HH.1.1' : (q.level === 'hieu' ? 'HH.1.2' : 'HH.3.1');
    } else if (lId.includes('b6') || lId.includes('amine')) {
      knowledgeUnit = 'Amine';
      if (!indicatorCode) indicatorCode = q.level === 'biet' ? 'HH.1.1' : 'HH.1.2';
    } else if (lId.includes('b7') || lId.includes('amino')) {
      knowledgeUnit = 'Amino acid và peptide';
      if (!indicatorCode) indicatorCode = q.level === 'biet' ? 'HH.1.1' : 'HH.1.2';
    } else {
      knowledgeUnit = 'Ester - lipid';
      if (!indicatorCode) indicatorCode = q.level === 'biet' ? 'HH.1.1' : 'HH.1.2';
    }
  }

  return {
    knowledgeUnit,
    levelName,
    indicatorCode,
    specTagText: `[Đơn vị kiến thức: ${knowledgeUnit} | Mức độ: ${levelName} | Mã chỉ báo: ${indicatorCode}]`
  };
}

module.exports = {
  getLevelLabel,
  getQuestionSpecMeta
};
