/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes: string[] = ["/"];

/**
 * An array of routes that are used for authentication
 * These routes wull redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes: string[] = ["/auth/login", "/auth/register"];

/**
 * The prefix for api authentication rtoutes
 * Routes that start with this prefix are used for API authentication puposes
 * @type {string}
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * Tghe default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/settings";
