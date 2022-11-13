import React from 'react';

const SvgCheckCircleHollow = props => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    style={{
      color: '#242134',
      ...props.style
    }}
  >
    <path
      d="M 12 0 C 1.3084197 0 -4.0435475 12.925204 3.515625 20.484375 C 11.074797 28.043547 24 22.69158 24 12 C 23.992285 5.3757944 18.624205 0.0077147446 12 0 z M 12.009766 1.9882812 C 17.531104 1.9947115 22.005288 6.4688953 22.011719 11.990234 C 22.011719 20.90177 11.238144 25.363144 4.9375 19.0625 C -1.3631434 12.761856 3.0982293 1.9882812 12.009766 1.9882812 z M 18.244141 6.5761719 A 1 1 0 0 0 17.316406 7.0175781 L 11.089844 15.46875 L 7.0136719 12.207031 A 1.0004882 1.0004882 0 1 0 5.7636719 13.769531 L 10.652344 17.677734 A 1.011 1.011 0 0 0 12.082031 17.488281 L 18.927734 8.1992188 A 1 1 0 0 0 18.244141 6.5761719 z "
      fill="currentColor"
    />
  </svg>
);

export default SvgCheckCircleHollow;
