<script>
    import Layout from "../components/Layout.svelte"
</script>

<Layout>
    <div slot="heading">
        <h1 >Hello!</h1>
        <h2>Welcome to YOUR! pages</h2>
    </div>

    <section slot="content">
        <p>
            A number of things that you can try ...
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

    h2 {
        color: hotpink;
        font-size: 2rem;
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
