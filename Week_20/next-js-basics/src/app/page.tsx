import styles from "@/app/page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Content from "@/components/Content";
import Link from "next/link";

function Home() {
  // * Variables.
  let showContent = true;

  return (
    <>
      <div className={styles.section1}>
        <Header text="Header .." />

        {/* <a href="conten">{showContent && <Content text="Content .." />}</a> */} 
        <Link href="conten">{showContent && <Content text="Content .." />}</Link>

        <div className={styles.section2}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;


// * Min: 59.