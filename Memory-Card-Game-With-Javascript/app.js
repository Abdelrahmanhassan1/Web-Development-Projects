
const section = document.querySelector('section');
const player_lives_count = document.querySelector('span');
const player_lives = 6;

player_lives_count.textContent = player_lives;

//Generate the data
const getData = () => [
    {imgSrc:'./imgs/css.png', name:'css'},
    {imgSrc:'./imgs/flutter.jpg', name:'flutter'},
    {imgSrc:'./imgs/html.png', name:'html'},
    {imgSrc:'./imgs/javascript.png', name:'javascript'},
    {imgSrc:'./imgs/lua.png', name:'lua'},
    {imgSrc:'./imgs/python.png', name:'python'},
    {imgSrc:'./imgs/R.jpg', name:'R'},
    {imgSrc:'./imgs/react.png', name:'react'},
    {imgSrc:'./imgs/python.png', name:'python'},
    {imgSrc:'./imgs/lua.png', name:'lua'},
    {imgSrc:'./imgs/flutter.jpg', name:'flutter'},
    {imgSrc:'./imgs/react.png', name:'react'},
    {imgSrc:'./imgs/javascript.png', name:'javascript'},
    {imgSrc:'./imgs/R.jpg', name:'R'},
    {imgSrc:'./imgs/css.png', name:'css'},
    {imgSrc:'./imgs/html.png', name:'html'},
];

const randomize = () =>{
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};

//Let's generate the card 
const cardGenerator = () => {
    const cardData = randomize();
    
    // generating the html
    cardData.forEach((item) => {
        const card = document.createElement('div');
        const face = document.createElement('img');
        const back = document.createElement('div');
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";

        // Adding the content of the cards
        face.src = item.imgSrc;
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
    });

    
};

cardGenerator()