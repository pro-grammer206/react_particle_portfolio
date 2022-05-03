import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <main>
      <Head>
        <title>Home</title>
      </Head>

      <motion.div className="wall">
        <motion.section
          className="card"
          whileInView={{ scale: 1 }}
          viewport={{ amount: 0.2 }}
          initial={{ scale: 0 }}
          variants={container}
        >
          <p>React combined with nextjs can do wonders</p>
        </motion.section>
        <motion.section
          className="card"
          whileInView={{ scale: 1 }}
          viewport={{ amount: 0.2 }}
          initial={{ scale: 0 }}
        >
          <p>
            The Particle js library is responsible for creating this aweseome
            background effect
          </p>
        </motion.section>
        <motion.section
          className="card"
          whileInView={{ scale: 1 }}
          viewport={{ amount: 0.2 }}
          initial={{ scale: 0 }}
        >
          <p>Framer motion is used for creating subtle and snappy animations</p>
          <p>The pop effect uses animate prop</p>
        </motion.section>
      </motion.div>
    </main>
  );
}
