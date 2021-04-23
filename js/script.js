let addBtn = document.querySelector(".add");
let inputdata = document.querySelector("#inputdata");
let ul = document.querySelector("ul");
let error = document.querySelector(".msg");

addBtn.addEventListener("click", () => {
  let realVal = inputdata.value;

  if (realVal === "") {
    error.innerHTML = "please write some thing here..";
    error.style.color = "red";
  } else {
    error.innerHTML = "your lists..";
    error.style.color = "green";

    //create the list
    var list = document.createElement("li");
    list.append(realVal);
    list.className = "close";
    ul.appendChild(list);
    // console.log(list);

    //create the span (icons close button)
    let span = document.createElement("span");
    let i = document.createElement("i");
    i.setAttribute("class", "fa fa-trash");
    span.appendChild(i);
    list.appendChild(span);

    let spandata = document.querySelectorAll("span");
    //   console.log(spandata);
    for (const spanDa of spandata) {
      // console.log(spanDa);
      spanDa.addEventListener("click", () => {
        spanDa.parentElement.style.display = "none";
      });
    }
    document.querySelector("#inputdata").value = "";
  }
});

//checked functinalaty
ul.addEventListener("click", (element) => {
  if (element.target.tagName === "LI") {
    element.target.classList.toggle("checked");
  }
});

// list close functionalaty
let spandata = document.querySelectorAll("span");
// console.log(spandata);
for (const spanD of spandata) {
  spanD.addEventListener("click", () => {
    spanD.parentElement.style.display = "none";
  });
}

// time and dete functionlaty
let strong = document.querySelector("strong");
let small = document.querySelector("small");
let days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

let current_date = new Date();
strong.innerHTML = days[current_date.getDay()];
small.innerHTML = current_date.toLocaleDateString();
