const firebaseConfig = {
    apiKey: "AIzaSyB8JHadxzzz9bepVOiuJVnw1ke0OEB3D9s",
    authDomain: "baileo.firebaseapp.com",
    projectId: "baileo",
    storageBucket: "baileo.appspot.com",
    messagingSenderId: "448246323580",
    appId: "1:448246323580:web:422970b7dd75425d85ecf9"
};
firebase.initializeApp(firebaseConfig);

var TheOfficeS1 = [1, 'Pilot', 'Diversity Day', 'Health Care', 'The Alliance', 'Basketball', 'Hot Girl'];
var TheOfficeS2 = [2, 'The Dundies', 'Sexual Harassment', 'Office Olympics', 'The Fire', 'Halloween', 'The Fight', 'The Client', 'Performance Review', 'Email Surveillance', 'Christmas Party', 'Booze Cruise', 'The Injury', 'The Secret', 'The Carpet', 'Boys and Girls', "Valentine's Day", "Dwight's Speech", 'Take Your Daughter to Work Day', "Micheal's Birthday", 'Drug Testing', 'Conflict Resolution', 'Casino Night'];
var TheOfficeS3 = [3, 'Gay Witch Hunt', 'The Convention', 'The Coup', 'Grief Counseling', 'Initiation', 'Diwali', 'Branch Closing', 'The Merger', 'The Convict', 'A Benihana Christmas', 'Back From Vacation', 'Traveling Salesman', 'The Return', 'Ben Franklin', "Phyllis' Wedding", 'Business School', 'Cocktails', 'The Negotiation', 'Safety Training', 'Product Recall', "Women's Appreciation", 'Beach Games', 'The Job'];
var TheOfficeS4 = [4, "Fun Run", "Dunder Mifflin Infinity", "Launch Party", "Money", "Local Ad", "Branch Wars", "Survivor Man", "The Deposition", "Dinner Party", "Chair Model", "Night Out", "Did I Stutter", "Job Fair", "Goodbye, Toby"];
var TheOfficeS5 = [5, "Weight Loss", "Business Ethics", "Baby Shower", "Crime AID", "Employee Transfer", "Customer Survey", "Business Trip", "Frame Toby", "The Surplus", "Moroccan Christmas", "The Duel", "Prince Family Paper", "Stress Relief", "Lecture Circuit P1", "Lecture Circuit P2", "Blood Drive", "Golden Ticket", "New Boss", "Two Weeks", "Dream Team", "Michael Scott Paper Company", "Heavy Competition", "Broke", "Casual Friday", "Cafe Disco", "Company Picnic"];
var TheOfficeS6 = [6, "Gossip", "The Meeting", "The Promotion", "Niagra", "Mafia", "The Lover", "Koi Pond", "Double Date", "Murder", "Shareholder Meeting", "Scott's Tots", "Secret Santa", "The Banker", "Sabre", "The Manager and the Salesman", "The Delivery", "St. Patrick's Day", "New Leads", "Happy Hour", "Secretary's Day", "Body Language", "The Cover Up", "The Chump", "Whistleblower"];
var TheOfficeS7 = [7, "Nepotism", "Counseling", "Andy's Play", "Sex Ed", "The Sting", "Costume Contest", "Christening", "Viewing Party", "WUPHF.com", "China", "Classy Christmas", "Ultimatum", "The Seminar", "The Search", "PDA", "Threat Level Midnight", "Todd Packer", "Garage Sale", "Training Day", "Michael's Last Dundies", "Goodbye, Michael", "The Inner Circle", "Dwight K. Schrute, (Acting) Manager", "Search Committee"];
var TheOfficeS8 = [8, "The List", "The Incentive", "Lotto", "Garden Party", "Spooked", "Doomsday", "Pam's Replacement", "Gettysburg", "Mrs. California", "Christmas Wishes", "Trivia", "Pool Party", "Jury Duty", "Special Project", "Tallahassee", "After Hours", "Test the Store", "Last Day in Florida", "Get the Girl", "Welcome Party", "Angry Andy", "Fundraiser", "Turf War", "Free Family Portrait Studio"];
var TheOfficeS9 = [9, "New Guys", "Roy's Wedding", "Andy's Ancestry", "Work Bus", "Here Comes Treble", "The Boat", "The Whale", "The Target", "Dwight Christmas", "Lice", "Suit Warehouse", "Customer Loyalty", "Junior Salesman", "Vandalism", "Couples Discount", "Moving On", "The Farm", "Promos", "Stairmageddon", "Paper Airplane", "Livin' The Dream", "AARM", "Finale"];
var TheOffice = [6, 22, 23, 14, 26, 24, 24, 24, 23];
var TheOfficeDescription = `The Office is an American mockumentary sitcom television series that depicts the everyday work lives of office employees in the Scranton, Pennsylvania branch of the fictional Dunder Mifflin Paper Company. It aired on NBC from March 24, 2005, to May 16, 2013, spanning a total of nine seasons. Based on the 2001-2003 BBC series of the same name created by Ricky Gervais and Stephen Merchant, it was adapted for American television by Greg Daniels, a veteran writer for Saturday Night Live, King of the Hill, and The Simpsons. It was co-produced by Daniels's Deedle-Dee Productions and Reveille Productions (later Shine America), in association with Universal Television. The original executive producers were Daniels, Gervais, Merchant, Howard Klein, and Ben Silverman, with numerous others being promoted in later seasons.`;

var ParksandRecreationS1 = [1, "Pilot", "Canvassing", "The Reporter", "Boys' Club", "The Banquet", "Rock Show"];
var ParksandRecreationS2 = [2, "Pawnee Zoo", "The Stakeout", "Beauty Pageant", "Practice Date", "Sister City", "Kaboom", "Greg Pitkins", "Ron and Tammy", "The Camel", "Hunting Trip", "Tom’s Divorce", "Christmas Scandal", "The Set Up", "Leslie’s House", "Sweetums", "Galentine’s Day", "Woman of the Year", "The Possum", "Park Safety", "Summer Catalog", "94 Meetings", "Telethon", "The Master Plan", "Freddy Spaghetti"];
var ParksandRecreationS3 = [3, "Go Big or Go Home", "Flu Season", "Time Capsule", "Ron & Tammy: Part Two", "Media Blitz", "Indianapolis", "Harvest Festival", "Camping", "Andy and April’s Fancy Party", "Soulmates", "Jerry’s Painting", "Eagleton", "The Fight", "Road Trip", "The Bubble", "Li’l Sebastian"];
var ParksandRecreationS4 = [4, "I’m Leslie Knope", "Ron and Tammys", "Born & Raised", "Pawnee Rangers", "Meet n Greet", "End of the World", "The Treaty", "Smallest Park", "The Trial of Leslie Know", "Citizen Knope", "The Comeback Kid", "Campaign Ad", "Bowling for Votes", "Operation Ann", "Dave Returns", "Sweet Sixteen", "Campaign Shake-Up", "Lucky", "Live Ammo", "The Debate", "Bus Tour", "Win, Lose, or Draw"];
var ParksandRecreationS5 = [5, "Ms. Knope Goes to Washington", "Soda Tax", "How a Bill Becomes a Law", "Sex Education", "Halloween Suprise", "Ben’s Parents", "Leslie vs. April", "Pawnee Commons", "Ron and Diane", "Two Parties", "Women in Garbage", "Ann’s Decision", "Emergency Response", "Leslie and Ben", "Correspondent’s Lunch", "Bailout", "Partridge", "Animal Control", "Article Two", "Jerry’s Retirement", "Swing Vote", "Are You Better Off?"];
var ParksandRecreationS6 = [6, "London", "The Pawnee-Eagleton Tip Off Classic", "Doppelgängers", "Gin it Up!", "Filibuster", "Recall Vote", "Fluoride", "The Cones of Dunshire", "Second Chunce", "New Beginnings", "Farmers Market", "Ann and Chris", "Anniversaries", "The Wall", "New Slogan", "Galentine’s Day", "Prom", "Flu Season 2", "One in 8,000", "Moving Up"];
var ParksandRecreationS7 = [7, "2017", "Ron and Jammy", "William Henry Harrison", "Leslie and Ron", "Gryzzlbox", "Save JJ’s", "Donna and Joe", "Ms. Ludgate-Dwyer Goes to Washington", "Pie-Mary", "The Johnny Karate Super Awesome Musical Explosion Show", "Two Funerals", "One Last Ride"];
var ParksandRecreation = [6, 24, 16, 22, 22, 20, 12];
var ParksandRecreationDescription = `Parks and Recreation (also known as Parks and Rec) is an American political satire mockumentary sitcom television series created by Greg Daniels and Michael Schur. The series aired on NBC from April 9, 2009, to February 24, 2015, for 125 episodes, over seven seasons. A special reunion episode aired on April 30, 2020. The series stars Amy Poehler as Leslie Knope, a perky, mid-level bureaucrat in the Parks Department of Pawnee, a fictional town in Indiana. The ensemble and supporting cast features Rashida Jones as Ann Perkins, Paul Schneider as Mark Brendanawicz, Aziz Ansari as Tom Haverford, Nick Offerman as Ron Swanson, Aubrey Plaza as April Ludgate, Chris Pratt as Andy Dwyer, Adam Scott as Ben Wyatt, Rob Lowe as Chris Traeger, Jim O'Heir as Garry "Jerry" Gergich, Retta as Donna Meagle, and Billy Eichner as Craig Middlebrooks.`

var SquidGameS1 = [1, 'Red Light, Green Light', 'Hell', 'The Man with the Umbrella', 'Stick to the Team', 'A Fair World', 'Gganbu', 'VIPS', 'Front Man', 'One Lucky Day']
var SquidGame = [9];
var SquidGameDescription = `Squid Game is a South Korean survival drama television series created by Hwang Dong-hyuk for Netflix. Its cast includes Lee Jung-jae, Park Hae-soo, Wi Ha-joon, HoYeon Jung, O Yeong-su, Heo Sung-tae, Anupam Tripathi, and Kim Joo-ryoung. The series revolves around a contest where 456 players, all of whom are in deep financial hardship, risk their lives to play a series of deadly children's games for the chance to win a 5.6 billion KRW (38 million USD) prize. The title of the series draws from a similarly named Korean children's game. Hwang had conceived of the idea based on his own economic struggles early in life, as well as the class disparity in South Korea and capitalism. Though he had initially written it in 2009, he was unable to find a production company to fund the idea until Netflix took an interest around 2019 as part of their drive to expand their foreign programming offerings.`

var SherlockS1 = [1, 'A Study in Pink', 'The Blind Banker', 'The Great Game'];
var SherlockS2 = [2, 'A Scandal in Belgravia', 'The Hounds of Baskerville', 'The Reichenbach Fall'];
var SherlockS3 = [3, 'The Empty Hearse', 'The Sign of Three', 'His Last Vow'];
var SherlockS4 = [4, 'The Six Thatchers', 'The Lying Detective', 'The Final Problem'];
var Sherlock = [3, 3, 3, 3];
var SherlockDescription = `Sherlock is a British mystery crime drama television series based on Sir Arthur Conan Doyle's Sherlock Holmes detective stories. Created by Steven Moffat and Mark Gatiss, it stars Benedict Cumberbatch as Sherlock Holmes and Martin Freeman as Doctor John Watson. Thirteen episodes have been produced, with four three-part series airing from 2010 to 2017 and a special episode that aired on 1 January 2016. The series is set in the present day, while the one-off special features a Victorian period fantasy resembling the original Holmes stories. Sherlock is produced by the British network BBC, along with Hartswood Films, with Moffat, Gatiss, Sue Vertue and Rebecca Eaton serving as executive producers. The series is supported by the American station WGBH-TV Boston for its Masterpiece anthology series on PBS, where it also airs in the United States. The series is primarily filmed in Cardiff, Wales, with North Gower Street in London used for exterior shots of Holmes and Watson's 221B Baker Street residence.`;

var AmericanPsychoDescription = `American Psycho is a 2000 satirical psychological horror film directed by Mary Harron, who wrote the script with Guinevere Turner. It stars Christian Bale, Willem Dafoe, Jared Leto, Josh Lucas, Chloë Sevigny, Samantha Mathis, Cara Seymour, Justin Theroux, and Reese Witherspoon. Based on Bret Easton Ellis' 1991 novel American Psycho, the film follows Patrick Bateman (Bale), a New York City investment banker who leads a double life as a serial killer. The satirical film blends horror and black comedy to mock 1980s yuppie culture and consumerism, exemplified by Bateman.`;

var Cars3Description = `Cars 3 is a 2017 American computer-animated sports comedy-adventure film produced by Pixar Animation Studios and released by Walt Disney Pictures. Directed by Brian Fee in his directorial debut and written by Kiel Murray, Bob Peterson, and Mike Rich, it is the sequel to Cars 2 (2011) and the third installment of the Cars film series. It was executive-produced by John Lasseter, who directed the first two Cars films. The returning voices of Owen Wilson, Bonnie Hunt and Larry the Cable Guy are joined by Cristela Alonzo, Chris Cooper, Armie Hammer, Nathan Fillion, Kerry Washington, and Lea DeLaria, in addition to a dozen NASCAR personalities.`

var CoralineDescription = `Coraline is a 2009 American stop-motion horror film written and directed by Henry Selick and based on Neil Gaiman's novella of the same name.[5] Produced by Laika as the studio's first feature film, it features the voice talents of Dakota Fanning, Teri Hatcher, Jennifer Saunders, Dawn French, Keith David, John Hodgman, Robert Bailey Jr., and Ian McShane. The film tells the story of its titular character discovering an idealized parallel universe behind a secret door in her new home, unaware that it contains a dark and sinister secret.

The film was theatrically released in the United States on February 6, 2009 by Focus Features after a world premiere at the Portland International Film Festival, and received universal acclaim. The film grossed $16.85 million during its opening weekend, ranking third at the box office, and by the end of its run had grossed over $124 million worldwide, making it the third highest-grossing stop-motion film of all time. The film won Annie Awards for Best Music in an Animated Feature Production, Best Character Design in an Animated Feature Production and Best Production Design in an Animated Feature Production, and received nominations for an Academy Award for Best Animated Feature and a Golden Globe Award for Best Animated Feature Film.`;

var DaddysHome2Description = `Daddy's Home 2 (known in-film as Daddy's Home Two) is a 2017 American Christmas comedy film directed by Sean Anders and written by Anders and John Morris. A sequel to Daddy's Home (2015), it stars Will Ferrell, Mark Wahlberg, Linda Cardellini, John Cena, with John Lithgow and Mel Gibson. The plot follows now-reformed fathers Brad and Dusty (Ferrell and Wahlberg), now co-parenting Dusty's kids, who have to deal with their own fathers (Lithgow and Gibson) visiting for the holidays. Unlike its predecessor, Red Granite Pictures was not involved in the film's production. Principal photography on the film began in Massachusetts in March 2017 and it was released in the United States by Paramount Pictures on November 10, 2017. Although the film received generally negative reviews from critics, it grossed over $180 million worldwide against a production budget of $69–70 million.`;

var DumbandDumberDescription = `Dumb and Dumber is a 1994 American buddy comedy film directed by Peter Farrelly, who co-wrote the screenplay with Bobby Farrelly and Bennett Yellin. It is the first installment in the Dumb and Dumber franchise. Starring Jim Carrey and Jeff Daniels, it tells the story of Lloyd Christmas (Carrey) and Harry Dunne (Daniels), two dumb but well-meaning friends from Providence, Rhode Island, who set out on a cross-country trip to Aspen, Colorado, to return a briefcase full of money to its owner, thinking it was abandoned as a mistake though it was actually left as a ransom. Lauren Holly, Karen Duffy, Mike Starr, Charles Rocket, and Teri Garr play supporting roles.`;

var KnivesOutDescription = `Knives Out is a 2019 American mystery film written and directed by Rian Johnson and produced by Johnson and Ram Bergman. It follows a master detective investigating the death of the patriarch of a wealthy, dysfunctional family. The film features an ensemble cast including Daniel Craig, Chris Evans, Ana de Armas, Jamie Lee Curtis, Michael Shannon, Don Johnson, Toni Collette, Lakeith Stanfield, Katherine Langford, Jaeden Martell, and Christopher Plummer.`;

var SpiderManHomecomingDescription = `Spider-Man: Homecoming is a 2017 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios, and distributed by Sony Pictures Releasing. It is the second Spider-Man film reboot and the 16th film in the Marvel Cinematic Universe (MCU). The film was directed by Jon Watts, from a screenplay by the writing teams of Jonathan Goldstein and John Francis Daley, Watts and Christopher Ford, and Chris McKenna and Erik Sommers. Tom Holland stars as Peter Parker / Spider-Man, alongside Michael Keaton, Jon Favreau, Gwyneth Paltrow, Zendaya, Donald Glover, Jacob Batalon, Laura Harrier, Tony Revolori, Bokeem Woodbine, Tyne Daly, Marisa Tomei, and Robert Downey Jr. In Spider-Man: Homecoming, Peter Parker tries to balance high school life with being Spider-Man while facing the Vulture (Keaton).`

var SpiderManNoWayHomeDescription = `Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios and distributed by Sony Pictures Releasing. It is the sequel to Spider-Man: Homecoming (2017) and Spider-Man: Far From Home (2019), and the 27th film in the Marvel Cinematic Universe (MCU). The film was directed by Jon Watts and written by Chris McKenna and Erik Sommers. It stars Tom Holland as Peter Parker / Spider-Man alongside Zendaya, Benedict Cumberbatch, Jacob Batalon, Jon Favreau, Jamie Foxx, Willem Dafoe, Alfred Molina, Benedict Wong, Tony Revolori, Marisa Tomei, Andrew Garfield, and Tobey Maguire. In the film, Parker asks Dr. Stephen Strange (Cumberbatch) to use magic to make his identity as Spider-Man a secret again following its public revelation at the end of Far From Home. When the spell goes wrong, the multiverse is broken open which allows visitors from alternate realities to enter Parker's universe.`

var TheAmazingSpiderMan2Description = `The Amazing Spider-Man 2 (internationally titled The Amazing Spider-Man 2: Rise of Electro)[6] is a 2014 American superhero film based on the Marvel Comics character Spider-Man. The film was directed by Marc Webb and produced by Avi Arad and Matt Tolmach. It is the fifth theatrical Spider-Man film produced by Columbia Pictures and Marvel Entertainment, the sequel to The Amazing Spider-Man (2012), and the final film in The Amazing Spider-Man series. The studio hired James Vanderbilt to write the screenplay and Alex Kurtzman and Roberto Orci to rewrite it. The film stars Andrew Garfield as Peter Parker / Spider-Man, alongside Emma Stone, Jamie Foxx, Dane DeHaan, Campbell Scott, Embeth Davidtz, Colm Feore, Paul Giamatti, and Sally Field. In the film, Peter Parker tries to protect Gwen Stacy as he investigates his parents' death, while also dealing with the supervillain Electro and the return of his childhood friend Harry Osborn, who is dying from a deadly genetic disease.`;

// Firebase base functions

function setData(reference, value) {
    firebase.database().ref(reference).set(value);
}

function setDataProfile(reference, value) {
    firebase.database().ref('users/' + localStorage['username'] + '/' + reference).set(value);
}

function callData(reference) {
    firebase.database().ref(reference).on('value', function(snapshot) {
        console.log(snapshot.val());
    });
}

function getData(reference) {
    firebase.database().ref(reference).once('value', (snapshot) => {
        console.log(snapshot.val())
    });
}

// Functions

function searchDesktop() {
    if (document.getElementById('searchBarDesktop').value == '') {
        document.getElementById('featuredPanel').style.display = 'block';
        let x = document.getElementsByClassName('media-image-button-text-container');
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
        }
    } else {
        document.getElementById('featuredPanel').style.display = 'none';
        let x = document.getElementsByClassName('media-image-button-text-container');
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'block';
        }
    }
    let input = document.getElementById('searchBarDesktop').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('media-image-button');
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "inline-block";
        }
    }
}

function searchMobile() {
    if (document.getElementById('searchBarMobile').value == '') {
        document.getElementById('featuredPanel').style.display = 'block';
    } else {
        document.getElementById('featuredPanel').style.display = 'none';
    }
    let input = document.getElementById('searchBarMobile').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('media-image-button');
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "inline-block";
        }
    }
}

function checkAccount() {
    if (localStorage['isLoggedIn'] == 'true') {
        void(0)
    } else {
        if (sessionStorage['hasBeenAskedToLogin'] == 'true') {
            void(0)
        } else {
            notifyUser('Login or Create Account','Login or create an account to unlock new features from Baileo such as progress saving, customized user interface, and more. Click to create or login to an account','account.html');
            sessionStorage['hasBeenAskedToLogin'] = 'true';
        }
    }
}

function  notifyUser(title, message, location) {
    document.getElementById('notificationModule').style.top = '10pt';
    document.getElementById('notificationModule').style.display = 'block';
    document.getElementById("notificationModule").onclick = function() { 
        window.open(location, "_self");
    };
    document.getElementById('notificationModuleTitle').innerHTML = title;
    document.getElementById('notificationModuleMessage').innerHTML = message;
    setTimeout(function() {
        document.getElementById('notificationModule').style.top = '-100vh';
    }, 5000);
    setTimeout(function() {
        document.getElementById('notificationModule').style.display = 'none';
    }, 5500);
}

function linkAction(location) {
    window.open(location, "_self");
}

function signIn() {
    firebase.database().ref('users/' + document.getElementById("username-input-login").value.toLowerCase() + '/password').once('value', (snapshot) => {
        if (snapshot.val() == document.getElementById("password-input-login").value) {
            localStorage['isLoggedIn'] = 'true';
            localStorage['username'] = document.getElementById("username-input-login").value.toLowerCase();
            window.open("index.html", "_self");
        } else {
            document.getElementById("signInButton").innerHTML = 'Login Unsuccessful';
            document.getElementById("signInButton").style.backgroundColor = 'lightcoral';
        }
    });
}

function signUp() {
    if (document.getElementById("password-input-signup").value == document.getElementById("confirm-password-input-signup").value) {
        if (document.getElementById("password-input-signup").value == '') {
            document.getElementById("signUpButton").innerHTML = 'Sign Up Unsuccessful';
            document.getElementById("signUpButton").style.backgroundColor = 'lightcoral';
        } else {
            if (document.getElementById("username-input-signup").value == '') {
                document.getElementById("signUpButton").innerHTML = 'Sign Up Unsuccessful';
                document.getElementById("signUpButton").style.backgroundColor = 'lightcoral';
            } else {
                firebase.database().ref('users/' + document.getElementById("username-input-signup").value.toLowerCase() + '/password').set(document.getElementById("password-input-signup").value);
                localStorage['isLoggedIn'] = 'true';
                localStorage['username'] = document.getElementById("username-input-signup").value.toLowerCase();
                console.log('done');
                window.open("index.html", "_self");
            }
        }
    } else {
        document.getElementById("signUpButton").innerHTML = 'Passwords do not match';
        document.getElementById("signUpButton").style.backgroundColor = 'lightcoral';
    }
}

// function loadAccountProfile() {
//     document.getElementById('profileUsername').innerHTML = '@' + localStorage['username'];
//     if (localStorage['profilePictureLoaded'] == 'true') {
//         document.getElementById('profilePicture').src = localStorage['profilePictureURL'];
//     } else {
//         firebase.database().ref('users/' + localStorage['username'] + '/pfp').once('value', (snapshot) => {
//             console.log(snapshot.val());
//             document.getElementById('profilePicture').src = snapshot.val();
//             localStorage['profilePictureLoaded'] = 'true';
//             localStorage['profilePictureURL'] = snapshot.val();
//         });
//     }
// }

function logOut() {
    localStorage.clear();
    window.open("index.html", "_self");
}

function transporter(type, title, season, episode) {
    if (type == 'tv') {
        var generatedLink = 'http://50.58.218.209/receiver.html?type=tv&title=' + title + '&season=' + season + '&episode=' + eval(title.replace(/\s/g, '') + 'S' + season)[episode] + '&epnum=' + episode + '&user=' + localStorage['username'];
    } if (type == 'movie') {
        var generatedLink = 'http://50.58.218.209/receiver.html?type=movie&title=' + title + '&user=' + localStorage['username'];
    }
    window.open(generatedLink, "_self");
}

function expandTvShow(tvShow) {
    localStorage['expandTvShowTitle'] = tvShow;
    document.getElementById('tvExpandScreen').style.display = 'block';
    document.getElementById('tv-expand-panel-title').innerHTML = tvShow;
    document.getElementById('tvExpandPanelTopImage').style.backgroundImage = 'url("images/' + tvShow.replace(/\s/g, '-').toLowerCase() +'-ci.jpg")';
    localStorage['activeEpisodesTab'] = 1;
    document.getElementById('seasonEpisodesList').innerHTML = '';
    var season1Episodes = eval(tvShow.replace(/\s/g, ''))[0];
    document.getElementById('tv-expand-panel-navbar').innerHTML = '';
    document.getElementById('tvExpandPanel').scrollTop = '0';


    var a = 0;
    while (a < eval(tvShow.replace(/\s/g, '')).length) {
        a++;
        if (a == localStorage['activeEpisodesTab']) {
            document.getElementById('tv-expand-panel-navbar').innerHTML = document.getElementById('tv-expand-panel-navbar').innerHTML + `<div class='active-tv-expand-panel-navbar-item' onclick='selectSeason("`+ a + `")'>Season ` + a + `</div>`
        } else {
            document.getElementById('tv-expand-panel-navbar').innerHTML = document.getElementById('tv-expand-panel-navbar').innerHTML + `<div class='tv-expand-panel-navbar-item' onclick='selectSeason("` + a + `")'>Season ` + a + `</div>`
        }
    }


    var b = 0;
    while (b < season1Episodes) {
        b++;
        document.getElementById('seasonEpisodesList').innerHTML = document.getElementById('seasonEpisodesList').innerHTML + `<div class='orderedListItem' onclick='transporter("tv","` + tvShow + `","1","` + b + `")'><div class='orderedListNumber'>` + b + `.</div><div class="orderedListContent">` + eval(tvShow.replace(/\s/g, '') + 'S1')[b] + `</div></div>`
    }
}

function closeTvExpandScreen() {
    document.getElementById('tvExpandScreen').style.display = 'none';
}

function selectSeason(seasonNum) {
    var tvShowTitleSpaced = localStorage['expandTvShowTitle'];
    var tvShowTitleUnspaced = localStorage['expandTvShowTitle'].replace(/\s/g, '');
    var seasonXEpisodes = eval(tvShowTitleUnspaced)[seasonNum - 1];
    document.getElementById('seasonEpisodesList').innerHTML = '';
    localStorage['activeEpisodesTab'] = seasonNum;
    document.getElementById('tv-expand-panel-navbar').innerHTML = '';


    var c = 0;
    while (c < seasonXEpisodes) {
        c++;
        document.getElementById('seasonEpisodesList').innerHTML = document.getElementById('seasonEpisodesList').innerHTML + `<div class='orderedListItem' onclick='transporter("tv","` + tvShowTitleSpaced + `","` + seasonNum + `","` + c + `")'><div class='orderedListNumber'>` + c + `.</div><div class="orderedListContent">` + eval(tvShowTitleUnspaced + 'S' + seasonNum)[c] + `</div></div>`;
    }


    var d = 0;
    while (d < eval(tvShowTitleUnspaced).length) {
        d++;
        if (d == localStorage['activeEpisodesTab']) {
            document.getElementById('tv-expand-panel-navbar').innerHTML = document.getElementById('tv-expand-panel-navbar').innerHTML + `<div class='active-tv-expand-panel-navbar-item' onclick='selectSeason("`+ d + `")'>Season ` + d + `</div>`
        } else {
            document.getElementById('tv-expand-panel-navbar').innerHTML = document.getElementById('tv-expand-panel-navbar').innerHTML + `<div class='tv-expand-panel-navbar-item' onclick='selectSeason("` + d + `")'>Season ` + d + `</div>`
        }
    }
}

function watchNow(tvShow) {
    if (localStorage['username'] == undefined) {
        transporter('tv',tvShow,1,1);
    } else {
        firebase.database().ref('users/' + localStorage['username'] + '/watched/tv/' + tvShow).once('value', (snapshot) => {
            if (snapshot.val() == 'true') {
                firebase.database().ref('users/' + localStorage['username'] + '/watched/tv/' + tvShow + 'S').once('value', (snapshot) => {
                    sessionStorage['savedSeason'] = snapshot.val();
                    firebase.database().ref('users/' + localStorage['username'] + '/watched/tv/' + tvShow + 'E').once('value', (snapshot) => {
                        transporter('tv',tvShow,sessionStorage['savedSeason'],snapshot.val())
                    });
                });
            } else {
                transporter('tv',tvShow,1,1);
            }
        });
    }
}

function continueTvProgress(tvShow) {
    firebase.database().ref('users/' + localStorage['username'] + '/watched/tv/' + tvShow + 'S').once('value', (snapshot) => {
        sessionStorage['savedSeason'] = snapshot.val();
    });
    firebase.database().ref('users/' + localStorage['username'] + '/watched/tv/' + tvShow + 'E').once('value', (snapshot) => {
        sessionStorage['savedEpisode'] = snapshot.val();
    });
    setTimeout(function() {
        transporter('tv',tvShow,sessionStorage['savedSeason'],sessionStorage['savedEpisode']);
    }, 500);
}

function processRequest() {
    var urlParams = new URLSearchParams(document.location.search);
    if (urlParams.get('action') == 'nextEpisode') {
        nextEpisode(urlParams.get('title').replace(/%20/g, ' '),urlParams.get('season'),urlParams.get('episode'));
    }
}

function nextEpisode(title, season, episode) {
    if (episode == eval(title.replace(/\s/g, ''))[season - 1]) {
        if (season == eval(title.replace(/\s/g, '')).length) {
            linkAction('index');
        } else {
            season++;
            episode = 1;
            transporter('tv',title,season,episode);
        }
    } else {
        episode++;
        console.log('tv',title,season,episode);
        transporter('tv',title,season,episode);
    }
}

function loading() {
    document.getElementById('loadingScreen').style.display = 'block';
}

function stopLoading() {
    document.getElementById('loadingScreen').style.display = 'none';
}

function openProfile() {
    document.getElementById('profileFrame').style.zIndex = '100';
    document.getElementById('profileNavbarContainer').style.textDecoration = 'underline';
    console.log('dont');
}

function closeProfile() {
    document.getElementById('profileFrame').style.zIndex = '-100';
    document.getElementById('profileNavbarContainer').style.textDecoration = 'none';
}