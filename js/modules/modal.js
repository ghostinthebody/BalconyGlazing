function bindModal(btnSelector, modalSelector, closeSelector) {
  const btn = document.querySelectorAll(btnSelector);
  const modal = document.querySelector(modalSelector);
  const close = document.querySelector(closeSelector);

  function showModal() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  function hideModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  btn.forEach((item) => {
    item.addEventListener('click', (e) => {
      if (e.target) {
        e.preventDefault();
      }

      showModal();
    });
  });

  close.addEventListener('click', () => {
    hideModal();
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      hideModal();
    }
  });
}

function showModalByTime(selector, time) {
  setTimeout(() => {
    document.querySelector(selector).style.display = 'block';
    document.body.style.overflow = 'hidden';
  }, time);
}

bindModal('.header_btn_wrap', '.popup_engineer', '.popup_engineer .popup_close');
bindModal('.phone_link', '.popup', '.popup .popup_close');
// showModalByTime('.popup_engineer', 3000);
