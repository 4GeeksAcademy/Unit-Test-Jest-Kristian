const sum = (a,b) => {
    return a + b
}

let oneEuroIs = {
    "JPY": 161.16,
    "USD": 1.10,
    "GBP": 0.85,
};

function fromEuroToDollar(value) {
    let dollar = oneEuroIs.USD * value;
    return dollar;
};

function fromDollarToYen(value){
    let yen = (value / oneEuroIs.USD) * oneEuroIs.JPY; 
    return yen;
};

function fromYenToPound(value){
    let pound = (value / oneEuroIs.JPY) * oneEuroIs.GBP;
    return pound;
};

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };