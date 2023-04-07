import Link from "next/link";
import NavLink from "./NavLink.js";

const menu = [
    {
        name: "Home",
        link: '/'
    },
    {
        name: "SSR",
        link: '/ssr',
        subMenu: [
            {
                name: "SSR 1",
                link: '/ssr/ssr1'
            },
            {
                name: "SSR 2",
                link: '/ssr/ssr2'
            }
        ]
    },
    {
        name: "CSR",
        link: '/csr'
    }
]

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl" href="/">NextJs</Link>
            </div>
            
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {
                        menu.map(nav => <NavLink key={nav.link} nav={nav} />)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;