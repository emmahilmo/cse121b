const characterElement = document.querySelector('#characters');
let characterList = [];

const displaycharacters = (characters) => {
    characterElement.innerHTML = '';
    characters.forEach(character => {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        const img = document.createElement('img');

        h3.textContent = character.characterNames;

        img.scr = character.imageUrl;
        img.alt = character.characterName;

        article.appendChild(h3);
        article.appendChild(img);

        characterElement.appendChild(article);
    });
};

const getcharacters = async () => {
    const response = await fetch("https://emmahilmo.github.io/cse121b/characters.json");
    characterList = await response.json();
    displaycharacters(characterList);
};
/* reset Function */
const reset = () => {
    characterElement.innerHTML = '';
};
/* sortBy Function */
const sortBy = () => {
    const filter = document.getElementById('sortBy').value;

    switch (filter) {
        case 'campaign1':
            displaycharacters(characterList.filter(character => character.campaign.includes('Campaign 1')));
            break;
        case 'campaign2':
            displaycharacters(characterList.filter(character => character.campaign.includes('Campaign 2')));
            break;
        case 'campaign3':
            displaycharacters(characterList.filter(character => character.campaign.includes('Campaign 3')));
            break;
        case 'other':
            displaycharacters(characterList.filter(character => character.campaign.includes('Other')))
        case 'all':
            displaycharacters(characterList);
            break;
    }
};
getcharacters();
/* Event Listener */
const sortByElement = document.getElementById('sortBy');
sortByElement.addEventListener('change', sortBy);