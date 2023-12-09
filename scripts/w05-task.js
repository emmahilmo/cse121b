/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    templesElement.innerHTML = '';
    temples.forEach(temple => {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        const img = document.createElement('img');

        h3.textContent = temple.templeNames;

        img.src = temple.imageUrl;
        img.alt = temple.location;

        article.appendChild(h3);
        article.appendChild(img);

        templesElement.appendChild(article);
    });
};
/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
};
/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
};
/* sortBy Function */
const sortBy = () => {
    const filter = document.getElementById('sortBy').value;

    switch (filter) {
        case 'utah':
            displayTemples(templeList.filter(temple => temple.location.includes('Utah')));
            break;
        case 'notutah':
            displayTemples(templeList.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            const cutoffDate = new Date(1950, 0, 1);
            displayTemples(templeList.filter(temple => new Date(temple.dedicated) < cutoffDate));
            break;
        case 'all':
            displayTemples(templeList);
            break;
    }
};
getTemples();
/* Event Listener */
const sortByElement = document.getElementById('sortBy');
sortByElement.addEventListener('change', sortBy);