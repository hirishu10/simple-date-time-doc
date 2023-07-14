import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "npm",
    Svg: require("@site/static/img/npm.svg").default,
    description: (
      <>
        <code>npm i @hirishu10/simple-date-time</code>
      </>
    ),
  },
  {
    title: "yarn",
    Svg: require("@site/static/img/yarn.svg").default,
    description: (
      <>
        <code>yarn add @hirishu10/simple-date-time</code>
      </>
    ),
  },
  {
    title: "Version",
    Svg: require("@site/static/img/version.svg").default,
    description: (
      <>
        <span style={{ fontWeight: "bold", fontSize: "20px" }}>
          New Version
        </span>{" "}
        out now please read the{" "}
        <a href="/docs/intro">
          <code style={{}}>Docs</code>
        </a>{" "}
        to know more.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
