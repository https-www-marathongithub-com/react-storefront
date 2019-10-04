/**
 * @license
 * Copyright © 2017-2018 Moov Corporation.  All rights reserved.
 */
import React from 'react'
import Image from './Image'

// TODO: We should NOT have to send thumbnail independently.
// But MobX is not rerendering when we only send product.
export default function ProductThumbnail({ product, thumbnail, ...props }) {
  const ampKey = `rsfProduct${product.id}.color.selected`
  return (
    <Image
      {...props}
      src={thumbnail}
      amp-bind={`src=>${ampKey} ? "/thumbnail/${
        product.id
      }/" + ${ampKey}.id + ".json" : "${thumbnail}"`}
    />
  )
}
