<script>
    import { db } from "$lib/data"
    import { backIn } from "svelte/easing";
    import CreditCards from "./CreditCards.svelte";

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

<div class="page">
    <section>
        <div class="table-title">Credit Cards</div>
        <CreditCards />
    </section>
</div>

<!--  -->

<style>
    .table-title{
        font-size: 16pt;
        font-weight: 600;
        margin-left: 8pt;
        margin-bottom: 8pt;
    }
</style>