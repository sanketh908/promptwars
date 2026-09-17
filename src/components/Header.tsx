import { useTheme } from '../lib/theme'
import { useLanguage } from '../lib/i18n'
import { LanguageSelect } from './LanguageSelect'

export function Header() {
  const [theme, toggleTheme] = useTheme()
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white px-4 py-3 sm:px-6 dark:border-slate-700 dark:bg-slate-900">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3">
        <span className="text-base font-bold text-civic-ink dark:text-slate-100">{t.header.brand}</span>
        <div className="flex items-center gap-3">
          <LanguageSelect />
          <button
            type="button"
            onClick={toggleTheme}
            aria-pressed={theme === 'dark'}
            className="flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-civic-ink transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-800"
          >
            <span aria-hidden="true">{theme === 'dark' ? '🌙' : '☀️'}</span>
            {theme === 'dark' ? t.header.themeDark : t.header.themeLight}
          </button>
        </div>
      </div>
    </header>
  )
}
