// Varibales
let svgArt = document.querySelector('.default')
let buttonPortfolio = document.getElementById('js--portfolio')

// Transition States
const portfolioState = 'portfolio'

// Functions, working at that functional programing 💪
const transition = function(targetElement, svgCanvas, transition){
    targetElement.addEventListener('mouseenter', () => {
        svgCanvas.classList.replace('default', transition);
    });
    targetElement.addEventListener('mouseout', () => {
        svgCanvas.classList.replace(transition, 'default');
    });
}

// =============
// Portfolio Hover
transition(buttonPortfolio, svgArt, portfolioState);

//

// =======================================
