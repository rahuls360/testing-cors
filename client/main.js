fetch('http://localhost:3000')
  // fetch('http://localhost:3000/multiple')
  .then((res) => res.json())
  .then((res) => {
    setResult(JSON.stringify(res, null, 2));
  })
  .catch((err) => {
    setResult('Something went wrong');
  });

function setResult(value) {
  document.querySelector('#result').innerHTML = value;
}
