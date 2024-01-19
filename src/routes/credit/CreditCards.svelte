<script>
    import { db } from "$lib/data"

    let cards = []
    db.subscribe(data => {
        cards = data.credit_cards
    })

    function newCard() {
        db.update(data => {
            data.credit_cards.push({
                bank: "Empty",
                card: "Empty",
                balance: 0,
                limit: 100,
                due: 1,
                id: Math.floor(Math.random() * 999_999_999)
            })
            return data
        })
    }

    function selectText(elem) {
        if (document.body.createTextRange) { // For Internet Explorer
            const range = document.body.createTextRange()
            range.moveToElementText(elem)
            range.select()
        } else if (window.getSelection) { // Other browsers
            const selection = window.getSelection()
            const range = document.createRange()
            range.selectNodeContents(elem)
            selection.removeAllRanges()
            selection.addRange(range)
        }
    }

    function cellUpdated(card, elem) {
        let attr = elem.getAttribute("attr")
        let result = cards.find(item => item.id == card.id)
        let index = cards.indexOf(result)
        
        db.update(data => {
            data.credit_cards[index][attr] = elem.innerText
            return data
        })
    }
</script>

<!--  -->

<table>
    <tr class="head">
        <th>Bank</th>
        <th>Card</th>
        <th>Balance</th>
        <th>Credit Limit</th>
        <th>Due Date</th>
        <th>Utilization</th>
    </tr>
    {#each cards as card, i}
        <tr>
            <td attr="bank" class="editable" contenteditable on:focus={(event) => selectText(event.target)} on:keyup={(event) => cellUpdated(card, event.target)}>{card.bank}</td>
            <td attr="card" class="editable money" contenteditable on:focus={(event) => selectText(event.target)} on:keyup={(event) => cellUpdated(card, event.target)}>{card.card}</td>
            <td attr="balance" class="editable money" contenteditable on:focus={(event) => selectText(event.target)} on:keyup={(event) => cellUpdated(card, event.target)}>{card.balance}</td>
            <td attr="limit" class="editable" contenteditable on:focus={(event) => selectText(event.target)} on:keyup={(event) => cellUpdated(card, event.target)}>{card.limit}</td>
            <td attr="due" class="editable" contenteditable on:focus={(event) => selectText(event.target)} on:keyup={(event) => cellUpdated(card, event.target)}>{card.due}</td>
            <td><div class="progress"><div class="value" style="width: {Math.floor(100 * card.balance / card.limit)}%"></div></div></td>
        </tr>
    {/each}
</table>

<button>+ New Card</button>

<!--  -->

<style>
    th{
        padding: 4pt 8pt;
        text-align: left;
    }

    .head{
        opacity: 1;
    }

    tr{
        opacity: 0.75;
    }

    tr:hover{
        background: var(--l1);
        opacity: 1;
    }

    td{
        padding: 4pt 8pt;
        cursor: pointer;
        outline: none;
        border-radius: 2pt;
    }

    td.editable:hover{
        background: var(--l2);
        outline: solid 1pt var(--l6);
    }

    td:focus{
        background: var(--l2);
        outline: solid 1pt var(--accent) !important;
    }
    
    td .progress{
        height: 4pt;
        width: 100%;
        background: var(--l2);
        border-radius: 100vh;
        overflow: hidden;
    }

    td .value{
        height: 100%;
        background: var(--accent);
    }

    button{
        padding: 8pt 12pt;
        margin-top: 8pt;
        border: solid 1pt var(--l4);
        border-radius: 4pt;
    }

    button:hover{
        background: var(--l1);
        color: var(--accent);
    }
</style>