import React from 'react';
import Image from 'next/image';
import styles from '../styles/Card.module.css';

function Card({data}) {
    return (
        <div className={styles.container}>
            <div>
                <Image
                    src={data.bannerImageURL}  
                    height="500"
                    width="500"
                    alt="bannerImage"  
                />
            </div>
            <div className={styles.cardBody}>
                <h1 className={styles.cardTitle}>{data.title}</h1>
                <p>{data.subtitle}</p>
            </div>
        </div>
    )
}

export default Card;
