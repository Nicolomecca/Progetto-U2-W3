const addressBarParameters = new URLSearchParams(location.search)
const eventId = addressBarParameters.get('eventId') 
console.log('eventId', eventId)

const libraryURL = 'https://striveschool-api.herokuapp.com/api/product/'

fetch(libraryURL + eventId,{
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNjMwNGYyNjBjYzAwMTVjYzBkZWYiLCJpYXQiOjE3MjE5OTAyMjksImV4cCI6MTcyMzE5OTgyOX0.3kYL_pDB4hAn7RKbobFqrgiUJAfVrpKY_IdekLwJk7A"
        }
})
  .then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('ERRORE')
    }
  })
  .then((singleArticle) => {
    console.log(singleArticle)
    
    const detailRow = document.getElementById('detail-article')
    detailRow.innerHTML = `
        <div class="col-12 col-md-4 text-center">
         <div class="card mb-4 shadow">
<img
  src=${singleArticle.imageUrl }
  class="bd-placeholder-img card-img-top"
/>
<div class="card-body">
  <h5 class="card-title">${singleArticle.name}</h5>
  <p class="card-text">
    ${singleArticle.description}
  </p>
  <div class="d-flex justify-content-between align-items-center">
    <div class="btn-group">
      <a href="./details.html?eventId=${singleArticle._id}" class="btn btn-primary ">Dettagli</a>
      <button type="button" class="btn btn-sm btn-outline-tertiary">Elimina</button>
    </div>
    <div>
      <p class="mb-0">${singleArticle.price}$</p>
    </div>
  </div>
</div>
        </div>
    `
  })
  .catch((err) => {
    console.log(err)
  })

  
const deleteLibrary = function () {
 
    fetch(libraryURL + eventId, {
      method: 'DELETE',
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNjMwNGYyNjBjYzAwMTVjYzBkZWYiLCJpYXQiOjE3MjE5OTAyMjksImV4cCI6MTcyMzE5OTgyOX0.3kYL_pDB4hAn7RKbobFqrgiUJAfVrpKY_IdekLwJk7A"
        }
    }) 
      .then((response) => {
        if (response.ok) {
          
          alert('LIBRERIA ELIMINATA')
          location.assign('./index.html') 
        } else {
          
          throw new Error("Problema nell'eliminazione")
        }
      })
      .catch((err) => {
        console.log('error', err)
      })
  }