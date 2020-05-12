const button = document.querySelector("button");
const output = document.querySelector("p");

const setTimer = (duration) => {
  const promise = new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved("timer done");
    }, duration);
  });
  return promise;
};

const getPosition = (options) => {
  const promise = new Promise((resolved, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolved(success);
      },
      (error) => {
        reject(error);
      }
    );
  });
  return promise;
};

function trackUserHandler() {
  getPosition()
    .then((positionData) => {
      console.log(positionData);
    })
    .catch((error) => {
      console.log("this is my error" + error);
    });

  // setTimer(2000).then((done) => {
  //   console.log(done);
  // });
}

button.addEventListener("click", trackUserHandler);

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);
