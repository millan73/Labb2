import React from 'react'
import { useContext } from 'react'
/** useReducer, useContext, useMemo och useCallback     */

export const NumberContext = React.createContext()

const Context = () => {
    const number = useContext(NumberContext)

    return <div>Number from Context: {number}</div>
}

export default Context
