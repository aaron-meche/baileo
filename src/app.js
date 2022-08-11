import {
	initializeApp
} from 'firebase/app';

import {
	getAnalytics
} from "firebase/analytics";

import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup
} from "firebase/auth";

import {
    getDatabase, ref, set, onValue, get
} from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyDfPCKbuwzWYVF3WiMSRGRFVznr7lnAV6U",
	authDomain: "baileo-cd617.firebaseapp.com",
	databaseURL: "https://baileo-cd617-default-rtdb.firebaseio.com",
	projectId: "baileo-cd617",
	storageBucket: "baileo-cd617.appspot.com",
	messagingSenderId: "219518055104",
	appId: "1:219518055104:web:0865458575dc0fb53a7325",
	measurementId: "G-E4DQEKYTQN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database = getDatabase();

// Variables

var loginRequestData;

// Functions

let uid = 'No User';
let urlParams = new URLSearchParams(document.location.search);
let urlLoginRequest = urlParams.get('login_request');

function useAccountPrompt() {
	document.getElementById('bodyDOM').insertAdjacentHTML('beforeend',`
	<div id='useAccountPrompt' class='screen-card blur-background'>
	    <div class='panel-card'>
	    <div class='title'>Login or Create Account</div>
	    <div class='horizontal-screen-button primary-button' onclick='openPage("login.html")'>Login</div>
	    <div class='horizontal-screen-button secondary-button' onclick='openPage("signup.html")'>Create Account</div>
	    </div>
	</div>`);
}

window.addEventListener('load',function () {
	if (urlLoginRequest == undefined) {
		// useAccountPrompt();
		console.log('no account')
		// window.open('https://account.baileo.us/index.html?' + urlParams, '_self');
	} else {
		onValue(ref(database, 'login requests/' + urlLoginRequest), (snapshot) => {
			loginRequestData = snapshot.val();
	
			localStorage['loginKey'] = loginRequestData['loginKey'];
			localStorage['encryptionKey'] = loginRequestData['encryptionKey'];
			localStorage['userKey'] = loginRequestData['userKey'];
		}, {
			onlyOnce: true
		});
	}

	set(ref(database, 'last visit'), {
		time: new Date().getTime(),
		date: new Date().getDate(),
		month: new Date().getMonth(),
		day: new Date().getDay(),
		uid: uid,
	});
	console.log('Session Logged');
})