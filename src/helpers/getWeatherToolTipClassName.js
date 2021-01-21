//  helper function to apply a different className dependent on what the weather is for currentDay & foreast

export default (weather) => {
  let weatherTooltipClassName = "weatherTooltip";
  if (weather === "Clouds") {
    weatherTooltipClassName += " weatherTooltip-Clouds";
  }
  if (weather === "Clear") {
    weatherTooltipClassName += " weatherTooltip-Clear";
  }
  if (weather === "Rain") {
    weatherTooltipClassName += " weatherTooltip-Rain";
  }
  if (weather === "Snow") {
    weatherTooltipClassName += " weatherTooltip-Snow";
  }
  return weatherTooltipClassName;
};
