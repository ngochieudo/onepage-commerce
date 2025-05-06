const AddMoneyIcon = () => (
  <div className="mr-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <rect
        x="3"
        y="3"
        width="20"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path d="M5 3V5H3" stroke="currentColor" strokeWidth="2" />
      <path d="M21 3V5H21" stroke="currentColor" strokeWidth="2" />
      <path d="M5 21V19H3" stroke="currentColor" strokeWidth="2" />
      <path d="M21 21V19H21" stroke="currentColor" strokeWidth="2" />

      <circle cx="13" cy="12" r="1.5" fill="currentColor" />

      <path
        d="M17 8V6M17 6V4M17 6H19M17 6H15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

export default AddMoneyIcon;
