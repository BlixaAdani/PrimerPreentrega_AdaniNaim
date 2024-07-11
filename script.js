let selectedCardNumber = null;

const sign = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

const signEquivalencies = {
    "0": "The Fool, the starting point, the innocence of youth, the starting of the path",
    "1": "The Magician, the coming back from the journey, the acquiring of experience",
    "2": "The High Priestess, the female counterpart of The Fool, the young mistress",
    "3": "The Empress, the female counterpart of both Magician and Emperor, the very face of Morgana",
    "4": "The Emperor, both fiery strength and calm perseverance",
    "5": "The Hierophant, The Pope, the golden bull of tradition",
    "6": "The Lovers, a union of opposites, the merging of paths",
    "7": "The Chariot, the triumph of willpower, the journey forward",
    "8": "Strength, the mastery of emotions, the inner fortitude",
    "9": "The Hermit, the search for inner truth, the solitary path",
    "10": "Wheel of Fortune, the cycles of fate, the turning point",
    "11": "Justice, the balance of truth, the scales of karma",
    "12": "The Hanged Man, the sacrifice for insight, the pause in action",
    "13": "Death, the end of a cycle, the transformation through letting go",
    "14": "Temperance, the blending of opposites, the path of moderation",
    "15": "The Devil, the bondage of materialism, the challenge of freedom",
    "16": "The Tower, the sudden upheaval, the destruction of falsehoods",
    "17": "The Star, the hope and inspiration, the guidance from above",
    "18": "The Moon, the realm of dreams, the illusion and intuition",
    "19": "The Sun, the clarity and vitality, the joy of life",
    "20": "Judgement, the awakening and renewal, the call to higher purpose",
    "21": "The World, the completion of a journey, the integration of experience"
};

const tarotCards = [
    "The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor",
    "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit",
    "Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance",
    "The Devil", "The Tower", "The Star", "The Moon", "The Sun",
    "Judgement", "The World"
];

const cardImages = {
    "The Fool": "images/fool.jpg",
    "The Magician": "images/magician.jpg",
    "The High Priestess": "images/high_priestess.jpg",
    "The Empress": "images/empress.jpg",
    "The Emperor": "images/emperor.jpg",
    "The Hierophant": "images/hierophant.jpg",
    "The Lovers": "images/lovers.jpg",
    "The Chariot": "images/chariot.jpg",
    "Strength": "images/strength.jpg",
    "The Hermit": "images/hermit.jpg",
    "Wheel of Fortune": "images/wheel_of_fortune.jpg",
    "Justice": "images/justice.jpg",
    "The Hanged Man": "images/hanged_man.jpg",
    "Death": "images/death.jpg",
    "Temperance": "images/temperance.jpg",
    "The Devil": "images/devil.jpg",
    "The Tower": "images/tower.jpg",
    "The Star": "images/star.jpg",
    "The Moon": "images/moon.jpg",
    "The Sun": "images/sun.jpg",
    "Judgement": "images/judgement.jpg",
    "The World": "images/world.jpg"
};

// Function to select a card number between 0 and 21
function selectANumber() {
    selectedCardNumber = parseInt(prompt("Please, select a number between 0 and 21"));

    if (isNaN(selectedCardNumber) || selectedCardNumber < 0 || selectedCardNumber > 21) {
        alert("Error, please select a valid number");
    } else {
        let selectedCard = tarotCards[selectedCardNumber];
        let selectedImage = cardImages[selectedCard];
        let imgElement = document.getElementById('cardImage');
        imgElement.classList.remove('show');
        imgElement.src = selectedImage;
        setTimeout(() => imgElement.classList.add('show'), 10);
    }
}

selectANumber()

// Function to relate the selected card with a sign
function signEq() {
    if (selectedCardNumber === null) {
        alert("Please select a card number first.");
        return;
    }

    switch (selectedCardNumber) {
        case 4:
            alert(cardDescription + " matches with " + sign[0] + " (Aries)");
            break;
        case 5:
            alert(cardDescription + " matches with " + sign[1] + " (Taurus)");
            break;
        case 6:
            alert(cardDescription + " matches with " + sign[2] + " (Gemini)");
            break;
        case 7:
            alert(cardDescription + " matches with " + sign[3] + " (Cancer)");
            break;
        case 8:
            alert(cardDescription + " matches with " + sign[4] + " (Leo)");
            break;
        case 9:
            alert(cardDescription + " matches with " + sign[5] + " (Virgo)");
            break;
        case 11:
            alert(cardDescription + " matches with " + sign[6] + " (Libra)");
            break;
        case 13:
            alert(cardDescription + " matches with " + sign[7] + " (Scorpio)");
            break;
        case 14:
            alert(cardDescription + " matches with " + sign[8] + " (Sagittarius)");
            break;
        case 15:
            alert(cardDescription + " matches with " + sign[9] + " (Capricorn)");
            break;
        case 17:
            alert(cardDescription + " matches with " + sign[10] + " (Aquarius)");
            break;
        case 18:
            alert(cardDescription + " matches with " + sign[11] + " (Pisces)");
            break;
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 10:
        case 12:
        case 16:
        case 19:
        case 20:
        case 21:
            alert(cardDescription + " is not related to any zodiac sign.");
            break;
        default:
            alert(cardDescription + " does not match with any zodiac sign");
            break;
    }
}


function signEq() {
        if (selectedCardNumber === null) {
            alert("Please select a card number first.");
            return;
        }
    
        let cardDescription = signEquivalencies[selectedCardNumber];
    
        // Reset the position of all signs
        const signs = document.querySelectorAll('.sign');
        signs.forEach(sign => {
            sign.classList.remove('center');
        });
    
        // Determine which sign to move to the center based on selectedCardNumber
        let signElement;
        switch (selectedCardNumber) {
            case 4:
                signElement = document.getElementById('signAries');
                alert(cardDescription + " matches with Aries");
                break;
            case 5:
                signElement = document.getElementById('signTaurus');
                alert(cardDescription + " matches with Taurus");
                break;
            case 6:
                signElement = document.getElementById('signGemini');
                alert(cardDescription + " matches with Gemini");
                break;
            case 7:
                signElement = document.getElementById('signCancer');
                alert(cardDescription + " matches with Cancer");
                break;
            case 8:
                signElement = document.getElementById('signLeo');
                alert(cardDescription + " matches with Leo");
                break;
            case 9:
                signElement = document.getElementById('signVirgo');
                alert(cardDescription + " matches with Virgo");
                break;
            case 11:
                signElement = document.getElementById('signLibra');
                alert(cardDescription + " matches with Libra");
                break;
            case 13:
                signElement = document.getElementById('signScorpio');
                alert(cardDescription + " matches with Scorpio");
                break;
            case 14:
                signElement = document.getElementById('signSagittarius');
                alert(cardDescription + " matches with Sagittarius");
                break;
            case 15:
                signElement = document.getElementById('signCapricorn');
                alert(cardDescription + " matches with Capricorn");
                break;
            case 17:
                signElement = document.getElementById('signAquarius');
                alert(cardDescription + " matches with Aquarius");
                break;
            case 18:
                signElement = document.getElementById('signPisces');
                alert(cardDescription + " matches with Pisces");
                break;
            case 0:
            case 1:
            case 2:
            case 3:
            case 10:
            case 12:
            case 16:
            case 19:
            case 20:
            case 21:
                alert(cardDescription + " is not related to any zodiac sign.");
                return;
            default:
                alert(cardDescription + " does not match with any zodiac sign");
                return;
        }
    
        // Move the matched sign to the center
        if (signElement) {
            signElement.classList.add('center');
        }
    }