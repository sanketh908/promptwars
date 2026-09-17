import { useState } from 'react'
import { useLanguage } from '../lib/i18n'

export function Faq() {
  const { t } = useLanguage()
  const items = t.faq.items
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h2 className="text-3xl font-extrabold text-civic-ink sm:text-4xl dark:text-slate-100">{t.faq.heading}</h2>
      <p className="mt-3 max-w-xl text-slate-600 dark:text-slate-300">{t.faq.subheading}</p>

      <div className="mt-10 space-y-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index
          return (
            <div key={item.question} className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left font-semibold text-civic-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue dark:text-slate-100"
              >
                <span>{item.question}</span>
                <span className="shrink-0 text-xl text-civic-blue dark:text-blue-400" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              {isOpen && (
                <p id={`faq-panel-${index}`} className="px-5 pb-5 text-slate-600 dark:text-slate-300">
                  {item.answer}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
