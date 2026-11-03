// services/matrixSpecGenerator10.js
// Bộ sinh Ma trận & Bản đặc tả chi tiết chuẩn 100% theo mẫu file của Bộ GD&ĐT / Trường THPT Bùi Thị Xuân
// Khối 10 - Kiểm tra giữa học kì 1

const { formatChem } = require('./chemFormatter');

function generateExamMatrixHTML(exam) {
  if (!exam) return '';
  const code = exam.examCode || '101';
  const school = exam.school || 'TRƯỜNG THPT BÙI THỊ XUÂN – MŨI NÉ';
  const termName = exam.term === 'cuoiki' ? 'CUỐI HỌC KÌ I' : 'GIỮA HỌC KÌ I';

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
            <strong>MÔN: HÓA HỌC 10 – MÃ ĐỀ: ${code}</strong><br>
            <span style="font-size: 10.5pt; font-style: italic;">Thời gian: 45 phút – Tổng điểm: 10,0 điểm</span>
          </td>
        </tr>
      </table>

      <table style="width: 100%; border-collapse: collapse; border: 1px solid #000; text-align: center; font-size: 9.5pt; line-height: 1.25;">
        <thead style="background-color: #f1f5f9; font-weight: bold;">
          <tr>
            <th style="border: 1px solid #000; padding: 4px;" rowspan="3">TT</th>
            <th style="border: 1px solid #000; padding: 4px; text-align: left;" rowspan="3">Chủ đề</th>
            <th style="border: 1px solid #000; padding: 4px; text-align: left;" rowspan="3">Đơn vị kiến thức</th>
            <th style="border: 1px solid #000; padding: 4px;" colspan="12">Mức độ đánh giá</th>
            <th style="border: 1px solid #000; padding: 4px;" rowspan="3">Tổng điểm</th>
          </tr>
          <tr>
            <th style="border: 1px solid #000; padding: 3px;" colspan="3">Nhiều lựa chọn (I)</th>
            <th style="border: 1px solid #000; padding: 3px;" colspan="3">Đúng – sai (II)</th>
            <th style="border: 1px solid #000; padding: 3px;" colspan="3">Trả lời ngắn (III)</th>
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
          <!-- 1. Cấu tạo nguyên tử -->
          <tr>
            <td style="border: 1px solid #000; padding: 3px;" rowspan="3">1</td>
            <td style="border: 1px solid #000; padding: 3px; text-align: left; font-weight: bold;" rowspan="3">Cấu tạo nguyên tử</td>
            <td style="border: 1px solid #000; padding: 3px; text-align: left;">Thành phần của nguyên tử</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #1e40af;">C1</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #b91c1c;">C11</td>
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
            <td style="border: 1px solid #000; padding: 3px; text-align: left;">Nguyên tố hóa học, đồng vị</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #1e40af;">C2</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #1e40af;">C1</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #b91c1c;">C3</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #15803d;">C1a</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #b91c1c;">C1b</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold;">2,25 đ</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 3px; text-align: left;">Cấu trúc lớp vỏ electron</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #1e40af;">C3</td>
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

          <!-- 2. Bảng tuần hoàn -->
          <tr>
            <td style="border: 1px solid #000; padding: 3px;" rowspan="2">2</td>
            <td style="border: 1px solid #000; padding: 3px; text-align: left; font-weight: bold;" rowspan="2">Bảng tuần hoàn các nguyên tố hóa học</td>
            <td style="border: 1px solid #000; padding: 3px; text-align: left;">Cấu tạo của bảng tuần hoàn</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #1e40af;">C4, C5</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #15803d;">C9</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #1e40af; font-size: 8.5pt;">C1a, C1b, C1c</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #15803d; font-size: 8.5pt;">C1d</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #1e40af;">C2</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #b91c1c;">C4</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #15803d;">C2a</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #b91c1c;">C2b</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold;">3,75 đ</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 3px; text-align: left;">Xu hướng biến đổi tính chất</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #1e40af;">C6, C7</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #15803d;">C10</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #b91c1c;">C12</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #1e40af; font-size: 8.5pt;">C2a, C2b</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #15803d; font-size: 8.5pt;">C2c, C2d</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px;">-</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #15803d;">C3b</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold; color: #b91c1c;">C3a</td>
            <td style="border: 1px solid #000; padding: 3px; font-weight: bold;">3,00 đ</td>
          </tr>

          <!-- TỔNG SỐ LỆNH HỎI -->
          <tr style="background-color: #fef3c7; font-weight: bold;">
            <td style="border: 1px solid #000; padding: 4px;" colspan="3">Tổng số lệnh hỏi (30 lệnh hỏi / 21 câu)</td>
            <td style="border: 1px solid #000; padding: 4px;">7</td>
            <td style="border: 1px solid #000; padding: 4px;">3</td>
            <td style="border: 1px solid #000; padding: 4px;">2</td>
            <td style="border: 1px solid #000; padding: 4px;">5</td>
            <td style="border: 1px solid #000; padding: 4px;">3</td>
            <td style="border: 1px solid #000; padding: 4px;">0</td>
            <td style="border: 1px solid #000; padding: 4px;">2</td>
            <td style="border: 1px solid #000; padding: 4px;">0</td>
            <td style="border: 1px solid #000; padding: 4px;">2</td>
            <td style="border: 1px solid #000; padding: 4px;">0</td>
            <td style="border: 1px solid #000; padding: 4px;">3</td>
            <td style="border: 1px solid #000; padding: 4px;">3</td>
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

// BẢN ĐẶC TẢ ĐỀ KIỂM TRA GIỮA HỌC KÌ I - MÔN HÓA HỌC 10
// Chuẩn 100% 9 Cột theo file mẫu HOÁ 10-MA TRẬN-ĐẶC TẢ -KTGK1-2026.docx
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
            <strong>BẢN ĐẶC TẢ ĐỀ KIỂM TRA ${termName}</strong><br>
            <strong>MÔN: HÓA HỌC 10 – MÃ ĐỀ: ${code}</strong><br>
            <span style="font-size: 10.5pt; font-style: italic;">Thời gian làm bài: 45 phút</span>
          </td>
        </tr>
      </table>

      <table style="width: 100%; border-collapse: collapse; border: 1px solid #000; font-size: 9.5pt; line-height: 1.3;">
        <thead style="background-color: #f1f5f9; font-weight: bold; text-align: center;">
          <tr>
            <th style="border: 1px solid #000; padding: 4px; width: 4%;" rowspan="3">TT<br>(1)</th>
            <th style="border: 1px solid #000; padding: 4px; width: 14%; text-align: left;" rowspan="3">Chương<br>(2)</th>
            <th style="border: 1px solid #000; padding: 4px; width: 15%; text-align: left;" rowspan="3">Nội dung / đơn vị kiến thức<br>(3)</th>
            <th style="border: 1px solid #000; padding: 4px; width: 9%;" rowspan="3">Cấp độ tư duy<br>(4)</th>
            <th style="border: 1px solid #000; padding: 4px; text-align: left;" rowspan="3">Yêu cầu cần đạt – Chỉ báo<br>(5)</th>
            <th style="border: 1px solid #000; padding: 4px;" colspan="4">Số lượng lệnh hỏi ở các mức độ</th>
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
          <!-- CHƯƠNG 1 -->
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;" rowspan="8">1</td>
            <td style="border: 1px solid #000; padding: 4px; font-weight: bold;" rowspan="8">Cấu tạo nguyên tử</td>
            <td style="border: 1px solid #000; padding: 4px;" rowspan="2">1. Các thành phần của nguyên tử</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">Biết</td>
            <td style="border: 1px solid #000; padding: 4px;">
              – Trình bày được thành phần của nguyên tử (hạt nhân và lớp vỏ nguyên tử; hạt nhân tạo nên bởi các hạt proton (p), neutron (n); Lớp vỏ tạo nên bởi các electron (e); điện tích, khối lượng mỗi loại hạt). (HH1.2)
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">C1</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #b91c1c;">Vận dụng</td>
            <td style="border: 1px solid #000; padding: 4px;">
              – Xác định số proton, electron, neutron trong nguyên tử. (HH1.4)
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #b91c1c;">C11</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px;" rowspan="3">2. Nguyên tố hoá học, đồng vị</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">Biết</td>
            <td style="border: 1px solid #000; padding: 4px;">
              – Trình bày được khái niệm về nguyên tố hoá học, số hiệu nguyên tử, và kí hiệu nguyên tử. (HH1.2)<br>
              – Phát biểu được khái niệm đồng vị, nguyên tử khối. (HH1.1)
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">C2</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">C1</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">Hiểu</td>
            <td style="border: 1px solid #000; padding: 4px;">
              – Xác định được số đồng vị dựa vào phổ khối lượng nguyên tử
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">C1a</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #b91c1c;">Vận dụng</td>
            <td style="border: 1px solid #000; padding: 4px;">
              – Tính được nguyên tử khối trung bình (theo amu) dựa vào khối lượng nguyên tử và phần trăm số nguyên tử của các đồng vị theo phổ khối lượng được cung cấp. (HH1.4)
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #b91c1c;">C3</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #b91c1c;">C1b</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px;" rowspan="3">3. Cấu trúc lớp vỏ electron nguyên tử</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">Biết</td>
            <td style="border: 1px solid #000; padding: 4px;">
              – Nêu được khái niệm orbital nguyên tử (AO), mô tả được hình dạng của AO (s, p), số lượng electron trong 1 AO. (HH1.3)<br>
              – Trình bày được khái niệm lớp, phân lớp electron, số lượng phân lớp trong một lớp; số AO trong một phân lớp, trong một lớp. (HH1.1)<br>
              – Nắm được đặc điểm của lớp electron ngoài cùng. (HH1.1)<br>
              – Nắm được quy tắc phân bố electron vào các lớp. (HH1.1)
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">C3</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">Thông hiểu</td>
            <td style="border: 1px solid #000; padding: 4px;">
              – Tính được số electron tối đa trong 1 phân lớp và trong 1 lớp.<br>
              – Viết được cấu hình electron nguyên tử theo lớp, phân lớp electron và theo ô orbital khi biết số hiệu nguyên tử Z của 20 nguyên tố đầu tiên trong bảng tuần hoàn. (HH1.5)
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">C8</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #b91c1c;">Vận dụng</td>
            <td style="border: 1px solid #000; padding: 4px;">
              – Dựa vào đặc điểm cấu hình electron lớp ngoài cùng của nguyên tử dự đoán được tính chất hoá học cơ bản (kim loại hay phi kim) của nguyên tố tương ứng. (HH1.6)
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
          </tr>

          <!-- CHƯƠNG 2 -->
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;" rowspan="6">2</td>
            <td style="border: 1px solid #000; padding: 4px; font-weight: bold;" rowspan="6">Bảng tuần hoàn các nguyên tố hoá học</td>
            <td style="border: 1px solid #000; padding: 4px;" rowspan="3">1. Cấu tạo của bảng tuần hoàn các nguyên tố hoá học</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">Biết</td>
            <td style="border: 1px solid #000; padding: 4px;">
              – Nêu được nguyên tắc sắp xếp các nguyên tố trong bảng tuần hoàn. (HH1.1)<br>
              – Nắm được cấu tạo của bảng tuần hoàn gồm: ô, chu kì, nhóm; khái niệm ô, chu kì, nhóm (nhóm A và B). (HH1.2-1.1)<br>
              – Nắm được cách xác định số thứ tự ô nguyên tố, xác định chu kì, nhóm. (HH1.2-1.1)<br>
              – Nêu được khái niệm electron hóa trị. (HH1.2-1.1)
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">C4, C5</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af; font-size: 8.5pt;">C1a, C1b, C1c</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">C2</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">Hiểu</td>
            <td style="border: 1px solid #000; padding: 4px;">
              – Xác định được số electron hóa trị trong nguyên tử các nguyên tố.<br>
              – Nắm được mối liên hệ giữa cấu hình electron và vị trí nguyên tố trong bảng tuần hoàn. (HH1.3)<br>
              – Phân loại được nguyên tố (dựa theo cấu hình electron: nguyên tố s, p, d, f; dựa theo tính chất hoá học: kim loại, phi kim, khí hiếm). (HH1.3)
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">C9</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d; font-size: 8.5pt;">C1d</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">C2a</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #b91c1c;">Vận dụng</td>
            <td style="border: 1px solid #000; padding: 4px;">
              – Xác định vị trí của nguyên tố (ô, chu kì, nhóm) khi biết cấu hình electron nguyên tử và ngược lại viết cấu hình electron, dự đoán tính chất dựa vào vị trí trong bảng tuần hoàn. (HH1.6)<br>
              – Giải thích được mối liên hệ giữa cấu hình electron và vị trí của nguyên tố trong bảng tuần hoàn, dẫn ra thí dụ minh họa. (HH1.6)
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #b91c1c;">C4</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #b91c1c;">C2b</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px;" rowspan="3">2. Xu hướng biến đổi một số tính chất của nguyên tử trong chu kì & nhóm</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">Biết</td>
            <td style="border: 1px solid #000; padding: 4px;">
              – Nhận xét được xu hướng biến đổi độ âm điện, bán kính nguyên tử và tính kim loại, phi kim của nguyên tử các nguyên tố trong một chu kì, trong một nhóm (nhóm A). (HH1.6)
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af;">C6, C7</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #1e40af; font-size: 8.5pt;">C2a, C2b</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">Hiểu</td>
            <td style="border: 1px solid #000; padding: 4px;">
              – Nhận xét và giải thích được xu hướng biến đổi độ âm điện, bán kính nguyên tử và tính kim loại, phi kim của nguyên tử các nguyên tố trong một chu kì, trong một nhóm (nhóm A). (HH1.6)
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">C10</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d; font-size: 8.5pt;">C2c, C2d</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #15803d;">C3b</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #b91c1c;">Vận dụng</td>
            <td style="border: 1px solid #000; padding: 4px;">
              – Viết được phương trình hoá học minh hoạ. (HH1.2)
            </td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #b91c1c;">C12</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">-</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; color: #b91c1c;">C3a</td>
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
