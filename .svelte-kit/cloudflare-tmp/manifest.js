export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","action/American Psycho.jpeg","action/Coraline.jpeg","banks/American Express.png","banks/Capital One.png","banks/Chase.png","banks/Discover.png","banks/Lexus Financial.png","banks/Synchrony.png","banks/US Bank.png","banks/Wells Fargo.png","favicon.png","icons/book.svg","icons/close.svg","icons/coins.svg","icons/compass-fill.svg","icons/compass.svg","icons/credit-card.svg","icons/delete.svg","icons/dog.png","icons/gear.svg","icons/history.svg","icons/left.svg","icons/list.svg","icons/logo.png","icons/love.svg","icons/moon.svg","icons/play.svg","icons/right.svg","icons/search.svg","icons/trash.svg","icons/unlove.svg","icons/video.svg","logo.png","thumbnails/21 Jump Street.jpeg","thumbnails/A Quiet Place.jpeg","thumbnails/American Auto.jpeg","thumbnails/American Pie.jpeg","thumbnails/American Psycho.jpeg","thumbnails/Anchorman 2.jpeg","thumbnails/Anchorman.jpeg","thumbnails/Avengers ENDGAME.jpeg","thumbnails/Bird Box.jpeg","thumbnails/Black Panther.jpeg","thumbnails/Cars 2.jpeg","thumbnails/Cars 3.jpeg","thumbnails/Cars.jpeg","thumbnails/Central Intelligence.jpeg","thumbnails/Clueless.jpeg","thumbnails/Coraline.jpeg","thumbnails/Cowboy Bebop.jpeg","thumbnails/Daddys Home 2.jpeg","thumbnails/Daddys Home.jpeg","thumbnails/Despicable Me 2.jpeg","thumbnails/Despicable Me 3.jpeg","thumbnails/Despicable Me.jpeg","thumbnails/Dumb and Dumber To.jpeg","thumbnails/Dumb and Dumber.jpeg","thumbnails/Elf.jpeg","thumbnails/Family Guy.jpeg","thumbnails/Ferris Buellers Day Off.jpeg","thumbnails/Fight Club.jpeg","thumbnails/Five Nights at Freddys.jpeg","thumbnails/Frenemies.jpeg","thumbnails/Game Night.jpeg","thumbnails/Get Hard.jpeg","thumbnails/Grand Budapest Hotel.jpeg","thumbnails/Halloween.jpeg","thumbnails/Hidden Figures.jpeg","thumbnails/Horrible Bosses.jpeg","thumbnails/House.jpeg","thumbnails/Interstellar.jpeg","thumbnails/It - Chapter 2.jpeg","thumbnails/It.jpeg","thumbnails/Just Friends.jpeg","thumbnails/Just Married.jpeg","thumbnails/Knives Out.jpeg","thumbnails/Legally Blonde.jpeg","thumbnails/Mean Girls 2.jpeg","thumbnails/Mean Girls.jpeg","thumbnails/Minions The Rise of Gru.jpeg","thumbnails/Minions.jpeg","thumbnails/Miss Congeniality.jpeg","thumbnails/Modern Family.jpeg","thumbnails/No Country For Old Men.jpeg","thumbnails/Old School.jpeg","thumbnails/Parks and Recreation.jpeg","thumbnails/Pitch Perfect.jpeg","thumbnails/Ratatouille.jpeg","thumbnails/Saving Private Ryan.jpeg","thumbnails/Sherlock.jpeg","thumbnails/Spider Man Far From Home.jpeg","thumbnails/Spider Man Homecoming.jpeg","thumbnails/Spider Man No Way Home.jpeg","thumbnails/Spy.jpeg","thumbnails/Squid Game.jpeg","thumbnails/Step Brothers.jpeg","thumbnails/Superbad.jpeg","thumbnails/Superstore.jpeg","thumbnails/Ted 2.jpeg","thumbnails/Ted.jpeg","thumbnails/Texas Chainsaw Massacre.jpeg","thumbnails/The Amazing Spider Man 2.jpeg","thumbnails/The Bucket List.jpeg","thumbnails/The Cat In The Hat.jpeg","thumbnails/The Conjuring.jpeg","thumbnails/The Devil Wears Prada.jpeg","thumbnails/The Exorcist.jpeg","thumbnails/The Founder.jpeg","thumbnails/The Hangover Part II.jpeg","thumbnails/The Hangover Part III.jpeg","thumbnails/The Hangover.jpeg","thumbnails/The Holiday.jpeg","thumbnails/The Incredible Hulk.jpeg","thumbnails/The Intern.jpeg","thumbnails/The Interview.jpeg","thumbnails/The Notebook.jpeg","thumbnails/The Office.jpeg","thumbnails/The Other Guys.jpeg","thumbnails/The Proposal.jpeg","thumbnails/The Shining.jpeg","thumbnails/The Truman Show.jpeg","thumbnails/The Waterboy.jpeg","thumbnails/The Wedding Planner.jpeg","thumbnails/The Witch.jpeg","thumbnails/The Wolf of Wall Street.jpeg","thumbnails/Trick r Treat.jpeg","thumbnails/Vacation.jpeg","thumbnails/Venom.jpeg","thumbnails/Wanda Vision.jpeg","thumbnails/Wedding Crashers.jpeg","thumbnails/Were the Millers.jpeg","thumbnails/old (large)/A Quiet Place.png","thumbnails/old (large)/American Psycho.png","thumbnails/old (large)/Avengers ENDGAME.png","thumbnails/old (large)/Bird Box.jpeg","thumbnails/old (large)/Black Panther.jpeg","thumbnails/old (large)/Cars 2.png","thumbnails/old (large)/Cars 3.png","thumbnails/old (large)/Clueless.png","thumbnails/old (large)/Coraline.png","thumbnails/old (large)/Daddys Home 2.png","thumbnails/old (large)/Despicable Me 2.png","thumbnails/old (large)/Despicable Me 3.png","thumbnails/old (large)/Despicable Me.png","thumbnails/old (large)/Dumb and Dumber To.png","thumbnails/old (large)/Dumb and Dumber.png","thumbnails/old (large)/Elf.png","thumbnails/old (large)/Family Guy.png","thumbnails/old (large)/Frenemies.png","thumbnails/old (large)/Hidden Figures.png","thumbnails/old (large)/Interstellar.jpeg","thumbnails/old (large)/It - Chapter 2.jpeg","thumbnails/old (large)/It.png","thumbnails/old (large)/Just Friends.png","thumbnails/old (large)/Just Married.png","thumbnails/old (large)/Knives Out.png","thumbnails/old (large)/Legally Blonde.png","thumbnails/old (large)/Mean Girls 2.png","thumbnails/old (large)/Mean Girls.png","thumbnails/old (large)/Minions The Rise of Gru.png","thumbnails/old (large)/Minions.png","thumbnails/old (large)/Miss Congeniality.png","thumbnails/old (large)/Modern Family.png","thumbnails/old (large)/Parks and Recreation.png","thumbnails/old (large)/Pitch Perfect.png","thumbnails/old (large)/Ratatouille.png","thumbnails/old (large)/Sherlock.png","thumbnails/old (large)/Spider Man Far From Home.png","thumbnails/old (large)/Spider Man Homecoming.png","thumbnails/old (large)/Spider Man No Way Home.png","thumbnails/old (large)/Squid Game.png","thumbnails/old (large)/Step Brothers.png","thumbnails/old (large)/Superstore.png","thumbnails/old (large)/Ted 2.jpeg","thumbnails/old (large)/Ted.jpeg","thumbnails/old (large)/Texas Chainsaw Massacre.jpeg","thumbnails/old (large)/The Amazing Spider Man 2.png","thumbnails/old (large)/The Conjuring.jpeg","thumbnails/old (large)/The Devil Wears Prada.png","thumbnails/old (large)/The Exorcist.jpeg","thumbnails/old (large)/The Founder.jpeg","thumbnails/old (large)/The Holiday.png","thumbnails/old (large)/The Incredible Hulk.png","thumbnails/old (large)/The Intern.png","thumbnails/old (large)/The Notebook.png","thumbnails/old (large)/The Office.png","thumbnails/old (large)/The Proposal.png","thumbnails/old (large)/The Waterboy.png","thumbnails/old (large)/The Wedding Planner.png","thumbnails/old (large)/The Witch.jpeg","thumbnails/old (large)/Trick r Treat.png","thumbnails/old (large)/Vacation.png","thumbnails/old (large)/Venom.jpeg","thumbnails/old (large)/Wanda Vision.png"]),
	mimeTypes: {".jpeg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.3dbff448.js","app":"_app/immutable/entry/app.0763173b.js","imports":["_app/immutable/entry/start.3dbff448.js","_app/immutable/chunks/scheduler.e80ae01c.js","_app/immutable/chunks/singletons.c8208491.js","_app/immutable/chunks/index.e0bf5ff3.js","_app/immutable/chunks/paths.e70e99f1.js","_app/immutable/entry/app.0763173b.js","_app/immutable/chunks/scheduler.e80ae01c.js","_app/immutable/chunks/index.b2ac34d8.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js')),
			__memo(() => import('../output/server/nodes/10.js')),
			__memo(() => import('../output/server/nodes/11.js')),
			__memo(() => import('../output/server/nodes/12.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/advai",
				pattern: /^\/advai\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/credit",
				pattern: /^\/credit\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/episode-selector",
				pattern: /^\/episode-selector\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/insomnia",
				pattern: /^\/insomnia\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/library",
				pattern: /^\/library\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/music",
				pattern: /^\/music\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/new",
				pattern: /^\/new\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/proto",
				pattern: /^\/proto\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/search",
				pattern: /^\/search\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/watch",
				pattern: /^\/watch\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

export const prerendered = new Set([]);
