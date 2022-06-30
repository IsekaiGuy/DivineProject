export const slideInLeft = {
  hidden: {
    opacity: 0,
    x: "-60%",
  },
  show: {
    opacity: 1,
    x: 0,
    transform: "none",
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    x: "-60%",
    transition: {
      duration: 0.5,
    },
  },
};

export const slideInRight = {
  hidden: {
    opacity: 0,
    x: "60%",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    x: "60%",
    transition: {
      duration: 0.5,
    },
  },
};
