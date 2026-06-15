export type SVGPoints = [number, number][];

export const parseSVGPoints = (points: string): SVGPoints => {
  return points
    .trim()
    .split(/\s+/)
    .map((point) => {
      const [x, y] = point.split(",").map(Number);
      return [x, y] as [number, number];
    });
};

export const pointsToSVGString = (points: SVGPoints): string => {
  return points.map(([x, y]) => `${x},${y}`).join(" ");
};
