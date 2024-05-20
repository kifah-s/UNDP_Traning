"use client";

import styles from "@/app/page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Content from "@/components/Content";
import Link from "next/link";
import { useState } from "react";

function Home() {
  // * Variables.
  let showContent = true;

  // * States.
  const [counter, setCounter] = useState(0);

  function pluse_1() {
    setCounter(counter + 1);
  }

  function minus_1() {
    setCounter(counter - 1);
  }

  return (
    <>
      <div className={styles.section1}>
        <Header text="Header" />

        {/* <a href="conten">{showContent && <Content text="Content .." />}</a> */}
        <Link href="conten">{showContent && <Content text="Content" />}</Link>

        <button
          style={{
            width: "50px",
            height: "30px",
            marginBottom: "20px",
            marginTop: "20px",
            fontSize: "25px",
          }}
          onClick={pluse_1}
        >
          +
        </button>

        <h1>counter: {counter}</h1>

        <button
          style={{
            width: "50px",
            height: "30px",
            marginTop: "20px",
            fontSize: "25px",
          }}
          onClick={minus_1}
        >
          -
        </button>

        <div className={styles.section2}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;

// * Min: 59.
