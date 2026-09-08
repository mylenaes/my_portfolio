import Particles from "@tsparticles/react";
import { useMemo } from "react";
import "./SpaceBackground.css";

function SpaceBackground({ children, theme = "dark" }) {
  const options = useMemo(() => {
    const isDark = theme === "dark";

    return {
      fullScreen: {
        enable: false,
      },
      background: {
        color: isDark ? "#07111F" : "#F5FAFF",
      },

      fpsLimit: 60,
      detectRetina: true,

      particles: {
        number: {
          value: 32,
          density: {
            enable: true,
            width: 1200,
            height: 800,
          },
        },

        color: {
          value: isDark ? "#B8C5D9" : "#315A78",
        },

        shape: {
          type: "circle",
        },

        opacity: {
          value: {
            min: 0.35,
            max: 0.65,
          },
        },

        size: {
          value: {
            min: 1,
            max: 2,
          },
        },

        move: {
          enable: true,
          speed: 6.0,
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "bounce",
          },
        },

        links: {
          enable: true,
          distance: 145,
          color: isDark ? "#8EA3BA" : "#52728C",
          opacity: isDark ? 0.18 : 0.12,
          width: 1,
        },
      },

      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },

          resize: {
            enable: true,
          },
        },

        modes: {
          grab: {
            distance: 120,
            links: {
              opacity: 0.3,
            },
          },
        },
      },

      responsive: [
        {
          maxWidth: 768,
          options: {
            particles: {
              number: {
                value: 20,
              },

              links: {
                distance: 110,
              },
            },

            interactivity: {
              events: {
                onHover: {
                  enable: false,
                },
              },
            },
          },
        },
      ],
    };
  }, [theme]);

  return (
    <div className="space-background">
      <Particles id="space-particles" options={options} />
      <div className="space-background-content">{children}</div>
    </div>
  );
}

export default SpaceBackground;
