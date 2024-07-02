import tailwindColors from 'tailwindcss/colors.js';

export type TailwindColorConfig = {
  name: string;
  colors: {
    [key in string]: string;
  };
};

const formateTailwindColors = () => {
  const colors: TailwindColorConfig[] = [];
  for (const [key, value] of Object.entries(tailwindColors)) {
    if (typeof value !== 'string') {
      colors.push({
        name: key,
        colors: value,
      });
    }
  }

  return colors;
};

export const tw_colors: TailwindColorConfig[] = formateTailwindColors();
