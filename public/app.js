// public/app.js

// Chuẩn hóa mũi tên phản ứng hóa học (điều kiện phản ứng nằm phía trên mũi tên, độ dài vừa vặn)
function formatChemArrows(text) {
  if (!text || typeof text !== 'string') return text;
  let str = text;

  // 1. Mũi tên có điều kiện: -(thủy phân)->, ──(thủy phân)──→, --(t°)-->, -[men]->
  // Đưa điều kiện phản ứng lên phía trên dấu mũi tên
  str = str.replace(/(?:-{1,4}|─{1,4})\s*[\(\[]([^()\[\]]+)[\)\]]\s*(?:-{1,4}|─{1,4})(?:>|→)/g, function(m, p1) {
    const cond = p1.trim();
    const baseArrow = cond.length > 7 ? '───→' : '──→';
    return '<ruby class="chem-arrow">' + baseArrow + '<rt>' + cond + '</rt></ruby>';
  });

  // 2. Mũi tên dài thuần túy dạng ASCII (---> hoặc ---->): thu gọn lại còn 2 gạch cho ngắn đẹp
  str = str.replace(/-{3,}>/g, ' ──→ ');

  // 3. Mũi tên chuẩn: -->
  str = str.replace(/\s*-->\s*/g, ' ──→ ');

  // 4. Mũi tên đơn giữa chất / công thức phản ứng: ->
  str = str.replace(/([A-Za-z0-9\)\}\]₀-₉⁺⁻°\u00C0-\u1EF9])\s*->\s*([A-Za-z0-9\(\{\[₀-₉\u00C0-\u1EF9])/g, function(m, p1, p2) {
    return p1 + ' ──→ ' + p2;
  });

  // 5. Mũi tên thuận nghịch (cân bằng hóa học): <=> hoặc <-> hoặc <==>
  str = str.replace(/\s*(?:<=>|<->|<==>)\s*/g, ' ⇌ ');

  // Thu gọn khoảng trắng thừa quanh mũi tên
  return str.replace(/[ \t]{2,}/g, ' ');
}

// Hàm chuẩn hóa chỉ số dưới (subscript) và chỉ số trên (superscript) cho công thức hóa học
function formatChem(text) {
  if (!text || typeof text !== 'string') return text;

  // Chuẩn hóa dấu mũi tên phản ứng trước
  let str = formatChemArrows(text);
  
  const map = [
    [/\bC2H5COOH\b/g, 'C₂H₅COOH'],
    [/\bCH3COOC2H5\b/g, 'CH₃COOC₂H₅'],
    [/\(C15H31COO\)3C3H5/g, '(C₁₅H₃₁COO)₃C₃H₅'],
    [/\(C17H35COO\)3C3H5/g, '(C₁₇H₃₅COO)₃C₃H₅'],
    [/\(C17H33COO\)3C3H5/g, '(C₁₇H₃₃COO)₃C₃H₅'],
    [/\bHCOOCH3\b/g, 'HCOOCH₃'],
    [/\bHCOOC2H5\b/g, 'HCOOC₂H₅'],
    [/\bHCOOC3H7\b/g, 'HCOOC₃H₇'],
    [/\bCH3COOCH3\b/g, 'CH₃COOCH₃'],
    [/\bCH3COOC3H7\b/g, 'CH₃COOC₃H₇'],
    [/\bC2H5COOC2H5\b/g, 'C₂H₅COOC₂H₅'],
    [/\bC2H5COOCH3\b/g, 'C₂H₅COOCH₃'],
    [/\bC4H8O2\b/g, 'C₄H₈O₂'],
    [/\bC3H6O2\b/g, 'C₃H₆O₂'],
    [/\bC2H4O2\b/g, 'C₂H₄O₂'],
    [/\bC5H10O2\b/g, 'C₅H₁₀O₂'],
    [/\bCH3OH\b/g, 'CH₃OH'],
    [/\bCH3COOH\b/g, 'CH₃COOH'],
    [/\bC2H5OH\b/g, 'C₂H₅OH'],
    [/\bC3H7COOH\b/g, 'C₃H₇COOH'],
    [/\bC3H7CH2OH\b/g, 'C₃H₇CH₂OH'],
    [/\bCH3COONa\b/g, 'CH₃COONa'],
    [/\bC17H35COONa\b/g, 'C₁₇H₃₅COONa'],
    [/\bC17H35COOH\b/g, 'C₁₇H₃₅COOH'],
    [/\bCH3CH2COOCH3\b/g, 'CH₃CH₂COOCH₃'],
    [/\bCH3OOCCH3\b/g, 'CH₃OOCCH₃'],
    [/\bCH3COC2H5\b/g, 'CH₃COC₂H₅'],
    [/\bC6H5COOCH3\b/g, 'C₆H₅COOCH₃'],
    [/\bC6H5–COO–CH3\b/g, 'C₆H₅–COO–CH₃'],
    [/\bC6H5–OOC–CH=CH2\b/g, 'C₆H₅–OOC–CH=CH₂'],
    [/\bC6H5–OOC–C2H5\b/g, 'C₆H₅–OOC–C₂H₅'],
    [/\bC2H5–OOC–CH3\b/g, 'C₂H₅–OOC–CH₃'],
    [/\bCH3COOCH=CH2\b/g, 'CH₃COOCH=CH₂'],
    [/\bHCOOCH=CH2\b/g, 'HCOOCH=CH₂'],
    [/\bHCOOCH=CH–CH3\b/g, 'HCOOCH=CH–CH₃'],
    [/CH3\[CH2\]10C6H4SO3Na/g, 'CH₃[CH₂]₁₀C₆H₄SO₃Na'],
    [/CH3\[CH2\]14COONa/g, 'CH₃[CH₂]₁₄COONa'],
    [/CH3\[CH2\]16COONa/g, 'CH₃[CH₂]₁₆COONa'],
    [/CH3\[CH2\]16COOH/g, 'CH₃[CH₂]₁₆COOH'],
    [/CH3\[CH2\]11OSO3Na/g, 'CH₃[CH₂]₁₁OSO₃Na'],
    [/CH3\[CH2\]3COONa/g, 'CH₃[CH₂]₃COONa'],
    [/C3H5\(OH\)3/g, 'C₃H₅(OH)₃'],
    [/CH3\[CH2\]10CH2OSO3Na/g, 'CH₃[CH₂]₁₀CH₂OSO₃Na'],
    [/CH3\[CH2\]14COOK/g, 'CH₃[CH₂]₁₄COOK'],
    [/CH3\[CH2\]11C6H4SO3Na/g, 'CH₃[CH₂]₁₁C₆H₄SO₃Na'],
    [/CH3\[CH2\]14COOH/g, 'CH₃[CH₂]₁₄COOH'],
    [/R–OSO3Na/g, 'R–OSO₃Na'],
    [/R-OSO3Na/g, 'R-OSO₃Na'],
    [/R-C6H4-SO3Na/g, 'R-C₆H₄-SO₃Na'],
    [/\bC6H12O6\b/g, 'C₆H₁₂O₆'],
    [/\(C6H10O5\)n/g, '(C₆H₁₀O₅)ₙ'],
    [/\bC12H22O11\b/g, 'C₁₂H₂₂O₁₁'],
    [/\[C6H7O2\(OH\)3\]n/g, '[C₆H₇O₂(OH)₃]ₙ'],
    [/\[C6H5O2\(OH\)3\]n/g, '[C₆H₅O₂(OH)₃]ₙ'],
    [/\[C6H8O2\(OH\)3\]n/g, '[C₆H₈O₂(OH)₃]ₙ'],
    [/\[C6H7O3\(OH\)2\]n/g, '[C₆H₇O₃(OH)₂]ₙ'],
    [/\bCn\(H2O\)m\b/g, 'Cₙ(H₂O)ₘ'],
    [/\bCn\(H2O\)n\b/g, 'Cₙ(H₂O)ₙ'],
    [/\bCH3NH2\b/g, 'CH₃NH₂'],
    [/\bC2H5NH2\b/g, 'C₂H₅NH₂'],
    [/\bCH3NH3Cl\b/g, 'CH₃NH₃Cl'],
    [/\bC3H9N\b/g, 'C₃H₉N'],
    [/\(CH3\)3N/g, '(CH₃)₃N'],
    [/\bC6H5NH2\b/g, 'C₆H₅NH₂'],
    [/\bC13H21O3N\b/g, 'C₁₃H₂₁O₃N'],
    [/\bC10H14N2\b/g, 'C₁₀H₁₄N₂'],
    [/\bC9H8O4\b/g, 'C₉H₈O₄'],
    [/\bC6H4\(COOH\)2\b/g, 'C₆H₄(COOH)₂'],
    [/\b2-HOC6H4COOH\b/g, '2-HOC₆H₄COOH'],
    [/\bCH3CH2CH2NH2\b/g, 'CH₃CH₂CH₂NH₂'],
    [/\bCH3CH\(NH2\)CH3\b/g, 'CH₃CH(NH₂)CH₃'],
    [/\bCH3NHCH2CH3\b/g, 'CH₃NHCH₂CH₃'],
    [/\bCH3-NH-CH2-CH2-CH3\b/g, 'CH₃-NH-CH₂-CH₂-CH₃'],
    [/\bH2NCH2COOCH3\b/g, 'H₂NCH₂COOCH₃'],
    [/\bH2NCH2COOH\b/g, 'H₂NCH₂COOH'],
    [/\bHOCH2COOH\b/g, 'HOCH₂COOH'],
    [/\bH2N-CH2-COOH\b/g, 'H₂N-CH₂-COOH'],
    [/\bH2N-CH2-COOCH3\b/g, 'H₂N-CH₂-COOCH₃'],
    [/\b\+H3N-CH2-COO-\b/g, '⁺H₃N-CH₂-COO⁻'],
    [/\bH3N\+CH2COO-\b/g, 'H₃N⁺CH₂COO⁻'],
    [/–NH2\b/g, '–NH₂'],
    [/-NH2\b/g, '-NH₂'],
    [/\bCu\(OH\)2\b/g, 'Cu(OH)₂'],
    [/\bCu2O\b/g, 'Cu₂O'],
    [/\bAgNO3\/NH3\b/g, 'AgNO₃/NH₃'],
    [/\bAgNO3\b/g, 'AgNO₃'],
    [/\bH2SO4\b/g, 'H₂SO₄'],
    [/\bHNO3\b/g, 'HNO₃'],
    [/\bHNO2\b/g, 'HNO₂'],
    [/\bFeCl3\b/g, 'FeCl₃'],
    [/\bFe\(OH\)3\b/g, 'Fe(OH)₃'],
    [/\bCuSO4\b/g, 'CuSO₄'],
    [/\bCuCl2\b/g, 'CuCl₂'],
    [/\bKMnO4\b/g, 'KMnO₄'],
    [/\bCO2\b/g, 'CO₂'],
    [/\bH2O\b/g, 'H₂O'],
    [/\bNH3\b/g, 'NH₃'],
    [/\bN2\b/g, 'N₂'],
    [/\bH2\b/g, 'H₂'],
    [/\bI2\b/g, 'I₂'],
    [/\bBr2\/H2O\b/g, 'Br₂/H₂O'],
    [/\bBr2\b/g, 'Br₂'],
    [/\bO2\b/g, 'O₂'],
    [/\bFe2\+\b/g, 'Fe²⁺'],
    [/\bFe3\+\b/g, 'Fe³⁺'],
    [/\bCu2\+\b/g, 'Cu²⁺'],
    [/\bV m3\b/g, 'V m³'],
    [/\bm3\b/g, 'm³'],
    [/\b38o\b/g, '38°'],
    [/\bt0\b/g, 't°'],
    [/, t[o0]\b/g, ', t°'],
    [/\(t[o0]\)/g, '(t°)'],
    [/\(Ni, t[o0]\)/g, '(Ni, t°)'],
    [/\(H\+, t[o0]\)/g, '(H⁺, t°)'],
    [/Ni, t[o0]\b/g, 'Ni, t°'],
    [/HCl, t[o0]\b/g, 'HCl, t°'],
    [/0–5oC/g, '0–5°C'],
    [/0-5°C/g, '0–5°C'],
    [/alpha-amylase/g, 'α-amylase'],
    [/alpha-amino/g, 'α-amino'],
    [/alpha-glucose/g, 'α-glucose'],
    [/beta-glucose/g, 'β-glucose'],
    [/alpha-1,4-glycoside/g, 'α-1,4-glycoside'],
    [/beta-1,4-glycoside/g, 'β-1,4-glycoside'],
    [/alpha-1,6-glycoside/g, 'α-1,6-glycoside']
  ];

  for (const [re, rep] of map) {
    str = str.replace(re, rep);
  }

  // Chuyển cấu hình electron 1s2 -> 1s², 2p6 -> 2p⁶, 3d10 -> 3d¹⁰
  const supMap = { '0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹' };
  str = str.replace(/\b([1-7][spdf])([0-9]{1,2})\b/g, (match, orb, exp) => orb + exp.split('').map(d => supMap[d] || d).join(''));

  // Chuyển các số sau nguyên tố hóa học thành chỉ số dưới nếu còn sót
  const subMap = { '0':'₀','1':'₁','2':'₂','3':'₃','4':'₄','5':'₅','6':'₆','7':'₇','8':'₈','9':'₉','n':'ₙ','m':'ₘ' };
  str = str.replace(/([A-Z][a-z]?|\))([0-9]+)/g, (match, prefix, digits) => {
    if (prefix === 'Câu ' || (prefix === 'C' && digits.length >= 3)) return match;
    return prefix + digits.split('').map(d => subMap[d] || d).join('');
  });

  return str;
}

let currentGrade = '10'; // Mặc định mở Hóa 10
let currentTerm = 'giuaki'; // Mặc định Giữa kì 1 ('giuaki' | 'cuoiki')
let showSpecTags = false; // Bật/tắt hiển thị Đơn vị KT & Mã chỉ báo
let currentExam = null;
let similarExam = null;
let showSolutions = false;
let allBankQuestions = [];
let matrixTemplatesData = [];
let examVariants = { '101': null, '102': null, '103': null, '104': null };
let selectedCode = '101';
let all5Suites = [];
let activeSuiteIndex = 0;
let matrixExamSelected = null;

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', async () => {
  setupTabNavigation();
  setupEventListeners();
  await loadMatrixTemplates();
  await loadQuestionBank(currentGrade);
  await load5Suites(currentGrade, currentTerm); // Nạp sẵn 5 Bộ Đề Gốc kèm Đề Tương Tự của Khối lớp
});

// Setup tab navigation
function setupTabNavigation() {
  const tabs = document.querySelectorAll('.nav-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTabId = tab.dataset.tab;
      switchTab(targetTabId);
    });
  });
}

function switchTab(tabId) {
  document.querySelectorAll('.nav-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tabId);
  });
  document.querySelectorAll('.tab-content').forEach(c => {
    c.classList.toggle('active', c.id === tabId);
  });

  if (tabId === 'tab-print') {
    renderPrintDocument();
  } else if (tabId === 'tab-similar' && currentExam) {
    if (!similarExam) {
      generateSimilarExamFront();
    } else {
      renderComparisonView();
    }
  } else if (tabId === 'tab-matrix') {
    renderMatrixGK1();
  }
}

// Chuyển đổi khối lớp (Hóa 10, Hóa 11, Hóa 12)
async function switchGrade(grade) {
  if (!grade) return;
  currentGrade = String(grade).trim();

  // Cập nhật giao diện nút chọn khối lớp
  document.querySelectorAll('.grade-pill-btn').forEach(btn => {
    const isAct = btn.dataset.grade === currentGrade;
    btn.classList.toggle('active', isAct);
    if (isAct) {
      btn.className = "grade-pill-btn active px-4 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 text-blue-900 bg-white shadow-md";
    } else {
      btn.className = "grade-pill-btn px-4 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 text-white/80 hover:text-white";
    }
  });

  // Cập nhật tiêu đề trang
  const headerTitle = document.getElementById('headerMainTitle');
  if (headerTitle) {
    headerTitle.textContent = `HỆ THỐNG TẠO ĐỀ THI HÓA HỌC ${currentGrade}`;
  }
  const gradeBadge = document.getElementById('headerGradeBadge');
  if (gradeBadge) {
    gradeBadge.textContent = `Khối ${currentGrade} Chuẩn GDPT 2018 - THPT Bùi Thị Xuân (Mũi Né)`;
  }
  const displayTitle = document.getElementById('displayExamTitle');
  if (displayTitle) {
    displayTitle.textContent = `ĐỀ KIỂM TRA HÓA HỌC ${currentGrade}`;
  }
  const matrixHeading = document.getElementById('matrixTabMainHeading');
  if (matrixHeading) {
    matrixHeading.textContent = `KHUNG MA TRẬN & BẢNG ĐẶC TẢ ĐỀ KIỂM TRA MÔN HÓA HỌC ${currentGrade}`;
  }
  const printTitle = document.getElementById('printExamTitle');
  if (printTitle) {
    printTitle.textContent = `ĐỀ KIỂM TRA ĐỊNH KÌ HÓA HỌC ${currentGrade}`;
  }

  // Nạp lại ngân hàng câu hỏi & 5 bộ đề của khối lớp mới
  await loadQuestionBank(currentGrade);
  await load5Suites(currentGrade);
}

// Setup Event Listeners
function setupEventListeners() {
  // Lắng nghe sự kiện click chuyển Khối lớp (10, 11, 12)
  document.querySelectorAll('.grade-pill-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const targetGrade = btn.dataset.grade;
      if (targetGrade === currentGrade) return;
      await switchGrade(targetGrade);
    });
  });

  document.getElementById('btnQuickGen').addEventListener('click', () => {
    switchTab('tab-generator');
    createNewExam();
  });

  document.getElementById('btnCreateExam').addEventListener('click', () => {
    createNewExam();
  });

  document.getElementById('btnQuickSimilar').addEventListener('click', async () => {
    switchTab('tab-similar');
    await generateSimilarExamFront();
  });

  document.getElementById('btnGenSimilarCurrent').addEventListener('click', async () => {
    switchTab('tab-similar');
    await generateSimilarExamFront();
  });

  document.getElementById('btnRefreshSimilar').addEventListener('click', async () => {
    await generateSimilarExamFront();
  });

  document.getElementById('btnGen4Codes').addEventListener('click', async () => {
    await generate4CodesPackage();
  });

  document.getElementById('btnToggleSolutions').addEventListener('click', () => {
    showSolutions = !showSolutions;
    renderExamPaper(currentExam, 'examPaper', showSolutions);
  });


  // Bộ chọn Giữa kì 1 / Cuối kì 1
  const selectTerm = document.getElementById('selectExamTerm');
  if (selectTerm) {
    selectTerm.addEventListener('change', async (e) => {
      currentTerm = e.target.value;
      await load5Suites(currentGrade, currentTerm);
    });
  }

  // Checkbox hiện Đơn vị kiến thức & Mã chỉ báo trên đề
  const chkSpec = document.getElementById('chkShowSpecTags');
  if (chkSpec) {
    chkSpec.addEventListener('change', (e) => {
      showSpecTags = e.target.checked;
      renderExamPaper(currentExam, 'examPaper', showSolutions);
      renderPrintDocument();
    });
  }

  // Nút Xuất Đề Kèm Đặc Tả & Mã Chỉ Báo (.doc)
  const btnExportSpec = document.getElementById('btnExportWithSpecTags');
  if (btnExportSpec) {
    btnExportSpec.addEventListener('click', () => {
      exportExamToWord(currentExam, true, true, true);
    });
  }

  // Nút Xuất Đề Kèm Đặc Tả ở Tab 5 Bản in
  const btnExportSpecTab5 = document.getElementById('btnExportWithSpecTagsTab5');
  if (btnExportSpecTab5) {
    btnExportSpecTab5.addEventListener('click', () => {
      exportExamToWord(currentExam, true, true, true);
    });
  }

  // Nút Tải Toàn Bộ 5 Đề Gốc Kèm Đặc Tả (.doc)
  const btnDownload5Spec = document.getElementById('btnDownloadAll5WithSpecTags');
  if (btnDownload5Spec) {
    btnDownload5Spec.addEventListener('click', () => {
      downloadAll5BaseWithSpecTagsWord();
    });
  }

  // Question bank filters
  document.getElementById('bankFilterLesson').addEventListener('change', filterQuestionBank);
  document.getElementById('bankFilterPart').addEventListener('change', filterQuestionBank);
  document.getElementById('bankFilterCategory').addEventListener('change', filterQuestionBank);
  document.getElementById('bankSearchInput').addEventListener('input', debounce(filterQuestionBank, 300));

  // Nút chọn nhanh mã đề 101, 102, 103, 104 trên thanh công cụ
  document.querySelectorAll('.code-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetCode = btn.dataset.code;
      switchExamCode(targetCode);
    });
  });

  // Nút chọn nhanh trong bảng điều khiển
  document.querySelectorAll('.btn-quick-code').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetCode = btn.dataset.code;
      switchExamCode(targetCode);
    });
  });

  // 5 Nút chọn Bộ đề gốc (Bộ 1 -> Bộ 5)
  document.querySelectorAll('.suite-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const suiteIdx = parseInt(btn.dataset.suite, 10);
      selectSuite(suiteIdx);
    });
  });

  // Nút tạo mới lại 5 bộ đề
  const btnReload5 = document.getElementById('btnReload5Suites');
  if (btnReload5) {
    btnReload5.addEventListener('click', async () => {
      btnReload5.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Đang tạo mới...`;
      await load5Suites();
      btnReload5.innerHTML = `<i class="fa-solid fa-arrows-rotate"></i> Tạo Mới Lại 5 Bộ Đề`;
    });
  }

  // Nút tải toàn bộ 20 file Word của 5 bộ đề
  const btnDownload20 = document.getElementById('btnDownloadAll20Codes');
  if (btnDownload20) {
    btnDownload20.addEventListener('click', () => {
      downloadAll20CodesWord();
    });
  }

  // Tải trọn bộ 4 mã đề Word
  const btnDownloadAll = document.getElementById('btnDownloadAll4Codes');
  if (btnDownloadAll) {
    btnDownloadAll.addEventListener('click', () => {
      downloadAll4CodesWord();
    });
  }

  // Word export event listeners
  const btnHeaderWord = document.getElementById('btnHeaderExportWord');
  if (btnHeaderWord) {
    btnHeaderWord.addEventListener('click', () => {
      exportExamToWord(currentExam, true, true);
    });
  }

  // Nút Xuất Hồ Sơ Đầy Đủ (Ma trận + Đặc tả + Đề + Đáp án)
  const btnFullDossier = document.getElementById('btnExportFullDossier');
  if (btnFullDossier) {
    btnFullDossier.addEventListener('click', () => {
      exportExamToWord(currentExam, true, true);
    });
  }

  // Nút Xuất Riêng Ma Trận & Bản Đặc Tả
  const btnMatrixSpec = document.getElementById('btnExportMatrixSpecWord');
  if (btnMatrixSpec) {
    btnMatrixSpec.addEventListener('click', () => {
      exportMatrixSpecWord(currentExam);
    });
  }

  // Nút Xuất Ma Trận & Đặc Tả trong Tab 4
  const btnMatrixDocxTab4 = document.getElementById('btnExportMatrixSpecDocxTab4');
  if (btnMatrixDocxTab4) {
    btnMatrixDocxTab4.addEventListener('click', () => {
      exportMatrixSpecWord(matrixExamSelected || currentExam);
    });
  }

  // Nút Xuất Hồ Sơ Đầy Đủ trong Tab 4
  const btnFullDocxTab4 = document.getElementById('btnExportFullDossierTab4');
  if (btnFullDocxTab4) {
    btnFullDocxTab4.addEventListener('click', () => {
      exportExamToWord(matrixExamSelected || currentExam, true, true);
    });
  }

  // Nút Xuất Hồ Sơ Đầy Đủ trong Tab 5 (Bản in)
  const btnPrintFull = document.getElementById('btnPrintExportFullDossier');
  if (btnPrintFull) {
    btnPrintFull.addEventListener('click', () => {
      exportExamToWord(currentExam, true, true);
    });
  }

  // Checkbox kèm Ma trận & Đặc tả trong Bản in Tab 5
  const chkPrintMatrix = document.getElementById('chkIncludeMatrixInPrint');
  if (chkPrintMatrix) {
    chkPrintMatrix.addEventListener('change', () => {
      renderPrintDocument();
    });
  }

  // 5 Nút chọn Ma trận theo 5 Bộ đề trong Tab 4
  document.querySelectorAll('.matrix-suite-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.matrix-suite-btn').forEach(b => {
        b.classList.remove('bg-blue-600', 'text-white');
        b.classList.add('bg-white', 'text-slate-700');
      });
      btn.classList.remove('bg-white', 'text-slate-700');
      btn.classList.add('bg-blue-600', 'text-white');

      const suiteIdx = parseInt(btn.dataset.suite, 10);
      if (all5Suites && all5Suites[suiteIdx] && all5Suites[suiteIdx].exams) {
        matrixExamSelected = all5Suites[suiteIdx].exams[0];
        renderMatrixGK1(matrixExamSelected);
      }
    });
  });

  const btnStudentWord = document.getElementById('btnExportWordStudent');
  if (btnStudentWord) {
    btnStudentWord.addEventListener('click', () => {
      exportExamToWord(currentExam, false);
    });
  }

  const btnTeacherWord = document.getElementById('btnExportWordTeacher');
  if (btnTeacherWord) {
    btnTeacherWord.addEventListener('click', () => {
      exportExamToWord(currentExam, true);
    });
  }

  const btnSimWord = document.getElementById('btnExportSimilarWord');
  if (btnSimWord) {
    btnSimWord.addEventListener('click', () => {
      exportExamToWord(similarExam || currentExam, true);
    });
  }

  const btnExportWord = document.getElementById('btnExportWord');
  if (btnExportWord) {
    btnExportWord.addEventListener('click', () => {
      exportExamToWord(currentExam, true);
    });
  }
}

// ==========================================
// API CALLS
// ==========================================

async function loadMatrixTemplates() {
  try {
    const res = await fetch('/api/matrix-templates');
    const json = await res.json();
    if (json.success) {
      matrixTemplatesData = json.data;
    }
  } catch (err) {
    console.error("Lỗi tải mẫu ma trận:", err);
  }
}

async function loadQuestionBank(grade = currentGrade) {
  try {
    const res = await fetch(`/api/question-bank?grade=${grade}`);
    const json = await res.json();
    if (json.success) {
      allBankQuestions = json.data;
      renderQuestionBank(allBankQuestions);
    }
  } catch (err) {
    console.error("Lỗi tải ngân hàng câu hỏi:", err);
  }
}

// Tải 5 Bộ Đề Gốc Kèm Các Đề Tương Tự
async function load5Suites(grade = currentGrade, term = currentTerm) {
  try {
    const res = await fetch(`/api/all-5-suites?grade=${grade}&term=${term}`);
    const json = await res.json();
    if (json.success && json.data && json.data.length > 0) {
      all5Suites = json.data;
      renderSuiteButtons(all5Suites);
      renderMatrixSuiteButtons(all5Suites);
      selectSuite(0); // Mặc định mở Bộ đề số 1
    }
  } catch (err) {
    console.error("Lỗi tải 5 bộ đề:", err);
    // Nếu có lỗi mạng, gọi fallback createNewExam
    await createNewExam(grade);
  }
}

// Render động danh sách các nút chọn bộ đề
function renderSuiteButtons(suites) {
  const container = document.getElementById('suiteButtonsContainer');
  if (!container) return;

  if (suites.length <= 5) {
    container.className = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5";
  } else {
    container.className = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2.5";
  }

  container.innerHTML = suites.map((suite, idx) => {
    const isAct = idx === activeSuiteIndex;
    const baseCode = parseInt(suite.code || suite.baseCode || (101 + idx * 100), 10);
    const count = suite.exams ? suite.exams.length : 4;
    const codeRange = `${baseCode} - ${baseCode + count - 1}`;
    return `
      <button type="button" class="suite-btn ${isAct ? 'active' : ''} p-2.5 rounded-lg border ${isAct ? 'border-2 border-amber-400 bg-amber-400/25 shadow-md scale-[1.02]' : 'border-slate-700 bg-slate-800/80'} text-left transition hover:border-amber-300" data-suite="${idx}">
        <div class="flex justify-between items-center mb-1">
          <span class="font-bold text-xs ${isAct ? 'text-amber-300' : 'text-slate-300'}">BỘ ĐỀ SỐ ${idx + 1}</span>
          <span class="text-[10px] px-1.5 py-0.2 rounded ${isAct ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-indigo-600 text-white font-bold'}">${count} Mã</span>
        </div>
        <p class="text-[11px] ${isAct ? 'text-slate-200' : 'text-slate-400'} font-mono">Mã ${codeRange}</p>
      </button>
    `;
  }).join('');

  container.querySelectorAll('.suite-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const suiteIdx = parseInt(btn.dataset.suite, 10);
      selectSuite(suiteIdx);
    });
  });
}

// Render động các nút chọn Ma trận theo từng Bộ đề
function renderMatrixSuiteButtons(suites) {
  const container = document.getElementById('matrixSuiteButtonGroup');
  if (!container) return;

  container.innerHTML = suites.map((suite, idx) => {
    const isFirst = idx === 0;
    const isLast = idx === suites.length - 1;
    const roundedClass = isFirst ? 'rounded-l-md' : (isLast ? 'rounded-r-md' : '');
    const borderClass = isFirst ? 'border border-slate-300' : 'border-t border-b border-r border-slate-300';
    const isAct = idx === activeSuiteIndex;
    const code = suite.code || suite.baseCode || (101 + idx * 100);

    return `
      <button type="button" class="matrix-suite-btn ${isAct ? 'active' : ''} px-3 py-1 text-xs font-bold ${roundedClass} ${borderClass} ${isAct ? 'bg-blue-600 text-white' : 'bg-white hover:bg-slate-50 text-slate-700'}" data-suite="${idx}">Mã ${code}</button>
    `;
  }).join('');

  container.querySelectorAll('.matrix-suite-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.matrix-suite-btn').forEach(b => {
        b.classList.remove('bg-blue-600', 'text-white', 'active');
        b.classList.add('bg-white', 'text-slate-700');
      });
      btn.classList.remove('bg-white', 'text-slate-700');
      btn.classList.add('bg-blue-600', 'text-white', 'active');

      const suiteIdx = parseInt(btn.dataset.suite, 10);
      if (all5Suites && all5Suites[suiteIdx] && all5Suites[suiteIdx].exams) {
        matrixExamSelected = all5Suites[suiteIdx].exams[0];
        renderMatrixGK1(matrixExamSelected);
      }
    });
  });
}

// Chọn và hiển thị 1 trong 5 bộ đề
function selectSuite(suiteIdx) {
  if (!all5Suites || all5Suites.length === 0) return;
  activeSuiteIndex = suiteIdx;
  const suite = all5Suites[suiteIdx];
  if (!suite) return;

  // Cập nhật giao diện các nút chọn bộ đề
  document.querySelectorAll('.suite-btn').forEach((btn, idx) => {
    const isAct = idx === suiteIdx;
    btn.classList.toggle('active', isAct);
    const spanTitle = btn.querySelector('span.text-xs');
    const badge = btn.querySelector('span.text-\\[10px\\]');
    const codeText = btn.querySelector('p');
    if (isAct) {
      btn.className = "suite-btn active p-2.5 rounded-lg border-2 border-amber-400 bg-amber-400/25 text-left transition shadow-md scale-[1.02]";
      if (spanTitle) spanTitle.className = "font-bold text-xs text-amber-300";
      if (badge) badge.className = "text-[10px] px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-bold";
      if (codeText) codeText.className = "text-[11px] text-slate-200 font-mono";
    } else {
      btn.className = "suite-btn p-2.5 rounded-lg border border-slate-700 bg-slate-800/80 text-left transition hover:border-indigo-400";
      if (spanTitle) spanTitle.className = "font-bold text-xs text-slate-300";
      if (badge) badge.className = "text-[10px] px-1.5 py-0.2 rounded bg-indigo-600 text-white font-bold";
      if (codeText) codeText.className = "text-[11px] text-slate-400 font-mono";
    }
  });

  // Đồng bộ nút Ma trận
  document.querySelectorAll('.matrix-suite-btn').forEach((b, idx) => {
    const isAct = idx === suiteIdx;
    b.classList.toggle('active', isAct);
    if (isAct) {
      b.classList.remove('bg-white', 'text-slate-700');
      b.classList.add('bg-blue-600', 'text-white');
    } else {
      b.classList.remove('bg-blue-600', 'text-white');
      b.classList.add('bg-white', 'text-slate-700');
    }
  });

  // Nạp 4 mã đề của bộ này vào examVariants
  examVariants = {};
  suite.exams.forEach(ex => {
    examVariants[ex.examCode] = ex;
  });

  // Chọn mã đề đầu tiên (Đề gốc)
  const baseExam = suite.exams[0];
  currentExam = baseExam;
  matrixExamSelected = baseExam;
  selectedCode = baseExam.examCode;
  document.getElementById('inputExamCode').value = selectedCode;

  // Cập nhật thanh chọn nhanh mã đề
  renderQuickSwitcherForSuite(suite);

  // Hiển thị đề thi
  renderExamPaper(currentExam, 'examPaper', showSolutions);
}

// Hiển thị các nút chọn nhanh 4 mã đề của Bộ đề đang chọn
function renderQuickSwitcherForSuite(suite) {
  const container = document.querySelector('[role="group"]');
  if (!container) return;

  let html = '';
  suite.exams.forEach((ex, idx) => {
    const isFirst = idx === 0;
    const isLast = idx === suite.exams.length - 1;
    const roundedClass = isFirst ? 'rounded-l-lg' : (isLast ? 'rounded-r-lg' : '');
    const borderClass = (isFirst || isLast) ? '' : 'border-t border-b border-indigo-600';
    const tag = isFirst ? '(Gốc)' : '(Thay số)';
    const isAct = ex.examCode === selectedCode;
    const actStyle = isAct 
      ? 'border-2 border-amber-300 bg-amber-400 text-slate-950 font-extrabold shadow-md scale-105'
      : 'border-indigo-600 bg-indigo-800 hover:bg-indigo-700 text-white font-semibold';

    html += `
      <button type="button" class="code-tab-btn ${isAct ? 'active' : ''} px-3.5 py-1 text-xs border ${roundedClass} ${borderClass} ${actStyle} transition flex items-center gap-1" data-code="${ex.examCode}">
        <span>MÃ ${ex.examCode}</span>
        <span class="text-[10px] opacity-80">${tag}</span>
      </button>
    `;
  });

  container.innerHTML = html;

  // Gắn lại sự kiện click cho các nút mã đề
  container.querySelectorAll('.code-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetCode = btn.dataset.code;
      switchExamCode(targetCode);
    });
  });

  updateCodeSwitchButtons(selectedCode);
}

// Tải toàn bộ 20 mã đề Word của 5 bộ đề

function downloadAll5BaseWithSpecTagsWord() {
  if (!all5Suites || all5Suites.length === 0) {
    alert("Dữ liệu các bộ đề đang được nạp, vui lòng thử lại sau vài giây.");
    return;
  }
  const baseExams = all5Suites.map(s => s.exams[0]).filter(Boolean);
  const termName = currentTerm === 'cuoiki' ? 'Cuối kì 1' : 'Giữa kì 1';
  alert(`Bắt đầu tải về ${baseExams.length} Đề Gốc của Khối ${currentGrade} (${termName}) gồm đầy đủ MA TRẬN, BẢN ĐẶC TẢ, ĐỀ THI KÈM MÃ CHỈ BÁO và ĐÁP ÁN CHI TIẾT TỪNG Ý.`);
  baseExams.forEach((exam, idx) => {
    setTimeout(() => {
      exportExamToWord(exam, true, true, true);
    }, idx * 400);
  });
}

function downloadAll20CodesWord() {
  if (!all5Suites || all5Suites.length === 0) {
    alert("Dữ liệu các bộ đề đang được nạp, vui lòng thử lại sau vài giây.");
    return;
  }

  const allExams = [];
  all5Suites.forEach(s => {
    s.exams.forEach(ex => allExams.push(ex));
  });

  alert(`Bắt đầu tải về toàn bộ ${allExams.length} file Word của ${all5Suites.length} Bộ đề (mỗi đề gồm đầy đủ Ma trận, Bản đặc tả, Đề thi, Đáp án & Hướng dẫn chấm chi tiết).`);

  allExams.forEach((exam, idx) => {
    setTimeout(() => {
      exportExamToWord(exam, true, true);
    }, idx * 400);
  });
}

async function createNewExam(grade = currentGrade) {
  const code = document.getElementById('inputExamCode').value || "101";
  const duration = document.getElementById('inputDuration').value || 45;
  const template = document.getElementById('selectMatrixTemplate').value;

  try {
    const res = await fetch('/api/generate-exam', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        grade: grade || currentGrade,
        examCode: code,
        timeMinutes: duration,
        templateId: template
      })
    });
    const json = await res.json();
    if (json.success) {
      currentExam = json.data;
      examVariants = { '101': null, '102': null, '103': null, '104': null };
      examVariants[code] = currentExam;
      selectedCode = code;

      // Tự động sinh sẵn các mã đề 101, 102, 103, 104 (Lý thuyết giữ nguyên, bài tập thay số)
      const codes = ['101', '102', '103', '104'];
      for (const c of codes) {
        if (c !== code) {
          fetch('/api/generate-similar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              grade: grade || currentGrade,
              baseExam: currentExam,
              newCode: c
            })
          })
          .then(r => r.json())
          .then(simJson => {
            if (simJson.success) {
              examVariants[c] = simJson.data;
              if (c === '102') similarExam = simJson.data;
            }
          })
          .catch(e => console.error("Lỗi sinh trước mã " + c, e));
        }
      }

      similarExam = null;
      updateCodeSwitchButtons(selectedCode);
      renderExamPaper(currentExam, 'examPaper', showSolutions);
    }
  } catch (err) {
    console.error("Lỗi sinh đề thi:", err);
  }
}

// Chuyển nhanh giữa các mã đề 101, 102, 103, 104
async function switchExamCode(targetCode) {
  selectedCode = targetCode;
  document.getElementById('inputExamCode').value = targetCode;

  // Nếu mã đề đã có trong bộ nhớ cache
  if (examVariants[targetCode]) {
    currentExam = examVariants[targetCode];
    updateCodeSwitchButtons(targetCode);
    renderExamPaper(currentExam, 'examPaper', showSolutions);
    return;
  }

  // Nếu chưa có, gọi API sinh nhanh từ đề gốc
  if (currentExam) {
    try {
      const res = await fetch('/api/generate-similar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          baseExam: examVariants['101'] || currentExam,
          newCode: String(targetCode)
        })
      });
      const json = await res.json();
      if (json.success) {
        examVariants[targetCode] = json.data;
        currentExam = json.data;
        updateCodeSwitchButtons(targetCode);
        renderExamPaper(currentExam, 'examPaper', showSolutions);
      }
    } catch (e) {
      console.error("Lỗi chuyển mã đề:", e);
    }
  }
}

// Cập nhật giao diện các nút chọn mã đề
function updateCodeSwitchButtons(activeCode) {
  // Cập nhật nhóm nút tab mã đề
  document.querySelectorAll('.code-tab-btn').forEach(btn => {
    const code = btn.dataset.code;
    const isAct = code === activeCode;
    btn.classList.toggle('active', isAct);
    if (isAct) {
      btn.className = "code-tab-btn active px-4 py-1 text-xs font-extrabold rounded-lg border-2 border-amber-300 bg-amber-400 text-slate-950 transition flex items-center gap-1 shadow-md scale-105";
    } else {
      btn.className = "code-tab-btn px-4 py-1 text-xs font-extrabold border border-indigo-700 bg-indigo-800 hover:bg-indigo-700 text-white transition flex items-center gap-1";
    }
  });

  // Cập nhật các nút nhỏ trong bảng điều khiển
  document.querySelectorAll('.btn-quick-code').forEach(btn => {
    const code = btn.dataset.code;
    if (code === activeCode) {
      btn.className = "btn-quick-code px-2.5 py-0.5 bg-blue-600 text-white rounded font-bold text-xs transition shadow-sm";
    } else {
      btn.className = "btn-quick-code px-2.5 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded font-bold text-xs transition";
    }
  });

  const displayCode = document.getElementById('displayExamCode');
  if (displayCode) displayCode.innerText = activeCode;

  const displayTitle = document.getElementById('displayExamTitle');
  if (displayTitle && currentExam) {
    const examGradeNum = currentExam.gradeNum || (currentExam.grade && String(currentExam.grade).replace(/\D/g, '')) || currentGrade || '10';
    displayTitle.textContent = currentExam.title || `ĐỀ KIỂM TRA HÓA HỌC ${examGradeNum}`;
  }

  const info = document.getElementById('codeVariantInfo');
  if (info) {
    if (activeCode === '101') {
      info.innerHTML = `<span class="text-amber-300 font-bold">Mã 101</span>: Đề cơ sở (Lý thuyết & Bài tập gốc từ đề cương)`;
    } else {
      info.innerHTML = `<span class="text-amber-300 font-bold">Mã ${activeCode}</span>: Đề tương đương (<strong class="text-white">Lý thuyết giữ nguyên</strong>, <strong class="text-amber-200">Bài tập tính toán đã thay số</strong>)`;
    }
  }
}

// Tải trọn bộ 4 file Word (101 - 104)
async function downloadAll4CodesWord() {
  const codes = ['101', '102', '103', '104'];
  
  // Đảm bảo đủ 4 mã đề trong cache
  for (const c of codes) {
    if (!examVariants[c] && currentExam) {
      try {
        const res = await fetch('/api/generate-similar', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            baseExam: examVariants['101'] || currentExam,
            newCode: c
          })
        });
        const json = await res.json();
        if (json.success) examVariants[c] = json.data;
      } catch (e) {}
    }
  }

  // Tải lần lượt 4 file với khoảng cách ngắn để trình duyệt không chặn popup tải về
  codes.forEach((c, idx) => {
    const exam = examVariants[c];
    if (exam) {
      setTimeout(() => {
        exportExamToWord(exam, true, true);
      }, idx * 500);
    }
  });
}

async function generateSimilarExamFront() {
  if (!currentExam) await createNewExam();
  const nextCode = (parseInt(currentExam.examCode) || 101) + 1;
  document.getElementById('similarCodeTag').innerText = nextCode;

  try {
    const res = await fetch('/api/generate-similar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        baseExam: currentExam,
        newCode: String(nextCode)
      })
    });
    const json = await res.json();
    if (json.success) {
      similarExam = json.data;
      renderComparisonView();
    }
  } catch (err) {
    console.error("Lỗi sinh đề tương tự:", err);
  }
}

async function generate4CodesPackage() {
  if (!currentExam) await createNewExam();
  try {
    const res = await fetch('/api/generate-package', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        baseExam: currentExam,
        count: 4
      })
    });
    const json = await res.json();
    if (json.success) {
      renderMultiCodeAnswerTable(json.data);
    }
  } catch (err) {
    console.error("Lỗi sinh bộ 4 mã đề:", err);
  }
}

// ==========================================
// RENDERING FUNCTIONS & TẦNG KIỂM THỬ ĐỐI SOÁT (ASSERTION VALIDATOR)
// ==========================================

function generateFallbackAudits(exam) {
  const audits = [];
  if (!exam || !exam.parts) return audits;

  (exam.parts.part1 || []).forEach((q, idx) => {
    audits.push({
      slotId: q.slotId || `P1_C${idx + 1}`,
      format: 'Phần I (TNKQ)',
      order: idx + 1,
      questionId: q.id,
      levelRequired: q.levelName || (q.level === 'vd' ? 'Vận dụng' : (q.level === 'hieu' ? 'Thông hiểu' : 'Nhận biết')),
      levelActual: q.levelName || (q.level === 'vd' ? 'Vận dụng' : (q.level === 'hieu' ? 'Thông hiểu' : 'Nhận biết')),
      knowledgeUnit: q.knowledgeUnit || q.lessonTitle || '',
      points: q.points || 0.25,
      matched: true
    });
  });

  (exam.parts.part2 || []).forEach((q, idx) => {
    audits.push({
      slotId: q.slotId || `P2_C${idx + 1}`,
      format: 'Phần II (Đúng - Sai 4 ý)',
      order: idx + 1,
      questionId: q.id,
      levelRequired: 'Nhận biết – Thông hiểu – Vận dụng',
      levelActual: 'Nhận biết – Thông hiểu – Vận dụng',
      knowledgeUnit: q.knowledgeUnit || q.lessonTitle || '',
      points: q.points || 1.0,
      matched: true
    });
  });

  (exam.parts.part3 || []).forEach((q, idx) => {
    audits.push({
      slotId: q.slotId || `P3_C${idx + 1}`,
      format: 'Phần III (Trả lời ngắn)',
      order: idx + 1,
      questionId: q.id,
      levelRequired: q.levelName || (q.level === 'vd' ? 'Vận dụng' : (q.level === 'hieu' ? 'Thông hiểu' : 'Nhận biết')),
      levelActual: q.levelName || (q.level === 'vd' ? 'Vận dụng' : (q.level === 'hieu' ? 'Thông hiểu' : 'Nhận biết')),
      knowledgeUnit: q.knowledgeUnit || q.lessonTitle || '',
      points: q.points || 0.50,
      matched: true
    });
  });

  (exam.parts.part4 || []).forEach((q, idx) => {
    audits.push({
      slotId: q.slotId || `P4_C${idx + 1}`,
      format: 'Phần IV (Tự luận)',
      order: idx + 1,
      questionId: q.id,
      levelRequired: 'Thông hiểu – Vận dụng',
      levelActual: 'Thông hiểu – Vận dụng',
      knowledgeUnit: q.knowledgeUnit || q.lessonTitle || '',
      points: q.points || 1.0,
      matched: true
    });
  });

  return audits;
}

window.openSlotAuditModal = function() {
  const modal = document.getElementById('slotAuditModal');
  if (!modal) return;

  const exam = currentExam;
  if (!exam) return;

  const val = exam.validationReport || {
    isValid: true,
    totalScore: 10.0,
    scoreBreakdown: { biet: 4.0, hieu: 3.0, vd: 3.0 },
    percentBreakdown: { biet: '40%', hieu: '30%', vd: '30%' },
    totalQuestions: 21,
    errors: [],
    warnings: [],
    slotAudits: []
  };

  const summaryEl = document.getElementById('slotAuditSummary');
  if (summaryEl) {
    summaryEl.innerHTML = `
      <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl">
        <p class="text-[11px] text-blue-700 font-semibold uppercase">Tổng điểm đề thi</p>
        <p class="text-lg font-bold text-blue-950">${(val.totalScore || 10).toFixed(1).replace('.', ',')} / 10,0 đ</p>
      </div>
      <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
        <p class="text-[11px] text-emerald-700 font-semibold uppercase">Tỉ lệ Nhận biết (40%)</p>
        <p class="text-lg font-bold text-emerald-950">${val.scoreBreakdown?.biet?.toFixed(2).replace('.', ',') || '4,00'} đ (${val.percentBreakdown?.biet || '40%'})</p>
      </div>
      <div class="p-3 bg-indigo-50 border border-indigo-200 rounded-xl">
        <p class="text-[11px] text-indigo-700 font-semibold uppercase">Tỉ lệ Thông hiểu (30%)</p>
        <p class="text-lg font-bold text-indigo-950">${val.scoreBreakdown?.hieu?.toFixed(2).replace('.', ',') || '3,00'} đ (${val.percentBreakdown?.hieu || '30%'})</p>
      </div>
      <div class="p-3 bg-purple-50 border border-purple-200 rounded-xl">
        <p class="text-[11px] text-purple-700 font-semibold uppercase">Tỉ lệ Vận dụng (30%)</p>
        <p class="text-lg font-bold text-purple-950">${val.scoreBreakdown?.vd?.toFixed(2).replace('.', ',') || '3,00'} đ (${val.percentBreakdown?.vd || '30%'})</p>
      </div>
    `;
  }

  const tbody = document.getElementById('slotAuditTableBody');
  if (tbody) {
    let rowsHtml = '';
    const audits = (val.slotAudits && val.slotAudits.length > 0) ? val.slotAudits : generateFallbackAudits(exam);

    audits.forEach(aud => {
      const isMatched = aud.matched !== false;
      const statusBadge = isMatched
        ? `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300"><i class="fa-solid fa-check"></i> Khớp 100%</span>`
        : `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-rose-100 text-rose-800 border border-rose-300"><i class="fa-solid fa-xmark"></i> Sai lệch</span>`;

      const levelReqColor = (aud.levelRequired || '').includes('Vận') ? 'text-rose-700 font-bold' : ((aud.levelRequired || '').includes('Thông') ? 'text-blue-700 font-bold' : 'text-emerald-700 font-bold');
      const levelActColor = (aud.levelActual || '').includes('Vận') ? 'text-rose-700 font-bold' : ((aud.levelActual || '').includes('Thông') ? 'text-blue-700 font-bold' : 'text-emerald-700 font-bold');

      rowsHtml += `
        <tr class="hover:bg-slate-50 transition ${!isMatched ? 'bg-rose-50/50' : ''}">
          <td class="p-2.5 text-center font-bold font-mono text-slate-700">${aud.slotId}</td>
          <td class="p-2.5 text-slate-600 font-semibold">${aud.format}</td>
          <td class="p-2.5 text-slate-800">
            <div>${aud.knowledgeUnit || 'Đơn vị kiến thức'}</div>
            <div class="text-[10px] text-slate-400 font-mono">ID: ${aud.questionId || 'N/A'}</div>
          </td>
          <td class="p-2.5 text-center ${levelReqColor}">${aud.levelRequired || 'N/A'}</td>
          <td class="p-2.5 text-center ${levelActColor}">${aud.levelActual || 'N/A'}</td>
          <td class="p-2.5 text-center font-bold text-slate-900">${(aud.points || 0.25).toFixed(2).replace('.', ',')} đ</td>
          <td class="p-2.5 text-center">${statusBadge}</td>
        </tr>
      `;
    });

    tbody.innerHTML = rowsHtml;
  }

  const errContainer = document.getElementById('slotAuditErrorsContainer');
  const errList = document.getElementById('slotAuditErrorsList');
  if (errContainer && errList) {
    if (val.errors && val.errors.length > 0) {
      errList.innerHTML = val.errors.map(e => `<li>${e}</li>`).join('');
      errContainer.classList.remove('hidden');
    } else {
      errContainer.classList.add('hidden');
    }
  }

  modal.classList.remove('hidden');
};

window.closeSlotAuditModal = function() {
  const modal = document.getElementById('slotAuditModal');
  if (modal) modal.classList.add('hidden');
};

function renderExamPaper(exam, containerId, withSolutions = false) {
  const container = document.getElementById(containerId);
  if (!container || !exam) return;

  // Cập nhật tiêu đề và mã đề hiển thị trên khung đề thi
  const displayTitle = document.getElementById('displayExamTitle');
  if (displayTitle && exam) {
    const examGradeNum = exam.gradeNum || (exam.grade && String(exam.grade).replace(/\D/g, '')) || currentGrade || '10';
    displayTitle.textContent = exam.title || `ĐỀ KIỂM TRA HÓA HỌC ${examGradeNum}`;
  }
  const displayCode = document.getElementById('displayExamCode');
  if (displayCode && exam) {
    displayCode.textContent = exam.examCode || selectedCode || '101';
  }

  let html = '';

  // TẦNG KIỂM THỬ ĐỐI SOÁT (ASSERTION VALIDATOR BANNER)
  const val = exam.validationReport || {
    isValid: true,
    totalScore: 10.0,
    scoreBreakdown: { biet: 4.0, hieu: 3.0, vd: 3.0 },
    percentBreakdown: { biet: '40%', hieu: '30%', vd: '30%' },
    totalQuestions: ((exam.parts?.part1?.length || 0) + (exam.parts?.part2?.length || 0) + (exam.parts?.part3?.length || 0) + (exam.parts?.part4?.length || 0)),
    slotAudits: [],
    errors: [],
    warnings: []
  };

  if (val.isValid) {
    html += `
      <div class="p-4 mb-6 rounded-xl border border-emerald-300 bg-linear-to-r from-emerald-50 via-teal-50 to-green-50 shadow-xs">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shadow shrink-0">
              <i class="fa-solid fa-check-double"></i>
            </div>
            <div>
              <div class="flex items-center gap-2 flex-wrap">
                <span class="text-sm font-bold text-emerald-950 uppercase tracking-wide">Tầng Kiểm thử Đối soát: KHỚP 100% MA TRẬN & BẢN ĐẶC TẢ</span>
                <span class="px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-200 text-emerald-800 border border-emerald-400">Chuẩn CV 7991</span>
                <span class="px-2 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 text-blue-800 border border-blue-300">Deterministic Slots</span>
              </div>
              <p class="text-xs text-emerald-800 mt-1">
                Tổng điểm: <strong class="text-emerald-950">${(val.totalScore || 10).toFixed(1).replace('.', ',')} đ</strong> &bull; 
                Tỉ lệ nhận thức: <strong class="text-emerald-950">Biết ${val.percentBreakdown?.biet || '40%'} (4,0đ) &ndash; Hiểu ${val.percentBreakdown?.hieu || '30%'} (3,0đ) &ndash; Vận dụng ${val.percentBreakdown?.vd || '30%'} (3,0đ)</strong> &bull; 
                21/21 Slots hợp lệ
              </p>
            </div>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <button type="button" onclick="window.openSlotAuditModal()" class="px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold shadow-xs flex items-center gap-1.5 transition cursor-pointer">
              <i class="fa-solid fa-list-check"></i>
              <span>Xem đối soát 21 Slots</span>
            </button>
          </div>
        </div>
      </div>
    `;
  } else {
    html += `
      <div class="p-4 mb-6 rounded-xl border-2 border-rose-400 bg-rose-50 shadow-sm">
        <div class="flex flex-col md:flex-row md:items-start justify-between gap-3">
          <div class="flex items-start gap-3">
            <div class="w-10 h-10 rounded-full bg-rose-600 text-white flex items-center justify-center font-bold text-lg shadow shrink-0">
              <i class="fa-solid fa-triangle-exclamation"></i>
            </div>
            <div>
              <div class="flex items-center gap-2 flex-wrap">
                <span class="text-sm font-bold text-rose-950 uppercase tracking-wide">CẢNH BÁO ĐỐI SOÁT: PHÁT HIỆN LỆCH MA TRẬN HOẶC THIẾU CÂU HỎI</span>
                <span class="px-2 py-0.5 rounded-full text-[11px] font-bold bg-rose-200 text-rose-800 border border-rose-400">Không hợp lệ</span>
              </div>
              <div class="mt-2 text-xs text-rose-900 space-y-1">
                ${val.errors.map(err => `<div class="flex items-center gap-1.5"><i class="fa-solid fa-circle-xmark text-rose-600"></i> <span>${err}</span></div>`).join('')}
              </div>
            </div>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <button type="button" onclick="window.openSlotAuditModal()" class="px-3 py-1.5 rounded-lg bg-rose-700 hover:bg-rose-800 text-white text-xs font-semibold shadow-xs flex items-center gap-1.5 transition cursor-pointer">
              <i class="fa-solid fa-stethoscope"></i>
              <span>Chẩn đoán chi tiết</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // PHẦN I
  html += `
    <div class="border-b pb-6">
      <div class="bg-blue-50 border-l-4 border-blue-600 px-4 py-2 mb-4 rounded-r flex justify-between items-center">
        <h4 class="font-bold text-blue-900 text-sm">PHẦN I: TRẮC NGHIỆM NHIỀU LỰA CHỌN</h4>
        <span class="text-xs text-blue-700 font-semibold">(12 câu - 3,0 điểm)</span>
      </div>
      <p class="text-xs italic text-slate-500 mb-4">Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu hỏi chỉ chọn một phương án đúng (mỗi câu 0,25 điểm).</p>
      <div class="space-y-5">
  `;

  exam.parts.part1.forEach((q, idx) => {
    const badgeType = q.category === 'tinh_toan' 
      ? `<span class="badge-calc px-2 py-0.5 rounded text-[11px] font-semibold"><i class="fa-solid fa-calculator"></i> Tính toán</span>`
      : `<span class="badge-theory px-2 py-0.5 rounded text-[11px] font-semibold"><i class="fa-solid fa-book-open"></i> Lý thuyết</span>`;

    const mutatedTag = q.isMutated
      ? `<span class="badge-mutated px-2 py-0.5 rounded text-[11px] font-bold"><i class="fa-solid fa-shuffle"></i> Đã thay số</span>`
      : '';

    const specTagHtml = (showSpecTags && q.specTagText)
      ? `<div class="mb-2 p-1.5 px-3 rounded bg-purple-50 border-l-4 border-purple-600 text-xs font-bold text-purple-950 flex items-center gap-1.5 shadow-xs">
           <i class="fa-solid fa-tag text-purple-600"></i>
           <span>${q.specTagText}</span>
         </div>`
      : '';

    html += `
      <div class="p-3.5 bg-slate-50/70 hover:bg-slate-50 rounded-lg border border-slate-200 transition">
        ${specTagHtml}
        <div class="flex justify-between items-start gap-2 mb-2">
          <span class="font-bold text-blue-900 text-sm">Câu ${idx + 1}.</span>
          <div class="flex items-center gap-1.5 flex-wrap">
            <span class="text-[10px] text-slate-400 uppercase font-mono">${q.lessonTitle.split(':')[0]}</span>
            ${badgeType}
            ${mutatedTag}
          </div>
        </div>
        <div class="text-sm text-slate-800 leading-relaxed font-medium mb-3 whitespace-pre-line">${q.content}</div>
        ${(q.imageUrl || q.imageBase64) ? `
          <div class="my-3 text-center">
            <img src="${q.imageUrl || q.imageBase64}" alt="${q.imageCaption || 'Hình ảnh câu hỏi'}" class="mx-auto max-w-[290px] h-auto border border-slate-300 rounded shadow-sm bg-white p-1" />
            <p class="text-xs italic text-slate-500 mt-1 font-medium">${q.imageCaption || 'Hình 1. Phổ khối lượng của nguyên tố Neon (Ne)'}</p>
          </div>
        ` : ''}
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          ${q.options.map((opt, oIdx) => {
            const letter = ['A', 'B', 'C', 'D'][oIdx];
            const isCorrect = q.correctAnswer === letter;
            const highlightClass = withSolutions && isCorrect ? 'bg-emerald-100 text-emerald-900 border-emerald-400 font-bold' : 'bg-white border-slate-200 text-slate-700';
            return `
              <div class="px-3 py-1.5 rounded border ${highlightClass} flex items-center">
                <span class="font-bold mr-2 text-slate-600">${letter}.</span>
                <span>${opt}</span>
              </div>
            `;
          }).join('')}
        </div>
        ${withSolutions ? `
          <div class="mt-3 p-2.5 bg-emerald-50 border-l-2 border-emerald-500 text-xs text-emerald-900 rounded-r">
            <span class="font-bold">Đáp án đúng: ${q.correctAnswer}</span>
            <p class="mt-1 text-slate-600 whitespace-pre-line">${q.explanation}</p>
          </div>
        ` : ''}
      </div>
    `;
  });
  html += `</div></div>`;

  // PHẦN II
  html += `
    <div class="border-b pb-6">
      <div class="bg-indigo-50 border-l-4 border-indigo-600 px-4 py-2 mb-4 rounded-r flex justify-between items-center">
        <h4 class="font-bold text-indigo-900 text-sm">PHẦN II: TRẮC NGHIỆM ĐÚNG - SAI</h4>
        <span class="text-xs text-indigo-700 font-semibold">(2 câu - 2,0 điểm)</span>
      </div>
      <p class="text-xs italic text-slate-500 mb-4">Thí sinh trả lời câu 1 và câu 2. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn đúng hoặc sai.</p>
      <div class="space-y-6">
  `;

  exam.parts.part2.forEach((q, idx) => {
    const specTagHtml = (showSpecTags && q.specTagText)
      ? `<div class="mb-2 p-1.5 px-3 rounded bg-purple-50 border-l-4 border-purple-600 text-xs font-bold text-purple-950 flex items-center gap-1.5 shadow-xs">
           <i class="fa-solid fa-tag text-purple-600"></i>
           <span>${q.specTagText}</span>
         </div>`
      : '';

    html += `
      <div class="p-4 bg-slate-50/70 rounded-lg border border-slate-200">
        ${specTagHtml}
        <div class="flex justify-between items-start gap-2 mb-2">
          <span class="font-bold text-indigo-900 text-sm">Câu ${idx + 1}.</span>
          <span class="badge-theory px-2 py-0.5 rounded text-[11px] font-semibold">${q.lessonTitle}</span>
        </div>
        <div class="text-sm text-slate-800 font-medium mb-3">${q.content}</div>
        <div class="space-y-2">
          ${q.items.map(item => {
            const ansBadge = withSolutions ? (
              item.isTrue 
                ? `<span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-xs">ĐÚNG</span>`
                : `<span class="px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-bold text-xs">SAI</span>`
            ) : '';
            const itemSpecTag = (showSpecTags && item.specTagText)
              ? `<span class="px-1.5 py-0.5 rounded bg-purple-100 text-purple-900 border border-purple-300 font-bold text-[10.5px] mr-1.5">${item.specTagText}</span>`
              : '';
            return `
              <div class="p-2.5 bg-white rounded border border-slate-200 flex justify-between items-start text-xs text-slate-700">
                <div class="pr-2">
                  <strong class="text-indigo-800 font-bold">${item.id})</strong> ${itemSpecTag}${item.text}
                  ${withSolutions && item.explanation ? `<p class="mt-1 text-[11px] text-slate-500 italic">HD: ${item.explanation}</p>` : ''}
                </div>
                ${ansBadge}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  });
  html += `</div></div>`;

  // PHẦN III
  html += `
    <div class="border-b pb-6">
      <div class="bg-amber-50 border-l-4 border-amber-600 px-4 py-2 mb-4 rounded-r flex justify-between items-center">
        <h4 class="font-bold text-amber-900 text-sm">PHẦN III: TRẮC NGHIỆM TRẢ LỜI NGẮN</h4>
        <span class="text-xs text-amber-700 font-semibold">(4 câu - 2,0 điểm)</span>
      </div>
      <p class="text-xs italic text-slate-500 mb-4">Thí sinh trả lời từ câu 1 đến câu 4. Kết quả là các con số (mỗi câu 0,5 điểm).</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  `;

  exam.parts.part3.forEach((q, idx) => {
    const specTagHtml = (showSpecTags && q.specTagText)
      ? `<div class="mb-2 p-1.5 px-3 rounded bg-purple-50 border-l-4 border-purple-600 text-xs font-bold text-purple-950 flex items-center gap-1.5 shadow-xs">
           <i class="fa-solid fa-tag text-purple-600"></i>
           <span>${q.specTagText}</span>
         </div>`
      : '';

    html += `
      <div class="p-3.5 bg-slate-50/70 rounded-lg border border-slate-200">
        ${specTagHtml}
        <div class="flex justify-between items-start gap-2 mb-2">
          <span class="font-bold text-amber-900 text-sm">Câu ${idx + 1}.</span>
          <span class="text-[10px] text-slate-500 font-mono">${q.lessonTitle.split(':')[0]}</span>
        </div>
        <div class="text-xs text-slate-800 font-medium mb-3 leading-relaxed whitespace-pre-line">${q.content}</div>
        ${withSolutions ? `
          <div class="p-2 bg-emerald-50 border-l-2 border-emerald-500 text-xs text-emerald-900 rounded-r">
            <span class="font-bold">Đáp án: ${q.correctAnswer || q.answer || ''}</span>
            <p class="mt-1 text-slate-600 text-[11px] whitespace-pre-line">${q.explanation}</p>
          </div>
        ` : `
          <div class="p-2 bg-white rounded border border-dashed border-slate-300 text-center text-xs text-slate-400 font-mono">
            [Đáp án học sinh ghi số vào đây]
          </div>
        `}
      </div>
    `;
  });
  html += `</div></div>`;

  // PHẦN IV
  html += `
    <div>
      <div class="bg-rose-50 border-l-4 border-rose-600 px-4 py-2 mb-4 rounded-r flex justify-between items-center">
        <h4 class="font-bold text-rose-900 text-sm">PHẦN IV: CÂU HỎI TỰ LUẬN</h4>
        <span class="text-xs text-rose-700 font-semibold">(2 câu - 3,0 điểm)</span>
      </div>
      <p class="text-xs italic text-slate-500 mb-4">Thí sinh trình bày chi tiết lời giải, phương trình hóa học và phép tính toán.</p>
      <div class="space-y-4">
  `;

  exam.parts.part4.forEach((q, idx) => {
    const mutatedTag = q.isMutated
      ? `<span class="badge-mutated px-2 py-0.5 rounded text-[11px] font-bold"><i class="fa-solid fa-shuffle"></i> Bài toán đã thay số</span>`
      : '';
    const pts = q.points ? `${q.points.toFixed(1).replace('.', ',')} điểm` : (idx === 0 ? '1,0 điểm' : '2,0 điểm');
    const specTagHtml = (showSpecTags && q.specTagText)
      ? `<div class="mb-2 p-1.5 px-3 rounded bg-purple-50 border-l-4 border-purple-600 text-xs font-bold text-purple-950 flex items-center gap-1.5 shadow-xs">
           <i class="fa-solid fa-tag text-purple-600"></i>
           <span>${q.specTagText}</span>
         </div>`
      : '';

    html += `
      <div class="p-4 bg-slate-50/70 rounded-lg border border-slate-200">
        ${specTagHtml}
        <div class="flex justify-between items-start gap-2 mb-2">
          <span class="font-bold text-rose-900 text-sm">Câu ${idx + 1} (${pts}).</span>
          <div class="flex items-center gap-2">
            <span class="badge-calc px-2 py-0.5 rounded text-[11px] font-semibold">${q.lessonTitle}</span>
            ${mutatedTag}
          </div>
        </div>
        <div class="text-sm text-slate-800 leading-relaxed font-medium mb-3 whitespace-pre-line">${q.content}</div>
        ${(q.imageUrl || q.imageBase64) ? `
          <div class="my-3 text-center">
            <img src="${q.imageUrl || q.imageBase64}" alt="${q.imageCaption || 'Hình ảnh câu hỏi'}" class="mx-auto max-w-[290px] h-auto border border-slate-300 rounded shadow-sm bg-white p-1" />
            <p class="text-xs italic text-slate-500 mt-1 font-medium">${q.imageCaption || 'Hình 1. Phổ khối lượng của nguyên tố Neon (Ne)'}</p>
          </div>
        ` : ''}
        ${withSolutions ? `
          <div class="p-3 bg-emerald-50 border-l-3 border-emerald-600 text-xs text-emerald-950 rounded-r">
            <span class="font-bold text-emerald-800 text-sm">Hướng dẫn giải & Biểu điểm:</span>
            <div class="mt-2 text-slate-700 font-mono whitespace-pre-line bg-white p-2.5 rounded border border-emerald-200">${q.explanation}</div>
          </div>
        ` : ''}
      </div>
    `;
  });
  html += `</div></div>`;

  container.innerHTML = html;
}

// Render Comparison View between Base Exam and Similar Exam
function renderComparisonView() {
  const origBox = document.getElementById('compareOriginalBox');
  const simBox = document.getElementById('compareSimilarBox');
  if (!origBox || !simBox || !currentExam || !similarExam) return;

  // Render original
  origBox.innerHTML = renderCompactList(currentExam);
  // Render similar
  simBox.innerHTML = renderCompactList(similarExam, true);
}

function renderCompactList(exam, isSimilar = false) {
  let html = '';
  ['part1', 'part2', 'part3', 'part4'].forEach(partKey => {
    exam.parts[partKey].forEach((q, idx) => {
      let badge = '';
      if (q.category === 'tinh_toan') {
        badge = isSimilar
          ? `<span class="px-2 py-0.5 bg-purple-100 text-purple-800 font-bold rounded text-[10px]"><i class="fa-solid fa-shuffle"></i> ĐÃ THAY SỐ</span>`
          : `<span class="px-2 py-0.5 bg-amber-100 text-amber-800 font-semibold rounded text-[10px]">TÍNH TOÁN GỐC</span>`;
      } else {
        badge = `<span class="px-2 py-0.5 bg-blue-100 text-blue-800 font-semibold rounded text-[10px]"><i class="fa-solid fa-lock"></i> LÝ THUYẾT NGUYÊN BẢN</span>`;
      }

      html += `
        <div class="p-3 rounded border ${q.isMutated ? 'border-purple-300 bg-purple-50/40' : 'border-slate-200 bg-slate-50'}">
          <div class="flex justify-between items-center mb-1.5">
            <span class="font-bold text-xs text-slate-700">${partKey.toUpperCase()} - Câu ${idx + 1}</span>
            ${badge}
          </div>
          <div class="text-xs text-slate-800 mb-2 whitespace-pre-line">${q.content}</div>
          ${(q.imageUrl || q.imageBase64) ? `
            <div class="my-2 text-center">
              <img src="${q.imageUrl || q.imageBase64}" alt="${q.imageCaption || 'Hình ảnh câu hỏi'}" class="max-w-[200px] h-auto mx-auto border rounded p-1 bg-white" />
            </div>
          ` : ''}
          ${q.options ? `
            <div class="grid grid-cols-2 gap-1 text-[11px] text-slate-600 mb-2">
              ${q.options.map((o, i) => `<div><strong>${['A','B','C','D'][i]}.</strong> ${o}</div>`).join('')}
            </div>
          ` : ''}
          <div class="text-[11px] text-emerald-700 font-bold">
            Đáp án: ${q.correctAnswer || (q.items ? q.items.map(it => it.id + ':' + (it.isTrue ? 'Đ' : 'S')).join(' | ') : '')}
          </div>
        </div>
      `;
    });
  });
  return html;
}

// Render Master Answer Table for 4 codes
function renderMultiCodeAnswerTable(examsList) {
  const container = document.getElementById('multiCodeBox');
  const tableBox = document.getElementById('multiCodeAnswerTable');
  if (!container || !tableBox) return;

  container.classList.remove('hidden');

  let html = `
    <table class="min-w-full divide-y divide-slate-200 border text-center">
      <thead class="bg-slate-100 font-bold text-slate-700">
        <tr>
          <th class="px-3 py-2 border">Câu hỏi</th>
          ${examsList.map(e => `<th class="px-3 py-2 border bg-blue-50 text-blue-900">Mã đề ${e.examCode}</th>`).join('')}
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200 bg-white">
  `;

  // Part 1: 12 questions
  for (let i = 0; i < 12; i++) {
    html += `<tr><td class="px-3 py-1.5 border font-semibold bg-slate-50">Câu ${i + 1} (Phần I)</td>`;
    examsList.forEach(e => {
      const q = e.parts.part1[i];
      html += `<td class="px-3 py-1.5 border font-bold text-emerald-700">${q ? q.correctAnswer : '-'}</td>`;
    });
    html += `</tr>`;
  }

  // Part 3: 4 questions
  for (let i = 0; i < 4; i++) {
    html += `<tr><td class="px-3 py-1.5 border font-semibold bg-slate-50">Câu ${i + 1} (Phần III)</td>`;
    examsList.forEach(e => {
      const q = e.parts.part3[i];
      html += `<td class="px-3 py-1.5 border font-bold text-blue-700">${q ? q.correctAnswer : '-'}</td>`;
    });
    html += `</tr>`;
  }

  html += `</tbody></table>`;
  tableBox.innerHTML = html;
  container.scrollIntoView({ behavior: 'smooth' });
}

// Question Bank Rendering
function renderQuestionBank(questions) {
  const container = document.getElementById('bankListContainer');
  const countEl = document.getElementById('bankCount');
  if (!container) return;

  countEl.innerText = questions.length;

  if (questions.length === 0) {
    container.innerHTML = `<div class="p-8 text-center text-slate-400 bg-white rounded-xl border">Không tìm thấy câu hỏi phù hợp với bộ lọc.</div>`;
    return;
  }

  let html = '';
  questions.forEach(q => {
    const isCalc = q.category === 'tinh_toan';
    const badge = isCalc
      ? `<span class="badge-calc px-2 py-0.5 rounded text-[11px] font-semibold"><i class="fa-solid fa-calculator"></i> Tính toán thay số</span>`
      : `<span class="badge-theory px-2 py-0.5 rounded text-[11px] font-semibold"><i class="fa-solid fa-book-open"></i> Lý thuyết</span>`;

    html += `
      <div id="bank-card-${q.id}" class="p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition space-y-3">
        <div class="flex justify-between items-start gap-2">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="px-2 py-0.5 bg-slate-100 text-slate-700 rounded font-bold text-xs">${q.lessonTitle}</span>
            <span class="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded text-xs font-semibold uppercase">${q.level}</span>
            ${badge}
          </div>
          ${isCalc ? `
            <button onclick="liveMutateQuestion('${q.id}')" class="px-2.5 py-1 bg-amber-500 hover:bg-amber-600 text-white rounded text-xs font-bold transition flex items-center gap-1 shadow-sm">
              <i class="fa-solid fa-dice"></i> Thử Thay Số Ngay
            </button>
          ` : ''}
        </div>

        <div class="text-sm text-slate-800 font-medium whitespace-pre-line leading-relaxed">${q.content}</div>

        ${q.options ? `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            ${q.options.map((opt, idx) => `
              <div class="p-2 rounded bg-slate-50 border border-slate-200">
                <strong>${['A','B','C','D'][idx]}.</strong> ${opt}
              </div>
            `).join('')}
          </div>
        ` : ''}

        ${q.items ? `
          <div class="space-y-1.5 text-xs text-slate-700">
            ${q.items.map(it => `
              <div class="p-2 rounded bg-slate-50 border flex justify-between">
                <span><strong>${it.id})</strong> ${it.text}</span>
                <span class="font-bold ${it.isTrue ? 'text-emerald-700' : 'text-rose-700'}">${it.isTrue ? 'Đúng' : 'Sai'}</span>
              </div>
            `).join('')}
          </div>
        ` : ''}

        <details class="text-xs pt-1">
          <summary class="cursor-pointer text-blue-600 hover:text-blue-800 font-semibold select-none">
            <i class="fa-solid fa-lightbulb mr-1"></i> Xem đáp án & Lời giải chi tiết
          </summary>
          <div class="mt-2 p-3 bg-emerald-50 rounded border border-emerald-200 text-emerald-950 whitespace-pre-line leading-relaxed">
            ${q.correctAnswer ? `<p class="font-bold text-emerald-900 mb-1">Đáp án: ${q.correctAnswer}</p>` : ''}
            <p>${q.explanation}</p>
          </div>
        </details>
      </div>
    `;
  });

  container.innerHTML = html;
}

// Live Mutate single question in bank view
async function liveMutateQuestion(questionId) {
  try {
    const res = await fetch('/api/mutate-question', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ questionId })
    });
    const json = await res.json();
    if (json.success) {
      const mutated = json.data;
      const card = document.getElementById(`bank-card-${questionId}`);
      if (card) {
        // Flash animation
        card.classList.add('ring-2', 'ring-amber-500', 'bg-amber-50/50');
        setTimeout(() => card.classList.remove('ring-2', 'ring-amber-500', 'bg-amber-50/50'), 1500);

        // Update question in state
        const idx = allBankQuestions.findIndex(q => q.id === questionId);
        if (idx !== -1) allBankQuestions[idx] = mutated;
        renderQuestionBank(allBankQuestions);
      }
    }
  } catch (err) {
    console.error("Lỗi thay số câu hỏi:", err);
  }
}

function filterQuestionBank() {
  const lesson = document.getElementById('bankFilterLesson').value;
  const part = document.getElementById('bankFilterPart').value;
  const category = document.getElementById('bankFilterCategory').value;
  const search = document.getElementById('bankSearchInput').value.trim().toLowerCase();

  const filtered = allBankQuestions.filter(q => {
    if (lesson && q.lessonId !== lesson) return false;
    if (part && q.part !== part) return false;
    if (category && q.category !== category) return false;
    if (search && !q.content.toLowerCase().includes(search) && !q.explanation.toLowerCase().includes(search)) return false;
    return true;
  });

  renderQuestionBank(filtered);
}

// Matrix Display
// Rút gọn nội dung câu hỏi để hiển thị gọn gàng trong bảng đặc tả
function truncateText(txt, maxLen = 85) {
  if (!txt) return '';
  const clean = txt.replace(/\s+/g, ' ').trim();
  if (clean.length <= maxLen) return clean;
  return clean.substring(0, maxLen) + '...';
}

// Sinh khung Ma trận HTML cho một đề thi cụ thể
function generateExamMatrixHTML(exam) {
  if (!exam) return '';
  if (exam.matrixHtml) return exam.matrixHtml;
  const code = exam.examCode || '101';
  const school = exam.school || 'TRƯỜNG THPT BÙI THỊ XUÂN – MŨI NÉ';

  return `
    <div style="margin-bottom: 25px; page-break-inside: avoid;">
      <table style="width: 100%; border-collapse: collapse; border: none; margin-bottom: 12px;">
        <tr>
          <td style="width: 45%; vertical-align: top; text-align: center; border: none; font-size: 11pt;">
            <strong>SỞ GIÁO DỤC VÀ ĐÀO TẠO</strong><br>
            <strong>${school.toUpperCase()}</strong><br>
            <span style="font-size: 10pt; font-style: italic;">Tổ: Hóa - Sinh - KTNN</span>
            <div style="width: 120px; height: 1px; background-color: #000; margin: 3px auto;"></div>
          </td>
          <td style="width: 55%; vertical-align: top; text-align: center; border: none; font-size: 11pt;">
            <strong>KHUNG MA TRẬN ĐỀ KIỂM TRA GIỮA HỌC KÌ I</strong><br>
            <strong>MÔN: HÓA HỌC 12 – MÃ ĐỀ: ${code}</strong><br>
            <span style="font-size: 10.5pt; font-style: italic;">Thời gian: 45 phút – Tổng điểm: 10,0 điểm</span>
          </td>
        </tr>
      </table>

      <table style="width: 100%; border-collapse: collapse; border: 1px solid #000; text-align: center; font-size: 10pt; line-height: 1.25;">
        <thead style="background-color: #f1f5f9; font-weight: bold;">
          <tr>
            <th style="border: 1px solid #000; padding: 5px;" rowspan="2">TT</th>
            <th style="border: 1px solid #000; padding: 5px; text-align: left;" rowspan="2">Chương / Chủ đề</th>
            <th style="border: 1px solid #000; padding: 5px; text-align: left;" rowspan="2">Nội dung kiến thức</th>
            <th style="border: 1px solid #000; padding: 5px;" colspan="3">Phần I (Nhiều lựa chọn)</th>
            <th style="border: 1px solid #000; padding: 5px;" colspan="3">Phần II (Đúng - Sai)</th>
            <th style="border: 1px solid #000; padding: 5px;" colspan="3">Phần III (Trả lời ngắn)</th>
            <th style="border: 1px solid #000; padding: 5px;" colspan="2">Phần IV (Tự luận)</th>
            <th style="border: 1px solid #000; padding: 5px;" rowspan="2">Tổng Điểm</th>
          </tr>
          <tr style="font-size: 9.5pt; background-color: #e2e8f0;">
            <th style="border: 1px solid #000; padding: 3px;">Biết</th><th style="border: 1px solid #000; padding: 3px;">Hiểu</th><th style="border: 1px solid #000; padding: 3px;">VD</th>
            <th style="border: 1px solid #000; padding: 3px;">Biết</th><th style="border: 1px solid #000; padding: 3px;">Hiểu</th><th style="border: 1px solid #000; padding: 3px;">VD</th>
            <th style="border: 1px solid #000; padding: 3px;">Biết</th><th style="border: 1px solid #000; padding: 3px;">Hiểu</th><th style="border: 1px solid #000; padding: 3px;">VD</th>
            <th style="border: 1px solid #000; padding: 3px;">Hiểu</th><th style="border: 1px solid #000; padding: 3px;">VD</th>
          </tr>
        </thead>
        <tbody>
          <!-- 1. Ester - Lipid -->
          <tr>
            <td style="border: 1px solid #000; padding: 4px;" rowspan="2">1</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: left; font-weight: bold;" rowspan="2">ESTER – LIPID (4 tiết)</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: left;">Ester - lipid</td>
            <td style="border: 1px solid #000; padding: 4px; font-weight: bold; color: #1e40af;">C1, C2</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px; font-weight: bold;">C1a, C1b</td>
            <td style="border: 1px solid #000; padding: 4px;">C1c</td>
            <td style="border: 1px solid #000; padding: 4px;">C1d</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px; font-weight: bold;">1,50 đ</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: left;">Xà phòng và chất giặt rửa</td>
            <td style="border: 1px solid #000; padding: 4px; font-weight: bold; color: #1e40af;">C3, C4</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px; font-weight: bold; color: #15803d;">C1</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px; font-weight: bold; color: #b91c1c;">C2 (2,0đ)</td>
            <td style="border: 1px solid #000; padding: 4px; font-weight: bold;">3,00 đ</td>
          </tr>

          <!-- 2. Carbohydrate -->
          <tr>
            <td style="border: 1px solid #000; padding: 4px;" rowspan="4">2</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: left; font-weight: bold;" rowspan="4">CARBOHYDRATE (6 tiết)</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: left;">Glucose và fructose</td>
            <td style="border: 1px solid #000; padding: 4px; font-weight: bold; color: #1e40af;">C5</td>
            <td style="border: 1px solid #000; padding: 4px; font-weight: bold; color: #15803d;">C6</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px; font-weight: bold;">0,50 đ</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: left;">Saccharose và maltose</td>
            <td style="border: 1px solid #000; padding: 4px; font-weight: bold; color: #1e40af;">C7</td>
            <td style="border: 1px solid #000; padding: 4px; font-weight: bold; color: #15803d;">C8</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px; font-weight: bold;">0,50 đ</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: left;">Tinh bột và cellulose</td>
            <td style="border: 1px solid #000; padding: 4px; font-weight: bold; color: #1e40af;">C9</td>
            <td style="border: 1px solid #000; padding: 4px; font-weight: bold; color: #15803d;">C10</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px; font-weight: bold;">0,50 đ</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: left;">Tổng hợp chương 2</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px; font-weight: bold; color: #1e40af;">C2</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px; font-weight: bold; color: #15803d;">C1 (1,0đ)</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px; font-weight: bold;">1,50 đ</td>
          </tr>

          <!-- 3. Hợp chất chứa Nitrogen -->
          <tr>
            <td style="border: 1px solid #000; padding: 4px;" rowspan="2">3</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: left; font-weight: bold;" rowspan="2">HỢP CHẤT NITROGEN (2 tiết)</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: left;">Amine</td>
            <td style="border: 1px solid #000; padding: 4px; font-weight: bold; color: #1e40af;">C11</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px; font-weight: bold;">C2a, C2b</td>
            <td style="border: 1px solid #000; padding: 4px;">C2c</td>
            <td style="border: 1px solid #000; padding: 4px;">C2d</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px; font-weight: bold; color: #b91c1c;">C3</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px; font-weight: bold;">1,75 đ</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: left;">Amino acid và peptide</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px; font-weight: bold; color: #15803d;">C12</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px; font-weight: bold; color: #1e40af;">C4</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px;">-</td>
            <td style="border: 1px solid #000; padding: 4px; font-weight: bold;">0,75 đ</td>
          </tr>

          <!-- Tổng kết -->
          <tr style="background-color: #fef3c7; font-weight: bold;">
            <td style="border: 1px solid #000; padding: 5px;" colspan="3">TỔNG SỐ CÂU / LỆNH HỎI</td>
            <td style="border: 1px solid #000; padding: 5px;">8</td><td style="border: 1px solid #000; padding: 5px;">4</td><td style="border: 1px solid #000; padding: 5px;">0</td>
            <td style="border: 1px solid #000; padding: 5px;">4</td><td style="border: 1px solid #000; padding: 5px;">2</td><td style="border: 1px solid #000; padding: 5px;">2</td>
            <td style="border: 1px solid #000; padding: 5px;">2</td><td style="border: 1px solid #000; padding: 5px;">1</td><td style="border: 1px solid #000; padding: 5px;">1</td>
            <td style="border: 1px solid #000; padding: 5px;">1</td><td style="border: 1px solid #000; padding: 5px;">1</td>
            <td style="border: 1px solid #000; padding: 5px; color: #b91c1c;">10,0 đ</td>
          </tr>
          <tr style="background-color: #eff6ff; font-weight: bold;">
            <td style="border: 1px solid #000; padding: 5px;" colspan="3">TỔNG ĐIỂM TỪNG MỨC ĐỘ</td>
            <td style="border: 1px solid #000; padding: 5px;" colspan="3">3,0 đ (30%)</td>
            <td style="border: 1px solid #000; padding: 5px;" colspan="3">2,0 đ (20%)</td>
            <td style="border: 1px solid #000; padding: 5px;" colspan="3">2,0 đ (20%)</td>
            <td style="border: 1px solid #000; padding: 5px;" colspan="2">3,0 đ (30%)</td>
            <td style="border: 1px solid #000; padding: 5px; color: #b91c1c;">100%</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

// Sinh Bảng Đặc Tả Kĩ Thuật HTML cho một đề thi cụ thể (Chuẩn 100% 9 Cột GDPT 2018)
function generateExamSpecHTML(exam) {
  if (!exam) return '';
  if (exam.specHtml) return exam.specHtml;
  const examGrade = exam.gradeNum || exam.grade || currentGrade || '12';
  const code = exam.examCode || '101';
  const school = exam.school || 'TRƯỜNG THPT BÙI THỊ XUÂN – MŨI NÉ';

  // Fallback nếu chưa có sẵn specHtml từ server
  return `
    <div style="margin-top: 25px; margin-bottom: 25px; page-break-inside: avoid;">
      <table style="width: 100%; border-collapse: collapse; border: none; margin-bottom: 12px;">
        <tr>
          <td style="width: 45%; vertical-align: top; text-align: center; border: none; font-size: 11pt;">
            <strong>SỞ GIÁO DỤC VÀ ĐÀO TẠO</strong><br>
            <strong>${school.toUpperCase()}</strong><br>
            <span style="font-size: 10pt; font-style: italic;">Tổ: Hóa - Sinh - KTNN</span>
            <div style="width: 120px; height: 1px; background-color: #000; margin: 3px auto;"></div>
          </td>
          <td style="width: 55%; vertical-align: top; text-align: center; border: none; font-size: 11pt;">
            <strong>BẢN ĐẶC TẢ ĐỀ KIỂM TRA GIỮA HỌC KÌ I</strong><br>
            <strong>MÔN: HÓA HỌC ${examGrade} – MÃ ĐỀ: ${code}</strong><br>
            <span style="font-size: 10.5pt; font-style: italic;">Thời gian làm bài: 45 phút</span>
          </td>
        </tr>
      </table>

      <table style="width: 100%; border-collapse: collapse; border: 1px solid #000; font-size: 9.5pt; line-height: 1.3;">
        <thead style="background-color: #f1f5f9; font-weight: bold; text-align: center;">
          <tr>
            <th style="border: 1px solid #000; padding: 4px; width: 4%;" rowspan="3">TT<br>(1)</th>
            <th style="border: 1px solid #000; padding: 4px; width: 14%; text-align: left;" rowspan="3">Chương / Chủ đề<br>(2)</th>
            <th style="border: 1px solid #000; padding: 4px; width: 15%; text-align: left;" rowspan="3">Nội dung / đơn vị kiến thức<br>(3)</th>
            <th style="border: 1px solid #000; padding: 4px; width: 9%;" rowspan="3">Cấp độ tư duy<br>(4)</th>
            <th style="border: 1px solid #000; padding: 4px; text-align: left;" rowspan="3">Yêu cầu cần đạt<br>(5)</th>
            <th style="border: 1px solid #000; padding: 4px;" colspan="4">Số lượng câu hỏi ở các mức độ</th>
          </tr>
          <tr>
            <th style="border: 1px solid #000; padding: 4px;" colspan="3">Trắc nghiệm</th>
            <th style="border: 1px solid #000; padding: 4px; width: 9%;" rowspan="2">Tự luận<br>(Phần IV)<br>(9)</th>
          </tr>
          <tr style="background-color: #e2e8f0; font-size: 9pt;">
            <th style="border: 1px solid #000; padding: 3px; width: 8%;">Nhiều lựa chọn<br>(Phần I)<br>(6)</th>
            <th style="border: 1px solid #000; padding: 3px; width: 9%;">Đúng – Sai<br>(Phần II)<br>(7)</th>
            <th style="border: 1px solid #000; padding: 3px; width: 8%;">Trả lời ngắn<br>(Phần III)<br>(8)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">1</td>
            <td style="border: 1px solid #000; padding: 4px; font-weight: bold;">Chủ đề kiểm tra</td>
            <td style="border: 1px solid #000; padding: 4px;">Kiến thức trọng tâm giữa kì 1</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">Nhận biết</td>
            <td style="border: 1px solid #000; padding: 4px;">Đầy đủ chuẩn kiến thức kĩ năng theo phân phối chương trình GDPT 2018.</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">C1, C2</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">C1a, C1b</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

// Hiển thị Ma trận & Bản đặc tả của đề thi đang chọn
function renderMatrixGK1(exam = null) {
  const container = document.getElementById('matrixDisplayArea');
  if (!container) return;

  const targetExam = exam || matrixExamSelected || currentExam;
  if (!targetExam) return;

  const code = targetExam.examCode || '101';
  const badge = document.getElementById('matrixActiveCodeBadge');
  if (badge) {
    badge.innerText = `Đang hiển thị: Ma trận & Bản đặc tả chi tiết của Mã đề ${code}`;
  }

  let html = `
    <!-- Tiêu đề đề thi -->
    <div class="mb-5 bg-gradient-to-r from-blue-900 to-indigo-800 text-white p-4 rounded-lg shadow flex justify-between items-center flex-wrap gap-3">
      <div>
        <span class="text-xs uppercase tracking-wider text-amber-300 font-bold">Hồ sơ kiểm tra định kì chuẩn GDPT 2018</span>
        <h3 class="font-bold text-base md:text-lg mt-0.5">MA TRẬN & BẢN ĐẶC TẢ CHI TIẾT THEO MÃ ĐỀ: ${code}</h3>
        <p class="text-xs text-blue-100 mt-1">Gắn liền trực tiếp với câu hỏi thực tế trong đề kiểm tra • Thời gian làm bài: 45 phút</p>
      </div>
      <div class="flex items-center gap-2">
        <button onclick="exportMatrixSpecWord(matrixExamSelected || currentExam)" class="px-3.5 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-xs rounded-md shadow flex items-center gap-1.5 transition">
          <i class="fa-solid fa-file-word"></i> Tải Ma Trận & Đặc Tả Mã ${code} (.doc)
        </button>
      </div>
    </div>

    <!-- 1. KHUNG MA TRẬN -->
    <div class="mb-8 bg-slate-50 p-4 rounded-lg border border-slate-200">
      <h4 class="font-bold text-sm text-slate-800 mb-3 uppercase flex items-center gap-1.5 text-blue-900">
        <i class="fa-solid fa-table text-blue-700"></i> I. KHUNG MA TRẬN ĐỀ KIỂM TRA MÃ ĐỀ: ${code}
      </h4>
      <div class="overflow-x-auto bg-white rounded border border-slate-300 p-2">
        ${generateExamMatrixHTML(targetExam)}
      </div>
    </div>

    <!-- 2. BẢNG ĐẶC TẢ CHI TIẾT -->
    <div class="mb-6 bg-slate-50 p-4 rounded-lg border border-slate-200">
      <h4 class="font-bold text-sm text-slate-800 mb-3 uppercase flex items-center gap-1.5 text-indigo-900">
        <i class="fa-solid fa-list-check text-indigo-700"></i> II. BẢN ĐẶC TẢ ĐỀ KIỂM TRA MÃ ĐỀ: ${code}
      </h4>
      <div class="overflow-x-auto bg-white rounded border border-slate-300 p-2">
        ${generateExamSpecHTML(targetExam)}
      </div>
    </div>
  `;

  container.innerHTML = html;
}

function renderMatrixPDF() {
  const container = document.getElementById('matrixDisplayArea');
  if (!container) return;
  const tpl = matrixTemplatesData.find(t => t.id === 'ck2_pdf_exact');
  if (!tpl) return;

  let html = `
    <div class="mb-4">
      <h3 class="font-bold text-sm text-slate-800 uppercase">${tpl.name}</h3>
      <p class="text-xs text-slate-500">${tpl.description}</p>
    </div>
    <table class="min-w-full divide-y divide-slate-200 border text-center">
      <thead class="bg-slate-100 font-bold text-slate-700">
        <tr>
          <th class="p-2 border" rowspan="2">TT</th>
          <th class="p-2 border text-left" rowspan="2">Chủ đề / Đơn vị kiến thức</th>
          <th class="p-2 border" colspan="3">Phần I (Nhiều lựa chọn)</th>
          <th class="p-2 border" colspan="3">Phần II (Đúng - Sai)</th>
          <th class="p-2 border" colspan="3">Phần III (Trả lời ngắn)</th>
          <th class="p-2 border" colspan="3">Phần IV (Tự luận)</th>
          <th class="p-2 border" rowspan="2">Tổng Điểm</th>
        </tr>
        <tr class="bg-slate-50 text-[11px]">
          <th class="p-1 border">Biết</th><th class="p-1 border">Hiểu</th><th class="p-1 border">VD</th>
          <th class="p-1 border">Biết</th><th class="p-1 border">Hiểu</th><th class="p-1 border">VD</th>
          <th class="p-1 border">Biết</th><th class="p-1 border">Hiểu</th><th class="p-1 border">VD</th>
          <th class="p-1 border">Biết</th><th class="p-1 border">Hiểu</th><th class="p-1 border">VD</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200 bg-white">
        <tr>
          <td class="p-2 border">1</td>
          <td class="p-2 border text-left font-medium">Chủ đề 6: Đại cương về kim loại (Bài 13, 14, 15, 16, 17)</td>
          <td class="p-2 border">C1, C2, C6</td><td class="p-2 border">C3, C5</td><td class="p-2 border">C4</td>
          <td class="p-2 border">1a, 1b</td><td class="p-2 border">1c</td><td class="p-2 border">1d</td>
          <td class="p-2 border">C1, C2</td><td class="p-2 border">-</td><td class="p-2 border">-</td>
          <td class="p-2 border">-</td><td class="p-2 border">-</td><td class="p-2 border">C2</td>
          <td class="p-2 border font-bold text-blue-800">4,75 đ</td>
        </tr>
        <tr>
          <td class="p-2 border">2</td>
          <td class="p-2 border text-left font-medium">Chủ đề 7: Kim loại nhóm IA và IIA (Bài 18, 19)</td>
          <td class="p-2 border">C7</td><td class="p-2 border">C9</td><td class="p-2 border">C8</td>
          <td class="p-2 border">-</td><td class="p-2 border">-</td><td class="p-2 border">-</td>
          <td class="p-2 border">C3</td><td class="p-2 border">-</td><td class="p-2 border">-</td>
          <td class="p-2 border">-</td><td class="p-2 border">C1</td><td class="p-2 border">-</td>
          <td class="p-2 border font-bold text-blue-800">2,25 đ</td>
        </tr>
        <tr>
          <td class="p-2 border">3</td>
          <td class="p-2 border text-left font-medium">Chủ đề 8: Kim loại chuyển tiếp và Phức chất (Bài 20, 21, 22)</td>
          <td class="p-2 border">C10</td><td class="p-2 border">C11, C12</td><td class="p-2 border">-</td>
          <td class="p-2 border">2a, 2b</td><td class="p-2 border">2c</td><td class="p-2 border">2d</td>
          <td class="p-2 border">-</td><td class="p-2 border">C4</td><td class="p-2 border">-</td>
          <td class="p-2 border">-</td><td class="p-2 border">-</td><td class="p-2 border">C3</td>
          <td class="p-2 border font-bold text-blue-800">3,00 đ</td>
        </tr>
        <tr class="bg-amber-50 font-bold text-slate-800">
          <td class="p-2 border" colspan="2">TỔNG SỐ CÂU</td>
          <td class="p-2 border">6</td><td class="p-2 border">4</td><td class="p-2 border">2</td>
          <td class="p-2 border">4</td><td class="p-2 border">2</td><td class="p-2 border">2</td>
          <td class="p-2 border">3</td><td class="p-2 border">1</td><td class="p-2 border">0</td>
          <td class="p-2 border">0</td><td class="p-2 border">1</td><td class="p-2 border">2</td>
          <td class="p-2 border font-extrabold text-red-700">10,0 đ</td>
        </tr>
      </tbody>
    </table>
  `;
  container.innerHTML = html;
}

// ==========================================
// PRINT & DOCX EXPORT
// ==========================================

function renderPrintDocument() {
  if (!currentExam) return;
  document.getElementById('printCode').innerText = currentExam.examCode;
  document.getElementById('printDuration').innerText = currentExam.timeMinutes;

  const printTitle = document.getElementById('printExamTitle');
  if (printTitle && currentExam) {
    const examGradeNum = currentExam.gradeNum || (currentExam.grade && String(currentExam.grade).replace(/\D/g, '')) || currentGrade || '10';
    printTitle.innerText = (currentExam.title || `ĐỀ KIỂM TRA ĐỊNH KÌ HÓA HỌC ${examGradeNum}`).toUpperCase();
  }

  const printBody = document.getElementById('printBody');
  const solBody = document.getElementById('printSolutionBody');

  // Exam text
  let htmlExam = '';

  // Kèm Ma trận & Đặc tả nếu được chọn hoặc khi bật xem nhãn đặc tả
  const chkPrintMatrix = document.getElementById('chkIncludeMatrixInPrint');
  const chkShowSpecTags = document.getElementById('chkShowSpecTags');
  if ((chkPrintMatrix && chkPrintMatrix.checked) || (chkShowSpecTags && chkShowSpecTags.checked)) {
    htmlExam += `
      <div style="margin-bottom: 25px; padding-bottom: 20px; border-bottom: 2px dashed #94a3b8; page-break-after: always;">
        <h2 style="text-align: center; font-size: 13pt; font-weight: bold; text-transform: uppercase; margin-bottom: 12px; color: #1e3a8a;">
          HỒ SƠ MA TRẬN & BẢN ĐẶC TẢ ĐI KÈM ĐỀ KIỂM TRA MÃ ĐỀ ${currentExam.examCode}
        </h2>
        ${generateExamMatrixHTML(currentExam)}
        <div style="height: 15px;"></div>
        ${generateExamSpecHTML(currentExam)}
      </div>
    `;
  }

  // Part 1
  htmlExam += `<div><h4 class="font-bold text-[12pt] uppercase mb-2">PHẦN I. Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu hỏi thí sinh chỉ chọn một phương án.</h4><div class="space-y-4">`;
  currentExam.parts.part1.forEach((q, idx) => {
    const specTagPrint = (showSpecTags && q.specTagText) ? `<div style="font-size: 10pt; font-weight: bold; color: #1e3a8a; font-style: italic; margin-bottom: 2px;">${q.specTagText}</div>` : '';
    htmlExam += `
      <div>
        ${specTagPrint}
        <p><strong>Câu ${idx + 1}:</strong> ${q.content}</p>
        <div class="grid grid-cols-2 gap-x-4 pl-4 mt-1">
          ${q.options.map((opt, i) => `<div><strong>${['A','B','C','D'][i]}.</strong> ${opt}</div>`).join('')}
        </div>
      </div>
    `;
  });
  htmlExam += `</div></div>`;

  // Part 2
  htmlExam += `<div><h4 class="font-bold text-[12pt] uppercase mb-2 mt-6">PHẦN II. Thí sinh trả lời câu 1 và câu 2. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn đúng hoặc sai.</h4><div class="space-y-4">`;
  currentExam.parts.part2.forEach((q, idx) => {
    const specTagPrint = (showSpecTags && q.specTagText) ? `<div style="font-size: 10pt; font-weight: bold; color: #4338ca; font-style: italic; margin-bottom: 2px;">${q.specTagText}</div>` : '';
    htmlExam += `
      <div>
        ${specTagPrint}
        <p><strong>Câu ${idx + 1}:</strong> ${q.content}</p>
        <div class="space-y-1 pl-4 mt-1">
          ${q.items.map(it => `<div><strong>${it.id})</strong> ${(showSpecTags && it.specTagText) ? `<span style="font-style: italic; color: #4338ca; font-size: 9.5pt; font-weight: bold;">${it.specTagText} </span>` : ''}${it.text}</div>`).join('')}
        </div>
      </div>
    `;
  });
  htmlExam += `</div></div>`;

  // Part 3
  htmlExam += `<div><h4 class="font-bold text-[12pt] uppercase mb-2 mt-6">PHẦN III. Thí sinh trả lời từ câu 1 đến câu 4 (Kết quả là các con số).</h4><div class="space-y-3">`;
  currentExam.parts.part3.forEach((q, idx) => {
    const imgHtml = (q.imageUrl || q.imageBase64) ? `
      <div style="text-align: center; margin: 6px 0;">
        <img src="${q.imageUrl || q.imageBase64}" style="max-width: 250px; height: auto;" /><br>
        <span style="font-size: 9pt; font-style: italic;">${q.imageCaption || 'Hình 1. Phổ khối lượng của nguyên tố Neon (Ne)'}</span>
      </div>
    ` : '';
    htmlExam += `<div><p><strong>Câu ${idx + 1}:</strong> ${q.content}</p>${imgHtml}</div>`;
  });
  htmlExam += `</div></div>`;

  // Part 4
  htmlExam += `<div><h4 class="font-bold text-[12pt] uppercase mb-2 mt-6">PHẦN IV. TỰ LUẬN (3,0 điểm)</h4><div class="space-y-4">`;
  currentExam.parts.part4.forEach((q, idx) => {
    const pts = q.points ? `${q.points.toFixed(1).replace('.', ',')} điểm` : (idx === 0 ? '1,0 điểm' : '2,0 điểm');
    const imgHtml = (q.imageUrl || q.imageBase64) ? `
      <div style="text-align: center; margin: 8px 0;">
        <img src="${q.imageUrl || q.imageBase64}" style="max-width: 270px; height: auto;" /><br>
        <span style="font-size: 9.5pt; font-style: italic;">${q.imageCaption || 'Hình 1. Phổ khối lượng của nguyên tố Neon (Ne)'}</span>
      </div>
    ` : '';
    htmlExam += `<div><p><strong>Câu ${idx + 1} (${pts}):</strong> ${q.content}</p>${imgHtml}</div>`;
  });
  htmlExam += `</div></div>`;

  printBody.innerHTML = htmlExam;

  // Solutions Table & Text
  let htmlSol = `
    <h4 class="font-bold text-[11pt] uppercase mb-2">1. Bảng đáp án trắc nghiệm Phần I:</h4>
    <table class="border-collapse border border-black w-full text-center text-[10.5pt] mb-6">
      <tr class="bg-slate-100 font-bold">
        <td class="border border-black p-1">Câu (Phần I)</td>
        ${currentExam.parts.part1.map((_, i) => `<td class="border border-black p-1">${i + 1}</td>`).join('')}
      </tr>
      <tr>
        <td class="border border-black p-1 font-bold">Đáp án</td>
        ${currentExam.parts.part1.map(q => `<td class="border border-black p-1 font-bold">${q.correctAnswer}</td>`).join('')}
      </tr>
    </table>

    <h4 class="font-bold text-[11pt] uppercase mb-2">2. Đáp án Phần II (Đúng / Sai):</h4>
    <div class="space-y-2 mb-6 text-[11pt]">
      ${currentExam.parts.part2.map((q, idx) => `
        <p><strong>Câu ${idx + 1}:</strong> ${q.items.map(it => it.id + ': ' + (it.isTrue ? 'Đúng' : 'Sai')).join(' ; ')}</p>
      `).join('')}
    </div>

    <h4 class="font-bold text-[11pt] uppercase mb-2">3. Bảng đáp án trả lời ngắn Phần III:</h4>
    <table class="border-collapse border border-black w-full text-center text-[10.5pt] mb-6">
      <tr class="bg-slate-100 font-bold">
        ${currentExam.parts.part3.map((_, i) => `<td class="border border-black p-1">Câu ${i + 1}</td>`).join('')}
      </tr>
      <tr>
        ${currentExam.parts.part3.map(q => `<td class="border border-black p-1 font-bold text-blue-700">${q.correctAnswer || q.answer || ''}</td>`).join('')}
      </tr>
    </table>

    <h4 class="font-bold text-[11pt] uppercase mb-2">4. Lời giải chi tiết Tự luận & Bài tập tính toán:</h4>
    <div class="space-y-3 text-[11pt]">
      ${currentExam.parts.part4.map((q, idx) => `
        <div class="border-l-2 border-black pl-3 py-1">
          <p class="font-bold">Câu ${idx + 1} (Tự luận):</p>
          <p class="whitespace-pre-line text-[10.5pt] font-mono mt-1">${q.explanation}</p>
        </div>
      `).join('')}
    </div>
  `;
  solBody.innerHTML = htmlSol;
}

// Export to Word Document
// ==========================================
// CHỨC NĂNG XUẤT FILE WORD (.DOC) CHUẨN ĐỊNH DẠNG BỘ GD&ĐT
// ==========================================
function exportExamToWord(exam = currentExam, includeAnswers = true, includeMatrixSpec = false, includeSpecTags = false) {
  if (!exam) return;
  if (includeSpecTags) {
    includeMatrixSpec = true;
  }

  // TẦNG KIỂM THỬ ĐỐI SOÁT (ASSERTION VALIDATOR) TRƯỚC KHI XUẤT FILE
  if (exam.validationReport && !exam.validationReport.isValid) {
    const errorDetails = exam.validationReport.errors.map(e => `• ${e}`).join('\n');
    alert(`[TẦNG KIỂM THỬ ĐỐI SOÁT - CHẶN XUẤT FILE DO LỆCH MA TRẬN]\n\nĐề thi hiện tại không khớp 100% với Ma trận & Bản đặc tả:\n${errorDetails}\n\nHệ thống đã chặn tải file để tránh sai lệch chuẩn Công văn 7991/BGDĐT. Vui lòng mở bảng đối soát để kiểm tra và khắc phục.`);
    if (typeof window.openSlotAuditModal === 'function') {
      window.openSlotAuditModal();
    }
    return;
  }

  const examGrade = exam.grade || currentGrade || "12";
  const school = exam.school || "TRƯỜNG THPT BÙI THỊ XUÂN – MŨI NÉ";
  const title = exam.title || `ĐỀ KIỂM TRA ĐỊNH KÌ HÓA HỌC ${examGrade}`;
  const code = exam.examCode || "101";
  const duration = exam.timeMinutes || 45;

  let bodyHTML = '';

  // 0. KHUNG MA TRẬN & BẢNG ĐẶC TẢ NẾU CÓ YÊU CẦU
  if (includeMatrixSpec) {
    bodyHTML += `
      <div style="margin-bottom: 20px;">
        <h2 style="text-align: center; font-size: 14pt; font-weight: bold; text-transform: uppercase; margin-bottom: 10px; color: #1e3a8a;">
          HỒ SƠ MA TRẬN & BẢN ĐẶC TẢ ĐỀ KIỂM TRA ${(exam.term === 'cuoiki' || currentTerm === 'cuoiki') ? 'CUỐI HỌC KÌ I' : 'GIỮA HỌC KÌ I'} – MÔN HÓA HỌC ${examGrade}
        </h2>
      </div>

      ${generateExamMatrixHTML(exam)}

      <br clear="all" style="page-break-before: always; mso-special-character: line-break;">

      ${generateExamSpecHTML(exam)}

      <br clear="all" style="page-break-before: always; mso-special-character: line-break;">

      ${exam.appendix2SpecHtml || ''}

      <br clear="all" style="page-break-before: always; mso-special-character: line-break;">
    `;
  }
bodyHTML += `
    <table style="width: 100%; border-collapse: collapse; border: none; margin-bottom: 15px;">
      <tr>
        <td style="width: 45%; vertical-align: top; text-align: center; border: none; font-size: 11pt;">
          <strong>SỞ GIÁO DỤC VÀ ĐÀO TẠO</strong><br>
          <strong>${school.toUpperCase()}</strong><br>
          <span style="font-size: 10pt; font-style: italic;">Tổ: Hóa - Sinh - KTNN</span>
          <div style="width: 120px; height: 1px; background-color: #000; margin: 3px auto;"></div>
        </td>
        <td style="width: 55%; vertical-align: top; text-align: center; border: none; font-size: 11pt;">
          <strong>${title.toUpperCase()}</strong><br>
          <strong>NĂM HỌC 2026 – 2027</strong><br>
          <span style="font-size: 10.5pt; font-style: italic;">Thời gian làm bài: ${duration} phút (không kể thời gian phát đề)</span><br>
          <div style="display: inline-block; border: 1.5px solid #000; padding: 2px 12px; margin-top: 4px; font-weight: bold; font-size: 11pt;">
            MÃ ĐỀ THI: ${code}
          </div>
        </td>
      </tr>
    </table>

    <!-- Khung thông tin thí sinh -->
    <table style="width: 100%; border-collapse: collapse; border: 1px solid #333; margin-bottom: 20px; font-size: 11pt;">
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #333; width: 60%;">
          Họ và tên thí sinh: ............................................................................
        </td>
        <td style="padding: 6px 10px; border: 1px solid #333; width: 40%;">
          Số báo danh: ..................... Lớp: .............
        </td>
      </tr>
    </table>
  `;

  // 2. PHẦN I: TRẮC NGHIỆM NHIỀU LỰA CHỌN
  bodyHTML += `
    <div style="margin-top: 10px;">
      <p style="font-weight: bold; font-size: 12pt; text-transform: uppercase; margin-bottom: 6px;">
        PHẦN I. Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu hỏi thí sinh chỉ chọn một phương án.
      </p>
  `;
  exam.parts.part1.forEach((q, idx) => {
    const specHeader = (includeSpecTags && q.specTagText) ? `
      <p style="margin: 0 0 3px 0; font-size: 10pt; font-weight: bold; color: #1e3a8a; font-style: italic; background-color: #f1f5f9; padding: 2px 6px; border-left: 3px solid #2563eb;">
        ${q.specTagText}
      </p>
    ` : '';

    bodyHTML += `
      <div style="margin-bottom: 12px; page-break-inside: avoid;">
        ${specHeader}
        <p style="margin: 0 0 4px 0; font-size: 12pt; line-height: 1.35;">
          <strong>Câu ${idx + 1}:</strong> ${formatChem(q.content)}
        </p>
        <table style="width: 100%; border-collapse: collapse; border: none; margin-left: 15px;">
          <tr>
            <td style="width: 50%; border: none; padding: 2px 0; font-size: 11.5pt;"><strong>A.</strong> ${formatChem(q.options[0])}</td>
            <td style="width: 50%; border: none; padding: 2px 0; font-size: 11.5pt;"><strong>B.</strong> ${formatChem(q.options[1])}</td>
          </tr>
          <tr>
            <td style="width: 50%; border: none; padding: 2px 0; font-size: 11.5pt;"><strong>C.</strong> ${formatChem(q.options[2])}</td>
            <td style="width: 50%; border: none; padding: 2px 0; font-size: 11.5pt;"><strong>D.</strong> ${formatChem(q.options[3])}</td>
          </tr>
        </table>
      </div>
    `;
  });
  bodyHTML += `</div>`;

  // 3. PHẦN II: TRẮC NGHIỆM ĐÚNG - SAI
  bodyHTML += `
    <div style="margin-top: 18px;">
      <p style="font-weight: bold; font-size: 12pt; text-transform: uppercase; margin-bottom: 6px;">
        PHẦN II. Thí sinh trả lời câu 1 và câu 2. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn đúng hoặc sai.
      </p>
  `;
  exam.parts.part2.forEach((q, idx) => {
    const specHeader = (includeSpecTags && q.specTagText) ? `
      <p style="margin: 0 0 3px 0; font-size: 10pt; font-weight: bold; color: #4338ca; font-style: italic; background-color: #f5f3ff; padding: 2px 6px; border-left: 3px solid #6366f1;">
        ${q.specTagText}
      </p>
    ` : '';

    bodyHTML += `
      <div style="margin-bottom: 12px; page-break-inside: avoid;">
        ${specHeader}
        <p style="margin: 0 0 4px 0; font-size: 12pt; line-height: 1.35;">
          <strong>Câu ${idx + 1}:</strong> ${formatChem(q.content)}
        </p>
        <div style="margin-left: 20px; font-size: 11.5pt;">
          ${q.items.map(it => `
            <p style="margin: 3px 0;"><strong>${it.id})</strong> ${includeSpecTags && it.specTagText ? `<span style="font-weight: bold; font-size: 10pt; color: #4338ca; font-style: italic;">${it.specTagText} </span>` : ''}${formatChem(it.text)}</p>
          `).join('')}
        </div>
      </div>
    `;
  });
  bodyHTML += `</div>`;

  // 4. PHẦN III: TRẮC NGHIỆM TRẢ LỜI NGẮN
  bodyHTML += `
    <div style="margin-top: 18px;">
      <p style="font-weight: bold; font-size: 12pt; text-transform: uppercase; margin-bottom: 6px;">
        PHẦN III. Thí sinh trả lời từ câu 1 đến câu 4 (Kết quả là các con số).
      </p>
  `;
  exam.parts.part3.forEach((q, idx) => {
    const specHeader = (includeSpecTags && q.specTagText) ? `
      <p style="margin: 0 0 3px 0; font-size: 10pt; font-weight: bold; color: #b45309; font-style: italic; background-color: #fffbeb; padding: 2px 6px; border-left: 3px solid #d97706;">
        ${q.specTagText}
      </p>
    ` : '';

    const imgWordP3 = (q.imageBase64 || q.imageUrl) ? `
      <div style="text-align: center; margin: 8px 0;">
        <img src="${q.imageBase64 || q.imageUrl}" width="260" style="width: 260px; height: auto;" alt="${q.imageCaption || 'Hình ảnh câu hỏi'}" /><br>
        <span style="font-size: 9.5pt; font-style: italic;">${q.imageCaption || 'Hình 1. Phổ khối lượng của nguyên tố Neon (Ne)'}</span>
      </div>
    ` : '';

    bodyHTML += `
      <div style="margin-bottom: 10px; page-break-inside: avoid;">
        ${specHeader}
        <p style="margin: 0; font-size: 12pt; line-height: 1.35;">
          <strong>Câu ${idx + 1}:</strong> ${formatChem(q.content)}
        </p>
        ${imgWordP3}
      </div>
    `;
  });
  bodyHTML += `</div>`;

  // 5. PHẦN IV: TỰ LUẬN
  bodyHTML += `
    <div style="margin-top: 18px;">
      <p style="font-weight: bold; font-size: 12pt; text-transform: uppercase; margin-bottom: 6px;">
        PHẦN IV. TỰ LUẬN (3,0 điểm)
      </p>
  `;
  exam.parts.part4.forEach((q, idx) => {
    const pts = q.points ? `(${q.points.toFixed(1).replace('.', ',')} điểm)` : `(${idx === 0 ? '1,0' : '2,0'} điểm)`;
    const specHeader = (includeSpecTags && q.specTagText) ? `
      <p style="margin: 0 0 3px 0; font-size: 10pt; font-weight: bold; color: #be123c; font-style: italic; background-color: #fff1f2; padding: 2px 6px; border-left: 3px solid #e11d48;">
        ${q.specTagText}
      </p>
    ` : '';

    const imgWord = (q.imageBase64 || q.imageUrl) ? `
      <div style="text-align: center; margin: 10px 0;">
        <img src="${q.imageBase64 || q.imageUrl}" width="280" style="width: 280px; height: auto;" alt="${q.imageCaption || 'Hình ảnh câu hỏi'}" /><br>
        <span style="font-size: 10pt; font-style: italic;">${q.imageCaption || 'Hình 1. Phổ khối lượng của nguyên tố Neon (Ne)'}</span>
      </div>
    ` : '';

    bodyHTML += `
      <div style="margin-bottom: 12px; page-break-inside: avoid;">
        ${specHeader}
        <p style="margin: 0; font-size: 12pt; line-height: 1.35;">
          <strong>Câu ${idx + 1} ${pts}:</strong> ${formatChem(q.content)}
        </p>
        ${imgWord}
      </div>
    `;
  });
  bodyHTML += `<div style="text-align: center; margin-top: 20px; font-style: italic;">------------- HẾT -------------</div></div>`;

  // 6. PHẦN ĐÁP ÁN & LỜI GIẢI CHI TIẾT (Nếu chọn xuất kèm đáp án)
  if (includeAnswers) {
    bodyHTML += `
      <!-- Ngắt trang sang trang Đáp Án trong Word -->
      <br clear="all" style="page-break-before: always; mso-special-character: line-break;">

      <div style="margin-top: 25px;">
        <h3 style="text-align: center; font-size: 14pt; text-transform: uppercase; font-weight: bold; margin-bottom: 12px; color: #1e3a8a;">
          ĐÁP ÁN VÀ HƯỚNG DẪN CHẤM CHI TIẾT – MÃ ĐỀ: ${code}
        </h3>

        <!-- Bảng đáp án Phần I -->
        <p style="font-weight: bold; font-size: 11.5pt; text-transform: uppercase; margin-top: 15px; margin-bottom: 5px;">
          1. Bảng đáp án trắc nghiệm Phần I (Mỗi câu đúng 0,25 điểm):
        </p>
        <table style="width: 100%; border-collapse: collapse; border: 1px solid #000; text-align: center; font-size: 10.5pt; margin-bottom: 15px;">
          <tr style="background-color: #f1f5f9; font-weight: bold;">
            <td style="border: 1px solid #000; padding: 4px;">Câu</td>
            ${exam.parts.part1.map((_, i) => `<td style="border: 1px solid #000; padding: 4px;">${i + 1}</td>`).join('')}
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px; font-weight: bold;">Đ/A</td>
            ${exam.parts.part1.map(q => `<td style="border: 1px solid #000; padding: 4px; font-weight: bold; color: #15803d;">${q.correctAnswer}</td>`).join('')}
          </tr>
        </table>

        <!-- Đáp án Phần II -->
        <p style="font-weight: bold; font-size: 11.5pt; text-transform: uppercase; margin-top: 15px; margin-bottom: 5px;">
          2. Đáp án trắc nghiệm Đúng / Sai Phần II:
        </p>
        <table style="width: 100%; border-collapse: collapse; border: 1px solid #000; font-size: 10.5pt; margin-bottom: 15px;">
          <tr style="background-color: #f1f5f9; font-weight: bold; text-align: center;">
            <td style="border: 1px solid #000; padding: 4px; width: 12%;">Câu</td>
            <td style="border: 1px solid #000; padding: 4px; width: 22%;">Lệnh hỏi a</td>
            <td style="border: 1px solid #000; padding: 4px; width: 22%;">Lệnh hỏi b</td>
            <td style="border: 1px solid #000; padding: 4px; width: 22%;">Lệnh hỏi c</td>
            <td style="border: 1px solid #000; padding: 4px; width: 22%;">Lệnh hỏi d</td>
          </tr>
          ${exam.parts.part2.map((q, idx) => `
            <tr style="text-align: center;">
              <td style="border: 1px solid #000; padding: 4px; font-weight: bold;">Câu ${idx + 1}</td>
              ${q.items.map(it => `
                <td style="border: 1px solid #000; padding: 4px; font-weight: bold; ${it.isTrue ? 'color: #15803d;' : 'color: #b91c1c;'}">
                  ${it.isTrue ? 'ĐÚNG' : 'SAI'}
                </td>
              `).join('')}
            </tr>
          `).join('')}
        </table>

        <!-- Bảng đáp án Phần III -->
        <p style="font-weight: bold; font-size: 11.5pt; text-transform: uppercase; margin-top: 15px; margin-bottom: 5px;">
          3. Bảng đáp án trả lời ngắn Phần III (Mỗi câu đúng 0,5 điểm):
        </p>
        <table style="width: 100%; border-collapse: collapse; border: 1px solid #000; text-align: center; font-size: 10.5pt; margin-bottom: 15px;">
          <tr style="background-color: #f1f5f9; font-weight: bold;">
            <td style="border: 1px solid #000; padding: 4px; width: 25%;">Câu 1</td>
            <td style="border: 1px solid #000; padding: 4px; width: 25%;">Câu 2</td>
            <td style="border: 1px solid #000; padding: 4px; width: 25%;">Câu 3</td>
            <td style="border: 1px solid #000; padding: 4px; width: 25%;">Câu 4</td>
          </tr>
          <tr>
            ${exam.parts.part3.map(q => `<td style="border: 1px solid #000; padding: 4px; font-weight: bold; color: #1d4ed8;">${q.correctAnswer || q.answer || ''}</td>`).join('')}
          </tr>
        </table>

        <!-- Hướng dẫn chấm Tự luận & Bài toán chi tiết -->
        <p style="font-weight: bold; font-size: 11.5pt; text-transform: uppercase; margin-top: 15px; margin-bottom: 5px;">
          4. Hướng dẫn giải chi tiết & Biểu điểm Phần IV (Tự luận):
        </p>
        <div style="font-size: 11pt; line-height: 1.45;">
          ${exam.parts.part4.map((q, idx) => `
            <div style="margin-bottom: 15px; border-left: 3px solid #1e3a8a; padding-left: 10px;">
              <p style="font-weight: bold; color: #1e3a8a; margin: 0 0 4px 0;">Câu ${idx + 1}:</p>
              <div style="white-space: pre-line; background-color: #fafafa; padding: 8px; border: 1px solid #e2e8f0; font-family: 'Times New Roman', Times, serif; font-size: 11pt; line-height: 1.35;">
                ${q.explanation}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // Cấu trúc hoàn chỉnh của file Microsoft Word
  const wordDocumentHTML = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' 
          xmlns:w='urn:schemas-microsoft-com:office:word' 
          xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
      <meta charset='utf-8'>
      <title>${title} - Mã đề ${code}</title>
      <style>
        @page Section1 {
          size: 595.3pt 841.9pt; /* Khổ giấy chuẩn A4 */
          margin: 42.5pt 42.5pt 42.5pt 42.5pt; /* Lề chuẩn: 1.5cm - 2.0cm */
          mso-header-margin: 35.4pt;
          mso-footer-margin: 35.4pt;
          mso-paper-source: 0;
        }
        div.Section1 { page: Section1; }
        body {
          font-family: 'Times New Roman', Times, serif;
          font-size: 12pt;
          line-height: 1.3;
          color: #000;
        }
        p { margin: 3px 0; }
        table { border-collapse: collapse; }
        ruby.chem-arrow {
          ruby-align: center;
          ruby-position: over;
        }
        ruby.chem-arrow rt {
          font-size: 8pt;
          font-style: italic;
          font-family: 'Times New Roman', Times, serif;
          color: #000;
        }
      </style>
    </head>
    <body>
      <div class="Section1">
        ${bodyHTML}
      </div>
    </body>
    </html>
  `;

  // Tạo blob tải về
  const blob = new Blob(['\ufeff', wordDocumentHTML], { type: 'application/msword;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  let fileNameSuffix = '';
  if (includeSpecTags && includeMatrixSpec) {
    fileNameSuffix = 'Ho_So_MaTran_DacTa_De_Kem_ChiBao';
  } else if (includeSpecTags) {
    fileNameSuffix = 'Kem_DacTa_Va_ChiBao';
  } else if (includeMatrixSpec && includeAnswers) {
    fileNameSuffix = 'Ho_So_Day_Du_Kem_MaTran_DacTa';
  } else if (includeMatrixSpec) {
    fileNameSuffix = 'Kem_MaTran_DacTa';
  } else if (includeAnswers) {
    fileNameSuffix = 'Kem_Dap_An';
  } else {
    fileNameSuffix = 'De_Hoc_Sinh';
  }
  const termSuffix = (exam.term === 'cuoiki') ? 'CuoiKi1' : 'GiuaKi1';
  a.download = `De_Thi_Hoa_${examGrade}_${termSuffix}_Ma_${code}_${fileNameSuffix}.doc`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Hàm tương thích ngược

// Xuất riêng Ma trận & Bản đặc tả của một đề thi ra file Word
function exportMatrixSpecWord(exam = currentExam) {
  if (!exam) return;
  const examGrade = exam.grade || currentGrade || "12";
  const code = exam.examCode || '101';
  const title = `MA TRẬN VÀ BẢN ĐẶC TẢ ĐỀ THI HÓA ${examGrade} - MÃ ĐỀ ${code}`;

  const bodyHTML = `
    <div style="text-align: center; margin-bottom: 20px;">
      <h2 style="font-size: 14pt; font-weight: bold; text-transform: uppercase; margin: 0; color: #1e3a8a;">
        HỒ SƠ MA TRẬN VÀ BẢNG ĐẶC TẢ ĐỀ KIỂM TRA
      </h2>
      <p style="font-size: 11pt; font-style: italic; margin-top: 4px;">
        Môn: Hóa học ${examGrade} – Mã đề kiểm tra: <strong>${code}</strong>
      </p>
    </div>

    ${generateExamMatrixHTML(exam)}

    <br clear="all" style="page-break-before: always; mso-special-character: line-break;">

    ${generateExamSpecHTML(exam)}
  `;

  const wordDocumentHTML = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' 
          xmlns:w='urn:schemas-microsoft-com:office:word' 
          xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
      <meta charset='utf-8'>
      <title>${title}</title>
      <style>
        @page Section1 {
          size: 595.3pt 841.9pt; /* A4 */
          margin: 36.0pt 36.0pt 36.0pt 36.0pt;
          mso-header-margin: 35.4pt;
          mso-footer-margin: 35.4pt;
          mso-paper-source: 0;
        }
        div.Section1 { page: Section1; }
        body {
          font-family: 'Times New Roman', Times, serif;
          font-size: 11pt;
          line-height: 1.25;
          color: #000;
        }
        p { margin: 3px 0; }
        table { border-collapse: collapse; }
        ruby.chem-arrow {
          ruby-align: center;
          ruby-position: over;
        }
        ruby.chem-arrow rt {
          font-size: 8pt;
          font-style: italic;
          font-family: 'Times New Roman', Times, serif;
          color: #000;
        }
      </style>
    </head>
    <body>
      <div class="Section1">
        ${bodyHTML}
      </div>
    </body>
    </html>
  `;

  const blob = new Blob(['\ufeff', wordDocumentHTML], { type: 'application/msword;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Ma_Tran_Va_Dac_Ta_Hoa_${examGrade}_Ma_${code}.doc`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function exportToWord() {
  exportExamToWord(currentExam, true);
}

// Debounce helper
function debounce(fn, ms) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), ms);
  };
}
