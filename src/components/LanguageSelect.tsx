import { LANGUAGES } from '../lib/i18n/languages'
import { LOCALES, useLanguage, type LanguageCode } from '../lib/i18n'

export function LanguageSelect() {
  const { lang, setLang, t } = useLanguage()
  const available = LANGUAGES.filter((l) => l.code in LOCALES)

  return (
    <label className="flex items-center gap-2 text-sm font-semibold text-civic-ink dark:text-slate-100">
      <span className="hidden sm:inline">{t.header.languageLabel}</span>
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value as LanguageCode)}
        aria-label={t.header.languageLabel}
        className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-civic-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
      >
        {available.map((l) => (
          <option key={l.code} value={l.code}>
            {l.nativeName}
          </option>
        ))}
      </select>
    </label>
  )
}
