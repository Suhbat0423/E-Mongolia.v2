const Footer = () => {
  return (
    <svg
      width="500"
      height="69"
      viewBox="0 0 500 69"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_32_47)">
        <path
          d="M4 6H210.284L215.619 13.8205L224.511 20.0769L249.407 24.2479L271.34 20.0769L280.824 13.8205L286.159 6H496V67H4V6Z"
          fill="#D9D9D9"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_32_47"
          x="0"
          y="0"
          width="500"
          height="69"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_32_47"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_32_47"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Footer;
