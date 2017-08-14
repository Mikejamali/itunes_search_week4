/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play


let container = document.getElementById("container");
let button = document.querySelector("button")
let stuff = document.querySelectorAll(".recipecontainer")
// let getInit = {
//   method: "get",
//   mode: "no-cors",
// }
button.addEventListener("click", function(){
  let input = document.getElementById("SearchBox").value;
  console.log('Input:', input);
  // let entry = "https://recipepuppyproxy.herokuapp.com/api/?q=" +
  // let entry = 'https://itunes.apple.com/search?term=311&limit=8';
  let entry = 'https://itunes.apple.com/search?term=' + input + '&limited=16';
  // container.innerHTML = "";
  // console.log(container);


fetch(entry)

  .then(function(response) {
    console.log('Jamali\'s Response:', response);

      if (response.status !== 200) {
        console.log("response status", response.status);
        return;
      }
      // <div>

      // </div>
      //
      response.json().then(function(data) {
        // console.log("Here is the data:", data.results[0].artistName);
        for (var i = 0; i < 16; i++) {

          let template = "";
          template =
          ` <a href=${data.results[i].previewUrl} target="_blank">
              <img src=${data.results[i].artworkUrl100}>
            </a>
            <p>${data.results[i].artistName}</p>
            <p>${data.results[i].trackName}</p>

          `;
            stuff[i].innerHTML = template;
        }
      });
    }
  )

  .catch(function(error) {
    console.log("Fetch Error :-S", error);
  });
})
