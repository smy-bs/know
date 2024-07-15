// appel API

/** 
fetch("./api/teacher.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((teacher) => {
      const markup = `
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
      document
        .querySelector(".card-group")
        .insertAdjacentHTML("beforeend", markup);
    });
  });
*/
// 비동기 함수 정의
fetch("./api/teacher.json")
  .then((res) => res.json())
  .then((data) => {
    // Social media display order for each teacher
    const socialMediaOrder = [
      ["facebook", "twitter", "instagram"],
      ["gmail", "instagram"],
      ["twitter", "mail", "linkedin"],
      ["twitter", "gmail", "behance"]
    ];

    data.forEach((teacher, index) => {
      // Generate the social links based on the specific order
      const socials = socialMediaOrder[index].map(platform => {
        const url = teacher.socials[0][platform];
        const iconClass = `fa-brands fa-${platform}`;
        return `
          <li class="items">
            <a href="${url}" class="card-link"><i class="${iconClass} icon"></i></a>
          </li>
        `;
      }).join(""); // Join the list items into a single string

      // Generate the card HTML
      const markup = `
        <div class="card">
          <img src="./images/${teacher.image}" id="image" class="card-img-top" alt="${teacher.name}">
          <h5 class="card-title">${teacher.name}</h5>
          <p class="card-text">${teacher.description}</p>
          <hr>
          <ul class="socials">
            ${socials}
          </ul>
        </div>
      `;

      // Insert the generated HTML into the card group
      document.querySelector(".card-group").insertAdjacentHTML("beforeend", markup);
    });
  })
  .catch((error) => console.error("Error fetching the JSON data:", error));


// Toggle menu

let navbarMenu = document.querySelector(".navbar-collapse");
let ToggleMenu = document.querySelector(".toggle");
ToggleMenu.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

navbarMenu.addEventListener("click", () => {
  navbarMenu.classList.remove("open");
});
