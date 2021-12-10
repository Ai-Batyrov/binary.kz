const selector = document.querySelector("select");
const getPrice = document.querySelectorAll(".price");

function convertCurrency() {
    for (let i = 0; i < getPrice.length; i++) {
        let getPriceInnerHTML = getPrice[i].innerHTML;

        if (selector.value === 'KZT') {
            getPrice[i].innerHTML = "₸" +
                toKZT(getPriceInnerHTML);
        } else if (selector.value === 'EUR') {
            getPrice[i].innerHTML = "€" +
                toEUR(getPriceInnerHTML);
        } else if (selector.value === 'USD') {
           getPrice[i].innerHTML = "$" +
                toUSD(getPriceInnerHTML);
        }
    }
}

// convert functions
function toKZT(value) {
    let convertedValue;

    if (value.includes("$")) {
        value = value.replace("$","");
        convertedValue = value * 430;
    } else if (value.includes("€")) {
        value = value.replace("€", "");
        convertedValue = value * 500;
    }

    return convertedValue;
}

function toEUR(value) {
    let convertedValue;

    if (value.includes("$")) {
        value = value.replace("$", "");
        convertedValue = Math.round(value / 1.13, 2);
    } else if (value.includes("₸")) {
        value = value.replace("₸", "");
        convertedValue = value / 500
    }

    return convertedValue;
}

function toUSD(value) {
    let convertedValue;

    if (value.includes("€")) {
        value = value.replace("€", "");
        convertedValue = Math.round(value * 1,13, 2);
    } else if (value.includes("₸")) {
        value = value.replace("₸", "");
        convertedValue = value / 430;
    } else if (value.includes("$")) {
        value = value.replace("$","");
        convertedValue = value;
    }

    return convertedValue;
}