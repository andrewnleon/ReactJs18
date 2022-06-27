import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function CoverParticles() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Particles
        init={particlesInit}
        loaded={particlesLoaded}
        params={{
          fps_limit: 30,
          zLayers: 1,
          detectRetina: true,
          "background": {
            image: "url('./img/drewcity_metaverse.png')",
            color: "rgba(0,0,0,0.9)",
            position: "top center",
            repeat: "no-repeat"

          },
          "interactivity": {
            "events": {
              "onClick": {
                "enable": false,
                "mode": "push"
              },
              "onDiv": {
                "elementId": "repulse-div",
                "enable": false,
                "mode": "repulse"
              },
              "onHover": {
                "enable": true,
                "mode": "bubble",
                "parallax": {
                  "enable": false,
                  "force": 5,
                  "smooth": 10
                }
              },
              "resize": true
            },
            "modes": {
              "bubble": {
                "distance": 40,
                "duration": 2,
                "opacity": 8,
                "size": 6,
                "speed": 0
              },
              "connect": {
                "distance": 40,
                "lineLinked": {
                  "opacity": 0.5
                },
                "radius": 60
              },
              "grab": {
                "distance": 400,
                "lineLinked": {
                  "opacity": 1
                }
              },
              "push": {
                "quantity": 4
              },
              "remove": {
                "quantity": 2
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "slow": {
                "active": false,
                "radius": 0,
                "factor": 1
              }
            }
          },
          "particles": {
            "color": {
              "value": [
                "#4285f4",
                "#34A853",
                "#FBBC05",
                "#EA4335"
              ]
            },
            "lineLinked": {
              "blink": false,
              "color": "random",
              "consent": false,
              "distance": 40,
              "enable": true,
              "opacity": 1,
              "width": 1
            },
            "move": {
              "attract": {
                "enable": false,
                "rotate": {
                  "x": 600,
                  "y": 1200
                }
              },
              "bounce": false,
              "direction": "none",
              "enable": true,
              "outMode": "bounce",
              "random": false,
              "speed": 0,
              "straight": false
            },
            "number": {
              "density": {
                "enable": true,
                "area": 2000
              },
              "limit": 0,
              "value": 500
            },
            "opacity": {
              "animation": {
                "enable": false,
                "minimumValue": 0.5,
                "speed": 0,
                "sync": false
              },
              "random": false,
              "value": 40
            },
            "shape": {
              "type": "triangle"
            },
            "size": {
              "animation": {
                "enable": false,
                "minimumValue": 0.5,
                "speed": 0,
                "sync": false
              },
              "random": false,
              "value": 1.5
            }
          },
          "polygon": {
            "draw": {
              "enable": false,
              "lineColor": "rgba(0,0,0,0.9)",
              "lineWidth": 1.2
            },
            "enable": true,
            "move": {
              "radius": 1
            },
            "position": {
              "x": 15,
              "y": -5
            },
            "inlineArrangement": "equidistant",
            "scale": 3.2,
            "type": "inline",
            "url": "./img/me_1.svg"
          },
        }}
      />
  );
};

export default CoverParticles;
