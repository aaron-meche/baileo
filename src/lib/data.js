


import { writable } from 'svelte/store'
import { storage } from '$lib/index'

let initial_db = {
    accounts: [
        { // bank account
            type: "bank",
            bank: "Chase",
            name: "Aaron's Checking",
            owner: "Aaron",
            balance: 500,
        },
        { // credit card
            type: "credit",
            bank: "Chase",
            name: "Freedom Rise",
            balance: 935,
            limit: 1065,
            due_date: 2,
            paid: true,
        },
        { // loan
            type: "loan",
            bank: "Chase",
            name: "Audi A4",
            type: "Auto",
            owner: "Karl",
            co_signer: "Aaron",
            balance: 35500,
            payment: 672,
            due_date: 12,
            paid: true,
        },
        { // loan
            type: "loan",
            bank: "Lexus Financial",
            name: "VW Jetta",
            type: "Auto",
            owner: "Karl",
            balance: 22500,
            payment: 507,
            due_date: 2,
            paid: true,
        },
        { // loan
            type: "loan",
            bank: "US Bank",
            name: "Audi SQ5",
            type: "Auto",
            owner: "Karl",
            balance: 47588,
            payment: 880,
            due_date: 17,
            paid: true,
        },
        { // bill
            type: "bill",
            name: "Rent",
            payment: 1675,
            due_date: 5,
            paid: false,
        },
    ],
    // bills: [
    //     {
    //         name: "Water",
    //         payment: 36,
    //         due_date: 8,
    //         paid: true,
    //     },
    //     {
    //         name: "Electricity",
    //         payment: 220,
    //         due_date: 1,
    //         paid: true,
    //     },
    //     {
    //         name: "Internet (Wifi)",
    //         payment: 110,
    //         due_date: 15,
    //         paid: true,
    //     },
    //     {
    //         name: "Natual Gas",
    //         payment: 23,
    //         due_date: 1,
    //         paid: true,
    //     },
    //     {
    //         name: "Car Insurance",
    //         payment: 361,
    //         due_date: 4,
    //         paid: true,
    //     },
    //     {
    //         name: "Phone",
    //         payment: 244,
    //         due_date: 1,
    //         paid: true,
    //     },
    // ],
    focused_account: null
}

const app_title = "credit_cards 11.26.23 5"
const storage_ref = `localDB-${app_title}`

export const db = storage.exists(storage_ref) ? writable(JSON.parse(storage.read(storage_ref))) : writable(initial_db)

db.subscribe(db => {
    let data
    if (db == undefined) {
        data = initial_db
        alert("DB Fallback: undefined")
    }
    else {
        data = JSON.stringify(db)
    }
    storage.write(storage_ref, data)
})