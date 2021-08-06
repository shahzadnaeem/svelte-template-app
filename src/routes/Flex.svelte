<script>
    import Layout from "../components/Layout.svelte";
    import Article from "../components/Article.svelte"
    import Box from "../components/Box.svelte"
</script>

<Layout>
    <h1 slot="heading">Flex</h1>

    <section slot="content">
        <div class="topStuff">
            <h2>Top Stuff</h2>
            <Article name="Article 1">
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
            </Article>
            <Article name="Empty Article" />
            <Article name="Article 2">
                <Article name="Article 3">
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Article name="Article 4">
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul>
                    </Article>
                </Article>
            </Article>
        </div>

        <div class="bottomStuff">
            <h2>Bottom Stuff</h2>
            <p>This is some stuff in the Bottom</p>
        </div>
    </section>
</Layout>

<style>
    :global(body > main) {
        margin: 0 auto;
    }

    :global(body > main.show-bg) {
        width: 80%;
    }

    h1 {
        color: firebrick;
        text-transform: uppercase;
        font-size: 4em;
    }

    section {
        counter-reset: article-no;

        display: flex;
        flex-flow: column nowrap;

        flex-grow: 1;
        /* border: 1px dashed yellow; */
    }

    section h2 {
        color: firebrick;
        font-size: 2em;
    }

    p,
    h2 {
        color: var(--color);
    }

    .topStuff {
        display: flex;
        flex-flow: column wrap;
        justify-content: space-between;

        flex-grow: 1;
        margin: 1rem 0;
        /* border: 1px dashed yellow; */
    }

    .bottomStuff {
        opacity: 66%;
        /* border: 1px dashed yellow; */
    }
</style>
