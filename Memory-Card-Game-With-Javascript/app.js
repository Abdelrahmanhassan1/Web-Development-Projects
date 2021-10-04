
const section = document.querySelector('section');
let player_lives_count = document.querySelector('span');
let player_lives = 6;

player_lives_count.textContent = player_lives;

//Generate the data
const getData = () => [
    {imgSrc:'./imgs/css.png', name:'css'},
    {imgSrc:'./imgs/flutter.png', name:'flutter'},
    {imgSrc:'./imgs/html.png', name:'html'},
    {imgSrc:'./imgs/javascript.png', name:'javascript'},
    {imgSrc:'./imgs/lua.png', name:'lua'},
    {imgSrc:'./imgs/python.png', name:'python'},
    {imgSrc:'./imgs/R.jpg', name:'R'},
    {imgSrc:'./imgs/react.png', name:'react'},
    {imgSrc:'./imgs/python.png', name:'python'},
    {imgSrc:'./imgs/lua.png', name:'lua'},
    {imgSrc:'./imgs/flutter.png', name:'flutter'},
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
        card.setAttribute('name', item.name);
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener("click", (e) => {
            card.classList.toggle("toggleCard");
            checkCards(e)
        });
    });
};

// Checking the cards
const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped');
    const toggleCard = document.querySelectorAll('.toggleCard');
    
    // Checking the flipped cards
    if(flippedCards.length === 2){
        if(flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')){
            console.log('matched');
            flippedCards.forEach((card) => {
                card.classList.remove('flipped');
                card.style.pointerEvents= 'none';
            })
        }else{
            console.log('wrong');
            flippedCards.forEach( card => {
                card.classList.remove('flipped');
                setTimeout(() => card.classList.remove('toggleCard'), 500);
                
            });
            player_lives--;
            player_lives_count.textContent = player_lives;
            if( player_lives === 0){
                setTimeout(() => restart("Try Again :("), 500); 
            }
        }
    }
    // checking if won the game
    if(toggleCard.length === 16){
        setTimeout(() => restart('YOU WON :)'), 500); 
        
    }
};

// if lives reached zero
const restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll('.face');
    let cards = document.querySelectorAll(".card");
    section.style.pointerEvents = "none";
    cardData.forEach((item, index)=> {
        cards[index].classList.remove('toggleCard');
        setTimeout(()=>{
            cards[index].style.pointerEvents = "all";
            faces[index].src = item.imgSrc;
            cards[index].setAttribute('name', item.name);
            section.style.pointerEvents = "all";
        }, 500);
    });
    player_lives = 6;
    player_lives_count.textContent = player_lives;
    setTimeout(() => window.alert(text), 500);
}
cardGenerator()