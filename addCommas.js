function addCommas(num) {

    const addCommasHelper = (s) => {
        const len = s.length;
        if (len <= 3) {
            return s;
        } else {
            return `${addCommasHelper(s.substring(0, len - 3))},${s.substring(len - 3)}`
        }
    }

    let str = num.toString();
    let neg = str[0] === "-" ? "-" : "";
    let decIndex = str.indexOf(".");
    let dec = decIndex === -1 ? "" : str.substring(decIndex);


    if (dec) {
        str = str.substring(0, decIndex);
    }

    if (neg) {
        str = str.substring(1);
    }

    return `${neg}${addCommasHelper(str)}${dec}`

}

module.exports = addCommas;