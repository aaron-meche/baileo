<script>
    export let account

    console.log(account)
</script>

<!--  -->

<div class="item">
    <div class="bank-icon">
        <img src="banks/{account.bank}.png" alt="bank icon">
    </div>

    <div>
        <div class="title">{account.name}</div>
        <div class="label">$ {account.balance}</div>
    </div>
</div>

<!--  -->

<style>
    .item{
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
</style>