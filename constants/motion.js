export const fadeInMotion = ({
  duration = 0.15,
  ease = "easeInOut",
  initialDelay = 0,
  animateInDelay = 0.15,
}) => ({
  initial: { opacity: 0, transition: { ease, duration } },
  animate: (index = 0) => ({
    opacity: 1,
    transition: {
      ease,
      delay: initialDelay + index * animateInDelay,
      duration,
    },
  }),
  exit: { opacity: 0, transition: { ease, duration } },
});

export const fadeInDownMotion = ({
  duration = 0.15,
  ease = "easeInOut",
  initialDelay = 0,
  animateInDelay = 0.15,
  offset = 10,
  fadeExit = false,
  exitReverse = false,
  exitDuration,
}) => ({
  initial: { y: -offset, opacity: 0, transition: { ease, duration } },
  animate: (index = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      ease,
      delay: initialDelay + index * animateInDelay,
      duration,
    },
  }),
  exit: {
    ...(!fadeExit && { y: (exitReverse ? -1 : 1) * offset }),
    opacity: 0,
    transition: { ease, duration: exitDuration || duration },
  },
});
