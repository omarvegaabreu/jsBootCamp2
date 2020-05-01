class Course {
  #price;
  get price() {
    return "$" + this.#price;
  }
  set price(value) {
    if (value < 0) {
      throw "retard Invalid price";
    }
    this.price = value;
  }

  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.#price = price;
  }
  courseValue() {
    return this.length.length / this.#price;
  }

  courseSummary() {
    return `Title:${this.title}, Length:${this.length},Price:${this.price}`;
  }
}

const course1 = new Course("will learn to hack", "as long as it takes", -100);
const course2 = new Course("javascript for hacking", "very long", 50);
console.log(
  course1,
  course1.courseSummary(),
  "course value:",
  course1.courseValue()
);
console.log(
  course2,
  course2.courseSummary(),
  "course value:",
  course2.courseValue()
);

class PracticalCourse extends Course {
  constructor(title, length, price, numberOfExercise) {
    super(title, length, price);
    this.numberOfExercise = numberOfExercise;
  }
}

class TheoreticalCourse extends Course {
  constructor(title, length, price) {
    super(title, length, price);
  }
  publish() {
    return `this shit was published`;
  }
}

const practical = new PracticalCourse("practical course", "4 hours", 19.95, 34);
console.log(practical);
const theoretical = new TheoreticalCourse("theoretical course", "5 hours", 55);
console.log(theoretical.publish());
