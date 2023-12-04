<script>
    import { db } from "$lib/data"
    import CreditCard from "./LI_CreditCard.svelte";
    import BankAccount from "./LI_BankAccount.svelte";
    import Loan from "./LI_Loan.svelte";
    import Bill from "./LI_Bill.svelte";
    import Account from "./LI_Account.svelte";

    let credit_cards, bank_accounts, loans, bills, focused_account
    db.subscribe(data => {
        credit_cards = data.accounts.filter(account => account.type == "credit")
        bank_accounts = data.accounts.filter(account => account.type == "bank")
        loans = data.accounts.filter(account => account.type == "loan")
        bills = data.accounts.filter(account => account.type == "bill")
        focused_account = data.focused_account
    })

    function focusAccount(account) {
        db.update(data => {
            data.focused_account = account
            return data
        })
    }
</script>

<!--  -->

<!-- Bank Accounts -->
<section>
    <div class="list-title">Bank Accounts</div>

    {#each bank_accounts as account}
        <button on:click={() => focusAccount(account)} class="list-item {account == focused_account ? "active" : ""}">
            <Account account={account} />
        </button>
    {/each}

    <div class="list-item">+ New Bank Account</div>
</section>

<!-- Credit Cards -->
<section>
    <div class="list-title">Credit Cards</div>

    {#each credit_cards as card}
        <button on:click={() => focusAccount(card)} class="list-item {card == focused_account ? "active" : ""}">
            <Account account={card} />
        </button>
    {/each}

    <div class="list-item">+ New Credit Card</div>
</section>

<!-- Loans -->
<section>
    <div class="list-title">Loans</div>

    {#each loans as loan}
        <button on:click={() => focusAccount(loan)} class="list-item {loan == focused_account ? "active" : ""}">
            <Account account={loan} />
        </button>
    {/each}

    <div class="list-item">+ New Loan</div>
</section>

<!-- Bills -->
<section>
    <div class="list-title">Bills</div>

    {#each bills as bill}
        <button on:click={() => focusAccount(bill)} class="list-item {bill == focused_account ? "active" : ""}">
            <Account account={bill} />
        </button>
    {/each}

    <div class="list-item">+ New Bill</div>
</section>

<!--  -->

<style>
    section{
        padding: 0 12pt;
        margin-bottom: 24pt;
    }

    .list-title{
        font-weight: 600;
        margin-left: 8pt;
        margin-bottom: 4pt;
    }
    
    .list-item{
        width: calc(100% - 16pt);
        position: relative;
        padding: 8pt;
        font-size: 10pt;
        cursor: pointer;
        border-radius: 4pt;
    }

    .list-item:hover{
        background: var(--l2);
    }

    .list-item:hover{
        font-weight: 500;
    }

    .list-item.active{
        background: var(--l2);
        font-weight: 500;
        color: var(--accent);
    }
</style>