import { useRouter } from "next/router";
import Head from "next/head";
import git from "../public/github.svg";
import Image from "next/image";
import { motion } from "framer-motion";

function about() {
  const router = useRouter();
  return (
    <main>
      <Head>
        <title>{router.pathname.slice(1)}</title>
      </Head>
      <div className="wall">
        <motion.div
          className="card"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ amount: 0.2 }}
        >
          <h4>Vipin Kumar</h4>
          <h4>Web Developer</h4>
          <section className="subcard">
            <a
              href="https://github.com/pro-grammer206"
              rel="noreferrer"
              target="_blank"
            >
              <p>My Github link</p>
              <Image src={git} width="50px" height="50px" />
            </a>
            <a
              href="https://vipinvk.vercel.app/projects"
              rel="noreferrer"
              target="_blank"
              className="site_link"
            >
              My Projects list
            </a>
            <a
              href="https://vipin.vercel.app/projects"
              rel="noreferrer"
              target="_blank"
              className="site_link"
            >
              My blog site using graphql
            </a>
          </section>
        </motion.div>
        <motion.div
          className="card"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ amount: 0.2 }}
        >
          <section className="subcard">
            <h3>Libraries/Framworks used to build site</h3>
            <ul>
              <li>React</li>
              <li>NextJS</li>
              <li>Framer motion</li>
              <li>Particles js</li>
            </ul>
          </section>
        </motion.div>
        <motion.div
          className="card"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ amount: 0.2 }}
        >
          <section className="subcard">
            <h3>Features of this site</h3>
            <ul>
              <li>Uses awesome animations</li>
              <li>Toggle light/dark mode</li>
              <li>uses particlejs for animated background</li>
              <li>uses media queries for making site responsive</li>
            </ul>
          </section>
        </motion.div>
        <motion.div
          className="card"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ amount: 0.2 }}
        >
          <section className="subcard">
            <section>
              <h3>React Concepts used</h3>
              <ul>
                <li>Prop Drilling</li>
                <li>conditional styling</li>
              </ul>
            </section>
            <section>
              <h3>Hooks used</h3>
              <ul>
                <li>useState</li>
                <li>useRouter</li>
              </ul>
            </section>
          </section>
        </motion.div>
        <motion.div
          className="card"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ amount: 0.2 }}
        >
          <section className="subcard">
            <section>
              <h3>Technolgies worked with before</h3>
              <ul>
                <li>Bootstrap</li>
                <li>TailwindCSS</li>
                <li>ChakraUI</li>
                <li>ExpressJS</li>
                <li>MongoDB</li>
                <li>Mysql</li>
                <li>Contentful CMS</li>
                <li>GraphCMS</li>
                <li>Firebase</li>
              </ul>
            </section>
          </section>
        </motion.div>
        <motion.div
          className="card"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ amount: 0.2 }}
        >
          <section className="subcard">
            <section>
              <h3>Programming languages familiar with</h3>
              <ul>
                <li>Java</li>
                <li>Javascript</li>
                <li>Python</li>
              </ul>
            </section>
          </section>
        </motion.div>
      </div>
    </main>
  );
}

export default about;
