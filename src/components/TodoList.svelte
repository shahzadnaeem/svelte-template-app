<script>
    import TodoItem from "./TodoItem.svelte";

    const TODOS_KEY = "my-todos";

    let newTodo = "";
    let filter = "all";
    let todosList = [];

    let numTodos, numDone, numDeleted, numRemaining;

    try {
        todosList = JSON.parse(localStorage.getItem(TODOS_KEY)) || [];
    } catch (err) {}

    const ENTER_KEY = 13;

    let watchInput = (ev) => {
        if (ev.which === ENTER_KEY) {
            if (ev.target.value !== "") {
                addItem(ev.target.value);
            }
        }
    };

    let addItem = (what) => {
        let now = new Date();

        todosList = [...todosList, { what: what, done: false, deleted: false, added: now, editing: false, newWhat: ""}];
        newTodo = "";
        filter = "all";
    };

    let deleteItem = (id) => {
        let todo = { ...todosList[id] };
        todo.deleted = !todo.deleted;
        todosList[id] = todo;
    };

    let killItem = (id) => {
        todosList = todosList.filter( ( _, i ) => i !== id )
    };

    let toggleDone = (id) => {
        let done = !todosList[id].done;
        todosList[id].done = done;

        todosList = todosList;
    };

    let updateItem = (id, todo) => {
        todosList[id] = todo

        todosList = todosList
    }

    $: {
        numTodos = todosList.filter((todo) => !todo.deleted).length 
        numDone = todosList.filter((todo) => todo.done && ! todo.deleted).length;
        numDeleted = todosList.filter((todo) => todo.deleted).length;
        numRemaining = numTodos - numDone;

        try {
            localStorage.setItem(TODOS_KEY, JSON.stringify(todosList));
        } catch (err) {
            todosList = [{ what: "Error! Items lost!", done: true }];
        }
    }

    let todoOps = {
        addItem,
        deleteItem,
        killItem,
        toggleDone,
        updateItem
    }

</script>

<div class="outer">
    <h1>New Item</h1>
    <div class="inner rounded">
        <input
            bind:value={newTodo}
            on:keydown={watchInput}
            type="text"
            placeholder="Add new item ... [then Enter]"
        />
    </div>

    {#if numRemaining === 0}
        <h1 class="done">🎉 All done! 🎉</h1>
        <h2 class="done">Add some more...</h2>
    {:else}
        <h1>
            {numTodos}
            {numTodos > 1
                ? "Items"
                : "Item"}&ensp;&ndash;&ensp;{@html `Todo: ${numRemaining}, &ensp;Done: ${numDone} &ensp;[Deleted: ${numDeleted}]`}
        </h1>
    {/if}

    <div class="buttons">
        <button
            class:active={filter === "all"}
            on:click={() => (filter = "all")}>Show All</button
        >
        <button
            class:active={filter === "todo"}
            on:click={() => (filter = "todo")}>Show Todo</button
        >
        <button
            class:active={filter === "done"}
            on:click={() => (filter = "done")}>Show Done</button
        >
        <button
            class:active={filter === "deleted"}
            on:click={() => (filter = "deleted")}>Show Deleted</button
        >
    </div>

    <div class="inner rounded">
        {#each todosList as todo, id}
            {#if filter === 'all' && ! todo.deleted }
                <TodoItem {todo} {id} {todoOps} />
            {/if}

            {#if filter === 'todo' && ! todo.done && ! todo.deleted }
                <TodoItem {todo} {id} {todoOps} />
            {/if}

            {#if filter === 'done' && todo.done && ! todo.deleted }
                <TodoItem {todo} {id} {todoOps} />
            {/if}

            {#if filter === 'deleted' && todo.deleted }
                <TodoItem {todo} {id} {todoOps} kill={true} />
            {/if}
        {/each}
    </div>
</div>

<style>
    div {
        --background: lightgray;
        --color: black;
        --newItem-background: white;
        --newItem-color: firebrick;
    }

    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1.5rem;
        margin-block-start: -0.5rem;
    }

    input {
        margin-top: 0.5rem;
        border: 1px solid lightslategray;

        flex-grow: 1;
    }

    .outer {
        width: 80%;
        margin: 0 auto;

        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: stretch;
        align-content: center;
    }

    .inner {
        counter-reset: todo-item-no;

        background: var(--background);
        color: var(--color);

        padding: 0 0.5rem;

        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
    }

    .buttons {
        margin-bottom: 1rem;
        display: flex;
        justify-content: space-between;
    }

    .buttons > * {
        flex: 1 1;
    }
    .buttons > * + * {
        margin-left: 1rem;
    }

    button {
        border: 0.25rem solid lightslategray;
        cursor: pointer;
    }

    .active {
        border: 0.25rem solid green;
    }

    .rounded {
        border-radius: 10px;
    }

    .done {
        text-align: center;
        color: gold;
    }
</style>
