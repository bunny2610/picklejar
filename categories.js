// let search = document.getElementById('searchTxt');
// search.addEventListener("input", function(){
//     let inputVal = search.value.toLowerCase();
//     let noteCards = document.getElementsByClassName('noteCard');
//     Array.from(noteCards).forEach(function(element){
//         let cardTxt = element.getElementsByTagName("p")[0].innerText;
//         if(cardTxt.includes(inputVal)){
//             element.style.display = "block";
//         }
//         else{
//             element.style.display = "none";
//         }
//     })
// })
show_categories();

function show_categories() {
  fetch("/all_categories")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("card-block").innerHTML = "";
      data["categories"].forEach((element) => {
        var card = document.getElementById("categoryCard").cloneNode(true);
        card.querySelector(".card-title").innerText = element.text;
        card.setAttribute("id", `category_${element._id}`);
        card.setAttribute("id", `category_${element._id}`);
        card.classList.remove("d-none");
        card
          .querySelector(".delete_btn")
          .setAttribute("value", `${element._id}`);
        card
          .querySelector(".delete_btn")
          .addEventListener("click", delete_category);
        document.getElementById("card-block").appendChild(card);
      });
    });
}

document.getElementById("addBtn").addEventListener("click", function () {
  let category_name = document.getElementById("addTxt").value;
  let data = {
    category_name: category_name,
  };
  fetch("/categories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data["status"] == "success") {
        document.getElementById("addTxt").value = "";
        show_categories();
      }
    });
});

function delete_category() {
  data = { category_id: this.value };
  fetch("/delete_category", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data["status"] == "success") {
        show_categories();
      }
    });
}
