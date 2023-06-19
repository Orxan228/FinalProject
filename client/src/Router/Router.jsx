import AdminRoot from "../Pages/Admin/AdminRoot/AdminRoot";
import Dashboard from "../Pages/Admin/Dashboard/Dashboard";
import SiteRoot from "../Pages/Site/SiteRoot/SiteRoot";
import Home from "../Pages/Site/Home/Home";
import Store from "../Pages/Site/Store/Store";
import Pc from "../Pages/Site/Pc/Pc";
import Mobile from "../Pages/Site/Mobile/Mobile";
import Console from "../Pages/Site/Console/Console";
import Support from "../Pages/Site/Support/Support";
import Cart from "../Pages/Site/Cart/Cart";

export const Routes=[{
    path:"/",
    element:<SiteRoot/>,
    children:[{
        path:"",
        element:<Home/>
    },
{
    path: "store",
    element: <Store/>
},
{
    path: "pc",
    element: <Pc/>
},
{
    path: "console",
    element: <Console/>
},
{
    path: "mobile",
    element: <Mobile/>
},
{
    path: "Support",
    element: <Support/>
},
{
    path: "cart",
    element: <Cart/>
}
]

},{
    path:"admin",
    element:<AdminRoot/>,
    children:[{
        path: "",
        element: <Dashboard />
    }]
}]