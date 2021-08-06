<script>
  import Card from './Card.svelte'

  export let title;
  export let wordsList = []
  export let altStyle = false
</script>

<style>
  h2 {
    font-size: 2rem;
  }

  div {
    display: grid;
    grid-template-columns: repeat( auto-fill, minmax( 320px, 1fr ) );
    grid-auto-flow: row;
    grid-auto-rows: minmax( 320px, 1fr );
    gap: 10px;
    margin-bottom: 1rem;
  }
</style>

<h2>{title} - {wordsList.length} words</h2>

<div>
  {#each wordsList as item, id}
    <Card who={"Iman"} {item} {id} {altStyle} />
  {/each}
</div>
