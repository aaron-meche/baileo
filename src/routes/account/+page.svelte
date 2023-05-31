<script>
    import {
        auth,
        db,
        storage
    } from '$lib/assets/main'



    // Login Form Submit
    function processAccountForm() {
        const in_user = document.querySelector('[username_input]').value
        const in_pass = document.querySelector('[password_input]').value
        const form_error = document.querySelector('[form_error]')

        function throw_form_error(value) {
            form_error.style.display = 'block'
            form_error.innerHTML = value
        }
        
        db.read('users/' + in_user, (user) => {
            if (user) {
                if (user.password == in_pass) {
                    auth.login(in_user, in_pass, () => {
                        window.open('/', '_self')
                    })
                } else {
                    throw_form_error('Incorrect Password')
                }
            } else {
                auth.register(in_user, in_pass, () => {
                    window.open('/', '_self')
                })
            }
        })
    }
</script>

<!--  -->

<form class='card'>
    <div class="title">Login or Create Account</div>

    <div class="caption">If you already have an account, login below. If you do not have an account, enter credentials below and an account will be created.</div>

    <div form_error class="caption error"></div>

    <section>
        <input username_input type="text" placeholder='Username'>
        <input password_input type="password" placeholder='Password'>
    </section>

    <button on:click={processAccountForm}>Continue</button>
</form>


<!--  -->

<style>
    .card{
        width: clamp(25vw, 500px, calc(100vw - 80px));
        display: grid;
        row-gap: 20px;
        padding: 20px;
        margin: 20px auto;
        border-radius: 10px;
        border: solid 5px var(--fg);
    }

    .title{
        font-size: 15pt;
        font-weight: 500;
        text-align: center;
    }

    .caption{
        font-size: 10pt;
        font-weight: 300;
        text-align: center;
    }

    .error{
        color: coral;
        display: none;
    }

    section{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
    }

    button{
        padding: 10px;
        border-radius: 10px;
        text-align: center;
        border: solid 2px gray;
        background: var(--bg);
    }

    button:hover{
        color: var(--accent);
        border-color: var(--accent);
    }

    input{
        padding: 10px;
        border-radius: 5px;
        border: solid 2px gray;
        background: var(--fg);
    }

    input:focus{
        color: var(--accent);
        border-color: var(--accent);
    }
</style>