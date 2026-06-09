/**
 * Inline theme initialization — runs before paint to prevent flash.
 * Must be included in <head> of DashboardLayout.
 */
export const themeInitScript = `
(function() {
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (prefersDark ? 'dark' : 'light');
  document.documentElement.classList.toggle('dark', theme === 'dark');
})();
`;
