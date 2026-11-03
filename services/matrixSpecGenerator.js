// services/matrixSpecGenerator.js
// Bộ sinh Ma trận & Bản đặc tả chi tiết gắn liền với từng đề thi cụ thể Hóa học 12
// Chuẩn 100% 9 Cột theo file mẫu MA TRẬN VÀ ĐẶC TẢ MA TRẬN KTRA GK1-HÓA 12-25-26.pdf

const { formatChem } = require('./chemFormatter');

// Sinh bảng Ma trận HTML cho một đề thi cụ thể
function generateExamMatrixHTML(exam) {
  if (!exam) return '';
  const code = exam.examCode || '101';
  const school = exam.school || 'TRƯỜNG THPT BÙI THỊ XUÂN – MŨI NÉ';
  const termName = (exam.term === 'cuoiki' || exam.term === 'ck1' || exam.term === 'hocki1') ? 'CUỐI HỌC KÌ I' : 'GIỮA HỌC KÌ I';

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
            <strong>KHUNG MA TRẬN ĐỀ KIỂM TRA ${termName}</strong><br>
            <strong>MÔN: HÓA HỌC 12 – MÃ ĐỀ: ${code}</strong><br>
            <span style="font-size: 10.5pt; font-style: italic;">Thời gian: 45 phút – Tổng điểm: 10,0 điểm</span>
          </td>
        </tr>
      </table>

      <table style="width: 100%; border-collapse: collapse; border: 1px solid #000; text-align: center; font-size: 9.5pt; line-height: 1.25;">
        <thead style="background-color: #f1f5f9; font-weight: bold;">
          <tr>
            <th style="border: 1px solid #000; padding: 4px;" rowspan="3">TT</th>
            <th style="border: 1px solid #000; padding: 4px; text-align: left;" rowspan="3">Chương / Chủ đề</th>
            <th style="border: 1px solid #000; padding: 4px; text-align: left;" rowspan="3">Nội dung kiến thức</th>
            <th style="border: 1px solid #000; padding: 4px;" colspan="12">Mức độ đánh giá</th>
            <th style="border: 1px solid #000; padding: 4px;" rowspan="3">Tổng điểm</th>
          </tr>
          <tr>
            <th style="border: 1px solid #000; padding: 3px;" colspan="3">Phần I (Nhiều lựa chọn)</th>
            <th style="border: 1px solid #000; padding: 3px;" colspan="3">Phần II (Đúng - Sai)</th>
            <th style="border: 1px solid #000; padding: 3px;" colspan="3">Phần III (Trả lời ngắn)</th>
            <th style="border: 1px solid #000; padding: 3px;" colspan="3">Phần IV (Tự luận)</th>
          </tr>
          <tr style="background-color: #e2e8f0; font-size: 9pt;">
            <th style="border: 1px solid #000; padding: 2px;">Biết</th><th style="border: 1px solid #000; padding: 2px;">Hiểu</th><th style="border: 1px solid #000; padding: 2px;">VD</th>
            <th style="border: 1px solid #000; padding: 2px;">Biết</th><th style="border: 1px solid #000; padding: 2px;">Hiểu</th><th style="border: 1px solid #000; padding: 2px;">VD</th>
            <th style="border: 1px solid #000; padding: 2px;">Biết</th><th style="border: 1px solid #000; padding: 2px;">Hiểu</th><th style="border: 1px solid #000; padding: 2px;">VD</th>
            <th style="border: 1px solid #000; padding: 2px;">Biết</th><th style="border: 1px solid #000; padding: 2px;">Hiểu</th><th style="border: 1px solid #000; padding: 2px;">VD</th>
          </tr>
        </thead>
        <tbody>
          <!-- 1. Ester - Lipid -->
          <tr>
            <td style="border: 1px solid #000; padding: 3px;" rowspan="2">1</td>
            <td style="border: 1px solid #000; padding: 3px; text-align: left; font-weight: bold;" rowspan="2">ESTER – LIPID (4 tiết)</td>
            <td style="border: 1px solid #000; padding: 3px; text-align: left;">Ester - lipid</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #1e40af;">C1, C2</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #1e40af;">C1a, C1b</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #15803d;">C1c</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #b91c1c;">C1d</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #15803d;">C1</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold;">2,00 đ</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 3px; text-align: left;">Xà phòng và chất giặt rửa</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #1e40af;">C3, C4</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #1e40af;">C2</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #15803d;">C1 (1,0đ)</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold;">2,00 đ</td>
          </tr>

          <!-- 2. Carbohydrate -->
          <tr>
            <td style="border: 1px solid #000; padding: 3px;" rowspan="4">2</td>
            <td style="border: 1px solid #000; padding: 3px; text-align: left; font-weight: bold;" rowspan="4">CARBOHYDRATE (6 tiết)</td>
            <td style="border: 1px solid #000; padding: 3px; text-align: left;">Glucose và fructose</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #1e40af;">C5</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #15803d;">C6</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold;">0,50 đ</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 3px; text-align: left;">Saccharose và maltose</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #1e40af;">C7</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #15803d;">C8</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold;">0,50 đ</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 3px; text-align: left;">Tinh bột và cellulose</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #1e40af;">C9</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #15803d;">C10</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #b91c1c;">C2 (2,0đ)</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold;">2,50 đ</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 3px; text-align: left;">Tổng hợp chương 2</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #b91c1c;">C3</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold;">0,50 đ</td>
          </tr>

          <!-- 3. Hợp chất chứa Nitrogen -->
          <tr>
            <td style="border: 1px solid #000; padding: 3px;" rowspan="2">3</td>
            <td style="border: 1px solid #000; padding: 3px; text-align: left; font-weight: bold;" rowspan="2">HỢP CHẤT NITROGEN (2 tiết)</td>
            <td style="border: 1px solid #000; padding: 3px; text-align: left;">Amine</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #1e40af;">C11</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #1e40af;">C2a, C2b</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #15803d;">C2c</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #b91c1c;">C2d</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold;">1,25 đ</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 3px; text-align: left;">Amino acid và peptide</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #15803d;">C12</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #1e40af;">C4</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold;">0,75 đ</td>
          </tr>

          <!-- Tổng kết -->
          <tr style="background-color: #fef3c7; font-weight: bold;">
            <td style="border: 1px solid #000; padding: 4px;" colspan="3">TỔNG SỐ CÂU / LỆNH HỎI (26 lệnh hỏi / 20 câu)</td>
            <td style="border: 1px solid #000; padding: 4px;">8</td>
            <td style="border: 1px solid #000; padding: 4px;">4</td>
            <td style="border: 1px solid #000; padding: 4px;">0</td>
            <td style="border: 1px solid #000; padding: 4px;">4</td>
            <td style="border: 1px solid #000; padding: 4px;">2</td>
            <td style="border: 1px solid #000; padding: 4px;">2</td>
            <td style="border: 1px solid #000; padding: 4px;">2</td>
            <td style="border: 1px solid #000; padding: 4px;">1</td>
            <td style="border: 1px solid #000; padding: 4px;">1</td>
            <td style="border: 1px solid #000; padding: 4px;">0</td>
            <td style="border: 1px solid #000; padding: 4px;">1</td>
            <td style="border: 1px solid #000; padding: 4px;">1</td>
            <td style="border: 1px solid #000; padding: 4px; font-size: 10.5pt; color: #b91c1c;">10,0 đ</td>
          </tr>
          <!-- TỔNG SỐ ĐIỂM -->
          <tr style="background-color: #f8fafc; font-weight: bold;">
            <td style="border: 1px solid #000; padding: 4px;" colspan="3">Tổng điểm từng phần</td>
            <td style="border: 1px solid #000; padding: 4px;" colspan="3">3,00 đ (12 câu × 0,25đ)</td>
            <td style="border: 1px solid #000; padding: 4px;" colspan="3">2,00 đ (2 câu = 8 ý × 0,25đ)</td>
            <td style="border: 1px solid #000; padding: 4px;" colspan="3">2,00 đ (4 câu × 0,50đ)</td>
            <td style="border: 1px solid #000; padding: 4px;" colspan="3">3,00 đ (2 câu: 1,0đ + 2,0đ)</td>
            <td style="border: 1px solid #000; padding: 4px; font-size: 10.5pt; color: #b91c1c;">10,0 đ</td>
          </tr>
          <!-- TỔNG ĐIỂM THEO MỨC ĐỘ -->
          <tr style="background-color: #ecfdf5; font-weight: bold;">
            <td style="border: 1px solid #000; padding: 4px;" colspan="3">Tổng tỉ lệ điểm theo mức độ</td>
            <td style="border: 1px solid #000; padding: 4px;" colspan="4">Biết: 4,00 đ (40%)</td>
            <td style="border: 1px solid #000; padding: 4px;" colspan="4">Hiểu: 3,00 đ (30%)</td>
            <td style="border: 1px solid #000; padding: 4px;" colspan="4">Vận dụng: 3,00 đ (30%)</td>
            <td style="border: 1px solid #000; padding: 4px; font-size: 10.5pt; color: #15803d;">100%</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

// BẢNG ĐẶC TẢ ĐỀ KIỂM TRA GIỮA HỌC KÌ I / CUỐI HỌC KÌ I - MÔN HÓA HỌC 12
// Chuẩn 100% 9 Cột theo file mẫu MA TRẬN VÀ ĐẶC TẢ MA TRẬN KTRA GK1-HÓA 12-25-26.pdf
function generateExamSpecHTML(exam) {
  if (!exam) return '';
  const code = exam.examCode || '101';
  const school = exam.school || 'TRƯỜNG THPT BÙI THỊ XUÂN – MŨI NÉ';
  const termName = exam.term === 'cuoiki' ? 'CUỐI HỌC KÌ I' : 'GIỮA HỌC KÌ I';

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
            <strong>BẢNG ĐẶC TẢ ĐỀ KIỂM TRA ${termName}</strong><br>
            <strong>MÔN: HÓA HỌC 12 – MÃ ĐỀ: ${code}</strong><br>
            <span style="font-size: 10.5pt; font-style: italic;">Năm học: 2026 – 2027 • Thời gian: 45 phút</span>
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
          <!-- 1. ESTER – LIPID -->
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;" rowspan="6">1</td>
            <td style="border: 1px solid #000; padding: 4px; font-weight: bold;" rowspan="6">ESTER – LIPID</td>
            <td style="border: 1px solid #000; padding: 4px;" rowspan="3">Ester - lipid</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">Nhận biết</td>
            <td style="border: 1px solid #000; padding: 4px;">
              – Biết được công thức cấu tạo và gọi được tên một số ester đơn giản (số nguyên tử C trong phân tử ≤ 3) và thường gặp.<br>
              – Biết được cấu tạo của chất béo.
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">C1, C2</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">C1a, C1b</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">Thông hiểu</td>
            <td style="border: 1px solid #000; padding: 4px;">
              – Trình bày được đặc điểm về tính chất vật lí và tính chất hoá học cơ bản của ester (phản ứng thuỷ phân) và của chất béo (phản ứng thuỷ phân, phản ứng hydrogen hoá chất béo lỏng).
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">C1c</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">C1</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #b91c1c;">Vận dụng</td>
            <td style="border: 1px solid #000; padding: 4px;">
              – Trình bày được đặc điểm về tính chất vật lí và tính chất hoá học cơ bản của ester (phản ứng thuỷ phân) và của chất béo (phản ứng hydrogen hoá chất béo lỏng, phản ứng oxi hoá chất béo bởi oxygen không khí).
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #b91c1c;">C1d</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px;" rowspan="2">Xà phòng và chất giặt rửa</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">Nhận biết</td>
            <td style="border: 1px solid #000; padding: 4px;">
              – Nêu được khái niệm về xà phòng và chất giặt rửa tổng hợp.
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">C3, C4</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">C2</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">Thông hiểu</td>
            <td style="border: 1px solid #000; padding: 4px;">
              – Nêu được đặc điểm về cấu tạo và tính chất chất giặt rửa của xà phòng và chất giặt rửa tự nhiên, tổng hợp; phương pháp sản xuất.
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">C1 (1,0đ)</td>
          </tr>

          <!-- 2. CARBOHYDRATE -->
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;" rowspan="8">2</td>
            <td style="border: 1px solid #000; padding: 4px; font-weight: bold;" rowspan="8">CARBOHYDRATE (6 Tiết)</td>
            <td style="border: 1px solid #000; padding: 4px;" rowspan="2">Glucose và fructose</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">Nhận biết</td>
            <td style="border: 1px solid #000; padding: 4px;">
              – Nêu được khái niệm, cách phân loại carbohydrate, trạng thái tự nhiên của glucose, fructose.
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">C5</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">Thông hiểu</td>
            <td style="border: 1px solid #000; padding: 4px;">
              – Trình bày được tính chất hóa học cơ bản của glucose, fructose.
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">C6</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px;" rowspan="2">Saccharose và maltose</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">Nhận biết</td>
            <td style="border: 1px solid #000; padding: 4px;">
              – Nêu được trạng thái tự nhiên của saccharose, maltose.
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">C7</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">Thông hiểu</td>
            <td style="border: 1px solid #000; padding: 4px;">
              – Trình bày được tính chất hoá học cơ bản của saccharose (phản ứng với copper(II) hydroxide, phản ứng thuỷ phân).
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">C8</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px;" rowspan="3">Tinh bột và cellulose</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">Nhận biết</td>
            <td style="border: 1px solid #000; padding: 4px;">
              – Nêu được trạng thái tự nhiên của tinh bột và cellulose.
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">C9</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">Thông hiểu</td>
            <td style="border: 1px solid #000; padding: 4px;">
              – Trình bày được tính chất hoá học của tinh bột và cellulose.
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">C10</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #b91c1c;">Vận dụng</td>
            <td style="border: 1px solid #000; padding: 4px;">
              – Thực hiện được thí nghiệm về phản ứng của tinh bột (phản ứng thuỷ phân, phản ứng của hồ tinh bột với iodine); của cellulose (phản ứng thuỷ phân, phản ứng với nitric acid và tan trong nước Schweizer). Mô tả các hiện tượng thí nghiệm và giải thích được tính chất hoá học của tinh bột và cellulose.
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #b91c1c;">C2 (2,0đ)</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px;">Tổng hợp chương 2</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #b91c1c;">Vận dụng</td>
            <td style="border: 1px solid #000; padding: 4px;">
              – Trình bày được tính chất hoá học cơ bản của các carbohydrate (phản ứng với copper(II) hydroxide, phản ứng thuỷ phân, phản ứng tráng gương).
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #b91c1c;">C3</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
          </tr>

          <!-- 3. HỢP CHẤT NITROGEN -->
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;" rowspan="5">3</td>
            <td style="border: 1px solid #000; padding: 4px; font-weight: bold;" rowspan="5">HỢP CHẤT NITROGEN (2 Tiết)</td>
            <td style="border: 1px solid #000; padding: 4px;" rowspan="3">Amine</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">Nhận biết</td>
            <td style="border: 1px solid #000; padding: 4px;">
              – Nêu được khái niệm amine; đặc điểm về tính chất vật lí của amine (trạng thái, nhiệt độ sôi, nhiệt độ nóng chảy, khả năng hoà tan).
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">C11</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">C2a, C2b</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">Thông hiểu</td>
            <td style="border: 1px solid #000; padding: 4px;">
              – Trình bày được tính chất hoá học đặc trưng của amine: tính chất của nhóm –NH₂ (tính base với quỳ tím, với HCl, với FeCl₃), phản ứng với nitrous acid, phản ứng thế ở nhân thơm (với nước bromine) của aniline, phản ứng tạo phức của methylamine (hoặc ethylamine) với Cu(OH)₂.
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">C2c</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #b91c1c;">Vận dụng</td>
            <td style="border: 1px solid #000; padding: 4px;">
              – Thí nghiệm về phản ứng của amine (với quỳ tím, HCl, FeCl₃, Cu(OH)₂, nước bromine); mô tả các hiện tượng thí nghiệm và giải thích được tính chất hoá học của amine.
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #b91c1c;">C2d</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px;" rowspan="2">Amino acid và peptide</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">Nhận biết</td>
            <td style="border: 1px solid #000; padding: 4px;">
              – Nêu được khái niệm về amino acid, amino acid thiên nhiên, amino acid trong cơ thể; gọi được tên một số amino acid thông dụng, đặc điểm cấu tạo phân tử của amino acid.<br>
              – Nêu được đặc điểm về tính chất vật lí của amino acid (trạng thái, nhiệt độ nóng chảy, khả năng hoà tan).
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">C4</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">Thông hiểu</td>
            <td style="border: 1px solid #000; padding: 4px;">
              – Trình bày được tính chất hoá học đặc trưng của amino acid (tính lưỡng tính, phản ứng ester hoá; phản ứng trùng ngưng của ɛ- và w-amino acid).<br>
              – Trình bày được tính chất hoá học đặc trưng của peptide (phản ứng thuỷ phân, phản ứng màu biuret).
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">C12</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

module.exports = {
  generateExamMatrixHTML,
  generateExamSpecHTML
};
