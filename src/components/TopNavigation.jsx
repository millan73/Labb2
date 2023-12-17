import PropTypes from 'prop-types'
import { navItems } from '../data/navItems'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Articles from '../pages/Articles'
import News from '../pages/News'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import Services from '../pages/Services'

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
                <ul className="nav bg-dark">
                    {topNavItem.map((items) => (
                        <li key={items.id} className="nav-item">
                            <NavLink
                                style={({ isActive }) => {
                                    {
                                        return isActive ? { color: '#000' } : {}
                                    }
                                }}
                                to={items.route}
                                className="nav-link"
                            >
                                {items.namn}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

TopNavigation.propTypes = {
    items: PropTypes.string
}

export default TopNavigation
