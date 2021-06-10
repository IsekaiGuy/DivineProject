export const slideInLeft = {
  hidden: {
    opacity: 0,
    x: -600,
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
    x: -600,
    transition: {
      duration: 0.5,
    },
  },
};

export const slideInRight = {
  hidden: {
    opacity: 0,
    x: 600,
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
    x: 600,
    transition: {
      duration: 0.5,
    },
  },
};
