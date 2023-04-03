const ocassionItemImg = document.querySelectorAll(".occasion__wrapper img");
console.log(ocassionItemImg);

ocassionItemImg.forEach((img) => {
  // let width = ocassionItemImg.width;
  img.style.height = ocassionItemImg.width;
  console.log(img.width);
});
