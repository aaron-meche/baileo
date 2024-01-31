<script>
    export let query
    import { mediaDB } from "$lib/index"
    import { db } from "$lib/data"

    let window
    $: items = mediaDB.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))

    function selectItem(item) {
        window.parentElement
        db.update(data => {
            data.currently_watching = item.title

            let template = {
                title: item.title,
                progress: 0
            }

            if (item.type == "TV Show") {
                template.season = 1
                template.episode = 1
            }

            let libitem = data.library.find(elem => elem.title == item.title)
            if (!libitem) {
                data.library.push(template)
            }
            
            return data
        })
    }
</script>

<!--  -->

<div class="window" bind:this={window}>
    <div class="list">
        {#each items as item}
            <a on:click={() => selectItem(item)} href="/watch" class="item">
                <img src="thumbnails/{item.title}.jpeg" alt="">
                <div class="data">
                    <div class="title">{item.title}</div>
                </div>
            </a>
        {/each}
    </div>
</div>

<!--  -->

<style>
    .item{
        display: grid;
        grid-template-columns: 5rem auto;
        align-items: center;
        gap: 1rem;
        padding: 0.5rem;
        font-weight: 500;
        border-radius: 0.25rem;
        outline: solid 1pt lime;
    }
    
    .item:hover{
        background: var(--l2);
    }

    .item img{
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
        border-radius: 0.25rem;
    }
</style>