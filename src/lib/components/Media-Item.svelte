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
    </div>

    <div class="info">
        <h3>{title}</h3>
        <h4>{caption} {progress_label}</h4>
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
        transition: opacity 0.25s, box-shadow 0.25s;
	}

    .item:hover{
        color: var(--accent);
        opacity: 100%;
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

    .info{
        padding: 10px 0;
    }
</style>