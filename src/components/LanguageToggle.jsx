import { useLanguage } from '../i18n';
export default function LanguageToggle() {
  const {language, setLanguage} = useLanguage();
  return <div className="language-toggle" role="group" aria-label={language === 'en' ? 'Language' : 'Idioma'}>
    <button type="button" lang="en" aria-label="English" aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>ING</button>
    <span aria-hidden="true">/</span>
    <button type="button" lang="es" aria-label="Español" aria-pressed={language === 'es'} onClick={() => setLanguage('es')}>ESP</button>
  </div>;
}
