export interface JourneyStage {
  id: string
  title: string
  icon: string
  summary: string
}

export const JOURNEY_STAGES: JourneyStage[] = [
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
]
