function convertToDMS() {
    let decimal = parseFloat(document.getElementById("decimal").value);
    let degrees = Math.floor(decimal);
    let minutes = Math.floor((decimal - degrees) * 60);
    let seconds = ((decimal - degrees - minutes / 60) * 3600).toFixed(2);

    document.getElementById("dmsOutput").innerHTML = `${degrees}° ${minutes}' ${seconds}"`;
}

function convertToDecimal() {
    let degrees = parseInt(document.getElementById("degrees").value);
    let minutes = parseInt(document.getElementById("minutes").value);
    let seconds = parseFloat(document.getElementById("seconds").value);

    let decimal = degrees + (minutes / 60) + (seconds / 3600);
    document.getElementById("decimalOutput").innerHTML = decimal.toFixed(6);
}
