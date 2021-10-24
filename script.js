function twoSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`two seconds have passed`);
    }, 2000);
  });
}
// function twoSeconds() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log(`two seconds have passed`));
//     }, 2000);
//   });
// }

function oneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`one second has passed`);
    }, 1000);
  });
}

// await tells the function to pause,
//before the function can move on to the next line

async function myAsync() {
  const a = await twoSeconds();
  console.log(a);

  console.log('this should go right after a');

  const b = await oneSecond();
  console.log(b);

  console.log('go after b');
}

myAsync();
