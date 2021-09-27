import Image from 'next/image';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Contentstack.module.css';
import bannerStyle from '../../styles/Home.module.css'
import cardStyle from '../../styles/Card.module.css';
import Footer from '../../components/Footer';


const ContentStack = (props) => {
    let {
            id,
            title,
            logoURL,
            companyName,
            companyTagline,
            sections,
		} = props;
    return (
        <div className={styles.csParent}>
             <Head>
					<title key="title">{title}</title>
					<link rel="shortcut icon" type="image/x-icon" href={`/${id}.ico`} />
			</Head>
            <Navbar />
            <div className={`container ${bannerStyle.sbContainer}`} style={{background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${logoURL})`, backgroundSize: 'cover'}} >
                    <h1>{companyName}</h1>
                    <h3>{companyTagline}</h3>                
			</div>
            {sections.map((section) => {
                return (
                    <div
                        key={section.sectionId}
                        className={`container section ${styles.csSection}`}
                    >
                        <div className="col">
                            <Image
                                src={section.bannerImageURL}
                                height="500"
                                width="600"
                                alt="bannerImage"
                            />
                        </div>
                        <div className="col">
                            <h1 className={cardStyle.cardTitle}>{section.title}</h1>
                            <h3>{section.subtitle}</h3>
                        </div>
                    </div>
                );
			})}

            <Footer />
        </div>
    )
}

export const getStaticProps = async () => {
    const url = 'https://anonyda.github.io/json-data-server/ssr-data/contentstackData.json';
    let res = await fetch(url);
    let data = await res.json();
    // console.log(data);
    return {
        props: data
    }
} 

export default ContentStack;