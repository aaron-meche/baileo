export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon 2.png","favicon.png","icons/camera.svg","icons/close.svg","icons/complete.svg","icons/download.svg","icons/history.svg","icons/home.svg","icons/infinity.svg","icons/left.svg","icons/light.svg","icons/menu.svg","icons/next.svg","icons/play.svg","icons/profile.svg","icons/right.svg","icons/search.svg","icons/settings.svg","icons/shuffle.svg","icons/tv.svg","icons/video.svg","logo.png","thumbnails/American Psycho.png","thumbnails/Avengers ENDGAME.png","thumbnails/Cars 2.png","thumbnails/Cars 3.png","thumbnails/Clueless.png","thumbnails/Coraline.png","thumbnails/Daddys Home 2.png","thumbnails/Despicable Me 2.png","thumbnails/Despicable Me 3.png","thumbnails/Despicable Me.png","thumbnails/Dumb and Dumber To.png","thumbnails/Dumb and Dumber.png","thumbnails/Elf.png","thumbnails/Family Guy.png","thumbnails/Frenemies.png","thumbnails/Hidden Figures.png","thumbnails/Just Friends.png","thumbnails/Just Married.png","thumbnails/Knives Out.png","thumbnails/Legally Blonde.png","thumbnails/Mean Girls 2.png","thumbnails/Mean Girls.png","thumbnails/Minions The Rise of Gru.png","thumbnails/Minions.png","thumbnails/Miss Congeniality.png","thumbnails/Modern Family.png","thumbnails/Movie 43.png","thumbnails/Parks and Recreation.png","thumbnails/Pitch Perfect.png","thumbnails/Ratatouille.png","thumbnails/Sherlock.png","thumbnails/Spider Man Far From Home.png","thumbnails/Spider Man Homecoming.png","thumbnails/Spider Man No Way Home.png","thumbnails/Squid Game.png","thumbnails/Step Brothers.png","thumbnails/Superstore.png","thumbnails/The Amazing Spider Man 2.png","thumbnails/The Devil Wears Prada.png","thumbnails/The Holiday.png","thumbnails/The Incredible Hulk.png","thumbnails/The Notebook.png","thumbnails/The Office.png","thumbnails/The Proposal.png","thumbnails/The Waterboy.png","thumbnails/The Wedding Planner.png","thumbnails/Trick r Treat.png","thumbnails/Vacation.png","thumbnails/Wanda Vision.png","video.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.906c4c0a.js","app":"_app/immutable/entry/app.d2456612.js","imports":["_app/immutable/entry/start.906c4c0a.js","_app/immutable/chunks/index.435cddde.js","_app/immutable/chunks/singletons.c9616804.js","_app/immutable/entry/app.d2456612.js","_app/immutable/chunks/index.435cddde.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js')
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
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/player",
				pattern: /^\/player\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/search",
				pattern: /^\/search\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/watch",
				pattern: /^\/watch\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
