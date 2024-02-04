var mes = prompt("Ingresa el número del mes de tu nacimiento (1-12):");
if (mes < 1 || mes > 12) {
    alert("Mes inválido. Ingresa un número del 1 al 12.");
} else {
    var dia = prompt("Ingresa el día de tu nacimiento:");
    if (dia < 1 || dia > 31) {
        alert("Día inválido. Ingresa un número del 1 al 31.");
    } else {
        var signo = SignoZodiacal(parseInt(mes), parseInt(dia));
        alert("Tu signo zodiacal es: " + signo);
    }
}
function SignoZodiacal(mes, dia) {
    switch (mes) {
        case 1:
            return dia <= 20 ? "Capricornio" : "Acuario";
        case 2:
            return dia <= 19 ? "Acuario" : "Piscis";
        case 3:
            return dia <= 20 ? "Piscis" : "Aries";
        case 4:
            return dia <= 20 ? "Aries" : "Tauro";
        case 5:
            return dia <= 21 ? "Tauro" : "Géminis";
        case 6:
            return dia <= 21 ? "Géminis" : "Cáncer";
        case 7:
            return dia <= 22 ? "Cáncer" : "Leo";
        case 8:
            return dia <= 23 ? "Leo" : "Virgo";
        case 9:
            return dia <= 23 ? "Virgo" : "Libra";
        case 10:
            return dia <= 23 ? "Libra" : "Escorpio";
        case 11:
            return dia <= 22 ? "Escorpio" : "Sagitario";
        case 12:
            return dia <= 21 ? "Sagitario" : "Capricornio";
        default:
    }
} 