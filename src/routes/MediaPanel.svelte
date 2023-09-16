<script>
    export let isMediaPanelOpen

</script>

<!--  -->

<div class="window {isMediaPanelOpen ? "open" : ""}">
    {isMediaPanelOpen}
</div>

<!--  -->

<style>
    .window{
        position: fixed;
        top: 50vh;
        left: 50vw;
        height: 32pt;
        width: 32pt;
        background: var(--l1);
        border-radius: 8pt;
        transition-duration: 600ms;
        transition-timing-function:
    }

    .window.open{
        position: fixed;
        top: 18vh;
        left: 8vw;
        height: 64vh;
        width: 84vw;
        background: var(--l1);
        border-radius: 4pt;
    }
</style>