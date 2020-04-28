(() => {
  const ucFirst = (str) => {
    if (!str) return

    return str[0].toUpperCase() + str.slice(1);
  }

  const showError = (input, message) => {
    const formMessage = input
      .parentElement
      .querySelector('.form-group__message');
      formMessage.textContent = message;
      formMessage.classList.add('form-group__message--show');
      input.classList.add('form-control--error');
  }

  const removeError = (input) => {
    const formMessage = input
      .parentElement
      .querySelector('.form-group__message');
    formMessage.textContent = '';
    formMessage.classList.remove('form-group__message--show');
    input.classList.remove('form-control--error');
  }

  const validateEmail = (input) => {
    const value = input.value;
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value);
  }

  window.addEventListener('DOMContentLoaded', () => {
    const form = document.forms[0];

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = form.email;

      if (!email.value.trim()) {
        const title = ucFirst(email.name);
        showError(email, `${title} is required`)
      } else {
        if (!validateEmail(email)) {
          showError(email, 'Please provide a valid email address');
        } else {
          removeError(email);
        }
      }
    })
  })
})();