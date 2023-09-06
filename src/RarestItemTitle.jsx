import React from "react";
import { withStyles, createStyles } from "@material-ui/core/styles";
import { Keyframes, config } from "react-spring/renderprops";
import Sparkle from "./Sparkle";

const Spring = Keyframes.Spring({
  animating: [
    {
      opacity: "0",
      isPaused: "0"
    },
    {
      opacity: "1"
    },
    {
      isPaused: "1",
      config: {
        duration: 1500
      }
    },
    {
      opacity: "0",
      config: config.gentle
    }
  ]
});

const RarestItemTitle = (props) => {
  const { classes, onEnd } = props;
  return (
    <Spring state="animating" onRest={onEnd}>
      {(spring) => {
        const { opacity } = spring;
        return (
          <div className={classes.wrapper}>
            <Sparkle width={160} delay={0} className={classes.sparkleOne} />
            <Sparkle width={120} delay={50} className={classes.sparkleTwo} />
            <Sparkle width={140} delay={100} className={classes.sparkleThree} />
            <Sparkle width={160} delay={150} className={classes.sparkleFour} />
            <Sparkle width={120} delay={200} className={classes.sparkleFive} />
            <Sparkle width={140} delay={250} className={classes.sparkleSix} />
            <div className={classes.title} style={{ opacity }}>
              Rarest Item
            </div>
          </div>
        );
      }}
    </Spring>
  );
};

const styles = (theme) =>
  createStyles({
    wrapper: {
      width: "100%",
      height: "100%",
      position: "relative",
      overflow: "hidden"
    },
    title: {
      position: "absolute",
      whiteSpace: "nowrap",
      transform: "translateX(-50%) translateY(-50%)",
      left: "50%",
      top: "50%",
      fontSize: "64px",
      color: "red",
      fontFamily: "BrandonGrotesque-Black, Arial, sans-serif",
      zIndex: 15
    },
    sparkleOne: {
      transform: "translateX(-50%) translateY(-50%)",
      left: "30%",
      top: "30%",
      position: "absolute",
      zIndex: 10
    },
    sparkleTwo: {
      transform: "translateX(-50%) translateY(-50%)",
      left: "70%",
      top: "50%",
      position: "absolute",
      zIndex: 10
    },
    sparkleThree: {
      transform: "translateX(-50%) translateY(-50%)",
      left: "30%",
      top: "70%",
      position: "absolute",
      zIndex: 10
    },
    sparkleFour: {
      transform: "translateX(-50%) translateY(-50%)",
      left: "90%",
      top: "10%",
      position: "absolute",
      zIndex: 10
    },
    sparkleFive: {
      transform: "translateX(-50%) translateY(-50%)",
      left: "10%",
      top: "90%",
      position: "absolute",
      zIndex: 10
    },
    sparkleSix: {
      transform: "translateX(-50%) translateY(-50%)",
      left: "90%",
      top: "90%",
      position: "absolute",
      zIndex: 10
    }
  });

export default withStyles(styles)(RarestItemTitle);
