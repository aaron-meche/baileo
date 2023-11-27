<script>
    export let account

    let utilization

    if (account.type == "credit") {
        utilization = (account.balance * 100) / account.limit
    }
</script>

<!--  -->

<div class="{account.bank ? "icon-grid-item" : ""}">
    {#if account.bank}
        <div class="bank-icon">
            <img src="banks/{account.bank}.png" alt="bank icon">
        </div>
    {/if}

    <div>
        <div class="title">{account.name}</div>
        <div class="label">
            {#if account.type == "credit"}
                $ {account.balance} / {account.limit}
            {:else if account.balance}
                $ {account.balance}
            {:else if account.payment}
                $ {account.payment}
            {/if}
            
            {#if account.type !== "bank"} 
                {#if account.paid}
                    <span class="status good">● Paid</span>
                {:else}
                    <span class="status bad">● Owed</span>
                {/if} 
            {/if}
        </div>
        {#if account.balance > 0 && account.type == "credit"}
            <div class="utilization">
                <div class="value status bg {utilization < 30 ? "good" : "bad"}" style="width: {utilization}%"></div>
            </div>
        {/if}
    </div>
</div>

<!--  -->

<style>
    .icon-grid-item{
        display: grid;
        grid-template-columns: 24pt auto;
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

    .utilization{
        height: 2pt;
        margin-top: 4pt;
        background: var(--l2);
        border-radius: 4pt;
    }

    .utilization .value{
        height: 100%;
    }
</style>