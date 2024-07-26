



  const libraryForm = document.getElementById('library-form')
libraryForm.addEventListener('submit', function (e) {
  e.preventDefault() // bloccare il riavvio della pagina
  // recupero i riferimenti degli input
  const nameInputValue = document.getElementById('name').value
  const descriptionInputValue = document.getElementById('description').value
  const brandInputValue = document.getElementById('brand').value
  const imgInputValue = document.getElementById('imageUrl').value
  const priceInputValue = document.getElementById('price').value



class Library {
    constructor(_name, _description, _brand,_imageUrl, _price,) {
      this.name = _name
      this.description = _description
      this.brand = _brand
      this.imageUrl= _imageUrl
      this.price = _price
    
    }
  }

  const newLibrary= new Library(
    nameInputValue,
    descriptionInputValue,
    brandInputValue,
    imgInputValue,
    priceInputValue,
  )
  console.log('Oggetto Library creato:', newLibrary)

  let methodToUse
  if (eventId) {

    methodToUse = 'PUT'
  } else {
    
    methodToUse = 'POST'
  }


  let URLToUse
  if (eventId) {
    
    URLToUse = 'https://striveschool-api.herokuapp.com/api/product/'+ eventId
  } else {
    
    URLToUse = 'https://striveschool-api.herokuapp.com/api/product/'
  }

  fetch(URLToUse, {
    method: methodToUse,
    body: JSON.stringify(newLibrary),
    headers: {
      'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNjMwNGYyNjBjYzAwMTVjYzBkZWYiLCJpYXQiOjE3MjE5OTAyMjksImV4cCI6MTcyMzE5OTgyOX0.3kYL_pDB4hAn7RKbobFqrgiUJAfVrpKY_IdekLwJk7A",
      'Content-Type': 'application/json'
    }
  })
  .then((response) => {
    console.log('Stato della risposta:', response.status)
    if (response.ok) {
      alert('LIBRERIA SALVATA CON SUCCESSO!')
      
    } else {
      alert('ERRORE NEL SALVATAGGIO!');
      return response.json().then((data) => {
        console.error('Errore nel salvataggio della libreria:', data)
        throw new Error('Errore nel salvataggio della libreria')
      });
    }
  })
  .catch((err) => {
    console.log('ERRORE', err)
  });
})
