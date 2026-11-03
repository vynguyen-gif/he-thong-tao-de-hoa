const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, 'public', 'app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');

const startMarker = '// Sinh Bảng Đặc Tả Kĩ Thuật HTML cho một đề thi cụ thể';
const endMarker = '// Hiển thị Ma trận & Bản đặc tả của đề thi đang chọn';

const sIdx = appJs.indexOf(startMarker);
const eIdx = appJs.indexOf(endMarker);

if (sIdx === -1 || eIdx === -1) {
  console.error('Markers not found!');
  process.exit(1);
}

const newSpecCode = `// Sinh Bảng Đặc Tả Kĩ Thuật HTML cho một đề thi cụ thể (Chuẩn 100% 9 Cột GDPT 2018)
function generateExamSpecHTML(exam) {
  if (!exam) return '';
  if (exam.specHtml) return exam.specHtml;
  const examGrade = exam.gradeNum || exam.grade || currentGrade || '12';
  const code = exam.examCode || '101';
  const school = exam.school || 'TRƯỜNG THPT BÙI THỊ XUÂN – MŨI NÉ';

  // Fallback nếu chưa có sẵn specHtml từ server
  return \`
    <div style="margin-top: 25px; margin-bottom: 25px; page-break-inside: avoid;">
      <table style="width: 100%; border-collapse: collapse; border: none; margin-bottom: 12px;">
        <tr>
          <td style="width: 45%; vertical-align: top; text-align: center; border: none; font-size: 11pt;">
            <strong>SỞ GIÁO DỤC VÀ ĐÀO TẠO</strong><br>
            <strong>\${school.toUpperCase()}</strong><br>
            <span style="font-size: 10pt; font-style: italic;">Tổ: Hóa - Sinh - KTNN</span>
            <div style="width: 120px; height: 1px; background-color: #000; margin: 3px auto;"></div>
          </td>
          <td style="width: 55%; vertical-align: top; text-align: center; border: none; font-size: 11pt;">
            <strong>BẢN ĐẶC TẢ ĐỀ KIỂM TRA GIỮA HỌC KÌ I</strong><br>
            <strong>MÔN: HÓA HỌC \${examGrade} – MÃ ĐỀ: \${code}</strong><br>
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
  \`;
}

`;

appJs = appJs.substring(0, sIdx) + newSpecCode + appJs.substring(eIdx);

// Cũng cập nhật tiêu đề mục II trong renderMatrixGK1
appJs = appJs.replace(
  'II. BẢNG ĐẶC TẢ KĨ THUẬT VÀ TRÍCH XUẤT CÂU HỎI MÃ ĐỀ:',
  'II. BẢN ĐẶC TẢ ĐỀ KIỂM TRA MÃ ĐỀ:'
);

fs.writeFileSync(appJsPath, appJs, 'utf8');
console.log('Successfully updated public/app.js!');
