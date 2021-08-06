<script>
    import Layout from "../components/Layout.svelte"
    import Cards from "../components/Cards.svelte"

    import { getWordsList } from '../lib/wordsList'
</script>

<Layout>
    <div slot="heading">
        <h1>Words</h1>
        <h2> Spoken by Iman</h2>
    </div>

    <section slot="content">
        {#each Object.entries(getWordsList()) as [ title, wordsList ] }
            <Cards {title} {wordsList} />
        {/each}
    </section>
</Layout>

<style>
    h1 {
        color: orangered;
        text-transform: capitalize;
        font-size: 4rem;
    }

    h2 {
        color: orangered;
        font-size: 2rem;
    }
</style>
