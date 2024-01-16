import React from "react"
import PathConstants from "./pathConstants"

const Auth = React.lazy(() => import("../pages/Auth"))
const Main = React.lazy(() => import("../pages/Main"))
const Cabinet = React.lazy(() => import("../pages/Cabinet"))

const routes = [
    { path: PathConstants.AUTH, element: <Auth /> },
    { path: PathConstants.MAIN, element: <Main /> },
    { path: PathConstants.CABINET, element: <Cabinet /> },
]

export default routes
