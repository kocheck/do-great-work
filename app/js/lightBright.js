// Varibales
let svgArt = document.querySelector('.default')
let buttonPortfolio = document.getElementById('js--portfolio')
let buttonThoughts = document.getElementById('js--thoughts')

// Transition States
const portfolioState = 'portfolio'
const thoughtsState = 'thoughts'

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
// Thoughts Hover
transition(buttonThoughts, svgArt, thoughtsState);

//

// =======================================
