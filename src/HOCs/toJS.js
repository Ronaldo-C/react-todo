import React from 'react'
import { Iterable } from 'immutable'

export const toJS = WrapedCommponent => wrapedCommponentProps => {
    const KEY = 0
    const VALUE = 1
    console.log(wrapedCommponentProps)
    const propsJS = Object.entries(wrapedCommponentProps).reduce((newProps, wrapedCommponentProp) => {
        newProps[wrapedCommponentProp[KEY]] = Iterable.isIterable(wrapedCommponentProp[VALUE]) ?
            wrapedCommponentProp[VALUE].toJS() :
            wrapedCommponentProp[VALUE]
        return newProps
    }, {})
    return <WrapedCommponent {...propsJS} />
}