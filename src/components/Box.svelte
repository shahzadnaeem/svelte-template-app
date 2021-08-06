<script>
    export let background = "red"
    export let width = "100px"
    export let height = "100px"
</script>

<div style="background: {background}; height: {height}; width: {width}">
    <slot></slot>
    <p></p>
</div>

<style>
    div {
        margin: 0.5rem;
    }

    p:before  {
        padding-left: 1rem;
        color: lightgoldenrodyellow;
        counter-increment: article-entry-no;
        content: counter(article-entry-no)
    }
</style>
