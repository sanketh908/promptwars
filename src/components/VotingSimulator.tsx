import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { CANDIDATES, castVote, getChoice, getTally, hasVoted, resetSimulation, type VoteTally } from '../lib/simulator'
import { useLanguage } from '../lib/i18n'
import type { Translation } from '../lib/i18n/types'

type Step = 'intro' | 'checking' | 'verified' | 'booth' | 'confirming' | 'results'

export function VotingSimulator() {
  const { t } = useLanguage()
  // If this browser already voted, skip straight to the results view.
  const [step, setStep] = useState<Step>(() => (hasVoted() ? 'results' : 'intro'))
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [tally, setTally] = useState<VoteTally>(() => (hasVoted() ? getTally() : {}))
  const [myChoiceId, setMyChoiceId] = useState<string | null>(() => (hasVoted() ? getChoice() : null))

  const chartData = useMemo(
    () =>
      CANDIDATES.map((c) => ({
        id: c.id,
        name: c.symbol,
        fullName: `${c.name} — ${t.simulator.candidateParties[c.id] ?? c.party}`,
        votes: tally[c.id] ?? 0,
        color: c.color,
      })),
    [tally, t],
  )
  const totalVotes = chartData.reduce((sum, c) => sum + c.votes, 0)

  function startRegistrationCheck() {
    setStep('checking')
    window.setTimeout(() => setStep('verified'), 1400)
  }

  function goToBooth() {
    setStep('booth')
  }

  function confirmVote() {
    if (!selectedId) return
    setStep('confirming')
    window.setTimeout(() => {
      const updatedTally = castVote(selectedId)
      setTally(updatedTally)
      setMyChoiceId(selectedId)
      setStep('results')
    }, 1300)
  }

  function handleReset() {
    resetSimulation()
    setSelectedId(null)
    setMyChoiceId(null)
    setTally({})
    setStep('intro')
  }

  return (
    <section id="simulator" className="bg-white px-6 py-16 sm:py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-extrabold text-civic-ink sm:text-4xl dark:text-slate-100">{t.simulator.heading}</h2>
        <p className="mt-3 max-w-xl text-slate-600 dark:text-slate-300">{t.simulator.subheading}</p>
        <p className="mx-auto mt-4 max-w-xl rounded-xl bg-amber-50 px-4 py-3 text-center text-sm font-medium text-amber-800 dark:bg-amber-950/40 dark:text-amber-300">
          {t.simulator.disclaimer}
        </p>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-10 dark:border-slate-700 dark:bg-slate-800">
          <AnimatePresence mode="wait">
            {step === 'intro' && (
              <StepShell key="intro">
                <p className="text-lg font-semibold text-civic-ink dark:text-slate-100">{t.simulator.introTitle}</p>
                <p className="mt-2 text-slate-600 dark:text-slate-300">{t.simulator.introBody}</p>
                <button
                  type="button"
                  onClick={startRegistrationCheck}
                  className="mt-6 w-full rounded-xl bg-civic-blue px-6 py-3.5 text-base font-semibold text-white transition hover:bg-civic-blue-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue sm:w-auto"
                >
                  {t.simulator.checkButton}
                </button>
              </StepShell>
            )}

            {step === 'checking' && (
              <StepShell key="checking">
                <div className="flex flex-col items-center gap-4 py-6">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="h-10 w-10 rounded-full border-4 border-civic-blue/20 border-t-civic-blue"
                    aria-hidden="true"
                  />
                  <p className="font-medium text-slate-600 dark:text-slate-300">{t.simulator.checkingText}</p>
                </div>
              </StepShell>
            )}

            {step === 'verified' && (
              <StepShell key="verified">
                <div className="flex flex-col items-center gap-3 py-4 text-center">
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 15 }}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-3xl dark:bg-green-900/40"
                    aria-hidden="true"
                  >
                    ✅
                  </motion.span>
                  <p className="text-lg font-semibold text-civic-ink dark:text-slate-100">{t.simulator.verifiedTitle}</p>
                  <p className="text-slate-600 dark:text-slate-300">{t.simulator.verifiedBody}</p>
                  <button
                    type="button"
                    onClick={goToBooth}
                    className="mt-3 w-full rounded-xl bg-civic-blue px-6 py-3.5 text-base font-semibold text-white transition hover:bg-civic-blue-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue sm:w-auto"
                  >
                    {t.simulator.continueButton}
                  </button>
                </div>
              </StepShell>
            )}

            {step === 'booth' && (
              <StepShell key="booth">
                <p className="text-center text-sm font-medium text-slate-500 dark:text-slate-400">{t.simulator.boothHint}</p>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {CANDIDATES.map((c) => {
                    const selected = selectedId === c.id
                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setSelectedId(c.id)}
                        aria-pressed={selected}
                        className={`flex items-center gap-3 rounded-2xl border-2 px-4 py-4 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue ${
                          selected
                            ? 'border-civic-blue bg-civic-blue/5 shadow-md dark:bg-civic-blue/20'
                            : 'border-slate-200 bg-white hover:border-civic-blue/40 dark:border-slate-600 dark:bg-slate-700'
                        }`}
                      >
                        <span className="text-3xl" aria-hidden="true">
                          {c.symbol}
                        </span>
                        <span>
                          <span className="block font-bold text-civic-ink dark:text-slate-100">{c.name}</span>
                          <span className="block text-sm text-slate-500 dark:text-slate-400">
                            {t.simulator.candidateParties[c.id] ?? c.party}
                          </span>
                        </span>
                        {selected && (
                          <span className="ml-auto text-xl text-civic-blue dark:text-blue-400" aria-hidden="true">
                            ✓
                          </span>
                        )}
                      </button>
                    )
                  })}
                </div>
                <button
                  type="button"
                  onClick={confirmVote}
                  disabled={!selectedId}
                  className="mt-6 w-full rounded-xl bg-civic-blue px-6 py-3.5 text-base font-semibold text-white transition enabled:hover:bg-civic-blue-dark disabled:cursor-not-allowed disabled:bg-slate-300 sm:w-auto dark:disabled:bg-slate-600"
                >
                  {t.simulator.castButton}
                </button>
              </StepShell>
            )}

            {step === 'confirming' && (
              <StepShell key="confirming">
                <div className="flex flex-col items-center gap-4 py-6 text-center">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative flex h-16 w-16 items-center justify-center rounded-full bg-civic-blue text-3xl text-white"
                    aria-hidden="true"
                  >
                    ✓
                    <motion.span
                      initial={{ scale: 0.3, opacity: 0.7 }}
                      animate={{ scale: 1.8, opacity: 0 }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-civic-blue"
                    />
                  </motion.div>
                  <p className="font-medium text-slate-600 dark:text-slate-300">{t.simulator.confirmingText}</p>
                </div>
              </StepShell>
            )}

            {step === 'results' && (
              <StepShell key="results">
                <ResultsView
                  t={t}
                  chartData={chartData}
                  totalVotes={totalVotes}
                  myChoiceId={myChoiceId}
                  onReset={handleReset}
                />
              </StepShell>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

function StepShell({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  )
}

interface ChartDatum {
  id: string
  name: string
  fullName: string
  votes: number
  color: string
}

function ResultsView({
  t,
  chartData,
  totalVotes,
  myChoiceId,
  onReset,
}: {
  t: Translation
  chartData: ChartDatum[]
  totalVotes: number
  myChoiceId: string | null
  onReset: () => void
}) {
  const myChoice = CANDIDATES.find((c) => c.id === myChoiceId)

  return (
    <div>
      <div className="text-center">
        {myChoice && (
          <p className="text-lg font-semibold text-civic-ink dark:text-slate-100">
            {t.simulator.resultsVotedFor} {myChoice.symbol} {myChoice.name}
          </p>
        )}
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t.simulator.resultsNote}</p>
      </div>

      <div className="mt-6 h-64 w-full" role="img" aria-label={`Bar chart of simulated votes, ${totalVotes} total`}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis dataKey="name" tick={{ fontSize: 20 }} axisLine={false} tickLine={false} />
            <YAxis allowDecimals={false} tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip
              formatter={(value) => `${value} vote(s)`}
              labelFormatter={(_label, items) => {
                const datum = items[0]?.payload as ChartDatum | undefined
                return datum?.fullName ?? ''
              }}
              contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0' }}
            />
            <Bar dataKey="votes" radius={[8, 8, 0, 0]}>
              {chartData.map((entry) => (
                <Cell key={entry.id} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <ul className="mt-4 space-y-1 text-sm text-slate-600 dark:text-slate-300">
        {chartData.map((c) => (
          <li key={c.id} className="flex items-center justify-between">
            <span>
              {c.name} {c.fullName}
            </span>
            <span className="font-semibold text-civic-ink dark:text-slate-100">{c.votes}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={onReset}
        className="mt-6 w-full rounded-xl border-2 border-civic-blue px-6 py-3.5 text-base font-semibold text-civic-blue transition hover:bg-civic-blue/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue sm:w-auto dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-400/10"
      >
        {t.simulator.resetButton}
      </button>
    </div>
  )
}
