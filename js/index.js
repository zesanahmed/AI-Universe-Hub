const loadAllData = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    displayAllData(data.data.tools);
}


const displayAllData = (features) => {
    const allData = document.getElementById('all-data-container');
    // console.log(features);
    features.forEach(feature => {
        // console.log(feature)
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        `
        allData.appendChild(div);
    });
}


loadAllData();







// const loadPhone = async (searchText, dataLimit) => {
//     const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     displayPhone(data.data, dataLimit);
// }