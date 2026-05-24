import type { Metadata } from "next";
import { projects } from "@/data/projects";

const stats = [
  { label: "โปรเจกต์ที่เสร็จแล้ว", value: `${projects.length} ผลงานออนไลน์` },
  { label: "แกนหลักของงาน", value: "Product • Design • UX" },
  { label: "แพลตฟอร์มเผยแพร่", value: "Vercel" },
];

export const metadata: Metadata = {
  title: "รวมผลงานเว็บโปรเจกต์",
  description:
    "โชว์เคสผลงานเว็บที่เสร็จสมบูรณ์ พร้อมสรุปแนวคิด เทคโนโลยี และลิงก์เปิดชมเวอร์ชันใช้งานจริง",
};

const statusLabel: Record<(typeof projects)[number]["status"], string> = {
  Live: "ออนไลน์",
  Complete: "เสร็จสมบูรณ์",
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07111f] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.35),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.28),_transparent_28%),linear-gradient(180deg,_#07111f_0%,_#030712_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:72px_72px]" />

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
        <header className="grid items-end gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.7)]" />
              รวมผลงานที่เปิดใช้งานจริงแล้ว
            </div>

            <div className="max-w-3xl space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                โชว์เคสโปรเจกต์ระดับพรีเมียม จัดวางครบในหน้าเดียวอย่างสง่างาม
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                สำรวจผลงานที่เสร็จสมบูรณ์พร้อมสรุปที่อ่านง่าย เทคโนโลยีที่ใช้ชัดเจน
                และลิงก์ตรงไปยังประสบการณ์จริงบน Vercel
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                ดูโปรเจกต์ทั้งหมด
              </a>
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                เผยแพร่บน Vercel
              </a>
            </div>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">
              ภาพรวม
            </p>
            <div className="mt-6 space-y-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
                >
                  <span className="text-sm text-slate-400">{stat.label}</span>
                  <span className="text-right text-base font-semibold text-white">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </aside>
        </header>

        <section id="projects" className="space-y-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-sky-300">
                แกลเลอรีโปรเจกต์
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                ทุกผลงานที่เสร็จแล้ว พร้อมเปิดดูได้ทันที
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-400 sm:text-right">
              การ์ดแต่ละใบอ่านข้อมูลจากไฟล์โปรเจกต์ในเครื่อง ทำให้เพิ่ม ลบ
              หรือปรับรายการโชว์เคสได้ง่ายโดยไม่ต้องพึ่งฐานข้อมูล
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-2">
            {projects.map((project, index) => (
              <a
                key={project.name}
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.09]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(96,165,250,0.18),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.14),_transparent_30%)] opacity-70 transition group-hover:opacity-100" />

                <div className="relative flex h-full flex-col gap-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-slate-200">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      {statusLabel[project.status]}
                    </div>
                    <span className="text-sm text-slate-400">0{index + 1}</span>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-medium text-sky-200">{project.highlight}</p>
                    <h3 className="text-2xl font-semibold tracking-tight text-white">
                      {project.name}
                    </h3>
                    <p className="max-w-prose text-sm leading-6 text-slate-300 sm:text-base">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2 text-sm font-medium text-white">
                    <span className="text-slate-300">เปิดดูผลงานจริง</span>
                    <span className="transition-transform group-hover:translate-x-1">↗</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
