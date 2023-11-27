<script>
    import { db } from "$lib/data"

    let focused_account
    db.subscribe(data => {
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

<button on:click={closeFocusedAccount} class="close">
    <img class="icon" src="icons/close.svg" alt="close icon">
</button>

<div class="data-grid">
    {#each Object.keys(focused_account) as key}
        <div class="cell">
            <div class="key">{key}</div>
            <div key={key} class="value" contenteditable>{focused_account[key]}</div>
        </div>
    {/each}
</div>

<!-- <div class="banner">
    <img src="banks/Chase.png" alt="">
    <div class="name">Checking</div>
</div> -->

<!--  -->

<style>
    .close{
        height: 8pt;
        width: 8pt;
        padding: 4pt;
        position: absolute;
        top: 8pt;
        left: 8pt;
        border-radius: 2pt;
    }

    .close:hover{
        background: var(--l2);
    }

    .banner{
        display: grid;
        grid-template-columns: 24pt auto;
        gap: 8pt;
        align-items: center;
    }

    .banner img{
        width: 100%;
        border-radius: 2pt;
    }

    .banner .name{
        font-size: 16pt;
        font-weight: 500;
    }

    .data-grid{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8pt;
    }

    .key{
        margin-left: 8pt;
        margin-bottom: 2pt;
        font-size: 10pt;
        font-weight: 500;
        text-transform: capitalize;
    }

    .value{
        padding: 4pt 8pt;
        background: var(--l2);
        border-bottom: solid 2pt transparent;
        border-radius: 2pt;
        outline: none;
    }

    .value:hover{
        background: var(--l3);
    }

    .value:focus{
        border-bottom-color: var(--accent);
    }
</style>

