<script>
  import Mod_FocusedAccount from './Mod_FocusedAccount.svelte';

    import { db } from "$lib/data"
    import AssetsVsDebt from "./Mod_AssetsVsDebt.svelte"

    let credit_cards, bank_accounts, focused_account
    db.subscribe(data => {
        credit_cards = data.accounts.filter(account => account.type == "credit")
        bank_accounts = data.accounts.filter(account => account.type == "bank")
        focused_account = data.focused_account
    })

    function closeFocusedAccount() {
        db.update(data => {
            data.focused_account = null
            return data
        })
    }
</script>

<!--  -->

<div class="info-grid">
    {#if focused_account !== null}
        <div class="module">
            <div class="title">Account Magnifier</div>
            <Mod_FocusedAccount />
        </div>
    {/if}

    <div class="module">
        <div class="title">Net Worth</div>
        <AssetsVsDebt />
    </div>
</div>

<!--  -->

<style>
    .info-grid{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240pt, 1fr));
        padding: 0 24pt;
        gap: 24pt;
    }
    
    .module{
        height: fit-content;
        position: relative;
        padding: 12pt;
        background: var(--l1);
        border: solid 2pt var(--l2);
        border-radius: 4pt;
    }

    .module .title{
        margin-bottom: 8pt;
        font-weight: 600;
        text-align: center;
    }
</style>