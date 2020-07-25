// js--portfolio
// default
const svgArt = document.querySelector('.default')

// Button hovers ==========
const buttonPortfolio = document.querySelector('.js--portfolio')


buttonPortfolio.addEventListener('mouseenter', () => {
    console.log("test");
    if (svgArt.classList == 'default') {
    svgArt.classList.toggle('portfolio');

}
});


// menuButton.addEventListener('click', () => {
//   if (navigation.classList == 'side-quests') {
//     navigation.classList.replace('side-quests', 'side-quests-open');
//     closeIcon.classList.toggle('hidden');
//     openIcon.classList.toggle('hidden');
//     headerDiv.classList.toggle('header-open');
//     menuButton.classList.toggle('menu-open');
//   } else {
//     navigation.classList.replace('side-quests-open', 'side-quests');
//     closeIcon.classList.toggle('hidden');
//     openIcon.classList.toggle('hidden');
//     headerDiv.classList.toggle('header-open');
//     menuButton.classList.toggle('menu-open');
//   }
// });