const getTextProperties = (transform = 'none', spacing = 'none', lineSpacing = 'none') => ({
  textTransform: transform,
  letterSpacing: `${spacing}px`,
  lineSpacing: `${lineSpacing}px`
});
const typographies = {
  h1: { fontSize: 44, fontWeight: 900, lineHeight: 1.5, textProperties: getTextProperties() },
  h2: { fontSize: 36, fontWeight: 800, lineHeight: 1, textProperties: getTextProperties() },
  h3: { fontSize: 30, fontWeight: 700, lineHeight: 1, textProperties: getTextProperties() },
  h4: { fontSize: 26, fontWeight: 600, lineHeight: 1, textProperties: getTextProperties() },
  h5: { fontSize: 16, fontWeight: 800, lineHeight: '23px', textProperties: getTextProperties() },
  h6: { fontSize: 14, fontWeight: 400, lineHeight: '20px', textProperties: getTextProperties() },
  subtitle: { fontSize: 12, fontWeight: 300, lineHeight: 1, textProperties: getTextProperties() },
  overline: { fontSize: 16, fontWeight: 700, lineHeight: 1, textProperties: getTextProperties('uppercase', 2, .5) },
  p: { fontSize: 18, fontWeight: 400, lineHeight: 2, textProperties: getTextProperties() },
};

export const getTypographyStyles = ({ variant, theme, color = 'primary', shade, align, noMargin }) => {
  const { palette } = theme;
  const fontColor = typeof palette[color] === 'string' ? palette[color] : palette[color][shade || 'main'];
  const { fontSize, fontWeight, lineHeight, textProperties } = typographies[variant || 'h2'];
  const margin = noMargin ? '5px' : 'inherit';
  return `
  font-size: ${fontSize}px;
  font-weight:${fontWeight}; 
  color: ${fontColor || 'black'}; 
  line-height: ${lineHeight};
  text-align: ${align};
  margin-top: ${margin} !important;
  text-transform: ${textProperties.textTransform};
  text-transform: ${textProperties.letterSpacing};
  
  `;

};
