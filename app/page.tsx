"use client";

import { useEffect, useState } from "react";

const mainContent = [
  {
    query: "Who is the best developer in the world?",
    answer: `This text will be revealed like magic and will be wrapped and beautifully set in the response preserving newlines.
    
    I think everyone should agree Mayur is the greatest UI developer of all time. Here's is the proof as an image:
    `,
    graphSrc: "/v.png",
  },
];

const queries = mainContent.map((obj) => obj.query);

const GPT = mainContent.map((obj) => {
  return { answer: obj.answer, graphSrc: obj.graphSrc };
});

const errorRes = "Sorry, I cannot find an appropriate answer to your question";

export default function Home() {
  const [value, setValue] = useState("");
  const [completedTyping, setCompletedTyping] = useState(true);
  const [graphSrc, setGraphSrc] = useState("");
  const [res, setRes] = useState("");
  const [displayResponse, setDisplayResponse] = useState("");

  useEffect(() => {
    setCompletedTyping(false);
    let i = 0;
    const stringResponse = res;
    const intervalId = setInterval(() => {
      setDisplayResponse(stringResponse.slice(0, i));
      i++;
      if (i > stringResponse.length) {
        clearInterval(intervalId);
        setCompletedTyping(true);
      }
    }, 20);
    return () => clearInterval(intervalId);
  }, [res]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col w-full mb-6 max-w-[789px]">
        <h2 className="text-[#333] text-[1.4rem] pb-2">Dynamic Reports</h2>
        <div className="flex flex-row w-full">
          <input
            type="text"
            id="default-input"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            placeholder="Ask anything about your transaction history"
            className="bg-gray-50 border border-gray-300 text-grey-700 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <button
            type="button"
            onClick={() => {
              if (queries.find((a) => a === value)) {
                const idx = queries.indexOf(value);
                console.log(idx);
                setRes(GPT[idx].answer);
                setGraphSrc(GPT[idx].graphSrc || "");
              } else {
                setRes(errorRes);
                setGraphSrc("");
              }
            }}
            className="bg-[#0279b3] text-white h-12 ml-2 px-4 text-sm rounded-2xl"
          >
            ask&nbsp;✨
          </button>
        </div>

        {displayResponse.length > 0 && (
          <div className="bg-slate-100 mt-4 rounded-2xl">
            <h2 className="text-[1.25rem] text-slate-400 pt-6 px-6 pb-2">
              Here&apos;s the response
            </h2>
            {/* <p className="px-4 pb-4">{displayResponse}</p> */}
            <p className="px-6 pb-6 opacity-80 whitespace-pre-line">
              {displayResponse}
            </p>
            {completedTyping && graphSrc !== "" && (
              <img src={graphSrc} alt="dfgvb" className="p-4 rounded-lg" />
            )}
          </div>
        )}
      </div>
    </main>
  );
}
