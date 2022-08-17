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
let urlParams = new URLSearchParams(document.location.search);
let urlPagePush = urlParams.get('p');

onAuthStateChanged(auth, (userCredential) => {
	uid = sessionStorage['uid'];

    if (userCredential) {
        uid = userCredential.uid;
		if (dom('accountDetectedWrapper')) {
			dom('accountDetectedWrapper').style.display = 'block';
		}
    } else {
		console.log('No Account Detected');
		if (dom('noAccountDetectedWrapper')) {
			dom('noAccountDetectedWrapper').style.display = 'block';
		}
	}
})

const signInGoogle = document.querySelector('.sign-in-google');
if (signInGoogle) {
    signInGoogle.addEventListener('click', (e) => {
		console.log('google');
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            writeUserData('/email','N/A: Google');
            openPage('index.html');
            // ...
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
}

// window.addEventListener('load',function () {
// 	if (uid == undefined) {
// 		// useAccountPrompt();
// 		console.log('no account')
// 		// window.open('https://account.baileo.us/index.html?' + urlParams, '_self');
// 	} else {
// 		onValue(ref(database, 'login requests/' + urlLoginRequest), (snapshot) => {
// 			loginRequestData = snapshot.val();
	
// 			localStorage['loginKey'] = loginRequestData['loginKey'];
// 			localStorage['encryptionKey'] = loginRequestData['encryptionKey'];
// 			localStorage['userKey'] = loginRequestData['userKey'];
// 		}, {
// 			onlyOnce: true
// 		});
// 	}

// 	set(ref(database, 'last visit'), {
// 		time: new Date().getTime(),
// 		date: new Date().getDate(),
// 		month: new Date().getMonth(),
// 		day: new Date().getDay(),
// 		uid: uid,
// 	});
// 	console.log('Session Logged');
// })