<script>

</script>

<!-- -->

<div class="form">
    <div class="form-title">Advanced AI Search</div>

    <div class="label">I would like to learn about...</div>
    <input type="text">

    <div class="spacer"></div>

    <div class="label">Specific statistics?</div>
    <button class="add-key">
        <i class="fa-solid fa-plus"></i> 
        Add Key
    </button>

    <button class="send">
        <i class="fa-solid fa-paper-plane"></i> 
        Send
    </button>
</div>

<!--  -->

<style>
    .form{
        width: 24rem;
        padding: 2rem;
        margin: 2rem auto;
        background: var(--l1);
        border-radius: 1rem;
    }

    .form-title{
        margin-bottom: 1rem;
        font-size: 24pt;
        font-weight: 600;
    }

    .spacer{
        height: 1rem;
    }

    .label{
        font-size: 10pt;
        margin-bottom: 0.5rem;
        opacity: 0.5;
    }

    i{
        margin-right: 0.5rem;
    }

    input{
        width: calc(100% - 2rem);
        padding: 1rem;
        background: var(--l2);
        border-radius: 0.5rem;
    }
    
    input:focus{
        background: var(--l3);
    }

    button.add-key{
        padding: 1rem 2rem;
        background: var(--l2);
        color: var(--accent);
        font-weight: 500;
        text-align: center;
        border-radius: 100vh;
    }

    button.add-key:hover{
        background: var(--l3);
    }

    button.send{
        padding: 1rem 2rem;
        margin-left: auto;
        background: var(--accent);
        border-radius: 100vh;
        color: var(--pure);
        font-weight: 500;
        transition: padding 400ms cubic-bezier(0.19, 1, 0.22, 1);
    }

    button.send:hover{
        padding: 1rem 3rem;
        font-weight: 600;
    }

    button.send i{
        transition: margin-right 400ms cubic-bezier(0.19, 1, 0.22, 1);
    }

    button.send:hover i{
        margin-right: 1rem;
    }

</style>