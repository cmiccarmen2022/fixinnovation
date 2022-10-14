const time = document.getElementById('time');
const date = document.getElementById('date');

const monthNames = ["de Enero del", "de Febrero del", "de Marzo del", "de Abríl del", "de Mayo del", "de Junio del", "de Julio del", "de Agosto del", "de Septiembre del", "de Octubre del", "de Noviembre del", "de Diciembre del"];

const interval = setInterval(() => {
    
    const local = new Date();

    let day = local.getDate(),
    month = local.getMonth(),
    year = local.getFullYear();

    time.innerHTML = local.toLocaleTimeString();
    date.innerHTML = `${day} ${monthNames[month]} ${year}`;
}, 1000);