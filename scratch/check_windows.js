const cp = require('child_process');
const out = cp.execSync('powershell -NoProfile -Command "Get-Process | Where-Object MainWindowTitle | Select-Object Id, ProcessName, MainWindowTitle | Format-Table -AutoSize"', { encoding: 'utf8' });
console.log(out);
