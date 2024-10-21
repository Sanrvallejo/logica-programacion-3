const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  let num = document.querySelector('#n-fact').value;
  num = parseInt(num);

  if (isNaN(num)) {
    alert('Debes intriducir un número');
  } else {
    let factorial = 1;

    for (let index = 1; index <= num; index++) {
      factorial *= index;
    }

    const text = document.querySelector('h3');

    text.innerText = `El factorial de ${num} es ${factorial}`;
  }

})
