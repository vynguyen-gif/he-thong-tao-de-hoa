@echo off
title HE THONG TAO DE THI HOA HOC 10 - 11 - 12
chcp 65001 >nul
cd /d "C:\Users\admin\.gemini\antigravity\scratch\hoa12_exam_generator"
echo ====================================================
echo HỆ THỐNG TẠO ĐỀ THI HÓA HỌC 10 - 11 - 12
echo Đang mở trình duyệt tại: http://localhost:3000
echo Vui lòng giữ cửa sổ này khi đang sử dụng phần mềm.
echo ====================================================
start http://localhost:3000
node server.js
pause
