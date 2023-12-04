import { db } from "$lib/data"

// Local storage data access
export const storage = {
    read: function (location) {
        if (typeof window =="undefined") return

        if (storage.exists(location)) {
            return localStorage[location]
        } else {
            return ''
        }


    },

    write: function (location, value) {
        if (typeof window =="undefined") return

        localStorage[location] = value
    },

    clear: function() {
        if (typeof window =="undefined") return

        localStorage.clear()
    },

    exists: function (location) {
		if (typeof window =="undefined") return

        if (localStorage[location]) return true
		else return false
	}
}

// Shuffle Array
export function shuffle(array) {
    let length = array.length
    let canvas = array

    const genRanNum = (max_num) => {
        return Math.floor(Math.random() * max_num)
    }

    for (let i = 0; i < length; i++) {
        let rannum = genRanNum(length),
            currentItem = canvas[i],
            randomItem  = canvas[rannum]

        if (currentItem == randomItem) continue

        canvas[i] = randomItem
        canvas[rannum] = currentItem
    }

    return canvas
}

function addKeysFromObjects(array, key) {
    let sum = 0
    array.forEach(item => {
        sum += item[key]
    })
    return sum
}
export function getTotalAssets() {
    let bank_accounts
    db.subscribe(data => {
        bank_accounts = data.accounts.find(account => account.type == "bank")
    })
    // return addKeysFromObjects(bank_accounts, "balance")
    return 0
}
export function getTotalCreditCards() {
    let credit_cards
    db.subscribe(data => {
        credit_cards = data.accounts.find(account => account.type == "credit")
    })
    // return -addKeysFromObjects(credit_cards, "balance")
    return 0
}
export function getTotalPredictedIncome() {
    return 0
}
export function getTotalBills() {
    return -0
}