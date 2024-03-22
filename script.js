const coverWrap = document.querySelector('.cover')
const success = document.querySelector('.success')
const mainWrap = document.querySelector('.main-wrap')
const error = document.querySelector('.error-div__error')
    document.querySelector('.submit').addEventListener('click', (e) => {
        e.preventDefault();
        const mailInput = document.querySelector('.mail').value.trim();
        if (!mailInput.endsWith('@gmail.com')) {
            error.style.opacity = '1'
        } else {
          error.style.opacity = '1'
          success.style.opacity = '1'
          success.style.zIndex = '1';
          coverWrap.style.opacity = '0';
          mainWrap.style.height = '100vh'
          mainWrap.style.overflow = 'hidden';
        }
    });