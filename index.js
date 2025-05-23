//Tailwind CSS Inastallation
tailwind.config = {
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
      }
    }
  }
}
// fatch data from API
const loadAllPhones = async (status, searchText) => {
  console.log(searchText);

  document.getElementById("spinner").style.display = "none";

  //  fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
  //  .then(res=>res.json())
  //  .then(data=>console.log(data))
  // const response= await fetch(`https://openapi.programming-hero.com/api/phones?search=${brandName?brandName:"iphone"}`);
  const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText ? searchText : "iphone"}`);
  const data = await response.json();
  console.log(data);

  if (status) {
    displayAllphonne(data.data);

  }
  else {
    displayAllphonne(data.data.slice(0, 6));

  }
}
// appi coll
const displayAllphonne = (phones) => {
  const phoneContainer = document.getElementById("phones-container");
  phones.forEach(phone => {

    const { brand, image, phone_name, slug } = phone;
    const div = document.createElement("div");
    div.innerHTML = `<div class="card bg-base-100 w-96 shadow-xl">
  <figure class="px-10 pt-10">
    <img
      src=${image}
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${brand}</h2>
    <p>${slug}</p>
    <div class="card-actions">
      <button onClick="phoneDetails('${slug}')" class="btn btn-primary" >Show Details</button>
    </div>
  </div>
</div>`
    phoneContainer.appendChild(div);
  });
}
//phone data search
const handleSearch = () => {
  document.getElementById("spinner").style.display = "block";
  const serchText = document.getElementById("search-box").value;
  setTimeout(() => {
    loadAllPhones(false, serchText);
  }, 3000)
}

// const displayAllphonne=(phones)=>{
//   const phoneContainer=document.getElementById("phones-container");
// }

const handleShowAll = () => {
  loadAllPhones(true,);
}

// Show all phones Details Function
const phoneDetails = async (slug) => {
  const response = await fetch(`https://open
api.programming-hero.com/api/phone/${slug}`);
  const data = await response.json();
  console.log(data.data);

}


loadAllPhones(false, "iphone");
