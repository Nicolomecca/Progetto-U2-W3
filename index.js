

const generateCard= function (){
  
fetch('https://striveschool-api.herokuapp.com/api/product/', {
    headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNjMwNGYyNjBjYzAwMTVjYzBkZWYiLCJpYXQiOjE3MjE5OTAyMjksImV4cCI6MTcyMzE5OTgyOX0.3kYL_pDB4hAn7RKbobFqrgiUJAfVrpKY_IdekLwJk7A"
    }
    })
    .then((response) => {
        console.log(response)
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore')
        }
      })
      .then((interiorData) =>{
        console.log(interiorData)
        interiorData.forEach((library) => {
        const newArticle=`
        <div class='col  '>
        <div class="card  mb-4  scale-effect mx-4 mx-sm-1  mx-md-1">
<img
  src=${library.imageUrl }
  class="bd-placeholder-img card-img-top"
/>
<div class="card-body ">
  <h5 class="card-title">${library.name}</h5>
  <p class="card-text">
    ${library.description}
  </p>
  <div class="d-flex justify-content-between align-items-center">
    <div class="btn-group">
      <a href="./details.html?eventId=${library._id}" class="btn btn-primary ">Dettagli</a>
      <button type="button" class="btn btn-sm btn-outline-tertiary">Prenota</button>
    </div>
    <div>
      <p class="mb-0">${library.price}$</p>
    </div>
  </div>
</div>

</div>
        `
        const articlesRow = document.getElementById('designArticle')
        articlesRow.innerHTML = articlesRow.innerHTML + newArticle
       
     
        })
      })
      .catch((error) => {
        console.log('error!', error)
      })
}
generateCard()


