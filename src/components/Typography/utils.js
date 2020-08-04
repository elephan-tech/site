const typographies = {
  h1: [44, 500],
  h2: [36, 500],
  h3: [30, 500],
  subtitle: [12, 300],
  body: [18, 500],
}

export const getTypographyStyles = ({ variant, theme, color }) => {
  const { palette } = theme;
  const fontColor = typeof palette[color] === 'string' ? palette[color] : palette[color].main
  const [fontSize, fontWeight] = typographies[variant] && typographies[variant];
  return `font-size: ${fontSize}px; font-weight:${fontWeight}; color: ${fontColor || 'black'};`;

}