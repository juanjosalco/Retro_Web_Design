function loadMenu() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("replaceableImage").innerHTML = this.responseText;
  };
  xhttp.open("GET", "menu.txt", true);
  xhttp.send();
}

function loadHome() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("replaceableImage").innerHTML = this.responseText;
  };
  xhttp.open("GET", "home.txt", true);
  xhttp.send();
}

const recipes = [
  "https://bakeitwithlove.com/wp-content/uploads/2022/01/what-to-serve-with-burgers-sq.jpg",
  "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg",
  "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/0749D9BC-260D-40F4-A07F-54814C4A82B4/Derivates/A73A7793-F3EE-4B90-ABA4-1CC1A0C3E18F.jpg",
  "https://images.immediate.co.uk/production/volatile/sites/30/2021/02/Next-level-tacos-e163429.jpg?quality=90&webp=true&resize=600,545",
  "https://www.feastingathome.com/wp-content/uploads/2016/04/pad-thai-2.jpg",
  "https://www.elmundoeats.com/wp-content/uploads/2021/02/FP-Quick-30-minutes-chicken-ramen.jpg",
];

let i = 0;

function changeImageSelectedBack() {
  if (i > 0) {
    i--;
    document.getElementById("left").src = recipes[i];
    document.getElementById("selected").src = recipes[i + 1];
    document.getElementById("right").src = recipes[i + 2];
  }
}
function changeImageSelectedFront() {
  if (i < recipes.length - 3) {
    i++;
    document.getElementById("left").src = recipes[i];
    document.getElementById("selected").src = recipes[i + 1];
    document.getElementById("right").src = recipes[i + 2];
  }
}
