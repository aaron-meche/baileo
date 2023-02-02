import {
    initializeApp
} from 'firebase/app';

import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup
} from "firebase/auth";

import {
    getDatabase, ref, set, onValue, get
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB8JHadxzzz9bepVOiuJVnw1ke0OEB3D9s",
  authDomain: "baileo.firebaseapp.com",
  databaseURL: "https://baileo-default-rtdb.firebaseio.com",
  projectId: "baileo",
  storageBucket: "baileo.appspot.com",
  messagingSenderId: "448246323580",
  appId: "1:448246323580:web:2bc3ffb5eeb330ca85ecf9"
};



// Constants



const app = initializeApp(firebaseConfig);

const auth = getAuth();
const database = getDatabase();
var uid;
var watchedData;
var progressData;
var userData;



// Reference Functions



function loading() {
    document.getElementById('loadingScreen').style.display = 'block';
}

function stopLoading() {
    document.getElementById('loadingScreen').style.display = 'none';
}

function openPage(location) {
    loading();
    window.open(location, "_self");
    stopLoading();
}

function useAccountPrompt() {
    document.getElementById('body').insertAdjacentHTML('beforeend',`
    <div id='useAccountPrompt' class='screen-card blur-background'>
        <div class='panel-card'>
        <div class='title'>Login or Create Account</div>
        <div class='horizontal-screen-button primary-button' onclick='openPage("login.html")'>Login</div>
        <div class='horizontal-screen-button secondary-button' onclick='openPage("signup.html")'>Create Account</div>
        </div>
    </div>`);
    stopLoading();
}

function noUserFixing() {
    stopLoading();
}

function addClickListnerTvExpandLinks() {
    const mediaClickObject = document.querySelectorAll('.tv-expand-link');
    if (mediaClickObject) {
        mediaClickObject.forEach(el => el.addEventListener('click', event => {
            finishExpandTv(sessionStorage['expandPanelTitle']);
        }));
    }
}

function addClickListnerTransportButtons() {
    const transportButton = document.querySelectorAll('.transport-button');
    if (transportButton) {
        transportButton.forEach(el => el.addEventListener('click', event => {
            createLink();
        }));
    }
}

function addClickListnerNewSeasonButtons() {
    const newSeasonButton = document.querySelectorAll('.new-season-button');
    if (newSeasonButton) {
        newSeasonButton.forEach(el => el.addEventListener('click', event => {
            addClickListnerTransportButtons();
            addClickListnerNewSeasonButtons();
        }));
    }
}

function createEncryptionKey(length) {
    var library = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0'];
    var collection = '';
    for (var i = 0; i < length; i++) {
        collection = collection + library[Math.floor(Math.random() * library.length)];
    }
    return collection;
}

function writeUserData(path, truth) {
    set(ref(database, 'users/' + uid + path), {
        value: truth,
    });
}

function writeLinkData(path, uid, type, title, season, episode) {
    loading();
    set(ref(database, 'links/' + path), {
        uid: uid,
        mediaType: type,
        mediaTitle: title,
        mediaSeason: season,
        mediaEpisode: episode,
    });
}

function isMobileDevice(){
    return window.matchMedia('(hover: none)').matches;
}



// Authentication Functions



const signInForm = document.querySelector('.signin-form');
if (signInForm) {
    signInForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const email = signInForm.email.value;
        const password = signInForm.password.value;
    
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            writeUserData('/email',email);
            openPage('index.html');
        })
        .catch((error) => {
            alert(error.message);
        });
    })
}

const signInGoogle = document.querySelector('.signin-google-button');
if (signInGoogle) {
    signInGoogle.addEventListener('click', (e) => {
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

const signUpForm = document.querySelector('.signup-form');
if (signUpForm) {
    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const email = signUpForm.email.value;
        const password = signUpForm.password.value;
        const confirmPassword = signUpForm.confirmPassword.value;

        if (password == confirmPassword) {
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                writeUserData('/email',email);
                openPage('index.html');
            })
            .catch((error) => {
                alert(error.message);
            });
        }
    })
}

const logoutButton = document.querySelector('.logout-button');
if (logoutButton) {
    logoutButton.addEventListener('click', (e) => {
        signOut(auth).then(() => {
            openPage('index.html');
        }).catch((error) => {
            alert(error.message);
        });
    })
}

const suggestMovieForm = document.getElementById('suggestMovieForm');
if (suggestMovieForm) {
    console.log('ok');
    suggestMovieForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const title = suggestMovieForm.title.value;
        const category = suggestMovieForm.category.value;
        const url = suggestMovieForm.url.value;
        var key = createEncryptionKey(30);

        set(ref(database, 'movie requests/' + key), {
            title: title,
            category: category,
            url: url,
        });

        openPage('index.html');
    })
}

function displayCorrectUiButton() {
    if (uid !== undefined) {
        if (localStorage['uiMode'] == 'light') {
            document.getElementById('darkUiButton').style.display = 'none';
            document.getElementById('lightUiButton').style.display = 'inline-flex';
    
            document.getElementsByClassName('main-navbar')[0].style.backgroundColor = 'var(--toyPurple)';
            document.getElementById('body').style.backgroundColor = 'var(--lilyBlue)';
            document.getElementById('body').style.color = 'black';
    
            const mediaSliderObjects = document.querySelectorAll('.media-slider-object');
            if (mediaSliderObjects) {
                mediaSliderObjects.forEach(el => el.style.opacity = 1);
            }
        } else {
            document.getElementById('darkUiButton').style.display = 'inline-flex';
            document.getElementById('lightUiButton').style.display = 'none';
    
            document.getElementsByClassName('main-navbar')[0].style.backgroundColor = 'var(--darkPlum)';
            document.getElementById('body').style.backgroundColor = 'var(--darkAqua)';
            document.getElementById('body').style.color = 'white';
    
            const mediaSliderObjects = document.querySelectorAll('.media-slider-object');
            if (mediaSliderObjects) {
                mediaSliderObjects.forEach(el => el.style.opacity = 0.85);
            }
        }
    }
}

const uiModeToggleButton = document.querySelectorAll('.ui-mode-toggle');
if (uiModeToggleButton) {
    displayCorrectUiButton();
    uiModeToggleButton.forEach(el => el.addEventListener('click', event => {
        if (localStorage['uiMode'] == 'dark') {
            localStorage['uiMode'] = 'light';
        } else {
            localStorage['uiMode'] = 'dark';
        }
        displayCorrectUiButton();
    }));
}

onAuthStateChanged(auth, (userCredential) => {
    if (userCredential) {
        uid = userCredential.uid;
    } else {
        console.log(window.location.pathname.split("/").pop());
        if (window.location.pathname.split("/").pop() == 'login') {
            noUserFixing();
        } else if (window.location.pathname.split("/").pop() == 'signup') {
            noUserFixing()
        } else if (window.location.pathname.split("/").pop() == 'login.html') {
            noUserFixing()
        } else if (window.location.pathname.split("/").pop() == 'signup.html') {
            noUserFixing()
        } else if (window.location.pathname.split("/").pop() == 'suggest') {
            noUserFixing()
        } else if (window.location.pathname.split("/").pop() == 'suggest.html') {
            noUserFixing()
        } else {
            useAccountPrompt();
        }
    }
    
    addClickListnerTvExpandLinks();
    addClickListnerTransportButtons();
    
    onValue(ref(database, 'users/' + uid), (snapshot) => {
        userData = snapshot.val();
        watchedData = snapshot.val()['watched'];
        progressData = snapshot.val()['progress'];
    }, {
        onlyOnce: true
    });
    
    stopLoading();
})

// Database functions

function finishExpandTv(mediaTitle) {
    var tvScreen = document.getElementById('tvExpandScreen');
    var tvNavbarContent = document.getElementById('tvPanelNavbarContents');
    var tvPanelTitle = document.getElementById('tvPanelTitle');
    var tvPanelEpisodeList = document.getElementById('tvPanelEpisodeList');
    var tvScreenContents = document.getElementById('tvScreenContents');
    var tvPanelCoverImage = document.getElementById('tvPanelCoverImage');
    var tvPanel = document.getElementById('tvPanel');
    var tvTopbar = document.getElementById('tvTopbar');
    var title = mediaTitle;
    var titleUS = unspace(mediaTitle);
    var mediaType = eval(titleUS)['mediaType'];

    if (watchedData == undefined) {
        document.getElementById('startWatchingTvButton').style.display = 'block';
    } else {
        if (watchedData[title] == undefined) {
            document.getElementById('startWatchingTvButton').style.display = 'block';
        } else {
            document.getElementById('continueWatchingButton').style.display = 'block';
            document.getElementById('continueWatchingButton').innerHTML = 'Continue - S' +  progressData[title + 'S'] + ':E' + (Number(progressData[title + 'E']) + 1);
            sessionStorage['progess.saved.season'] = progressData[title + 'S'];
            sessionStorage['progess.saved.episode'] = progressData[title + 'E'];
        }
    }
    
    tvScreenContents.style.top = '0';
    tvScreenContents.style.opacity = '1';

    addClickListnerTransportButtons();
    addClickListnerNewSeasonButtons();
}

function createLink() {
    var key = createEncryptionKey((Math.floor(Math.random() * 50)) + 10);
    writeLinkData(key, uid, sessionStorage['transport.mediaType'], sessionStorage['transport.mediaTitle'], sessionStorage['transport.mediaSeason'], sessionStorage['transport.mediaEpisode']);

    var receiverPageLink = 'http://50.58.218.209/receiver.html';
    if (isMobileDevice()) {
        receiverPageLink = 'http://50.58.218.209/mobile-viewer.html';
    }
    var generatedLink = receiverPageLink + '?key=' + key;
    window.open(generatedLink, "_self");
}

// function getCurrentlyWatching() {
//     loading();
//     firebase.database().ref('users/' + localStorage['username'] + '/watched').once('value', (snapshot) => {
//         if (snapshot.val() == undefined) {
//             document.getElementById('continueWatchingSection').style.display = 'none';
//             stopLoading(); 
//         } else {
//             document.getElementById('continueWatchingSection').style.display = 'block';
//             var tvOrdered = '';
//             var moviesOrdered = '';

//             var allMedia = {};
//             if (snapshot.val()['movie'] == undefined) {
//                 Object.assign(allMedia, snapshot.val()['tv']);
//             } else if (snapshot.val()['tv'] == undefined) {
//                 Object.assign(allMedia, snapshot.val()['movie']);
//             } else {
//                 Object.assign(allMedia, snapshot.val()['tv']);
//                 Object.assign(allMedia, snapshot.val()['movie']);
//             }

//             console.log(allMedia);
            
//             const ordered = Object.entries(allMedia)
//                 .sort(([,a],[,b]) => b - a)
//                 .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
//             // console.log(allMedia);

//             if (mobileDeviceTester()) {
//                 var thumbnailFolder = 'mobile thumbnails'
//             } else {
//                 var thumbnailFolder = 'thumbnails';
//             }

//             firebase.database().ref('users/' + localStorage['username'] + '/progress').once('value', (snapshot) => {
//                 const progressData = snapshot.val();
//                 for (var i = 0; i < Object.keys(ordered).length; i++) {
//                     var mediaType = eval(unspace(Object.keys(ordered)[i]))['mediaType'];
//                     document.getElementById('continueWatchingCarousel').insertAdjacentHTML('beforeend',`
//                     <div class='media-slider-object' style="background-image: url('` + thumbnailFolder + `/` + Object.keys(ordered)[i].toLowerCase().replace(/\s/g, '-') + `.jpg')">
//                         <div class='image-shader' onclick='continueWatching("` + Object.keys(ordered)[i] + `")'>
//                             <img src='images/play circle.png' class='image-shader-indicator'>
//                         </div>
//                         <div class='view-progress-container'>
//                             <div style='width: ` + (progressData[mediaType][Object.keys(ordered)[i]] * 100) + `%' class='view-progress-bar'></div>
//                         </div>
//                         <img src='images/close.png' class='remove-from-history-icon' onclick='removeFromWatchHistory("` + Object.keys(ordered)[i] + `")'>
//                     </div>`);
//                     // console.log(Object.keys(ordered)[i]); 
//                 }
//             });

//             stopLoading(); 
//         }
//     });
        
// }