// Firebase Information

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
    color: 'rgba(155, 242, 255, 0.25)',
}

const ParksandRecreation = {
    mediaType: 'tv',
    sTotal: 7,
    s1: ["Pilot", "Canvassing", "The Reporter", "Boys' Club", "The Banquet", "Rock Show"],
    s2: ["Pawnee Zoo", "The Stakeout", "Beauty Pageant", "Practice Date", "Sister City", "Kaboom", "Greg Pitkins", "Ron and Tammy", "The Camel", "Hunting Trip", "Tom’s Divorce", "Christmas Scandal", "The Set Up", "Leslie’s House", "Sweetums", "Galentine’s Day", "Woman of the Year", "The Possum", "Park Safety", "Summer Catalog", "94 Meetings", "Telethon", "The Master Plan", "Freddy Spaghetti"],
    s3: ["Go Big or Go Home", "Flu Season", "Time Capsule", "Ron & Tammy: Part Two", "Media Blitz", "Indianapolis", "Harvest Festival", "Camping", "Andy and April’s Fancy Party", "Soulmates", "Jerry’s Painting", "Eagleton", "The Fight", "Road Trip", "The Bubble", "Li’l Sebastian"],
    s4: ["I'm Leslie Knope", "Ron and Tammys", "Born & Raised", "Pawnee Rangers", "Meet n Greet", "End of the World", "The Treaty", "Smallest Park", "The Trial of Leslie Know", "Citizen Knope", "The Comeback Kid", "Campaign Ad", "Bowling for Votes", "Operation Ann", "Dave Returns", "Sweet Sixteen", "Campaign Shake-Up", "Lucky", "Live Ammo", "The Debate", "Bus Tour", "Win, Lose, or Draw"],
    s5: ["Ms. Knope Goes to Washington", "Soda Tax", "How a Bill Becomes a Law", "Sex Education", "Halloween Suprise", "Ben's Parents", "Leslie vs. April", "Pawnee Commons", "Ron and Diane", "Two Parties", "Women in Garbage", "Ann’s Decision", "Emergency Response", "Leslie and Ben", "Correspondent’s Lunch", "Bailout", "Partridge", "Animal Control", "Article Two", "Jerry’s Retirement", "Swing Vote", "Are You Better Off?"],
    s6: ["London", "The Pawnee-Eagleton Tip Off Classic", "Doppelgängers", "Gin it Up!", "Filibuster", "Recall Vote", "Fluoride", "The Cones of Dunshire", "Second Chunce", "New Beginnings", "Farmers Market", "Ann and Chris", "Anniversaries", "The Wall", "New Slogan", "Galentine’s Day", "Prom", "Flu Season 2", "One in 8,000", "Moving Up"],
    s7: ["2017", "Ron and Jammy", "William Henry Harrison", "Leslie and Ron", "Gryzzlbox", "Save JJ's", "Donna and Joe", "Ms. Ludgate-Dwyer Goes to Washington", "Pie-Mary", "The Johnny Karate Super Awesome Musical Explosion Show", "Two Funerals", "One Last Ride"],
    description: "Parks and Recreation (also known as Parks and Rec) is an American political satire mockumentary sitcom television series created by Greg Daniels and Michael Schur. The series aired on NBC from April 9, 2009, to February 24, 2015, for 125 episodes, over seven seasons. A special reunion episode aired on April 30, 2020. The series stars Amy Poehler as Leslie Knope, a perky, mid-level bureaucrat in the Parks Department of Pawnee, a fictional town in Indiana. The ensemble and supporting cast features Rashida Jones as Ann Perkins, Paul Schneider as Mark Brendanawicz, Aziz Ansari as Tom Haverford, Nick Offerman as Ron Swanson, Aubrey Plaza as April Ludgate, Chris Pratt as Andy Dwyer, Adam Scott as Ben Wyatt, Rob Lowe as Chris Traeger, Jim O'Heir as Garry (Jerry) Gergich, Retta as Donna Meagle, and Billy Eichner as Craig Middlebrooks.",
    color: 'rgba(188, 230, 149, 0.25)',
}

const SquidGame = {
    mediaType: 'tv',
    sTotal: 1,
    s1: ['Red Light', "Green Light", "Hell", "The Man with the Umbrella", "Stick to the Team", "A Fair World", "Gganbu", "VIPS", "Front Man", "One Lucky Day"],
    description: "Squid Game is a South Korean survival drama television series created by Hwang Dong-hyuk for Netflix. Its cast includes Lee Jung-jae, Park Hae-soo, Wi Ha-joon, HoYeon Jung, O Yeong-su, Heo Sung-tae, Anupam Tripathi, and Kim Joo-ryoung. The series revolves around a contest where 456 players, all of whom are in deep financial hardship, risk their lives to play a series of deadly children's games for the chance to win a 5.6 billion KRW (38 million USD) prize. The title of the series draws from a similarly named Korean children's game. Hwang had conceived of the idea based on his own economic struggles early in life, as well as the class disparity in South Korea and capitalism. Though he had initially written it in 2009, he was unable to find a production company to fund the idea until Netflix took an interest around 2019 as part of their drive to expand their foreign programming offerings.",
    color: 'rgba(164, 79, 255, 0.25)',
}

const Sherlock = {
    mediaType: 'tv',
    sTotal: 4,
    s1: ["A Study in Pink", "The Blind Banker", "The Great Game"],
    s2: ["A Scandal in Belgravia", "The Hounds of Baskerville", "The Reichenbach Fall"],
    s3: ["The Empty Hearse", "The Sign of Three", "His Last Vow"],
    s4: ["The Six Thatchers", "The Lying Detective", "The Final Problem"],
    description: "Sherlock is a British mystery crime drama television series based on Sir Arthur Conan Doyle's Sherlock Holmes detective stories. Created by Steven Moffat and Mark Gatiss, it stars Benedict Cumberbatch as Sherlock Holmes and Martin Freeman as Doctor John Watson. Thirteen episodes have been produced, with four three-part series airing from 2010 to 2017 and a special episode that aired on 1 January 2016. The series is set in the present day, while the one-off special features a Victorian period fantasy resembling the original Holmes stories. Sherlock is produced by the British network BBC, along with Hartswood Films, with Moffat, Gatiss, Sue Vertue and Rebecca Eaton serving as executive producers. The series is supported by the American station WGBH-TV Boston for its Masterpiece anthology series on PBS, where it also airs in the United States. The series is primarily filmed in Cardiff, Wales, with North Gower Street in London used for exterior shots of Holmes and Watson's 221B Baker Street residence.",
    color: "rgba(255, 49, 49, 0.25)",
}

const FamilyGuy = {
    mediaType: 'tv',
    sTotal: 20,
    s10: ['Lottery Fever (X)','Seahorse Seashell Party (X)','Screams of Silence, The Story of Brenda Q','Stewie Goes for a Drive','Back to the Pilot','','','','','','',"Livin' on a Prayer",'','','','','','','','','','',''],
    description: "Sherlock is a British mystery crime drama television series based on Sir Arthur Conan Doyle's Sherlock Holmes detective stories. Created by Steven Moffat and Mark Gatiss, it stars Benedict Cumberbatch as Sherlock Holmes and Martin Freeman as Doctor John Watson. Thirteen episodes have been produced, with four three-part series airing from 2010 to 2017 and a special episode that aired on 1 January 2016. The series is set in the present day, while the one-off special features a Victorian period fantasy resembling the original Holmes stories. Sherlock is produced by the British network BBC, along with Hartswood Films, with Moffat, Gatiss, Sue Vertue and Rebecca Eaton serving as executive producers. The series is supported by the American station WGBH-TV Boston for its Masterpiece anthology series on PBS, where it also airs in the United States. The series is primarily filmed in Cardiff, Wales, with North Gower Street in London used for exterior shots of Holmes and Watson's 221B Baker Street residence.",
    color: "rgba(227, 45, 255, 0.25)",
}

const AmericanPsycho = {
    mediaType: 'movie',
    description: `American Psycho is a 2000 satirical psychological horror film directed by Mary Harron, who wrote the script with Guinevere Turner. It stars Christian Bale, Willem Dafoe, Jared Leto, Josh Lucas, Chloë Sevigny, Samantha Mathis, Cara Seymour, Justin Theroux, and Reese Witherspoon. Based on Bret Easton Ellis' 1991 novel American Psycho, the film follows Patrick Bateman (Bale), a New York City investment banker who leads a double life as a serial killer. The satirical film blends horror and black comedy to mock 1980s yuppie culture and consumerism, exemplified by Bateman.`,
}

const Cars2 = {
    mediaType: 'movie',
    description: `Cars 2 is a 2011 American computer-animated spy comedy film produced by Pixar Animation Studios for Walt Disney Pictures. It is a sequel to 2006's Cars and the second film in the Cars franchise. This was the final Pixar film animated with their old software system, Marionette, before officially replaced with Presto in 2012. It was directed by John Lasseter, written by Ben Queen, and produced by Denise Ream. In the film's ensemble voice cast, Owen Wilson, Larry the Cable Guy, Tony Shalhoub, Guido Quaroni, Bonnie Hunt, and John Ratzenberger reprise their roles from the first film. Paul Newman, who voiced Doc Hudson in the previous film, died in September 2008, so his character was written out of the film; George Carlin, who previously voiced Fillmore, died during the same year, and his role was passed to Lloyd Sherr. The returning cast is joined by Michael Caine, Emily Mortimer, John Turturro, Eddie Izzard, and Thomas Kretschmann, who voice the new characters introduced in this film.`
}

const Cars3 = {
    mediaType: 'movie',
    description: `Cars 3 is a 2017 American computer-animated sports comedy-adventure film produced by Pixar Animation Studios and released by Walt Disney Pictures. Directed by Brian Fee in his directorial debut and written by Kiel Murray, Bob Peterson, and Mike Rich, it is the sequel to Cars 2 (2011) and the third installment of the Cars film series. It was executive-produced by John Lasseter, who directed the first two Cars films. The returning voices of Owen Wilson, Bonnie Hunt and Larry the Cable Guy are joined by Cristela Alonzo, Chris Cooper, Armie Hammer, Nathan Fillion, Kerry Washington, and Lea DeLaria, in addition to a dozen NASCAR personalities.`,
}

const Coraline = {
    mediaType: 'movie',
    description: `Coraline is a 2009 American stop-motion horror film written and directed by Henry Selick and based on Neil Gaiman's novella of the same name.[5] Produced by Laika as the studio's first feature film, it features the voice talents of Dakota Fanning, Teri Hatcher, Jennifer Saunders, Dawn French, Keith David, John Hodgman, Robert Bailey Jr., and Ian McShane. The film tells the story of its titular character discovering an idealized parallel universe behind a secret door in her new home, unaware that it contains a dark and sinister secret. The film was theatrically released in the United States on February 6, 2009 by Focus Features after a world premiere at the Portland International Film Festival, and received universal acclaim. The film grossed $16.85 million during its opening weekend, ranking third at the box office, and by the end of its run had grossed over $124 million worldwide, making it the third highest-grossing stop-motion film of all time. The film won Annie Awards for Best Music in an Animated Feature Production, Best Character Design in an Animated Feature Production and Best Production Design in an Animated Feature Production, and received nominations for an Academy Award for Best Animated Feature and a Golden Globe Award for Best Animated Feature Film.`,
}

const DaddysHome2 = {
    mediaType: 'movie',
    description: `Daddy's Home 2 (known in-film as Daddy's Home Two) is a 2017 American Christmas comedy film directed by Sean Anders and written by Anders and John Morris. A sequel to Daddy's Home (2015), it stars Will Ferrell, Mark Wahlberg, Linda Cardellini, John Cena, with John Lithgow and Mel Gibson. The plot follows now-reformed fathers Brad and Dusty (Ferrell and Wahlberg), now co-parenting Dusty's kids, who have to deal with their own fathers (Lithgow and Gibson) visiting for the holidays. Unlike its predecessor, Red Granite Pictures was not involved in the film's production. Principal photography on the film began in Massachusetts in March 2017 and it was released in the United States by Paramount Pictures on November 10, 2017. Although the film received generally negative reviews from critics, it grossed over $180 million worldwide against a production budget of $70 million.`,
}

const DumbandDumber = {
    mediaType: 'movie',
    description: `Dumb and Dumber is a 1994 American buddy comedy film directed by Peter Farrelly, who co-wrote the screenplay with Bobby Farrelly and Bennett Yellin. It is the first installment in the Dumb and Dumber franchise. Starring Jim Carrey and Jeff Daniels, it tells the story of Lloyd Christmas (Carrey) and Harry Dunne (Daniels), two dumb but well-meaning friends from Providence, Rhode Island, who set out on a cross-country trip to Aspen, Colorado, to return a briefcase full of money to its owner, thinking it was abandoned as a mistake though it was actually left as a ransom. Lauren Holly, Karen Duffy, Mike Starr, Charles Rocket, and Teri Garr play supporting roles.`,
}

const KnivesOut = {
    mediaType: 'movie',
    description: `Knives Out is a 2019 American mystery film written and directed by Rian Johnson and produced by Johnson and Ram Bergman. It follows a master detective investigating the death of the patriarch of a wealthy, dysfunctional family. The film features an ensemble cast including Daniel Craig, Chris Evans, Ana de Armas, Jamie Lee Curtis, Michael Shannon, Don Johnson, Toni Collette, Lakeith Stanfield, Katherine Langford, Jaeden Martell, and Christopher Plummer.`,
}

const SpiderManHomecoming = {
    mediaType: 'movie',
    description: `Spider-Man: Homecoming is a 2017 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios, and distributed by Sony Pictures Releasing. It is the second Spider-Man film reboot and the 16th film in the Marvel Cinematic Universe (MCU). The film was directed by Jon Watts, from a screenplay by the writing teams of Jonathan Goldstein and John Francis Daley, Watts and Christopher Ford, and Chris McKenna and Erik Sommers. Tom Holland stars as Peter Parker / Spider-Man, alongside Michael Keaton, Jon Favreau, Gwyneth Paltrow, Zendaya, Donald Glover, Jacob Batalon, Laura Harrier, Tony Revolori, Bokeem Woodbine, Tyne Daly, Marisa Tomei, and Robert Downey Jr. In Spider-Man: Homecoming, Peter Parker tries to balance high school life with being Spider-Man while facing the Vulture (Keaton).`,
}

const SpiderManNoWayHome = {
    mediaType: 'movie',
    description: `Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios and distributed by Sony Pictures Releasing. It is the sequel to Spider-Man: Homecoming (2017) and Spider-Man: Far From Home (2019), and the 27th film in the Marvel Cinematic Universe (MCU). The film was directed by Jon Watts and written by Chris McKenna and Erik Sommers. It stars Tom Holland as Peter Parker / Spider-Man alongside Zendaya, Benedict Cumberbatch, Jacob Batalon, Jon Favreau, Jamie Foxx, Willem Dafoe, Alfred Molina, Benedict Wong, Tony Revolori, Marisa Tomei, Andrew Garfield, and Tobey Maguire. In the film, Parker asks Dr. Stephen Strange (Cumberbatch) to use magic to make his identity as Spider-Man a secret again following its public revelation at the end of Far From Home. When the spell goes wrong, the multiverse is broken open which allows visitors from alternate realities to enter Parker's universe.`,
}

const TheAmazingSpiderMan2 = {
    mediaType: 'movie',
    description: `The Amazing Spider-Man 2 (internationally titled The Amazing Spider-Man 2: Rise of Electro)[6] is a 2014 American superhero film based on the Marvel Comics character Spider-Man. The film was directed by Marc Webb and produced by Avi Arad and Matt Tolmach. It is the fifth theatrical Spider-Man film produced by Columbia Pictures and Marvel Entertainment, the sequel to The Amazing Spider-Man (2012), and the final film in The Amazing Spider-Man series. The studio hired James Vanderbilt to write the screenplay and Alex Kurtzman and Roberto Orci to rewrite it. The film stars Andrew Garfield as Peter Parker / Spider-Man, alongside Emma Stone, Jamie Foxx, Dane DeHaan, Campbell Scott, Embeth Davidtz, Colm Feore, Paul Giamatti, and Sally Field. In the film, Peter Parker tries to protect Gwen Stacy as he investigates his parents' death, while also dealing with the supervillain Electro and the return of his childhood friend Harry Osborn, who is dying from a deadly genetic disease.`,
}

// Reference functions

function openPage(location) {
    window.open(location, "_self");
}

function unspace(string) {
    return string.replace(/\s/g, '');
}

function transporter(type, title, season, episode) {
    if (type == 'tv') {
        var generatedLink = 'http://50.58.218.209/receiver.html?type=tv&title=' + title + '&season=' + season + '&episode=' + (eval(unspace(title))['s' + season])[episode] + '&epnum=' + episode + '&user=' + localStorage['username'];
    } if (type == 'movie') {
        var generatedLink = 'http://50.58.218.209/receiver.html?type=movie&title=' + title + '&user=' + localStorage['username'];
    }
    window.open(generatedLink, "_self");
}

function mobileDeviceTester(){
    return window.matchMedia('(hover: none)').matches;
}

function processRequest() {
    var urlParams = new URLSearchParams(document.location.search);
    if (urlParams.get('action') == 'nextEpisode') {
        nextEpisode(urlParams.get('title').replace(/%20/g, ' '),urlParams.get('season'),urlParams.get('episode'));
    } 
    if (urlParams.get('action') == 'tvShowPanel') {
        expandTv(urlParams.get('title').replace(/%20/g, ' '));
    }
}

function nextEpisode(title, season, episode) {
    var tvShowUS = unspace(title);
    var seasonCapacity = eval(tvShowUS)['s' + season].length;
    var seasonsTotal = eval(tvShowUS)['sTotal'];

    console.log('titleUS ' + tvShowUS);
    console.log('scap ' + seasonCapacity);
    console.log('stotal ' + seasonsTotal);
    console.log('episodeGiven ' + episode)

    if (episode == (seasonCapacity - 1)) {
        if (season == seasonsTotal) {
            openPage('index.html');
        } else {
            season++;
            transporter('tv',title,season,0);
        }
    } else {
        episode++;
        transporter('tv',title,season,episode);
    }
}

window.addEventListener('load', function () {
    console.log("It's loaded!")
})

// Working functions

function search() {
    let input = document.getElementById('searchBar').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('listItemChoice');
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "flex";
        }
    }
}

function expandTv(mediaTitle) {
    var tvScreen = document.getElementById('tvExpandScreen');
    var tvNavbarContent = document.getElementById('tvPanelNavbarContents');
    var tvPanelTitle = document.getElementById('tvPanelTitle');
    var tvPanelEpisodeList = document.getElementById('tvPanelEpisodeList');
    var tvScreenContents = document.getElementById('tvScreenContents');
    var tvPanelCoverImage = document.getElementById('tvPanelCoverImage');
    var tvPanel = document.getElementById('tvPanel');
    var title = mediaTitle;
    var titleUS = unspace(mediaTitle);
    var mediaType = eval(unspace(mediaTitle))['mediaType'];
    
    localStorage['tvTitle'] = title;
    localStorage['activeSeasonTab'] = 1;

    tvScreen.style.display = 'block';
    tvPanel.scrollTop = '0';
    tvPanelTitle.innerHTML = mediaTitle;
    tvNavbarContent.innerHTML = '';
    tvPanelEpisodeList.innerHTML = '';
    tvPanelCoverImage.style.backgroundImage = 'url("cover-image/' + mediaTitle.replace(/\s/g, '-').toLowerCase() + '.jpg")';
    setTimeout(function() {
        tvScreenContents.style.top = '0';
        tvScreenContents.style.opacity = '1';
    }, 1);

    var a = 1;
    while (a <= eval(titleUS)['sTotal']) {
        if (a == localStorage['activeSeasonTab']) {
            tvNavbarContent.innerHTML = tvNavbarContent.innerHTML + `<div class='navbar-link-item active-navbar-link-item'>Season ` + a + `</div>`
        } else {
            tvNavbarContent.innerHTML = tvNavbarContent.innerHTML + `<div class='navbar-link-item' onclick='selectSeason("` + a + `")'>Season ` + a + `</div>`
        }
        a++;
    }

    var b = 0;
    while (b < (eval(titleUS)['s1']).length) {
        tvPanelEpisodeList.innerHTML = tvPanelEpisodeList.innerHTML + `
            <div class='listItemChoice' onclick='transporter("tv","` + title + `","1","` + b + `")'>
                <div class='listItemTitle'>` + (eval(titleUS)['s1'])[b] + `</div>
                <div class='listItemLabel'>Episode ` + (b + 1) + `</div>
            </div>`;
        // document.getElementById('seasonEpisodesList').innerHTML = document.getElementById('seasonEpisodesList').innerHTML + `<div class='orderedListItem' onclick='transporter("tv","` + tvShow + `","1","` + b + `")'><div class='orderedListNumber'>` + b + `.</div><div class="orderedListContent">` + eval(tvShow.replace(/\s/g, '') + 'S1')[b] + `</div></div>`
        b++;
    }
}

function selectSeason(seasonNum) {
    var tvNavbarContent = document.getElementById('tvPanelNavbarContents');
    var tvPanelEpisodeList = document.getElementById('tvPanelEpisodeList');
    var title = localStorage['tvTitle'];
    var titleUS = unspace(title);

    localStorage['activeSeasonTab'] = seasonNum;

    tvPanelEpisodeList.innerHTML = '';
    tvNavbarContent.innerHTML = '';

    var a = 1;
    while (a <= eval(titleUS)['sTotal']) {
        // mediaNavbarContent.innerHTML = mediaNavbarContent.innerHTML + `<div class='navbar-link-item activity-button-choice' onclick='startTV()'>▶ Start Series</div><div class='navbar-link-item activity-button-choice' onclick='continueTV()'>➔ Continue Watching</div>`;
        if (a == localStorage['activeSeasonTab']) {
            tvNavbarContent.innerHTML = tvNavbarContent.innerHTML + `<div class='navbar-link-item active-navbar-link-item'>Season ` + a + `</div>`
        } else {
            tvNavbarContent.innerHTML = tvNavbarContent.innerHTML + `<div class='navbar-link-item' onclick='selectSeason("` + a + `")'>Season ` + a + `</div>`
        }
        a++;
    }

    var b = 0;
    while (b < (eval(titleUS)['s' + seasonNum]).length) {
        tvPanelEpisodeList.innerHTML = tvPanelEpisodeList.innerHTML + `
            <div class='listItemChoice' onclick='transporter("tv","` + title + `","` + seasonNum + `","` + b + `")'>
                <div class='listItemTitle'>` + (eval(titleUS)['s' + seasonNum])[b] + `</div>
                <div class='listItemLabel'>Episode ` + (b + 1) + `</div>
            </div>`;
        // document.getElementById('seasonEpisodesList').innerHTML = document.getElementById('seasonEpisodesList').innerHTML + `<div class='orderedListItem' onclick='transporter("tv","` + tvShow + `","1","` + b + `")'><div class='orderedListNumber'>` + b + `.</div><div class="orderedListContent">` + eval(tvShow.replace(/\s/g, '') + 'S1')[b] + `</div></div>`
        b++;
    }

    // var seasonXEpisodes = (eval(titleUS).s + seasonNum);
    // document.getElementById('seasonEpisodesList').innerHTML = '';
    // localStorage['activeEpisodesTab'] = seasonNum;
    // document.getElementById('tv-expand-panel-navbar').innerHTML = '';


    // var c = 0;
    // while (c < seasonXEpisodes) {
    //     c++;
    //     document.getElementById('seasonEpisodesList').innerHTML = document.getElementById('seasonEpisodesList').innerHTML + `<div class='orderedListItem' onclick='transporter("tv","` + tvShowTitleSpaced + `","` + seasonNum + `","` + c + `")'><div class='orderedListNumber'>` + c + `.</div><div class="orderedListContent">` + eval(tvShowTitleUnspaced + 'S' + seasonNum)[c] + `</div></div>`;
    // }


    // var d = 0;
    // while (d < eval(tvShowTitleUnspaced).length) {
    //     d++;
    //     if (d == localStorage['activeEpisodesTab']) {
    //         document.getElementById('tv-expand-panel-navbar').innerHTML = document.getElementById('tv-expand-panel-navbar').innerHTML + `<div class='active-tv-expand-panel-navbar-item' onclick='selectSeason("`+ d + `")'>Season ` + d + `</div>`
    //     } else {
    //         document.getElementById('tv-expand-panel-navbar').innerHTML = document.getElementById('tv-expand-panel-navbar').innerHTML + `<div class='tv-expand-panel-navbar-item' onclick='selectSeason("` + d + `")'>Season ` + d + `</div>`
    //     }
    // }
}

function closeTvScreen() {
    var tvExpandScreen = document.getElementById('tvExpandScreen');
    var tvScreenContents = document.getElementById('tvScreenContents');

    tvScreenContents.style.top = '100vh';
    tvScreenContents.style.opacity = '0';
    setTimeout(function() {
        tvExpandScreen.style.display = 'none';
    }, 100);
}

sessionStorage['savedScrollLocation22838'] = 0;

function tvExpandPanelScrolled() {
    var scrollTop = document.getElementById('tvPanelNavbarContents').getBoundingClientRect().top;
    if (scrollTop == sessionStorage['savedScrollLocation22838']) {
        document.getElementById('tvTopbar').style.backgroundColor = eval(unspace(localStorage['tvTitle']))['color'];
        document.getElementById('tvPanelNavbarContents').style.backgroundColor = 'rgb(27, 31, 40)';
        document.getElementById('tvPanelNavbarContents').style.borderBottom = 'solid 1pt gray';
    } else {
        sessionStorage['savedScrollLocation22838'] = scrollTop;
        document.getElementById('tvTopbar').style.backgroundColor = 'rgba(27, 31, 40, 0.25)';
        document.getElementById('tvPanelNavbarContents').style.backgroundColor = 'rgba(0,0,0,0)';
        document.getElementById('tvPanelNavbarContents').style.borderBottom = 'none';
    }
}

function isMobileDevice() {
    if (mobileDeviceTester()) {
        console.log('is mobile device');
        var thumbnails = document.querySelectorAll(".media-slider-object");
        for (var i = 0; i < thumbnails.length; i++) {
            var mobileThumbails = thumbnails[i].style.backgroundImage.replace("thumbnails", "mobile thumbnails");
            thumbnails[i].style.backgroundImage = mobileThumbails;
            thumbnails[i].style.height = ''
        }
    } else {
        console.log('no');
    }
}




function expandMediaShow(mediaTitle) {
    // document.getElementById('tvExpandPanel').scrollTop = '0';
    var mediaExpandScreen = document.getElementById('mediaExpandScreen');
    localStorage['expandMediaShowTitle'] = mediaTitle;

    mediaExpandScreen.style.display = 'block';
    document.getElementById('media-expand-panel-title').innerHTML = tvShow;
    localStorage['activeEpisodesTab'] = 1;
    document.getElementById('seasonEpisodesList').innerHTML = '';
    var season1Episodes = eval(tvShow.replace(/\s/g, ''))[0];
    document.getElementById('media-expand-panel-navbar').innerHTML = '';
    document.getElementById('mediaExpandPanel').scrollTop = '0';


    var a = 0;
    while (a < eval(mediaTitle.replace(/\s/g, '')).length) {
        a++;
        if (a == localStorage['activeEpisodesTab']) {
            document.getElementById('media-expand-panel-navbar').innerHTML = document.getElementById('media-expand-panel-navbar').innerHTML + `<div class='active-tv-expand-panel-navbar-item' onclick='selectSeason("`+ a + `")'>Season ` + a + `</div>`
        } else {
            document.getElementById('media-expand-panel-navbar').innerHTML = document.getElementById('media-expand-panel-navbar').innerHTML + `<div class='tv-expand-panel-navbar-item' onclick='selectSeason("` + a + `")'>Season ` + a + `</div>`
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

function selectSeasonOld(seasonNum) {
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