import { motion } from 'framer-motion'

export function Hero() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-civic-blue-dark via-civic-blue to-civic-violet px-6 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold tracking-wide"
        >
          🗳️ Election Awareness Platform
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-extrabold leading-tight sm:text-5xl"
        >
          Understand elections. Simulate your vote. Get informed.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-xl text-lg text-white/90"
        >
          A friendly, judgment-free guide built for first-time voters. No experience needed — just curiosity.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#simulator"
            className="w-full rounded-xl bg-white px-6 py-3.5 text-center text-base font-semibold text-civic-blue-dark shadow-lg transition hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
          >
            Try the voting simulator
          </a>
          <a
            href="#journey"
            className="w-full rounded-xl border-2 border-white/60 px-6 py-3.5 text-center text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
          >
            Learn how elections work
          </a>
        </motion.div>
      </div>
    </header>
  )
}
