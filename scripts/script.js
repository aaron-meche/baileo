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
    sTotal: 18,
    s1: ["Death Has a Shadow","I Never Met the Dead Man","Chitty Chitty Death Bang","Mind Over Murder","A Hero Sits Next Door","The Son Also Draws","Brian - Portrait of a Dog.mp4"],
    s2: ["Peter, Peter, Caviar Eater","Holy Crap","Da Boom","Brian in Love","Love Thy Trophy","Death Is a Bitch","The King Is Dead","I Am Peter, Hear Me Roar","If I'm Dyin', I'm Lyin","Running Mates","A Picture is Worth 1,000 Bucks","Fifteen Minutes of Shame","Road to Rhode Island","Let's Go to the Hop","Dammit Janet","There's Something About Paulie","He's Too Sexy for His Fat","E. Peterbus Unum","The Story on Page One","Wasted Talent","Fore, Father"],
    s3: ["The Thin White Line","Brian Does Hollywood","Mr. Griffin Goes to Washington","One If by Clam, Two If by Sea","And the Wiener Is...","Death Lives","Lethal Weapons","The Kiss Seen Around the World","Mr. Saturday Knight","A Fish Out of Water","Emission Impossible","To Love and Die in Dixie","Screwed the Pooch","Peter Griffin: Husband, Father... Brother?","Ready, Willing, and Disabled","A Very Special Family Guy Freakin' Christmas","Brian Wallows and Peter's Swallows","From Method to Madness","Stuck Together, Torn Apart","Road to Europe","Family Guy Viewer Mail #1","When You Wish Upon a Weinstein"],
    s4: ["North by North Quahog","Fast Times at Buddy Cianci Jr. High","Blind Ambition","Don't Make Me Over","The Cleveland-Loretta Quagmire","Petarded","Brian the Bachelor","8 Simple Rules for Buying My Teenage Daughter","Breaking Out Is Hard to Do","Model Misbehavior","Peter's Got Woods","Perfect Castaway","Jungle Love","PTV","Brian Goes Back to College","The Courtship of Stewie's Father","The Fat Guy Strangler","The Father, the Son, and the Holy Fonz","Brian Sings and Swings","Patriot Games","I Take Thee Quagmire","Sibling Rivalry","Deep Throats","Peterotica","You May Now Kiss the... Uh... Guy Who Receives","Petergeist","The Griffin Family History","Stewie B. Goode","Bang-o Was His Name-o","Stu and Stewie's Excellent Adventure"],
    s5: ["Stewie Loves Lois","Mother Tucker","Hell Comes to Quahog","Saving Private Brian","Whistle While Your Wife Works","Prick Up Your Ears","Chick Cancer","Barely Legal","Road to Rupert","Peter's Two Dads","The Tan Aquatic with Steve Zissou","Airport '07","Bill & Peter's Bogus Journey","No Meals on Wheels","Boys Do Cry","No Chris Left Behind","It Takes a Village Idiot, and I Married One","Meet the Quagmires"],
    s6: ["Blue Harvest","Movin' Out (Brian's Song)","Believe It or Not, Joe's Walking on Air","Stewie Kills Lois (Part 1)","Lois Kills Stewie (Part 2)","Padre de Familia","Peter's Daughter","McStroke","Back to the Woods","Play It Again, Brian","The Former Life of Brian","Long John Peter"],
    s7: ["Love, Blactually","I Dream of Jesus","Road to Germany","Baby Not on Board","The Man with Two Brians","Tales of a Third Grade Nothing","Ocean's Three and a Half","Family Gay","The Juice Is Loose","Fox-y Lady","Not All Dogs Go to Heaven","420","Stew-Roids","We Love You, Conrad","Three Kings","Peter's Progress"],
    s8: ["Road to the Multiverse","Family Goy","Spies Reminiscent of Us","Brian's Got a Brand New Bag","Hannah Banana","Quagmire's Baby","Jerome Is the New Black","Dog Gone","Business Guy","Big Man on Hippocampus","Dial Meg for Murder","Extra Large Medium","Go, Stewie, Go!","Peter-assment","Brian Griffin's House of Payne","April in Quahog","Brian & Stewie","Quagmire's Dad","The Splendid Source","Something, Something, Something, Dark Side","Partial Terms of Endearment"],
    s9: ["And Then There Were Fewer","Excellence in Broadcasting","Welcome Back, Carter","Halloween on Spooner Street","Baby, You Knock Me Out","Brian Writes a Bestseller","Road to the North Pole","New Kidney in Town","And I'm Joyce Kinney","Friends of Peter G.","German Guy","The Hand That Rocks the Wheelchair","Trading Places","Tiegs for Two","Brothers & Sisters","The Big Bang Theory","Foreign Affairs","It's a Trap!"],
    s10: ["Lottery Fever","Seahorse Seashell Party","Screams of Silence: The Story of Brenda Q","Stewie Goes for a Drive","Back to the Pilot","Thanksgiving","Amish Guy","Cool Hand Peter","Grumpy Old Man","Meg and Quagmire","The Blind Side","Livin' on a Prayer","Tom Tucker: The Man and His Dream","Be Careful What You Fish For","Burning Down the Bayit","Killer Queen","Forget-Me-Not","You Can't Do That on Television, Peter","Mr. and Mrs. Stewie","Leggo My Meg-O","Tea Peter","Family Guy Viewer Mail #2","Internal Affairs"],
    s11: ["Into Fat Air","Ratings Guy","The Old Man and the Big 'C'","Yug Ylimaf","Joe's Revenge","Lois Comes Out of Her Shell","Friends Without Benefits","Jesus, Mary and Joseph!","Space Cadet","Brian's Play","The Giggity Wife","Valentine's Day in Quahog","Chris Cross","Call Girl","Turban Cowboy","12 and a Half Angry Men","Bigfat","Total Recall","Save the Clam","Farmer Guy","Roads to Vegas","No Country Club for Old Men"],
    s12: ["Finders Keepers","Vestigal Peter","Quagmire's Quagmire","A Fistful of Meg","Boppa-dee Bappa-dee","Life of Brian","Into Harmony's Way","Christmas Guy","Peter Problems","Grimm Job","Brian's a Bad Father","Mom's the Word","3 Acts of God","Fresh Heir","Secondhand Spoke","Herpe the Love Sore","The Most Interesting Man in the World","Baby Got Black","Meg Stinks!","He's Bla-ack!","Chap Stewie"],
    s13: ["The Simpsons Guy","The Book of Joe","Baking Bad","Brian the Closer","Turkey Guys","The 2000-Year-Old Virgin","Stewie, Chris, & Brian's Excellent Adventure","Our Idiot Brian","This Little Piggy","Quagmire's Mom","Encyclopedia Griffin","Stewie Is Enceinte","Dr. C and the Women","#JOLO","Once Bitten","Roasted Guy","Fighting Irish","Take My Wife"],
    s14: ["Pilling Them Softly","Papa Has a Rollin' Son","Guy, Robot","Peternormal Activity","Peter, Chris, & Brian","Peter's Sister","Hot Pocket-Dial","Brokeback Swanson","A Shot in the Dark","Candy, Quahog Marshmallow","The Peanut Butter Kid","Scammed Yankees","An App a Day","Underage Peter","A Lot Going on Upstairs","The Heartbreak Dog","Take a Letter","The New Adventures of Old Tom","Run Chris, Run"],
    s15: ["The Boys in the Band","Bookie of the Year","American Gigg-olo","Inside Family Guy","Chris Has Got a Date, Date, Date, Date, Date","Hot Shots","High School English","Carter and Tricia","How the Griffin Stole Christmas","Passenger Fatty-Seven","Gronkowsbees","Peter's Def Jam","The Finer Strings","The Dating Game","Cop and a Half-wit","Saturated Fat Guy","Peter's Lost Youth","The Peter Principal","Dearly Deported","A House Full of Peters"],
    s16: ["Emmy-Winning Episode","Foxx in the Men House","Nanny Goats","Follow The Money","Three Doctors","The D in Apartment 23","Petey IV","Crimes and Meg’s Demeanor","Don’t Be a Dickens at Christmas","Boy (Dog) Meets Girl","Dog Bites Bear","Send In Stewie, Please","V Is For Mystery","Veteran Guy","The Woof of Wall Street","Family Guy Through the Years","Switch the Flip","HTTPete","The Unkindest Cut","Are You There God? It’s Me, Peter"],
    s17: ["Married... with Cancer","Dead Dog Walking","Pal Stewie","Big Trouble in Little Quahog","Regarding Carter","Stand by Meg","The Griffin Winter Games","Con Heiress","Pawtucket Pete","Hefty Shades of Gray","Trump Guy","Bri, Robot","Trans-Fat","Family Guy Lite","No Giggity, No Doubt","You Can't Handle the Booth!","Island Adventure","Throw It Away","Girl, Internetted","Adam West High"],
    s18: ['Yacht Rocky','Bri-da','Absolutely Babulous','Disney the Reboot','Cat Fight',"Peter and Lois' Wedding",'Heart Burn','Shanksgiving','Christmas is Coming','Connies Celica','Short Cuts','Undergrounded','Rich Old Stewie','The Movement','Baby Stewie','Start Me Up','Coma Guy','Better Off Meg','Holly Bibble',"Movin in Principal Shepherd's Song"],
    description: "Family Guy is an American adult animated sitcom created by Seth MacFarlane for the Fox Broadcasting Company. The series centers on the Griffins, a family consisting of parents Peter and Lois; their children, Meg, Chris, and Stewie; and their anthropomorphic pet dog, Brian. Set in the fictional city of Quahog, Rhode Island, the show exhibits much of its humor in the form of metafictional cutaway gags that often lampoon American culture.",
    color: "rgba(227, 45, 255, 1)",
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

const DespicableMe = {
    mediaType: 'movie',
    description: `Despicable Me is a computer-animated media franchise centering on Gru, a reformed super-villain (who later becomes a father, husband, and secret agent), and his yellow-colored Minions. It is produced by Illumination and distributed by its parent company Universal Pictures. The franchise began with the 2010 film of the same name, which was followed by two sequels, Despicable Me 2 (2013) and Despicable Me 3 (2017), with a future sequel, Despicable Me 4, expected to hit theaters in 2024; and by two spin-off prequels, Minions (2015) and Minions: The Rise of Gru (2022). The franchise also includes many short films, a television special, several video games, and a theme park attraction. It is the highest-grossing animated film franchise and the 15th highest-grossing film franchise of all time, having grossed over $4.1 billion globally.`,
}

const DespicableMe2 = {
    mediaType: 'movie',
    description: `Despicable Me 2 is a 2013 American computer-animated comedy film produced by Illumination Entertainment and distributed by Universal Pictures. The sequel to Despicable Me (2010), it is directed by Chris Renaud and Pierre Coffin, and written by Cinco Paul and Ken Daurio. Despicable Me 2 stars the voices of Steve Carell, Kristen Wiig, Benjamin Bratt, Miranda Cosgrove, Russell Brand, and Ken Jeong. The film follows Gru (Carell) as he is recruited by agent Lucy Wilde (Wiig), who is investigating a theft of the mutagen called PX-41, stolen from the Arctic Circle. During their investigations, they befriend a man named Eduardo Pérez (Bratt), who happens to be the supervillain named El Macho, who faked his death many years back.`,
}

const DespicableMe3 = {
    mediaType: 'movie',
    description: `Despicable Me is a computer-animated media franchise centering on Gru, a reformed super-villain (who later becomes a father, husband, and secret agent), and his yellow-colored Minions. It is produced by Illumination and distributed by its parent company Universal Pictures. The franchise began with the 2010 film of the same name, which was followed by two sequels, Despicable Me 2 (2013) and Despicable Me 3 (2017), with a future sequel, Despicable Me 4, expected to hit theaters in 2024; and by two spin-off prequels, Minions (2015) and Minions: The Rise of Gru (2022). The franchise also includes many short films, a television special, several video games, and a theme park attraction. It is the highest-grossing animated film franchise and the 15th highest-grossing film franchise of all time, having grossed over $4.1 billion globally.`,
}

const DumbandDumber = {
    mediaType: 'movie',
    description: `Dumb and Dumber is a 1994 American buddy comedy film directed by Peter Farrelly, who co-wrote the screenplay with Bobby Farrelly and Bennett Yellin. It is the first installment in the Dumb and Dumber franchise. Starring Jim Carrey and Jeff Daniels, it tells the story of Lloyd Christmas (Carrey) and Harry Dunne (Daniels), two dumb but well-meaning friends from Providence, Rhode Island, who set out on a cross-country trip to Aspen, Colorado, to return a briefcase full of money to its owner, thinking it was abandoned as a mistake though it was actually left as a ransom. Lauren Holly, Karen Duffy, Mike Starr, Charles Rocket, and Teri Garr play supporting roles.`,
}

const DumbandDumberTo = {
    mediaType: 'movie',
    description: `Dumb and Dumber +`,
}

const Elf = {
    mediaType: 'movie',
}

const KnivesOut = {
    mediaType: 'movie',
    description: `Knives Out is a 2019 American mystery film written and directed by Rian Johnson and produced by Johnson and Ram Bergman. It follows a master detective investigating the death of the patriarch of a wealthy, dysfunctional family. The film features an ensemble cast including Daniel Craig, Chris Evans, Ana de Armas, Jamie Lee Curtis, Michael Shannon, Don Johnson, Toni Collette, Lakeith Stanfield, Katherine Langford, Jaeden Martell, and Christopher Plummer.`,
}

const LegallyBlonde = {
    mediaType: 'movie',
    description: `Legally Blonde is a 2001 American comedy film directed by Robert Luketic in his feature-length directorial debut. Written by Karen McCullah Lutz and Kirsten Smith from Amanda Brown's 2001 novel of the same name, it stars Reese Witherspoon, Luke Wilson, Selma Blair, Matthew Davis, Victor Garber, and Jennifer Coolidge. Witherspoon plays Elle Woods, a sorority girl who attempts to win back her ex-boyfriend Warner Huntington III by getting a Juris Doctor degree at Harvard Law School, and in the process, overcomes stereotypes against blondes and triumphs as a successful lawyer through unflappable self-confidence and fashion/beauty knowhow.`,
}

const MeanGirls = {
    mediaType: 'movie',
    description: `Mean Girls is a 2004 American teen comedy film directed by Mark Waters and written by Tina Fey. The film stars Lindsay Lohan, Rachel McAdams, Lacey Chabert, Amanda Seyfried (in her film debut), Tim Meadows, Ana Gasteyer, Amy Poehler, and Fey. It is based in part on Rosalind Wiseman's 2002 non-fiction self-help book, Queen Bees and Wannabes, which describes female high school social cliques, school bullying, and the damaging effects they can have on students. Fey also drew from her own experience at Upper Darby High School as an inspiration for some of the concepts in the film. The plot centers on a naïve teenage girl navigating her way through the social hierarchy of a modern American high school after years of her parents homeschooling her while conducting research in Africa.`,
}

const MeanGirls2 = {
    mediaType: 'movie',
    description: `Mean Girls 2 is a 2011 American teen comedy television film directed by Melanie Mayron, and serves as a sequel to the 2004 film Mean Girls. The film premiered on ABC Family on January 23, 2011, and released direct-to-video on February 1. It stars Meaghan Martin, Jennifer Stone, Maiara Walsh, Nicole Gale Anderson, Claire Holt, Diego Boneta, and Linden Ashby.`,
}

const Minions = {
    mediaType: 'movie',
    description: `Minions is a 2015 American computer-animated comedy film produced by Illumination Entertainment and distributed by Universal Pictures. It is the spin-off/prequel and the third installment overall in the Despicable Me franchise. Directed by Pierre Coffin and Kyle Balda (in Balda's directorial debut), produced by Chris Meledandri and Janet Healy, and written by Brian Lynch, the film stars the voices of Coffin as the Minions (including Kevin, Stuart, and Bob), Sandra Bullock, Jon Hamm, Michael Keaton, Allison Janney, Steve Coogan, Jennifer Saunders, and is narrated by Geoffrey Rush.`,
}

const MissCongeniality = {
    mediaType: 'movie',
}

const Ratatouille = {
    mediaType: 'movie',
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

const TheNotebook = {
    mediaType: 'movie',
    description: `The Notebook is a 2004 American romantic drama film directed by Nick Cassavetes, with a screenplay by Jeremy Leven and Jan Sardi, based on the 1996 novel of the same name by Nicholas Sparks. The film stars Ryan Gosling and Rachel McAdams as a young couple who fall in love in the 1940s. Their story is read from a notebook in the present day by an elderly man (played by James Garner), telling the tale to a fellow nursing home resident (played by Gena Rowlands, the director Cassavetes' mother).`,
}

const TheWaterboy = {
    mediaType: 'movie',
}

const Vacation = {
    mediaType: 'movie',
    description: `Vacation is a 2015 American road comedy film written and directed by Jonathan Goldstein and John Francis Daley (in their directorial debuts). It stars Ed Helms, Christina Applegate, Leslie Mann, Beverly D'Angelo, Chris Hemsworth, and Chevy Chase. It is the fifth theatrical installment of the Vacation film series, serving as a standalone sequel to Vegas Vacation (1997). It is also the second not to carry the National Lampoon name after Vegas Vacation, and was released by New Line Cinema and Warner Bros. on July 29, 2015. It grossed $104 million on a $31 million budget and received generally negative reviews.`,
}




// Reference functions




function setData(reference, value) {
    firebase.database().ref(reference).set(value);
}

function setDataProfile(reference, value) {
    firebase.database().ref('users/' + localStorage['username'] + '/' + reference).set(value);
}

function createEncryptionKey(length) {
    var library = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0'];
    var collection = '';
    for (var i = 0; i < length; i++) {
        collection = collection + library[Math.floor(Math.random() * library.length)];
    }
    return collection;
}

function systemLogout() {
    var newKey = createEncryptionKey(50);
    localStorage['ekey'] = newKey;
    setDataProfile('key',newKey);
    alert('Your authentication key has been changed and you have been logged out of all other devices.')
}

function logout() {
    localStorage.clear();
    openPage('index.html');
}

function openPage(location) {
    window.open(location, "_self");
}

function unspace(string) {
    return string.replace(/\s/g, '');
}

function continueWatching(title) {
    loading();
    var mediaType = eval(unspace(title))['mediaType'];
    
    if (mediaType == 'tv') {
        var season = 0;
        firebase.database().ref('users/' + localStorage['username'] + '/progress/tv/' + title + 'S').once('value', (snapshot) => {
            season = snapshot.val();
            firebase.database().ref('users/' + localStorage['username'] + '/progress/tv/' + title + 'E').once('value', (snapshot) => {
                transporter('tv',title,season,snapshot.val())
            }); 
        });
    } else if (mediaType == 'movie') {
        transporter('movie',title);
    }
}

function transporter(type, title, season, episode) {
    if (isLoggedIn()) {
        loading();
        closeTvScreen();
        createLink(type, title, season, episode);
    } else {
        alert('You must be logged in to an account before you start watching!');
        useAccountPrompt();
    }
}

function createLink(type, title, season, episode) {
    var key = createEncryptionKey((Math.floor(Math.random() * 50)) + 5);
    setData('links/' + key + '/type',type);
    setData('links/' + key + '/title',title);

    if (type == 'tv') {
        setData('links/' + key + '/season',season);
        setData('links/' + key + '/episodeNumberRaw',episode);
        setData('links/' + key + '/episodeTitle',eval(unspace(title))['s' + season][episode]);
    }

    setData('links/' + key + '/username',localStorage['username']);

    let current = new Date();
    let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
    let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    let dateTime = cDate + ' ' + cTime;
    console.log(dateTime);

    setData('links/' + key + '/requestTime',dateTime);

    var receiverPageLink = '';
    if (mobileDeviceTester()) {
        receiverPageLink = 'http://50.58.218.209/mobile-viewer.html';
    } else {
        receiverPageLink = 'http://50.58.218.209/receiver.html';
    }

    var generatedLink = receiverPageLink + '?key=' + key;

    stopLoading();

    var interval = setInterval(function(){
        firebase.database().ref('links/' + key).once('value', (snapshot) => {
            if (snapshot.val() == undefined) {
                console.log('link not found')
            } else {
                console.log('linked');
                clearInterval(interval);
                window.open(generatedLink, "_self");
            }
        });
    }, 100);
    
}

function mobileDeviceTester(){
    return window.matchMedia('(hover: none)').matches;
}

function loading() {
    document.getElementById('loadingScreen').style.display = 'block';
}

function stopLoading() {
    document.getElementById('loadingScreen').style.display = 'none';
}





// Working functions





window.addEventListener('load', function () {
    isMobileDevice();
    document.getElementById('body').insertAdjacentHTML('beforeend',`
    <div class='expand-screen' id='tvExpandScreen'>
    <div class='expand-screen-contents' id='tvScreenContents'>
        <div class='close-screen-clicker' onclick='closeTvScreen()'></div>
        <div class='expand-panel purple-background' id='tvPanel' onscroll='tvExpandPanelScrolled()'>
            <div class='expand-panel-topbar' id='tvTopbar' onclick='closeTvScreen()'>
                <img src="icons/close.png" class='close-panel-icon' onclick='closeTvScreen()'>
                <span class='expand-panel-title' id='tvPanelTitle'>Tv Title</span>
            </div>
            <div class='expand-panel-impression-image' id="tvPanelCoverImage">
                <div class='action-button-container absolute bottom'>
                    <div class='activity-button filled-activity-button' id='startWatchingTvButton' style='display:none' onclick='transporter("tv",localStorage["expandPanelTitle"],1,0)'>Start Watching</div>
                    <div class='activity-button filled-activity-button' id='continueWatchingButton' style='display:none' onclick='continueWatching(localStorage["expandPanelTitle"])'>Continue</div>
                    <div class='activity-button' onclick='randomizeTv()'>Random Episode</div>
                </div>
            </div>
            <div class='expand-panel-contents'>
                <div class='horizontal-scroll' id='tvPanelNavbarContents'></div>
                <div id='tvPanelEpisodeList' class='list'>
                    <!-- <div class='listItemChoice'>
                        <div class='listItemTitle'>Pilot</div>
                        <div class='listItemLabel'>Episode 1</div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>`);
})

function isLoggedIn() {
    if (localStorage['username'] == undefined) {
        return false;
    } else {
        return true;
    }
}

function checkForAccount() {
    if (localStorage['username'] == undefined) {
        useAccountPrompt();
        stopLoading();
    } else {
        checkAccountValidity();
    }
}

function useAccountPrompt() {
    document.getElementById('body').insertAdjacentHTML('beforeend',`
    <div id='useAccountPrompt' class='screen-card blur-background'>
        <div class='panel-card'>
            <div class='title'>Login or Create Account</div>
            <div class='horizontal-screen-button primary-button' onclick='openPage("login.html")'>Login</div>
            <div class='horizontal-screen-button primary-button' onclick='openPage("signup.html")'>Create Account</div>
            <div class='horizontal-screen-button secondary-button' onclick='this.parentNode.parentNode.style.display="none"'>Ignore</div>
        </div>
    </div>`);
}

function checkAccountValidity() {
    firebase.database().ref('users/' + localStorage['username'] + '/key').once('value', (snapshot) => {
        if (localStorage['ekey'] !== snapshot.val()) {
            alert('Error: Faulty login credentials. Your authentication key is not valid.');
            logout();
        }
        stopLoading();
    });
}

function processRequest() {
    var urlParams = new URLSearchParams(document.location.search);
    if (urlParams.get('action') == 'nextEpisode') {
        nextEpisode(urlParams.get('title').replace(/%20/g, ' '),urlParams.get('season'),urlParams.get('episode'));
    }
}

function nextEpisode(title, season, episode) {
    var tvShowUS = unspace(title);
    var seasonCapacity = eval(tvShowUS)['s' + season].length;
    var seasonsTotal = eval(tvShowUS)['sTotal'];

    if (episode == (seasonCapacity - 1)) {
        if (season == seasonsTotal) {
            openPage('index.html');
        } else {
            season++;
            createLink('tv',title,season,0);
        }
    } else {
        episode++;
        createLink('tv',title,season,episode);
    }
}

function randomizeTv() {
    var title = localStorage['expandPanelTitle'];
    var sTotal = eval(unspace(title))['sTotal'];
    var randomSeason = Math.floor(Math.random() * sTotal) + 1;
    var randomEpisode = Math.floor(Math.random() * (eval(unspace(title))['s' + randomSeason]).length);
    transporter('tv',localStorage['expandPanelTitle'],randomSeason,randomEpisode);
}

function expandTv(mediaTitle) {

    var tvScreen = document.getElementById('tvExpandScreen');
    var tvNavbarContent = document.getElementById('tvPanelNavbarContents');
    var tvPanelTitle = document.getElementById('tvPanelTitle');
    var tvPanelEpisodeList = document.getElementById('tvPanelEpisodeList');
    var tvScreenContents = document.getElementById('tvScreenContents');
    var tvPanelCoverImage = document.getElementById('tvPanelCoverImage');
    var tvPanel = document.getElementById('tvPanel');
    var tvTopbar = document.getElementById('tvTopbar');
    var title = mediaTitle;
    var titleUS = unspace(mediaTitle);
    var mediaType = eval(titleUS)['mediaType'];

    if (isLoggedIn()) {
        firebase.database().ref('users/' + localStorage['username'] + '/watched/tv/' + title).once('value', (snapshot) => {
            if (localStorage['username'] == undefined) {
                console.log('You can not watch content on baileo without an account!');
            } else {
                if (snapshot.val() > 0) {
                    document.getElementById('continueWatchingButton').style.display = 'block';
                    var season = 0;
                    var episode = 0;
                    firebase.database().ref('users/' + localStorage['username'] + '/progress/tv/' + title + 'S').once('value', (snapshot) => {
                        season = snapshot.val();
                        firebase.database().ref('users/' + localStorage['username'] + '/progress/tv/' + title + 'E').once('value', (snapshot) => {
                            episode = snapshot.val();
                            document.getElementById('continueWatchingButton').innerHTML = 'Continue - S' + season + 'E' + (Number(episode) + 1);
                            setTimeout(function() {
                                tvScreenContents.style.top = '0';
                                tvScreenContents.style.opacity = '1';
                            }, 1);
                        }); 
                    });
                } else {
                    document.getElementById('startWatchingTvButton').style.display = 'block';
                    setTimeout(function() {
                        tvScreenContents.style.top = '0';
                        tvScreenContents.style.opacity = '1';
                    }, 1);
                }
            }
        }); 
        
        localStorage['expandPanelTitle'] = title;
        localStorage['activeSeasonTab'] = 1;
    
        tvScreen.style.display = 'block';
        tvPanel.scrollTop = '0';
        tvNavbarContent.scrollLeft = '0';
        tvPanelTitle.innerHTML = title;
        tvNavbarContent.innerHTML = '';
        tvPanelEpisodeList.innerHTML = '';
        tvPanelCoverImage.style.backgroundImage = 'url("cover-image/' + title.replace(/\s/g, '-').toLowerCase() + '.jpg")';
    
        var a = 1;
        while (a <= eval(titleUS)['sTotal']) {
            if (a == localStorage['activeSeasonTab']) {
                tvNavbarContent.insertAdjacentHTML('beforeend',`<div class='navbar-link-item active-navbar-link-item'>Season ` + a + `</div>`);
            } else {
                tvNavbarContent.insertAdjacentHTML('beforeend',`<div class='navbar-link-item' onclick='selectSeason("` + a + `")'>Season ` + a + `</div>`);
            }
            a++;
        }

        tvNavbarContent.insertAdjacentHTML('beforeend',`<div class='navbar-link-item' onclick='openPage("http://50.58.218.209/media/` + title + `")'>⌽ View Source</div>`);
    
        var b = 0;
        while (b < (eval(titleUS)['s1']).length) {
            tvPanelEpisodeList.insertAdjacentHTML('beforeend',`
                <div class='listItemChoice' onclick='transporter("tv","` + title + `","1","` + b + `")'>
                    <div class='listItemTitle'>` + (eval(titleUS)['s1'])[b] + `</div>
                    <div class='listItemLabel'>Episode ` + (b + 1) + `</div>
                </div>`);
            b++;
        }
    } else {
        alert('You must be logged in to an account before you start watching!');
        useAccountPrompt();
    }

    // tvTopbar.style.backgroundColor = eval(unspace(mediaTitle))['color'];

}

function selectSeason(seasonNum) {
    var tvNavbarContent = document.getElementById('tvPanelNavbarContents');
    var tvPanelEpisodeList = document.getElementById('tvPanelEpisodeList');
    var title = localStorage['expandPanelTitle'];
    var titleUS = unspace(title);

    localStorage['activeSeasonTab'] = seasonNum;

    tvPanelEpisodeList.innerHTML = '';
    tvNavbarContent.innerHTML = '';

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
    while (b < (eval(titleUS)['s' + seasonNum]).length) {
        tvPanelEpisodeList.innerHTML = tvPanelEpisodeList.innerHTML + `
            <div class='listItemChoice' onclick='transporter("tv","` + title + `","` + seasonNum + `","` + b + `")'>
                <div class='listItemTitle'>` + (eval(titleUS)['s' + seasonNum])[b] + `</div>
                <div class='listItemLabel'>Episode ` + (b + 1) + `</div>
            </div>`;b++;
    }
}

sessionStorage['savedScrollLocation22838'] = 0;

function tvExpandPanelScrolled() {
    var scrollTop = document.getElementById('tvPanelNavbarContents').getBoundingClientRect().top;
    if (scrollTop == sessionStorage['savedScrollLocation22838']) {
        // document.getElementById('tvPanelNavbarContents').style.backgroundColor = 'var(--royalPurple)';
        document.getElementById('tvPanelNavbarContents').style.borderBottom = 'solid 1pt gray';
    } else {
        sessionStorage['savedScrollLocation22838'] = scrollTop;
        // document.getElementById('tvPanelNavbarContents').style.background = 'none';
        document.getElementById('tvPanelNavbarContents').style.borderBottom = 'none';
    }
}

function closeTvScreen() {
    var tvExpandScreen = document.getElementById('tvExpandScreen');
    var tvScreenContents = document.getElementById('tvScreenContents');

    tvScreenContents.style.top = '100vh';
    tvScreenContents.style.opacity = '0';
    setTimeout(function() {
        tvExpandScreen.style.display = 'none';
    }, 100);


    document.getElementById('continueWatchingButton').style.display = 'none';
    document.getElementById('startWatchingTvButton').style.display = 'none';
}

function isMobileDevice() {
    if (mobileDeviceTester()) {
        var thumbnails = document.querySelectorAll(".media-slider-object");
        for (var i = 0; i < thumbnails.length; i++) {
            var mobileThumbails = thumbnails[i].style.backgroundImage.replace("thumbnails", "mobile thumbnails");
            thumbnails[i].style.backgroundImage = mobileThumbails;
            thumbnails[i].style.height = ''
        }
    } else {
        console.log('No mobile device detected');
    }
}

function login() {
    loading();
    var usernameInput = document.getElementById("usernameInput").value.toLowerCase();
    var passwordInput = document.getElementById("passwordInput").value;
    firebase.database().ref('users/' + usernameInput + '/password').once('value', (snapshot) => {
        if (snapshot.val() == passwordInput) {
            localStorage['username'] = usernameInput;
            firebase.database().ref('users/' + usernameInput + '/key').once('value', (snapshot) => {
                localStorage['ekey'] = snapshot.val();
                openPage('index.html');
            });
        } else {
            alert('Login unsuccessful: username or password incorrect');
            stopLoading();
        }
    });
}

function signup() {
    loading();

    var usernameInput = document.getElementById("usernameInput").value.toLowerCase();
    var passwordInput = document.getElementById("passwordInput").value;
    var confirmPasswordInput = document.getElementById("confirmPasswordInput").value;

    if (passwordInput == confirmPasswordInput) {
        if (passwordInput == '') {
            alert('You must enter a password!');
            stopLoading();
        } else {
            if (usernameInput == '') {
                alert('You must enter a username!');
                stopLoading();
            } else {
                firebase.database().ref('users/' + usernameInput + '/password').once('value', (snapshot) => {
                    if (snapshot.val() == undefined) {
                        var key = createEncryptionKey(50);

                        localStorage['key'] = key;
                        localStorage['username'] = usernameInput;

                        setDataProfile('ekey',key);
                        setDataProfile('password',passwordInput);
                        openPage('index.html');
                    } else {
                        alert('That username is already taken!');
                        stopLoading();
                    }
                });
            }
        }
    } else {
        alert('Passwords do not match!');
    }
}

function changePassword() {
    var oldPasswordInput = document.getElementById("oldPasswordInput").value;
    var newPasswordInput = document.getElementById("newPasswordInput").value;
    var confirmNewPasswordInput = document.getElementById("confirmNewPasswordInput").value;

    if (newPasswordInput == confirmNewPasswordInput) {
        firebase.database().ref('users/' + localStorage['username'] + '/password').once('value', (snapshot) => {
            if (oldPasswordInput == newPasswordInput) {
                alert('You need to pick a new password!');
            } else {
                if (oldPasswordInput == snapshot.val()) {
                    setDataProfile('password',newPasswordInput);
                    systemLogout();
                    openPage('profile.html');
                } else {
                    alert('The old password is incorrect!');
                }
            }
        });
    } else {
        alert('Passwords do not match!');
    }
}

function loadProfile() {
    document.getElementById('profilePageUsername').innerHTML = 'Welcome, ' + localStorage['username'];
}

function getCurrentlyWatching() {
    loading();
    firebase.database().ref('users/' + localStorage['username'] + '/watched').once('value', (snapshot) => {
        if (snapshot.val() == undefined) {
            document.getElementById('continueWatchingSection').style.display = 'none';
            stopLoading(); 
        } else {
            document.getElementById('continueWatchingSection').style.display = 'block';
            var tvOrdered = '';
            var moviesOrdered = '';

            var allMedia = {};
            if (snapshot.val()['movie'] == undefined) {
                Object.assign(allMedia, snapshot.val()['tv']);
            } else if (snapshot.val()['tv'] == undefined) {
                Object.assign(allMedia, snapshot.val()['movie']);
            } else {
                Object.assign(allMedia, snapshot.val()['tv']);
                Object.assign(allMedia, snapshot.val()['movie']);
            }

            console.log(allMedia);
            
            const ordered = Object.entries(allMedia)
                .sort(([,a],[,b]) => b - a)
                .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
            // console.log(allMedia);

            if (mobileDeviceTester()) {
                var thumbnailFolder = 'mobile thumbnails'
            } else {
                var thumbnailFolder = 'thumbnails';
            }

            firebase.database().ref('users/' + localStorage['username'] + '/progress').once('value', (snapshot) => {
                const progressData = snapshot.val();
                for (var i = 0; i < Object.keys(ordered).length; i++) {
                    var mediaType = eval(unspace(Object.keys(ordered)[i]))['mediaType'];
                    document.getElementById('continueWatchingCarousel').insertAdjacentHTML('beforeend',`
                    <div class='media-slider-object' style="background-image: url('` + thumbnailFolder + `/` + Object.keys(ordered)[i].toLowerCase().replace(/\s/g, '-') + `.jpg')">
                        <div class='image-shader' onclick='continueWatching("` + Object.keys(ordered)[i] + `")'>
                            <img src='icons/play circle.png' class='image-shader-indicator'>
                        </div>
                        <div class='view-progress-container'>
                            <div style='width: ` + (progressData[mediaType][Object.keys(ordered)[i]] * 100) + `%' class='view-progress-bar'></div>
                        </div>
                        <img src='icons/close.png' class='remove-from-history-icon' onclick='removeFromWatchHistory("` + Object.keys(ordered)[i] + `")'>
                    </div>`);
                    // console.log(Object.keys(ordered)[i]); 
                }
            });

            stopLoading(); 
        }
    });
        
}

function removeFromWatchHistory(mediaTitle) {
    var mediaType = eval(unspace(mediaTitle))['mediaType'];
    firebase.database().ref('users/' + localStorage['username'] + '/watched/' + mediaType + '/' + mediaTitle).remove();
    document.getElementById('continueWatchingCarousel').innerHTML = '';
    getCurrentlyWatching();
}

function search(string) {
    let input = string;
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

function readSearchUrl() {
    var urlParams = new URLSearchParams(document.location.search);
    search(urlParams.get('search').replace(/%20/g, ' '));
    document.getElementById('searchBar').value = urlParams.get('search').replace(/%20/g, ' ');
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

// s1: ["Pilot", "Diversity

function seriesHelper(season, message) {
    var newText = 's' + season + ': [' + message.replace(/\n/g, ',') + '],';
    console.log(newText);
}

function shortenURL() {
    let urlToShorten = prompt("Please enter the URL you would like to shorten");
    let urlCode = prompt("Please enter the shortcut URL you would like to create (https://baileo.us/[YOUR INPUT]) ... Please note that your custom URL can ONLY contain letters (A-Z) and numbers (0-9) and must be atleast 5 characters in length.");
    if ((/^[a-zA-Z0-9]+$/.test(urlCode)) && (urlCode.length >= 5)) {
        setData('customURLs/' + urlCode + '/url', urlToShorten)
    } else {
        alert('Invaid custom URL. Remember, your custom URL can ONLY contain letters (A-Z) and numbers (0-9) and must be atleast 5 characters in length.')
    }
}

function checkForCustomURL() {
    firebase.database().ref('customURLs').once('value', (snapshot) => {
        console.log(snapshot.val());
        if (snapshot.val()[window.location.pathname.replace('/','')] !== undefined) {
            console.log('Page Exists, transferring now...');
            openPage(snapshot.val()[window.location.pathname.replace('/','')]['url']);
        } else {
            document.getElementById('body').style.display = 'block';
        }
        // processCustomURL()
    });
}

function connectToSync() {
    let syncCode = prompt("Please enter the Sync Code (6 Digits)");

    if (syncCode.length == 6) {
        alert('Sync Code not recognized, please try again later. A possible reason for this error is this feature not being completely functional yet (clearly)');
    } else {
        alert('That is an invalid Sync Code');
    }
}

function testString(string) {
    console.log('Testing...');
    if(/^[a-zA-Z0-9]+$/.test(string)) {
        console.log('Yes');
    }
}