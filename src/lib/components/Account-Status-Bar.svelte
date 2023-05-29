<script>
    export let username

    import {
        db,
        storage
    } from '$lib/assets/main'

    // if (typeof window !== 'undefined') {
    //     // If logged in, check uid and key authenticity
    //     if (storage.read('username').length > 0) {

    //     }
    // }
</script>

<!--  -->

{#if username}
    <div class="wrapper">
        <div class="title">Welcome, {username.charAt(0).toUpperCase() + username.slice(1)}</div>
        <div class="section">
            <button>
                <img src="icons/play.svg" alt="Icon">
                Continue Watching
            </button>
            
            <button>
                <img src="icons/history.svg" alt="Icon">
                Watch History
            </button>

            <button>
                <img src="icons/shuffle.svg" alt="Icon">
                Watch Something Random
            </button>
            
            <button>
                <img src="icons/profile.svg" alt="Icon">
                Your Account
            </button>
        </div>
    </div>
{:else}
    <div class="wrapper">
        <div class="title">Login or Register</div>

        <form class='section' action="submit">
            <div>
                <div class="label">Username</div>
                <input type="text">
            </div>

            <div>
                <div class="label">Password</div>
                <input type="password">
            </div>
        </form>

        <button class='submit'>Submit</button>
    </div>
{/if}

<!--  -->

<style>
	.wrapper{
        position: relative;
        display: grid;
        row-gap: 10px;
		padding: 25px;
		margin: 15px;
		border-radius: 15px;
        background: url('gradient.jpeg') center center no-repeat;
        background-size: cover;
	}

    .title{
        font-size: 20pt;
        font-weight: bold;
    }

    .section{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 5px;
    }

    button{
        display: flex;
        align-items: center;
        padding: 10px;
        background: rgb(0, 0, 0, 0.5);
        border-radius: 10px;
        font-size: 12pt;
        font-weight: 500;
    }

    button:hover{
        color: var(--accent);
    }

    button img{
        height: 20px;
        margin-right: 5px;
    }

    form{
        /* grid-template-columns: 1fr !important; */
    }

    .label{
        font-size: 10pt;
    }

    input{
        width: 100%;
        padding: 5px 0;
        border-bottom: solid 2px white;
        color: white;
        font-size: 12pt;
        font-weight: 500;
    }

    input:focus{
        border-color: var(--accent);
    }

    .submit{
        justify-content: center;
        font-weight: bold;
    }
</style>