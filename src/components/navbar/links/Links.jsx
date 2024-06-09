import styles from './links.module.css'
import NavLink from "./navLink/navLink";

const links = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Blog",
        path: "/blog",
    },
];

const session = true;
const isAdmin = true;

const Links = () => {
    return (
        <div className={styles.links}>
            {links.map((link) => (
                <NavLink item={link}/>
            ))}
            {session ? (
                <>
                    {isAdmin && 
                        <NavLink item={{title: "Admin", path: "/admin"}}/>
                    }
                    <button className={styles.logout}>Logout</button>
                </>
            ) : (
                <NavLink item={{title: "Login", path: "/login"}} />
            )}
        </div>
    )
}

export default Links