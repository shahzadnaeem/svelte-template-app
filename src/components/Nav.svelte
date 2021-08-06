<script>
    import { happyEmoji } from '../lib/emojis'

    const numEmojis = 5;
    let title = '';
    for ( let i = 0; i < numEmojis; i ++ ) {
        title = title + happyEmoji() + '&ensp;'
    }
</script>

<nav>
    <a href="#/" class="link">Home</a>
    <span id='pad'></span>
    <span id='title'>{@html title}</span>
    <span id='pad'></span>
    <a href="#/words" class="link">Words</a>
    <a href="#/likes" class="link">Likes</a>
    <a href="#/photos" class="link">Photos</a>
    <a href="#/todos" class="link">Todos</a>
    <a href="#/links" class="link">Links</a>
    <a href="#/more" class="link">More</a>
    <a href="#/about" class="link">About</a>
</nav>

<style>
    nav {
        --background: rgb(20, 19, 22);
        --color: white;
        --font-size: 16pt;

        display: flex;
        flex-flow: row nowrap;

        /* padding: 0 0.5rem 0; */

        background: var(--background);
        color: var(--color);
        font-size: var(--font-size);

        border: 1px solid var(--color);
    }

    .link {
        color: var(--color);
        padding: 0 0.5rem;
        border-left: 1px solid var(--color);
    }

    .link:first-child, .link:last-child {
        border-right: 1px solid var(--color);        
    }

    .link:hover {
        color: yellow;
        text-decoration: none;
    }

    #pad {
        flex-grow: 1;
    }

</style>
