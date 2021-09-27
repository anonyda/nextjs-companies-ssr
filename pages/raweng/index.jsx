import Image from 'next/image';
import Head from 'next/head';
import Navbar from "../../components/Navbar";
import styles from '../../styles/Home.module.css'
import cardStyle from '../../styles/Card.module.css';
import Footer from '../../components/Footer';



const RawEng = (props) => {
    let {
        id,
        title,
        logoURL,
        companyName,
        companyTagline,
        sections,
    } = props;
    return (
        <>
            <Head>
					<title key="title">{title}</title>
					<link rel="shortcut icon" type="image/x-icon" href={`/${id}.ico`} />
			</Head>
            <Navbar />
            <div className={`container ${styles.sbContainer}`} style={{background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${logoURL})`, backgroundSize: 'cover'}}>
                    <h1>{companyName}</h1>
                    <h3>{companyTagline}</h3>
                    {/* <Image src={logoURL} height="500" width="700" alt="logoImage" /> */}
                    
                </div>
                {sections.map((section) => {
                    return (
                        <div
                            key={section.sectionId}
                            className="container section"
                        >
                            <div className="col">
                                <Image
                                    src={section.bannerImageURL}
                                    height="1600"
                                    width="2500"
                                    alt="bannerImage"
                                />
                            </div>
                            <div className="col">
                                <h1 className={cardStyle.cardTitle}> {section.title}</h1>
                                <h4>{section.subtitle}</h4>
                            </div>
                        </div>
                    );
                })}
                <Footer />
            </>
    )
}

export const getStaticProps = async () => {
    const url = 'https://anonyda.github.io/json-data-server/ssr-data/rawEng.json';
    let res = await fetch(url);
    let data = await res.json();
    // console.log(data);
    return {
        props: data
    }
} 

export default RawEng;