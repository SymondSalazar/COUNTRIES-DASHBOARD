import React from "react";

// 1. Define the tabs in an array outside the component to prevent recreation on every render
const TABS = [
  "Nombres nativos",
  "Lenguajes",
  "Moneda",
  "Subregion",
  "Fronteras",
];

export function PanelPropiedades({ children, activeTab, setTab }) {
  return (
    <>
      <div className="border-b-2 border-black">
        <div className="-mb-0.5 flex">
          {/* 2. Iterate over the array to generate buttons dynamically */}
          {TABS.map((tabName, index) => {
            // Check if the current button is the one selected in the state
            const isActive = activeTab === index;

            return (
              <button
                key={tabName}
                role="tab"
                aria-selected={isActive} // Accessibility: accurately reflects the state
                onClick={() => setTab(index)} // 3. Update the state with this button's index
                // 4. Conditionally apply the Tailwind classes based on the isActive variable
                className={`px-6 py-2 font-semibold focus:ring-2 focus:ring-yellow-300 focus:outline-0 transition-colors ${
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

      <div className="-mt-0.5 border-2 border-black p-4 shadow-[4px_4px_0_0] shadow-black">
        {children}
      </div>
    </>
  );
}
