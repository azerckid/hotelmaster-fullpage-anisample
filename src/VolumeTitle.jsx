import React from "react";
import { withStyles, createStyles } from "@material-ui/core/styles";
import { Keyframes, config } from "react-spring/renderprops";

const Wave = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="200"
    height="200"
    viewBox="0 0 200 200"
    {...props}
  >
    <path
      d="M0 50
             C 40 10, 60 10, 100 50 C 140 90, 160 90, 200 50
             C 240 10, 260 10, 300 50 C 340 90, 360 90, 400 50
             L 400 100 L 0 100"
      fill="#65A5F4"
      stroke="#65A5F4"
      stroke-width="2"
      transform="rotate(0) translate(0)"
    />
  </svg>
);

const Spring = Keyframes.Spring({
  animating: [
    {
      isPaused: "0",
      waterBackground: "#65A5F4",
      bottom: "-20%",
      left: "-5%"
    },
    {
      bottom: "50%",
      config: config.slow
    },
    {
      isPaused: "1",
      config: {
        duration: 1000
      }
    },
    {
      bottom: "110%",
      config: config.slow
    },
    {
      waterBackground: "#FFF",
      config: config.stiff
    }
  ]
});

const VolumeTitle = (props) => {
  const { classes, onEnd } = props;
  return (
    <Spring state="animating" onRest={onEnd}>
      {(spring) => {
        const { bottom, left, waterBackground } = spring;
        return (
          <div className={classes.wrapper}>
            <div
              className={classes.water}
              style={{
                bottom: `calc(${bottom} - (150% - 100px))`,
                background: waterBackground
              }}
            />
            <div className={classes.waves} style={{ left, bottom }}>
              <Wave className={classes.wave} />
              <Wave className={classes.wave} />
              <Wave className={classes.wave} />
              <Wave className={classes.wave} />
              <Wave className={classes.wave} />
              <Wave className={classes.wave} />
              <Wave className={classes.wave} />
              <Wave className={classes.wave} />
              <Wave className={classes.wave} />
              <Wave className={classes.wave} />
              <Wave className={classes.wave} />
              <Wave className={classes.wave} />
              <Wave className={classes.wave} />
              <Wave className={classes.wave} />
              <Wave className={classes.wave} />
              <Wave className={classes.wave} />
              <Wave className={classes.wave} />
              <Wave className={classes.wave} />
              <Wave className={classes.wave} />
              <Wave className={classes.wave} />
              <Wave className={classes.wave} />
              <Wave className={classes.wave} />
              <Wave className={classes.wave} />
              <Wave className={classes.wave} />
              <Wave className={classes.wave} />
              <Wave className={classes.wave} />
              <Wave className={classes.wave} />
              <Wave className={classes.wave} />
            </div>
            <div className={classes.title}>Total Volume of Liquid Sold</div>
          </div>
        );
      }}
    </Spring>
  );
};

const styles = (theme) =>
  createStyles({
    wrapper: {
      background: "#FFFFFF",
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
      top: "10%",
      fontSize: "64px",
      color: "red",
      fontFamily: "BrandonGrotesque-Black, Arial, sans-serif"
    },
    waves: {
      display: "flex",
      flexWrap: "nowrap",
      position: "absolute",
      height: "200px",
      zIndex: 3
    },
    wave: {
      flex: "none"
    },
    water: {
      height: "150%",
      position: "absolute",
      width: "100%",
      zIndex: 2
    }
  });

export default withStyles(styles)(VolumeTitle);
