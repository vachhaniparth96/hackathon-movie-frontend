import { Route, Routes } from 'react-router-dom'

import ErrorPage from '../../Pages/ErrorPage'
import Home from '../../Pages/Home'
import Movies from '../../Pages/Movies'
import Show from '../../Pages/Show'

const Main = () => {
    return (
        <div className="Main">
        <h1>Main</h1>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<Show />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
        </div>
    )
    }

export default Main