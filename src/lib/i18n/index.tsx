import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Translation } from './types'
import { en } from './locales/en'
import { hi } from './locales/hi'
import { bn } from './locales/bn'
import { te } from './locales/te'
import { kn } from './locales/kn'

export const LOCALES: Record<string, Translation> = {
  en,
  hi,
  bn,
  te,
  kn,
}

export type LanguageCode = keyof typeof LOCALES

const LANG_KEY = 'eap:lang'
const DEFAULT_LANG: LanguageCode = 'en'

function getStoredLang(): LanguageCode {
  try {
    const stored = localStorage.getItem(LANG_KEY)
    return stored && stored in LOCALES ? stored : DEFAULT_LANG
  } catch {
    return DEFAULT_LANG
  }
}

interface LanguageContextValue {
  lang: LanguageCode
  setLang: (lang: LanguageCode) => void
  t: Translation
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<LanguageCode>(getStoredLang)

  useEffect(() => {
    try {
      localStorage.setItem(LANG_KEY, lang)
    } catch {
      // localStorage unavailable — language still applies for this session
    }
  }, [lang])

  const value = useMemo<LanguageContextValue>(() => ({ lang, setLang, t: LOCALES[lang] }), [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider')
  return context
}
