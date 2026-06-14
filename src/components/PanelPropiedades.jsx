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
        <div className="-mb-0.5 flex overflow-x-auto flex-nowrap no-scrollbar" style={{ borderColor: "var(--theme-border)" }}>
          {TABS.map((tabName, index) => {
            const isActive = activeTab === index;

            return (
              <button
                key={tabName}
                role="tab"

                aria-selected={isActive}
                onClick={() => setTab(index)}
                className={`shrink-0 px-4 py-2 md:px-6 text-sm md:text-base font-semibold focus:ring-2 focus:outline-0 transition-colors ${
                  isActive
                    ? "theme-tab-active"
                    : "theme-tab-inactive"
                }`}
              >
                {tabName}
              </button>
            );
          })}
        </div>
      </div>

      <div className="theme-field -mt-0.5 w-full max-w-full overflow-x-auto break-words border-2 border-black p-4 md:p-6 shadow-[4px_4px_0_0] shadow-black bg-white">

        {children}
      </div>
    </div>
  );
}
