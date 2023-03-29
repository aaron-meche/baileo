<script>
    import { mediaDB } from '$lib/data'
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
        width: clamp(185px, 20vw, 220px);
        padding-top: 10px;
        margin-right: 20px;
        cursor: default;
        transition: top 300ms, box-shadow 150ms;
        box-shadow: 0 0 var(--accent);
	}

    @media screen and (hover: hover) {
        .item:hover{
            position: relative;
            top: -10px;
            box-shadow: 0 3px var(--accent);
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
        font-size: 11pt;
        font-weight: 500;
    }

	.type{
        font-size: 10pt;
		font-weight: 400;
		color: gray;
	}
</style>