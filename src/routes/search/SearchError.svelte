<script>
    export let val

</script>

<!--  -->

<div class="error">
    <img src="icons/dog.png" alt="">
    <p>Sorry, we don't have <strong>{val}</strong><br>
        <!-- Do you want to request we add it?</p>
    <button class="action-button">Request</button> -->
</div>

<!--  -->

<style>
    .error{
        display: grid;
        grid-gap: 12pt;
        padding: 0 12pt;
    }
    img{
        width: 240pt;
    }
    p{
        width: 240pt;
    }

    .action-button{
        width: fit-content;
        padding: 8pt 16pt;
        background: var(--l2);
        border: solid 2pt var(--l4);
        color: var(--accent);
        border-radius: 4pt;
    }

    .action-button:hover{
        background: var(--l4);
    }
</style>