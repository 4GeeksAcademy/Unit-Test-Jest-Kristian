let oneEuroIs = {
    "JPY": 161.16,
    "USD": 1.10,
    "GBP": 0.85,
};

function fromEuroToDollar(value) {
    let dollar = oneEuroIs.USD * value;
    return dollar;
};

module.exports = { fromEuroToDollar };