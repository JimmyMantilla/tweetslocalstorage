// Función para agregar un tweet
function agregarTweet() {
  var tweetInput = document.getElementById('tweetInput');
  var tweetList = document.getElementById('tweetList');

  if (tweetInput.value.trim() !== '') {
    var tweet = document.createElement('div');
    tweet.className = 'tweet';

    // Contenido del tweet
    var tweetText = document.createElement('span');
    tweetText.textContent = tweetInput.value;
    tweet.appendChild(tweetText);

    // Botón "X" para eliminar el tweet
    var deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Eliminar';
    deleteButton.onclick = function() {
      borrarTweet(tweet);
    };
    tweet.appendChild(deleteButton);

    tweetList.appendChild(tweet);

    // Limpiar el campo de texto
    tweetInput.value = '';

    // Desplazar el scroll hacia abajo para mostrar el tweet recién agregado
    tweetList.scrollTop = tweetList.scrollHeight;

    // Guardar el tweet en localStorage
    guardarTweetEnLocalStorage(tweetText.textContent);
  } else {
    // Mostrar la advertencia
    mostrarAdvertencia();
  }
}

// Función para mostrar la advertencia
function mostrarAdvertencia() {
  var advertencia = document.getElementById('advertencia');
  advertencia.style.display = 'flex';

  // Ocultar la advertencia después de 3 segundos
  setTimeout(function() {
    advertencia.style.display = 'none';
  }, 3000);
}

// Función para guardar un tweet en localStorage
function guardarTweetEnLocalStorage(tweet) {
  var tweets = obtenerTweetsDesdeLocalStorage() || [];
  tweets.push(tweet);
  localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Función para obtener tweets desde localStorage
function obtenerTweetsDesdeLocalStorage() {
  var tweets = localStorage.getItem('tweets');
  return JSON.parse(tweets);
}

// Función para cargar los tweets desde localStorage al cargar la página
function cargarTweetsDesdeLocalStorage() {
  var tweets = obtenerTweetsDesdeLocalStorage();

  if (tweets) {
    var tweetList = document.getElementById('tweetList');

    tweets.forEach(function(tweetText) {
      agregarTweetDOM(tweetText);
    });
  }
}

// Función para agregar un tweet al DOM
function agregarTweetDOM(tweetText) {
  var tweetList = document.getElementById('tweetList');
  var tweet = document.createElement('div');
  tweet.className = 'tweet';

  // Contenido del tweet
  var tweetContent = document.createElement('span');
  tweetContent.textContent = tweetText;
  tweet.appendChild(tweetContent);

  // Botón "X" para eliminar el tweet
  var deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  deleteButton.textContent = 'Eliminar';
  deleteButton.onclick = function() {
    borrarTweet(tweet);
  };
  tweet.appendChild(deleteButton);

  tweetList.appendChild(tweet);
}

// Función para borrar un tweet del DOM y de localStorage
function borrarTweet(tweet) {
  var tweetList = document.getElementById('tweetList');
  tweetList.removeChild(tweet);

  var tweets = obtenerTweetsDesdeLocalStorage() || [];
  var tweetText = tweet.querySelector('span').textContent;
  var index = tweets.indexOf(tweetText);

  if (index !== -1) {
    tweets.splice(index, 1);
    localStorage.setItem('tweets', JSON.stringify(tweets));
  }
}

// Cargar los tweets almacenados al cargar la página
cargarTweetsDesdeLocalStorage();




  
  
  
  
  