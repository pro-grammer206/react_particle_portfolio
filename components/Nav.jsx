import Link from "next/link";
import { motion } from "framer-motion";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
function Nav({ isOn, toggleSwitch }) {
  return (
    <header>
      <motion.nav
        animate={{ x: 0 }}
        initial={{ x: "-100vw" }}
        transition={{ type: "spring", duration: 1 }}
      >
        <div className="switch" data-ison={isOn} onClick={toggleSwitch}>
          <motion.div className="handle" layout transition={spring} />
        </div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </motion.nav>
    </header>
  );
}

export default Nav;
