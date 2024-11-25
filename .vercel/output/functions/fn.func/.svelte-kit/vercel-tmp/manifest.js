export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["x-logo.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.DypQxCzw.js","app":"_app/immutable/entry/app.ClI7eEiy.js","imports":["_app/immutable/entry/start.DypQxCzw.js","_app/immutable/chunks/vendor.DPX5suGc.js","_app/immutable/entry/app.ClI7eEiy.js","_app/immutable/chunks/vendor.DPX5suGc.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js'))
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
				id: "/api/twitter/mentions",
				pattern: /^\/api\/twitter\/mentions\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/twitter/mentions/_server.ts.js'))
			},
			{
				id: "/api/twitter/rate-limit",
				pattern: /^\/api\/twitter\/rate-limit\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/twitter/rate-limit/_server.ts.js'))
			},
			{
				id: "/api/twitter/reply",
				pattern: /^\/api\/twitter\/reply\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/twitter/reply/_server.ts.js'))
			},
			{
				id: "/api/twitter/token",
				pattern: /^\/api\/twitter\/token\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/twitter/token/_server.ts.js'))
			},
			{
				id: "/api/twitter/user",
				pattern: /^\/api\/twitter\/user\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/twitter/user/_server.ts.js'))
			},
			{
				id: "/auth/callback",
				pattern: /^\/auth\/callback\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
