<script>
    import Nav from "./Nav.svelte"
    import Footer from "./Footer.svelte"

    let main

    export const toggleClass = (cls) => {
        main.classList.toggle( cls )
    }
</script>

<main bind:this={main}>
    <Nav />

    <div id="headingWrapper">
        <slot name="heading">
            <h1>Missing slot: name="heading"</h1>
        </slot>
    </div>
    <div id="contentWrapper">
        <slot name="content">
            <h1>Missing slot: name="content"</h1>
        </slot>
    </div>
    <slot name="footer">
        <Footer />
    </slot>
</main>

<style>
    main {
        --background: rgb(22, 22, 58, 0.87);
        --color: lightyellow;
        --left-border-color: gold;
        --error: red;
        --error-background: white;

        display: flex;
        flex-flow: column nowrap;

        background: var(--background);
        color: var(--color);

        border-left: 1px solid var(--left-border-color);
        border-right: 1px solid var(--left-border-color);
        max-width: 1440px;
        margin: 0 auto;
        min-height: 100%;
    }

    h1 {
        color: var(--error);
        background: var(--error-background);
        text-align: center;
        font-family: 'Courier New', Courier, monospace;
        font-size: large;
        border: 2px solid var(--error);
        margin: 1rem;
        padding: 1rem;
    }

    #headingWrapper {
        text-align: center;
    }

    #contentWrapper {
        display: flex;
        flex-flow: column nowrap;
        
        flex-grow: 1;
        padding: 0 1rem;
    }
</style>
