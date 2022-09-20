// FIREBASE DATA

import { 
    initializeApp 
} from "firebase/app";

import { 
    getAnalytics 
} from "firebase/analytics";

import { 
    getDatabase, ref, set, onValue, get
} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyA4fSZkRgf1WdPT8IAZSDXqg9SlJ7v5E7U",
    authDomain: "baileo-us.firebaseapp.com",
    databaseURL: "https://baileo-us-default-rtdb.firebaseio.com",
    projectId: "baileo-us",
    storageBucket: "baileo-us.appspot.com",
    messagingSenderId: "338186023824",
    appId: "1:338186023824:web:6f2fb96c7a67ff0762b915",
    measurementId: "G-Y60XJC7GR8"
};

// Firebase Constants
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

// Configure Project
const projectTitle = 'watch';
const projectRef = 'services/' + projectTitle + '/';

// Empty Database Variables
var db;
var pdb;

// ---

function writeData(path, value) {
    set(ref(database, path), value);
}

function writeProjData(path, value) {
    set(ref(database, projectRef + path), value);
}

function openPage(page) {
    sessionStorage['activePage'] = page;
    window.location.reload();
}

onValue(ref(database), (snapshot) => {
    // Baileo Database
    db = snapshot.val();

    // Project Database
    pdb = snapshot.val()['services'][projectTitle];
}, {
    onlyOnce: true
});

function dom(id) {
    return document.getElementById(id);
}

function domval(id) {
    return document.getElementById(id).value;
}

function generateKey(amount) {
    let library = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',0,1,2,3,4,5,6,7,8,9];
    // let ranNum = Math.floor(Math.random() * library.length);
    var generatedKey = '';
    for (let i = 0; i < amount; i++) {
        generatedKey = generatedKey + library[Math.floor(Math.random() * library.length)];
    }
    return generatedKey;
}