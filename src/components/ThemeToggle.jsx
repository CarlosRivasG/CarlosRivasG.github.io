import { useLanguage } from '../i18n';
import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { t } = useLanguage();
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light');
  function toggle() {
    const next = theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    document.querySelector('meta[name="theme-color"]').content = next === 'dark' ? '#0b0d10' : '#f7f8fa';
    try { localStorage.setItem('portfolio-theme', next); } catch { /* Switching still works without storage. */ }
    setTheme(next);
  }
  const label = t(theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
  return <button className="theme-toggle" type="button" onClick={toggle} aria-label={label} title={label}>
    {theme === 'light' ? <Moon size={18} strokeWidth={1.5} aria-hidden="true" /> : <Sun size={18} strokeWidth={1.5} aria-hidden="true" />}
  </button>;
}
