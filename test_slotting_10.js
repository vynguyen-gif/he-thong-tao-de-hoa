const { questionBank10 } = require('./data/questionBank10');

// Map questions into 12 matrix slots
const slots = {
  slot1_c1_biet_tpnt: ['g10_p1_02', 'g10_p1_14', 'g10_p1_25', 'g10_p1_37', 'g10_p1_26'],
  slot2_c2_biet_nthh_dv: ['g10_p1_04', 'g10_p1_16', 'g10_p1_28', 'g10_p1_38', 'g10_p1_42'],
  slot3_c3_biet_vo_e: ['g10_p1_03', 'g10_p1_15', 'g10_p1_27', 'g10_p1_09', 'g10_p1_45'],
  slot4_c4_biet_ct_bth: ['g10_p1_05', 'g10_p1_17', 'g10_p1_29', 'g10_p1_43', 'g10_p1_35'],
  slot5_c5_biet_ct_bth: ['g10_p1_06', 'g10_p1_18', 'g10_p1_31', 'g10_p1_10', 'g10_p1_11'],
  slot6_c6_biet_xuhuong: ['g10_p1_49', 'g10_p1_50', 'g10_p1_51', 'g10_p1_52', 'g10_p1_57'],
  slot7_c7_biet_xuhuong: ['g10_p1_58', 'g10_p1_22', 'g10_p1_36', 'g10_p1_01', 'g10_p1_13'],
  slot8_c8_hieu_vo_e: ['g10_p1_08', 'g10_p1_21', 'g10_p1_33', 'g10_p1_39', 'g10_p1_46'],
  slot9_c9_hieu_ct_bth: ['g10_p1_12', 'g10_p1_24', 'g10_p1_30', 'g10_p1_34', 'g10_p1_44'],
  slot10_c10_hieu_xuhuong: ['g10_p1_53', 'g10_p1_54', 'g10_p1_55', 'g10_p1_56', 'g10_p1_59'],
  slot11_c11_vd_tpnt: ['g10_p1_07', 'g10_p1_19', 'g10_p1_23', 'g10_p1_41', 'g10_p1_48'],
  slot12_c12_vd_xuhuong: ['g10_p1_60', 'g10_p1_20', 'g10_p1_32', 'g10_p1_40', 'g10_p1_47']
};

const slotKeys = Object.keys(slots);
console.log('Total slots:', slotKeys.length);

const suites_p1 = [[], [], [], [], []];
for (let s = 0; s < 5; s++) {
  slotKeys.forEach(k => {
    suites_p1[s].push(slots[k][s]);
  });
}

console.log('Verification: All 5 suites have 12 questions:');
suites_p1.forEach((suite, idx) => {
  console.log(`Suite ${idx + 1}: ${suite.length} questions: ${suite.join(', ')}`);
});

// Check overlap
const used = new Set();
let hasOverlap = false;
suites_p1.forEach(suite => {
  suite.forEach(id => {
    if (used.has(id)) {
      console.error('OVERLAP DETECTED:', id);
      hasOverlap = true;
    }
    used.add(id);
  });
});
console.log('Total unique P1 questions used:', used.size, 'Has overlap:', hasOverlap);
