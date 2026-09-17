import { useState } from 'react'
import { motion } from 'framer-motion'
import { JOURNEY_STAGES } from '../lib/journey'

export function Timeline() {
  const [openId, setOpenId] = useState<string>(JOURNEY_STAGES[0].id)

  return (
    <section id="journey" className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h2 className="text-center text-3xl font-extrabold text-civic-ink sm:text-4xl">
        The Election Journey
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-slate-600">
        Six stages happen between "someone decides to run" and "we know who won." Tap any stage to learn what it
        means.
      </p>

      <ol className="mt-10 space-y-3">
        {JOURNEY_STAGES.map((stage, index) => {
          const isOpen = openId === stage.id
          return (
            <li key={stage.id} className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? '' : stage.id)}
                aria-expanded={isOpen}
                aria-controls={`stage-panel-${stage.id}`}
                className="flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-civic-blue/10 text-xl"
                  aria-hidden="true"
                >
                  {stage.icon}
                </span>
                <span className="flex-1">
                  <span className="block text-xs font-semibold uppercase tracking-wide text-civic-blue">
                    Step {index + 1}
                  </span>
                  <span className="block text-lg font-bold text-civic-ink">{stage.title}</span>
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 text-slate-400"
                  aria-hidden="true"
                >
                  ▾
                </motion.span>
              </button>

              {isOpen && (
                <motion.div
                  id={`stage-panel-${stage.id}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 pl-[4.25rem] text-slate-600">{stage.summary}</p>
                </motion.div>
              )}
            </li>
          )
        })}
      </ol>
    </section>
  )
}
