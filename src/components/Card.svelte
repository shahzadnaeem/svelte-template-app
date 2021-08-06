<script>
    export let who
    export let item
    export let id
    export let altStyle = false

    let saying = "saying"
    let cardClass = "card"

    if ( item.name === "Counting" ) {
        saying = ""
    }

    if ( altStyle ) cardClass = "altCard"
</script>

<style>
    .card {
        background: rgb(74, 103, 128);
        border: 1px solid rgb(163, 207, 236);
        padding: 0 0.5rem;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: space-evenly;
    }

    .card:nth-child(odd) {
        background: rgb(104, 74, 128);
        border: 1px solid rgb(206, 187, 223);
    }

    .altCard {
        background: rgb(66, 116, 73);
        border: 1px solid rgb(186, 236, 163);
        padding: 0 0.5rem;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: space-evenly;
    }

    .altCard:nth-child(odd) {
        background: rgb(145, 76, 76);
        border: 1px solid rgb(223, 187, 198);
    }

    h2 {
        font-size: 2rem;
    }

    .desc {
        font-size: larger;
    }

    img {
        height: 80px;
        width: 80px;
    }

    figcaption {
        margin-bottom: 0.5rem;
        text-align: center;
    }

    audio {
        opacity: 0.7;
    }

    .num {
        font-size: larger;
        font-weight: bold;
    }
</style>


<div class={cardClass}>
    <h2>{item.name}{#if item.emoji}&#160;- {@html item.emoji}{/if}</h2>
    {#if item.desc}
        <p class="desc">{item.desc}</p>
    {/if}
    {#if item.img}
        <img src="images/{item.img}" alt="{item.name}"/>
    {/if}
    {#if item.audio}
    <figure>
        <figcaption>{who} {saying} {item.name}</figcaption>
        <audio controls src="audio/{item.audio}" />
    </figure>
    {/if}
    <p class="num">{id + 1}</p>
</div>
