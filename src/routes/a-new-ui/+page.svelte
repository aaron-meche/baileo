<script>
    import * as ui from "./engine"

    let page 

    let heading = ui.newHeading("Welcome to new UI")

    ui.build(page, [
        heading
    ])
</script>

<!--  -->

<div class="page" bind:this={page}>
    Hi there!
</div>

<!--  -->

<style>

</style>