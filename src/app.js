/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extension = [".com", ".net", ".us", ".io", ".etc"];

let array = [];

window.onload = () => {
  let domainString = "";

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let l = 0; l < noun.length; l++) {
        for (let k = 0; k < extension.length; k++) {
          domainString = pronoun[i] + adj[j] + noun[l] + extension[k];
          array.push(domainString);
          console.log(domainString);
        }
      }
    }
  }

  for (let e = 0; e < array.length; e++) {
    let newElement = document.createElement("h6");
    newElement.innerHTML = array[e];
    document.querySelector("#domainName").appendChild(newElement);
  }
};
