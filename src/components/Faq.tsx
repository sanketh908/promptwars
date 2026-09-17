import { useState } from 'react'
import { FAQ_ITEMS } from '../lib/faq'

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h2 className="text-center text-3xl font-extrabold text-civic-ink sm:text-4xl">
        Common Questions
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-slate-600">
        No question is too basic. Here are the ones first-time voters ask most.
      </p>

      <div className="mt-10 space-y-3">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index
          return (
            <div key={item.question} className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left font-semibold text-civic-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-civic-blue"
              >
                <span>{item.question}</span>
                <span className="shrink-0 text-xl text-civic-blue" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              {isOpen && (
                <p id={`faq-panel-${index}`} className="px-5 pb-5 text-slate-600">
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
