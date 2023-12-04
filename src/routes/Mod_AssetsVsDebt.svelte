<script>
    import { 
        getTotalAssets,
        getTotalCreditCards,
        getTotalPredictedIncome,
        getTotalBills
    } from "$lib/index"

    let assets = getTotalAssets().toFixed(2)
    let predictedIncome = getTotalPredictedIncome().toFixed(2)
    let creditCards = getTotalCreditCards().toFixed(2)
    let bills = getTotalBills().toFixed(2)
    let net_worth = (Number(assets) + Number(predictedIncome) + Number(creditCards) + Number(bills)).toFixed(2)

    function convertToMoney(num) {
        return num.toLocaleString("en-US", {style:"currency", currency:"USD"})
    }
</script>

<!--  -->

<table>
    <tbody>
        <tr>
            <td>Total Assets</td>
            <td class="money">{assets}</td>
        </tr>
        <tr>
            <td>Predicted Income</td>
            <td class="money">{predictedIncome}</td>
        </tr>
        <tr>
            <td>Credit Cards</td>
            <td class="money">{creditCards}</td>
        </tr>
        <tr>
            <td>Bills and Expenses</td>
            <td class="money">{bills}</td>
        </tr>
        <tr class='status {net_worth > 0 ? "good" : "bad"}' style="font-weight: 500;">
            <td>Net Worth</td>
            <td class="money">{net_worth}</td>
        </tr>
    </tbody>
</table>

<!--  -->

<style>
    table{
        width: 100%;
    }

    .money{
        position: relative;
        text-align: right;
    }
    .money::before{
        content: "$";
        position: absolute;
        left: 0;
    }
</style>