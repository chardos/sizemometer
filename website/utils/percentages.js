// Scales a percentage up based on a minimum size
export function scaleMin({ percentage, minimum }) {
  return percentage + (minimum * (100 - percentage)) / 100;
}

export function getPercentageFromRange({
  minValue, maxValue, currentValue, offsetBottom = 0,
}) {
  const range = maxValue - minValue;

  // if there is only 1 value, range is 0, which will bring
  // the calculation. Just return 50% if theres only 1 value.
  if (range === 0) {
    return 50;
  }

  const adjustedValue = currentValue - minValue;
  const percentage = adjustedValue / range * 100;
  return scaleMin({ percentage, minimum: offsetBottom });
}
