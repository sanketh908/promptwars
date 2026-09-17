import type { Translation } from '../types'

export const en: Translation = {
  header: {
    brand: 'Election Awareness',
    themeLight: 'Light mode',
    themeDark: 'Dark mode',
    languageLabel: 'Language',
  },
  hero: {
    title: 'Understand elections. Simulate your vote. Get informed.',
    subtitle:
      "We built this after watching classmates skip voting simply because nobody explained how it works. Nothing here assumes you already know the process — we'll walk through it together, one step at a time.",
    ctaSimulator: 'Try the voting simulator',
    ctaJourney: 'Learn how elections work',
  },
  journey: {
    heading: 'The Election Journey',
    subheading:
      'A lot happens between someone deciding to run and the day we find out who won. Here are the six stages, in plain language — tap any one to open it up.',
    stepLabel: 'Step',
    stages: [
      {
        id: 'nomination',
        title: 'Nomination',
        icon: '📝',
        summary:
          "People who want to run for office file paperwork to officially become candidates. This is where the list of choices you'll eventually vote on starts to take shape.",
      },
      {
        id: 'campaigning',
        title: 'Campaigning',
        icon: '📣',
        summary:
          'Candidates share their plans and meet voters — through rallies, ads, door-to-door visits, and social media — so you can learn what each one stands for before you decide.',
      },
      {
        id: 'registration',
        title: 'Voter Registration',
        icon: '🪪',
        summary:
          "You add your name to the official voter list. This step usually has to happen before election day, so it's worth checking your registration status early.",
      },
      {
        id: 'polling',
        title: 'Polling Day',
        icon: '🗳️',
        summary:
          'The day you actually cast your vote. You go to your assigned polling place, confirm your identity, and mark or select your choice in private.',
      },
      {
        id: 'counting',
        title: 'Counting',
        icon: '🔢',
        summary:
          'After polls close, every vote is counted, usually with officials from different parties watching to make sure it stays fair and accurate.',
      },
      {
        id: 'results',
        title: 'Results',
        icon: '🏆',
        summary:
          'The final counts are announced and made public. The candidate with the winning count is declared, and the new term of office begins.',
      },
    ],
  },
  simulator: {
    heading: 'Voting Simulator',
    subheading: 'Walk through the whole process once, so none of it feels new on the actual day.',
    disclaimer: 'This is a simulation for educational purposes only and does not represent a real election.',
    introTitle: 'Ready to try casting a vote?',
    introBody: "First, we'll simulate checking your voter registration — just like on real election day.",
    checkButton: 'Check my registration',
    checkingText: 'Checking your registration…',
    verifiedTitle: "You're verified!",
    verifiedBody: "You're all set to head to the mock polling booth.",
    continueButton: 'Continue to polling booth',
    boothHint: 'Tap a candidate to simulate casting your vote',
    castButton: 'Cast my vote',
    confirmingText: 'Marking your vote with indelible ink…',
    resultsVotedFor: 'You voted for',
    resultsNote: 'Your simulation results — based only on votes cast in this browser, not a real or shared election.',
    resetButton: 'Reset simulation and try again',
    candidateParties: {
      sun: 'Sunrise Alliance',
      leaf: 'Green Path',
      wave: 'Blue Wave Union',
      star: "People's Star",
      dove: 'Unity Dove Front',
    },
  },
  faq: {
    heading: 'Common Questions',
    subheading: 'No question is too basic here. These are the ones we got asked most while building this.',
    items: [
      {
        question: 'Do I need to bring anything to vote?',
        answer:
          "Bring a valid, government-issued photo ID (like a voter ID card, driver's license, or passport). Requirements vary by country, so it's worth double-checking your local election commission's website a few days before.",
      },
      {
        question: "What if I'm not sure I'm registered?",
        answer:
          "Most election commissions have an online portal where you can search the electoral roll by name or ID number. If you find you're not on it, there's usually still time to register before the deadline — don't wait until election day to check.",
      },
      {
        question: 'What happens on election day?',
        answer:
          'You go to your assigned polling place, show your ID, get checked off the voter list, and are directed to a private booth to cast your vote. The whole process usually takes just a few minutes.',
      },
      {
        question: 'What is an EVM?',
        answer:
          "EVM stands for Electronic Voting Machine. Instead of marking a paper ballot, you press a button next to your chosen candidate's name and symbol, and the machine records your vote electronically.",
      },
      {
        question: "What's the difference between nomination and campaigning?",
        answer:
          "Nomination is the formal, paperwork step where someone officially becomes a candidate. Campaigning happens after that — it's the period where candidates try to earn your vote by sharing their ideas and meeting voters.",
      },
      {
        question: 'Is my vote really private?',
        answer:
          "Yes. You cast your vote alone in a booth, and there's no way to trace a specific vote back to you. What gets counted publicly is only the total tally, never who voted for whom.",
      },
      {
        question: 'What if I make a mistake while voting?',
        answer:
          'Polling staff are there to help. On paper ballots, tell an official before you drop it in the box — they can usually issue a replacement. On an EVM, take your time; you can only press one button, but nothing is final until you confirm.',
      },
    ],
  },
  footer: 'Built for the Google "Build with AI" hackathon (PromptWars x SDMC). Educational demo — not affiliated with any election authority.',
}
