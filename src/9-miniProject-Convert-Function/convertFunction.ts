const unitConverter = {
    mToFt: function(meters: number): number {
        return meters * 3.28084;
    },
    kgToLb: function(kilograms: number): number {
        return kilograms * 2.20462;
    },
    cToF: function(caelsius: number): number {
        return (caelsius * 9/5) + 32;
    }
};

document.getElementById("convertButton")?.addEventListener("click", () => {
    const inputNumber = document.getElementById("inputValue") as HTMLInputElement;
    const select = document.getElementById("conversionType") as HTMLSelectElement;
    const output = document.getElementById("convertedValue") as HTMLElement;

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
