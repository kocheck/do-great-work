// Varibales
let bttnNow = document.getElementById('js--now')
let bttnContact = document.getElementById('js--contact')
let bttnThoughts = document.getElementById('js--thoughts')
let bttnPortfolio = document.getElementById('js--portfolio')
const hamburgerButton = document.getElementById('js--hamburger')

//-Note Yes to the smarty pants, I know these can be wrapped in an array. I just havent written it yet. - for future kyle

const menuToggle = function(targetElement, toggleElement1, toggleElement2, toggleElement3, toggleElement4){
    targetElement.addEventListener('click', () => {
        toggleElement1.classList.toggle('hidden');
        // Hey future kyle, it would be smarter to put some null checks in here. makes the function reusible.
        toggleElement2.classList.toggle('hidden');
        toggleElement3.classList.toggle('hidden');
        toggleElement4.classList.toggle('hidden');


    })
}

// Menu Action
menuToggle(hamburgerButton, bttnNow, bttnContact, bttnThoughts, bttnPortfolio);






