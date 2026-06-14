import React from "react";

const TABS = [
  "Nombres nativos",
  "Lenguajes",
  "Moneda",
  "Subregión",
  "Fronteras",
];

export function PanelPropiedades({ children, activeTab, setTab }) {
  return (
    <div className="w-full max-w-full">
      <div className="border-b-2 border-black w-full overflow-hidden">
        <div className="-mb-0.5 flex overflow-x-auto flex-nowrap no-scrollbar">
          {TABS.map((tabName, index) => {
            const isActive = activeTab === index;

            return (
              <button
                key={tabName}
                role="tab"
                aria-selected={isActive}
                onClick={() => setTab(index)}
                className={`shrink-0 px-4 py-2 md:px-6 text-sm md:text-base font-semibold focus:ring-2 focus:ring-yellow-300 focus:outline-0 transition-colors ${
                  isActive
                    ? "border-2 border-black bg-yellow-200 text-black"
                    : "border-2 border-transparent text-black hover:bg-black hover:text-white"
                }`}
              >
                {tabName}
              </button>
            );
          })}
        </div>
      </div>
      <div className="-mt-0.5 w-full max-w-full overflow-x-auto break-words border-2 border-black p-4 md:p-6 shadow-[4px_4px_0_0] shadow-black bg-white">
        {children}
      </div>
    </div>
  );
}
