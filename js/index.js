const loadAllData = async () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  const res = await fetch(url);
  const data = await res.json();
  displayAllData(data.data.tools.slice(0, 6));
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
    // console.log(feature.image)
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
  displayDetails(data.data);
}

const displayDetails = detail => {
  console.log(detail.integrations)
  const detailsData = document.getElementById('modal-container');

  const modalLeft = document.getElementById('modal-left');
  modalLeft.innerHTML = `
  <h3 class="text-lg font-bold">${detail.description}</h3>
  <div class="grid grid-cols-1 lg:grid-cols-3 text-center mt-4 gap-2">
    <p class="text-green-600 font-bold bg-zinc-200 rounded-xl p-2">${detail.pricing[0].price}
    ${detail.pricing[0].plan}
    </p>
    <p class="text-orange-600 font-bold bg-zinc-200 rounded-xl p-2">${detail.pricing[1].price}
    ${detail.pricing[1].plan}
    </p><p class="text-red-500 font-bold bg-zinc-200 rounded-xl p-2">${detail.pricing[2].price}
    ${detail.pricing[2].plan}
    </p>
</div>
<div class="grid grid-cols-1 lg:grid-cols-2 mt-4 gap-2">
    <div>
        <h3 class="text-lg font-bold">Features</h3>
        <p>&#x2022; ${detail.features[1].feature_name ? detail.features[1].feature_name : 'Free of cost'} </p>
        <p>&#x2022; ${detail.features[2].feature_name ? detail.features[2].feature_name : 'Free of cost'}</p>
        <p>&#x2022; ${detail.features[3].feature_name ? detail.features[3].feature_name : 'Free of cost'}</p>
    </div>
    <div>
        <h3 class="text-lg font-bold">Integrations</h3>
        <p>&#x2022; ${detail.integrations[0] ? detail.integrations[0] : 'No Data Found'}</p>
        <p>&#x2022; ${detail.integrations[1] ? detail.integrations[1] : 'No Data Found'}</p>
        <p>&#x2022; ${detail.integrations[2] ? detail.integrations[2] : 'No Data Found'}</p>
    </div>
</div>
  `;
  const modalRight = document.getElementById('modal-right');
  modalRight.innerHTML = `
  
  <img class="rounded-xl" src="${detail.image_link[0]}" alt="">
  <p class=" -mt-12 bg-orange-400 text-rose-600 w-44 px-6 border-2 rounded-xl border-sky-800 ">${detail.accuracy.score * 100 + '% Accuracy'}</p>
  <h3 class="text-lg text-center font-bold mt-6">${detail.input_output_examples[0].input}</h3>
  <p class="py-4 text-center">${detail.input_output_examples[0].output ? detail.input_output_examples[0].output : 'No! Not Yet! Take a break!!!'}</p>
`;



}


loadAllData();

