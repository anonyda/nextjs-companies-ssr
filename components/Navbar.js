import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css'

export default function Navbar() {

    const [navLinks, setNavLinks] = useState([]);

    useEffect(async () => {
        try{
            const url = 'https://anonyda.github.io/json-data-server/ssr-data/navData.json';
            let response = await fetch(url);
            let data = await response.json();
            setNavLinks(data);
            console.log(navLinks)
        }catch(err){
            console.log(err);
        }
    }, [])
    return (
        <nav className={styles.navContainer}>
            {navLinks.map((link) => {
                return (
                    <Link key={link.id} href={link.URL}>
                        <div className={styles.navLink}>
                            <div
                                className={styles.linkImageWrapper}>
                                <Image  
                                    className={styles.linkImage}
                                    width="30"
                                    height="30"
                                    src={link.logoURL} 
                                    alt={link.title}
                                    title={link.title}
                                />
                            </div>
                            
                            <p>{link.title}</p>
                        </div>
                    
                    </Link>
                )
            })}
        </nav>
    )
}