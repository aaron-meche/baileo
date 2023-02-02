const firebaseConfig = {
    apiKey: "AIzaSyB8JHadxzzz9bepVOiuJVnw1ke0OEB3D9s",
    authDomain: "baileo.firebaseapp.com",
    projectId: "baileo",
    storageBucket: "baileo.appspot.com",
    messagingSenderId: "448246323580",
    appId: "1:448246323580:web:422970b7dd75425d85ecf9"
};
firebase.initializeApp(firebaseConfig);

// Media Data

const TheOffice = {
    mediaType: 'tv',
    sTotal: 9,
    s1: ["Pilot", "Diversity Day", "Health Care", "The Alliance", "Basketball", "Hot Girl"],
    s2: ["The Dundies", "Sexual Harassment", "Office Olympics", "The Fire", "Halloween", "The Fight", "The Client", "Performance Review", "Email Surveillance", "Christmas Party", "Booze Cruise", "The Injury", "The Secret", "The Carpet", "Boys and Girls", "Valentine's Day", "Dwight's Speech", 'Take Your Daughter to Work Day', "Micheal's Birthday", "Drug Testing", "Conflict Resolution", "Casino Night"],
    s3: ["Gay Witch Hunt", "The Convention", "The Coup", "Grief Counseling", "Initiation", "Diwali", "Branch Closing", "The Merger", "The Convict", "A Benihana Christmas", "Back From Vacation", "Traveling Salesman", "The Return", "Ben Franklin", "Phyllis' Wedding", "Business School", "Cocktails", "The Negotiation", "Safety Training", "Product Recall", "Women's Appreciation", "Beach Games", "The Job"],
    s4: ["Fun Run", "Dunder Mifflin Infinity", "Launch Party", "Money", "Local Ad", "Branch Wars", "Survivor Man", "The Deposition", "Dinner Party", "Chair Model", "Night Out", "Did I Stutter", "Job Fair", "Goodbye, Toby"],
    s5: ["Weight Loss", "Business Ethics", "Baby Shower", "Crime AID", "Employee Transfer", "Customer Survey", "Business Trip", "Frame Toby", "The Surplus", "Moroccan Christmas", "The Duel", "Prince Family Paper", "Stress Relief", "Lecture Circuit P1", "Lecture Circuit P2", "Blood Drive", "Golden Ticket", "New Boss", "Two Weeks", "Dream Team", "Michael Scott Paper Company", "Heavy Competition", "Broke", "Casual Friday", "Cafe Disco", "Company Picnic"],
    s6: ["Gossip", "The Meeting", "The Promotion", "Niagra", "Mafia", "The Lover", "Koi Pond", "Double Date", "Murder", "Shareholder Meeting", "Scott's Tots", "Secret Santa", "The Banker", "Sabre", "The Manager and the Salesman", "The Delivery", "St. Patrick's Day", "New Leads", "Happy Hour", "Secretary's Day", "Body Language", "The Cover Up", "The Chump", "Whistleblower"],
    s7: ["Nepotism", "Counseling", "Andy's Play", "Sex Ed", "The Sting", "Costume Contest", "Christening", "Viewing Party", "WUPHF.com", "China", "Classy Christmas", "Ultimatum", "The Seminar", "The Search", "PDA", "Threat Level Midnight", "Todd Packer", "Garage Sale", "Training Day", "Michael's Last Dundies", "Goodbye, Michael", "The Inner Circle", "Dwight K. Schrute, (Acting) Manager", "Search Committee"],
    s8: ["The List", "The Incentive", "Lotto", "Garden Party", "Spooked", "Doomsday", "Pam's Replacement", "Gettysburg", "Mrs. California", "Christmas Wishes", "Trivia", "Pool Party", "Jury Duty", "Special Project", "Tallahassee", "After Hours", "Test the Store", "Last Day in Florida", "Get the Girl", "Welcome Party", "Angry Andy", "Fundraiser", "Turf War", "Free Family Portrait Studio"],
    s9: ["New Guys", "Roy's Wedding", "Andy's Ancestry", "Work Bus", "Here Comes Treble", "The Boat", "The Whale", "The Target", "Dwight Christmas", "Lice", "Suit Warehouse", "Customer Loyalty", "Junior Salesman", "Vandalism", "Couples Discount", "Moving On", "The Farm", "Promos", "Stairmageddon", "Paper Airplane", "Livin' The Dream", "AARM", "Finale"],
    description: "The Office is an American mockumentary sitcom television series that depicts the everyday work lives of office employees in the Scranton, Pennsylvania branch of the fictional Dunder Mifflin Paper Company. It aired on NBC from March 24, 2005, to May 16, 2013, spanning a total of nine seasons. Based on the 2001-2003 BBC series of the same name created by Ricky Gervais and Stephen Merchant, it was adapted for American television by Greg Daniels, a veteran writer for Saturday Night Live, King of the Hill, and The Simpsons. It was co-produced by Daniels's Deedle-Dee Productions and Reveille Productions (later Shine America), in association with Universal Television. The original executive producers were Daniels, Gervais, Merchant, Howard Klein, and Ben Silverman, with numerous others being promoted in later seasons.",
    color: 'rgba(0, 51, 255)',
}

const ParksandRecreation = {
    mediaType: 'tv',
    sTotal: 7,
    s1: ["Pilot", "Canvassing", "The Reporter", "Boys' Club", "The Banquet", "Rock Show"],
    s2: ["Pawnee Zoo", "The Stakeout", "Beauty Pageant", "Practice Date", "Sister City", "Kaboom", "Greg Pitkins", "Ron and Tammy", "The Camel", "Hunting Trip", "Tom’s Divorce", "Christmas Scandal", "The Set Up", "Leslie’s House", "Sweetums", "Galentine’s Day", "Woman of the Year", "The Possum", "Park Safety", "Summer Catalog", "94 Meetings", "Telethon", "The Master Plan", "Freddy Spaghetti"],
    s3: ["Go Big or Go Home", "Flu Season", "Time Capsule", "Ron and Tammy Part Two", "Media Blitz", "Indianapolis", "Harvest Festival", "Camping", "Andy and April’s Fancy Party", "Soulmates", "Jerry’s Painting", "Eagleton", "The Fight", "Road Trip", "The Bubble", "Li’l Sebastian"],
    s4: ["I'm Leslie Knope", "Ron and Tammys", "Born and Raised", "Pawnee Rangers", "Meet n Greet", "End of the World", "The Treaty", "Smallest Park", "The Trial of Leslie Know", "Citizen Knope", "The Comeback Kid", "Campaign Ad", "Bowling for Votes", "Operation Ann", "Dave Returns", "Sweet Sixteen", "Campaign Shake-Up", "Lucky", "Live Ammo", "The Debate", "Bus Tour", "Win, Lose, or Draw"],
    s5: ["Ms. Knope Goes to Washington", "Soda Tax", "How a Bill Becomes a Law", "Sex Education", "Halloween Suprise", "Ben's Parents", "Leslie v April", "Pawnee Commons", "Ron and Diane", "Two Parties", "Women in Garbage", "Ann’s Decision", "Emergency Response", "Leslie and Ben", "Correspondent’s Lunch", "Bailout", "Partridge", "Animal Control", "Article Two", "Jerry’s Retirement", "Swing Vote", "Are You Better Off"],
    s6: ["London", "The Pawnee-Eagleton Tip Off Classic", "Doppelgängers", "Gin it Up!", "Filibuster", "Recall Vote", "Fluoride", "The Cones of Dunshire", "Second Chunce", "New Beginnings", "Farmers Market", "Ann and Chris", "Anniversaries", "The Wall", "New Slogan", "Galentine’s Day", "Prom", "Flu Season 2", "One in 8,000", "Moving Up"],
    s7: ["2017", "Ron and Jammy", "William Henry Harrison", "Leslie and Ron", "Gryzzlbox", "Save JJ's", "Donna and Joe", "Ms. Ludgate-Dwyer Goes to Washington", "Pie-Mary", "The Johnny Karate Super Awesome Musical Explosion Show", "Two Funerals", "One Last Ride"],
    description: "Parks and Recreation (also known as Parks and Rec) is an American political satire mockumentary sitcom television series created by Greg Daniels and Michael Schur. The series aired on NBC from April 9, 2009, to February 24, 2015, for 125 episodes, over seven seasons. A special reunion episode aired on April 30, 2020. The series stars Amy Poehler as Leslie Knope, a perky, mid-level bureaucrat in the Parks Department of Pawnee, a fictional town in Indiana. The ensemble and supporting cast features Rashida Jones as Ann Perkins, Paul Schneider as Mark Brendanawicz, Aziz Ansari as Tom Haverford, Nick Offerman as Ron Swanson, Aubrey Plaza as April Ludgate, Chris Pratt as Andy Dwyer, Adam Scott as Ben Wyatt, Rob Lowe as Chris Traeger, Jim O'Heir as Garry (Jerry) Gergich, Retta as Donna Meagle, and Billy Eichner as Craig Middlebrooks.",
    color: 'rgba(188, 230, 149, 1)',
}

const SquidGame = {
    mediaType: 'tv',
    sTotal: 1,
    s1: ['Red Light', "Green Light", "Hell", "The Man with the Umbrella", "Stick to the Team", "A Fair World", "Gganbu", "VIPS", "Front Man", "One Lucky Day"],
    description: "Squid Game is a South Korean survival drama television series created by Hwang Dong-hyuk for Netflix. Its cast includes Lee Jung-jae, Park Hae-soo, Wi Ha-joon, HoYeon Jung, O Yeong-su, Heo Sung-tae, Anupam Tripathi, and Kim Joo-ryoung. The series revolves around a contest where 456 players, all of whom are in deep financial hardship, risk their lives to play a series of deadly children's games for the chance to win a 5.6 billion KRW (38 million USD) prize. The title of the series draws from a similarly named Korean children's game. Hwang had conceived of the idea based on his own economic struggles early in life, as well as the class disparity in South Korea and capitalism. Though he had initially written it in 2009, he was unable to find a production company to fund the idea until Netflix took an interest around 2019 as part of their drive to expand their foreign programming offerings.",
    color: 'rgba(164, 79, 255, 1)',
}

const Sherlock = {
    mediaType: 'tv',
    sTotal: 4,
    s1: ["A Study in Pink", "The Blind Banker", "The Great Game"],
    s2: ["A Scandal in Belgravia", "The Hounds of Baskerville", "The Reichenbach Fall"],
    s3: ["The Empty Hearse", "The Sign of Three", "His Last Vow"],
    s4: ["The Six Thatchers", "The Lying Detective", "The Final Problem"],
    description: "Sherlock is a British mystery crime drama television series based on Sir Arthur Conan Doyle's Sherlock Holmes detective stories. Created by Steven Moffat and Mark Gatiss, it stars Benedict Cumberbatch as Sherlock Holmes and Martin Freeman as Doctor John Watson. Thirteen episodes have been produced, with four three-part series airing from 2010 to 2017 and a special episode that aired on 1 January 2016. The series is set in the present day, while the one-off special features a Victorian period fantasy resembling the original Holmes stories. Sherlock is produced by the British network BBC, along with Hartswood Films, with Moffat, Gatiss, Sue Vertue and Rebecca Eaton serving as executive producers. The series is supported by the American station WGBH-TV Boston for its Masterpiece anthology series on PBS, where it also airs in the United States. The series is primarily filmed in Cardiff, Wales, with North Gower Street in London used for exterior shots of Holmes and Watson's 221B Baker Street residence.",
    color: "rgba(255, 49, 49, 1)",
}

const FamilyGuy = {
    mediaType: 'tv',
    sTotal: 20,
    s18: ['Yacht Rocky','Bri-da','Absolutely Babulous','Disney the Reboot','Cat Fight',"Peter and Lois' Wedding",'Heart Burn','Shanksgiving','Christmas is Coming','Connies Celica','Short Cuts','Undergrounded','Rich Old Stewie','The Movement','Baby Stewie','Start Me Up','Coma Guy','Better Off Meg','Holly Bibble',"Movin in Principal Shepherd's Song"],
    description: "Family Guy is an American adult animated sitcom created by Seth MacFarlane for the Fox Broadcasting Company. The series centers on the Griffins, a family consisting of parents Peter and Lois; their children, Meg, Chris, and Stewie; and their anthropomorphic pet dog, Brian. Set in the fictional city of Quahog, Rhode Island, the show exhibits much of its humor in the form of metafictional cutaway gags that often lampoon American culture.",
    color: "rgba(227, 45, 255, 1)",
}

// Declare variables

var key = '';
var mediaType = '';
var mediaTitle = '';
var videoPath = '';
var season = '';
var episodeTitle = '';
var episodeNumber = '';
var episodeNumberRaw = '';
var username = '';
var idleTimer = 0;
var loadTime = new Date().getTime();

// Reference functions

function percent(time) {
    return (time / document.getElementById('video').duration);
}

function percentProgress() {
    return (document.getElementById('video').currentTime / document.getElementById('video').duration);
}

function unpercent(time) {
    return (time * document.getElementById('video').duration);
}

// Pull and provide information

function receiverPortal() {
    loading();

    // Variables

    var urlParams = new URLSearchParams(document.location.search);
    key = urlParams.get('key');

    firebase.database().ref('links/' + key).once('value', (snapshot) => {
        
        mediaType = snapshot.val()['type'];
        mediaTitle = snapshot.val()['title'];

        if (snapshot.val()['username'] == undefined) {
            alert("You aren't logged into your Baileo account!");
            backHome();
        } else {
            username = snapshot.val()['username'];
            console.log(username);
        }

        document.getElementById('videoTitle').innerHTML = mediaTitle;

        if (snapshot.val()['type'] == 'movie') {
            document.getElementById('videoCaption').style.display = 'none';
            document.getElementById('nextEpisodeButton').style.display = 'none';

            videoPath = mediaTitle;
    
            firebase.database().ref('users/' + username + '/watched/movie/' + mediaTitle).once('value', (snapshot) => {
                if (snapshot.val() > 0) {
                    firebase.database().ref('users/' + username + '/progress/movie/' + mediaTitle).once('value', (snapshot) => {
                        loadProgress(snapshot.val());
                        updateWatchedMovie();
                    });
                } else {
                    updateWatchedMovie();
                    loadProgress(0);
                }
            });
        } else if (snapshot.val()['type'] == 'tv') {
            season = snapshot.val()['season'];
            episodeNumberRaw = snapshot.val()['episodeNumberRaw'];
            episodeNumber = Number(episodeNumberRaw) + 1;
            episodeTitle = snapshot.val()['episodeTitle'];

            document.getElementById('videoCaption').innerHTML = 'S' + season + ' E' + episodeNumber + ' - ' + episodeTitle;
            document.getElementById('completeButton').style.display = 'none';

            videoPath = mediaTitle + '/' + 'Season ' + season + '/' +  episodeTitle;

            firebase.database().ref('users/' + username + '/watched/tv/' + mediaTitle).once('value', (snapshot) => {
                if (snapshot.val() > 0) {
                    firebase.database().ref('users/' + username + '/progress/tv/' + mediaTitle + 'S').once('value', (snapshot) => {
                        if (snapshot.val() == season) {
                            firebase.database().ref('users/' + username + '/progress/tv/' + mediaTitle + 'E').once('value', (snapshot) => {
                                if (snapshot.val() == episodeNumberRaw) { 
                                    firebase.database().ref('users/' + username + '/progress/tv/' + mediaTitle).once('value', (snapshot) => {
                                        console.log(snapshot.val());
                                        loadProgress(snapshot.val());
                                    });
                                } else{
                                    updateWatchedTV();
                                    loadProgress(0);
                                }
                            });
                        } else{
                            updateWatchedTV();
                            loadProgress(0);
                        }
                    });
                } else{
                    updateWatchedTV();
                    loadProgress(0);
                }
            });
        }

        document.getElementById('video').innerHTML = '<source id="source" src="media/' + videoPath + '.mp4" type="video/mp4"></source>';
        tryVideoLoad();
    });
}

function updateWatchedMovie() {
    setDataProfile('watched/movie/' + mediaTitle, loadTime);
}

function updateWatchedTV() {
    setDataProfile('watched/tv/' + mediaTitle, loadTime);
    setDataProfile('progress/tv/' + mediaTitle + 'E', episodeNumberRaw);
    setDataProfile('progress/tv/' + mediaTitle + 'S', season);
}

// Firebase standard functions

function setData(reference, value) {
    firebase.database().ref(reference).set(value);
}

function setDataProfile(reference, value) {
    firebase.database().ref('users/' + username + '/' + reference).set(value);
}

function callData(reference) {
    firebase.database().ref(reference).on('value', function(snapshot) {
    });
}

function getData(reference) {
    firebase.database().ref(reference).once('value', (snapshot) => {
    });
}

function deleteData() {
    firebase.database().ref('users/ginger').remove();
}

// Reference Functions

function backHome() {
    window.open('https://baileo.us', "_self");
}

function openPage(link) {
    window.open(link, "_self");
}

function simplifyTime(seconds) {
    var sec = 0;
    var min = Math.floor(seconds / 60);
    if (min >= 60) {
        var hour = Math.floor(min / 60);
        min = min - (hour * 60); 
        sec = Math.floor(seconds - ((hour * 3600) + (min * 60)));
        if (min.toString().length == 1) {
            min = '0' + min;
        }
        if (sec.toString().length == 1) {
            sec = '0' + sec;
        }
        return hour + ':' + min + ':' + sec;
    }
    if (min < 60) {
        sec = Math.floor(seconds - (min * 60));
        if (min.toString().length == 1) {
            min = '0' + min;
        }
        if (sec.toString().length == 1) {
            sec = '0' + sec;
        }
        return min + ':' + sec;
    }
}

function updateProgressRepeater() {
    setInterval(function(){
        updateProgress();
    }, 500);
}

function updateProgress() {
    setDataProfile('progress/' + mediaType + '/' + mediaTitle, percentProgress());
}

function downloadVideo() {
    var link = document.createElement("a");
    if (mediaType == 'tv') {
        link.download = mediaTitle + ' S' + season + ' E' + episodeNumber + ' - ' + episodeTitle;
        link.href = "media/" + mediaTitle + "/Season " + season + "/" + episodeTitle + ".mp4";
    }
    if (mediaType == 'movie') {
        link.download = mediaTitle;
        link.href = "media/" + mediaTitle + ".mp4";
    }
    link.click();
}

// Functions

function loadProgress(progress) {
    sessionStorage['savedProgress'] = progress;
}

function tryVideoLoad() {
    
    var interval = setInterval(function(){
        
        var countForVideo = document.getElementById('video').readyState;

        document.getElementById('loadingProgressBarStatus').style.width = ((countForVideo / 4) * 100) + '%';

        if (countForVideo == 4){
            stopLoading();
            document.getElementById('video').currentTime = unpercent(sessionStorage['savedProgress']);
            console.log(sessionStorage['savedProgress']);
            console.log('video loaded');
            updateProgress();
            updateProgressRepeater();
            clearInterval(interval);
        }

    }, 100);
}

function toggleMute() {
    if (document.getElementById('video').volume == 0) {
        document.getElementById('video').volume = 1;
        document.getElementById('muteButton').style.display = 'none';
        document.getElementById('soundButton').style.display = 'block';
    } else {
        document.getElementById('video').volume = 0;
        document.getElementById('muteButton').style.display = 'block';
        document.getElementById('soundButton').style.display = 'none';
    }
}

function unspace(string) {
    return string.replace(/\s/g, '');
}

function nextEpisode() {
    var tvShow = mediaTitle;
    var tvShowUS = unspace(tvShow);
    var episode = episodeNumberRaw;
    var seasonCapacity = eval(tvShowUS)['s' + season].length;
    var seasonsTotal = eval(tvShowUS)['sTotal'];

    if (episode == (seasonCapacity - 1)) {
        if (season == seasonsTotal) {
            openPage('https://baileo.us/index.html');
        } else {
            season++;
            playEpisode(tvShowUS,season,0);
        }
    } else {
        episode++;
        playEpisode(tvShowUS,season,episode);
    }
}

function playEpisode(titleUS, season, episode) {
    console.log(eval(titleUS)['s' + season][episode]);
    setData('links/' + key + '/episodeNumberRaw', episode);
    setData('links/' + key + '/season', season);
    setData('links/' + key + '/episodeTitle', eval(titleUS)['s' + season][episode]);
    // receiverPortal();
    window.location.reload(true);
}

function loading() {
    document.getElementById('loadingScreen').style.display = 'block';
}

function stopLoading() {
    document.getElementById('loadingScreen').style.display = 'none';
}

function markAsWatched() {
    firebase.database().ref('users/' + username + '/watched/movie/' + mediaTitle).remove();

    openPage('https://baileo.us');
}

var mobileNavMenuExpanded = false;

function mobileNavMenu() {
    if (mobileNavMenuExpanded) {
        document.getElementById('mobileNavbarDropMenu').style.display = 'none';
        document.getElementById('expandMobileNavmenu').style.display = 'block';
        document.getElementById('closeMobileNavmenu').style.display = 'none';
        mobileNavMenuExpanded = false;
    } else {
        document.getElementById('mobileNavbarDropMenu').style.display = 'block';
        document.getElementById('expandMobileNavmenu').style.display = 'none';
        document.getElementById('closeMobileNavmenu').style.display = 'block';
        mobileNavMenuExpanded = true;
    }
}