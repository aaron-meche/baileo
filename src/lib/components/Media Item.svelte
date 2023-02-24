<script>
    export let title, type

    const imgUrl = new URL(`../thumbnails/${title}.png`, import.meta.url).href
</script>

<!--  -->

<div class="item">
    <img src='{imgUrl}' alt="Media Thumbnail">
    <div class="information">
        <div class="title">{title}</div>
        <div class="type">{type}</div>
    </div>
</div>

<!--  -->

<style>
    .item{
        width: 180pt;
        padding: 10pt;
        cursor: default;
        border-radius: 5pt;
		background: rgb(25, 25, 25, 0);
        box-shadow: inset 0 0 0 0 var(--accent);
        transition: background 100ms;
        display: inline-block;
	}

	.item:hover{
		background: var(--hover-bg);
        box-shadow: inset 0 -1pt 0 0 var(--accent);
	}

    img{
        width: 100%;
        border-radius: inherit;
    }

    .title{
        font-weight: 500;
    }

	.type{
		color: gray;
		font-weight: 300;
	}
</style>