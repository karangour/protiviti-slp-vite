import { useState } from "react";
import PropTypes from "prop-types";
import programJourneyData from "./program_journey.json";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const { __timeline: timeline } = programJourneyData;

const OrderedList = ({ type, ...props }) => {
  const isAlpha = type === "a";
  const className = `pl-6 mb-2 list-outside ${isAlpha ? "" : "list-decimal"}`;
  const style = isAlpha ? { listStyleType: "lower-alpha" } : undefined;
  return <ol className={className} style={style} {...props} />;
};

OrderedList.propTypes = {
  type: PropTypes.string,
};

function App() {
  const [clickedId, setClickedId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalBgClass, setModalBgClass] = useState("");
  const [modalMonth, setModalMonth] = useState(""); // key used for saving
  const [modalMonthLabel, setModalMonthLabel] = useState(""); // display label in header

  // Fixed 3-color palette applied by index to avoid consecutive duplicates
  const palette = [
    { bg: "bg-cyan-500", border: "border-cyan-500", text: "text-cyan-500" },
    {
      bg: "bg-orange-500",
      border: "border-orange-500",
      text: "text-orange-500",
    },
    { bg: "bg-gray-500", border: "border-gray-500", text: "text-gray-500" },
  ];

  // Click handler extracted from inline button
  const handleTimelineClick = (item, idx) => {
    // Use a different key for next-year items if provided
    const key = item.dataKey || item.month;
    const content = item.description || programJourneyData[key];
    if (content) {
      setModalMonth(key); // actual data key used for saving/mapping
      setModalTitle(item.title);
      setModalContent(content);
      const p = palette[idx % palette.length];
      setModalBgClass(p.bg);
      // Display label: append (NEXT YEAR) only if dataKey indicates it
      const isNextYear = (item.dataKey || "").includes("(NEXT YEAR)");
      setModalMonthLabel(isNextYear ? `${item.month} (NEXT YEAR)` : item.month);
      setModalOpen(true);
    }
  };

  // Details table data (label/value pairs)
  const details = [
    { label: "Learning Journey", value: "15 Months" },
    {
      label: "Target Audience",
      value: "Managing Directors (24 months and above tenured)",
    },
    { label: "Maximum Participants", value: "15" },
  ];
  return (
    <div className="relative overflow-hidden min-h-screen text-slate-900">
      {/* Background image overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-20 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/background_image.jpg')",
          backgroundPosition: "center 30%",
        }}
      />
      {/* Foreground content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="py-10">
          <img
            src="/logo.png"
            alt="Protiviti SLP"
            className="mx-auto mb-6 h-10 sm:h-12 md:h-14 w-auto"
          />
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
                  Directors by enhancing their strategic leadership
                  capabilities, reinforcing continuous learning mindsets, and
                  aligning their role execution with evolving organisational
                  expectations.
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
                <p className="text-slate-700 mb-2 font-bold">
                  To enhance core competencies of a leader:
                </p>
                <ul className="list-disc pl-8 space-y-1 text-slate-800">
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
                <p className="text-slate-700 leading-relaxed mb-6">
                  A 15-month learning journey, which will be a mix of in-person 
                  training programs, coaching and mentoring.
                </p>
                <div className="rounded-lg border border-black overflow-hidden">
                  <dl className="relative divide-y divide-black">
                    {/* Continuous vertical divider */}
                    <div
                      className="absolute inset-y-0 left-1/2 w-px bg-black"
                      aria-hidden="true"
                    ></div>
                    {details.map(({ label, value }) => (
                      <div
                        key={label}
                        className="p-4 grid grid-cols-2 items-start"
                      >
                        <dt className="text-md uppercase tracking-wide text-slate-600 self-center">
                          {label}
                        </dt>
                        <dd className="font-semibold text-md text-left pl-6">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </section>

            {/* Right column: Program journey timeline */}
            <section className="w-[90%] mx-auto">
              <h2 className="text-center text-xl sm:text-2xl font-bold mb-4">
                Program journey
              </h2>
              <div className="relative py-2 px-4 rounded-lg">
                {/* Colored connectors will be rendered per item; no global line */}

                {/* Timeline items */}
                <div className="relative z-10">
                  {timeline.map((item, idx) => {
                    const p = palette[idx % palette.length];
                    return (
                      <div key={item.id} className="relative">
                        {/* Timeline node - colored circle in center */}
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 transform flex items-center justify-center z-30">
                          <div
                            className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white ${p.border} border-4 shadow-md`}
                          ></div>
                        </div>
                        {/* Connector from this circle to the next, matching this circle's color */}
                        {idx < timeline.length && (
                          <div
                            className={`absolute top-4 left-1/2 h-[80px] sm:h-[90px] -translate-x-1/2 w-1 z-20 ${p.bg}`}
                            aria-hidden="true"
                          ></div>
                        )}

                        {/* Content - alternating sides */}
                        <div className="flex h-[80px] sm:h-[90px] w-full">
                          {/* Content box - place right for odd, left for even */}
                          <div
                            className={`w-[50%] ${
                              item.id % 2 === 1
                                ? "ml-auto text-left"
                                : "mr-auto text-left"
                            } cursor-pointer transition-transform duration-200 ease-out relative z-0 ${
                              clickedId === item.id
                                ? "scale-[0.98] shadow-md ring-1 ring-slate-300 ring-offset-1"
                                : ""
                            }`}
                            role="button"
                            tabIndex={0}
                            onMouseDown={() => setClickedId(item.id)}
                            onMouseUp={() => {
                              handleTimelineClick(item, idx);
                              setTimeout(() => setClickedId(null), 150);
                            }}
                            onMouseLeave={() => setClickedId(null)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                handleTimelineClick(item, idx);
                              }
                            }}
                          >
                            {/* Month */}
                            <div
                              className={`text-[13px] sm:text-[16px] font-bold ${
                                p.text
                              } mb-1 ${
                                item.id % 2 === 1 ? "ml-5" : "ml-3"
                              } sm:ml-8`}
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
                              <div className="relative flex-1 border-t-2 border-dotted border-black">
                                {/* Clickable number button with ping animation */}
                                <div
                                  className={`absolute top-1/2 -translate-y-1/2 ${
                                    item.id % 2 === 1
                                      ? "right-[-1.6rem] sm:right-[-1.2rem]"
                                      : "left-[-1.8rem] sm:left-[-1.5rem]"
                                  }`}
                                >
                                  {/* Ping ripple when clicked */}
                                  <span
                                    className={`absolute inset-0 rounded-full ${
                                      p.bg
                                    } opacity-30 ${
                                      clickedId === item.id
                                        ? "animate-ping"
                                        : "hidden"
                                    }`}
                                    aria-hidden="true"
                                  ></span>
                                  <div
                                    className={`relative flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white shadow-md border border-slate-300 ${p.border.replace(
                                      "border-",
                                      "ring-"
                                    )} transition-transform duration-200 ease-out hover:shadow-lg hover:bg-slate-50 hover:scale-105 active:scale-95`}
                                    aria-hidden="true"
                                  >
                                    <span
                                      className={`text-[12px] sm:text-base font-semibold ${p.text}`}
                                    >
                                      {item.id}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Title */}
                            <div
                              className={`flex items-center ${
                                item.id % 2 === 1 ? "ml-5" : "ml-3"
                              }  sm:ml-8 w-[110px] sm:w-[200px]`}
                            >
                              <div className="font-medium sm:font-normal text-[11px] sm:text-[14px]">
                                {item.title}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          {/* Background overlay */}
          <div
            className="absolute inset-0 bg-gray-500/75"
            aria-hidden="true"
            onClick={() => setModalOpen(false)}
          ></div>

          {/* Modal panel */}
          <div className="relative w-full max-w-lg overflow-hidden bg-white rounded-lg shadow-xl">
            <div
              className={`w-full h-[50px] ${modalBgClass} flex items-center justify-center`}
            >
              <h3
                className={`text-xl font-bold leading-6 text-center text-white`}
              >
                {modalMonthLabel || modalMonth}
              </h3>
            </div>
            <div className="px-6 py-5">
              <div className="text-base font-bold text-center text-gray-900 mb-3">
                {modalTitle}
              </div>
              <div className="mt-2 text-sm text-gray-800 leading-relaxed prose prose-sm max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    ol: OrderedList,
                    ul: (props) => (
                      <ul className="list-disc pl-6 mb-2" {...props} />
                    ),
                    li: (props) => <li className="mb-1 pl-1" {...props} />,
                    br: () => (
                      <span className="block h-1" aria-hidden="true"></span>
                    ),
                  }}
                >
                  {modalContent.replace(/\n/g, "<br />\n")}
                </ReactMarkdown>
              </div>
            </div>
            <div className="px-6 py-3 bg-gray-50 flex justify-end gap-3">
              <button
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() => setModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
