const paises = {
    "CO": ["Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena", "Bucaramanga", "Santa Marta", "Pereira", "Manizales", "Cúcuta"],
    "ES": ["Madrid", "Barcelona", "Valencia", "Sevilla", "Zaragoza", "Málaga", "Bilbao", "Murcia", "Palma de Mallorca", "Las Palmas de Gran Canaria"],
    "MX": ["Ciudad de México", "Guadalajara", "Monterrey", "Puebla", "Tijuana", "Juárez", "León", "Zapopan", "Ecatepec de Morelos", "Mexicali"],
    "AR": ["Buenos Aires", "Córdoba", "Rosario", "Mendoza", "Tucumán", "La Plata", "Mar del Plata", "Salta", "Santa Fe", "Bahía Blanca"],
    "US": ["Nueva York", "Los Ángeles", "Chicago", "Houston", "Phoenix", "Filadelfia", "San Antonio", "San Diego", "Dallas", "San José"],
    "BR": ["Sao Paulo", "Río de Janeiro", "Brasilia", "Salvador", "Fortaleza", "Belo Horizonte", "Manaos", "Curitiba", "Recife", "Porto Alegre"],
    "RU": ["Moscú", "San Petersburgo", "Novosibirsk", "Ekaterimburgo", "Nizhny Novgorod", "Kazán", "Chelyabinsk", "Omsk", "Samara", "Rostov del Don"],
    "CN": ["Pekín", "Shanghái", "Cantón", "Shenzhen", "Wuhan", "Tianjin", "Chengdú", "Nankín", "Chongqing", "Hangzhou"],
    "IN": ["Nueva Delhi", "Bombay", "Bangalore", "Chennai", "Calcuta", "Hyderabad", "Pune", "Ahmedabad", "Kanpur", "Surat"],
    "ID": ["Yakarta", "Surabaya", "Bandung", "Medan", "Semarang", "Tangerang", "Depok", "Makassar", "Batam", "Bekasi"],
    "NG": ["Lagos", "Kano", "Ibadán", "Abuya", "Kaduna", "Port Harcourt", "Benin City", "Maiduguri", "Zaria", "Aba"],
    "PK": ["Karachi", "Lahore", "Faisalabad", "Rawalpindi", "Multan", "Gujranwala", "Peshawar", "Quetta", "Islamabad", "Sialkot"],
    "BD": ["Daca", "Chittagong", "Rajshahi", "Khulna", "Barisal", "Sylhet", "Rangpur", "Comilla", "Narayanganj", "Gazipur"],
    "JP": ["Tokio", "Yokohama", "Osaka", "Nagoya", "Sapporo", "Fukuoka", "Kobe", "Kyoto", "Kawasaki", "Saitama"],
    "MX": ["Ciudad de México", "Guadalajara", "Monterrey", "Puebla", "Tijuana", "Juárez", "León", "Zapopan", "Ecatepec de Morelos", "Mexicali"],
    "PH": ["Manila", "Quezon City", "Davao City", "Cebú City", "Zamboanga City", "Taguig City", "Antipolo", "Pasig", "Cagayán de Oro", "Parañaque"],
    "EG": ["El Cairo", "Alejandría", "Giza", "Shubra El-Kheima", "Port Said", "Suez", "Luxor", "Mansoura", "Tanta", "Asyut"],
    "ET": ["Adís Abeba", "Addis Ababa", "Dire Dawa", "Mek'ele", "Gondar", "Adama", "Hawassa", "Jimma", "Bahir Dar", "Jijiga"],
    "VN": ["Ho Chi Minh City", "Hanoi", "Haiphong", "Can Tho", "Bien Hoa", "Hue", "Nha Trang", "Da Nang", "Vung Tau", "Qui Nhon"],
    "CD": ["Kinshasa", "Lubumbashi", "Mbuji-Mayi", "Kisangani", "Bukavu", "Kananga", "Likasi", "Goma", "Tshikapa", "Kolwezi"],
    "TR": ["Estambul", "Ankara", "Esmirna", "Bursa", "Adana", "Gaziantep", "Konya", "Antalya", "Diyarbakir", "Mersin"],
    "IR": ["Teherán", "Mashhad", "Isfahán", "Karaj", "Tabriz", "Shiraz", "Ahvaz", "Qom", "Kermanshah", "Urmia"],
    "TH": ["Bangkok", "Nonthaburi", "Nakhon Ratchasima", "Chiang Mai", "Hat Yai", "Udon Thani", "Pak Kret", "Khon Kaen", "Nakhon Sawan", "Ubon Ratchathani"],
    "DE": ["Berlín", "Hamburgo", "Munich", "Colonia", "Fráncfort del Meno", "Stuttgart", "Düsseldorf", "Dortmund", "Essen", "Leipzig"],
    "FR": ["París", "Marsella", "Lyon", "Toulouse", "Niza", "Nantes", "Estrasburgo", "Montpellier", "Burdeos", "Lille"],
    "GB": ["Londres", "Birmingham", "Mánchester", "Glasgow", "Liverpool", "Newcastle", "Sheffield", "Bristol", "Leeds", "Cardiff"],
    "IT": ["Roma", "Milán", "Nápoles", "Turín", "Palermo", "Génova", "Bolonia", "Florencia", "Bari", "Catania"],
    "ES": ["Madrid", "Barcelona", "Valencia", "Sevilla", "Zaragoza", "Málaga", "Bilbao", "Murcia", "Palma de Mallorca", "Las Palmas de Gran Canaria"],
    "US": ["Nueva York", "Los Ángeles", "Chicago", "Houston", "Phoenix", "Filadelfia", "San Antonio", "San Diego", "Dallas", "San José"]
};

const formulario = {
    paisSelect: document.getElementById('pais'),
    ciudadSelect: document.getElementById('ciudad'),
    resultadoDiv: document.getElementById('resultado'),
    resultadoTemperatura: document.getElementById('temperatura'),
    botonBuscarClima: document.getElementById('boton-buscar-clima')
};

formulario.ciudadSelect.disabled = true;
formulario.botonBuscarClima.disabled = true; // Deshabilitar el botón al cargar la página

formulario.paisSelect.addEventListener('change', () => {
    const codigoPais = formulario.paisSelect.value;
    const ciudades = paises[codigoPais];
    
    formulario.ciudadSelect.disabled = ciudades.length === 0;
    formulario.botonBuscarClima.disabled = true; // Deshabilitar el botón al cambiar el país
    
    llenarCiudades(codigoPais);
});

formulario.ciudadSelect.addEventListener('change', () => {
    const codigoPais = formulario.paisSelect.value;
    const ciudad = formulario.ciudadSelect.value;

    formulario.botonBuscarClima.disabled = !(codigoPais && ciudad); // Habilitar o deshabilitar el botón según la selección
});

formulario.botonBuscarClima.addEventListener('click', () => {
    const codigoPais = formulario.paisSelect.value;
    const ciudad = formulario.ciudadSelect.value;

    buscarClima(codigoPais, ciudad);
});

function llenarCiudades(codigoPais) {
    const ciudades = paises[codigoPais];

    formulario.ciudadSelect.innerHTML = '';

    for (const ciudad of ciudades) {
        const option = document.createElement('option');
        option.value = ciudad;
        option.textContent = ciudad;
        formulario.ciudadSelect.appendChild(option);
    }

    formulario.ciudadSelect.value = '';

    // Deshabilitar el botón si no hay ciudades disponibles
    formulario.botonBuscarClima.disabled = ciudades.length === 0;
}

function buscarClima(codigoPais, ciudad) {
    const appId = 'df0a73eb3228610193057d3804e8d38e'

    console.log(`Buscando el clima de ${codigoPais} - ${ciudad}`);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${codigoPais}&appid=${appId}`;
    console.log(url);
    fetch(url)
    .then(respuesta => {
        return respuesta.json();
    })
    .then(datos => {
        console.log(datos);

        if (datos.main && datos.main.temp) {
            const temperaturaKelvin = datos.main.temp;
            const temperaturaCelsius = kelvinToCelsius(temperaturaKelvin);
            
            console.log(`Temperatura en Celsius: ${temperaturaCelsius.toFixed(2)}°C`);
            
            // Mostrar la temperatura en la interfaz
            formulario.resultadoTemperatura.textContent = `Temperatura: ${temperaturaCelsius.toFixed(2)}°C`;
        } else {
            console.log("No se pudo obtener la temperatura.");
            formulario.resultadoTemperatura.textContent = "No se pudo obtener la temperatura.";
        }
    })
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}
