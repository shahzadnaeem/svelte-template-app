<script>
    import Layout from "../components/Layout.svelte";
</script>

<Layout>
    <div slot="heading">
        <h1>Links</h1>
    </div>

    <div slot="content">
        <h2>Useful information and things to do</h2>

        <!-- TODO: Add a <Link> component! -->

        <section>
            <div class="linkBox">
                <h2>Reading Rockets</h2>
                <a class="link" target="_blank" href="https://www.readingrockets.org/article/basic-spelling-vocabulary-list">Basic Spelling Vocabulary List</a>
                and more...
            </div>

            <div class="linkBox">
                <h2>IXL Maths</h2>
                <a class="link" target="_blank" href="https://uk.ixl.com/math/reception">Nice Accessible Maths Questions</a>
            </div>

            <div class="linkBox">
                <h2>IXL English</h2>
                <a class="link" target="_blank" href="https://https://uk.ixl.com/ela/reception">Nice Accessible English Questions</a>
            </div>

            <div class="linkBox">
                <h2>Exploratorium</h2>
                <a class="link" target="_blank" href="https://www.exploratorium.edu/explore">Cool Science Stuff</a>
            </div>

            <div class="linkBox">
                <h2>Where some of these links came from</h2>
                <a class="link" target="_blank" href="https://www.special-education-degree.net/top-12-websites-children-learning-disabilities/">A list of useful websites</a>
            </div>
        </section>
    </div>
</Layout>

<style>
    h1 {
        color: paleturquoise;
        text-transform: capitalize;
        font-size: 4rem;
    }

    h2 {
        color: paleturquoise;
        font-size: 2rem;
    }

    section {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-auto-flow: row;
        grid-auto-rows: minmax(250px, 1fr);
        gap: 2rem;
        margin-bottom: 1rem;
        width: 90%;
        margin: 0 auto;
    }

    .linkBox {
        background-color: rgb(51, 51, 70);
        display: flex;
        flex-flow: column nowrap;
        padding: 0.5rem;
        border: 1px aliceblue solid;
    }

    .link {
        color: turquoise;
        font-size: large;
        font-weight: 500;
    }
</style>
