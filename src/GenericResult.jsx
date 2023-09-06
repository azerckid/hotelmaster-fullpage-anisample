import React from "react";
import { withStyles, createStyles } from "@material-ui/core/styles";
import { Keyframes, config } from "react-spring/renderprops";

const Spring = Keyframes.Spring({
  animating: [
    {
      opacity: "0",
      isPaused: "0",
      transform: "translateY(100%)",
      config: config.stiff
    },
    {
      opacity: "1",
      transform: "translateY(-50%)",
      config: config.stiff
    }
  ]
});

const GenericResult = (props) => {
  const { title, subtitle, result, classes } = props;
  return (
    <Spring state="animating">
      {(spring) => {
        const { opacity, transform } = spring;
        return (
          <div className={classes.wrapper}>
            <div className={classes.result}>
              <div className={classes.title} style={{ transform, opacity }}>
                {title}
              </div>
              <div
                className={classes.title}
                style={{ transform, opacity, color: "#24282f" }}
              >
                {result}
              </div>
              <div className={classes.subtitle} style={{ transform, opacity }}>
                {subtitle}
              </div>
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
      whiteSpace: "nowrap",
      fontSize: "64px",
      color: "red",
      fontFamily: "BrandonGrotesque-Black, Arial, sans-serif",
      zIndex: 15
    },
    subtitle: {
      margin: "160px 0 0 0",
      fontSize: "32px",
      color: "#24282f",
      fontFamily: "BrandonText-Regular, Arial, sans-serif",
      zIndex: 15
    },
    result: {
      position: "absolute",
      transform: "translateX(-50%) translateY(-50%)",
      left: "50%",
      top: "50%",
      width: "840px"
    }
  });

export default withStyles(styles)(GenericResult);
