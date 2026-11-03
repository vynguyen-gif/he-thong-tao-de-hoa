// server.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const { 
  getBank, 
  getMatrixSpecGen, 
  generateExam, 
  generateSimilarExam, 
  generateExamPackage, 
  generate5BaseSuites, 
  mutateCalculationQuestion,
  validateExamAgainstMatrix,
  resolveMatrixToSlots,
  generateAppendix2SpecTableHTML
} = require('./services/examEngine');
const { matrixTemplates } = require('./data/matrixTemplates');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// 1. Lấy danh sách Ma trận & Đặc tả mẫu
app.get('/api/matrix-templates', (req, res) => {
  res.json({
    success: true,
    data: matrixTemplates
  });
});

// 2. Lấy ngân hàng câu hỏi từ Đề cương theo khối lớp (10, 11, 12)
app.get('/api/question-bank', (req, res) => {
  const grade = req.query.grade || '12';
  const { lessonId, part, level, category, search } = req.query;
  const bank = getBank(grade);
  
  let results = [...bank];
  if (lessonId) results = results.filter(q => q.lessonId === lessonId);
  if (part) results = results.filter(q => q.part === part);
  if (level) results = results.filter(q => q.level === level);
  if (category) results = results.filter(q => q.category === category);

  if (search) {
    const q = search.toLowerCase();
    results = results.filter(item => 
      (item.content && item.content.toLowerCase().includes(q)) || 
      (item.explanation && item.explanation.toLowerCase().includes(q))
    );
  }
  res.json({
    success: true,
    grade,
    total: results.length,
    data: results
  });
});

// 3. Tạo đề thi mới từ Ma trận & Đề cương
app.post('/api/generate-exam', (req, res) => {
  try {
    const grade = req.body?.grade || req.query.grade || '12';
    const config = req.body || {};
    const exam = generateExam(config, grade);
    res.json({
      success: true,
      data: exam
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 4. Tạo đề tương tự (Lý thuyết GIỮ NGUYÊN, Bài tập TÍNH TOÁN THAY SỐ)
app.post('/api/generate-similar', (req, res) => {
  try {
    const { baseExam, newCode } = req.body;
    if (!baseExam) {
      return res.status(400).json({ success: false, error: "Thiếu dữ liệu baseExam" });
    }
    const grade = req.body?.grade || baseExam.gradeNum || '12';
    const similarExam = generateSimilarExam(baseExam, newCode || "102", grade);
    res.json({
      success: true,
      data: similarExam
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 5. Sinh gói nhiều mã đề (101, 102, 103, 104)
app.post('/api/generate-package', (req, res) => {
  try {
    const { baseExam, count } = req.body;
    if (!baseExam) {
      return res.status(400).json({ success: false, error: "Thiếu dữ liệu baseExam" });
    }
    const grade = req.body?.grade || baseExam.gradeNum || '12';
    const pkg = generateExamPackage(baseExam, count || 4, grade);
    res.json({
      success: true,
      data: pkg
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 5b. Sinh trọn bộ 5 Đề Gốc + các đề tương tự thay số (tổng cộng 20 mã đề) cho khối lớp chỉ định
app.get('/api/all-5-suites', (req, res) => {
  try {
    const grade = req.query.grade || '12';
    const term = req.query.term || 'giuaki';
    const suites = generate5BaseSuites(grade, term);
    res.json({
      success: true,
      grade,
      term,
      data: suites
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 6. Thử thay số 1 câu bài tập tính toán
app.post('/api/mutate-question', (req, res) => {
  try {
    const { questionId, grade } = req.body;
    const bank = getBank(grade || '12');
    const q = bank.find(item => item.id === questionId);
    if (!q) {
      return res.status(404).json({ success: false, error: "Không tìm thấy câu hỏi" });
    }
    const mutated = mutateCalculationQuestion(q);
    res.json({
      success: true,
      data: mutated
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 7. Lấy Ma trận & Bản đặc tả HTML của một đề thi cụ thể
app.post('/api/exam-matrix-spec', (req, res) => {
  try {
    const { exam } = req.body;
    if (!exam) {
      return res.status(400).json({ success: false, error: "Thiếu dữ liệu exam" });
    }
    const grade = exam.gradeNum || '12';
    const generator = getMatrixSpecGen(grade);
    const matrixHtml = generator.generateExamMatrixHTML(exam);
    const specHtml = generator.generateExamSpecHTML(exam);
    res.json({
      success: true,
      data: {
        matrixHtml,
        specHtml
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 8. Đối soát và Kiểm thử đề thi với Ma trận (Assertion Validator)
app.post('/api/validate-exam', (req, res) => {
  try {
    const { exam, grade, term } = req.body;
    if (!exam) {
      return res.status(400).json({ success: false, error: "Thiếu dữ liệu exam" });
    }
    const g = grade || exam.gradeNum || '12';
    const t = term || exam.term || 'giuaki';
    const report = validateExamAgainstMatrix(exam, g, t);
    res.json({
      success: true,
      data: report
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 9. Lấy danh sách Slots phân giải từ Ma trận
app.get('/api/matrix-slots', (req, res) => {
  try {
    const grade = req.query.grade || '12';
    const term = req.query.term || 'giuaki';
    const resolution = resolveMatrixToSlots(grade, term);
    res.json({
      success: true,
      data: resolution
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`====================================================`);
    console.log(`HỆ THỐNG TẠO ĐỀ HÓA HỌC 10 - 11 - 12 THEO MA TRẬN & ĐẶC TẢ`);
    console.log(`Đang chạy tại: http://localhost:${PORT}`);
    console.log(`====================================================`);
  });
}

module.exports = app;
