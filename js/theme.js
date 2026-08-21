/**
 * THEME SWITCHER MODULE
 * Key Feature: Dynamic Light / Dark Mode Theme with LocalStorage persistence
 * Author: Supradip Bhattacharjee
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'portfolio_theme';

  /**
   * Get preferred system theme
   */
  function getPreferredTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  /**
   * Apply theme to <html> document root element
   * @param {string} theme - 'dark' | 'light'
   */
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);

    // Update theme toggle buttons aria attributes
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach(btn => {
      btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
    });
  }

  /**
   * Initialize theme system
   */
  function initTheme() {
    const initialTheme = getPreferredTheme();
    setTheme(initialTheme);

    // Attach click listeners to all theme buttons
    document.addEventListener('DOMContentLoaded', () => {
      const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
      toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const currentTheme = document.documentElement.getAttribute('data-theme');
          const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
          setTheme(newTheme);
        });
      });
    });

    // Listen to OS theme changes if user has no explicit preference set
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  initTheme();
})();
