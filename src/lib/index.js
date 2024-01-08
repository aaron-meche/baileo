// Local storage data access
export const storage = {
    read: function (location) {
        if (typeof window =="undefined") return

        if (storage.exists(location)) {
            return localStorage[location]
        } else {
            return ''
        }


    },

    write: function (location, value) {
        if (typeof window =="undefined") return

        localStorage[location] = value
    },

    clear: function() {
        if (typeof window =="undefined") return

        localStorage.clear()
    },

    exists: function (location) {
		if (typeof window =="undefined") return

        if (localStorage[location]) return true
		else return false
	}
}

// Shuffle Array
export function shuffle(array) {
    let length = array.length
    let canvas = array

    const genRanNum = (max_num) => {
        return Math.floor(Math.random() * max_num)
    }

    for (let i = 0; i < length; i++) {
        let rannum = genRanNum(length),
            currentItem = canvas[i],
            randomItem  = canvas[rannum]

        if (currentItem == randomItem) continue

        canvas[i] = randomItem
        canvas[rannum] = currentItem
    }

    return canvas
}

// Converts special characters to universal characters to communicate to file server
export function serverTypeConversion(string) {
    string = string.replaceAll('-', "'")
    string = string.replaceAll('()', "?")
    string = string.replaceAll('_', ".")

    return string
}

// Media JSON Database
export const mediaDB = [
    {
        title: "American Auto",
        type: "TV Show", 
        cat: "comedy", 
        seasons: [
            ["Pilot", "White Van", "Earning Call", "The 10k Car", "Millibank, IA", "Commercial", "Recall", "Employee Morale", "Charity Dinner", "Profile"],
            ["Crisis", "Most Hated CEO", "Celebrity", "Cost Cutting", "Going Green", "The Letter", "Young Designers", "Hack", "Night Out", "Passion Project", "Funeral", "Dealer Event", "Judgement Day"]
        ]
    },

    {
        title: "Family Guy",
        type: "TV Show", 
        cat: "comedy", 
        seasons: [
            ["Death Has a Shadow", "I Never Met the Dead Man", "Chitty Chitty Death Bang", "Mind Over Murder", "A Hero Sits Next Door", "The Son Also Draws", "Brian - Portrait of a Dog"],
            ["Peter, Peter, Caviar Eater", "Holy Crap", "Da Boom", "Brian in Love", "Love Thy Trophy", "Death Is a Bitch", "The King Is Dead", "I Am Peter, Hear Me Roar", "If I-m Dyin", "I-m Lyin", "Running Mates", "A Picture is Worth 1,000 Bucks", "Fifteen Minutes of Shame", "Road to Rhode Island", "Let-s Go to the Hop", "Dammit Janet", "There-s Something About Paulie", "He-s Too Sexy for His Fat", "E. Peterbus Unum", "The Story on Page One", "Wasted Talent", "Fore, Father"],
            ["The Thin White Line", "Brian Does Hollywood", "Mr. Griffin Goes to Washington", "One If by Clam, Two If by Sea", "And the Wiener Is...", "Death Lives", "Lethal Weapons", "The Kiss Seen Around the World", "Mr. Saturday Knight", "A Fish Out of Water", "Emission Impossible", "To Love and Die in Dixie", "Screwed the Pooch", "Peter Griffin: Husband, Father... Brother()", "Ready, Willing, and Disabled", "A Very Special Family Guy Freakin- Christmas", "Brian Wallows and Peter-s Swallows", "From Method to Madness", "Stuck Together, Torn Apart", "Road to Europe", "Family Guy Viewer Mail #1", "When You Wish Upon a Weinstein"],
            ["North by North Quahog", "Fast Times at Buddy Cianci Jr. High", "Blind Ambition", "Don-t Make Me Over", "The Cleveland-Loretta Quagmire", "Petarded", "Brian the Bachelor", "8 Simple Rules for Buying My Teenage Daughter", "Breaking Out Is Hard to Do", "Model Misbehavior", "Peter-s Got Woods", "Perfect Castaway", "Jungle Love", "PTV Show", "Brian Goes Back to College", "The Courtship of Stewie-s Father", "The Fat Guy Strangler", "The Father, the Son, and the Holy Fonz", "Brian Sings and Swings", "Patriot Games", "I Take Thee Quagmire", "Sibling Rivalry", "Deep Throats", "Peterotica", "You May Now Kiss the... Uh... Guy Who Receives", "Petergeist", "The Griffin Family History", "Stewie B. Goode", "Bang-o Was His Name-o", "Stu and Stewie-s Excellent Adventure"],
            ["Stewie Loves Lois", "Mother Tucker", "Hell Comes to Quahog", "Saving Private Brian", "Whistle While Your Wife Works", "Prick Up Your Ears", "Chick Cancer", "Barely Legal", "Road to Rupert", "Peter-s Two Dads", "The Tan Aquatic with Steve Zissou", "Airport -07", "Bill & Peter-s Bogus Journey", "No Meals on Wheels", "Boys Do Cry", "No Chris Left Behind", "It Takes a Village Idiot, and I Married One", "Meet the Quagmires"],
            ["Blue Harvest", "Movin- Out (Brian-s Song)", "Believe It or Not, Joe-s Walking on Air", "Stewie Kills Lois (Part 1)", "Lois Kills Stewie (Part 2)", "Padre de Familia", "Peter-s Daughter", "McStroke", "Back to the Woods", "Play It Again, Brian", "The Former Life of Brian", "Long John Peter"],
            ["Love, Blactually", "I Dream of Jesus", "Road to Germany", "Baby Not on Board", "The Man with Two Brians", "Tales of a Third Grade Nothing", "Ocean-s Three and a Half", "Family Gay", "The Juice Is Loose", "Fox-y Lady", "Not All Dogs Go to Heaven", "420", "Stew-Roids", "We Love You, Conrad", "Three Kings", "Peter-s Progress"],
            ["Road to the Multiverse", "Family Goy", "Spies Reminiscent of Us", "Brian-s Got a Brand New Bag", "Hannah Banana", "Quagmire-s Baby", "Jerome Is the New Black", "Dog Gone", "Business Guy", "Big Man on Hippocampus", "Dial Meg for Murder", "Extra Large Medium", "Go, Stewie, Go!", "Peter-assment", "Brian Griffin-s House of Payne", "April in Quahog", "Brian & Stewie", "Quagmire-s Dad", "The Splendid Source", "Something, Something, Something, Dark Side", "Partial Terms of Endearment"],
            ["And Then There Were Fewer", "Excellence in Broadcasting", "Welcome Back, Carter", "Halloween on Spooner Street", "Baby, You Knock Me Out", "Brian Writes a Bestseller", "Road to the North Pole", "New Kidney in Town", "And I-m Joyce Kinney", "Friends of Peter G.", "German Guy", "The Hand That Rocks the Wheelchair", "Trading Places", "Tiegs for Two", "Brothers & Sisters", "The Big Bang Theory", "Foreign Affairs", "It-s a Trap!"],
            ["Lottery Fever", "Seahorse Seashell Party", "Screams of Silence: The Story of Brenda Q", "Stewie Goes for a Drive", "Back to the Pilot", "Thanksgiving", "Amish Guy", "Cool Hand Peter", "Grumpy Old Man", "Meg and Quagmire", "The Blind Side", "Livin- on a Prayer", "Tom Tucker: The Man and His Dream", "Be Careful What You Fish For", "Burning Down the Bayit", "Killer Queen", "Forget-Me-Not", "You Can-t Do That on Television, Peter", "Mr. and Mrs. Stewie", "Leggo My Meg-O", "Tea Peter", "Family Guy Viewer Mail #2", "Internal Affairs"],
            ["Into Fat Air", "Ratings Guy", "The Old Man and the Big -C-", "Yug Ylimaf", "Joe-s Revenge", "Lois Comes Out of Her Shell", "Friends Without Benefits", "Jesus, Mary and Joseph!", "Space Cadet", "Brian-s Play", "The Giggity Wife", "Valentine-s Day in Quahog", "Chris Cross", "Call Girl", "Turban Cowboy", "12 and a Half Angry Men", "Bigfat", "Total Recall", "Save the Clam", "Farmer Guy", "Roads to Vegas", "No Country Club for Old Men"],
            ["Finders Keepers", "Vestigal Peter", "Quagmire-s Quagmire", "A Fistful of Meg", "Boppa-dee Bappa-dee", "Life of Brian", "Into Harmony-s Way", "Christmas Guy", "Peter Problems", "Grimm Job", "Brian-s a Bad Father", "Mom-s the Word", "3 Acts of God", "Fresh Heir", "Secondhand Spoke", "Herpe the Love Sore", "The Most Interesting Man in the World", "Baby Got Black", "Meg Stinks!", "He-s Bla-ack!", "Chap Stewie"],
            ["The Simpsons Guy", "The Book of Joe", "Baking Bad", "Brian the Closer", "Turkey Guys", "The 2000-Year-Old Virgin", "Stewie, Chris, & Brian-s Excellent Adventure", "Our Idiot Brian", "This Little Piggy", "Quagmire-s Mom", "Encyclopedia Griffin", "Stewie Is Enceinte", "Dr. C and the Women", "#JOLO", "Once Bitten", "Roasted Guy", "Fighting Irish", "Take My Wife"],
            ["Pilling Them Softly", "Papa Has a Rollin- Son", "Guy, Robot", "Peternormal Activity", "Peter, Chris, & Brian", "Peter-s Sister", "Hot Pocket-Dial", "Brokeback Swanson", "A Shot in the Dark", "Candy, Quahog Marshmallow", "The Peanut Butter Kid", "Scammed Yankees", "An App a Day", "Underage Peter", "A Lot Going on Upstairs", "The Heartbreak Dog", "Take a Letter", "The New Adventures of Old Tom", "Run Chris, Run"],
            ["The Boys in the Band", "Bookie of the Year", "American Gigg-olo", "Inside Family Guy", "Chris Has Got a Date, Date, Date, Date, Date", "Hot Shots", "High School English", "Carter and Tricia", "How the Griffin Stole Christmas", "Passenger Fatty-Seven", "Gronkowsbees", "Peter-s Def Jam", "The Finer Strings", "The Dating Game", "Cop and a Half-wit", "Saturated Fat Guy", "Peter-s Lost Youth", "The Peter Principal", "Dearly Deported", "A House Full of Peters"],
            ["Emmy-Winning Episode", "Foxx in the Men House", "Nanny Goats", "Follow The Money", "Three Doctors", "The D in Apartment 23", "Petey IV", "Crimes and Meg-s Demeanor", "Don-t Be a Dickens at Christmas", "Boy (Dog) Meets Girl", "Dog Bites Bear", "Send In Stewie, Please", "V Is For Mystery", "Veteran Guy", "The Woof of Wall Street", "Family Guy Through the Years", "Switch the Flip", "HTTPete", "The Unkindest Cut", "Are You There God() It-s Me, Peter"],
            ["Married... with Cancer", "Dead Dog Walking", "Pal Stewie", "Big Trouble in Little Quahog", "Regarding Carter", "Stand by Meg", "The Griffin Winter Games", "Con Heiress", "Pawtucket Pete", "Hefty Shades of Gray", "Trump Guy", "Bri, Robot", "Trans-Fat", "Family Guy Lite", "No Giggity, No Doubt", "You Can-t Handle the Booth!", "Island Adventure", "Throw It Away", "Girl, Internetted", "Adam West High"],
            ["Yacht Rocky", "Bri-da", "Absolutely Babulous", "Disney the Reboot", "Cat Fight", "Peter and Lois- Wedding", "Heart Burn", "Shanksgiving", "Christmas is Coming", "Connies Celica", "Short Cuts", "Undergrounded", "Rich Old Stewie", "The Movement", "Baby Stewie", "Start Me Up", "Coma Guy", "Better Off Meg", "Holly Bibble", "Movin in Principal Shepherd-s Song"],
        ]
    },

    {
        title: "Frenemies",
        type: "TV Show", 
        cat: "comedy", 
        seasons: [
            ["Trisha-s New Boyfriend Is Hila-s Brother", "Trisha-s Obsession With Jewish People", "Possible Our Last Episode", "Is Trisha Smarter Than A 5th Grader()", "Trisha & Ethan Have a Huge Fight & She Storms Out", "Trisha & Ethan Reconcile... Kind of", "Couples Therapy With Dr. Drew", "Trisha & Ethan Fight About The Election", "Cheese Mukbang Disaster", "Trisha vs Charli & Dixie D-Amelio", "Trisha & Ethan Do Goat Yoga & Carpool Karaoke", "Trisha Was Kidnapped At Gunpoint", "Trisha Quits the Podcast & Storms Out", "The Fate Of Frenemies With Dr. Drew", "We Made The Only Honest Award Show - Introducing The Steamies", "Frenemies Is Under Attack", "Trisha Was Bullied and It-s NOT Okay!", "Pop Culture Trivia War & Friendship With Shane Is Over", "The David Dobrik & Jason Nash Episodes", "Newlywed Game (Trish & Moses vs Ethan & Hila)", "Erased David Dobrik Footage Proves Trisha Was Right All Along", "Ethan & Trisha Do An Athletics Competition", "David Dobrik & James Charles Drama Apocalypse", "Jewish Trivia Contest, David Dobrik & Scotty Sire", "David Dobrik-s Lawyers Go After Trisha & Cooking Competiton", "Responding To Jeff Wittek & New David Dobrik Footage", "Jeff Wittek Interview Fallout", "Responding To David Dobrik-s Apology", "Trisha-s Epic Passover Dinner At Ethan-s", "Trisha & Ethan Do Oddly Satisfying Trends", "Khloe Kardashian Photo Drama & Pizza Eating Contest", "James Charles Entire Channel Demonetized by YouTube", "Jeff Wittek, David Dobrik, & TRIVIA!", "Trisha-s Birthday Celebration", "[VLOG 1] Trisha & Ethan Go To Disneyland For Her Birthday", "Ethan Embarrassed Himself In Front Of Trisha-s Family", "Trisha & Ethan Got Bullied & Are Fighting Back", "Taking Trisha To Meme School", "[VLOG 2] Trisha & Ethan Hijack A Hollywood Tour Bus", "PREGNANCY ANNOUNCEMENT!", "Talking About Gabbie Hanna"],
        ]
    },

    {
        title: "Parks and Recreation",
        type: "TV Show", 
        cat: "comedy classic", 
        seasons: [
            ["Pilot", "Canvassing", "The Reporter", "Boys- Club", "The Banquet", "Rock Show"],
            ["Pawnee Zoo", "The Stakeout", "Beauty Pageant", "Practice Date", "Sister City", "Kaboom", "Greg Pitkins", "Ron and Tammy", "The Camel", "Hunting Trip", "Tom-s Divorce", "Christmas Scandal", "The Set Up", "Leslie-s House", "Sweetums", "Galentine-s Day", "Woman of the Year", "The Possum", "Park Safety", "Summer Catalog", "94 Meetings", "Telethon", "The Master Plan", "Freddy Spaghetti"],
            ["Go Big or Go Home", "Flu Season", "Time Capsule", "Ron and Tammy Part Two", "Media Blitz", "Indianapolis", "Harvest Festival", "Camping", "Andy and April-s Fancy Party", "Soulmates", "Jerry-s Painting", "Eagleton", "The Fight", "Road Trip", "The Bubble", "Li-l Sebastian"],
            ["I-m Leslie Knope", "Ron and Tammys", "Born and Raised", "Pawnee Rangers", "Meet n Greet", "End of the World", "The Treaty", "Smallest Park", "The Trial of Leslie Know", "Citizen Knope", "The Comeback Kid", "Campaign Ad", "Bowling for Votes", "Operation Ann", "Dave Returns", "Sweet Sixteen", "Campaign Shake-Up", "Lucky", "Live Ammo", "The Debate", "Bus Tour", "Win, Lose, or Draw"],
            ["Ms. Knope Goes to Washington", "Soda Tax", "How a Bill Becomes a Law", "Sex Education", "Halloween Suprise", "Ben-s Parents", "Leslie v April", "Pawnee Commons", "Ron and Diane", "Two Parties", "Women in Garbage", "Ann-s Decision", "Emergency Response", "Leslie and Ben", "Correspondent-s Lunch", "Bailout", "Partridge", "Animal Control", "Article Two", "Jerry-s Retirement", "Swing Vote", "Are You Better Off"],
            ["London", "The Pawnee-Eagleton Tip Off Classic", "DoppelgaÌˆngers", "Gin it Up!", "Filibuster", "Recall Vote", "Fluoride", "The Cones of Dunshire", "Second Chunce", "New Beginnings", "Farmers Market", "Ann and Chris", "Anniversaries", "The Wall", "New Slogan", "Galentine-s Day", "Prom", "Flu Season 2", "One in 8,000", "Moving Up"],
            ["2017", "Ron and Jammy", "William Henry Harrison", "Leslie and Ron", "Gryzzlbox", "Save JJ-s", "Donna and Joe", "Ms. Ludgate-Dwyer Goes to Washington", "Pie-Mary", "The Johnny Karate Super Awesome Musical Explosion Show", "Two Funerals", "One Last Ride"],
        ]
    },

    {
        title: "Squid Game",
        type: "TV Show", 
        cat: "drama", 
        seasons: [
            ["Red Light", "Green Light", "Hell", "The Man with the Umbrella", "Stick to the Team", "A Fair World", "Gganbu", "VIPS", "Front Man", "One Lucky Day"],
        ]
    },

    {
        title: "Sherlock",
        type: "TV Show", 
        cat: "drama", 
        seasons: [
            ["A Study in Pink", "The Blind Banker", "The Great Game"],
            ["A Scandal in Belgravia", "The Hounds of Baskerville", "The Reichenbach Fall"],
            ["The Empty Hearse", "The Sign of Three", "His Last Vow"],
            ["The Six Thatchers", "The Lying Detective", "The Final Problem"],
        ]
    },

    {
        title: "Superstore",
        type: "TV Show",
        cat: "comedy classic",
        seasons: [
            ["Pilot","Magazine Profile","Shots and Salsa","Mannequin","Shoplifter","Secret Shopper","Color Wars","Wedding Day Sale","All-Nighter","Demotion","Labor"],
            ["Olympics","Strike","Back to Work","Guns, Pills and Birds","Spokesman Scandal","Dog Adoption Day","Halloween Theft","Election Day","Seasonal Help","Black Friday","Lost and Found","Rebranding","Ladies- Lunch","Valentine-s Day","Super Hot Store","Wellness Fair","Integrity Award","Mateo-s Last Day","Glenn-s Kids","Spring Cleaning","Cheyenne-s Wedding","Tornado"],
            ["Grand Re-Opening","Brett-s Dead","Part-Time Hires","Workplace Bullying","Sal-s Dead","Health Fund","Christmas Eve","Viral Video","Golden Globes Party","High Volume Store","Angels and Mermaids","Groundhog Day","Video Game Release","Safety Training","Amnesty","Target","District Manager","Local Vendors Day","Lottery","Gender Reveal","Aftermath","Town Hall"],
            ["Back to School","Baby Shower","Toxic Workplace","Costume Competition","Delivery Day","Maternity Leave","New Initiative","Managers- Conference","Shadowing Glenn","Cloud 9 Academy","Steps Challenge","Blizzard","Love Birds","Minor Crimes","Salary","Easter","Quincea\u00f1era","Cloud Green","Scanners","#Cloud9Fail","Sandra-s Fight","Employee Appreciation Day"],
            ["Cloud 9.0","Testimonials","Forced Hire","Mall Closing","Self-Care","Trick-or-Treat","Shoplifter Rehab","Toy Drive","Curbside Pickup","Negotiations","Lady Boss","Myrtle","Favoritism","Sandra-s Wedding","Cereal Bar","Employee App","Zephra Cares","Playdate","Carol-s Back","Customer Safari","California (Part 1)"],
            ["Essential","California (Part 2)","Floor Supervisor","Prize Wheel","Hair Care Products","Biscuit","The Trough","Ground Rules","Conspiracy","Depositions","Deep Cleaning","Customer Satisfaction","Lowell Anderson","Perfect Store","All Sales Final"],
        ]
    },

    {
        title: "The Office",
        type: "TV Show", 
        cat: "comedy classic", 
        seasons: [
            ["Pilot", "Diversity Day", "Health Care", "The Alliance", "Basketball", "Hot Girl"],
            ["The Dundies", "Sexual Harassment", "Office Olympics", "The Fire", "Halloween", "The Fight", "The Client", "Performance Review", "Email Surveillance", "Christmas Party", "Booze Cruise", "The Injury", "The Secret", "The Carpet", "Boys and Girls", "Valentine-s Day", "Dwight-s Speech", "Take Your Daughter to Work Day", "Michael-s Birthday", "Drug Testing", "Conflict Resolution", "Casino Night"],
            ["Gay Witch Hunt", "The Convention", "The Coup", "Grief Counseling", "Initiation", "Diwali", "Branch Closing", "The Merger", "The Convict", "A Benihana Christmas", "Back From Vacation", "Traveling Salesman", "The Return", "Ben Franklin", "Phyllis- Wedding", "Business School", "Cocktails", "The Negotiation", "Safety Training", "Product Recall", "Women-s Appreciation", "Beach Games", "The Job"],
            ["Fun Run", "Dunder Mifflin Infinity", "Launch Party", "Money", "Local Ad", "Branch Wars", "Survivor Man", "The Deposition", "Dinner Party", "Chair Model", "Night Out", "Did I Stutter", "Job Fair", "Goodbye, Toby"],
            ["Weight Loss", "Business Ethics", "Baby Shower", "Crime AID", "Employee Transfer", "Customer Survey", "Business Trip", "Frame Toby", "The Surplus", "Moroccan Christmas", "The Duel", "Prince Family Paper", "Stress Relief", "Lecture Circuit P1", "Lecture Circuit P2", "Blood Drive", "Golden Ticket", "New Boss", "Two Weeks", "Dream Team", "Michael Scott Paper Company", "Heavy Competition", "Broke", "Casual Friday", "Cafe Disco", "Company Picnic"],
            ["Gossip", "The Meeting", "The Promotion", "Niagra", "Mafia", "The Lover", "Koi Pond", "Double Date", "Murder", "Shareholder Meeting", "Scott-s Tots", "Secret Santa", "The Banker", "Sabre", "The Manager and the Salesman", "The Delivery", "St. Patrick-s Day", "New Leads", "Happy Hour", "Secretary-s Day", "Body Language", "The Cover Up", "The Chump", "Whistleblower"],
            ["Nepotism", "Counseling", "Andy-s Play", "Sex Ed", "The Sting", "Costume Contest", "Christening", "Viewing Party", "WUPHF.com", "China", "Classy Christmas", "Ultimatum", "The Seminar", "The Search", "PDA", "Threat Level Midnight", "Todd Packer", "Garage Sale", "Training Day", "Michael-s Last Dundies", "Goodbye, Michael", "The Inner Circle", "Dwight K. Schrute, (Acting) Manager", "Search Committee"],
            ["The List", "The Incentive", "Lotto", "Garden Party", "Spooked", "Doomsday", "Pam-s Replacement", "Gettysburg", "Mrs. California", "Christmas Wishes", "Trivia", "Pool Party", "Jury Duty", "Special Project", "Tallahassee", "After Hours", "Test the Store", "Last Day in Florida", "Get the Girl", "Welcome Party", "Angry Andy", "Fundraiser", "Turf War", "Free Family Portrait Studio"],
            ["New Guys", "Roy-s Wedding", "Andy-s Ancestry", "Work Bus", "Here Comes Treble", "The Boat", "The Whale", "The Target", "Dwight Christmas", "Lice", "Suit Warehouse", "Customer Loyalty", "Junior Salesman", "Vandalism", "Couples Discount", "Moving On", "The Farm", "Promos", "Stairmageddon", "Paper Airplane", "Livin- The Dream", "AARM", "Finale"],
        ]
    },

    {
        title: "21 Jump Street",
        type: "Movie",
        cat: "comedy classic"
    },

    {
        title: "A Quiet Place",
        type: "Movie",
        cat: "horror"
    },

    {
        title: "American Pie",
        type: "Movie",
        cat: "comedy"
    },

    {
        title: "American Psycho",
        type: "Movie", 
        cat: "drama horror",
    },

    {
        title: "Anchorman",
        type: "Movie",
        cat: "comedy"
    },

    {
        title: "Anchorman 2",
        type: "Movie",
        cat: "comedy"
    },

    {
        title: "Avengers ENDGAME",
        type: "Movie",
        cat: "marvel",
    },

    {
        title: "Bird Box",
        type: "Movie",
        cat: "horror",
    },

    {
        title: "Black Panther",
        type: "Movie",
        cat: "marvel",
    },

    {
        title: "Cars",
        type: "Movie",
        cat: "animation"
    },

    {
        title: "Cars 2",
        type: "Movie", 
        cat: "animation", 
    },

    {
        title: "Cars 3",
        type: "Movie", 
        cat: "animation", 
    },

    {
        title: "Central Intelligence",
        type: "Movie",
        cat: "comedy classic",
    },

    {
        title: "Clueless",
        type: "Movie", 
        cat: "comedy", 
    },

    {
        title: "Coraline",
        type: "Movie",
        cat: "animation horror", 
    },

    {
        title: "Daddys Home",
        type: "Movie",
        cat: "christmas comedy"
    },

    {
        title: "Daddys Home 2",
        type: "Movie", 
        cat: "christmas comedy", 
    },

    {
        title: "Despicable Me",
        type: "Movie", 
        cat: "animation", 
    },

    {
        title: "Despicable Me 2",
        type: "Movie", 
        cat: "animation", 
    },

    {
        title: "Despicable Me 3",
        type: "Movie", 
        cat: "animation", 
    },

    {
        title: "Dumb and Dumber",
        type: "Movie", 
        cat: "comedy", 
    },

    {
        title: "Dumb and Dumber To",
        type: "Movie", 
        cat: "comedy", 
    },

    {
        title: "Elf",
        type: "Movie", 
        cat: "christmas comedy", 
    },

    {
        title: "Five Nights at Freddys",
        type: "Movie",
        cat: "horror"
    },

    {
        title: "Game Night",
        type: "Movie",
        cat: "comedy classic"
    },

    {
        title: "Get Hard",
        type: "Movie",
        cat: "comedy classic"
    },

    {
        title: "Halloween",
        type: "Movie",
        cat: "horror"
    },

    {
        title: "Hidden Figures",
        type: "Movie", 
        cat: "drama historical",
    },

    {
        title: "Horrible Bosses",
        type: "Movie",
        cat: "comedy classic"
    },

    {
        title: "House",
        type: "Movie",
        cat: "drama horror comedy"
    },

    {
        title: "Interstellar",
        type: "Movie",
        cat: "drama",
    },

    {
        title: "It - Chapter 2",
        type: "Movie",
        cat: "horror"
    },

    {
        title: "It",
        type: "Movie",
        cat: "horror"
    },

    {
        title: "Legally Blonde",
        type: "Movie",
        cat: "comedy"
    },

    {
        title: "Mean Girls",
        type: "Movie", 
        cat: "comedy classic", 
    },

    {
        title: "Mean Girls 2",
        type: "Movie", 
        cat: "comedy", 
    },

    {
        title: "Minions The Rise of Gru",
        type: "Movie", 
        cat: "animation", 
    },

    {
        title: "Minions",
        type: "Movie", 
        cat: "animation", 
    },

    {
        title: "Miss Congeniality",
        type: "Movie", 
        cat: "comedy", 
    },

    {
        title: "No Country For Old Men",
        type: "Movie",
        cat: "horror"
    },

    {
        title: "Old School",
        type: "Movie",
        cat: "comedy classic",
    },

    {
        title: "Ratatouille",
        type: "Movie", 
        cat: "animation", 
    },

    {
        title: "Spider Man Far From Home",
        type: "Movie", 
        cat: "marvel", 
    },

    {
        title: "Spider Man Homecoming",
        type: "Movie", 
        cat: "marvel", 
    },

    {
        title: "Spider Man No Way Home",
        type: "Movie", 
        cat: "marvel", 
    },

    {
        title: "Step Brothers",
        type: "Movie", 
        cat: "comedy classic", 
    },

    {
        title: "Superbad",
        type: "Movie",
        cat: "comedy classic"
    },

    {
        title: "Ted",
        type: "Movie", 
        cat: "comedy classic", 
    },

    {
        title: "Ted 2",
        type: "Movie", 
        cat: "comedy classic", 
    },

    {
        title: "Texas Chainsaw Massacre",
        type: "Movie",
        cat: "horror",
    },

    {
        title: "The Amazing Spider Man 2",
        type: "Movie", 
        cat: "marvel", 
    },

    {
        title: "The Bucket List",
        type: "Movie",
        cat: "drama"
    },

    {
        title: "The Cat In The Hat",
        type: "Movie",
        cat: "comedy"
    },

    {
        title: "The Conjuring",
        type: "Movie",
        cat: "horror",
    },

    {
        title: "The Exorcist",
        type: "Movie",
        cat: "horror",
    },

    {
        title: "The Founder",
        type: "Movie",
        cat: "drama historical",
    },

    {
        title: "The Hangover",
        type: "Movie",
        cat: "comedy classic"
    },

    {
        title: "The Hangover Part II",
        type: "Movie",
        cat: "comedy classic"
    },

    {
        title: "The Hangover Part III",
        type: "Movie",
        cat: "comedy classic"
    },

    {
        title: "The Incredible Hulk",
        type: "Movie", 
        cat: "marvel", 
    },

    {
        title: "The Intern",
        type: "Movie",
        cat: "drama"
    },

    {
        title: "The Interview",
        type: "Movie",
        cat: "comedy classic"
    },

    {
        title: "The Notebook",
        type: "Movie", 
        cat: "drama", 
    },

    {
        title: "The Other Guys",
        type: "Movie", 
        cat: "comedy classic", 
    },

    {
        title: "The Proposal",
        type: "Movie", 
        cat: "romcom", 
    },

    {
        title: "The Shining",
        type: "Movie",
        cat: "horror"
    },

    {
        title: "The Waterboy",
        type: "Movie", 
        cat: "comedy", 
    },

    {
        title: "The Witch",
        type: "Movie",
        cat: "horror"
    },

    {
        title: "The Wolf of Wall Street",
        type: "Movie",
        cat: "comedy drama"
    },

    {
        title: "Trick r Treat",
        type: "Movie",
        cat: "horror",
    },

    {
        title: "Vacation",
        type: "Movie", 
        cat: "comedy", 
    },

    {
        title: "Venom",
        type: "Movie",
        cat: 'marvel'
    },

    {
        title: "Wedding Crashers",
        type: "Movie",
        cat: "comedy classic"
    },

    {
        title: "Were the Millers",
        type: "Movie",
        cat: "comedy classic"
    },
]