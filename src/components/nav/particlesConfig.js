const config = {
  autoPlay: true,
  background: {
    color: {
      value: "#000"
    },
    image: "",
    position: "",
    repeat: "",
    size: "",
    opacity: 1
  },
  backgroundMask: {
    composite: "destination-out",
    cover: {
      color: {
        value: "#fff"
      },
      opacity: 1
    },
    enable: false
  },
  clear: true,
  defaultThemes: {},
  delay: 0,
  fullScreen: {
    enable: true,
    zIndex: -1
  },
  detectRetina: true,
  duration: 0,
  fpsLimit: 120,
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: false,
        mode: "push"
      },
      onDiv: {
        selectors: [],
        enable: false,
        mode: [],
        type: "circle"
      },
      onHover: {
        enable: false,
        mode: "repulse",
        parallax: {
          enable: false,
          force: 2,
          smooth: 10
        }
      },
      resize: {
        delay: 0.5,
        enable: true
      }
    },
    modes: {
      trail: {
        delay: 0.005,
        pauseOnStop: true,
        quantity: 5,
        particles: {
          color: {
            value: "#ff0000",
            animation: {
              enable: true,
              speed: 400,
              sync: true
            }
          },
          collisions: {
            enable: false
          },
          links: {
            enable: false
          },
          move: {
            outModes: {
              default: "destroy"
            },
            speed: 2
          },
          size: {
            value: {
              min: 1,
              max: 5
            },
            animation: {
              enable: true,
              speed: 5,
              sync: true,
              startValue: "min",
              destroy: "max"
            }
          }
        }
      },
      attract: {
        distance: 200,
        duration: 0.4,
        easing: "ease-out-quad",
        factor: 1,
        maxSpeed: 50,
        speed: 1
      },
      bounce: {
        distance: 200
      },
      bubble: {
        distance: 200,
        duration: 0.4,
        mix: false,
        divs: {
          distance: 200,
          duration: 0.4,
          mix: false,
          selectors: []
        }
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5
        },
        radius: 60
      },
      grab: {
        distance: 100,
        links: {
          blink: false,
          consent: false,
          opacity: 1
        }
      },
      push: {
        default: true,
        groups: [],
        quantity: 4
      },
      remove: {
        quantity: 2
      },
      repulse: {
        distance: 200,
        duration: 0.4,
        factor: 100,
        speed: 1,
        maxSpeed: 50,
        easing: "ease-out-quad",
        divs: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad",
          selectors: []
        }
      },
      slow: {
        factor: 3,
        radius: 200
      },
      light: {
        area: {
          gradient: {
            start: {
              value: "#ffffff"
            },
            stop: {
              value: "#000000"
            }
          },
          radius: 1000
        },
        shadow: {
          color: {
            value: "#000000"
          },
          length: 2000
        }
      }
    }
  },
  manualParticles: [],
  particles: {
    color: {
        value: "#ffffff",
    },
    links: {
        color: "#ffffff",
        distance: 180,
        enable: true,
        opacity: 0.5,
        width: 1,
    },
    move: {
        direction: "none",
        enable: true,
        outModes: {
            default: "bounce",
        },
        random: false,
        speed: 2.5,
        straight: false,
    },
    number: {
        density: {
            enable: true,
            area: 1000,
        },
        value: 80,
    },
    opacity: {
        value: 0.5,
    },
    shape: {
        type: "circle",
    },
    size: {
        value: { min: 1, max: 5 },
    },
},
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  responsive: [],
  smooth: false,
  style: {},
  themes: [],
  zLayers: 100,
  emitters: [],
  motion: {
    disable: false,
    reduce: {
      factor: 4,
      value: true
    }
  }
}

export default config