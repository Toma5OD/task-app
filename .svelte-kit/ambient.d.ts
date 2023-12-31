
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const npm_command: string;
	export const SESSION_MANAGER: string;
	export const npm_config_userconfig: string;
	export const COLORTERM: string;
	export const npm_config_cache: string;
	export const HISTCONTROL: string;
	export const XDG_MENU_PREFIX: string;
	export const HOSTNAME: string;
	export const HISTSIZE: string;
	export const NODE: string;
	export const JAVA_HOME: string;
	export const SSH_AUTH_SOCK: string;
	export const COLOR: string;
	export const npm_config_local_prefix: string;
	export const SDKMAN_CANDIDATES_DIR: string;
	export const XMODIFIERS: string;
	export const DESKTOP_SESSION: string;
	export const SSH_AGENT_PID: string;
	export const npm_config_globalconfig: string;
	export const LMOD_DIR: string;
	export const EDITOR: string;
	export const PWD: string;
	export const LOGNAME: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XDG_SESSION_TYPE: string;
	export const MODULESHOME: string;
	export const MANPATH: string;
	export const npm_config_init_module: string;
	export const SYSTEMD_EXEC_PID: string;
	export const _: string;
	export const XAUTHORITY: string;
	export const WINDOWPATH: string;
	export const GDM_LANG: string;
	export const HOME: string;
	export const USERNAME: string;
	export const LANG: string;
	export const LS_COLORS: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const npm_package_version: string;
	export const VTE_VERSION: string;
	export const LMOD_SETTARG_FULL_SUPPORT: string;
	export const GNOME_TERMINAL_SCREEN: string;
	export const M2_HOME: string;
	export const LMOD_VERSION: string;
	export const INIT_CWD: string;
	export const npm_lifecycle_script: string;
	export const MODULEPATH_ROOT: string;
	export const NVM_DIR: string;
	export const MOZ_GMP_PATH: string;
	export const XDG_SESSION_CLASS: string;
	export const LMOD_PKG: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const npm_config_prefix: string;
	export const LESSOPEN: string;
	export const USER: string;
	export const GNOME_TERMINAL_SERVICE: string;
	export const SDKMAN_DIR: string;
	export const DISPLAY: string;
	export const LMOD_ROOT: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const BASH_ENV: string;
	export const LMOD_sys: string;
	export const QT_IM_MODULE: string;
	export const SDKMAN_CANDIDATES_API: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const XDG_RUNTIME_DIR: string;
	export const DEBUGINFOD_URLS: string;
	export const npm_package_json: string;
	export const KDEDIRS: string;
	export const XDG_DATA_DIRS: string;
	export const npm_config_noproxy: string;
	export const PATH: string;
	export const npm_config_metrics_registry: string;
	export const npm_config_node_gyp: string;
	export const MODULEPATH: string;
	export const GDMSESSION: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_config_python: string;
	export const SDKMAN_PLATFORM: string;
	export const npm_config_global_prefix: string;
	export const LMOD_CMD: string;
	export const MAIL: string;
	export const npm_node_execpath: string;
	export const OLDPWD: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		npm_command: string;
		SESSION_MANAGER: string;
		npm_config_userconfig: string;
		COLORTERM: string;
		npm_config_cache: string;
		HISTCONTROL: string;
		XDG_MENU_PREFIX: string;
		HOSTNAME: string;
		HISTSIZE: string;
		NODE: string;
		JAVA_HOME: string;
		SSH_AUTH_SOCK: string;
		COLOR: string;
		npm_config_local_prefix: string;
		SDKMAN_CANDIDATES_DIR: string;
		XMODIFIERS: string;
		DESKTOP_SESSION: string;
		SSH_AGENT_PID: string;
		npm_config_globalconfig: string;
		LMOD_DIR: string;
		EDITOR: string;
		PWD: string;
		LOGNAME: string;
		XDG_SESSION_DESKTOP: string;
		XDG_SESSION_TYPE: string;
		MODULESHOME: string;
		MANPATH: string;
		npm_config_init_module: string;
		SYSTEMD_EXEC_PID: string;
		_: string;
		XAUTHORITY: string;
		WINDOWPATH: string;
		GDM_LANG: string;
		HOME: string;
		USERNAME: string;
		LANG: string;
		LS_COLORS: string;
		XDG_CURRENT_DESKTOP: string;
		npm_package_version: string;
		VTE_VERSION: string;
		LMOD_SETTARG_FULL_SUPPORT: string;
		GNOME_TERMINAL_SCREEN: string;
		M2_HOME: string;
		LMOD_VERSION: string;
		INIT_CWD: string;
		npm_lifecycle_script: string;
		MODULEPATH_ROOT: string;
		NVM_DIR: string;
		MOZ_GMP_PATH: string;
		XDG_SESSION_CLASS: string;
		LMOD_PKG: string;
		TERM: string;
		npm_package_name: string;
		npm_config_prefix: string;
		LESSOPEN: string;
		USER: string;
		GNOME_TERMINAL_SERVICE: string;
		SDKMAN_DIR: string;
		DISPLAY: string;
		LMOD_ROOT: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		BASH_ENV: string;
		LMOD_sys: string;
		QT_IM_MODULE: string;
		SDKMAN_CANDIDATES_API: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		XDG_RUNTIME_DIR: string;
		DEBUGINFOD_URLS: string;
		npm_package_json: string;
		KDEDIRS: string;
		XDG_DATA_DIRS: string;
		npm_config_noproxy: string;
		PATH: string;
		npm_config_metrics_registry: string;
		npm_config_node_gyp: string;
		MODULEPATH: string;
		GDMSESSION: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_config_python: string;
		SDKMAN_PLATFORM: string;
		npm_config_global_prefix: string;
		LMOD_CMD: string;
		MAIL: string;
		npm_node_execpath: string;
		OLDPWD: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
