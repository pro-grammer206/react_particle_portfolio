import "../styles/globals.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Nav from "../components/Nav";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};
  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: isOn ? "#000" : "#0d47a1",
            },
            zIndex: 1,
          },

          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "square",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: false,
        }}
      />
      <div className="page">
        <Nav isOn={isOn} toggleSwitch={toggleSwitch} />
        <Component {...pageProps} />
      </div>
      <footer>
        <p>Made on {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}

export default MyApp;
