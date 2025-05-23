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
const phoneDetails = async (slugs) => {
  const response = await fetch(`https://open
api.programming-hero.com/api/phone/${slugs}`);
  const data = await response.json();
  console.log(data.data);
  const{brand,image,slug}=data.data;
  //show data in modal
  const modalContainer = document.getElementById("modal-container");
  modalContainer.innerHTML=` <dialog id="my_modal_1" class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold">${brand}</h3>
    <p class="py-4">${slug}</p>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
 `
  my_modal_1.showModal();

}


loadAllPhones(false, "iphone");
