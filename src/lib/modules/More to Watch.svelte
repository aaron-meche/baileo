<script>
    import { mediaDB, storage, handleMediaItemClick } from '$lib/data'
    export let title

    let category = mediaDB[title]['cat']
    let pool = []
    let concentratePool = []

    for (let i = 0; i < Object.keys(mediaDB).length; i++) {
        if (mediaDB[Object.keys(mediaDB)[i]]['cat'] == category) {
            pool.push(Object.keys(mediaDB)[i])
        }
    }

    if (pool.length < 3) concentratePool = pool
    else {
        for (let i = 0; i < 3; i++) {
            let ranItem = pool[Math.floor(Math.random() * pool.length)]
            if (concentratePool.includes(ranItem)) {
                i--
                continue
            }
            else if (ranItem == title) {
                i--
                continue
            }
            concentratePool.push(ranItem)
        }
    }

    function generateCaption(title) {
        if (mediaDB[title]['type'] == 'TV Show') {
            let seasonCount = mediaDB[title]['sTotal']
            let template = `TV Show - ${seasonCount} Season${seasonCount > 1 ? 's' : ''}`
            return template
        }
        else {
            return 'Movie'
        }
    }
</script>

<!--  -->

<div class="module-title">More {category.charAt(0).toUpperCase() + category.slice(1)}...</div>
<div class="list">
    {#each concentratePool as title}
        <button on:click={() => handleMediaItemClick(title)} class="media-item">
            <img src='thumbnails/{title}.png' alt="Media Thumbnail">
            <div class="info">
                <div class="title">{title}</div>
                <div class="caption">{generateCaption(title)}</div>
            </div>
        </button>
    {/each}
</div>

<!--  -->

<style>
    .module-title{
        padding: 15pt;
    }

    .list{
        padding: 15pt;
        padding-top: 0;
    }

    .media-item{
        display: grid;
        grid-template-columns: 1fr 2fr;
        column-gap: 10pt;
        align-items: center;
        padding: 10pt;
        border-radius: 5pt;
    }

    .media-item:hover{
        background: var(--light-gradient);
    }

    .title{
        font-size: 12pt;
        font-weight: 500;
    }

    .caption{
        font-size: 10pt;
		font-weight: 400;
		color: gray;
    }
    
    img{
        width: 100%;
        border-radius: inherit;
    }
</style>