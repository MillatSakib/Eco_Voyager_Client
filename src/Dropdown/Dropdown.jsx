import { useState } from "react";

function Dropdown({ setSort }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="text-white bg-green-500 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
        type="button"
      >
        Sort By
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          id="dropdown"
          className="absolute left-[calc(50%-6rem)] mx-auto divide-gray-100 rounded-lg w-48 bg-slate-50 z-50"
        >
          <ul
            className="py-2 text-sm text-gray-700"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => {
                  setSort(1);
                  setIsOpen(false);
                }}
              >
                Average Cost Ascending
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => {
                  setSort(-1);
                  setIsOpen(false);
                }}
              >
                Average Cost Descending
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
