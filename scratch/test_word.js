const { execSync } = require('child_process');
try {
  const res = execSync('powershell -Command "$w = New-Object -ComObject Word.Application; $v = $w.Version; $w.Quit(); Write-Output $v"').toString();
  console.log('Word Version:', res.trim());
} catch(e) {
  console.log('Word not available via COM:', e.message);
}
