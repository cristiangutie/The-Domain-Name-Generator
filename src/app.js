/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".4geeks", ".cl", ".com", ".edu", ".us"];

console.log(
  pronoun.flatMap(b =>
    adj.map(c => noun.map(d => domain.map(a => b + c + d + a)))
  )
);
