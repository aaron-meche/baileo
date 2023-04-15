<script>
    import { mediaDB } from '$lib/main'
    export let title, type
</script>

<!--  -->

<div class="item" type='media-item'>
    <img src='thumbnails/{title}.png' alt="Media Thumbnail">
    <div class="info">
        <div class="title">{title}</div>
        <div class="type">{type}</div>
    </div>
</div>

<!--  -->

<style>
    .item{
        position: relative;
        top: 0;
        width: clamp(200px, 20vw, 250px);
        padding-top: 10px;
        padding-bottom: 10px;
        margin-right: 20px;
        cursor: default;
        transition: top 300ms;
	}

    @media screen and (hover: hover) {
        .item:hover{
            position: relative;
            top: -10px;
        }
        .item:hover:after{
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            height: 3px;
            width: 100%; 
            background: var(--accent);
            border-radius: 100vh;
        }
    }
    
    img{
        width: 100%;
        border-radius: 5px;
    }

    .info{
        display: grid;
        padding: 10px 0;

    }

    .title{
        font-size: 12pt;
        font-weight: 500;
    }

	.type{
        font-size: 10pt;
		font-weight: 300;
		color: gray;
	}
</style>