// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful"
import { Document } from "@contentful/rich-text-types"

export interface IPageFields {
  /** Name */
  name: string

  /** Hero image */
  heroImage?: Asset | undefined

  /** Hero Title */
  heroTitle?: string | undefined

  /** Hero Button Label */
  heroButtonLabel?: string | undefined

  /** Hero Button Title */
  heroButtonTitle?: string | undefined

  /** Hero Button Link */
  heroButtonLink?: Entry<{ [fieldId: string]: unknown }> | undefined

  /** SEO Title */
  seoTitle: string

  /** SEO Description */
  seoDescription: string

  /** Slug */
  slug?: string | undefined
}

/** Default page */

export interface IPage extends Entry<IPageFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: "page"
        linkType: "ContentType"
        type: "Link"
      }
    }
  }
}

export type CONTENT_TYPE = "page"

export type LOCALE_CODE = "en-US" | "nl"

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US"
