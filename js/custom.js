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

fetch('api/teacher.json')
.then(res=>{
  return res.json();
})
.then(data => {
data.forEach(teacher => {
  const markup=`
  <div class="card">
 <img src="./images/${teacher.image}" id="image" class="card-img-top" alt="...">
  <h5 class="card-title">${teacher.name}</h5>
   <p class="card-text">${teacher.description}</p>
   <hr>
   <ul class="socials">
   <li class="items">
  <a href="${teacher.socials}" class="card-link"><i class="fa-brands fa-facebook icon"></i></a>
  </li>
  <li class="items">
  <a href="${teacher.socials}" class="card-link"><i class="fa-brands fa-twitter icon"></i></i></a>
  </li>
  <li class="items">
  <a href="${teacher.socials}" class="card-link"><i class="fa-brands fa-instagram icon"></i></a>
  </li>
<ul>

     </div>
  `;
  document.querySelector('.card-group')
  .insertAdjacentHTML('beforeend',markup);
})
});


