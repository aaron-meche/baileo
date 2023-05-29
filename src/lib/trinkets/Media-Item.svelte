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
    <div class="img-wrapper">
        <img src="thumbnails/{title}.jpeg" alt="Thumbnail" loading="lazy">
        <div class="progress">
            <div class="label">82% Watched</div>
            <div class="bar" style='width: {progress}%'></div>
        </div>
    </div>

    <div class="info">
        <div class="title">{title}</div>
        <div class="type">{caption} {progress_label}</div>
    </div>
</div>

<!--  -->

<style>
    .item{
        position: relative;
        top: 0;
        border-radius: 5px;
        padding: 5px;
        cursor: default;
        opacity: 80%;
        box-shadow: 0 5px 0px rgb(0, 0, 0, 0);
        transition: opacity 200ms, box-shadow 200ms;
	}

    .item:hover{
        color: var(--accent);
        opacity: 1;
        z-index: 1;
        box-shadow: 0 5px 25px black;
    }

    .img-wrapper{
        position: relative;
        border-radius: inherit;
    }

    img{
        width: 100%;
        aspect-ratio: 16 / 9;
        border-radius: inherit;
        object-fit: cover;
    }

    .progress{
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    .label{
        font-size: 8px;
        opacity: 0;
        transition: opacity 200ms;
    }

    .bar{
        height: 5px;
        background: var(--accent);
        border-radius: 2px;
    }

    .info{
        border-radius: inherit;
        padding: 10px 0;
    }

    .title{
        font-size: 12pt;
        font-weight: 500;
    }

	.type{
        font-size: 10px;
        color: gray;
	}
</style>