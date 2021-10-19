import Particles from "react-particles-js";

import React from "react";

function Particle() {
  return (
    <>
      <Particles
        width="100%"
        height="100vh"
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 570,
              },
            },
            color: {
              value: "#520f63",
            },
            shape: {
              type: "triangle",
              stroke: {
                width: 0,
              },
              polygon: {
                nb_sides: 6,
              },
            },
            line_linked: {
              enable: false,
              distance: 570,
              opacity: 5,
              width: 5,
              shadow: {
                enable: true,
                color: "#ffffff",
                blur: 5,
              },
            },
            move: {
              enable: true,
              random: true,
              speed: 5,
              attract: {
                rotateX: 5,
                rotateY: 5,
              },
            },
            size: {
              value: 5,
              random: true,
              anim: {
                speed: 5,
                size_min: 5,
              },
            },
            opacity: {
              value: 1,
              anim: {
                speed: 1,
                opacity_min: 0,
              },
            },
          },
        }}
      />
    </>
  );
}

export default Particle;
