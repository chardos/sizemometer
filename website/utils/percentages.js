// Scales a percentage up based on a minimum size
export function scaleMin({ percentage, minimum }) {
  return percentage + (minimum * (100 - percentage)) / 100;
}

export function getPercentageFromRange({
  minValue, maxValue, currentValue, offsetBottom = 0,
}) {
  const range = maxValue - minValue;
  const adjustedValue = currentValue - minValue;
  const percentage = adjustedValue / range * 100;
  return scaleMin({ percentage, minimum: offsetBottom });
}
