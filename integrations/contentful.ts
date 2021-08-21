import contentful, { createClient } from "contentful"
import { IPageFields } from "./generated/contentful"

let client: contentful.ContentfulClientApi

const isActive = () => process.env?.CONTENTFUL_SPACE && process.env?.CONTENTFUL_ACCESS_TOKEN

const init = () => {
  if (isActive()) {
    client = createClient({
      space: process.env.CONTENTFUL_SPACE as string,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
    })
  }
}

export async function getPage(id: string | undefined, locale: string) {
  if (!client) {
    init()
  }
  if (id) {
    return await client.getEntry<IPageFields>(id, { locale })
  }
}
