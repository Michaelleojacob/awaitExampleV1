function doubleAfterOneSecond(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x * 2);
    }, 1000);
  });
}

async function callMultipleDoubles() {
  const a = await doubleAfterOneSecond(5);
  console.log(`callMultipleDoubles ${a}`);
  const b = await doubleAfterOneSecond(a);
  console.log(`callMultipleDoubles ${b}`);
  const c = await doubleAfterOneSecond(b);
  console.log(`callMultipleDoubles ${c}`);
  const sum = a + b + c;
  console.log(`callMultipleDoubles ${sum}`);
  console.log(`callMultipleDoubles ${a} + ${b} + ${c} = ${sum}`);
}
callMultipleDoubles();

async function addAsync(x) {
  const a = await doubleAfterOneSecond(10);
  const b = await doubleAfterOneSecond(20);
  const c = await doubleAfterOneSecond(30);
  console.log(`addAsync ${x} + ${a} + ${b} + ${c} = ${x + a + b + c}`);
  return x + a + b + c;
}

addAsync(5);
