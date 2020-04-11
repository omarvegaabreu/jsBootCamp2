const task3Element = document.getElementById("task-3");

task3Element.addEventListener("click", greeting);

function greeting() {
  alert("Hi there");
}
greeting();

function personalGreeting(name) {
  alert(`Hi there ${name}`);
}

personalGreeting("omar");

function multipleGreeting(name1, name2, name3) {
  return `${name1},${name2},${name3}`;
}

const trippleGreeting = multipleGreeting("Omar Alejandro", "Aby", "Omar Sr");
alert(trippleGreeting);
