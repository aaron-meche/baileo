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
const auth = getAuth();

// Variables

var loginRequestData;

// Reference Functions

function dom(id) {
	return document.getElementById(id);
}

// Functions

var uid;
var displayName;
var pfpUrl;
let urlParams = new URLSearchParams(document.location.search);
let urlPagePush = urlParams.get('p');

onAuthStateChanged(auth, (userCredential) => {
	uid = localStorage['uid'];

    if (userCredential) {
        uid = userCredential.uid;
		displayName = userCredential.displayName;
		pfpUrl = userCredential.photoURL
		updateAccountPreviewInformation();
    } else {
		dom('accountDetectedWrapper').style.display = 'none';
		dom('noAccountDetectedWrapper').style.display = 'block';
	}
})

function updateAccountPreviewInformation() {
    dom('accountDisplayName').innerHTML = displayName;

    let name = displayName;
    name = name.split(' ');
    let firstInitial = name[0][0];
    let lastInitial = name[1][0];
    let initals = firstInitial + lastInitial;

    dom('accountDisplayInitials').innerHTML = initals;
    if (pfpUrl) {
        dom('accountDisplayInitials').innerHTML = '';
        dom('accountDisplayInitials').style.background = 'url("' + pfpUrl + '") center center no-repeat';
        dom('accountDisplayInitials').style.backgroundSize = 'cover';
    }
}

document.getElementById('signInGoogleButton').addEventListener('click', function () {
	console.log('google');
	const provider = new GoogleAuthProvider();
	signInWithPopup(auth, provider)
	.then((result) => {
		// This gives you a Google Access Token. You can use it to access the Google API.
		const credential = GoogleAuthProvider.credentialFromResult(result);
		const token = credential.accessToken;
		// The signed-in user info.
		const user = result.user;
		window.open('index.html?p=home','_self');
	})
	.catch((error) => {
		// Handle Errors here.
		const errorCode = error.code;
		const errorMessage = error.message;
		// The email of the user's account used.
		const email = error.customData.email;
		// The AuthCredential type that was used.
		const credential = GoogleAuthProvider.credentialFromError(error);
		// ...
		alert(error.message);
	});
})