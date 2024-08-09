// GET запрос. (response.json() - это return)
try {
  const result = fetch('http://localhost:3000/users/3939');
  result
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
} catch (e) {
  throw e;
}

const obj = {
  name: 'Raf',
  age: 21,
};

// const btns = document.querySelectorAll('.btn-block');
const forms = document.querySelectorAll('.main_form');

forms.forEach((item) => {
  item.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = item.querySelector('[name="user_name"]');
    const tel = item.querySelector('[name="user_phone"]');

    const userData = {
      name: name.value,
      tel: tel.value,
    };

    try {
      fetch('http://localhost:3000/users', { method: 'POST', body: JSON.stringify(userData) });
    } catch (e) {
      throw e;
    }

    // try {
    //   fetch('http://localhost:3000/users', { method: 'POST', body: JSON.stringify(obj) });
    //   console.log('odododod');
    // } catch (e) {
    //   throw e;
    // }
    // почистили bd
    // fetch('http://localhost:3000/users')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     data.forEach((item) => {
    //       if (item.id !== '3939') {
    //         fetch(`http://localhost:3000/users/${item.id}`, { method: 'DELETE' });
    //       }
    //     });
    //   });
  });
});
