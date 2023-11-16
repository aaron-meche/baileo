<script>
    import { tb } from "$lib/tigerbase"
    import { onMount } from "svelte";

    let db_ref
    let read_resp = ""
    let write_resp = ""
    let match_resp = ""

    onMount(async () => {
        tb.connect("http://127.0.0.1:5000", "GingerLSU19")
            .then(data => db_ref = data)
    })

    function login() {
        let user = document.querySelector('[login_user]').value
        let pass = document.querySelector('[login_pass]').value
        tb.login(db_ref, user, pass)
            .then(data => {
                console.log(data)
            })
    }
</script>

<!--  -->

<div class="page">
    <div class="action-grid">
        <form action="">
            <div class="title">
                Database Proxy
                <div class="caption code">connect(URL, Password)</div>
            </div>
    
            <div class="label">Host URL</div>
            <input type="text">
    
            <div class="label">Admin Password</div>
            <input type="password">

            <button>Connect</button>
        </form>

        <form action="">
            <div class="title">
                Login
            </div>
    
            <div class="label">Username</div>
            <input login_user type="text">
    
            <div class="label">Password</div>
            <input login_pass type="password">

            <button on:click={login}>Connect</button>
        </form>
    </div>

    <div class="action-grid">
        <form action="">
            <div class="title">
                GET
                <div class="caption code">read(DB, Path)</div>
                <div class="caption code">R: Value</div>
                <div class="caption response">{read_resp}</div>
            </div>
    
            <div class="label">Path</div>
            <input type="text" name="" id="">

            <button type="submit">Read</button>
        </form>
    </div>
</div>

<!--  -->

<style>
    .action-grid{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(160pt, 1fr));
        gap: 12pt;
    }

    .title{
        font-size: 16pt;
        font-weight: 600;
        margin-bottom: 8pt;
        text-align: center;
    }

    .caption{
        font-size: 12pt;
        font-weight: 400;
        opacity: 0.75;
        text-align: center;
    }

    .caption.code{
        margin-top: 4pt;
        font-family: 'Courier New', Courier, monospace;
        font-weight: 500;
    }

    form{
        height: fit-content;
        padding: 12pt;
        background: var(--l1);
        border-radius: 2pt;
    }

    .label{
        font-size: 10pt;
        font-weight: 500;
        margin-top: 8pt;
        margin-left: 8pt;
        margin-bottom: 2pt;
    }

    input{
        width: calc(100% - 16pt);
        padding: 8pt;
        background: var(--l2);
        border-radius: 2pt;
        border-bottom: solid 2pt transparent;
    }

    input:focus{
        border-bottom-color: var(--accent);
    }

    button{
        width: calc(100% - 16pt);
        padding: 8pt;
        margin-top: 8pt;
        text-align: center;
        background: var(--l3);
        border-radius: 2pt;
    }

    button:hover{
        background: var(--l4);
    }

    .response{
        padding: 8pt;
        margin-top: 4pt;
        background: var(--bg);
    }
</style>