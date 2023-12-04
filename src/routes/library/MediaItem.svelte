<script>
    export let item

    console.log(item)
</script>

<!--  -->

<button>
    <img src="thumbnails/{item.title}.jpeg" alt="thumbnail">

    <div class="info">
        <div class="media-title">{item.title}</div>
        <div class="media-caption">TV Show - S1 E3</div>
    </div>
</button>

<!--  -->

<style>
    button{
        display: inline-grid;
        row-gap: 8pt;
    }

    img{
        width: 160pt;
        aspect-ratio: 16 / 9;
    }

    .media-title{
        font-weight: 500;
    }

    .media-caption{
        opacity: 0.5;
    }
</style>