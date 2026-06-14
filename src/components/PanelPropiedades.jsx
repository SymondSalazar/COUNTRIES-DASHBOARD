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
      <div className="border-b-2" style={{ borderColor: "var(--theme-border)" }}>
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
                className={`border-2 px-6 py-2 font-semibold transition-colors focus:outline-0 focus:ring-2 focus:ring-yellow-300 ${
                  isActive ? "theme-tab-active" : "theme-tab-inactive"
                }`}
              >
                {tabName}
              </button>
            );
          })}
        </div>
      </div>

      <div className="theme-field -mt-0.5 border-2 p-4">
        {children}
      </div>
    </>
  );
}
