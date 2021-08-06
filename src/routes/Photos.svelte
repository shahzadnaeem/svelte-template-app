<script>
    import Layout from "../components/Layout.svelte"
    import { Images } from 'svelte-images';

    const galleryPath = ( n ) => `photos/Gallery${n}`

    const path1 = galleryPath( 1 );
    const gallery1ImageFiles = [
        'Apples.jpg',
        "Where's Iman.jpg",
        'Yellow.jpg',
    ];

    const gallery1Images = gallery1ImageFiles.map( ( f ) => { return { src: `/${path1}/${f}` } } );

    console.log( gallery1Images );
</script>

<Layout>
    <div slot="heading">
        <h1>Your Photos</h1>
    </div>

    <section slot="content">
        <div class="centred">
            <h2>Photos From ??? (click a photo to view larger versions)</h2>

            <h2>Gallery ???</h2>
            <Images images={gallery1Images} gutter={5} />
        </div>
    </section>
</Layout>

<style>
    h1 {
        color: lightpink;
        text-transform: capitalize;
        font-size: 4rem;
    }

    h2 {
        color: lightpink;
        font-size: 2rem;
    }

    section {
        display: flex;
        flex-flow: column nowrap;

        flex-grow: 1;
    }

    .centred {
        text-align: center;
        width: 90%;
        margin: 0 auto;
    }
</style>
