const loadAllData = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
}

loadAllData();







// const loadPhone = async (searchText, dataLimit) => {
//     const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     displayPhone(data.data, dataLimit);
// }