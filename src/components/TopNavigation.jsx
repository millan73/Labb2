import PropTypes from 'prop-types'
import { navItems } from '../data/navItems'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Articles from '../pages/Articles'
import News from '../pages/News'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import Services from '../pages/Services'
import styled from 'styled-components'
import HPCharacters from '../pages/HPCaracters'

const StyledUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding-left: 1em;
    margin-bottom: 0;
    margin-top: 0;
    list-style: none;
    background-color: #ea661e;
`
const StyledLi = styled.li`
    disply: block;
    padding: 0.5em 0.5em 0.5em 0.5em;
    font-weight: bold;
    font-size: 1.25em;
`

function TopNavigation() {
    let topNavItem = []

    navItems.forEach((item) => {
        if (item.typ === 'top') {
            topNavItem.push(item)
        }
    })

    return (
        <>
            <nav>
                <StyledUl>
                    {topNavItem.map((items) => (
                        <StyledLi key={items.id}>
                            <NavLink
                                style={({ isActive }) => {
                                    {
                                        return isActive
                                            ? { color: 'white' }
                                            : { color: '#000' }
                                    }
                                }}
                                to={items.route}
                            >
                                {items.namn}
                            </NavLink>
                        </StyledLi>
                    ))}
                </StyledUl>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="/characters" element={<HPCharacters />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

TopNavigation.propTypes = {
    items: PropTypes.string
}

export default TopNavigation
