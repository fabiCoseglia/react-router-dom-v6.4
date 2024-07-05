import { createBrowserRouter } from "react-router-dom";
import { Index } from "../pages/Index";
import { NotFound } from "../pages/NotFound";
import { LayoutPublic } from "../layout/LayoutPublic";
import { Blog } from "../pages/Blog";
import { loaderBlog } from "../helpers/loaderBlog";
import { Post } from "../pages/Post";
import { loaderPost } from "../helpers/loaderPost";




export const router = createBrowserRouter([
    {
        path:'/',
        element: <LayoutPublic />,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                element: <Index />,
            },
            {
                path:'/blog',
                element: <Blog />,
                loader: loaderBlog
            },
            {
                path:'/blog/:id',
                element: <Post />,
                loader: loaderPost
            }
        ]
    },
])

