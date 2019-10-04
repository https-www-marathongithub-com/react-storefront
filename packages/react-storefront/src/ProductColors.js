/**
 * @license
 * Copyright © 2017-2018 Moov Corporation.  All rights reserved.
 */
import React from 'react'
import ButtonSelector from './ButtonSelector'
import AmpState from './amp/AmpState'

export default function ProductColors({ product, ...props }) {
  return (
    <AmpState id={`rsfProduct${product.id}`} initialState={{}}>
      <ButtonSelector small name="color" {...props} model={product.color} />
    </AmpState>
  )
}
