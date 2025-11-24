import Image from "next/image"

export function EducationSection() {
  return (
    <section id="education" className="w-full bg-[#0f0f0f] px-4 py-14 text-slate-100 sm:px-6">
      <div className="mx-auto max-w-6xl space-y-8">
        <h3 className="text-lg font-semibold sm:text-xl">Education</h3>

        {/* UCD */}
        <div className="rounded-2xl border border-[#1f1f1f] bg-[#121212] p-6 shadow-lg">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <div className="shrink-0">
              <Image
                src="/logos/ucd-logo.png"
                alt="UCD logo"
                width={240}
                height={240}
                className="h-40 w-auto"
              />
            </div>

            <div>
              <h4 className="text-2xl font-bold text-white">University College Dublin</h4>
              <p className="mt-1 text-base text-slate-300">
                <strong>BSc Computer Science with Data Science &amp; AI</strong>
              </p>
              <p className="text-sm text-slate-400">Sep 2023 - May 2027</p>
              <p className="text-sm text-slate-300">Dublin, Ireland</p>
            </div>
          </div>

          <div className="mt-6">
            <div className="grid gap-6 sm:ml-[11rem] sm:grid-cols-2">
              {/* Highlights */}
              <div>
                <h5 className="mb-2 text-lg font-semibold text-white">Highlights</h5>
                <ul className="space-y-2 text-sm leading-relaxed text-slate-300">
                  <li>• Class Representative for ~150 students</li>
                  <li>• Student Rep — Science Taught Programmes Board</li>
                  <li>• UCD NetSoc Ordinary Committee Member</li>
                  <li>• Peer Mentor &amp; Access Leader</li>
                </ul>
              </div>

              {/* Technical Coursework */}
              <div>
                <h5 className="mb-2 text-lg font-semibold text-white">Technical Coursework</h5>
                <ul className="space-y-2 text-sm leading-relaxed text-slate-300">
                  <li>• Data Structures &amp; Algorithms</li>
                  <li>• Operating Systems (C, RISC-V)</li>
                  <li>• Machine Learning &amp; AI</li>
                  <li>• Database Systems &amp; SQL</li>
                  <li>• Computer Networks</li>
                  <li>• Software Engineering Principles</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* BFEI */}
        <div className="rounded-2xl border border-[#1f1f1f] bg-[#121212] p-6 shadow-lg">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <div className="shrink-0 ml-1 sm:ml-3">
              <Image
                src="/logos/bfei-logo.png"
                alt="BFEI logo"
                width={200}
                height={200}
                className="h-40 w-auto"
              />
            </div>

            <div>
              <h4 className="text-2xl font-bold text-white">Blackrock Further Education Institute</h4>
              <p className="mt-1 text-base text-slate-300">
                <strong>QQI Level 5 Certificate in Software Development — Full Distinctions (Top Grade)</strong>
                <br />
                Sep 2022 — May 2023
                <br />
                Dublin, Ireland
              </p>
            </div>
          </div>

          <div className="mt-6 sm:pl-10">
            <h5 className="mb-2 text-lg font-semibold text-white">Focus Areas</h5>
            <ul className="space-y-2 text-sm leading-relaxed text-slate-300">
              <li>• Built strong foundations in software development and programming</li>
              <li>• Developed problem-solving, study skills, and academic discipline</li>
              <li>• Provided the groundwork to progress into Computer Science at UCD</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
