export interface JourneyStageText {
  id: string
  title: string
  icon: string
  summary: string
}

export interface FaqEntryText {
  question: string
  answer: string
}

export interface Translation {
  header: {
    brand: string
    themeLight: string
    themeDark: string
    languageLabel: string
  }
  hero: {
    title: string
    subtitle: string
    ctaSimulator: string
    ctaJourney: string
  }
  journey: {
    heading: string
    subheading: string
    stepLabel: string
    stages: JourneyStageText[]
  }
  simulator: {
    heading: string
    subheading: string
    disclaimer: string
    introTitle: string
    introBody: string
    checkButton: string
    checkingText: string
    verifiedTitle: string
    verifiedBody: string
    continueButton: string
    boothHint: string
    castButton: string
    confirmingText: string
    resultsVotedFor: string
    resultsNote: string
    resetButton: string
    /** Candidate id -> translated party name. Candidate given names and symbols stay fixed across languages. */
    candidateParties: Record<string, string>
  }
  faq: {
    heading: string
    subheading: string
    items: FaqEntryText[]
  }
  footer: string
}
