
import Home from "./routes/Home.svelte"
import Words from "./routes/Words.svelte"
import Likes from "./routes/Likes.svelte"
import Links from "./routes/Links.svelte"
import Photos from "./routes/Photos.svelte"
import Todos from "./routes/Todos.svelte"
import About from "./routes/About.svelte"
import More from "./routes/More.svelte"
import NotFound from "./routes/NotFound.svelte"

export default {
    '/': Home,
    '/words': Words,
    '/likes': Likes,
    '/links': Links,
    '/photos': Photos,
    '/todos' : Todos,
    '/about': About,
    '/more': More,

    // The catch-all route must always be last
    '*': NotFound
};
