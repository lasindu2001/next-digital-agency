import Link from "next/link";
import styles from './links.module.css'

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

const Links = () => {
    return (
        <div className={styles.links}>
            {links.map((link) => (
                <Link href={link.path}>
                    {link.title}
                </Link>
            ))}
        </div>
    )
}

export default Links