
import { createBrowserRouter } from 'react-router';
import HomeLayouts from '../Layouts/HomeLayouts';
import Home from '../Components/Pages/Home';
import CategoryNews from '../Components/Pages/CategoryNews';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayouts></HomeLayouts>,
        children:[
            {
                path: '',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: ()=> fetch("/news.json")
            },
        ]
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