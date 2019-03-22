var imageElement = document.getElementById("bong-den");

function bat() {
  imageElement.src = "./pic_bulbon.gif";
}

function tat() {
  imageElement.src = "./pic_bulboff.gif";
}

function batTat() {
  console.log(imageElement.src);
  console.log(typeof (imageElement.src));
  console.log(imageElement.src.includes('bulboff'));
  if (imageElement.src.includes('bulboff')) {
    imageElement.src = "./pic_bulbon.gif";
  } else  {
    imageElement.src = "./pic_bulboff.gif";
  }
  if (imageElement.src == "http://127.0.0.1:5500/bong-den/pic_bulboff.gif") {
    imageElement.src = "./pic_bulboff.gif";
  } else {
    imageElement.src = "./pic_bulbon.gif";
  }
}