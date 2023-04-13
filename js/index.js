const loadAllData = async () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  const res = await fetch(url);
  const data = await res.json();
  displayAllData(data.data.tools.slice(0, 3));
}


const displayAllData = (features) => {
  const allData = document.getElementById('all-data-container');
  allData.innerHTML = "";

  const showAll = document.getElementById('showAll');
  if (features.length <= 6) {
    showAll.classList.remove('hidden');
  }
  else {
    showAll.classList.add('hidden');
  }
  // console.log(features);
  features.forEach(feature => {
    // console.log(feature)
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="card w-full bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src="${feature.image}" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Features</h2>
    <p>1. ${feature.features[0]}</p>
    <p>2. ${feature.features[1]}</p>
    <p>3. ${feature.features[2]}</p>
    <hr>
    <div class="flex flex-row">
      <div class="basis-3/4">
        <p class="card-title"> ${feature.name}</p>
        <p> ${feature.published_in}</p>
      </div>
      <div class="card-actions basis-3/12">
      <label onclick="loadDetails('${feature.id}')" for="my-modal" class="btn btn-primary">Details</label>
    </div>
    </div>
  </div>
</div>
        `
    allData.appendChild(div);
  });
  toggleSpinner(false);
}

const toggleSpinner = isLoading => {
  const loaderSection = document.getElementById('loader');
  if (isLoading) {
    loaderSection.classList.remove('hidden');
  }
  else {
    loaderSection.classList.add('hidden');
  }
}





const showAll = async () => {
  toggleSpinner(true);
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  const res = await fetch(url);
  const data = await res.json();
  displayAllData(data.data.tools);
}

const loadDetails = async id => {
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  // displayDetails(data.data);
  console.log(data.data)
}

// const displayDetails = detail => {
//   console.log(detail)
//   const detailsData = document.getElementById('details-data');

//   detailsData.innerHTML = `
//   <input type="checkbox" id="my-modal-3" class="modal-toggle" />
//   <div class="modal">
//       <div class="modal-box relative">
//           <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
//           <div id="details-data">

//           </div>
//       </div>
//   </div>
//   `;
// }


loadAllData();

