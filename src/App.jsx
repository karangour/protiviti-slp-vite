const timeline = [
  { id: 1, month: "JANUARY", colorClass: "bg-cyan-500", textColorClass: "text-cyan-700", title: "LAUNCH SNS 2 & VERSATILITY 2" },
  { id: 2, month: "FEBRUARY", colorClass: "bg-orange-500", textColorClass: "text-orange-500", title: "ORIENTATION SESSION - INDIVIDUAL" },
  { id: 3, month: "FEBRUARY END", colorClass: "bg-gray-500", textColorClass: "text-gray-700", title: "EXECUTIVE COACHING" },
  { id: 4, month: "APRIL", colorClass: "bg-cyan-500", textColorClass: "text-cyan-700", title: "TRAINING 1 - MAKE YOUR PRESENCE FELT" },
  { id: 5, month: "MAY", colorClass: "bg-orange-500", textColorClass: "text-orange-500", title: "MENTORING SESSION" },
  { id: 6, month: "JULY", colorClass: "bg-gray-500", textColorClass: "text-gray-700", title: "TRAINING 2 - CONSULTATIVE SELLING SKILLS/ACCOUNT MANAGEMENT SKILLS" },
  { id: 7, month: "OCTOBER", colorClass: "bg-cyan-500", textColorClass: "text-cyan-700", title: "TRAINING 3 - PRACTICAL & AUTHENTIC LEADERSHIP" },
  { id: 8, month: "JANUARY", colorClass: "bg-orange-500", textColorClass: "text-orange-500", title: "TRAINING 4 - HIGH IMPACT PRESENTATION" },
  { id: 9, month: "FEBRUARY", colorClass: "bg-gray-500", textColorClass: "text-gray-700", title: "CLOSURE REPORT - EXECUTIVE COACHING & MENTORING" },
  { id: 10, month: "MARCH", colorClass: "bg-cyan-500", textColorClass: "text-cyan-700", title: "CLOSURE - SNS 2 & VERSATILITY 2" },
  { id: 11, month: "MARCH END", colorClass: "bg-orange-500", textColorClass: "text-orange-500", title: "INDIVIDUAL DEVELOPMENT REPORT CREATION" },
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
              <h2 className="text-xl sm:text-2xl font-bold mb-3">Program Overview</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                To accelerate the growth and impact of tenured Managing Directors by enhancing their
                strategic leadership capabilities, reinforcing continuous learning mindsets, and aligning
                their role execution with evolving organisational expectations.
              </p>
              <p className="text-slate-700 leading-relaxed">
                This program focuses on deepening their ability to drive business growth, lead complex
                stakeholder ecosystems, foster high-performing teams, and make decisions with clarity and
                accountability in an ever-changing business environment.
              </p>
            </div>

            {/* Context */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3">Context</h2>
              <p className="text-slate-700 mb-2">To build the core competencies of the consulting firm:</p>
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
              <h2 className="text-xl sm:text-2xl font-bold mb-3">Proposed Action</h2>
              <p className="text-slate-700 leading-relaxed">
                A 15 months learning journey which will be a mix of in-person and virtual programs for our leaders.
              </p>
            </div>

            {/* Details table */}
            <div className="rounded-lg border border-slate-400 overflow-hidden bg-white">
              <div className="grid grid-cols-2 divide-x divide-slate-300">
                <div className="border-b border-slate-300 p-4">
                  <div className="text-sm uppercase tracking-wide text-slate-600">Learning Journey</div>
                  <div className="mt-2 font-semibold">15 Months</div>
                </div>
                <div className="border-b border-slate-300 p-4">
                  <div className="text-sm uppercase tracking-wide text-slate-600">Target Audience</div>
                  <div className="mt-2 font-semibold">Managing Directors (24 months and above tenured)</div>
                </div>
                <div className="col-span-2 p-4">
                  <div className="text-sm uppercase tracking-wide text-slate-600">Maximum Participants</div>
                  <div className="mt-2 font-semibold">15</div>
                </div>
              </div>
            </div>
          </section>

          {/* Right column: Program journey timeline */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-6">Program journey</h2>
            <div className="relative bg-blue-50 py-6 px-4 rounded-lg">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-orange-500 to-orange-500"></div>
              
              {/* Timeline items */}
              <div className="relative z-10">
                {timeline.map((item) => (
                  <div key={item.id} className="mb-12 relative pt-2">
                    {/* Timeline node - colored circle in center */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                      <div className={`w-8 h-8 rounded-full ${item.colorClass} border-4 border-white shadow-md`}></div>
                    </div>
                    
                    {/* Content - alternating sides */}
                    <div className="flex w-full">
                      {/* Number indicator - always on opposite side of content */}
                      <div className={`absolute ${item.id % 2 === 1 ? 'right-0' : 'left-0'} flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md z-20`}>
                        <span className="text-xl font-bold text-gray-500">{item.id}</span>
                      </div>
                      
                      {/* Content box - alternating sides */}
                      <div className={`${item.id % 2 === 1 ? 'ml-0 mr-auto pr-8' : 'mr-0 ml-auto pl-8'} w-5/12 ${item.id % 2 === 1 ? 'text-right' : 'text-left'}`}>
                        {/* Month */}
                        <div className={`text-lg font-bold ${item.textColorClass} mb-1`}>
                          {item.month}
                        </div>
                        
                        {/* Dotted line */}
                        <div className="border-t-2 border-dotted border-gray-400 mb-2"></div>
                        
                        {/* Title */}
                        <div className="font-medium text-sm">
                          {item.title}
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
  )
}

export default App
