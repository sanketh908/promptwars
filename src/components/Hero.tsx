import { motion } from 'framer-motion'
import { useLanguage } from '../lib/i18n'

export function Hero() {
  const { t } = useLanguage()

  return (
    <header className="relative overflow-hidden bg-civic-blue-dark px-6 py-16 text-white sm:py-24">
      <div className="max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold leading-tight sm:text-5xl"
        >
          {t.hero.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-5 max-w-xl text-lg text-white/90"
        >
          {t.hero.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#simulator"
            className="w-full rounded-xl bg-white px-6 py-3.5 text-center text-base font-semibold text-civic-blue-dark shadow-lg transition hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
          >
            {t.hero.ctaSimulator}
          </a>
          <a
            href="#journey"
            className="w-full rounded-xl border-2 border-white/60 px-6 py-3.5 text-center text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
          >
            {t.hero.ctaJourney}
          </a>
        </motion.div>
      </div>
    </header>
  )
}
