/* eslint-disable @next/next/no-img-element */
import { Asset } from "contentful"

interface OptimizedFullSizePictureProps {
  image: Asset | undefined
}

export const OptimizedFullSizePicture = ({ image }: OptimizedFullSizePictureProps) => {
  const url = image?.fields?.file?.url
  if (!url) {
    return <></>
  }

  return (
    <picture>
      <source type="image/webp" media="(min-width: 1281px)" srcSet={`${url}?fm=webp&w=1920&q=80`} />
      <source type="image/png" media="(min-width: 1281px)" srcSet={`${url}?fm=png&w=1920&q=80`} />

      <source
        type="image/webp"
        media="(min-width: 461px) and (max-width: 1280px) and (orientation: landscape)"
        srcSet={`${url}?fm=webp&w=1280&q=80`}
      />
      <source
        type="image/png"
        media="(min-width: 461px) and (max-width: 1280px) and (orientation: landscape)"
        srcSet={`${url}?fm=png&w=1280&q=80`}
      />

      <source
        type="image/webp"
        media="(min-width: 461px) and (max-width: 1280px) and (orientation: portrait)"
        srcSet={`${url}?fm=webp&w=1280&q=80`}
      />
      <source
        type="image/png"
        media="(min-width: 461px) and (max-width: 1280px) and (orientation: portrait)"
        srcSet={`${url}?fm=png&w=1280&q=80`}
      />

      <source type="image/webp" media="(max-width: 460px)" srcSet={`${url}?fm=webp&w=460&q=80`} />
      <source type="image/png" media="(max-width: 460px)" srcSet={`${url}?fm=png&w=460&q=80`} />

      <img src={`${url}?fm=jpg&fl=progressive&q=80`} width="100%" alt={image?.fields.title} />
    </picture>
  )
}
