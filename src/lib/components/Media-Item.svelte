<script>
    export let title

    import { 
        db,
        mediaDB, 
        storage 
    } from '$lib/assets/main'
    
    let type = mediaDB[title]['type']
    let caption = type

    let menuElement
    const open_itemMenu = (e) => {
        e.stopPropagation()
        menuElement.style.display = 'block'

    }
</script>

<!--  -->

<div class="item" type='media-item'>
    <div class="img-wrapper">
        <img src="thumbnails/{title}.jpeg" alt="Thumbnail" loading="lazy">
    </div>

    <div class="info">
        <div class="text-data">
            <div class="item-title">{title}</div>
            <div class="item-caption">{caption}</div>
        </div>
        <button clickable on:click={open_itemMenu} class="more-options" bind:this={menuElement}>
            <img src="icons/more.svg" alt="More Icon">
        </button>
    </div>

    <!-- <div class="menu">
        <button clickable>
            <img icon src="icons/add.svg" alt="Icon">
            Start Watching
        </button>
        <button clickable>
            <img icon src="icons/add.svg" alt="Icon">
            Add to Library
        </button>
        <button clickable>
            <img icon src="icons/add.svg" alt="Icon">
            Remove from Library
        </button>
    </div> -->
</div>

<!--  -->

<style>
    .item{
        position: relative;
        height: max-content;
        width: clamp(200px, 25vw, 250px);
        cursor: default;
        background: var(--l1); 
        border-radius: 10px;
        transition: background 50ms;
	}

    .item:hover{
        background: var(--l2);
    }

    .img-wrapper{
        position: relative;
        overflow: hidden;
        border-radius: 10px;
    }

    img{
        width: 100%;
        aspect-ratio: 16 / 9;
        border-radius: inherit;
        object-fit: cover;
    }

    .info{
        max-width: calc(100% - 20px);
        display: grid;
        grid-template-columns: auto min-content;
        gap: 10px;
        padding: 15px 10px;
    }

    .item-title{
        font-size: 15px;
        font-weight: 500;
    }

    .item-caption{
        font-size: 12px;
        font-weight: 400;
        opacity: 75%;
    }

    .text-data{
        word-break: break-word;
        white-space: normal;
        overflow-wrap: break-word !important;
    }

    .more-options img{
        display: block;
        height: 20px;
        width: 20px;
        padding: 5px;
        border-radius: 5px;
        opacity: 50%;
    }

    .more-options img:hover{
        background: var(--l3);
        opacity: 100%;
    }

    .menu{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgb(0,0,0,0.5);
        z-index: 5;
        display: none;
    }
</style>