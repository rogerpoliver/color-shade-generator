const shadeColor = (color, percent) => {
  const num = parseInt(color.slice(1), 16);
  const amt = Math.round(2.55 * percent);
  const calcComponent = (comp) => Math.max(0, Math.min(255, comp + amt));
  const R = calcComponent(num >> 16);
  const G = calcComponent((num >> 8) & 0x00ff);
  const B = calcComponent(num & 0x0000ff);
  return "#" + ((R << 16) + (G << 8) + B).toString(16).padStart(6, "0");
};

export const shadeGenerator = (color) => {
  const shades = [
    50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, 1000,
  ].map((shade) => {
    const percent = (shade - 550) / 7;
    return {
      shade,
      hex: shadeColor(color, percent),
    };
  });

  return shades;
};
