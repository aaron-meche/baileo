var TheOfficeS1 = [1,'Pilot','Diversity Day','Health Care','The Alliance','Basketball','Hot Girl'];
var TheOfficeS2 = [2,'The Dundies','Sexual Harassment','Office Olympics','The Fire','Halloween','The Fight','The Client','Performance Review','Email Surveillance','Christmas Party','Booze Cruise','The Injury','The Secret','The Carpet','Boys and Girls',"Valentine's Day","Dwight's Speech",'Take Your Daughter to Work Day',"Micheal's Birthday",'Drug Testing','Conflict Resolution','Casino Night'];
var TheOfficeS3 = [3,'Gay Witch Hunt','The Convention','The Coup','Grief Counseling','Initiaiton','Diwali','Branch Closing','The Merger','The Convict','A Benihana Christmas','Back From Vacation','Traveling Salesman','The Return','Ben Franklin',"Phyllis' Wedding",'Business School','Cocktails','The Negotiation','Safety Training','Product Recall',"Women's Appreciation",'Beach Games','The Job'];
var TheOfficeS4 = [4,"Fun Run","Dunder Mifflin Infinity","Launch Party","Money","Local Ad","Branch Wars","Survivor Man","The Deposition","Dinner Party","Chair Model","Night Out","Did I Stutter?","Job Fair","Goodbye, Toby"];
var TheOfficeS5 = [5,"Weight Loss","Business Ethics","Baby Shower","Crime AID","Employee Transfer","Customer Survey","Business Trip","Frame Toby","The Surplus","Moroccan Christmas","The Duel","Prince Family Paper","Stress Relief","Lecture Circuit P1","Lecture Circuit P2","Blood Drive","Golden Ticket","New Boss","Two Weeks","Dream Team","Michael Scott Paper Company","Heavy Competition","Broke","Casual Friday","Cafe Disco","Company Picnic"];
var TheOfficeS6 = [6,"Gossip","The Meeting","The Promotion","Niagra","Mafia","The Lover","Koi Pond","Double Date","Murder","Shareholder Meeting","Scott's Tots","Secret Santa","The Banker","Sabre","The Manager and the Salesman","The Delivery","St. Patrick's Day","New Leads","Happy Hour","Secretary's Day","Body Language","The Cover Up","The Chump","Whistleblower"];
var TheOfficeS7 = [7,"Nepotism","Counseling","Andy's Play","Sex Ed","The Sting","Costume Contest","Christening","Viewing Party","WUPHF.com","China","Classy Christmas","Ultimatum","The Seminar","The Search","PDA","Threat Level Midnight","Todd Packer","Garage Sale","Training Day","Michael's Last Dundies","Goodbye, Michael","The Inner Circle","Dwight K. Schrute, (Acting) Manager","Search Committee"];
var TheOfficeS8 = [8,"The List","The Incentive","Lotto","Garden Party","Spooked","Doomsday","Pam's Replacement","Gettysburg","Mrs. California","Christmas Wishes","Trivia","Pool Party","Jury Duty","Special Project","Tallahassee","After Hours","Test the Store","Last Day in Florida","Get the Girl","Welcome Party","Angry Andy","Fundraiser","Turf War","Free Family Portrait Studio"];
var TheOfficeS9 = [9,"New Guys","Roy's Wedding","Andy's Ancestry","Work Bus","Here Comes Treble","The Boat","The Whale","The Target","Dwight Christmas","Lice","Suit Warehouse","Customer Loyalty","Junior Salesman","Vandalism","Couples Discount","Moving On","The Farm","Promos","Stairmageddon","Paper Airplane","Livin' The Dream","AARM","Finale"];
var TheOffice = [6,22,23,14,26,24,24,24,23];

var ParksandRecreationS1 = [1,"Pilot","Canvassing","The Reporter","Boys' Club","The Banquet","Rock Show"];
var ParksandRecreationS2 = [2,"Pawnee Zoo","The Stakeout","Beauty Pageant","Practice Date","Sister City","Kaboom","Greg Pitkins","Ron and Tammy","The Camel","Hunting Trip","Tom’s Divorce","Christmas Scandal","The Set Up","Leslie’s House","Sweetums","Galentine’s Day","Woman of the Year","The Possum","Park Safety","Summer Catalog","94 Meetings","Telethon","The Master Plan","Freddy Spaghetti"];
var ParksandRecreationS3 = [3,"Go Big or Go Home","Flu Season","Time Capsule","Ron & Tammy: Part Two","Media Blitz","Indianapolis","Harvest Festival","Camping","Andy and April’s Fancy Party","Soulmates","Jerry’s Painting","Eagleton","The Fight","Road Trip","The Bubble","Li’l Sebastian"];
var ParksandRecreationS4 = [4,"I’m Leslie Knope","Ron and Tammys","Born & Raised","Pawnee Rangers","Meet n Greet","End of the World","The Treaty","Smallest Park","The Trial of Leslie Know","Citizen Knope","The Comeback Kid","Campaign Ad","Bowling for Votes","Operation Ann","Dave Returns","Sweet Sixteen","Campaign Shake-Up","Lucky","Live Ammo","The Debate","Bus Tour","Win, Lose, or Draw"];
var ParksandRecreationS5 = [5,"Ms. Knope Goes to Washington","Soda Tax","How a Bill Becomes a Law","Sex Education","Halloween Surprise","Ben’s Parents","Leslie vs. April","Pawnee Commons","Ron and Diane","Two Parties","Women in Garbage","Ann’s Decision","Emergency Response","Leslie and Ben","Correspondent’s Lunch","Bailout","Partridge","Animal Control","Article Two","Jerry’s Retirement","Swing Vote","Are You Better Off?"];
var ParksandRecreationS6 = [6,"London","The Pawnee-Eagleton Tip Off Classic","Doppelgängers","Gin it Up!","Filibuster","Recall Vote","Fluoride","The Cones of Dunshire","Second Chunce","New Beginnings","Farmers Market","Ann and Chris","Anniversaries","The Wall","New Slogan","Galentine’s Day","Prom","Flu Season 2","One in 8,000","Moving Up"];
var ParksandRecreationS7 = [7,"2017","Ron and Jammy","William Henry Harrison","Leslie and Ron","Gryzzlbox","Save JJ’s","Donna and Joe","Ms. Ludgate-Dwyer Goes to Washington","Pie-Mary","The Johnny Karate Super Awesome Musical Explosion Show","Two Funerals","One Last Ride"];
var ParksandRecreation = [6,24,16,22,22,20,12];

var SquidGameS1 = [1,'Red Light, Green Light','Hell','The Man with the Umbrella','Stick to the Team','A Fair World','Gganbu','VIPS','Front Man','One Lucky Day']
var SquidGame = [9];

// Build data to transver to viewer

function synthesizeTV(showTitle, season, episode) {
    localStorage['tvShowTitleSpaced'] = showTitle
    var tvShowTitleUnspaced = showTitle.replace(/\s/g, '');
    localStorage['tvEpisodeTitle'] = eval(tvShowTitleUnspaced + 'S' + season)[episode];
    localStorage['tvEpisodeNum'] = episode;
    localStorage['tvSeasonNum'] = season;
    localStorage['tvSeasonCapacity'] = eval(tvShowTitleUnspaced)[season - 1];
    localStorage['mediaType'] = 'tv';
    linkAction('viewer');
}

function synthesizeMovie(movieTitle) {
    localStorage['movieTitle'] = movieTitle;
    localStorage['mediaType'] = 'movie';
    linkAction('viewer');
}

// Recall data in viewer

var idleTimer = 0;

function recallVideoData() {
    if (localStorage['mediaType'] == 'tv') {
        document.getElementById('video').innerHTML = `"<source id='source' src="VideoVault/` + localStorage['tvShowTitleSpaced'] + `/Season ` + localStorage['tvSeasonNum'] + `/` + localStorage['tvEpisodeTitle'] + `.mp4" type="video/mp4">`
        document.getElementById('title').innerHTML = localStorage['tvShowTitleSpaced'] + ' ' + localStorage['tvSeasonNum'] + ':' + localStorage['tvEpisodeNum'] + ' - ' + localStorage['tvEpisodeTitle'];
        document.getElementById('video-player-title').innerHTML = localStorage['tvShowTitleSpaced'];
        document.getElementById('video-player-caption').innerHTML = localStorage['tvEpisodeTitle'] + ' - S' + localStorage['tvSeasonNum'] + ' E' + localStorage['tvEpisodeNum'];
    } if (localStorage['mediaType'] == 'movie') {
        document.getElementById('video').innerHTML = `<source id='source' src="VideoVault/` + localStorage['movieTitle'] + `.mp4" type="video/mp4">`
        document.getElementById('title').innerHTML = 'Watching : ' + localStorage['movieTitle'];
        document.getElementById('video-player-title').innerHTML = localStorage['movieTitle'];
        document.getElementById('video-player-caption').style.display = 'none';
    }
    document.getElementById('video').play();
    localStorage['isPlaying'] = 'true';
    localStorage['isMuted'] = 'false';
    setInterval(function() {
        var p = document.getElementById('current-progress');
        var watched = document.getElementById('video').currentTime;
        var total = document.getElementById('video').duration;
        var progress = (watched / total) * 100;
        p.style.width = progress.toString() + '%';

        var secondsTotal = Math.floor(document.getElementById('video').duration);
        var minutesTotal = Math.floor(secondsTotal / 60)
        var secondsWithinMinuteTotal = secondsTotal - (minutesTotal * 60);
        if (secondsWithinMinuteTotal.toString().length == 1) {
            secondsWithinMinuteTotal = '0' + secondsWithinMinuteTotal.toString();
        }
        var minutesWithinHour = minutesTotal - (60 * Math.floor(minutesTotal / 60));
        if (minutesWithinHour.toString().length == 1) {
            minutesWithinHour = '0' + minutesWithinHour.toString();
        }
        if (minutesTotal >= 60) {
            minutesTotal = (Math.floor(minutesTotal / 60)) + ':' + minutesWithinHour;
        }
        document.getElementById('video-time-total').innerHTML = minutesTotal + ':' + secondsWithinMinuteTotal;

        updateWatchTime();
    }, 200);
    setInterval(function() {
        idleTimer = idleTimer + 0.1;
        if (idleTimer < 3) {
            document.getElementById('video-player-ui').style.opacity = '1';
        }
        if (idleTimer >= 3) {
            document.getElementById('video-player-ui').style.opacity = '0';
        }
    }, 100);
}

// Quick reference functions

function linkAction(page) {
    window.open(page + '.html', "_self");
}

// Video player

function togglePlayPause() {
    idleTimer = 0;
    var video = document.getElementById('video');
    if (localStorage['isPlaying'] == 'true') {
        video.pause();
        console.log('pause');
        localStorage['isPlaying'] = 'false';
        document.getElementById('pauseIcon').style.display='block';

    } else {
        video.play();
        console.log('play');
        localStorage['isPlaying'] = 'true';

        document.getElementById('pauseIcon').style.display='none';
    }
}

function toggleMute() {
    if (localStorage['isMuted'] == 'false') {
        document.getElementById('video').volume = 0;
        document.getElementById('muteIcon').style.display = 'block';
        document.getElementById('soundIcon').style.display = 'none';
        localStorage['isMuted'] = 'true';
    } else {
        document.getElementById('video').volume = 1;
        localStorage['isMuted'] = 'false';
        document.getElementById('muteIcon').style.display = 'none';
        document.getElementById('soundIcon').style.display = 'block';
    }
    togglePlayPause();
}

let getProgressScroll = (event) => {
	var x = event.clientX;
	var y = event.clientY;
}

function progressScroll(event) {
    document.getElementById('progress-scroll').style.display = 'block';
    document.getElementById('current-progress').style.display = 'none';
    var x = event.clientX;
	var y = event.clientY;
    var width = document.getElementById('possible-progress').clientWidth;
    var bodyWidth = document.body.clientWidth;
    var marginLeft = (bodyWidth - width) / 2;
    var scroll = x;
    document.getElementById('progress-scroll').style.width = 'calc(' + ((scroll / width) * 100).toString() + '%' + ' - 5vw' + ')';
    var secondsScroll = Math.floor((((scroll - marginLeft) / width) * document.getElementById('video').duration));
    var minutesScroll = Math.floor(secondsScroll / 60)
    var secondsWithinMinute = secondsScroll - (minutesScroll * 60);
    if (secondsWithinMinute.toString().length == 1) {
        secondsWithinMinute = '0' + secondsWithinMinute.toString();
    }
    var minutesWithinHour = minutesScroll - (60 * Math.floor(minutesScroll / 60));
    if (minutesWithinHour.toString().length == 1) {
        minutesWithinHour = '0' + minutesWithinHour.toString();
    }
    if (minutesScroll >= 60) {
        minutesScroll = (Math.floor(minutesScroll / 60)) + ':' + minutesWithinHour;
    }
    document.getElementById('video-time-scroll').innerHTML = minutesScroll + ':' + secondsWithinMinute;
}

function dissolveProgressScroll() {
    document.getElementById('progress-scroll').style.display = 'none';
    document.getElementById('current-progress').style.display = 'block';
}

function updateProgress() {
    var x = event.clientX;
    var bodyWidth = document.body.clientWidth;
    var progressWidth = document.getElementById('possible-progress').clientWidth;
    var marginLeft = (bodyWidth - progressWidth) / 2;
    var positionInScrollBar = x - marginLeft;
    var progressPercentage = positionInScrollBar / progressWidth;
    var total = document.getElementById('video').duration;
    var toTime = progressPercentage * total;
    document.getElementById('video').currentTime = toTime;
    togglePlayPause();
}

function updateWatchTime() {
    var secondsWatched = Math.floor(document.getElementById('video').currentTime);
    var minutesWatched = Math.floor(secondsWatched / 60)
    var secondsWithinMinute = secondsWatched - (minutesWatched * 60);
    if (secondsWithinMinute.toString().length == 1) {
        secondsWithinMinute = '0' + secondsWithinMinute.toString();
    }
    var minutesWithinHour = minutesWatched - (60 * Math.floor(minutesWatched / 60));
    if (minutesWithinHour.toString().length == 1) {
        minutesWithinHour = '0' + minutesWithinHour.toString();
    }
    if (minutesWatched >= 60) {
        minutesWatched = (Math.floor(minutesWatched / 60)) + ':' + minutesWithinHour;
        console.log(minutesWatched);
    }
    document.getElementById('video-time-watched').innerHTML = minutesWatched + ':' + secondsWithinMinute;
}

function mouseMoved() {
    idleTimer = 0;
}

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        togglePlayPause();
    }
    if (event.code === 'ArrowLeft') {
        document.getElementById('video').currentTime = document.getElementById('video').currentTime - 10;
    }
    if (event.code === 'ArrowRight') {
        document.getElementById('video').currentTime = document.getElementById('video').currentTime + 10;
    }
    if (event.code === 'KeyJ') {
        document.getElementById('video').currentTime = document.getElementById('video').currentTime - 15;
    }
    if (event.code === 'KeyK') {
        togglePlayPause();
    }
    if (event.code === 'KeyF') {
        var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
            (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
            (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
            (document.msFullscreenElement && document.msFullscreenElement !== null);

        var docElm = document.documentElement;
        if (!isInFullScreen) {
            if (docElm.requestFullscreen) {
                docElm.requestFullscreen();
            } else if (docElm.mozRequestFullScreen) {
                docElm.mozRequestFullScreen();
            } else if (docElm.webkitRequestFullScreen) {
                docElm.webkitRequestFullScreen();
            } else if (docElm.msRequestFullscreen) {
                docElm.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    }
    if (event.code === 'KeyM') {
        if (localStorage['isMuted'] == 'false') {
            document.getElementById('video').volume = 0;
            document.getElementById('muteIcon').style.display = 'block';
            document.getElementById('soundIcon').style.display = 'none';
            localStorage['isMuted'] = 'true';
        } else {
            document.getElementById('video').volume = 1;
            localStorage['isMuted'] = 'false';
            document.getElementById('muteIcon').style.display = 'none';
            document.getElementById('soundIcon').style.display = 'block';
        }
    }
    if (event.code === 'Slash') {
        showKeyboardControls();
    }
    console.log(event.code);
})

function fullScreen() {
    var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
        (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
        (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
        (document.msFullscreenElement && document.msFullscreenElement !== null);

    var docElm = document.documentElement;
    if (!isInFullScreen) {
        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        } else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
        } else if (docElm.msRequestFullscreen) {
            docElm.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
    togglePlayPause();
}

function downloadVideo(uri, name) {
    var link = document.createElement("a");
    if (localStorage['mediaType'] == 'tv') {
        link.download = localStorage['tvShowTitleSpaced'] + ' S' + localStorage['tvSeasonNum'] + ' E' + localStorage['tvEpisodeNum'] + ' - ' + localStorage['tvEpisodeTitle'];
        link.href = "VideoVault/" + localStorage['tvShowTitleSpaced'] + "/Season " + localStorage['tvSeasonNum'] + "/" + localStorage['tvEpisodeTitle'] + ".mp4";
    } if (localStorage['mediaType'] == 'movie') {
        link.download = localStorage['movieTitle'];
        link.href = "VideoVault/" + localStorage['movieTitle'] + ".mp4";
    }
    link.click();
}

// TV episode panel

function moreInfoTV(tvShowTitleSpaced) {
    localStorage['tvShowTitleSpaced'] = tvShowTitleSpaced;
    var tvShowTitleUnspaced = tvShowTitleSpaced.replace(/\s/g, '');
    document.getElementById('moreInfoTVWindow').style.display = 'block';
    document.getElementById('more-info-title-bar').innerHTML = tvShowTitleSpaced;
    localStorage['activeEpisodesTab'] = 1;
    a = 0;
    length = eval(tvShowTitleUnspaced).length;
    console.log(length);
    document.getElementById('more-info-navbar').innerHTML = '';
    while (a < length) {
        a++;
        if (a == localStorage['activeEpisodesTab']) {
            document.getElementById('more-info-navbar').innerHTML = document.getElementById('more-info-navbar').innerHTML + `
            <div class='active-more-info-navbar-item' onclick='selectSeason("` + a + `")'>
                Season ` + a + `
            </div>`
        } else {
            document.getElementById('more-info-navbar').innerHTML = document.getElementById('more-info-navbar').innerHTML + `
            <div class='more-info-navbar-item' onclick='selectSeason("` + a + `")'>
                Season ` + a + `
            </div>`
        }
    }
    b = 0;
    document.getElementById('seasonEpisodesOrderedList').innerHTML = '';
    var season1Episodes = eval(tvShowTitleUnspaced)[0];
    while (b < season1Episodes) {
        b++;
        document.getElementById('seasonEpisodesOrderedList').innerHTML = document.getElementById('seasonEpisodesOrderedList').innerHTML + `
        <li onclick='synthesizeTV("` + tvShowTitleSpaced + `",1,` + b + `)'>
            ` + eval(tvShowTitleUnspaced + 'S1')[b] + `
        </li>`
        // eval('TheOffice' + 'S1')[b]
    }
}

function selectSeason(seasonNum) {
    c = 0;
    var tvShowTitleSpaced = localStorage['tvShowTitleSpaced'];
    var tvShowTitleUnspaced = localStorage['tvShowTitleSpaced'].replace(/\s/g, '');
    var seasonXEpisodes = eval(tvShowTitleUnspaced)[seasonNum - 1];
    document.getElementById('seasonEpisodesOrderedList').innerHTML = '';
    while (c < seasonXEpisodes) {
        c++;
        document.getElementById('seasonEpisodesOrderedList').innerHTML = document.getElementById('seasonEpisodesOrderedList').innerHTML + `
        <li onclick='synthesizeTV("` + localStorage['tvShowTitleSpaced'] + `",` + seasonNum + `,` + c + `)'>
            ` + eval(tvShowTitleUnspaced + 'S' + seasonNum)[c] + `
        </li>`;
        // eval('TheOffice' + 'S1')[b]
    }
    d = 0;
    length = eval(tvShowTitleUnspaced).length;
    localStorage['activeEpisodesTab'] = seasonNum;
    document.getElementById('more-info-navbar').innerHTML = '';
    while (d < length) {
        d++;
        if (d == localStorage['activeEpisodesTab']) {
            document.getElementById('more-info-navbar').innerHTML = document.getElementById('more-info-navbar').innerHTML + `
            <div class='active-more-info-navbar-item' onclick='selectSeason("` + d + `")'>
                Season ` + d + `
            </div>`
        } else {
            document.getElementById('more-info-navbar').innerHTML = document.getElementById('more-info-navbar').innerHTML + `
            <div class='more-info-navbar-item' onclick='selectSeason("` + d + `")'>
                Season ` + d + `
            </div>`
        }
    }
}

function closeMoreInfoTV() {
    document.getElementById('moreInfoTVWindow').style.display = 'none';
    document.getElementById('more-info-navbar').innerHTML = "<div class='active-more-info-navbar-item' onclick='selectSeason(`1`)'>Season 1</div>";
    document.getElementById('seasonEpisodesOrderedList').innerHTML = '';
}

// Search bar

function expandSearchField() {
    document.getElementById('searchBar').style.width = '250pt';
    document.getElementById('searchBar').style.paddingLeft = '10pt';
    document.getElementById('searchIcon').style.right = '250pt';
    document.getElementById('searchIcon').style.backgroundColor  = 'rgb(64,64,64)';
}

function search() {
    let input = document.getElementById('searchBar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('cover-image-button');
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";
        }
    }
}

// Javascript helper

function convertMessage(season, message) {
    var newText = 'var ParksandRecreationS' + season + ' = [' + season + ',"' + message.replace(/\n/g, '","') + '"];';
    console.log(newText);
    var ParksandRecreationS2 = [2,'Bye, Bye','Okay, then'];
}
