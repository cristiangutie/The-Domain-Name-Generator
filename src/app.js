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
  pronoun.flatMap(a =>
    adj.flatMap(b => noun.flatMap(c => domain.flatMap(d => a + b + c + d)))
  )
);
