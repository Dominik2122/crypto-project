const getNumberWithSignificantDigits = (value: number, numberOfDigits: number) => {
  return new Intl.NumberFormat('en-IN', {
    maximumSignificantDigits: numberOfDigits,
    minimumSignificantDigits: numberOfDigits,
  }).format(value);
};

export default getNumberWithSignificantDigits;
