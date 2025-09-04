export type ListElement = {
  title: string
  type: "list"
  listItems: string[]
}

export type UnderlineElement = {
  title: string
  type: "underline"
  listItems: { bullet: string; text: string }[]
}

export type WorkElement = ListElement | UnderlineElement

export interface Work {
  title: string
  image: string
  slug: string
  description: string
  conclusion?: string
  elements?: WorkElement[]
}
