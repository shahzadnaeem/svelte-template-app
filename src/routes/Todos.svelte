<script>
    import Layout from "../components/Layout.svelte"
    import TodoList from '../components/TodoList.svelte'
</script>

<Layout>
    <div slot="heading">
        <h1>To Do List</h1>
        <h2>Saved in Your Browser</h2>
    </div>

    <section slot="content">
        <TodoList />
    </section>
</Layout>


<style>
    h1 {
        color: palevioletred;
        text-transform: capitalize;
        font-size: 4rem;
    }

    h2 {
        color: palevioletred;
        font-size: 2rem;
    }

    section {
        display: flex;
        flex-flow: column nowrap;

        flex-grow: 1;
    }

</style>
