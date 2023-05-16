import { 
    getDatabase,
    ref,
    set,
    onValue,
    get,
} from "firebase/database"

import { 
    getAuth, 
    signInWithRedirect,
    GoogleAuthProvider 
} from "firebase/auth"

export const auth = {
    google: () => {
        const provider = new GoogleAuthProvider()
        const auth = getAuth()

        signInWithRedirect(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
}

export const db = {
    write: (location, value) => {
        const database = getDatabase()

        set(ref(database, location), value)
    },
    listen: (location, callback) => {
        const database = getDatabase()

        onValue(ref(database, location), (snapshot) => {
            callback(snapshot.val())
        }, (error) => {
            console.error(error)
        })
    },
}

// Local storage data access
export const storage = {
    get: function (location) {
        if (typeof window =="undefined") return

        return localStorage[location]
    },

    set: function (location, value) {
        if (typeof window =="undefined") return

        localStorage[location] = value
    },

    exists: function (location) {
		if (typeof window =="undefined") return

        if (localStorage[location]) return true
		else return false
	},

    confirm: function(location, value, callback) {
        if (localStorage[location] == value) callback()
        else alert('storage.confirm[val] error... reset ∞ loop detected')
    },

    search: function (query) {
        if (typeof window =="undefined") return

        let keys = Object.keys(localStorage)
        let set = []
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].includes(query)) set.push(keys[i])
        }
        return set
    },

    delete: function (location) {
        if (typeof window =="undefined") return

        if (this.exists(location)) localStorage.removeItem(location)
    },

    clear: function() {
        if (typeof window =="undefined") return

        localStorage.clear()
    },

    session: {
        get: function (location) {
            if (typeof window =="undefined") return
    
            return sessionStorage[location]
        },

        set: function (location, value) {
            if (typeof window =="undefined") return
    
            sessionStorage[location] = value
        },
        
        exists: function (location) {
            if (typeof window =="undefined") return
    
            if (sessionStorage[location]) return true
            else return false
        },
    }
}

// Test if file server is allowed for connection through browser
export function isServerConnected(url) {
    if (typeof window !== 'undefined') {
        var img = new Image();
        img.src = url;
        return img.height != 0;
    }
}

// On home page, handle onclick for media item with title
export function handleMediaItemClick(title) {
    storage.set('watching title', title)
    window.open('/watch/', '_self')
}

// Generate a uniqueID for class references
export function uniqueID() {
    let lib = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'x0', 'x1', 'x2', 'x3', 'x4', 'x5', 'x6', 'x7', 'x8', 'x9']
    let id = 'unique-id_'
    for (let i = 0; i < 10; i++) {
        id += lib[Math.floor(Math.random() * lib.length)]
    }
    return id
}

// Control media (next/previous episode & season, etc...)
export const media_controls = {
    next_episode: function() {
        let seasonLength = mediaDB[media.title]['s' + media.season].length
        let seasonMax = mediaDB[media.title]['sTotal']
        storage.set(`${media.title} progress`, 0)

        if (media.episode == seasonLength) {
            if (media.season == seasonMax) {
                actions.markAsWatched()
            }
            else {
                storage.set(`${media.title} season`, Number(media.season) + 1)
                storage.set(`${media.title} episode`, 1)
                window.location.reload()
            }
        }
        else {
            storage.set(`${media.title} episode`, Number(media.episode) + 1)
            window.location.reload()
        }
    }
}

// Converts special characters to universal characters to communicate to file server
export function serverTypeConversion(string) {
    string = string.replaceAll('-', "'")
    string = string.replaceAll('()', "?")
    string = string.replaceAll('_', ".")

    return string
}

export function shuffle(array) {
    let currentIndex = array.length,  randomIndex
    
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
    
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
    
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]]
    }
    
    return array;
}

export const mediaDB = {
    "Family Guy": {
        type: "TV Show", 
        cat: "comedy", 
        sTotal: 18,
        s1: ["Death Has a Shadow", "I Never Met the Dead Man", "Chitty Chitty Death Bang", "Mind Over Murder", "A Hero Sits Next Door", "The Son Also Draws", "Brian - Portrait of a Dog"],
        s2: ["Peter, Peter, Caviar Eater", "Holy Crap", "Da Boom", "Brian in Love", "Love Thy Trophy", "Death Is a Bitch", "The King Is Dead", "I Am Peter, Hear Me Roar", "If I-m Dyin", "I-m Lyin", "Running Mates", "A Picture is Worth 1,000 Bucks", "Fifteen Minutes of Shame", "Road to Rhode Island", "Let-s Go to the Hop", "Dammit Janet", "There-s Something About Paulie", "He-s Too Sexy for His Fat", "E. Peterbus Unum", "The Story on Page One", "Wasted Talent", "Fore, Father"],
        s3: ["The Thin White Line", "Brian Does Hollywood", "Mr. Griffin Goes to Washington", "One If by Clam, Two If by Sea", "And the Wiener Is...", "Death Lives", "Lethal Weapons", "The Kiss Seen Around the World", "Mr. Saturday Knight", "A Fish Out of Water", "Emission Impossible", "To Love and Die in Dixie", "Screwed the Pooch", "Peter Griffin: Husband, Father... Brother()", "Ready, Willing, and Disabled", "A Very Special Family Guy Freakin- Christmas", "Brian Wallows and Peter-s Swallows", "From Method to Madness", "Stuck Together, Torn Apart", "Road to Europe", "Family Guy Viewer Mail #1", "When You Wish Upon a Weinstein"],
        s4: ["North by North Quahog", "Fast Times at Buddy Cianci Jr. High", "Blind Ambition", "Don-t Make Me Over", "The Cleveland-Loretta Quagmire", "Petarded", "Brian the Bachelor", "8 Simple Rules for Buying My Teenage Daughter", "Breaking Out Is Hard to Do", "Model Misbehavior", "Peter-s Got Woods", "Perfect Castaway", "Jungle Love", "PTV Show", "Brian Goes Back to College", "The Courtship of Stewie-s Father", "The Fat Guy Strangler", "The Father, the Son, and the Holy Fonz", "Brian Sings and Swings", "Patriot Games", "I Take Thee Quagmire", "Sibling Rivalry", "Deep Throats", "Peterotica", "You May Now Kiss the... Uh... Guy Who Receives", "Petergeist", "The Griffin Family History", "Stewie B. Goode", "Bang-o Was His Name-o", "Stu and Stewie-s Excellent Adventure"],
        s5: ["Stewie Loves Lois", "Mother Tucker", "Hell Comes to Quahog", "Saving Private Brian", "Whistle While Your Wife Works", "Prick Up Your Ears", "Chick Cancer", "Barely Legal", "Road to Rupert", "Peter-s Two Dads", "The Tan Aquatic with Steve Zissou", "Airport -07", "Bill & Peter-s Bogus Journey", "No Meals on Wheels", "Boys Do Cry", "No Chris Left Behind", "It Takes a Village Idiot, and I Married One", "Meet the Quagmires"],
        s6: ["Blue Harvest", "Movin- Out (Brian-s Song)", "Believe It or Not, Joe-s Walking on Air", "Stewie Kills Lois (Part 1)", "Lois Kills Stewie (Part 2)", "Padre de Familia", "Peter-s Daughter", "McStroke", "Back to the Woods", "Play It Again, Brian", "The Former Life of Brian", "Long John Peter"],
        s7: ["Love, Blactually", "I Dream of Jesus", "Road to Germany", "Baby Not on Board", "The Man with Two Brians", "Tales of a Third Grade Nothing", "Ocean-s Three and a Half", "Family Gay", "The Juice Is Loose", "Fox-y Lady", "Not All Dogs Go to Heaven", "420", "Stew-Roids", "We Love You, Conrad", "Three Kings", "Peter-s Progress"],
        s8: ["Road to the Multiverse", "Family Goy", "Spies Reminiscent of Us", "Brian-s Got a Brand New Bag", "Hannah Banana", "Quagmire-s Baby", "Jerome Is the New Black", "Dog Gone", "Business Guy", "Big Man on Hippocampus", "Dial Meg for Murder", "Extra Large Medium", "Go, Stewie, Go!", "Peter-assment", "Brian Griffin-s House of Payne", "April in Quahog", "Brian & Stewie", "Quagmire-s Dad", "The Splendid Source", "Something, Something, Something, Dark Side", "Partial Terms of Endearment"],
        s9: ["And Then There Were Fewer", "Excellence in Broadcasting", "Welcome Back, Carter", "Halloween on Spooner Street", "Baby, You Knock Me Out", "Brian Writes a Bestseller", "Road to the North Pole", "New Kidney in Town", "And I-m Joyce Kinney", "Friends of Peter G.", "German Guy", "The Hand That Rocks the Wheelchair", "Trading Places", "Tiegs for Two", "Brothers & Sisters", "The Big Bang Theory", "Foreign Affairs", "It-s a Trap!"],
        s10: ["Lottery Fever", "Seahorse Seashell Party", "Screams of Silence: The Story of Brenda Q", "Stewie Goes for a Drive", "Back to the Pilot", "Thanksgiving", "Amish Guy", "Cool Hand Peter", "Grumpy Old Man", "Meg and Quagmire", "The Blind Side", "Livin- on a Prayer", "Tom Tucker: The Man and His Dream", "Be Careful What You Fish For", "Burning Down the Bayit", "Killer Queen", "Forget-Me-Not", "You Can-t Do That on Television, Peter", "Mr. and Mrs. Stewie", "Leggo My Meg-O", "Tea Peter", "Family Guy Viewer Mail #2", "Internal Affairs"],
        s11: ["Into Fat Air", "Ratings Guy", "The Old Man and the Big -C-", "Yug Ylimaf", "Joe-s Revenge", "Lois Comes Out of Her Shell", "Friends Without Benefits", "Jesus, Mary and Joseph!", "Space Cadet", "Brian-s Play", "The Giggity Wife", "Valentine-s Day in Quahog", "Chris Cross", "Call Girl", "Turban Cowboy", "12 and a Half Angry Men", "Bigfat", "Total Recall", "Save the Clam", "Farmer Guy", "Roads to Vegas", "No Country Club for Old Men"],
        s12: ["Finders Keepers", "Vestigal Peter", "Quagmire-s Quagmire", "A Fistful of Meg", "Boppa-dee Bappa-dee", "Life of Brian", "Into Harmony-s Way", "Christmas Guy", "Peter Problems", "Grimm Job", "Brian-s a Bad Father", "Mom-s the Word", "3 Acts of God", "Fresh Heir", "Secondhand Spoke", "Herpe the Love Sore", "The Most Interesting Man in the World", "Baby Got Black", "Meg Stinks!", "He-s Bla-ack!", "Chap Stewie"],
        s13: ["The Simpsons Guy", "The Book of Joe", "Baking Bad", "Brian the Closer", "Turkey Guys", "The 2000-Year-Old Virgin", "Stewie, Chris, & Brian-s Excellent Adventure", "Our Idiot Brian", "This Little Piggy", "Quagmire-s Mom", "Encyclopedia Griffin", "Stewie Is Enceinte", "Dr. C and the Women", "#JOLO", "Once Bitten", "Roasted Guy", "Fighting Irish", "Take My Wife"],
        s14: ["Pilling Them Softly", "Papa Has a Rollin- Son", "Guy, Robot", "Peternormal Activity", "Peter, Chris, & Brian", "Peter-s Sister", "Hot Pocket-Dial", "Brokeback Swanson", "A Shot in the Dark", "Candy, Quahog Marshmallow", "The Peanut Butter Kid", "Scammed Yankees", "An App a Day", "Underage Peter", "A Lot Going on Upstairs", "The Heartbreak Dog", "Take a Letter", "The New Adventures of Old Tom", "Run Chris, Run"],
        s15: ["The Boys in the Band", "Bookie of the Year", "American Gigg-olo", "Inside Family Guy", "Chris Has Got a Date, Date, Date, Date, Date", "Hot Shots", "High School English", "Carter and Tricia", "How the Griffin Stole Christmas", "Passenger Fatty-Seven", "Gronkowsbees", "Peter-s Def Jam", "The Finer Strings", "The Dating Game", "Cop and a Half-wit", "Saturated Fat Guy", "Peter-s Lost Youth", "The Peter Principal", "Dearly Deported", "A House Full of Peters"],
        s16: ["Emmy-Winning Episode", "Foxx in the Men House", "Nanny Goats", "Follow The Money", "Three Doctors", "The D in Apartment 23", "Petey IV", "Crimes and Meg-s Demeanor", "Don-t Be a Dickens at Christmas", "Boy (Dog) Meets Girl", "Dog Bites Bear", "Send In Stewie, Please", "V Is For Mystery", "Veteran Guy", "The Woof of Wall Street", "Family Guy Through the Years", "Switch the Flip", "HTTPete", "The Unkindest Cut", "Are You There God() It-s Me, Peter"],
        s17: ["Married... with Cancer", "Dead Dog Walking", "Pal Stewie", "Big Trouble in Little Quahog", "Regarding Carter", "Stand by Meg", "The Griffin Winter Games", "Con Heiress", "Pawtucket Pete", "Hefty Shades of Gray", "Trump Guy", "Bri, Robot", "Trans-Fat", "Family Guy Lite", "No Giggity, No Doubt", "You Can-t Handle the Booth!", "Island Adventure", "Throw It Away", "Girl, Internetted", "Adam West High"],
        s18: ["Yacht Rocky", "Bri-da", "Absolutely Babulous", "Disney the Reboot", "Cat Fight", "Peter and Lois- Wedding", "Heart Burn", "Shanksgiving", "Christmas is Coming", "Connies Celica", "Short Cuts", "Undergrounded", "Rich Old Stewie", "The Movement", "Baby Stewie", "Start Me Up", "Coma Guy", "Better Off Meg", "Holly Bibble", "Movin in Principal Shepherd-s Song"],
        color: "rgba(227, 45, 255, 1)", 
    },

    "Frenemies": {
        type: "TV Show", 
        cat: "comedy", 
        sTotal: 1,
        s1: ["Trisha-s New Boyfriend Is Hila-s Brother", "Trisha-s Obsession With Jewish People", "Possible Our Last Episode", "Is Trisha Smarter Than A 5th Grader()", "Trisha & Ethan Have a Huge Fight & She Storms Out", "Trisha & Ethan Reconcile... Kind of", "Couples Therapy With Dr. Drew", "Trisha & Ethan Fight About The Election", "Cheese Mukbang Disaster", "Trisha vs Charli & Dixie D-Amelio", "Trisha & Ethan Do Goat Yoga & Carpool Karaoke", "Trisha Was Kidnapped At Gunpoint", "Trisha Quits the Podcast & Storms Out", "The Fate Of Frenemies With Dr. Drew", "We Made The Only Honest Award Show - Introducing The Steamies", "Frenemies Is Under Attack", "Trisha Was Bullied and It-s NOT Okay!", "Pop Culture Trivia War & Friendship With Shane Is Over", "The David Dobrik & Jason Nash Episodes", "Newlywed Game (Trish & Moses vs Ethan & Hila)", "Erased David Dobrik Footage Proves Trisha Was Right All Along", "Ethan & Trisha Do An Athletics Competition", "David Dobrik & James Charles Drama Apocalypse", "Jewish Trivia Contest, David Dobrik & Scotty Sire", "David Dobrik-s Lawyers Go After Trisha & Cooking Competiton", "Responding To Jeff Wittek & New David Dobrik Footage", "Jeff Wittek Interview Fallout", "Responding To David Dobrik-s Apology", "Trisha-s Epic Passover Dinner At Ethan-s", "Trisha & Ethan Do Oddly Satisfying Trends", "Khloe Kardashian Photo Drama & Pizza Eating Contest", "James Charles Entire Channel Demonetized by YouTube", "Jeff Wittek, David Dobrik, & TRIVIA!", "Trisha-s Birthday Celebration", "[VLOG 1] Trisha & Ethan Go To Disneyland For Her Birthday", "Ethan Embarrassed Himself In Front Of Trisha-s Family", "Trisha & Ethan Got Bullied & Are Fighting Back", "Taking Trisha To Meme School", "[VLOG 2] Trisha & Ethan Hijack A Hollywood Tour Bus", "PREGNANCY ANNOUNCEMENT!", "Talking About Gabbie Hanna"],
        color: "rgba(200, 0 225, 1)", 
    },

    "Parks and Recreation": {
        type: "TV Show", 
        cat: "comedy", 
        sTotal: 7,
        s1: ["Pilot", "Canvassing", "The Reporter", "Boys- Club", "The Banquet", "Rock Show"],
        s2: ["Pawnee Zoo", "The Stakeout", "Beauty Pageant", "Practice Date", "Sister City", "Kaboom", "Greg Pitkins", "Ron and Tammy", "The Camel", "Hunting Trip", "Tom-s Divorce", "Christmas Scandal", "The Set Up", "Leslie-s House", "Sweetums", "Galentine-s Day", "Woman of the Year", "The Possum", "Park Safety", "Summer Catalog", "94 Meetings", "Telethon", "The Master Plan", "Freddy Spaghetti"],
        s3: ["Go Big or Go Home", "Flu Season", "Time Capsule", "Ron and Tammy Part Two", "Media Blitz", "Indianapolis", "Harvest Festival", "Camping", "Andy and April-s Fancy Party", "Soulmates", "Jerry-s Painting", "Eagleton", "The Fight", "Road Trip", "The Bubble", "Li-l Sebastian"],
        s4: ["I-m Leslie Knope", "Ron and Tammys", "Born and Raised", "Pawnee Rangers", "Meet n Greet", "End of the World", "The Treaty", "Smallest Park", "The Trial of Leslie Know", "Citizen Knope", "The Comeback Kid", "Campaign Ad", "Bowling for Votes", "Operation Ann", "Dave Returns", "Sweet Sixteen", "Campaign Shake-Up", "Lucky", "Live Ammo", "The Debate", "Bus Tour", "Win, Lose, or Draw"],
        s5: ["Ms. Knope Goes to Washington", "Soda Tax", "How a Bill Becomes a Law", "Sex Education", "Halloween Suprise", "Ben-s Parents", "Leslie v April", "Pawnee Commons", "Ron and Diane", "Two Parties", "Women in Garbage", "Ann-s Decision", "Emergency Response", "Leslie and Ben", "Correspondent-s Lunch", "Bailout", "Partridge", "Animal Control", "Article Two", "Jerry-s Retirement", "Swing Vote", "Are You Better Off"],
        s6: ["London", "The Pawnee-Eagleton Tip Off Classic", "Doppelgängers", "Gin it Up!", "Filibuster", "Recall Vote", "Fluoride", "The Cones of Dunshire", "Second Chunce", "New Beginnings", "Farmers Market", "Ann and Chris", "Anniversaries", "The Wall", "New Slogan", "Galentine-s Day", "Prom", "Flu Season 2", "One in 8,000", "Moving Up"],
        s7: ["2017", "Ron and Jammy", "William Henry Harrison", "Leslie and Ron", "Gryzzlbox", "Save JJ-s", "Donna and Joe", "Ms. Ludgate-Dwyer Goes to Washington", "Pie-Mary", "The Johnny Karate Super Awesome Musical Explosion Show", "Two Funerals", "One Last Ride"],
        color: "rgba(188, 230, 149, 1)", 
    },

    "Squid Game": {
        type: "TV Show", 
        cat: "drama", 
        sTotal: 1,
        s1: ["Red Light", "Green Light", "Hell", "The Man with the Umbrella", "Stick to the Team", "A Fair World", "Gganbu", "VIPS", "Front Man", "One Lucky Day"],
        color: "rgba(164, 79, 255, 1)", 
    },

    "Sherlock": {
        type: "TV Show", 
        cat: "drama", 
        sTotal: 4,
        s1: ["A Study in Pink", "The Blind Banker", "The Great Game"],
        s2: ["A Scandal in Belgravia", "The Hounds of Baskerville", "The Reichenbach Fall"],
        s3: ["The Empty Hearse", "The Sign of Three", "His Last Vow"],
        s4: ["The Six Thatchers", "The Lying Detective", "The Final Problem"],
        color: "rgba(255, 49, 49, 1)", 
    },

    "Superstore": {
        type: "TV Show",
        cat: "comedy",
        sTotal: 6,
        s1: ["Pilot","Magazine Profile","Shots and Salsa","Mannequin","Shoplifter","Secret Shopper","Color Wars","Wedding Day Sale","All-Nighter","Demotion","Labor"],
        s2: ["Olympics","Strike","Back to Work","Guns, Pills and Birds","Spokesman Scandal","Dog Adoption Day","Halloween Theft","Election Day","Seasonal Help","Black Friday","Lost and Found","Rebranding","Ladies- Lunch","Valentine-s Day","Super Hot Store","Wellness Fair","Integrity Award","Mateo-s Last Day","Glenn-s Kids","Spring Cleaning","Cheyenne-s Wedding","Tornado"],
        s3: ["Grand Re-Opening","Brett-s Dead","Part-Time Hires","Workplace Bullying","Sal-s Dead","Health Fund","Christmas Eve","Viral Video","Golden Globes Party","High Volume Store","Angels and Mermaids","Groundhog Day","Video Game Release","Safety Training","Amnesty","Target","District Manager","Local Vendors Day","Lottery","Gender Reveal","Aftermath","Town Hall"],
        s4: ["Back to School","Baby Shower","Toxic Workplace","Costume Competition","Delivery Day","Maternity Leave","New Initiative","Managers- Conference","Shadowing Glenn","Cloud 9 Academy","Steps Challenge","Blizzard","Love Birds","Minor Crimes","Salary","Easter","Quincea\u00f1era","Cloud Green","Scanners","#Cloud9Fail","Sandra-s Fight","Employee Appreciation Day"],
        s5: ["Cloud 9.0","Testimonials","Forced Hire","Mall Closing","Self-Care","Trick-or-Treat","Shoplifter Rehab","Toy Drive","Curbside Pickup","Negotiations","Lady Boss","Myrtle","Favoritism","Sandra-s Wedding","Cereal Bar","Employee App","Zephra Cares","Playdate","Carol-s Back","Customer Safari","California (Part 1)"],
        s6: ["Essential","California (Part 2)","Floor Supervisor","Prize Wheel","Hair Care Products","Biscuit","The Trough","Ground Rules","Conspiracy","Depositions","Deep Cleaning","Customer Satisfaction","Lowell Anderson","Perfect Store","All Sales Final"],
    },

    "The Office": {
        type: "TV Show", 
        cat: "comedy", 
        sTotal: 9,
        s1: ["Pilot", "Diversity Day", "Health Care", "The Alliance", "Basketball", "Hot Girl"],
        s2: ["The Dundies", "Sexual Harassment", "Office Olympics", "The Fire", "Halloween", "The Fight", "The Client", "Performance Review", "Email Surveillance", "Christmas Party", "Booze Cruise", "The Injury", "The Secret", "The Carpet", "Boys and Girls", "Valentine-s Day", "Dwight-s Speech", "Take Your Daughter to Work Day", "Michael-s Birthday", "Drug Testing", "Conflict Resolution", "Casino Night"],
        s3: ["Gay Witch Hunt", "The Convention", "The Coup", "Grief Counseling", "Initiation", "Diwali", "Branch Closing", "The Merger", "The Convict", "A Benihana Christmas", "Back From Vacation", "Traveling Salesman", "The Return", "Ben Franklin", "Phyllis- Wedding", "Business School", "Cocktails", "The Negotiation", "Safety Training", "Product Recall", "Women-s Appreciation", "Beach Games", "The Job"],
        s4: ["Fun Run", "Dunder Mifflin Infinity", "Launch Party", "Money", "Local Ad", "Branch Wars", "Survivor Man", "The Deposition", "Dinner Party", "Chair Model", "Night Out", "Did I Stutter", "Job Fair", "Goodbye, Toby"],
        s5: ["Weight Loss", "Business Ethics", "Baby Shower", "Crime AID", "Employee Transfer", "Customer Survey", "Business Trip", "Frame Toby", "The Surplus", "Moroccan Christmas", "The Duel", "Prince Family Paper", "Stress Relief", "Lecture Circuit P1", "Lecture Circuit P2", "Blood Drive", "Golden Ticket", "New Boss", "Two Weeks", "Dream Team", "Michael Scott Paper Company", "Heavy Competition", "Broke", "Casual Friday", "Cafe Disco", "Company Picnic"],
        s6: ["Gossip", "The Meeting", "The Promotion", "Niagra", "Mafia", "The Lover", "Koi Pond", "Double Date", "Murder", "Shareholder Meeting", "Scott-s Tots", "Secret Santa", "The Banker", "Sabre", "The Manager and the Salesman", "The Delivery", "St. Patrick-s Day", "New Leads", "Happy Hour", "Secretary-s Day", "Body Language", "The Cover Up", "The Chump", "Whistleblower"],
        s7: ["Nepotism", "Counseling", "Andy-s Play", "Sex Ed", "The Sting", "Costume Contest", "Christening", "Viewing Party", "WUPHF.com", "China", "Classy Christmas", "Ultimatum", "The Seminar", "The Search", "PDA", "Threat Level Midnight", "Todd Packer", "Garage Sale", "Training Day", "Michael-s Last Dundies", "Goodbye, Michael", "The Inner Circle", "Dwight K. Schrute, (Acting) Manager", "Search Committee"],
        s8: ["The List", "The Incentive", "Lotto", "Garden Party", "Spooked", "Doomsday", "Pam-s Replacement", "Gettysburg", "Mrs. California", "Christmas Wishes", "Trivia", "Pool Party", "Jury Duty", "Special Project", "Tallahassee", "After Hours", "Test the Store", "Last Day in Florida", "Get the Girl", "Welcome Party", "Angry Andy", "Fundraiser", "Turf War", "Free Family Portrait Studio"],
        s9: ["New Guys", "Roy-s Wedding", "Andy-s Ancestry", "Work Bus", "Here Comes Treble", "The Boat", "The Whale", "The Target", "Dwight Christmas", "Lice", "Suit Warehouse", "Customer Loyalty", "Junior Salesman", "Vandalism", "Couples Discount", "Moving On", "The Farm", "Promos", "Stairmageddon", "Paper Airplane", "Livin- The Dream", "AARM", "Finale"],
        color: "rgba(0, 51, 255)", 
        "featured_favorites": "true"
    },

    "Wanda Vision": {
        type: "TV Show", 
        cat: "marvel", 
        sTotal: 1,
        s1: ["Filmed Before a Live Studio Audience", "Don-t Touch That Dial", "Now In Color", "We Interrupt This Program", "On a Very Special Episode...", "All-New Holloween Spectacular", "Breaking the Fourth Wall", "Previously On", "The Series Finale"],
        color: "rgba(0, 51, 255)", 
    },

    "Avengers ENDGAME": {
        type: "Movie", 
        cat: "marvel", 
    },

    "American Psycho": {
        type: "Movie", 
        cat: "drama", 
        "featured_favorites": "true",
    },

    "Cars 2": {
        type: "Movie", 
        cat: "animation", 
    },

    "Cars 3": {
        type: "Movie", 
        cat: "animation", 
    },

    "Clueless": {
        type: "Movie", 
        cat: "comedy", 
    },

    "Coraline": {
        type: "Movie", 
        cat: "animation", 
        "featured_favorites": "true"
    },

    "Daddys Home 2": {
        type: "Movie", 
        cat: "christmas", 
    },

    "Despicable Me": {
        type: "Movie", 
        cat: "animation", 
    },

    "Despicable Me 2": {
        type: "Movie", 
        cat: "animation", 
    },

    "Despicable Me 3": {
        type: "Movie", 
        cat: "animation", 
    },

    "Dumb and Dumber": {
        type: "Movie", 
        cat: "comedy", 
    },

    "Dumb and Dumber To": {
        type: "Movie", 
        cat: "comedy", 
    },

    "Elf": {
        type: "Movie", 
        cat: "christmas", 
    },

    "Hidden Figures": {
        type: "Movie", 
        cat: "drama", 
        "featured_favorites": "true"
    },

    "Just Friends": {
        type: "Movie", 
        cat: "romcom", 
    },

    "Just Married": {
        type: "Movie", 
        cat: "romcom", 
    },

    "Knives Out": {
        type: "Movie", 
        cat: "drama", 
    },

    "Legally Blonde": {
        type: "Movie", 
        cat: "comedy", 
    },

    "Mean Girls": {
        type: "Movie", 
        cat: "comedy", 
    },

    "Mean Girls 2": {
        type: "Movie", 
        cat: "comedy", 
    },

    "Minions The Rise of Gru": {
        type: "Movie", 
        cat: "animation", 
    },

    "Minions": {
        type: "Movie", 
        cat: "animation", 
    },

    "Miss Congeniality": {
        type: "Movie", 
        cat: "comedy", 
    },

    "Movie 43": {
        type: "Movie", 
        cat: "comedy", 
    },

    "Pitch Perfect": {
        type: "Movie", 
        cat: "comedy", 
    },

    "Ratatouille": {
        type: "Movie", 
        cat: "animation", 
    },

    "Spider Man Far From Home": {
        type: "Movie", 
        cat: "marvel", 
    },

    "Spider Man Homecoming": {
        type: "Movie", 
        cat: "marvel", 
    },

    "Spider Man No Way Home": {
        type: "Movie", 
        cat: "marvel", 
    },

    "Step Brothers": {
        type: "Movie", 
        cat: "comedy", 
    },

    "The Amazing Spider Man 2": {
        type: "Movie", 
        cat: "marvel", 
    },

    "The Devil Wears Prada": {
        type: "Movie", 
        cat: "drama", 
    },

    "The Holiday": {
        type: "Movie", 
        cat: "romcom", 
    },

    "The Incredible Hulk": {
        type: "Movie", 
        cat: "marvel", 
    },

    "The Notebook": {
        type: "Movie", 
        cat: "drama", 
    },

    "The Proposal": {
        type: "Movie", 
        cat: "romcom", 
    },

    "The Waterboy": {
        type: "Movie", 
        cat: "comedy", 
    },

    "The Wedding Planner": {
        type: "Movie", 
        cat: "drama", 
    },

    "Trick r Treat": {
        type: "Movie",
        cat: "drama",
    },

    "Vacation": {
        type: "Movie", 
        cat: "comedy", 
    },
}