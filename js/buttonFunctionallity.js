const arrayImg = [
  "https://www.cocinayaficiones.com/wp-content/uploads/Magret-de-pato-y-granada-destacada.jpg",
  "https://static.dw.com/image/15800920_403.jpg",
  "https://www.unileverfoodsolutions.es/dam/global-ufs/mcos/SPAIN/calcmenu/recipes/ES-recipes/general/panecillo-de-pollo-crujiente-con-ensalada-de-col-lombarda/main-header.jpg/jcr:content/renditions/cq5dam.thumbnail.desktop.jpeg",
  "https://www.gourmet4life.com/image0428/09/092384dd26ce82ecffe2e2b3f4ec39ba.jpg",
  "https://www.gourmet4life.com/image0428/6e/6eb1689db36b39acd7ab8260a0254c5d.jpg",
  "https://www.gourmet4life.com/image0428/64/64b00629d6fedd4124e6a3e92535bd8c.jpg",
];

let i = 0;

function changeImageSelectedBack() {
  if (i > 0) {
    i--;
    document.getElementById("left").src = arrayImg[i];
    document.getElementById("selected").src = arrayImg[i + 1];
    document.getElementById("right").src = arrayImg[i + 2];
  }
}
function changeImageSelectedFront() {
  if (i < arrayImg.length - 3) {
    i++;
    document.getElementById("left").src = arrayImg[i];
    document.getElementById("selected").src = arrayImg[i + 1];
    document.getElementById("right").src = arrayImg[i + 2];
  }
}


