function convert() {
    let inputnumber = parseInt(document.getElementById("cn").value)
    let resul = (inputnumber/2000).toFixed(3);
    document.getElementById(resul).innerHTML = 'resul' + resul ;
}