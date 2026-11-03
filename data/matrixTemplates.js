// data/matrixTemplates.js
// Khung Ma Trận & Bản Đặc Tả Đề Kiểm Tra Giữa Kì 1 - Hóa Học 12
// Chuẩn 100% theo văn bản chính thức của Trường THPT Bùi Thị Xuân - Mũi Né (2025 - 2026 / 2026 - 2027)

const matrixTemplates = [
  {
    id: "gk1_official_btx",
    name: "MA TRẬN & ĐẶC TẢ KIỂM TRA GIỮA KÌ 1 - HÓA HỌC 12 (BÙI THỊ XUÂN - MŨI NÉ)",
    school: "TRƯỜNG THPT BÙI THỊ XUÂN – MŨI NÉ",
    grade: "HÓA HỌC 12",
    term: "KIỂM TRA GIỮA KÌ 1 (2025 – 2026 / 2026 – 2027)",
    timeMinutes: 45,
    scope: "Gồm 3 chương: Chương Ester - lipid, Carbohydrate, Hợp chất chứa nitrogen",
    ratio: "70% Trắc nghiệm (7,0 đ) + 30% Tự luận (3,0 đ)",
    levels: "40% Nhận biết (4,0 đ) - 30% Thông hiểu (3,0 đ) - 30% Vận dụng (3,0 đ)",
    structure: {
      part1: { name: "Phần I: TNKQ Nhiều lựa chọn", count: 12, pointsPerQuestion: 0.25, totalPoints: 3.0 },
      part2: { name: "Phần II: TNKQ Đúng - Sai", count: 2, totalPoints: 2.0 },
      part3: { name: "Phần III: TNKQ Trả lời ngắn", count: 4, pointsPerQuestion: 0.5, totalPoints: 2.0 },
      part4: { name: "Phần IV: Tự luận", count: 2, totalPoints: 3.0 }
    },
    // Khung ma trận chi tiết theo bảng chính thức
    matrixTable: [
      {
        stt: 1,
        topic: "ESTER – LIPID (4 tiết)",
        items: [
          {
            name: "Ester - lipid",
            part1: { biet: 2, hieu: 0, vd: 0 },
            part2: { biet: "2/4", hieu: "1/4", vd: "1/4" },
            part3: { biet: 0, hieu: 0, vd: 0 },
            part4: { biet: 0, hieu: 0, vd: 0 },
            totalCount: "4 Biết, 1 Hiểu, 1 VD",
            totalPoints: 1.5
          },
          {
            name: "Xà phòng và chất giặt rửa",
            part1: { biet: 2, hieu: 0, vd: 0 },
            part2: { biet: 0, hieu: 0, vd: 0 },
            part3: { biet: 0, hieu: 1, vd: 0 },
            part4: { biet: 0, hieu: 0, vd: 1 },
            totalCount: "2 Biết, 1 Hiểu, 1 VD",
            totalPoints: 2.0
          }
        ]
      },
      {
        stt: 2,
        topic: "CARBOHYDRATE (6 tiết)",
        items: [
          {
            name: "Glucose và fructose",
            part1: { biet: 1, hieu: 1, vd: 0 },
            part2: { biet: 0, hieu: 0, vd: 0 },
            part3: { biet: 0, hieu: 0, vd: 0 },
            part4: { biet: 0, hieu: 0, vd: 0 },
            totalCount: "1 Biết, 1 Hiểu",
            totalPoints: 0.5
          },
          {
            name: "Saccharose và maltose",
            part1: { biet: 1, hieu: 1, vd: 0 },
            part2: { biet: 0, hieu: 0, vd: 0 },
            part3: { biet: 0, hieu: 0, vd: 0 },
            part4: { biet: 0, hieu: 0, vd: 0 },
            totalCount: "1 Biết, 1 Hiểu",
            totalPoints: 0.5
          },
          {
            name: "Tinh bột và cellulose",
            part1: { biet: 1, hieu: 1, vd: 0 },
            part2: { biet: 0, hieu: 0, vd: 0 },
            part3: { biet: 0, hieu: 0, vd: 0 },
            part4: { biet: 0, hieu: 0, vd: 1 },
            totalCount: "1 Biết, 1 Hiểu, 1 VD",
            totalPoints: 2.0
          },
          {
            name: "Tổng hợp chương 2",
            part1: { biet: 0, hieu: 0, vd: 0 },
            part2: { biet: 0, hieu: 0, vd: 0 },
            part3: { biet: 1, hieu: 0, vd: 0 },
            part4: { biet: 0, hieu: 1, vd: 0 },
            totalCount: "1 Biết, 1 Hiểu",
            totalPoints: 1.0
          }
        ]
      },
      {
        stt: 3,
        topic: "HỢP CHẤT CHỨA NITROGEN (2 tiết)",
        items: [
          {
            name: "Amine",
            part1: { biet: 1, hieu: 0, vd: 0 },
            part2: { biet: "2/4", hieu: "1/4", vd: "1/4" },
            part3: { biet: 0, hieu: 0, vd: 1 },
            part4: { biet: 0, hieu: 0, vd: 0 },
            totalCount: "3 Biết, 1 Hiểu, 2 VD",
            totalPoints: 1.75
          },
          {
            name: "Amino acid và peptide",
            part1: { biet: 0, hieu: 1, vd: 0 },
            part2: { biet: 0, hieu: 0, vd: 0 },
            part3: { biet: 1, hieu: 0, vd: 0 },
            part4: { biet: 0, hieu: 0, vd: 0 },
            totalCount: "1 Biết, 1 Hiểu",
            totalPoints: 0.75
          }
        ]
      }
    ],
    // Bản đặc tả chi tiết yêu cầu cần đạt
    specifications: [
      {
        chapter: "ESTER – LIPID",
        lesson: "Ester - lipid",
        levels: [
          {
            level: "Nhận biết",
            target: "- Biết được công thức cấu tạo và gọi được tên một số ester đơn giản (số nguyên tử C trong phân tử ≤ 3) và thường gặp.\n- Biết được cấu tạo của chất béo.",
            questions: "Phần I: 2 câu ; Phần II: 2/4 ý"
          },
          {
            level: "Thông hiểu",
            target: "- Trình bày được đặc điểm về tính chất vật lí và tính chất hoá học cơ bản của ester (phản ứng thuỷ phân) và của chất béo (phản ứng thuỷ phân, phản ứng hydrogen hoá chất béo lỏng).",
            questions: "Phần II: 1/4 ý ; Phần III: 1 câu"
          },
          {
            level: "Vận dụng",
            target: "- Trình bày được đặc điểm về tính chất vật lí và tính chất hoá học cơ bản của ester (phản ứng thuỷ phân) và của chất béo (phản ứng hydrogen hoá chất béo lỏng, phản ứng oxi hoá chất béo bởi oxygen không khí).",
            questions: "Phần II: 1/4 ý"
          }
        ]
      },
      {
        chapter: "ESTER – LIPID",
        lesson: "Xà phòng và chất giặt rửa",
        levels: [
          {
            level: "Nhận biết",
            target: "- Nêu được khái niệm về xà phòng và chất giặt rửa tổng hợp.",
            questions: "Phần I: 2 câu"
          },
          {
            level: "Thông hiểu",
            target: "- Nêu được đặc điểm về cấu tạo và tính chất chất giặt rửa của xà phòng và chất giặt rửa tự nhiên, tổng hợp.",
            questions: "Phần III: 1 câu"
          },
          {
            level: "Vận dụng",
            target: "- Vận dụng phương pháp sản xuất tính được khối lượng xà phòng cần thiết.",
            questions: "Phần IV: 1 câu (Tự luận)"
          }
        ]
      },
      {
        chapter: "CARBOHYDRATE (6 tiết)",
        lesson: "Glucose và fructose",
        levels: [
          {
            level: "Nhận biết",
            target: "- Nêu được khái niệm, cách phân loại carbohydrate, trạng thái tự nhiên của glucose, fructose.",
            questions: "Phần I: 1 câu (hoặc 2 câu)"
          },
          {
            level: "Thông hiểu",
            target: "- Trình bày được tính chất hóa học cơ bản của glucose, fructose (tác dụng Cu(OH)2, tráng bạc, phân biệt với bromine).",
            questions: "Phần I: 1 câu"
          }
        ]
      },
      {
        chapter: "CARBOHYDRATE (6 tiết)",
        lesson: "Saccharose và maltose",
        levels: [
          {
            level: "Nhận biết",
            target: "- Nêu được trạng thái tự nhiên của saccharose, maltose.",
            questions: "Phần I: 1 câu"
          },
          {
            level: "Thông hiểu",
            target: "- Trình bày được tính chất hoá học cơ bản của saccharose (phản ứng với copper(II) hydroxide, phản ứng thuỷ phân).",
            questions: "Phần I: 1 câu"
          }
        ]
      },
      {
        chapter: "CARBOHYDRATE (6 tiết)",
        lesson: "Tinh bột và cellulose",
        levels: [
          {
            level: "Nhận biết",
            target: "- Nêu được trạng thái tự nhiên, công thức của tinh bột và cellulose.",
            questions: "Phần I: 1 câu"
          },
          {
            level: "Thông hiểu",
            target: "- Trình bày đặc điểm cấu tạo (amylose, amylopectin), tính chất thủy phân và phản ứng tạo màu với iodine.",
            questions: "Phần I: 1 câu"
          },
          {
            level: "Vận dụng",
            target: "- Thực hiện/giải thích thí nghiệm thủy phân tinh bột, cellulose; tính toán bài toán lên men sản xuất ethanol xăng sinh học E5 / nhu cầu tinh bột gạo.",
            questions: "Phần IV: 1 câu (Tự luận)"
          }
        ]
      },
      {
        chapter: "CARBOHYDRATE (6 tiết)",
        lesson: "Tổng hợp chương 2",
        levels: [
          {
            level: "Nhận biết",
            target: "- Phân loại nhóm carbohydrate, số chất tham gia thủy phân, phân tử khối monosaccharide/disaccharide.",
            questions: "Phần III: 1 câu"
          },
          {
            level: "Thông hiểu",
            target: "- Trình bày được tính chất hoá học cơ bản của các carbohydrate (phản ứng với Cu(OH)2, thủy phân, tráng gương, chuyển hóa tinh bột trong cơ thể).",
            questions: "Phần IV: 1 câu (Tự luận - 1,0 đ)"
          }
        ]
      },
      {
        chapter: "HỢP CHẤT CHỨA NITROGEN (2 tiết)",
        lesson: "Amine",
        levels: [
          {
            level: "Nhận biết",
            target: "- Nêu được khái niệm amine, đặc điểm tính chất vật lí (trạng thái, nhiệt độ sôi, khả năng hòa tan).",
            questions: "Phần I: 1 câu ; Phần II: 2/4 ý"
          },
          {
            level: "Thông hiểu",
            target: "- Trình bày được tính chất hoá học đặc trưng của amine: tính base với quỳ tím, HCl, FeCl3; phản ứng với HNO2, phản ứng thế nhân thơm với bromine, tạo phức với Cu(OH)2.",
            questions: "Phần II: 1/4 ý"
          },
          {
            level: "Vận dụng",
            target: "- Thực nghiệm/mô tả hiện tượng giải thích tính chất hóa học amine; tính toán xác định công thức amine dựa trên thành phần nguyên tố và phân tử khối.",
            questions: "Phần II: 1/4 ý ; Phần III: 1 câu (Tính toán)"
          }
        ]
      },
      {
        chapter: "HỢP CHẤT CHỨA NITROGEN (2 tiết)",
        lesson: "Amino acid và peptide",
        levels: [
          {
            level: "Nhận biết",
            target: "- Nêu được khái niệm amino acid, amino acid thiên nhiên, thông dụng, cấu tạo ion lưỡng cực, liên kết peptide.",
            questions: "Phần III: 1 câu"
          },
          {
            level: "Thông hiểu",
            target: "- Trình bày tính chất hóa học đặc trưng: tính lưỡng tính, phản ứng ester hóa, trùng ngưng, phản ứng màu biuret.",
            questions: "Phần I: 1 câu"
          }
        ]
      }
    ]
  }
];

module.exports = {
  matrixTemplates
};
