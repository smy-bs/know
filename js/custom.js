// appel API
fetch('./api/teacher.json')
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

// Toggle menu

let navbarMenu = document.querySelector('.navbar-collapse');
let ToggleMenu = document.querySelector('.toggle');
ToggleMenu.addEventListener('click',()=>{
 navbarMenu.classList.toggle('open');
})

navbarMenu.addEventListener('click',()=>{
  navbarMenu.classList.remove('open');
 })

