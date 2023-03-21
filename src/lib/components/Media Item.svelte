<script>
    import { mediaDB } from '$lib/data'
    export let title, type

    let source = `thumbnails/${title}.png`
</script>

<!--  -->

<div class="item" type='media-item'>
    <img src={source} alt="Media Thumbnail">
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
        width: 170pt;
        margin: 10pt;
        /* padding: 10pt; */
        padding-bottom: 10pt;
        cursor: default;
        border-bottom: solid 3pt rgb(0, 0, 0, 0);
        transition: top 200ms;
	}
    
	.item:hover{
        position: relative;
        top: -10pt;
        border-color: var(--accent);
	}

    img{
        width: 100%;
        border-radius: 5pt;
    }

    .info{
        padding-top: 5pt;
    }

    .title{
        font-size: 12pt;
        font-weight: 500;
    }

	.type{
        font-size: 10pt;
		font-weight: 400;
		color: gray;
	}
</style>