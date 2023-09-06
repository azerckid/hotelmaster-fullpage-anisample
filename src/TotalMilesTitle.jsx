import React from "react";
import { withStyles, createStyles } from "@material-ui/core/styles";
import { Keyframes, config } from "react-spring/renderprops";

const items = [1, 2, 3, 4, 5, 6, 7, 8];

const Trail = Keyframes.Trail({
  animating: [
    {
      y: "0",
      opacity: "1",
      transform: "-100"
    },
    {
      transform: "0",
      config: config.slow
    },
    {
      y: "1",
      config: {
        duration: 2500
      }
    },
    {
      transform: "100",
      config: config.slow
    },
    {
      opacity: "1",
      config: config.slow
    }
  ]
});

const TotalMilesTitle = (props) => {
  const { classes, onEnd } = props;

  return (
    <div className={classes.wrapper}>
      <Trail items={items} state="animating" onRest={onEnd}>
        {(item, i) => (trail) => {
          const { transform, opacity } = trail;
          const translateX = `translateX(${
            i % 2 === 0 ? -1 * Number(transform) : Number(transform)
          }%)`;
          const style = {
            left: "50%",
            top: "50%",
            width: "100%",
            height: "100px",
            overflow: "hidden",
            display: "flex",
            flex: "none",
            justifyContent: "center",
            alignItems: "center",
            fontSize: `64px`,
            fontFamily:
              "'BrandonGrotesque-Black', Arial, Helvetica, sans-serif",
            transform: translateX,
            whiteSpace: "nowrap",
            color: "red",
            opacity
          };
          return <div style={style}>Total Miles Delivered</div>;
        }}
      </Trail>
    </div>
  );
};

const styles = (theme) =>
  createStyles({
    wrapper: {
      width: "100%",
      height: "100%",
      position: "relative",
      overflow: "hidden"
    }
  });

export default withStyles(styles)(TotalMilesTitle);
