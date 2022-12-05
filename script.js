//grab a refrence for neccessary html elemennt
const jokeText = document.querySelector(".joke-text");
//new joek-btn
const newJokeBtn = document.querySelector(".new-joke-btn");
//tweet-button(link)
const tweetBtn = document.querySelector(".tweet-btn");
//add event click listner ro .newJokeBtn
newJokeBtn.addEventListener("click", getJoke);
//immediately call back
getJoke();
//function to get joke
function getJoke() {
  //make an api request to api
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then(function (response) {
      //convert Stringified  JSON response to  javascript object
      return response.json();
    })
    //replace innerText of .joke-text with data.joke

    .then(function (data) {
      //extract the joke text
      const joke = data.joke;
      //do the replacement
      jokeText.innerText = joke;
      //make the tweetBtn(.tweet-btn link ) work by setting href
      //create tweet link with joke
      const tweetLink = `https:twitter.com/share?text=${joke}`;
      //set the href
      tweetBtn.setAttribute("href", tweetLink);
    }) //if some error occured
    .catch(function (error) {
      jokeText.innerText = "OOps! Some error occured:(";
      //remove teh old href from .tweet-btn if found any
      tweetBtn.removeAttribute("href");
      //console the error occured
      console.log(error);
    });
}
