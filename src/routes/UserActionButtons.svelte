<script>
    import { db } from "$lib/data"
    import { mediaDB } from "$lib/index"
    import MediaSection from "./MediaSection.svelte";

    let currently_watching
    db.subscribe(data => {
        currently_watching = data.currently_watching
    })
    
    function deleteData() {
        db.update(data => {
            return data
        })
    }
</script>

<!--  -->

<section>
    <div class="menu grid">
        <button>
            <img class="icon" src="icons/play.svg" alt="play">
            <div class="text">
                Continue Watching
            </div>
        </button>

        <button>
            <img class="icon" src="icons/history.svg" alt="book">
            <div class="text">
                Watch History
            </div>
        </button>

        <button>
            <img class="icon" src="icons/list.svg" alt="book">
            <div class="text">
                Playlists
            </div>
        </button>

        <button>
            <img class="icon" src="icons/gear.svg" alt="book">
            <div class="text">
                Settings
            </div>
        </button>
    </div>
</section>

<!--  -->

<style>
    .grid{
        grid-template-columns: repeat(auto-fit, minmax(120pt, 1fr));
    }

    button{
        display: grid;
        grid-template-columns: min-content auto;
        gap: 8pt;
        padding: 8pt 12pt;
        /* border-radius: 2pt; */
        align-items: center;
        text-align: left;
        font-weight: 500;
    }

    img{
        height: 12pt;
        width: 12pt;
    }
</style>