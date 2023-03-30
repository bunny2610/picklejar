// document.getElementById("myBtn").onclick = () => {
//   let p = document.getElementById("Enterid").value;
//   // GEThttps://api.vimeo.com/users/{user_id}/videos

//   // https://api.vimeo.com/videos/694425697

//   // https://api.vimeo.com/videos/{video_id}/albums
//   //  const fetch = null;
//   //  console.log("https://api.vimeo.com/videos")

//   fetch(`https://api.vimeo.com/videos/${p}`, {
//     headers: {
//       Authorization: "bearer d44398da964d266ad488d544fbe4139a",
//       Accept: "application/vnd.vimeo.*+json;version=3.4",
//       // "base_link": "https://i.vimeocdn.com/video/1404973742-8cf12c2d0e9e98f2d6da166124dd1bfbf597ba4df709f74b740afcc723695fd1-d"

//       // "resource_key": "42ad258259b0a6bbb6fcc0e345e7df80f18e1c63"
//     },
//   })
//     .then((data) => {
//       return data.json();
//     })
//     .then((data2) => {
//       save_data(data2);
//       document.getElementById("title").value = data2.name;
//       document.getElementById("description").value = data2.description;
//       document.getElementById("duration").value = `00:${data2.duration}:00`;

//       document.getElementById("video_block").querySelector("img").src =
//         data2.pictures.sizes[6].link;
//       document.getElementById("video_link").value =
//         data2.pictures.sizes[6].link;
//       document
//         .getElementById("video_block")
//         .querySelector(".remove_img")
//         .classList.remove("d-none");
//       document
//         .getElementById("video_block")
//         .querySelector(".label_block")
//         .classList.add("d-none");

//       document.getElementById("thumbnail_block").querySelector("img").src =
//         data2.pictures.sizes[5].link;
//       document.getElementById("thumbnail_link").value =
//         data2.pictures.sizes[5].link;
//       document
//         .getElementById("thumbnail_block")
//         .querySelector(".remove_img")
//         .classList.remove("d-none");
//       document
//         .getElementById("thumbnail_block")
//         .querySelector(".label_block")
//         .classList.add("d-none");

//       document.getElementById("background_block").querySelector("img").src =
//         data2.pictures.sizes[4].link;
//       document.getElementById("background_link").value =
//         data2.pictures.sizes[4].link;
//       document
//         .getElementById("background_block")
//         .querySelector(".remove_img")
//         .classList.remove("d-none");
//       document
//         .getElementById("background_block")
//         .querySelector(".label_block")
//         .classList.add("d-none");
//     });
// };

// document.getElementById("black").addEventListener("click", () => {
//   // save_data(data2);
//   let id = document.getElementById("Enterid").value;
//   window.href.location = `/event/${id}`;
// });

// function save_data(data) {
//   fetch("/creatEvent", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       document.getElementById("event_id").value = data.id;
//     });
// }

// `https://api.vimeo.com/users/${p}/videos`
// $("#myBtn").click();

$(".remove_img").on("click", function () {
  this.parentNode.querySelector("img").src = "";
  this.parentNode.querySelector("input[type='file']").value = "";
  this.parentNode.querySelector(".file_link").value = "";
  this.parentNode.querySelector(".remove_img").classList.add("d-none");
  this.parentNode.querySelector(".label_block").classList.remove("d-none");
});

$("#video_img").on("change", function (event) {
  var image = this.parentNode.querySelector("img");
  image.src = URL.createObjectURL(event.target.files[0]);
  this.parentNode.querySelector(".label_block").classList.add("d-none");
  this.parentNode.querySelector(".remove_img").classList.remove("d-none");
});

$("#thumbnail_img").on("change", function (event) {
  var image = this.parentNode.querySelector("img");
  image.src = URL.createObjectURL(event.target.files[0]);
  this.parentNode.querySelector(".label_block").classList.add("d-none");
  this.parentNode.querySelector(".remove_img").classList.remove("d-none");
});

$("#background_img").on("change", function (event) {
  var image = this.parentNode.querySelector("img");
  image.src = URL.createObjectURL(event.target.files[0]);
  this.parentNode.querySelector(".label_block").classList.add("d-none");
  this.parentNode.querySelector(".remove_img").classList.remove("d-none");
});
