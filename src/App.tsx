import { lazy, Suspense } from 'react'
import { Hero } from './components/Hero'
import { Timeline } from './components/Timeline'
import { Faq } from './components/Faq'

const VotingSimulator = lazy(() =>
  import('./components/VotingSimulator').then((m) => ({ default: m.VotingSimulator })),
)

function App() {
  return (
    <div className="min-h-screen bg-civic-mist">
      <Hero />
      <main>
        <Timeline />
        <Suspense fallback={<SimulatorFallback />}>
          <VotingSimulator />
        </Suspense>
        <Faq />
      </main>
      <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-500">
        <p>Election Awareness Platform — built for first-time voters. Educational demo, not affiliated with any election authority.</p>
      </footer>
    </div>
  )
}

function SimulatorFallback() {
  return (
    <section className="bg-white px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center text-slate-400">Loading voting simulator…</div>
    </section>
  )
}

export default App
