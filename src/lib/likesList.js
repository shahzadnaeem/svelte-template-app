
const item = {
    name: "",
    emoji: "",
    desc: "",
    audio: ""
}

const likesList = {
    "Food": [
        {
            name: "Banana",
            emoji: "🍌",
            desc: "",
            audio: ""
        },
        {
            name: "Grapes",
            emoji: "🍇",
            desc: "",
            audio: ""
        },
        {
            name: "Tomato",
            emoji: "🍅",
            desc: "",
            audio: ""
        },
        {
            name: "Mango",
            emoji: "🥭",
            desc: "",
            audio: ""
        },
        {
            name: "Croissant",
            emoji: "🥐",
            desc: "",
            audio: "Likes/croissant.mp3"
        },
        {
            name: "Pizza",
            emoji: "🍕",
            desc: "",
            audio: ""
        },
        {
            name: "Chicken",
            emoji: "🐔",
            desc: "",
            audio: "Likes/chicken.mp3"
        },
        {
            name: "Cake",
            emoji: "🥧",
            desc: "",
            audio: "Likes/cake.mp3"
        }
    ],
    "Places": [
        {
            name: "Shops",
            emoji: "🛒 🛍️",
            desc: "",
            audio: "Likes/shops.mp3"
        },
        {
            name: "Hills",
            emoji: "⛰️",
            desc: "",
            audio: ""
        },
        {
            name: "Beach",
            emoji: "🏖️",
            desc: "",
            audio: ""
        },
    ]
}

export const getLikesList = () =>
{
    return likesList
}
