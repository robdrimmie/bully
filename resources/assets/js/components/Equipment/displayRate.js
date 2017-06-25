// If the rate has cents, show them. Otherwise show whole number.

const displayRate = rate => (
  rate % 1 ?
    global.Number(rate).toFixed(2) :
    global.Number(rate).toFixed(0)
);

export default displayRate;
