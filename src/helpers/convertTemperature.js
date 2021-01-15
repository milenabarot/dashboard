//  helper function to convert the temperature from Kelvin to C

export default (temp) => {
  return Math.round(Number(temp) - 273.15);
};
