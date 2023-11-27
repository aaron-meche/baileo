<script>
    import LeftPanel from "./LeftPanel.svelte";

    // function focusTableCell(event) {
    //     let element = event.target
    //     window.getSelection().selectAllChildren(
    //         element
    //     );
    // }
    // function updateTableCell(event, search_card) {
    //     let element = event.target
    //     let updated_value = element.innerText.trim()
    //     db.update(data => {
    //         let find_card = cards.find(card => card.name == search_card.name && card.balance == search_card.balance && card.limit == search_card.limit)
    //         let edited_attribute = element.getAttribute("attr")
    //         find_card[edited_attribute] = updated_value
    //         return data
    //     })
    // }
</script>

<!--  -->

<div class="section-grid">
    <section class="account-list">
        <LeftPanel />
    </section>

    <section class="action">

    </section>
</div>

<!--  -->

<style>
    .section-grid{
        display: grid;
        grid-template-columns: 240pt auto;
        gap: 12pt;
    }

    section{
        padding: 12pt;
    }


</style>