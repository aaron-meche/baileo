<script>
    export let title

    import { 
        mediaDB, 
        storage, 
        handleMediaItemClick 
    } from '$lib/assets/main'

    let category = mediaDB[title]['cat']
    let pool = []
    let concentratePool = []

    for (let i = 0; i < Object.keys(mediaDB).length; i++) {
        if (mediaDB[Object.keys(mediaDB)[i]]['cat'].includes(category)) {
            pool.push(Object.keys(mediaDB)[i])
        }
    }

    if (pool.length < 3) concentratePool = pool
    else {
        for (let i = 0; i < pool.length - 1; i++) {
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

<div class="module-title">Similar Media</div>
<div class="list">
    {#each concentratePool as title}
        <button clickable on:click={() => handleMediaItemClick(title)} class="media-item">
            <img src='thumbnails/{title}.jpeg' alt="Media Thumbnail">
            <div class="info">
                <div class="title">{title}</div>
                <div class="caption">{generateCaption(title)}</div>
            </div>
        </button>
    {/each}
</div>

<!--  -->

<style>
    .list{
        display: grid;
        row-gap: 5px;
    }

    .module-title{
        text-align: center;
        font-size: 15pt;
        font-weight: 500;
        margin-bottom: 15px;
    }

    .media-item{
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 20px;
        align-items: center;
        padding: 10px;
        border-radius: 5px;
    }

    .media-item:hover{
        background: var(--l1);
    }

    img{
        width: 100%;
        border-radius: 5px;
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
</style>