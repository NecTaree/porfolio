const init = () => {
  burger_nav();
};

const ul = document.getElementById('ul');
const body = document.querySelector('body');

let burger_nav = () => {
  let menu = document.querySelector('.menu-burger');

  menu.addEventListener('click', () => {
    val();
    menu.classList.toggle(`toggle`);
  });

  const val = () => {
    if (ul.classList.contains('show-menu')) {
      ul.classList.remove('show-menu');
      body.classList.remove('no-move');
    } else {
      ul.classList.add('show-menu');
      body.classList.add('no-move');
    }
  };
};
init();
