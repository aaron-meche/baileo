// Firebase Information

const firebaseConfig = {
    apiKey: "AIzaSyB8JHadxzzz9bepVOiuJVnw1ke0OEB3D9s",
    authDomain: "baileo.firebaseapp.com",
    projectId: "baileo",
    storageBucket: "baileo.appspot.com",
    messagingSenderId: "448246323580",
    appId: "1:448246323580:web:422970b7dd75425d85ecf9"
};
firebase.initializeApp(firebaseConfig);

function setData(reference, value) {
    firebase.database().ref(reference).set(value);
}

function setDataProfile(reference, value) {
    firebase.database().ref('users/' + localStorage['username'] + '/' + reference).set(value);
}

// Reference function

function loading() {
    document.getElementById('loadingScreen').style.display = 'block';
}

function stopLoading() {
    document.getElementById('loadingScreen').style.display = 'none';
}

function createEncryptionKey(length) {
    var library = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0'];
    var collection = '';
    for (var i = 0; i < length; i++) {
        collection = collection + library[Math.floor(Math.random() * library.length)];
    }
    return collection;
}

function openPage(location) {
    window.open(location, "_self");
}

function unspace(string) {
    return string.replace(/\s/g, '');
}

function checkForAccount() {
    if (localStorage['username'] == undefined) {
        document.getElementById('body').insertAdjacentHTML('beforeend',`
        <div id='useAccountPrompt' class='screen-card blur-background'>
            <div class='panel-card'>
                <div class='title'>Login or Create Account to Continue</div>
                <a href='login.html'><div class='horizontal-screen-button primary-button'>Login</div></a>
                <a href='signup.html'><div class='horizontal-screen-button secondary-button'>Create Account</div></a>
            </div>
        </div>`);
        stopLoading();
    } else {
        checkAccountValidity();
    }
}

function checkAccountValidity() {
    firebase.database().ref('users/' + localStorage['username'] + '/key').once('value', (snapshot) => {
        if (localStorage['ekey'] == snapshot.val()) {
        } else {
            alert('Error: Faulty login credentials. Your authentication key is not valid.');
            logout();
        }
        stopLoading();
    });
}

function login() {
    var usernameInput = document.getElementById("usernameInput").value.toLowerCase();
    var passwordInput = document.getElementById("passwordInput").value;
    firebase.database().ref('users/' + usernameInput + '/password').once('value', (snapshot) => {
        if (snapshot.val() == passwordInput) {
            localStorage['username'] = usernameInput;
            firebase.database().ref('users/' + usernameInput + '/key').once('value', (snapshot) => {
                localStorage['ekey'] = snapshot.val();
                openPage('index.html');
            });
        } else {
            alert('Login unsuccessful: username or password incorrect');
        }
    });
}

function signup() {
    var usernameInput = document.getElementById("usernameInput").value.toLowerCase();
    var passwordInput = document.getElementById("passwordInput").value;
    var confirmPasswordInput = document.getElementById("confirmPasswordInput").value;

    if (passwordInput == confirmPasswordInput) {
        if (passwordInput == '') {
            alert('You must enter a password!');
        } else {
            if (usernameInput == '') {
                alert('You must enter a username!')
            } else {
                firebase.database().ref('users/' + usernameInput + '/password').once('value', (snapshot) => {
                    if (snapshot.val() == undefined) {
                        var key = createEncryptionKey(50);

                        localStorage['key'] = key;
                        localStorage['username'] = usernameInput;

                        setDataProfile('ekey',key);
                        setDataProfile('password',passwordInput);
                        openPage('index.html');
                    } else {
                        alert('That username is already taken!');
                    }
                });
            }
        }
    } else {
        alert('Passwords do not match!');
    }
}

function changePassword() {
    var oldPasswordInput = document.getElementById("oldPasswordInput").value;
    var newPasswordInput = document.getElementById("newPasswordInput").value;
    var confirmNewPasswordInput = document.getElementById("confirmNewPasswordInput").value;

    if (newPasswordInput == confirmNewPasswordInput) {
        firebase.database().ref('users/' + localStorage['username'] + '/password').once('value', (snapshot) => {
            if (oldPasswordInput == newPasswordInput) {
                alert('You need to pick a new password!');
            } else {
                if (oldPasswordInput == snapshot.val()) {
                    setDataProfile('password',newPasswordInput);
                    systemLogout();
                    openPage('profile.html');
                } else {
                    alert('The old password is incorrect!');
                }
            }
        });
    } else {
        alert('Passwords do not match!');
    }
}