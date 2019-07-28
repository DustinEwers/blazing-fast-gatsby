const phrases = [
"Ope",
"Where-Abouts",
"Spotted Cow",
"Liney Red",
"Brandy Old Fashioned",
"Stop-and-go-lights",
"Fleet Farm",
"Cheesehead",
"Fish Fry",
"Bubbler",
"Aw Geez",
"For cripes sakes",
"Up Nort",
"Uff-Da",
"Ya Know?",
"Believe You Me",
"You betcha",
"Packers",
"Brewers",
"Badgers",
"Da Pack",
"Walleye",
"Culvers",
"Kwik Trip",
"Roundabouts",
"Supper Club",
"Cringle",
"Piggly Wiggly",
"practice beers",
"Tyme machine",
"squeaky cheese curds",
"no, yeah",
"yeah, no",
"Summerfest", 
"Bratfest",
"cabin",
"meat raffle",
"north of 8",
"Da lake"]

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

const generateParagraph = () => {
    const numberOfWords = getRandomInt(20) + 10
    const numberOfPhrases = phrases.length
    let words = []

    for(let i = 0;i< numberOfWords; i++){
        words.push(phrases[getRandomInt(numberOfPhrases)])
    }

    return words.join(' ')    
}

const generateText = (numberOfParagraphs) => {
    const paragraphs = []
    for(let i = 0;i< numberOfParagraphs; i++){
        paragraphs.push(generateParagraph())
    }
    
    return paragraphs
}

export default generateText
