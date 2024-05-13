<script>
    import { mediaDB } from "$lib/index"

    let media_types = []
    let media_types_arr = []
    let media_categories = []
    let media_categories_arr = []

    mediaDB.forEach(item => {
        let type = item.type
        if (!media_types.includes(type)) media_types.push(type)

        let category_array = item.cat.split(" ")
        category_array.forEach(category => {
            if (!media_categories.includes(category)) media_categories.push(category)
        })
    })

    for (let i = 0; i < media_types.length; i++) {
        media_types_arr[i] = mediaDB.filter(item => item.type == media_types[i])
    }

    for (let i = 0; i < media_categories.length; i++) {
        media_categories_arr[i] = mediaDB.filter(item => item.cat.includes(media_categories[i]))
    }

    console.log(media_categories_arr)
</script>

<!-- -->

{#each media_categories as cat, i}
    <section>
        <div class="section-title">{cat}</div>
        <div class="horizontal-scroll">
            {#each media_categories_arr[i] as item}
                <button class="media-item">
                    <img class="thumbnail" src="thumbnails/{item.title}.jpeg" alt="">
                    <div class="media-title">{item.title}</div>
                    <div class="media-caption">{item.type}</div>
                </button>
            {/each}
        </div>
    </section>
{/each}

<!--  -->

<style>
    section{
        padding: 2rem 0;
    }

    .section-title{
        padding: 0 2rem;
        font-size: 16pt;
        font-weight: 600;
        text-transform: capitalize;
    }

    .horizontal-scroll{
        padding: 0 1.25rem;
    }

    .media-item{
        padding: 0.75rem;
        font-family: LexendDeca;
        /* margin-right: 1rem; */
    }

    .media-item:hover{
        background: var(--l1);
    }

    .thumbnail{
        width: 12rem;
        margin-bottom: 0.75rem;
        aspect-ratio: 16 / 9;
        object-fit: cover;
    }

    .media-title{
        /* font-weight: 400; */
    }

    .media-caption{
        font-size: 10pt;
        font-weight: 300;
        opacity: 0.75;
    }
</style>