//1
// let labels = document.querySelectorAll("label");
// for (let i = 0; i < labels.length; i++) {
//   let time = 0;
//   let myArray = labels[i].innerHTML.split("");
//   let newInnerHTML = "";
//   for (let j = 0; j < myArray.length; j++) {
//     let element = `<span style="transition-delay:${time}ms;">${myArray[j]}</span>`;
//     newInnerHTML += element;
//     time += 50;
//   }
//   labels[i].innerHTML = newInnerHTML;
// }

//2
let labels = document.querySelectorAll("label");
labels.forEach(f);
function f(label) {
  label.innerHTML = label.innerText.split("").map(mapf).join("");
}

function mapf(item, index) {
  return `<span style="transition-delay: ${
    400 - index * 50
  }ms;">${item}</span>`;
}

// 3
//let labels = document.querySelectorAll("label");
// document.querySelectorAll("label").forEach((label) => {
//   label.innerHTML = label.innerText
//     .split("")
//     .map((item, index) => {
//       return `<span style="transition-delay:${index * 50}ms;">${item}</span>`;
//     })
//     .join("");
// });
