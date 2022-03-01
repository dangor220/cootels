const listSteps = document.querySelector('.connection__steps');
const listTitle = document.querySelectorAll('.connection__step-title');

listSteps.addEventListener('click', (e) => {
  if (e.target.classList.contains('connection__step-title')) {
    if (e.target.classList.contains('connection__step-title_active')) {
      e.target.classList.remove('connection__step-title_active');
      e.target.nextElementSibling.classList.remove('connection__step-descr_show');
    } else {
      listTitle.forEach(item => {
        item.classList.remove('connection__step-title_active');
        item.nextElementSibling.classList.remove('connection__step-descr_show');
      });
      e.target.classList.add('connection__step-title_active');
      e.target.nextElementSibling.classList.add('connection__step-descr_show');
    }
  }

})