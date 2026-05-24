export type Project = {
  name: string;
  description: string;
  liveUrl: string;
  stack: string[];
  status: "Live" | "Complete";
  highlight: string;
};

export const projects: Project[] = [
  {
    name: "Portfolio",
    description:
      "พอร์ตโฟลิโอส่วนตัวโทนพรีเมียมสำหรับนำเสนอผลงานคัดสรร ผ่านหน้าแลนดิ้งที่สะอาด ภาพลักษณ์ชัด และช่องทางติดต่อที่เข้าถึงง่าย",
    liveUrl: "https://portfolio-mauve-xi-64.vercel.app",
    stack: ["Next.js", "Tailwind CSS", "Responsive UI"],
    status: "Live",
    highlight: "โชว์เคสส่วนตัว",
  },
  {
    name: "Thai Business Finder",
    description:
      "หน้าแลนดิ้งที่ออกแบบมาเพื่อค้นพบธุรกิจไทย พร้อมประสบการณ์แบรนด์สีเขียวเข้มที่ดูน่าเชื่อถือและพรีเมียม",
    liveUrl: "https://thai-business-finder.vercel.app",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Complete",
    highlight: "ค้นพบธุรกิจไทย",
  },
  {
    name: "CSS Gradient Studio",
    description:
      "เครื่องมือเฉพาะทางสำหรับออกแบบ CSS gradient ที่ลื่นตา ดูเรียบร้อย และพรีวิวผลลัพธ์ได้แบบเรียลไทม์",
    liveUrl: "https://css-gradient-studio-ruby.vercel.app",
    stack: ["CSS", "Color Tools", "UI Preview"],
    status: "Live",
    highlight: "สตูดิโอทำเกรเดียนต์",
  },
  {
    name: "JSON Forge",
    description:
      "พื้นที่ทำงาน JSON ที่รวดเร็วสำหรับจัดรูปแบบ ตรวจสอบ และปรับโครงข้อมูลให้เข้าใจง่ายและเป็นระเบียบ",
    liveUrl: "https://json-forge-nu.vercel.app",
    stack: ["TypeScript", "Data Tools", "Formatter"],
    status: "Live",
    highlight: "เครื่องมือจัดการ JSON",
  },
  {
    name: "Meta Tag Wizard",
    description:
      "เครื่องมือใช้งานจริงสำหรับสร้าง SEO metadata ที่สะอาด พร้อมแท็กสำหรับแชร์หน้าเว็บได้อย่างมั่นใจ",
    liveUrl: "https://meta-tag-wizard.vercel.app",
    stack: ["SEO", "Metadata", "Web Utility"],
    status: "Live",
    highlight: "ผู้ช่วยงาน SEO",
  },
  {
    name: "Palette Craft",
    description:
      "เครื่องมือสำรวจพาเลตสีสำหรับสร้างชุดสีที่สมดุล ใช้กับแบรนด์ได้จริง และเลือกต่อได้อย่างมั่นใจ",
    liveUrl: "https://palette-craft-theta.vercel.app",
    stack: ["Color Systems", "Design", "Frontend"],
    status: "Live",
    highlight: "สตูดิโอพาเลตสี",
  },
  {
    name: "Regex Lab",
    description:
      "พื้นที่ทดลอง regex แบบอินเทอร์แอคทีฟสำหรับทดสอบแพตเทิร์น ตรวจผลการจับคู่ และปรับแก้ได้อย่างเป็นระบบ",
    liveUrl: "https://regex-lab-two.vercel.app",
    stack: ["Regex", "Developer Tool", "Validation"],
    status: "Live",
    highlight: "แล็บทดสอบแพตเทิร์น",
  },
];
