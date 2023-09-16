<script>
    export let media_data, watch_progress

    let seasons = media_data.seasons

</script>

<!--  -->

<div class="wrapper">
    <div class="currently-watching-details">
        <div class="watch-progress-item">
            <div class="label">Current Episode</div>
            <div class="value">S1 E1, Pilot</div>
            <div class="progress" style="width: {watch_progress.progress * 100}%"></div>
        </div>
    
        <div class="watch-progress-item">
            <div class="label">Next Episode</div>
            <div class="value">S1 E2, Diversity Day</div>
        </div>
    </div>
</div>

<div class="series-scroll horizontal-scroll">
    {#each {length: seasons.length} as _, i}
        <div class="season">
            <div class="season-label">Season {i + 1}</div>

            <div class="episode-list">
                <div class="episode">Pilot</div>
                <div class="episode">Pilot</div>
                <div class="episode">Pilot</div>
                <div class="episode">Pilot</div>
                <div class="episode">Pilot</div>
                <div class="episode">Pilot</div>
                <div class="episode">Pilot</div>
                <div class="episode">Pilot</div>
            </div>
        </div>
    {/each}
</div>

<!--  -->

<style>
    .currently-watching-details{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(160pt, 1fr));
        border: solid 1pt var(--l2);
        border-radius: 4pt;
    }
    
    .watch-progress-item{
        position: relative;
        padding: 8pt;
        background: linear-gradient(to bottom right, var(--l1), transparent);
    }

    .watch-progress-item .label{
        font-size: 10pt;
        font-weight: 599;
        opacity: 0.5;
    }

    .watch-progress-item .value{
        font-size: 14pt;
        font-weight: 599;
    }

    .watch-progress-item .progress{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background: var(--l2);
        background: linear-gradient(to right, transparent, var(--accent));
        z-index: -1;
    }
    
    .series-scroll{
        border: solid 1pt var(--l2);
        border-radius: 4pt;
        display: none;
    }

    .season{
        display: inline-grid;
        grid-template-rows: min-content auto;
        height: 360pt;
        width: 200pt;
        max-width: 75%;
    }

    .season-label{
        padding: 16pt;
        text-align: center;
        font-weight: 599;
    }

    .episode{
        padding: 8pt;
    }

    .episode:hover{
        background: var(--l1);
    }
</style>