//  helper function to convert into date format from Unix

export default (number) => {
  return new Date(number * 1000);
};
