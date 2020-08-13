const typographies = {
  h1: { fontSize: 44, fontWeight: 900, lineHeight: 1.5 },
  h2: { fontSize: 36, fontWeight: 800, lineHeight: 1 },
  h3: { fontSize: 30, fontWeight: 700, lineHeight: 1 },
  h4: { fontSize: 26, fontWeight: 600, lineHeight: 1 },
  h5: { fontSize: 20, fontWeight: 500, lineHeight: 1 },
  h6: { fontSize: 14, fontWeight: 400, lineHeight: 2 },
  subtitle: { fontSize: 12, fontWeight: 300, lineHeight: 1 },
  p: { fontSize: 18, fontWeight: 400, lineHeight: 1.5 },
}

export const getTypographyStyles = ({ variant, theme, color = "primary", shade }) => {
  const { palette } = theme;
  const fontColor = typeof palette[color] === 'string' ? palette[color] : palette[color][shade || 'main']
  const { fontSize, fontWeight, lineHeight } = typographies[variant || 'h2'];
  return `font-size: ${fontSize}px; font-weight:${fontWeight}; color: ${fontColor || 'black'}; line-height: ${lineHeight}`;

}