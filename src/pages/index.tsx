import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import style from "./index.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <div className={style.container}>
        <div className={style.content}>
          <h1>{siteConfig.tagline}</h1>
          <img
            src="img/macbook-g664ee8da5_1280.jpg"
            alt="take easy for life"
          ></img>
        </div>
      </div>
    </Layout>
  );
}
