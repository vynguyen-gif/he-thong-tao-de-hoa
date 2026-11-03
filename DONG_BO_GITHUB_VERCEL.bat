@echo off
title DONG BO GITHUB VA VERCEL - HE THONG TAO DE THI
chcp 65001 >nul
cd /d "%~dp0"

echo =======================================================
echo    DONG BO MA NGUON LEN GITHUB VA TU DONG DEPLOY VERCEL
echo =======================================================
echo.

git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [CANH BAO] May cua ban chua co lenh 'git'.
    echo Vui long cai dat Git hoac kiem tra lai duong dan Git.
    echo.
    pause
    exit /b
)

echo [1/3] Kiem tra cac tap tin thay doi:
git status -s

echo.
set /p commitMsg="Nhap mo ta cap nhat (Bam Enter de dung mac dinh: 'Cap nhat he thong de thi'): "
if "%commitMsg%"=="" set commitMsg=Cap nhat he thong de thi

echo.
echo [2/3] Dang luu thay doi (Git Commit)...
git add .
git commit -m "%commitMsg%"

echo.
echo [3/3] Dang day code len GitHub (Git Push)...
git push origin main 2>nul
if %errorlevel% neq 0 (
    git push origin master
)

echo.
echo =======================================================
echo [HOAN TAT] Code da duoc day len GitHub thanh cong!
echo Vercel se TU DONG build va cap nhat trang web sau 30-60 giay.
echo =======================================================
echo.
pause
