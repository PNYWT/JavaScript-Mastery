var _a;
const unitConverter = {
    mToFt: function (meters) {
        return meters * 3.28084;
    },
    kgToLb: function (kilograms) {
        return kilograms * 2.20462;
    },
    cToF: function (caelsius) {
        return (caelsius * 9 / 5) + 32;
    }
};
(_a = document.getElementById("convertButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    const inputNumber = document.getElementById("inputValue");
    const select = document.getElementById("conversionType");
    const output = document.getElementById("convertedValue");
    const value = parseFloat(inputNumber.value);
    if (isNaN(value)) {
        alert("Please enter a valid number");
        return;
    }
    switch (select.value) {
        case "mToFt":
            output.innerText = unitConverter.mToFt(value).toFixed(4);
            break;
        case "kgToLb":
            output.innerText = unitConverter.kgToLb(value).toFixed(4);
            break;
        case "cToF":
            output.innerText = unitConverter.cToF(value).toFixed(4);
            break;
        default:
            output.innerText = "Select conversion type";
    }
});
export {};
//# sourceMappingURL=convertFunction.js.map