const { createCanvas } = require('@napi-rs/canvas');
const fs = require('fs');

fs.mkdirSync('./public/images', { recursive: true });
fs.copyFileSync('./extracted_images/img_1.jpg', './public/images/pho_khoi_luong_ne_goc.jpg');

const scale = 2;
const w = 440 * scale;
const h = 320 * scale;
const canvas = createCanvas(w, h);
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#ffffff';
ctx.fillRect(0, 0, w, h);

const ox = 75 * scale;
const oy = 265 * scale;
const aw = 320 * scale;
const ah = 210 * scale;

// Axes
ctx.strokeStyle = '#000000';
ctx.lineWidth = 1.8 * scale;

// Y axis
ctx.beginPath();
ctx.moveTo(ox, oy);
ctx.lineTo(ox, oy - ah);
ctx.stroke();

// X axis
ctx.beginPath();
ctx.moveTo(ox, oy);
ctx.lineTo(ox + aw, oy);
ctx.stroke();

// Y ticks
ctx.font = (12 * scale) + 'px Arial';
ctx.fillStyle = '#000000';
ctx.textAlign = 'right';
ctx.textBaseline = 'middle';
const yVals = [0, 25, 50, 75, 100];
yVals.forEach(v => {
  const y = oy - (v / 100) * (ah - 20 * scale);
  ctx.beginPath();
  ctx.moveTo(ox - 6 * scale, y);
  ctx.lineTo(ox, y);
  ctx.stroke();
  ctx.fillText(v.toString(), ox - 8 * scale, y);
});

// Y Title
ctx.save();
ctx.translate(24 * scale, oy - ah / 2);
ctx.rotate(-Math.PI / 2);
ctx.textAlign = 'center';
ctx.font = 'italic ' + (13 * scale) + 'px Arial';
ctx.fillText('Tỉ lệ % số nguyên tử', 0, 0);
ctx.restore();

// X ticks
ctx.textAlign = 'center';
ctx.textBaseline = 'top';
const xVals = [0, 10, 20, 30, 40];
xVals.forEach(v => {
  const x = ox + (v / 40) * (aw - 30 * scale);
  ctx.beginPath();
  ctx.moveTo(x, oy);
  ctx.lineTo(x, oy + 6 * scale);
  ctx.stroke();
  ctx.fillText(v.toString(), x, oy + 8 * scale);
});

// X Title
ctx.font = 'italic ' + (13 * scale) + 'px Arial';
ctx.fillText('m/z (*)', ox + aw - 10 * scale, oy + 8 * scale);

const getX = v => ox + (v / 40) * (aw - 30 * scale);
const getY = p => oy - (p / 100) * (ah - 20 * scale);

// Peak 20 (90,0%)
const x20 = getX(20);
const y20 = getY(90.0);
ctx.lineWidth = 2.2 * scale;
ctx.beginPath();
ctx.moveTo(x20, oy);
ctx.lineTo(x20, y20);
ctx.stroke();

ctx.font = 'bold ' + (12.5 * scale) + 'px Arial';
ctx.textAlign = 'center';
ctx.fillText('²⁰₁₀Ne (90,0%)', x20, y20 - 14 * scale);

// Peak 21 (1,0%)
const x21 = getX(21);
const y21 = getY(1.0);
ctx.beginPath();
ctx.moveTo(x21, oy);
ctx.lineTo(x21, y21);
ctx.stroke();

// Red pointer
ctx.strokeStyle = '#dc2626';
ctx.lineWidth = 1.0 * scale;
ctx.beginPath();
ctx.moveTo(x21, oy - 2 * scale);
ctx.quadraticCurveTo(x21 - 25 * scale, oy - 15 * scale, x21 - 42 * scale, oy - 20 * scale);
ctx.stroke();

ctx.fillStyle = '#dc2626';
ctx.font = 'bold ' + (11.5 * scale) + 'px Arial';
ctx.textAlign = 'right';
ctx.fillText('²¹₁₀Ne (1,0%)', x21 - 45 * scale, oy - 24 * scale);

// Peak 22 (9,0%)
ctx.strokeStyle = '#000000';
ctx.lineWidth = 2.2 * scale;
const x22 = getX(22);
const y22 = getY(9.0);
ctx.beginPath();
ctx.moveTo(x22, oy);
ctx.lineTo(x22, y22);
ctx.stroke();

ctx.fillStyle = '#000000';
ctx.font = 'bold ' + (11.5 * scale) + 'px Arial';
ctx.textAlign = 'left';
ctx.fillText('²²₁₀Ne (9,0%)', x22 + 6 * scale, y22 - 12 * scale);

const bufHD = canvas.toBuffer('image/png');
fs.writeFileSync('./public/images/pho_khoi_luong_ne.png', bufHD);
console.log('Saved pho_khoi_luong_ne.png successfully! Size:', bufHD.length);
