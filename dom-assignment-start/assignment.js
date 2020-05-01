const li = document.getElementById("task-1");
li.style.backgroundColor = "black";
li.style.color = "white";
const head = document.querySelector("head");
head.textContent = "this is new head";
const h1 = document.querySelector("h1");
h1.textContent = "assignment solved";

class Course {
  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }
  coursePrint() {
    return `Title:${this.title},Length ${this.length},Price:${this.price}`;
  }
}
const printConsole = new Course();

console.log(printConsole.coursePrint("title", "length", "price"));
