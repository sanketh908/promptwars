import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../lib/i18n'

export function Timeline() {
  const { t } = useLanguage()
  const stages = t.journey.stages
  const [openId, setOpenId] = useState<string>(stages[0].id)

  return (
    <section id="journey" className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h2 className="text-3xl font-extrabold text-civic-ink sm:text-4xl dark:text-slate-100">{t.journey.heading}</h2>
      <p className="mt-3 max-w-xl text-slate-600 dark:text-slate-300">{t.journey.subheading}</p>

      <ol className="mt-10 space-y-3">
        {stages.map((stage, index) => {
          const isOpen = openId === stage.id
          return (
            <li key={stage.id} className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? '' : stage.id)}
                aria-expanded={isOpen}
                aria-controls={`stage-panel-${stage.id}`}
                className="flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-civic-blue/10 text-xl dark:bg-civic-blue/25"
                  aria-hidden="true"
                >
                  {stage.icon}
                </span>
                <span className="flex-1">
                  <span className="block text-xs font-semibold uppercase tracking-wide text-civic-blue dark:text-blue-400">
                    {t.journey.stepLabel} {index + 1}
                  </span>
                  <span className="block text-lg font-bold text-civic-ink dark:text-slate-100">{stage.title}</span>
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 text-slate-400 dark:text-slate-500"
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
                  <p className="px-5 pb-5 pl-[4.25rem] text-slate-600 dark:text-slate-300">{stage.summary}</p>
                </motion.div>
              )}
            </li>
          )
        })}
      </ol>
    </section>
  )
}
