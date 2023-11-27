<script>
    import LeftPanel from "./Panel_Left.svelte";
    import MainPanel from "./Panel_Main.svelte";
</script>

<!--  -->

<div class="section-grid">
    <section class="left">
        <LeftPanel />
    </section>

    <section>
        <MainPanel />
    </section>
</div>

<!--  -->

<style>
    .section-grid{
        height: 100vh;
        display: grid;
        grid-template-columns: 200pt auto;
    }

    section{
        padding: 24pt 0;
        overflow: auto;
    }

    section.left{
        background: var(--l1);
    }
</style>