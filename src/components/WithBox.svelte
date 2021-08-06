<script>
</script>

<div class="withBox">
    <slot name="name">
        <h2>Name?</h2>
    </slot>
    <hr />
    <div class="linkBox">
        🌐
        <slot name="link">
            <a href="#" class="link">Link?</a>
        </slot>
    </div>
    <slot name="details">
        <p> Description text?</p>
    </slot>
</div>

<style>
    .withBox {
        --background: rgb(51, 51, 70);
        --color: lightyellow;
        --error: red;
        --error-background: white;

        background: var(--background);
        color: var(--color);
        border: 1px solid var(--color);

        padding: 0.25rem 0.5rem;
    }

    .linkBox {
        text-align: center;
        text-decoration: none;
    }

    .link:hover {
        text-decoration: underline;
    }

    p, h2, .link {
        color: var(--error);
        background: var(--error-background);
    }
</style>
