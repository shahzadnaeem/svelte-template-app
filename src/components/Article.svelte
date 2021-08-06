<script>
    export let name = "Article"
</script>

<article>
    <h1>{name}</h1>
    <div>
        <slot>
        </slot>
    </div>
</article>

<style>
    article {
        counter-reset: article-entry-no;

        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-content: center;
        align-items: stretch;

        width: 100%;

        margin-bottom: 0.5rem;

        border: 3px dashed yellow;
    }

    h1:before {
        color: darkblue;
        counter-increment: article-no;
        content: "# " counter(article-no) ". "
    }

    article:nth-child(odd) {
        background: hotpink;
        /* opacity: 80%; */
    }

    article:nth-child(even) {
        background: cornflowerblue;
        /* opacity: 80%; */
    }

    h1 {
        padding: 0 1rem;
    }

    div {
        background: darkblue;

        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: center;

        padding: 0 1rem;
        border: 3px dotted white;
    }
</style>
