import type { Lang, UIStrings } from './types'
import { es } from './es'
import { en } from './en'

const dictionaries: Record<Lang, UIStrings> = { es, en }

export function getUI(lang: Lang): UIStrings {
  return dictionaries[lang]
}

export type { Lang, UIStrings } from './types'
