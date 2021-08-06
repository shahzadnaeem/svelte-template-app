<script>
    import Layout from "../components/Layout.svelte"
    import Cards from "../components/Cards.svelte"

    import { getLikesList } from '../lib/likesList'    
</script>

<Layout>
    <div slot="heading">
        <h1>Things</h1>
        <h2>In Categories!</h2>
    </div>

    <section slot="content">
        {#each Object.entries(getLikesList()) as [ title, wordsList ] }
            <Cards {title} {wordsList} altStyle=true />
        {/each}
    </section>
</Layout>

<style>
    h1 {
        color: rgb(241, 255, 47);
        text-transform: capitalize;
        font-size: 4rem;
    }

    h2 {
        color: rgb(241, 255, 47);
        font-size: 2rem;
    }
</style>
