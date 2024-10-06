/**
 * Contains static route paths for the app.
 *
 * Purpose:
 * - Define all raw paths used for rendering components with React Router.
 * - Should only contain static strings or parameters (e.g., `:id`) that map to routes.
 * - Centralizes route definitions to prevent hardcoding paths directly inside components.
 *
 * How to use:
 * - Import `paths` wherever you need to reference a static path for rendering.
 * - Do not use this file for dynamic navigation; see `navigateRoutes.js` for that.
 */

export const home = '/';
export const settings = '/settings';
