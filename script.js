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

const planetAssociations = {
    "0": "Uranus",
    "1": "Mercury",
    "2": "Moon",
    "3": "Venus",
    "4": "Mars",
    "5": "Jupiter",
    "6": "Mercury",
    "7": "Moon",
    "8": "Sun",
    "9": "Mercury",
    "10": "Jupiter",
    "11": "Venus",
    "12": "Neptune",
    "13": "Pluto",
    "14": "Jupiter",
    "15": "Saturn",
    "16": "Mars",
    "17": "Uranus",
    "18": "Neptune",
    "19": "Sun",
    "20": "Pluto",
    "21": "Saturn"
};

const kabbalisticMeanings = {
    "0": "The Fool represents the pure soul before entering the physical world, the start of the journey on the Tree of Life.",
    "1": "The Magician symbolizes the first step into the material world, bringing spiritual truths into physical reality.",
    "2": "The High Priestess stands for intuition and the hidden knowledge that must be unlocked.",
    "3": "The Empress embodies the nurturing aspect of the Divine, the power of creation and abundance.",
    "4": "The Emperor represents order, structure, and the application of wisdom and authority.",
    "5": "The Hierophant signifies tradition, spiritual teachings, and the passing of knowledge.",
    "6": "The Lovers symbolize the balance between opposites and the union of dualities.",
    "7": "The Chariot stands for willpower, victory, and the triumph of the spirit over the material.",
    "8": "Strength represents inner power, the mastery of one's emotions, and the courage to face challenges.",
    "9": "The Hermit signifies introspection, spiritual enlightenment, and the search for inner truth.",
    "10": "Wheel of Fortune symbolizes the cyclical nature of life and the karmic lessons to be learned.",
    "11": "Justice stands for fairness, balance, and the karmic consequences of one's actions.",
    "12": "The Hanged Man represents sacrifice, the reversal of perspectives, and the suspension of the material world for spiritual insights.",
    "13": "Death symbolizes transformation, the end of one phase, and the beginning of another.",
    "14": "Temperance stands for balance, moderation, and the harmonious blending of opposites.",
    "15": "The Devil represents materialism, bondage, and the challenges of spiritual freedom.",
    "16": "The Tower signifies sudden change, upheaval, and the breaking down of false structures.",
    "17": "The Star symbolizes hope, inspiration, and the guidance of spiritual light.",
    "18": "The Moon represents the realm of dreams, illusions, and the intuitive insights from the subconscious.",
    "19": "The Sun stands for clarity, enlightenment, and the joy of spiritual realization.",
    "20": "Judgement symbolizes awakening, renewal, and the call to a higher purpose.",
    "21": "The World represents the completion of the spiritual journey and the integration of all experiences."
};

function selectANumber() {
    while (true) {
        selectedCardNumber = parseInt(prompt("First, select a number between 0 and 21 to get a Major Arcana Card"));
        if (isNaN(selectedCardNumber) || selectedCardNumber < 0 || selectedCardNumber > 21) {
            alert("Error, please select a valid number");
        } else {
            break;
        }
    }

    let selectedCard = tarotCards[selectedCardNumber];
    let selectedSign = signEquivalencies[selectedCardNumber];
    let associatedPlanet = planetAssociations[selectedCardNumber];
    let kabbalisticMeaning = kabbalisticMeanings[selectedCardNumber];
    let signo = sign[selectedCardNumber - 4 % 12];

    alert(selectedSign);

    switch (selectedCardNumber) {
        case 4:
            alert(selectedCard + " matches with " + sign[0] + " (Aries) and the planet " + associatedPlanet);
            break;
        case 5:
            alert(selectedCard + " matches with " + sign[1] + " (Taurus) and the planet " + associatedPlanet);
            break;
        case 6:
            alert(selectedCard + " matches with " + sign[2] + " (Gemini) and the planet " + associatedPlanet);
            break;
        case 7:
            alert(selectedCard + " matches with " + sign[3] + " (Cancer) and the planet " + associatedPlanet);
            break;
        case 8:
            alert(selectedCard + " matches with " + sign[4] + " (Leo) and the planet " + associatedPlanet);
            break;
        case 9:
            alert(selectedCard + " matches with " + sign[5] + " (Virgo) and the planet " + associatedPlanet);
            break;
        case 11:
            alert(selectedCard + " matches with " + sign[6] + " (Libra) and the planet " + associatedPlanet);
            break;
        case 13:
            alert(selectedCard + " matches with " + sign[7] + " (Scorpio) and the planet " + associatedPlanet);
            break;
        case 14:
            alert(selectedCard + " matches with " + sign[8] + " (Sagittarius) and the planet " + associatedPlanet);
            break;
        case 15:
            alert(selectedCard + " matches with " + sign[9] + " (Capricorn) and the planet " + associatedPlanet);
            break;
        case 17:
            alert(selectedCard + " matches with " + sign[10] + " (Aquarius) and the planet " + associatedPlanet);
            break;
        case 18:
            alert(selectedCard + " matches with " + sign[11] + " (Pisces) and the planet " + associatedPlanet);
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
            alert(selectedCard + " is not related to any zodiac sign, but is associated with the planet " + associatedPlanet);
            break;
        default:
            alert(selectedCard + " does not match with any zodiac sign, but is associated with the planet " + associatedPlanet);
            break;
    }

    dailyReading(selectedCard, selectedSign, associatedPlanet, kabbalisticMeaning);
}

function dailyReading(selectedCard, selectedSign, associatedPlanet, kabbalisticMeaning) {
    let reading = `Card: ${selectedCard}\nSign: ${selectedSign}\nPlanet: ${associatedPlanet}\nKabbalistic Meaning: ${kabbalisticMeaning}\n\nSpiritual Reading:`;

    switch (selectedCardNumber) {
        case 4:
            reading += `\nThe Emperor matches with Aries (Mars). You are called to bring order and structure to your life, using your inner strength and wisdom. Mars energizes you to act decisively and with authority.`;
            break;
        case 5:
            reading += `\nThe Hierophant matches with Taurus (Venus). You are encouraged to embrace tradition and spiritual teachings. Venus brings harmony and a sense of connection to your spiritual practices.`;
            break;
        case 6:
            reading += `\nThe Lovers match with Gemini (Mercury). Balance and harmony in relationships are key. Mercury supports communication and understanding, helping you merge dualities in your life.`;
            break;
        case 7:
            reading += `\nThe Chariot matches with Cancer (Moon). Your inner willpower leads you forward. The Moon enhances your intuition, guiding you through emotional and spiritual journeys.`;
            break;
        case 8:
            reading += `\nStrength matches with Leo (Sun). Inner strength and courage are your allies. The Sun illuminates your path, bringing clarity and vitality to overcome challenges.`;
            break;
        case 9:
            reading += `\nThe Hermit matches with Virgo (Mercury). Introspection and inner truth are vital. Mercury aids in analyzing your spiritual journey and gaining deeper insights.`;
            break;
        case 11:
            reading += `\nJustice matches with Libra (Venus). Seek fairness and balance in all things. Venus supports harmonious actions and karmic justice in your endeavors.`;
            break;
        case 13:
            reading += `\nDeath matches with Scorpio (Pluto). Embrace transformation and the end of cycles. Pluto aids in profound changes and spiritual rebirth, letting go of the old for the new.`;
            break;
        case 14:
            reading += `\nTemperance matches with Sagittarius (Jupiter). Balance and moderation are essential. Jupiter brings wisdom and expansion to your path of harmonious blending.`;
            break;
        case 15:
            reading += `\nThe Devil matches with Capricorn (Saturn). Face material challenges and seek spiritual freedom. Saturn provides the discipline needed to overcome bondage and strive for liberation.`;
            break;
        case 17:
            reading += `\nThe Star matches with Aquarius (Uranus). Hope and inspiration guide you. Uranus brings innovative and revolutionary energies to your spiritual journey, lighting your way.`;
            break;
        case 18:
            reading += `\nThe Moon matches with Pisces (Neptune). Explore dreams and illusions. Neptune enhances your intuitive and subconscious insights, leading you through the mystical realms.`;
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
            reading += `\n${selectedCard} is not related to any zodiac sign but is associated with the planet ${associatedPlanet}. ${kabbalisticMeaning}`;
            break;
        default:
            reading += `\n${selectedCard} does not match with any zodiac sign but is associated with the planet ${associatedPlanet}. ${kabbalisticMeaning}`;
            break;
    }

    alert(reading);
}

selectANumber();