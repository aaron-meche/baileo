<script>

</script>

<!--  -->

<footer>
    <div class="display">
        <div class="title">baileo.us</div>
        <div class="caption">Created by Aaron Meche</div>
    </div>

    <div class="actions">
        <!-- <button>Media Download Portal</button>
        <button>File Server</button>
        <button>Pomodoro Timer</button>
        <button>Calculator</button>
        <button>Notepad</button>
        <button>Media Data Page</button> -->
    </div>
</footer>

<!--  -->

<style>
    footer{
        display: grid;
        /* row-gap: 10px; */
		padding: 25px;
		margin-top: 100px;
        background: linear-gradient(to bottom, var(--fg), rgb(0, 0, 0, 0));
        color: lightgray;
	}

    .title{
        font-size: 15pt;
        font-weight: 500;
    }
    
    .caption{
        font-size: 12pt;
        font-weight: 400;
        color: gray;
    }

    .actions{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 10px;
    }

    button{
        font-size: 10pt;
        text-align: center;
        padding: 10px;
        border-radius: 10px;
        border: solid 1px gray;
    }

    button:hover{
        background: var(--b-gradient);
        color: white;
    }
</style>