import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home(props) {
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
					{/* <link rel="shortcut icon" type="image/x-icon" href={`/${id}.ico`} /> */}
			</Head>
      <Navbar />
      <div className={`container ${styles.sbContainer}`} style={{background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${logoURL})`, backgroundSize: 'cover'}}>
        <h1>{companyName}</h1>
        <h3>{companyTagline}</h3>

        {/* <Image src={logoURL} height="500" width="700" alt="logoImage" 
      /> */}
                
			</div>
      <div className="container card-container">
      {sections.map((section) => {
            return (
              <Card data={section} key={section.sectionId}/>
            );
			})}
      </div>
      <Footer />
    </>
  )
}

export const getStaticProps = async () => {
  const url = 'https://anonyda.github.io/json-data-server/ssr-data/surfboardData.json';
  let res = await fetch(url);
  let data = await res.json();
  // console.log(data);
  return {
      props: data
  }
} 