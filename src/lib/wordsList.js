
const item = {
    name: "",
    emoji: "",
    desc: "",
    audio: ""
}

const wordsList = {
    People: [
        {
            name: "Daddy",
            emoji: "👨",
            desc: "My dad is Shahzad",
            audio: "Words/daddy.mp3"
        }
    ],
    Favourites: [
        {
            name: "Hiya",
            emoji: "👋",
            desc: "I like to introduce myself with this",
            audio: "Words/hiya.mp3"
        },
        {
            name: "Oh yes!",
            emoji: "👍",
            desc: "I say this when I really agree with or want something",
            audio: "Words/oh-yes.mp3"
        },
        {
            name: "Oh dear!",
            emoji: "👎",
            desc: "I say this when I see a problem",
            audio: "Words/oh-dear.mp3"
        }
    ],
    Places: [
        {
            name: "Shops",
            emoji: "🛍️ 🛒",
            desc: "I enjoy going to the shops. I say hello to everyone I meet",
            audio: "Words/shops.mp3"
        },

    ]
}

export const getWordsList = () =>
{
    return wordsList
}
