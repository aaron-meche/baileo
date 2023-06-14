<script>
    export let title

    import { 
        db,
        mediaDB, 
        storage 
    } from '$assets/main'
    
    let type = mediaDB[title]['type']
    let caption = type
    $: progress = 0

    db.listen('users/' + storage.read('username') + '/library', (library) => {
        if (library[title]) {
            progress = library[title]['progress'] * 100
        }
    })
</script>

<!--  -->

<div class="item" type='media-item'>
    <div class="img-wrapper">
        <img src="thumbnails/{title}.jpeg" alt="Thumbnail" loading="lazy">
        <div class="progress" style='width: {progress}%'></div>
    </div>

    <div class="info">
        <h3>{title}</h3>
        <h4>{caption}</h4>
    </div>
</div>

<!--  -->

<style>
    .item{
        position: relative;
        top: 0;
        opacity: 75%;
        cursor: default;
        border-bottom: solid 3px transparent;
        transition: opacity 0.25s;
	}

    .item:hover{
        opacity: 100%;
        border-bottom-color: var(--accent);
    }

    .img-wrapper{
        position: relative;
    }

    img{
        width: 100%;
        aspect-ratio: 16 / 9;
        border-radius: 5px;
        object-fit: cover;
    }

    .progress{
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        background: white;
        box-shadow: 0 -2px 4px black;
    }

    .info{
        padding: 10px 0;
    }
</style>