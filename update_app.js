// update_app.js
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'public', 'app.js');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Replace renderMatrixGK1 block up to function renderMatrixPDF
const startMarker = "function renderMatrixGK1() {";
const endMarker = "function renderMatrixPDF() {";

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error("Markers not found! startIndex:", startIndex, "endIndex:", endIndex);
  process.exit(1);
}

const matrixSpecCode = `// Rút gọn nội dung câu hỏi để hiển thị gọn gàng trong bảng đặc tả
function truncateText(txt, maxLen = 85) {
  if (!txt) return '';
  const clean = txt.replace(/\\s+/g, ' ').trim();
  if (clean.length <= maxLen) return clean;
  return clean.substring(0, maxLen) + '...';
}

// Sinh khung Ma trận HTML cho một đề thi cụ thể
function generateExamMatrixHTML(exam) {
  if (!exam) return '';
  const code = exam.examCode || '101';
  const school = exam.school || 'TRƯỜNG THPT BÙI THỊ XUÂN – MŨI NÉ';

  return \`
    <div style="margin-bottom: 25px; page-break-inside: avoid;">
      <table style="width: 100%; border-collapse: collapse; border: none; margin-bottom: 12px;">
        <tr>
          <td style="width: 45%; vertical-align: top; text-align: center; border: none; font-size: 11pt;">
            <strong>SỞ GIÁO DỤC VÀ ĐÀO TẠO</strong><br>
            <strong>\${school.toUpperCase()}</strong><br>
            <span style="font-size: 10pt; font-style: italic;">Tổ: Hóa - Sinh - KTNN</span>
            <div style="width: 120px; height: 1px; background-color: #000; margin: 3px auto;"></div>
          </td>
          <td style="width: 55%; vertical-align: top; text-align: center; border: none; font-size: 11pt;">
            <strong>KHUNG MA TRẬN ĐỀ KIỂM TRA GIỮA HỌC KÌ I</strong><br>
            <strong>MÔN: HÓA HỌC 12 – MÃ ĐỀ: \${code}</strong><br>
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
  \`;
}

// Sinh Bảng Đặc Tả Kĩ Thuật HTML cho một đề thi cụ thể
function generateExamSpecHTML(exam) {
  if (!exam) return '';
  const code = exam.examCode || '101';
  const school = exam.school || 'TRƯỜNG THPT BÙI THỊ XUÂN – MŨI NÉ';

  // Lấy các câu cụ thể trong đề để trích xuất nội dung thực tế
  const p1 = exam.parts?.part1 || [];
  const p2 = exam.parts?.part2 || [];
  const p3 = exam.parts?.part3 || [];
  const p4 = exam.parts?.part4 || [];

  const getP1Text = (idx) => p1[idx] ? formatChem(truncateText(p1[idx].content, 75)) : '';
  const getP2Sub = (qIdx, itemIdx) => p2[qIdx]?.items?.[itemIdx] ? formatChem(truncateText(p2[qIdx].items[itemIdx].text, 70)) : '';
  const getP3Text = (idx) => p3[idx] ? formatChem(truncateText(p3[idx].content, 75)) : '';
  const getP4Text = (idx) => p4[idx] ? formatChem(truncateText(p4[idx].content, 85)) : '';

  return \`
    <div style="margin-top: 25px; margin-bottom: 25px; page-break-inside: avoid;">
      <h3 style="text-align: center; font-size: 13pt; text-transform: uppercase; font-weight: bold; margin-bottom: 8px; color: #1e3a8a;">
        BẢNG ĐẶC TẢ KĨ THUẬT ĐỀ KIỂM TRA GIỮA KÌ 1 – MÔN HÓA HỌC 12<br>
        <span style="font-size: 11pt; font-weight: normal; color: #333;">(Định dạng đi kèm chính thức của <strong>MÃ ĐỀ: \${code}</strong>)</span>
      </h3>

      <table style="width: 100%; border-collapse: collapse; border: 1px solid #000; font-size: 9.5pt; line-height: 1.3;">
        <thead style="background-color: #f1f5f9; font-weight: bold; text-align: center;">
          <tr>
            <th style="border: 1px solid #000; padding: 5px; width: 4%;">TT</th>
            <th style="border: 1px solid #000; padding: 5px; width: 14%; text-align: left;">Chương / Chủ đề</th>
            <th style="border: 1px solid #000; padding: 5px; width: 14%; text-align: left;">Nội dung kiến thức</th>
            <th style="border: 1px solid #000; padding: 5px; width: 10%;">Cấp độ tư duy</th>
            <th style="border: 1px solid #000; padding: 5px; text-align: left;">Yêu cầu cần đạt</th>
            <th style="border: 1px solid #000; padding: 5px; width: 16%;">Vị trí trong Đề \${code}</th>
            <th style="border: 1px solid #000; padding: 5px; width: 22%; text-align: left;">Trích xuất câu hỏi Mã \${code}</th>
          </tr>
        </thead>
        <tbody>
          <!-- 1. Ester - Lipid -->
          <tr>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold;" rowspan="3">1</td>
            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;" rowspan="3">ESTER – LIPID</td>
            <td style="border: 1px solid #000; padding: 5px;" rowspan="3">Ester - lipid</td>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold; color: #1e40af; background-color: #f8fafc;">Nhận biết</td>
            <td style="border: 1px solid #000; padding: 5px;">
              - Biết công thức cấu tạo, gọi tên một số ester đơn giản.<br>
              - Biết cấu tạo và đặc điểm trạng thái của chất béo.
            </td>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold;">
              Câu 1, 2 (Phần I)<br>
              Ý a, b - Câu 1 (Phần II)
            </td>
            <td style="border: 1px solid #000; padding: 5px; font-size: 8.5pt; color: #334155;">
              • <em>C1 (PI):</em> \${getP1Text(0)}<br>
              • <em>C2 (PI):</em> \${getP1Text(1)}<br>
              • <em>Ý a (PII):</em> \${getP2Sub(0, 0)}<br>
              • <em>Ý b (PII):</em> \${getP2Sub(0, 1)}
            </td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold; color: #15803d; background-color: #f8fafc;">Thông hiểu</td>
            <td style="border: 1px solid #000; padding: 5px;">
              - Trình bày tính chất hoá học cơ bản của ester (thủy phân) và chất béo (hydrogen hóa, xà phòng hóa).
            </td>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold;">
              Ý c - Câu 1 (Phần II)
            </td>
            <td style="border: 1px solid #000; padding: 5px; font-size: 8.5pt; color: #334155;">
              • <em>Ý c (PII):</em> \${getP2Sub(0, 2)}
            </td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold; color: #b91c1c; background-color: #f8fafc;">Vận dụng</td>
            <td style="border: 1px solid #000; padding: 5px;">
              - Vận dụng tính chất hóa học giải thích hiện tượng ăn mòn, ôi thiu dầu mỡ hoặc tính toán ester.
            </td>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold;">
              Ý d - Câu 1 (Phần II)
            </td>
            <td style="border: 1px solid #000; padding: 5px; font-size: 8.5pt; color: #334155;">
              • <em>Ý d (PII):</em> \${getP2Sub(0, 3)}
            </td>
          </tr>

          <!-- Xà phòng -->
          <tr>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold;" rowspan="3">2</td>
            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;" rowspan="3">ESTER – LIPID</td>
            <td style="border: 1px solid #000; padding: 5px;" rowspan="3">Xà phòng và chất giặt rửa</td>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold; color: #1e40af; background-color: #f8fafc;">Nhận biết</td>
            <td style="border: 1px solid #000; padding: 5px;">
              - Nêu được khái niệm, thành phần chính của xà phòng và chất giặt rửa tổng hợp.
            </td>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold;">
              Câu 3, 4 (Phần I)
            </td>
            <td style="border: 1px solid #000; padding: 5px; font-size: 8.5pt; color: #334155;">
              • <em>C3 (PI):</em> \${getP1Text(2)}<br>
              • <em>C4 (PI):</em> \${getP1Text(3)}
            </td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold; color: #15803d; background-color: #f8fafc;">Thông hiểu</td>
            <td style="border: 1px solid #000; padding: 5px;">
              - Nêu đặc điểm cấu tạo (đầu ưa nước - đuôi kị nước) và cơ chế làm sạch vết bẩn.
            </td>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold;">
              Câu 1 (Phần III)
            </td>
            <td style="border: 1px solid #000; padding: 5px; font-size: 8.5pt; color: #334155;">
              • <em>C1 (PIII):</em> \${getP3Text(0)}
            </td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold; color: #b91c1c; background-color: #f8fafc;">Vận dụng</td>
            <td style="border: 1px solid #000; padding: 5px;">
              - Vận dụng tính toán sản xuất xà phòng / bài toán thực tế thực nghiệm.
            </td>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold;">
              Câu 2 (Phần IV - Tự luận)
            </td>
            <td style="border: 1px solid #000; padding: 5px; font-size: 8.5pt; color: #334155;">
              • <em>C2 (PIV):</em> \${getP4Text(1)}
            </td>
          </tr>

          <!-- 3. Carbohydrate -->
          <tr>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold;" rowspan="2">3</td>
            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;" rowspan="2">CARBOHYDRATE</td>
            <td style="border: 1px solid #000; padding: 5px;" rowspan="2">Glucose và fructose</td>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold; color: #1e40af; background-color: #f8fafc;">Nhận biết</td>
            <td style="border: 1px solid #000; padding: 5px;">
              - Khái niệm carbohydrate, phân loại, trạng thái tự nhiên của glucose và fructose.
            </td>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold;">
              Câu 5 (Phần I)
            </td>
            <td style="border: 1px solid #000; padding: 5px; font-size: 8.5pt; color: #334155;">
              • <em>C5 (PI):</em> \${getP1Text(4)}
            </td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold; color: #15803d; background-color: #f8fafc;">Thông hiểu</td>
            <td style="border: 1px solid #000; padding: 5px;">
              - Trình bày tính chất hóa học: phản ứng Cu(OH)2, tráng bạc, phân biệt với bromine.
            </td>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold;">
              Câu 6 (Phần I)
            </td>
            <td style="border: 1px solid #000; padding: 5px; font-size: 8.5pt; color: #334155;">
              • <em>C6 (PI):</em> \${getP1Text(5)}
            </td>
          </tr>

          <!-- Saccharose & maltose -->
          <tr>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold;" rowspan="2">4</td>
            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;" rowspan="2">CARBOHYDRATE</td>
            <td style="border: 1px solid #000; padding: 5px;" rowspan="2">Saccharose và maltose</td>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold; color: #1e40af; background-color: #f8fafc;">Nhận biết</td>
            <td style="border: 1px solid #000; padding: 5px;">
              - Trạng thái tự nhiên, công thức cấu tạo của saccharose và maltose.
            </td>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold;">
              Câu 7 (Phần I)
            </td>
            <td style="border: 1px solid #000; padding: 5px; font-size: 8.5pt; color: #334155;">
              • <em>C7 (PI):</em> \${getP1Text(6)}
            </td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold; color: #15803d; background-color: #f8fafc;">Thông hiểu</td>
            <td style="border: 1px solid #000; padding: 5px;">
              - Tính chất hóa học: hòa tan Cu(OH)2, phản ứng thủy phân acid.
            </td>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold;">
              Câu 8 (Phần I)
            </td>
            <td style="border: 1px solid #000; padding: 5px; font-size: 8.5pt; color: #334155;">
              • <em>C8 (PI):</em> \${getP1Text(7)}
            </td>
          </tr>

          <!-- Tinh bột & cellulose -->
          <tr>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold;" rowspan="2">5</td>
            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;" rowspan="2">CARBOHYDRATE</td>
            <td style="border: 1px solid #000; padding: 5px;" rowspan="2">Tinh bột và cellulose</td>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold; color: #1e40af; background-color: #f8fafc;">Nhận biết</td>
            <td style="border: 1px solid #000; padding: 5px;">
              - Cấu trúc phân tử (amylose, amylopectin), công thức [C6H7O2(OH)3]n.
            </td>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold;">
              Câu 9 (Phần I)
            </td>
            <td style="border: 1px solid #000; padding: 5px; font-size: 8.5pt; color: #334155;">
              • <em>C9 (PI):</em> \${getP1Text(8)}
            </td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold; color: #15803d; background-color: #f8fafc;">Thông hiểu</td>
            <td style="border: 1px solid #000; padding: 5px;">
              - Phản ứng thủy phân, phản ứng tạo màu với dung dịch iodine.
            </td>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold;">
              Câu 10 (Phần I)
            </td>
            <td style="border: 1px solid #000; padding: 5px; font-size: 8.5pt; color: #334155;">
              • <em>C10 (PI):</em> \${getP1Text(9)}
            </td>
          </tr>

          <!-- Tổng hợp chương 2 -->
          <tr>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold;" rowspan="2">6</td>
            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;" rowspan="2">CARBOHYDRATE</td>
            <td style="border: 1px solid #000; padding: 5px;" rowspan="2">Tổng hợp chương 2</td>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold; color: #1e40af; background-color: #f8fafc;">Nhận biết</td>
            <td style="border: 1px solid #000; padding: 5px;">
              - Đếm số carbohydrate, phân biệt các nhóm chất carbohydrate.
            </td>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold;">
              Câu 2 (Phần III)
            </td>
            <td style="border: 1px solid #000; padding: 5px; font-size: 8.5pt; color: #334155;">
              • <em>C2 (PIII):</em> \${getP3Text(1)}
            </td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold; color: #15803d; background-color: #f8fafc;">Thông hiểu</td>
            <td style="border: 1px solid #000; padding: 5px;">
              - Trình bày sơ đồ enzyme tiêu hóa tinh bột hoặc bài toán chuyển hóa.
            </td>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold;">
              Câu 1 (Phần IV - Tự luận)
            </td>
            <td style="border: 1px solid #000; padding: 5px; font-size: 8.5pt; color: #334155;">
              • <em>C1 (PIV):</em> \${getP4Text(0)}
            </td>
          </tr>

          <!-- 4. Hợp chất Nitrogen -->
          <tr>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold;" rowspan="3">7</td>
            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;" rowspan="3">HỢP CHẤT NITROGEN</td>
            <td style="border: 1px solid #000; padding: 5px;" rowspan="3">Amine</td>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold; color: #1e40af; background-color: #f8fafc;">Nhận biết</td>
            <td style="border: 1px solid #000; padding: 5px;">
              - Khái niệm, bậc amine, tên gọi thay thế và tính chất vật lí cơ bản.
            </td>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold;">
              Câu 11 (Phần I)<br>
              Ý a, b - Câu 2 (Phần II)
            </td>
            <td style="border: 1px solid #000; padding: 5px; font-size: 8.5pt; color: #334155;">
              • <em>C11 (PI):</em> \${getP1Text(10)}<br>
              • <em>Ý a (PII):</em> \${getP2Sub(1, 0)}<br>
              • <em>Ý b (PII):</em> \${getP2Sub(1, 1)}
            </td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold; color: #15803d; background-color: #f8fafc;">Thông hiểu</td>
            <td style="border: 1px solid #000; padding: 5px;">
              - Tính chất hóa học: tính base quỳ tím, tác dụng acid, phản ứng aniline.
            </td>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold;">
              Ý c - Câu 2 (Phần II)
            </td>
            <td style="border: 1px solid #000; padding: 5px; font-size: 8.5pt; color: #334155;">
              • <em>Ý c (PII):</em> \${getP2Sub(1, 2)}
            </td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold; color: #b91c1c; background-color: #f8fafc;">Vận dụng</td>
            <td style="border: 1px solid #000; padding: 5px;">
              - Thí nghiệm hoặc bài toán tính toán xác định công thức phân tử amine.
            </td>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold;">
              Ý d - Câu 2 (Phần II)<br>
              Câu 3 (Phần III)
            </td>
            <td style="border: 1px solid #000; padding: 5px; font-size: 8.5pt; color: #334155;">
              • <em>Ý d (PII):</em> \${getP2Sub(1, 3)}<br>
              • <em>C3 (PIII):</em> \${getP3Text(2)}
            </td>
          </tr>

          <!-- Amino acid & peptide -->
          <tr>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold;" rowspan="2">8</td>
            <td style="border: 1px solid #000; padding: 5px; font-weight: bold;" rowspan="2">HỢP CHẤT NITROGEN</td>
            <td style="border: 1px solid #000; padding: 5px;" rowspan="2">Amino acid và peptide</td>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold; color: #1e40af; background-color: #f8fafc;">Nhận biết</td>
            <td style="border: 1px solid #000; padding: 5px;">
              - Cấu tạo ion lưỡng cực, liên kết peptide trong phân tử protein.
            </td>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold;">
              Câu 4 (Phần III)
            </td>
            <td style="border: 1px solid #000; padding: 5px; font-size: 8.5pt; color: #334155;">
              • <em>C4 (PIII):</em> \${getP3Text(3)}
            </td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold; color: #15803d; background-color: #f8fafc;">Thông hiểu</td>
            <td style="border: 1px solid #000; padding: 5px;">
              - Tính chất lưỡng tính, phản ứng ester hóa, tính chất peptide.
            </td>
            <td style="border: 1px solid #000; padding: 5px; text-align: center; font-weight: bold;">
              Câu 12 (Phần I)
            </td>
            <td style="border: 1px solid #000; padding: 5px; font-size: 8.5pt; color: #334155;">
              • <em>C12 (PI):</em> \${getP1Text(11)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  \`;
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
    badge.innerText = \`Đang hiển thị: Ma trận & Bản đặc tả chi tiết của Mã đề \${code}\`;
  }

  let html = \`
    <!-- Tiêu đề đề thi -->
    <div class="mb-5 bg-gradient-to-r from-blue-900 to-indigo-800 text-white p-4 rounded-lg shadow flex justify-between items-center flex-wrap gap-3">
      <div>
        <span class="text-xs uppercase tracking-wider text-amber-300 font-bold">Hồ sơ kiểm tra định kì chuẩn GDPT 2018</span>
        <h3 class="font-bold text-base md:text-lg mt-0.5">MA TRẬN & BẢN ĐẶC TẢ CHI TIẾT THEO MÃ ĐỀ: \${code}</h3>
        <p class="text-xs text-blue-100 mt-1">Gắn liền trực tiếp với câu hỏi thực tế trong đề kiểm tra • Thời gian làm bài: 45 phút</p>
      </div>
      <div class="flex items-center gap-2">
        <button onclick="exportMatrixSpecWord(matrixExamSelected || currentExam)" class="px-3.5 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-xs rounded-md shadow flex items-center gap-1.5 transition">
          <i class="fa-solid fa-file-word"></i> Tải Ma Trận & Đặc Tả Mã \${code} (.doc)
        </button>
      </div>
    </div>

    <!-- 1. KHUNG MA TRẬN -->
    <div class="mb-8 bg-slate-50 p-4 rounded-lg border border-slate-200">
      <h4 class="font-bold text-sm text-slate-800 mb-3 uppercase flex items-center gap-1.5 text-blue-900">
        <i class="fa-solid fa-table text-blue-700"></i> I. KHUNG MA TRẬN ĐỀ KIỂM TRA MÃ ĐỀ: \${code}
      </h4>
      <div class="overflow-x-auto bg-white rounded border border-slate-300 p-2">
        \${generateExamMatrixHTML(targetExam)}
      </div>
    </div>

    <!-- 2. BẢNG ĐẶC TẢ CHI TIẾT -->
    <div class="mb-6 bg-slate-50 p-4 rounded-lg border border-slate-200">
      <h4 class="font-bold text-sm text-slate-800 mb-3 uppercase flex items-center gap-1.5 text-indigo-900">
        <i class="fa-solid fa-list-check text-indigo-700"></i> II. BẢNG ĐẶC TẢ KĨ THUẬT VÀ TRÍCH XUẤT CÂU HỎI MÃ ĐỀ: \${code}
      </h4>
      <div class="overflow-x-auto bg-white rounded border border-slate-300 p-2">
        \${generateExamSpecHTML(targetExam)}
      </div>
    </div>
  \`;

  container.innerHTML = html;
}

`;

// Perform replacement
content = content.substring(0, startIndex) + matrixSpecCode + content.substring(endIndex);

// 2. Update renderPrintDocument to support chkIncludeMatrixInPrint
const printDocMarker = "function renderPrintDocument() {";
const printIdx = content.indexOf(printDocMarker);
if (printIdx !== -1) {
  const p1Marker = "// Part 1";
  const p1Idx = content.indexOf(p1Marker, printIdx);
  if (p1Idx !== -1) {
    const insertCode = `// Kèm Ma trận & Đặc tả nếu được chọn
  const chkPrintMatrix = document.getElementById('chkIncludeMatrixInPrint');
  if (chkPrintMatrix && chkPrintMatrix.checked) {
    htmlExam += \`
      <div style="margin-bottom: 25px; padding-bottom: 20px; border-bottom: 2px dashed #94a3b8; page-break-after: always;">
        <h2 style="text-align: center; font-size: 13pt; font-weight: bold; text-transform: uppercase; margin-bottom: 12px; color: #1e3a8a;">
          HỒ SƠ MA TRẬN & BẢN ĐẶC TẢ ĐI KÈM ĐỀ KIỂM TRA MÃ ĐỀ \${currentExam.examCode}
        </h2>
        \${generateExamMatrixHTML(currentExam)}
        <div style="height: 15px;"></div>
        \${generateExamSpecHTML(currentExam)}
      </div>
    \`;
  }

  `;
    content = content.substring(0, p1Idx) + insertCode + content.substring(p1Idx);
  }
}

// 3. Update exportExamToWord signature and implementation
const exportStartMarker = "function exportExamToWord(exam = currentExam, includeAnswers = true) {";
const exportIdx = content.indexOf(exportStartMarker);
if (exportIdx !== -1) {
  const tableStart = 'bodyHTML += `';
  const tableIdx = content.indexOf(tableStart, exportIdx);
  
  if (tableIdx !== -1) {
    const newExportHeader = `function exportExamToWord(exam = currentExam, includeAnswers = true, includeMatrixSpec = false) {
  if (!exam) return;

  const school = exam.school || "TRƯỜNG THPT BÙI THỊ XUÂN – MŨI NÉ";
  const title = exam.title || "ĐỀ KIỂM TRA ĐỊNH KÌ HÓA HỌC 12";
  const code = exam.examCode || "101";
  const duration = exam.timeMinutes || 45;

  let bodyHTML = '';

  // 0. KHUNG MA TRẬN & BẢNG ĐẶC TẢ NẾU CÓ YÊU CẦU
  if (includeMatrixSpec) {
    bodyHTML += \`
      <div style="margin-bottom: 20px;">
        <h2 style="text-align: center; font-size: 14pt; font-weight: bold; text-transform: uppercase; margin-bottom: 10px; color: #1e3a8a;">
          HỒ SƠ MA TRẬN & BẢN ĐẶC TẢ ĐỀ KIỂM TRA GIỮA KÌ 1 – MÔN HÓA HỌC 12
        </h2>
      </div>

      \${generateExamMatrixHTML(exam)}

      <br clear="all" style="page-break-before: always; mso-special-character: line-break;">

      \${generateExamSpecHTML(exam)}

      <br clear="all" style="page-break-before: always; mso-special-character: line-break;">
    \`;
  }
`;
    // Replace from exportIdx to tableIdx
    content = content.substring(0, exportIdx) + newExportHeader + content.substring(tableIdx);
  }
}

// 4. Update fileNameSuffix in exportExamToWord
const suffixOld = "const fileNameSuffix = includeAnswers ? 'Kem_Dap_An' : 'De_Hoc_Sinh';";
const suffixNew = `let fileNameSuffix = '';
  if (includeMatrixSpec && includeAnswers) {
    fileNameSuffix = 'Ho_So_Day_Du_Kem_MaTran_DacTa';
  } else if (includeMatrixSpec) {
    fileNameSuffix = 'Kem_MaTran_DacTa';
  } else if (includeAnswers) {
    fileNameSuffix = 'Kem_Dap_An';
  } else {
    fileNameSuffix = 'De_Hoc_Sinh';
  }`;
content = content.replace(suffixOld, suffixNew);

// 5. Add exportMatrixSpecWord function
const exportMatrixSpecWordFunc = `
// Xuất riêng Ma trận & Bản đặc tả của một đề thi ra file Word
function exportMatrixSpecWord(exam = currentExam) {
  if (!exam) return;
  const code = exam.examCode || '101';
  const title = \`MA TRẬN VÀ BẢN ĐẶC TẢ ĐỀ THI HÓA 12 - MÃ ĐỀ \${code}\`;

  const bodyHTML = \`
    <div style="text-align: center; margin-bottom: 20px;">
      <h2 style="font-size: 14pt; font-weight: bold; text-transform: uppercase; margin: 0; color: #1e3a8a;">
        HỒ SƠ MA TRẬN VÀ BẢNG ĐẶC TẢ ĐỀ KIỂM TRA
      </h2>
      <p style="font-size: 11pt; font-style: italic; margin-top: 4px;">
        Môn: Hóa học 12 – Mã đề kiểm tra: <strong>\${code}</strong>
      </p>
    </div>

    \${generateExamMatrixHTML(exam)}

    <br clear="all" style="page-break-before: always; mso-special-character: line-break;">

    \${generateExamSpecHTML(exam)}
  \`;

  const wordDocumentHTML = \`
    <html xmlns:o='urn:schemas-microsoft-com:office:office' 
          xmlns:w='urn:schemas-microsoft-com:office:word' 
          xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
      <meta charset='utf-8'>
      <title>\${title}</title>
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
      </style>
    </head>
    <body>
      <div class="Section1">
        \${bodyHTML}
      </div>
    </body>
    </html>
  \`;

  const blob = new Blob(['\\ufeff', wordDocumentHTML], { type: 'application/msword;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = \`Ma_Tran_Va_Dac_Ta_Hoa_12_Ma_\${code}.doc\`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
`;

// Insert exportMatrixSpecWordFunc before exportToWord
const exportToWordMarker = "function exportToWord() {";
content = content.replace(exportToWordMarker, exportMatrixSpecWordFunc + "\n" + exportToWordMarker);

fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully updated public/app.js!");
