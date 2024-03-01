const apiKey = '42649143-8137cd57d7a1d42ed4ef45b78';
const perPage = 32;
let totalPages = 10;
let currentPage = 1;

function searchImages() {
    const searchTerm = encodeURIComponent(document.getElementById('search').value);
    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}&per_page=${perPage}&page=${currentPage}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en la solicitud a la API: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Pixabay API Response:', data);

            if (data.hits && data.hits.length > 0) {
                totalPages = Math.ceil(data.totalHits / perPage);
                displayImages(data.hits);
                displayPagination();
            } else {
                console.error('No se encontraron imágenes');
            }
        })
        .catch(error => console.error('Error fetching images:', error));
}

function displayImages(images) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    images.forEach(image => {
        const container = document.createElement('div');
        container.classList.add('image-container');

        const imgElement = document.createElement('img');
        imgElement.src = image.webformatURL;
        imgElement.alt = image.tags;
        imgElement.classList.add('image');
        imgElement.addEventListener('click', () => openLightbox(image.largeImageURL));

        container.appendChild(imgElement);
        gallery.appendChild(container);
    });
}

function displayPagination() {
    const pagination = document.querySelector('.pagination');
    pagination.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('a');
        pageLink.href = '#';
        pageLink.classList.add('page-link');
        pageLink.textContent = i;
        pageLink.addEventListener('click', function () {
            goToPage(i);
        });

        if (i === currentPage) {
            pageLink.classList.add('active');
        }

        pagination.appendChild(pageLink);
    }
}

function goToPage(page) {
    currentPage = page;
    searchImages();
}

function openLightbox(imageUrl) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    lightboxImg.src = imageUrl;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Inicializar la página con la primera búsqueda
searchImages();

