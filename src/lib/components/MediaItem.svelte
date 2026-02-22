<!-- created by Aaron Meche -->
<script>
    import { resolve } from "$app/paths";


    const { item } = $props()

</script>

<!--  -->

<a href={resolve("/watch?q=" + item.title)} class="item">
    <img src="thumbnails/{item.title}.jpeg" alt="" class="thumbnail">
    <div class="item-title">{item.title}</div>
    <div class="item-label">TV Show</div>
    <div class="item-info">More Info</div>
</a>

<!--  -->

<style>
    .item{
        padding: 1rem;
        border-radius: 0.5rem;
        opacity: 0.8;
        transition: opacity 300ms cubic-bezier(0.215, 0.610, 0.355, 1);
    }

    .item:hover{
        background: linear-gradient(to top right, var(--l1), var(--l05));
        outline: solid 1pt var(--l3);
        opacity: 1;
    }

    .thumbnail{
        height: 10rem;
        width: 16rem;
        object-fit: cover;
        margin-bottom: 0.5rem;
    }

    .item-title{
        font-size: 14pt;
        font-weight: 600;
    }

    .item-label, .item-info{
        font-size: 10pt;
        font-weight: 500;
        opacity: 0.7;
    }

    .item-info{
        font-weight: 400;
        opacity: 0.5;
    }
</style>