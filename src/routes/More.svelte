<script>
    import Layout from "../components/Layout.svelte"
</script>

<Layout>
    <div slot="heading">
        <h1>Something Else</h1>
    </div>

    <section slot="content">
        <h2>Coming soon ...</h2>
    </section>
</Layout>

<style>
    h1 {
        color: palegoldenrod;
        text-transform: capitalize;
        font-size: 4rem;
    }

    h2 {
        color: palegoldenrod;
        font-size: 2rem;
    }

    section {
        display: flex;
        flex-flow: column nowrap;

        flex-grow: 1;
    }
</style>
