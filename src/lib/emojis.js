

export const happyEmoji = () => {
    return randomEmojiChar( 0x1f600, 0x1f61d )
}

function randomEmojiChar( from, to )
{
    const emoji = from + Math.floor( Math.random() * ( to - from + 1 ))
    return `&#${emoji};`
}
