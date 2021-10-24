async function makeFetchReq() {
  const myfetch = await fetch('https://jsonplaceholder.typicode.com/users');
  const getData = await myfetch.json();
  return getData;
}

async function getRandomUser() {
  const users = await makeFetchReq();
  return users[Math.floor(Math.random() * 10)];
}

//none of these will work, because it is being executed and ran before the
//async code has run
// ~
// const mything = getRandomUser();
// console.log(mything);
// console.log(getRandomUser());
// getRandomUser();

async function displayRandomUser() {
  const randoUser = await getRandomUser();
  console.log(randoUser);
  return randoUser;
}

const btn = document.createElement('button');
btn.textContent = 'button';
btn.addEventListener('click', displayRandomUser);
document.body.appendChild(btn);
