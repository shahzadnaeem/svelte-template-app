<script>
    import Layout from "../components/Layout.svelte"
</script>

<Layout>
    <div slot="heading">
        <h1 >Page Not Found</h1>
    </div>

    <section slot="content">
        <p>
            Sorry, the page you have requested does not exist!
        </p>
    </section>
</Layout>

<style>
    h1 {
        color: hotpink;
        text-transform: uppercase;
        font-size: 4rem;
        font-weight: 400;
    }

    section {
        display: flex;
        flex-flow: column nowrap;

        flex-grow: 1;
    }

    p {
        font-size: 1.5rem;
    }
</style>
