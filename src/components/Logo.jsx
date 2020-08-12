import React from 'react'

export default ({ size, margin, theme }) => {

  const dimensions = {
    'xs': { height: '30px', width: '30px' },
    's': { height: '50px', width: '50px' },
    'm': { height: '70px', width: '70px' },
    'l': { height: '90px', width: '90px' },
    'xl': { height: '100px', width: '100px' }
  }[size];

  const style = margin ? { margin: 8, } : {};

  const ElephantechLogo = () => (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 720 720"
    >
      <title>ElephanTech</title>
      <path
        style={{ fill: theme.palette.contrast, boxShadow: theme.palette.glow.contrast }}
        d="M247.5,557.42A23,23,0,0,1,236,554.33l-89.17-51.48a23.27,23.27,0,0,1-11.6-20.1V248.83a23.27,23.27,0,0,1,11.6-20.1l202.58-117a23.29,23.29,0,0,1,23.21,0l202.58,117a23.27,23.27,0,0,1,11.6,20.1V413.94a56.62,56.62,0,0,1-56.55,56.55v-25a31.58,31.58,0,0,0,31.55-31.55V249.86L361,133.94,160.18,249.86V481.72l86,49.66c5.22-24,19.82-43.86,42.34-57.67,20.09-12.32,45.82-19.11,72.45-19.12h0c49.16,0,103.26,23.75,114.78,76.74l27-15.59C489.47,488.65,459.61,417.83,453,315l24.94-1.61c6.46,100.22,35.72,168.11,48,192.64a23.26,23.26,0,0,1-9.15,30.51l-30.71,17.73a23.14,23.14,0,0,1-21.15,1,23.39,23.39,0,0,1-13.18-16.87C444,497.78,400.63,479.59,361,479.59h0c-39.61,0-83,18.22-90.72,58.87a23.34,23.34,0,0,1-13.16,16.87A23,23,0,0,1,247.5,557.42Z"
      />
      <path
        style={{ fill: theme.palette.contrast, boxShadow: theme.palette.glow.contrast }}
        d="M239,184.42c.83,2.41,1.55,4.77,2.35,7.1s1.67,4.61,2.51,6.83c.44,1.11.88,2.22,1.34,3.29s.89,2.16,1.38,3.19q1.44,3.13,3,6c1.06,1.9,2.27,3.62,3.4,5.26a32,32,0,0,0,3.74,4.24,21.92,21.92,0,0,0,3.88,3,19.68,19.68,0,0,0,3.9,1.73,24.22,24.22,0,0,0,8.27.82,44.54,44.54,0,0,0,4.76-.57c2.43-.19,4.85-.41,7.27-.56l14.55-1,7.27-.48,7.3-.38,6.58-.34,6.73,5.61c5.42,4.54,11,8.88,16.55,13.16s11.23,8.4,17,12.32,11.54,7.82,17.47,11.42c3,1.78,5.94,3.58,8.95,5.27s6,3.43,9,5.11c6.06,3.28,12.25,6.3,18.46,9.22s12.52,5.6,18.91,8.06,12.82,4.74,19.34,6.78c3.26,1,6.55,1.94,9.83,2.87s6.6,1.77,9.93,2.54c6.64,1.59,13.35,2.95,20.12,4s13.58,2,20.44,2.62c6.67.53,14.23,1.18,21.4,1.63l10.75.75c3.56.22,7.1.36,10.61.51,7,.33,13.93.27,20.83,0a175.28,175.28,0,0,0,20.74-2.2c13.92-2.28,28.12-6.39,42.68-10.77l1.26,2.16c-12.76,7.64-26.06,14.59-40.23,19.55-3.54,1.23-7.12,2.36-10.74,3.35s-7.29,1.79-11,2.51A204.29,204.29,0,0,1,557.29,332c-7.45.58-14.9.85-22.34,1s-14.85.22-22.35.06a267.73,267.73,0,0,1-44.54-4.93c-3.68-.69-7.32-1.54-11-2.37s-7.26-1.8-10.85-2.85c-7.19-2.05-14.33-4.31-21.33-6.94s-13.93-5.46-20.73-8.57-13.43-6.58-20-10.19A363.12,363.12,0,0,1,312.37,244l1.47.58-29.06-.09-7.27,0a53.35,53.35,0,0,1-7.55-.6,36.49,36.49,0,0,1-14.28-5.36,35.48,35.48,0,0,1-10.51-11,51.24,51.24,0,0,1-3.36-6.76,64.71,64.71,0,0,1-2.33-7.1c-2.51-9.61-3.14-19.48-3-29.23Z" />
      <circle style={{ fill: theme.palette.contrast, boxShadow: theme.palette.glow.contrast }} cx="506.24" cy="247.07" r="10.06"
      />
      <path
        style={{ fill: theme.palette.primary.main, boxShadow: theme.palette.glow.primary }}
        d="M360,29.52A326.12,326.12,0,0,1,486.9,656,326.12,326.12,0,0,1,233.1,55.13,324.07,324.07,0,0,1,360,29.52m0-22c-192.21,0-348,155.81-348,348s155.82,348,348,348,348-155.82,348-348-155.82-348-348-348Z"
      />
    </svg>)

  return (<div style={{ ...dimensions, ...style }}><ElephantechLogo /></div>)
}