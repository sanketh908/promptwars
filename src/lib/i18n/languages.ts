export interface LanguageInfo {
  code: string
  englishName: string
  nativeName: string
}

export const LANGUAGES: LanguageInfo[] = [
  { code: 'en', englishName: 'English', nativeName: 'English' },
  { code: 'hi', englishName: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'bn', englishName: 'Bengali', nativeName: 'বাংলা' },
  { code: 'te', englishName: 'Telugu', nativeName: 'తెలుగు' },
]
