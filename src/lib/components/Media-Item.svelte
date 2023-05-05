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
    <div class="image" style='background-image: url("thumbnails/{title}.png")'>

        <div class="overlay"></div>

        <div class="info">
            <div class="title">{title}</div>
            <div class="type">{caption} {progress_label}</div>
        </div>
        
        <div class="progress" style='width: {progress}%'></div>

    </div>
</div>

<!--  -->

<style>
    .item{
        width: clamp(225px, 25vw, 275px);
        position: relative;
        top: 0;
        margin-right: 10px;
        border: solid 3px rgb(0, 0, 0, 0);
        border-radius: 10px;
        overflow: hidden;
        cursor: default;
	}

    @media screen and (hover: hover) {
        .item:hover{
            border-color: var(--accent);
        }
    }

    .image{
        width: 100%;
        aspect-ratio: 15 / 9;
        position: relative;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .overlay{
        position: absolute;
        bottom: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(to top, rgb(10, 10, 10, 0.75), rgb(15, 15, 15, 0) 75%);
    }

    .info{
        position: absolute;
        bottom: 0;
        left: 5%;
        width: 90%;
        padding-bottom: 10px;
        color: white;
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

    .progress{
        height: 5px;
        width: 0%;
        position: absolute;
        bottom: 0;
        left: 0;
        background: var(--bold-gradient);
    }
</style>