@echo off
title KHOI TAO VA DAY CODE LEN GITHUB
chcp 65001 >nul
cd /d "%~dp0"

echo =======================================================
echo    KHOI TAO VA DAY CODE LEN GITHUB: vynguyen-gif/he-thong-tao-de-hoa
echo =======================================================
echo.

git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [THONG BAO] May tinh cua ban chua co phan mem Git!
    echo He thong dang tu dong mo trang tai Git cho ban...
    start https://git-scm.com/download/win
    echo.
    echo Sau khi tai ve va cai dat Git xong, ban chi can nhap dup chuot chay lai file nay nhe!
    echo.
    pause
    exit /b
)

echo [1/5] Dang khoi tao Git...
if not exist ".git" (
    git init
)

echo [2/5] Dang chuan bi toan bo ma nguon...
git add .
git commit -m "Khoi tao he thong tao de thi Hoa hoc"

echo [3/5] Chuyen sang nhanh main...
git branch -M main

echo [4/5] Ket noi toi GitHub cua ban (vynguyen-gif/he-thong-tao-de-hoa)...
git remote remove origin >nul 2>&1
git remote add origin https://github.com/vynguyen-gif/he-thong-tao-de-hoa.git

echo [5/5] Dang day toan bo du an len GitHub...
echo * Luu y: Neu hien cua so dang nhap GitHub tren trinh duyet, ban hay chon "Sign in with your browser" de xac nhan.
git push -u origin main

echo.
echo =======================================================
echo [HOAN TAT] Du an da duoc day len GitHub thanh cong!
echo Buoc tiep theo: Sang Vercel.com de Import kho he-thong-tao-de-hoa.
echo =======================================================
echo.
pause
