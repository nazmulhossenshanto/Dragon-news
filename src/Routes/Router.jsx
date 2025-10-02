
import { createBrowserRouter } from 'react-router';
import HomeLayouts from '../Layouts/HomeLayouts';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayouts></HomeLayouts>
    },
    {
        path: '/auth',
        element: <h1>Authintication Layout</h1>
    },
    {
        path: '/news',
        element: <h1>News Layout</h1>
    },
    {
        path: '/*',
        element: <h1>Erorrrrrrrrrrrr</h1>
    },
])

export default Router;