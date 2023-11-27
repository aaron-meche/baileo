<script>
    export let loan

    function expandItem() {

    }
</script>

<!--  -->

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="item" on:click={expandItem}>
    <div>
        <div class="title">{loan.name}</div>
        <div class="label">
            $ {loan.payment}
            
            {#if loan.paid}
                <span class="status good">● Paid</span>
            {:else}
                <span class="status bad">● Owed</span>
            {/if}
        </div>
    </div>
</div>

<!--  -->

<style>
    .item{
        display: grid;
        gap: 8pt;
        align-items: center;
    }

    .bank-icon{
        padding: 2pt;
    }

    img{
        width: 100%;
        border-radius: 2pt;
    }

    .label{
        font-weight: 300;
    }

    .label .status{
        font-size: 8pt;
        font-weight: 500;
    }
</style>