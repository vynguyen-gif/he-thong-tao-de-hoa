// services/matrixSpecGenerator11.js
// Bộ sinh Ma trận & Bản đặc tả chi tiết chuẩn 100% theo mẫu file của Bộ GD&ĐT / Trường THPT Bùi Thị Xuân
// Khối 11 - Kiểm tra giữa học kì 1

const { formatChem } = require('./chemFormatter');

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
            <strong>MÔN: HÓA HỌC 11 – MÃ ĐỀ: ${code}</strong><br>
            <span style="font-size: 10.5pt; font-style: italic;">Thời gian: 45 phút – Tổng điểm: 10,0 điểm</span>
          </td>
        </tr>
      </table>

      <table style="width: 100%; border-collapse: collapse; border: 1px solid #000; text-align: center; font-size: 9.5pt; line-height: 1.25;">
        <thead style="background-color: #f1f5f9; font-weight: bold;">
          <tr>
            <th style="border: 1px solid #000; padding: 4px;" rowspan="3">TT</th>
            <th style="border: 1px solid #000; padding: 4px; text-align: left;" rowspan="3">Chương</th>
            <th style="border: 1px solid #000; padding: 4px; text-align: left;" rowspan="3">Nội dung / Đơn vị kiến thức</th>
            <th style="border: 1px solid #000; padding: 4px;" colspan="12">Mức độ đánh giá</th>
            <th style="border: 1px solid #000; padding: 4px;" rowspan="3">Tổng điểm</th>
          </tr>
          <tr>
            <th style="border: 1px solid #000; padding: 3px;" colspan="3">TNKQ nhiều lựa chọn (I)</th>
            <th style="border: 1px solid #000; padding: 3px;" colspan="3">TNKQ đúng – sai (II)</th>
            <th style="border: 1px solid #000; padding: 3px;" colspan="3">TNKQ trả lời ngắn (III)</th>
            <th style="border: 1px solid #000; padding: 3px;" colspan="3">Tự luận (IV)</th>
          </tr>
          <tr style="background-color: #e2e8f0; font-size: 9pt;">
            <th style="border: 1px solid #000; padding: 2px;">Biết</th><th style="border: 1px solid #000; padding: 2px;">Hiểu</th><th style="border: 1px solid #000; padding: 2px;">VD</th>
            <th style="border: 1px solid #000; padding: 2px;">Biết</th><th style="border: 1px solid #000; padding: 2px;">Hiểu</th><th style="border: 1px solid #000; padding: 2px;">VD</th>
            <th style="border: 1px solid #000; padding: 2px;">Biết</th><th style="border: 1px solid #000; padding: 2px;">Hiểu</th><th style="border: 1px solid #000; padding: 2px;">VD</th>
            <th style="border: 1px solid #000; padding: 2px;">Biết</th><th style="border: 1px solid #000; padding: 2px;">Hiểu</th><th style="border: 1px solid #000; padding: 2px;">VD</th>
          </tr>
        </thead>
        <tbody>
          <!-- 1. Cân bằng hóa học -->
          <tr>
            <td style="border: 1px solid #000; padding: 3px;" rowspan="3">1</td>
            <td style="border: 1px solid #000; padding: 3px; text-align: left; font-weight: bold;" rowspan="3">Cân bằng hóa học</td>
            <td style="border: 1px solid #000; padding: 3px; text-align: left;">Bài 1. Mở đầu về cân bằng hóa học</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #1e40af;">C1, C2</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #15803d;">C2</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold;">1,00 đ</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 3px; text-align: left;">Bài 2. Sự điện li, thuyết Brønsted – Lowry</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #1e40af;">C3, C4</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #15803d;">C9</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #1e40af;">C1a</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold;">1,00 đ</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 3px; text-align: left;">Bài 3. pH của dung dịch – chuẩn độ</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #1e40af;">C5</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #b91c1c;">C11</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #1e40af;">C1b</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #15803d;">C1c</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #b91c1c;">C1d</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #1e40af;">C1</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #15803d;">C2</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold;">2,75 đ</td>
          </tr>

          <!-- 2. Nitrogen và sulfur -->
          <tr>
            <td style="border: 1px solid #000; padding: 3px;" rowspan="2">2</td>
            <td style="border: 1px solid #000; padding: 3px; text-align: left; font-weight: bold;" rowspan="2">Nitrogen và sulfur</td>
            <td style="border: 1px solid #000; padding: 3px; text-align: left;">Bài 4. Đơn chất nitrogen</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #1e40af;">C6</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #1e40af;">C2a</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #15803d;">C2b</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #15803d;">C3</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #1e40af;">C1</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold;">2,25 đ</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 3px; text-align: left;">Bài 5. Một số hợp chất của nitrogen</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #1e40af;">C7, C8</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #15803d;">C10</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #b91c1c;">C12</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #1e40af;">C2c</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #b91c1c;">C2d</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #b91c1c;">C4</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #b91c1c;">C3</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold;">3,00 đ</td>
          </tr>

          <!-- TỔNG SỐ CÂU (LỆNH HỎI) -->
          <tr style="background-color: #fef3c7; font-weight: bold;">
            <td style="border: 1px solid #000; padding: 4px;" colspan="3">Tổng số câu (Lệnh hỏi) (30 lệnh hỏi / 21 câu)</td>
            <td style="border: 1px solid #000; padding: 4px;">8</td>
            <td style="border: 1px solid #000; padding: 4px;">2</td>
            <td style="border: 1px solid #000; padding: 4px;">2</td>
            <td style="border: 1px solid #000; padding: 4px;">4</td>
            <td style="border: 1px solid #000; padding: 4px;">2</td>
            <td style="border: 1px solid #000; padding: 4px;">2</td>
            <td style="border: 1px solid #000; padding: 4px;">1</td>
            <td style="border: 1px solid #000; padding: 4px;">2</td>
            <td style="border: 1px solid #000; padding: 4px;">1</td>
            <td style="border: 1px solid #000; padding: 4px;">1</td>
            <td style="border: 1px solid #000; padding: 4px;">1</td>
            <td style="border: 1px solid #000; padding: 4px;">1</td>
            <td style="border: 1px solid #000; padding: 4px; font-size: 10.5pt; color: #b91c1c;">30</td>
          </tr>
          <!-- TỔNG SỐ ĐIỂM -->
          <tr style="background-color: #f8fafc; font-weight: bold;">
            <td style="border: 1px solid #000; padding: 4px;" colspan="3">Tổng điểm từng phần</td>
            <td style="border: 1px solid #000; padding: 4px;" colspan="3">3,00 đ (12 câu × 0,25đ)</td>
            <td style="border: 1px solid #000; padding: 4px;" colspan="3">2,00 đ (2 câu = 8 ý × 0,25đ)</td>
            <td style="border: 1px solid #000; padding: 4px;" colspan="3">2,00 đ (4 câu × 0,50đ)</td>
            <td style="border: 1px solid #000; padding: 4px;" colspan="3">3,00 đ (3 câu × 1,00đ)</td>
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

// BẢN ĐẶC TẢ ĐỀ KIỂM TRA GIỮA HỌC KÌ I - MÔN HÓA HỌC 11
// Chuẩn 100% 9 Cột theo file mẫu MA TRẬN ĐỀ KIỂM TRA Gk1 H11(26-27).docx
function generateExamSpecHTML(exam) {
  if (!exam) return '';
  const code = exam.examCode || '101';
  const school = exam.school || 'TRƯỜNG THPT BÙI THỊ XUÂN – MŨI NÉ';
  const termName = (exam.term === 'cuoiki' || exam.term === 'ck1' || exam.term === 'hocki1') ? 'CUỐI HỌC KÌ I' : 'GIỮA HỌC KÌ I';

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
            <strong>MÔN: HÓA HỌC 11 – MÃ ĐỀ: ${code}</strong><br>
            <span style="font-size: 10.5pt; font-style: italic;">Thời gian làm bài: 45 phút</span>
          </td>
        </tr>
      </table>

      <table style="width: 100%; border-collapse: collapse; border: 1px solid #000; font-size: 9.5pt; line-height: 1.3;">
        <thead style="background-color: #f1f5f9; font-weight: bold; text-align: center;">
          <tr>
            <th style="border: 1px solid #000; padding: 4px; width: 4%;" rowspan="3">TT<br>(1)</th>
            <th style="border: 1px solid #000; padding: 4px; width: 14%; text-align: left;" rowspan="3">Chủ đề<br>(2)</th>
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
          <!-- 1. CÂN BẰNG HÓA HỌC -->
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;" rowspan="8">1</td>
            <td style="border: 1px solid #000; padding: 4px; font-weight: bold;" rowspan="8">Cân bằng hóa học</td>
            <td style="border: 1px solid #000; padding: 4px;" rowspan="2">Bài 1. Mở đầu về cân bằng hóa học</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">Biết</td>
            <td style="border: 1px solid #000; padding: 4px;">
              - Trình bày được khái niệm phản ứng thuận nghịch và trạng thái cân bằng của một phản ứng thuận nghịch (HH.1.2)<br>
              - Viết được biểu thức hằng số cân bằng (Kc) của phản ứng thuận nghịch (HH.1.3)
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">C1, C2</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">Hiểu</td>
            <td style="border: 1px solid #000; padding: 4px;">
              Vận dụng nguyên lí chuyển dịch cân bằng Le Chatelier để giải thích ảnh hưởng của nhiệt độ, nồng độ, áp suất, đến cân bằng hóa học. (HH.1.6)
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">C2</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px;" rowspan="3">Bài 2. Sự điện li, thuyết Brønsted – Lowry về acid – base</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">Biết</td>
            <td style="border: 1px solid #000; padding: 4px;">
              - Nêu khái niệm sự điện li, chất điện li, chất không điện li (HH.1.1)<br>
              - Trình bày được thuyết Brønsted – Lowry về acid – base (HH.1.2)
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">C3, C4</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">C1a</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">Hiểu</td>
            <td style="border: 1px solid #000; padding: 4px;">
              - Trình bày được ý nghĩa thực tiễn cân bằng trong dung dịch nước của ion Al³⁺, Fe³⁺ và CO₃²⁻ (HH.1.2)
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">C9</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #b91c1c;">Vận dụng</td>
            <td style="border: 1px solid #000; padding: 4px;">
              Vận dụng kiến thức kĩ năng đã học về thuyết Brønsted – Lowry về acid – base để giải thích được ý nghĩa thực tiễn cân bằng trong dung dịch nước của ion Al³⁺, Fe³⁺ và CO₃²⁻ (HH.3.1)
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px;" rowspan="3">Bài 3. pH của dung dịch – chuẩn độ acid và base</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">Biết</td>
            <td style="border: 1px solid #000; padding: 4px;">
              - Nêu khái niệm và ý nghĩa của pH trong thực tiễn (liên hệ giá trị pH ở các bộ phận trong cơ thể với sức khoẻ con người; pH của đất, nước tới sự phát triển của động thực vật) (HH.1.1)<br>
              - Nêu nguyên tắc xác định nồng độ acid – base mạnh bằng phương pháp chuẩn độ (HH.1.1)
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">C5</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">C1b</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">C1</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">Hiểu</td>
            <td style="border: 1px solid #000; padding: 4px;">
              - Thực hiện thí nghiệm chuẩn độ acid – base: chuẩn độ dung dịch base mạnh bằng dd acid mạnh (HH.2.4)<br>
              - Viết được biểu thức tính pH và biết cách sử dụng các chất chỉ thị để xác định pH bằng các chất chỉ thị phổ biến như quỳ tím, giấy chỉ thị màu, phenolphthalein… (HH.1.2)
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">C1c</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">C2</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #b91c1c;">Vận dụng</td>
            <td style="border: 1px solid #000; padding: 4px;">
              Vận dụng các kiến thức, kĩ năng đã học về pH để nêu được ý nghĩa của pH trong thực tiễn (liên hệ giá trị pH ở các bộ phận trong cơ thể với sức khỏe con người; pH của đất, nước tới sự phát triển của động thực vật) (HH.3.6)
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #b91c1c;">C11</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #b91c1c;">C1d</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
          </tr>

          <!-- 2. NITROGEN VÀ SULFUR -->
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;" rowspan="5">2</td>
            <td style="border: 1px solid #000; padding: 4px; font-weight: bold;" rowspan="5">Nitrogen và sulfur</td>
            <td style="border: 1px solid #000; padding: 4px;" rowspan="2">Bài 4. Đơn chất nitrogen</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">Biết</td>
            <td style="border: 1px solid #000; padding: 4px;">
              - Phát biểu được trạng thái tự nhiên của nguyên tố nitrogen (HH.1.1)<br>
              - Trình bày được sự hoạt động của đơn chất nitrogen ở nhiệt độ cao với hydrogen và oxygen (HH.1.2)
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">C6</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">C2a</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">C1</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">Hiểu</td>
            <td style="border: 1px solid #000; padding: 4px;">
              - Giải thích được tính trơ của đơn chất nitrogen ở nhiệt độ thường thông qua liên kết và giá trị năng lượng liên kết (HH.1.6)<br>
              - Liên hệ được quá trình cung cấp nitrate cho đất từ nước mưa (HH.1.6)
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">C2b</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">C3</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px;" rowspan="3">Bài 5. Một số hợp chất quan trọng của nitrogen</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">Biết</td>
            <td style="border: 1px solid #000; padding: 4px;">
              - Mô tả công thức Lewis và dạng hình học của phân tử ammonia (HH.1.3)<br>
              - Trình bày được ứng dụng của ammonia (HH.1.2)<br>
              - Trình bày được ứng dụng của muối ammonium nitrate và một số muối ammonium tan trong phân đạm, phân ammophos (HH.1.2)
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">C7, C8</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">C2c</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">Hiểu</td>
            <td style="border: 1px solid #000; padding: 4px;">
              - Trình bày được tính chất cơ bản của muối ammonium và nhận biết được ion ammonium trong dung dịch (HH.1.2)<br>
              - Phân tích được nguồn gốc của các oxide của nitrogen trong không khí và nguyên nhân gây hiện tượng mưa acid (HH.1.2)<br>
              - Nêu được cấu tạo của phân tử HNO₃, tính acid, tính oxi hóa mạnh trong một số ứng dụng thực tiễn quan trọng của nitric acid (HH.1.1)<br>
              - Giải thích nguyên nhân và hệ quả của hiện tượng phú dưỡng (HH.1.6)
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">C10</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #b91c1c;">Vận dụng</td>
            <td style="border: 1px solid #000; padding: 4px;">
              - Vận dụng kiến thức đã học về cân bằng hóa học, biến thiên enthalpy cho phản ứng tổng hợp ammonia từ nitrogen và hydrogen trong quá trình Haber (HH.1.6)<br>
              - Dựa vào đặc điểm cấu tạo của phân tử ammonia giải thích được tính chất vật lí (tính tan), tính chất hóa học (tính base, tính khử). Viết được PTHH minh họa (HH.1.6)<br>
              - Thực hiện được thí nghiệm nhận ion ammonium trong phân đạm chứa ion ammonium (HH.2.4)
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #b91c1c;">C12</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #b91c1c;">C2d</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #b91c1c;">C4</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #b91c1c;">C3</td>
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
