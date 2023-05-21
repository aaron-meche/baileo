<script>
    import {
        db
    } from '$lib/assets/main'

    function processAccountForm() {
        let username = document.querySelector('[username_input]').value
        let password = document.querySelector('[username_input]').value
        
        db.read('data', () => {
            console.log('ok')
        })
    }

    db.listen('data', (val) => {
        console.log(val)
    })
</script>

<!--  -->

<div class="grid">
    <div class="card">
        <div class="title">Login or Create Account</div>

        <div class="caption">If you already have an account, login below. If you do not have an account, you can still "login" and an account will automatically be created for you.</div>

        <section>
            <input username_input type="text" placeholder='Username'>
            <input password_input type="password" placeholder='Password'>
        </section>

            <button on:click={processAccountForm}>Continue</button>
    </div>
</div>


<!--  -->

<style>
    .grid{
        display: grid;
        row-gap: 20px;
        padding: 20px;
        justify-content: center;
    }

    .card{
        width: clamp(25vw, 500px, calc(100vw - 80px));
        display: grid;
        row-gap: 20px;
        padding: 20px;
        border-radius: 10px;
        background: var(--fg);
    }

    .title{
        font-size: 15pt;
        font-weight: 800;
        text-align: center;
    }

    .caption{
        font-size: 10pt;
        font-weight: 300;
        opacity: 75%;
        text-align: center;
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
        /* text-align: center; */
        border-bottom: solid 2px gray;
    }

    input:focus{
        color: var(--accent);
        border-color: var(--accent);
    }
</style>