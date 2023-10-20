// //call to Json

/*let http = new XMLHttpRequest();
http.open("get", "./teacher.json", true);
http.send();
http.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    let teacher = JSON.parse(this.responseText);
    let output = "";

    for (let item of teacher) {
      output += `
      <div class="teacher">
      <div class="teach">
               <img src="./images/${item.image}" id="image" class="card-img-top" alt="...">
                <h5 class="card-title">${item.name}</h5>
                 <p class="card-text">${item.description}</p>
                         
                 <a href="#" class="card-link"><i class="fa-brands fa-facebook icon"></i></a>
                 <a href="#" class="card-link"> <i class="fa-brands fa-twitter icon"></i></a>
                 <a href="#" class="card-link"> <i class="fa-brands fa-instagram icon"></i></a>
               </div>
             </div>
      
            `;
    }
    document.querySelector(".teacher").innerHTML = output;
  }
};
*/



//Fetch the items from the JSON file
// function loadItems(){
//   return fetch('api/teacher.json')
//   .then(response => response.json())
//   .then(json => console.log(json));

// }


//main
// loadItems()
// .then(socials => {
//   console.log(socials);
  // displayItems(items);
// })
// .catch(console.log);

fetch('api/teacher.json')
.then(res=>{
  return res.json();
})
.then(data => {
data.forEach(teacher => {
  const markup=`<li>${teacher.name}</li>`;
  document.querySelector('ul').insertAdjacentHTML('beforeend',markup);
})
});

