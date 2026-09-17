import { lazy, Suspense } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Timeline } from './components/Timeline'
import { Faq } from './components/Faq'
import { LanguageProvider, useLanguage } from './lib/i18n'

const VotingSimulator = lazy(() =>
  import('./components/VotingSimulator').then((m) => ({ default: m.VotingSimulator })),
)

function App() {
  return (
    <LanguageProvider>
      <AppShell />
    </LanguageProvider>
  )
}

function AppShell() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-civic-mist dark:bg-slate-950">
      <Header />
      <Hero />
      <main>
        <Timeline />
        <Suspense fallback={<SimulatorFallback />}>
          <VotingSimulator />
        </Suspense>
        <Faq />
      </main>
      <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
        <p>{t.footer}</p>
      </footer>
    </div>
  )
}

function SimulatorFallback() {
  return (
    <section className="bg-white px-6 py-16 sm:py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-2xl text-center text-slate-400">Loading voting simulator…</div>
    </section>
  )
}

export default App
