<script>
    import Layout from "../components/Layout.svelte";

    import WithBox from "../components/WithBox.svelte";

    let layout;
    let bgHidden = true;

    const showBg = () => {
        layout.toggleClass("show-bg");
        bgHidden = !bgHidden;
    };
</script>

<Layout bind:this={layout}>
    <h1 slot="heading">About</h1>

    <section slot="content">
        <h2>Some Things</h2>

        <div class="mainAbout">
            <section class="gridbox">
                <WithBox>
                    <h2 slot="name">BBC</h2>
                    <a
                        slot="link"
                        href="https://www.bbc.co.uk/"
                        class="link"
                    >
                        BBC
                    </a>
                    <div slot="details" class="flex-col">
                        <p class="copied-text">
                            The BBC is the world’s leading public service broadcaster
                        </p>

                        <p class="bold">
                            Paid for by the license fee
                        </p>
                    </div>
                </WithBox>

                <WithBox>
                    <h2 slot="name">GitHub</h2>
                    <a
                        slot="link"
                        href="https://github.com/"
                        class="link"
                    >
                        GitHub
                    </a>

                    <div slot="details" class="flex-col">
                        <p class="copied-text">
                            Where the world builds software
                        </p>

                        <p class="bold">
                            Millions of developers and companies build, ship, and maintain their software on GitHub—the largest and most advanced development platform in the world.
                        </p>
                    </div>
                </WithBox>
            </section>
        </div>

        <div class="madeWith">
            <h2>Made With</h2>

            <section class="gridbox">
                <WithBox>
                    <h2 slot="name">Svelte</h2>
                    <a slot="link" href="https://www.svelte.dev" class="link">
                        svelte.dev
                    </a>
                    <p slot="details">
                        <i
                            >Svelte is a radical new approach to building user
                            interfaces. Whereas traditional frameworks like
                            React and Vue do the bulk of their work in the
                            browser, Svelte shifts that work into a compile step
                            that happens when you build your app.</i
                        >
                    </p>
                </WithBox>

                <WithBox>
                    <h2 slot="name">Heropatterns</h2>
                    <a
                        slot="link"
                        href="https://www.heropatterns.com"
                        class="link"
                    >
                        www.heropatterns.com
                    </a>
                    <div slot="details">
                        <p>Nice SVG backgrounds</p>
                        <div class="buttonRow">
                            <button on:click={showBg}
                                >{#if bgHidden}
                                    Show background
                                {:else}
                                    Hide background
                                {/if}</button
                            >
                        </div>
                    </div>
                </WithBox>

                <WithBox>
                    <h2 slot="name">YayText</h2>
                    <a slot="link" href="https://yaytext.com/" class="link">
                        yaytext.com
                    </a>
                    <p slot="details">
                        <i
                            >Super cool unicode text magic. Use s̶t̶r̶i̶k̶e̶t̶h̶r̶o̶u̶g̶h̶,
                            𝐛𝐨𝐥𝐝, 𝒊𝒕𝒂𝒍𝒊𝒄𝒔, and 🅜🅞🅡🅔 🄲🅁🄰🅉🅈 ...</i
                        >
                        <br /><br />
                        It's just Unicode, but quite useful
                    </p>
                </WithBox>
            </section>
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

    button {
        background: var(--background);
        color: yellow;
        font-weight: 600;
    }

    button:hover {
        background: rgb(22, 22, 58);
    }

    h1 {
        color: yellow;
        text-transform: uppercase;
        font-size: 4em;
    }

    section {
        display: flex;
        flex-flow: column nowrap;
        
        flex-grow: 1;
    }

    section h2 {
        color: yellow;
        font-size: 2em;
    }

    p,
    h2 {
        color: var(--color);
    }

    .link {
        color: var(--color);
        font-size: 1.2rem;
    }

    .gridbox {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 2rem;
        width: 90%;
        margin: 0 auto;
        margin-bottom: 1rem;
    }

    .flex-col {
        min-height: 205px;
        display: flex;
        flex-flow: column nowrap;
        align-items: space-between;
        justify-content: space-between;
    }

    .copied-text {
        font-style: italic;
    }

    .bold {
        font-weight: 700;
    }

    .buttonRow {
        margin-top: 2rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .mainAbout {
        flex-grow: 1;
    }
    .madeWith {
        opacity: 66%;
    }
</style>
