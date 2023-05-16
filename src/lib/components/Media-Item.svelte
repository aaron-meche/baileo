<script>
    export let title

    import { 
        mediaDB, 
        storage 
    } from '$lib/assets/main'
    
    let type = mediaDB[title]['type']
    let caption = type
    let progress = 0
    let progress_label = ''

    if (storage.exists(title + ' progress')) {
        progress = storage.get(title + ' progress') * 100

        if (type == 'TV Show') {
            progress_label = ` - S${storage.get(title + ' season')}, E${storage.get(title + ' episode')}`
        }
    }
</script>

<!--  -->

<div class="item" type='media-item'>
    <div class="image">
        <img src="thumbnails/{title}.png" alt="Thumbnail" loading="lazy">
        <div class="progress" style='width: {progress}%'></div>
    </div>
    <!-- <div class="image" style='background-image: url("thumbnails/{title}.png")'> -->
        <!-- <div class="overlay"></div> -->
    <!-- </div> -->

    <div class="info">
        <div class="title">{title}</div>
        <div class="type">{caption} {progress_label}</div>
    </div>

    <div class="active-hover"></div>
</div>

<!--  -->

<style>
    .item{
        display: grid;
        row-gap: 10px;
        border-radius: 5px;
        cursor: default;
	}

    @media screen and (hover: hover) {
        .item:hover .active-hover{
            opacity: 1;
        }
    }

    img{
        width: 100%;
        border-radius: 5px;
    }

    .progress{
        height: 4px;
        width: 0%;
        border-radius: 100vh;
        background: var(--accent);
    }

    .title{
        font-size: 12pt;
        font-weight: 500;
    }

	.type{
        font-size: 10pt;
		font-weight: 400;
        color: lightgray;
	}

    .active-hover{
        height: 2px;
        width: 100%;
        background: var(--accent);
        opacity: 0;
    }
</style>