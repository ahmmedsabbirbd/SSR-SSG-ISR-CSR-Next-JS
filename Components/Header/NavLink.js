import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const NavLink = ({ nav }) => {
    const {name, link} = nav;
    let param = useRouter();
    param = param.pathname;

    return (
        <>
            {
            nav?.subMenu ?
                <li tabIndex={0}>
                    <Link href={link} className={param.includes(link) ? 'text-purple-600': ''}>
                        {name}
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                    </Link>

                    <ul className="p-2 bg-base-100">
                        {
                            nav.subMenu.map(subMenu=> <li key={subMenu.link}><Link href={subMenu.link} className={(param == subMenu.link) ? 'text-purple-600' : ''}>{subMenu.name}</Link></li>)
                        }
                    </ul>
                </li> 
            :
                <li>
                    <Link href={link} className={(param ==link) ? 'text-purple-600' : ''}>{name}</Link>
                </li>
            }
        </>
    );
};

export default NavLink;