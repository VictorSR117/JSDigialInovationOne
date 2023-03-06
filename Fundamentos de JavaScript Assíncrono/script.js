const BASE_URL = "https://thatcopy.pw/catapi//rest";

var cat = document.querySelector("#cat")
var catsBtn = document.querySelector("#change-cat").addEventListener("click", loadImage = async () => {
    cat.src = await getCats();
});

// const getCats = async () => {
//     try {
//         var data = await fetch(BASE_URL);
//         var json = await data.json();
    
//         return json.webpurl;
//     }
//     catch(e) {
//         console.log(e.message);
//     }
// }

const getCats = async () => {
    var data = await fetch(BASE_URL).then
        ((res) => res.json()).catch
        ((e) => console.log(e));
    return data.webpurl;
}

loadImage();