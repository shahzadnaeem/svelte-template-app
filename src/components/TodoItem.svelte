<script>
    import { timeSince } from "../lib/dates";

    export let todo;
    export let id;
    export let kill = false;
    export let todoOps;

    let age = timeSince(todo.added);

    const startEditing = () => {
        if (!kill) {
            todo.newWhat = todo.what;
            todo.editing = true;
        }
    };

    const ENTER_KEY = 13;
    const ESC_KEY = 27;

    const handleKey = (key) => {
        if ((key === ENTER_KEY) || (key === ESC_KEY)) {
            let deleteTodo = false;

            if (key == ENTER_KEY) {
                if (todo.newWhat !== "") {
                    todo.what = todo.newWhat;
                } else {
                    deleteTodo = true;
                }
            }

            if (!deleteTodo) {
                todoOps.updateItem(id, todo);
            } else {
                todoOps.deleteItem(id);
            }

            todo.editing = false;
            todo.newWhat = "";
        }
    };

    const handleEdit = (ev) => {
        todo.newWhat = ev.target.value;

        handleKey(ev.which);
    };

    const handleBlur = (ev) => {
        todo.newWhat = ev.target.value;

        handleKey( ENTER_KEY );
    };
</script>

<div class="rowWrapper" class:deleted={todo.deleted}>
    <div class="row">
        <span class="id"> {id+1} </span>
        {#if todo.editing}
            <input
                class="edit"
                value={todo.newWhat}
                on:keydown={handleEdit}
                on:blur={handleBlur}
                type="text"
                autofocus
            />
        {:else}
            <input
                class="checkbox"
                bind:checked={todo.done}
                on:click={() => todoOps.toggleDone(id)}
                type="checkbox"
            />

            <span
                class="todo"
                class:done={todo.done}
                on:dblclick={startEditing}
            >
                {todo.what}
            </span>
            <span class="age">{age}</span>
            {#if !kill}
                <span class="remove" on:click={() => todoOps.deleteItem(id)}
                    >X</span
                >
            {:else}
                <span class="restore" on:click={() => todoOps.deleteItem(id)}
                    >⎌</span
                >
                <span class="kill" on:click={() => todoOps.killItem(id)}
                    >💀</span
                >
            {/if}
        {/if}
    </div>
</div>

<style>
    .rowWrapper {
        border-bottom: 1px solid darkblue;
    }
    .rowWrapper:last-child {
        border-bottom: none;
    }
    .row {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        align-content: flex-start;

        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    .id {
        color: darkblue;
        font-weight: 600;
        font-size: large;
    }

    .deleted {
        background: rgba(238, 43, 76, 0.411);
    }

    .checkbox {
        border: 1px solid lightslategray;
        cursor: pointer;
        margin-top: 0.5rem;
        margin-left: 0.5rem;
    }
    .edit {
        margin-top: 0.5rem;
        margin-left: 2.0rem;
        flex-grow: 1;
    }

    .todo {
        margin-left: 1rem;
        flex-grow: 1;
        font-weight: 400;
    }

    .done {
        color: green;
        text-decoration: green double underline;
    }


    .age {
        padding-top: 0.1rem;
        padding-right: 0.5rem;
        opacity: 30%;
    }

    .remove {
        cursor: pointer;
        font-size: larger;
        font-weight: 100;
        padding-right: 0.5rem;
    }

    .remove:hover {
        font-weight: 900;
        color: red;
    }

    .kill {
        cursor: pointer;
        font-size: x-large;
        font-weight: 400;
        padding-right: 0.5rem;
    }

    .kill:hover {
        font-weight: 900;
        color: red;
    }
    .restore {
        cursor: pointer;
        font-size: x-large;
        font-weight: 400;
        padding-right: 0.5rem;
    }

    .restore:hover {
        font-weight: 900;
        color: green;
    }
</style>
