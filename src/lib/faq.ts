export interface FaqItem {
  question: string
  answer: string
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Do I need to bring anything to vote?',
    answer:
      "Bring a valid, government-issued photo ID (like a voter ID card, driver's license, or passport). Requirements vary by country, so it's worth double-checking your local election commission's website a few days before.",
  },
  {
    question: "What if I'm not sure I'm registered?",
    answer:
      'Most election commissions have an online portal where you can search the electoral roll by name or ID number. If you find you\'re not on it, there\'s usually still time to register before the deadline — don\'t wait until election day to check.',
  },
  {
    question: 'What happens on election day?',
    answer:
      "You go to your assigned polling place, show your ID, get checked off the voter list, and are directed to a private booth to cast your vote. The whole process usually takes just a few minutes.",
  },
  {
    question: 'What is an EVM?',
    answer:
      "EVM stands for Electronic Voting Machine. Instead of marking a paper ballot, you press a button next to your chosen candidate's name and symbol, and the machine records your vote electronically.",
  },
  {
    question: "What's the difference between nomination and campaigning?",
    answer:
      'Nomination is the formal, paperwork step where someone officially becomes a candidate. Campaigning happens after that — it\'s the period where candidates try to earn your vote by sharing their ideas and meeting voters.',
  },
  {
    question: 'Is my vote really private?',
    answer:
      "Yes. You cast your vote alone in a booth, and there's no way to trace a specific vote back to you. What gets counted publicly is only the total tally, never who voted for whom.",
  },
  {
    question: "What if I make a mistake while voting?",
    answer:
      'Polling staff are there to help. On paper ballots, tell an official before you drop it in the box — they can usually issue a replacement. On an EVM, take your time; you can only press one button, but nothing is final until you confirm.',
  },
]
