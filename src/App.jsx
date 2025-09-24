const timeline = [
  {
    id: 1,
    month: "JANUARY",
    colorClass: "bg-cyan-500",
    borderClass: "border-cyan-500",
    textColorClass: "text-cyan-700",
    title: "LAUNCH SNS 2 & VERSATILITY 2",
  },
  {
    id: 2,
    month: "FEBRUARY",
    colorClass: "bg-orange-500",
    borderClass: "border-orange-500",
    textColorClass: "text-orange-500",
    title: "ORIENTATION SESSION - INDIVIDUAL",
  },
  {
    id: 3,
    month: "FEBRUARY END",
    colorClass: "bg-gray-500",
    borderClass: "border-gray-500",
    textColorClass: "text-gray-700",
    title: "EXECUTIVE COACHING",
  },
  {
    id: 4,
    month: "APRIL",
    colorClass: "bg-cyan-500",
    borderClass: "border-cyan-500",
    textColorClass: "text-cyan-700",
    title: "TRAINING 1 - MAKE YOUR PRESENCE FELT",
  },
  {
    id: 5,
    month: "MAY",
    colorClass: "bg-orange-500",
    borderClass: "border-orange-500",
    textColorClass: "text-orange-500",
    title: "MENTORING SESSION",
  },
  {
    id: 6,
    month: "JULY",
    colorClass: "bg-gray-500",
    borderClass: "border-gray-500",
    textColorClass: "text-gray-700",
    title: "TRAINING 2 - CONSULTATIVE SELLING SKILLS/ACCOUNT MANAGEMENT SKILLS",
  },
  {
    id: 7,
    month: "OCTOBER",
    colorClass: "bg-cyan-500",
    borderClass: "border-cyan-500",
    textColorClass: "text-cyan-700",
    title: "TRAINING 3 - PRACTICAL & AUTHENTIC LEADERSHIP",
  },
  {
    id: 8,
    month: "JANUARY",
    colorClass: "bg-orange-500",
    borderClass: "border-orange-500",
    textColorClass: "text-orange-500",
    title: "TRAINING 4 - HIGH IMPACT PRESENTATION",
  },
  {
    id: 9,
    month: "FEBRUARY",
    colorClass: "bg-gray-500",
    borderClass: "border-gray-500",
    textColorClass: "text-gray-700",
    title: "CLOSURE REPORT - EXECUTIVE COACHING & MENTORING",
  },
  {
    id: 10,
    month: "MARCH",
    colorClass: "bg-cyan-500",
    borderClass: "border-cyan-500",
    textColorClass: "text-cyan-700",
    title: "CLOSURE - SNS 2 & VERSATILITY 2",
  },
  {
    id: 11,
    month: "MARCH END",
    colorClass: "bg-orange-500",
    borderClass: "border-orange-500",
    textColorClass: "text-orange-500",
    title: "INDIVIDUAL DEVELOPMENT REPORT CREATION",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 text-slate-900">
      {/* Header */}
      <header className="py-10">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide drop-shadow">
          SENIOR LEADERSHIP PROGRAM
        </h1>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left column */}
          <section className="space-y-10">
            {/* Program Overview */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3">
                Program Overview
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                To accelerate the growth and impact of tenured Managing
                Directors by enhancing their strategic leadership capabilities,
                reinforcing continuous learning mindsets, and aligning their
                role execution with evolving organisational expectations.
              </p>
              <p className="text-slate-700 leading-relaxed">
                This program focuses on deepening their ability to drive
                business growth, lead complex stakeholder ecosystems, foster
                high-performing teams, and make decisions with clarity and
                accountability in an ever-changing business environment.
              </p>
            </div>

            {/* Context */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3">Context</h2>
              <p className="text-slate-700 mb-2">
                To build the core competencies of the consulting firm:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-slate-800">
                <li>Business and Market Acumen</li>
                <li>Personal Branding</li>
                <li>Value Driven Leadership</li>
                <li>Relationship Acumen</li>
                <li>Tech &amp; Ops Excellence</li>
              </ul>
            </div>

            {/* Proposed Action */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3">
                Proposed Action
              </h2>
              <p className="text-slate-700 leading-relaxed">
                A 15 months learning journey which will be a mix of in-person
                and virtual programs for our leaders.
              </p>
            </div>

            {/* Details table */}
            <div className="rounded-lg border border-slate-400 overflow-hidden bg-white">
              <div className="grid grid-cols-2 divide-x divide-slate-300">
                <div className="border-b border-slate-300 p-4">
                  <div className="text-sm uppercase tracking-wide text-slate-600">
                    Learning Journey
                  </div>
                  <div className="mt-2 font-semibold">15 Months</div>
                </div>
                <div className="border-b border-slate-300 p-4">
                  <div className="text-sm uppercase tracking-wide text-slate-600">
                    Target Audience
                  </div>
                  <div className="mt-2 font-semibold">
                    Managing Directors (24 months and above tenured)
                  </div>
                </div>
                <div className="col-span-2 p-4">
                  <div className="text-sm uppercase tracking-wide text-slate-600">
                    Maximum Participants
                  </div>
                  <div className="mt-2 font-semibold">15</div>
                </div>
              </div>
            </div>
          </section>

          {/* Right column: Program journey timeline */}
          <section className="w-[90%]">
            <h2 className="text-center text-xl sm:text-2xl font-bold mb-2">
              Program journey
            </h2>
            <div className="relative py-2 px-4 rounded-lg">
              {/* Colored connectors will be rendered per item; no global line */}

              {/* Timeline items */}
              <div className="relative z-10">
                {timeline.map((item, idx) => (
                  <div key={item.id} className="relative">
                    {/* Timeline node - colored circle in center */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 transform flex items-center justify-center z-10">
                      <div
                        className={`w-8 h-8 rounded-full bg-white ${item.borderClass} border-4 shadow-md`}
                      ></div>
                    </div>
                    {/* Connector from this circle to the next, matching this circle's color */}
                    {idx < timeline.length - 1 && (
                      <div
                        className={`absolute top-6 left-1/2 h-[120px] -translate-x-1/2 w-1 ${item.colorClass}`}
                      
                        aria-hidden="true"
                      ></div>
                    )}

                    {/* Content - alternating sides */}
                    <div className="flex h-[110px] w-full">
                      {/* Content box - place right for odd, left for even */}
                      <div
                        className={`w-[50%] pt-3 ${
                          item.id % 2 === 1
                            ? "ml-auto text-left"
                            : "mr-auto text-left"
                        }`}
                      >
                        {/* Month */}
                        <div
                          className={`text-[16px] font-bold ${item.textColorClass} mb-1 ml-8`}
                        >
                          {item.month}
                        </div>

                        {/* Dotted line split: short segment towards center, long segment outward with numbered button at end */}
                        <div
                          className={`relative mb-2 flex items-center ${
                            item.id % 2 === 1 ? "" : "flex-row-reverse"
                          }`}
                        >
                        
                          {/* Long outer segment */}
                          <div className="relative flex-1 border-t-2 border-dotted border-gray-400">
                            <button
                              type="button"
                              onClick={() =>
                                console.log("Clicked item", item.id)
                              }
                              className={`absolute top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md ${
                                item.id % 2 === 1
                                  ? "right-[-1.5rem]"
                                  : "left-[-1.5rem]"
                              } cursor-pointer hover:shadow ${item.borderClass.replace(
                                "border-",
                                "ring-"
                              )} focus:outline-none focus:ring-2`}
                              aria-label={`Open details for ${item.month}`}
                            >
                              <span className={`text-xl font-bold ${item.textColorClass}`}>
                                {item.id}
                              </span>
                            </button>
                          </div>
                        </div>

                        {/* Title */}
                        <div className="flex items-center ml-8 w-[180px]">
                        <div className="font-medium text-[14px]">{item.title}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
