import { useContext, createContext } from 'react'
/**  useMemo och useCallback     */

export const HeaderContext = createContext()

const Headline = () => {
    const header = useContext(HeaderContext)

    return <h2> {header}</h2>
}

export default Headline
