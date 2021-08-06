<script>
    import Layout from "../components/Layout.svelte";
    import Article from "../components/Article.svelte";
    import Box from "../components/Box.svelte";
</script>

<Layout>
    <h1 slot="heading">Grid</h1>

    <section slot="content">
        <div class="topStuff">
            <h2>Top Stuff</h2>

            <article class="grid container">
                <p class="header">Header text ...</p>
                <p class="main">Some 'main' content</p>
                <div class="xtra">
                    <p>Xtra!</p>
                    <Article>
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                    </Article>
                </div>
                <p class="sidebar">Look I'm over here!</p>
                <p class="footer">#Page (c) 2021</p>
            </article>

            <article class="grid-inline container">
                <p class="header">Header text ...</p>
                <div class="main">
                    <p class="main">Some 'main' content</p>
                    <Article>
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                    </Article>
                </div>
                <p class="sidebar">Look I'm over here!</p>
                <p class="footer">#Page (c) 2021</p>
            </article>
        </div>

        <div class="bottomStuff">
            <h2>Bottom Stuff</h2>
        </div>
    </section>
</Layout>

<style>
    h1 {
        color: hotpink;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 300;
    }

    section {
        counter-reset: article-no;

        display: flex;
        flex-flow: column nowrap;

        flex-grow: 1;
        /* border: 1px dashed yellow; */
    }

    section h2 {
        color: hotpink;
        font-size: 2em;
        font-weight: 300;
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
        border: 1px dashed yellow;
    }

    .grid {
        display: grid;
    }

    .grid-inline {
        display: inline-grid;
    }

    .container {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 50px auto 50px;
        gap: 0.5rem;
        justify-content: space-evenly;
        align-items: center;
        grid-template-areas:
            "header header header header"
            "main main xtra sidebar"
            "footer footer footer footer";

        margin: 0 0.5rem;
        padding: 0 0.25rem;
        border: 1px solid lightgreen;
    }

    .header {
        grid-area: header;
        border-bottom: 1px dashed lightgrey;
    }

    .main {
        grid-area: main;
        border-right: 1px dashed lightgrey;
    }

    .xtra {
        grid-area: xtra;
        padding: 0 0.25rem;
        background: darkgreen;
    }

    .sidebar {
        grid-area: sidebar;
        border-left: 1px dashed lightgrey;
    }

    .footer {
        grid-area: footer;
        border-top: 1px dashed lightgrey;
    }

    .bottomStuff {
        opacity: 66%;
        border: 1px dashed yellow;
    }
</style>
