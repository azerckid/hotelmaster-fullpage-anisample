import React from "react";
import { withStyles, createStyles } from "@material-ui/core/styles";
import { Keyframes, config } from "react-spring/renderprops";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const CustomerTwo = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...props}>
    <path
      fill="#AF7E57"
      d="M8 19c0 2.209-1.119 4-2.5 4S3 21.209 3 19s1.119-4 2.5-4S8 16.791 8 19zm25 0c0 2.209-1.119 4-2.5 4S28 21.209 28 19s1.119-4 2.5-4 2.5 1.791 2.5 4z"
    />
    <path
      fill="#AF7E57"
      d="M5 20.562c0-8.526 5.82-15.438 13-15.438s13 6.912 13 15.438S25.18 36 18 36 5 29.088 5 20.562z"
    />
    <path
      fill="#60352A"
      d="M13 20c-.552 0-1-.447-1-1v-2c0-.552.448-1 1-1s1 .448 1 1v2c0 .553-.448 1-1 1zm10 0c-.553 0-1-.447-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .553-.447 1-1 1z"
    />
    <path
      fill="#915A34"
      d="M19 24h-2c-.552 0-1-.447-1-1s.448-1 1-1h2c.553 0 1 .447 1 1s-.447 1-1 1z"
    />
    <path
      fill="#60352A"
      d="M25.274 27.038l-3.294-.941c.003-.034.02-.063.02-.097 0-.553-.447-1-1-1h-6c-.552 0-1 .447-1 1 0 .034.016.063.019.097l-3.294.941c-.531.152-.838.706-.686 1.236.125.44.525.726.961.726.091 0 .184-.013.275-.038l1.931-.552c-.216.293-.274.688-.1 1.037.175.351.528.553.895.553.15 0 .303-.034.446-.105l1.577-.788c.036.326.213.631.529.788.143.071.296.105.446.105.367 0 .72-.202.896-.553l.105-.211.105.211c.176.351.529.553.896.553.15 0 .303-.034.446-.105.315-.157.493-.462.529-.788l1.576.788c.144.071.297.105.447.105.367 0 .72-.202.896-.553.174-.349.116-.744-.1-1.037l1.931.552c.091.025.183.038.275.038.434 0 .835-.286.961-.726.151-.53-.156-1.084-.688-1.236zM18 0c8.615 0 14 6.358 14 11.656 0 5.298-1.077 7.417-2.154 5.298l-2.153-4.238s-6.462 0-8.615-2.12c0 0 3.23 6.358-3.231 0 0 0 1.077 4.239-5.385-1.06 0 0-3.23 2.12-4.308 7.417C5.855 18.423 4 16.954 4 11.656 4 6.357 8.308 0 18 0z"
    />
  </svg>
);

const CustomerThree = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...props}>
    <path
      fill="#0B0200"
      d="M18 3c6 0 16 3 16 16s0 16-3 16-7-3-13-3-9.915 3-13 3c-3.343 0-3-12-3-16C2 6 12 3 18 3z"
    />
    <path
      fill="#7C533E"
      d="M6 18.562c0-8.526 5.373-15.438 12-15.438s12 6.912 12 15.438S24.627 34 18 34 6 27.088 6 18.562z"
    />
    <path
      fill="#DF1F32"
      d="M18 30c-2.347 0-3.575-1.16-3.707-1.293-.391-.391-.391-1.023 0-1.414.387-.387 1.013-.39 1.404-.01.051.047.806.717 2.303.717 1.519 0 2.273-.69 2.305-.719.398-.373 1.027-.362 1.408.029.379.393.38 1.011-.006 1.397C21.575 28.84 20.347 30 18 30z"
    />
    <path
      fill="#3D2E24"
      d="M19 25h-2c-.552 0-1-.447-1-1s.448-1 1-1h2c.553 0 1 .447 1 1s-.447 1-1 1z"
    />
    <path
      fill="#0B0200"
      d="M3.064 24c-.03-.325-.064-.647-.064-1 0-5 3 .562 3-3 0-3.563 2-4 4-6l3-3s5 3 9 3 8 2 8 6 3-2 3 3c0 .355-.033.673-.058 1h1.049C34 22.523 34 20.868 34 19 34 6 24 1 18 1S2 6 2 19c0 1.158-.028 2.986.012 5h1.052z"
    />
    <path d="M13 22c-.552 0-1-.447-1-1v-2c0-.552.448-1 1-1s1 .448 1 1v2c0 .553-.448 1-1 1zm10 0c-.553 0-1-.447-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .553-.447 1-1 1z" />
  </svg>
);

const Trail = Keyframes.Trail({
  animating: [
    {
      isPaused: "0",
      opacity: "0",
      transform: "translateY(100%)"
    },
    {
      opacity: "1",
      transform: "translateY(0%)",
      config: config.gentle
    },
    {
      isPaused: "1",
      config: {
        duration: 1500
      }
    },
    {
      isPaused: "0",
      opacity: "0",
      transform: "translateY(100%)"
    }
  ]
});

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
        duration: 2000
      }
    },
    {
      opacity: "0",
      config: config.gentle
    }
  ]
});

const CustomersTitle = (props) => {
  const { classes, onEnd } = props;

  return (
    <div className={classes.wrapper}>
      <Spring state="animating" onRest={onEnd}>
        {(spring) => {
          const { opacity } = spring;
          const style = {
            opacity
          };
          return (
            <div className={classes.title} style={style}>
              Number of Customers Served
            </div>
          );
        }}
      </Spring>
      <div className={classes.customers}>
        <Trail items={items} state="animating">
          {(item, i) => (trail) => {
            const { transform, opacity } = trail;
            const style = {
              transform,
              flex: "none",
              opacity
            };
            const Customer = i % 2 === 0 ? CustomerTwo : CustomerThree;
            return <Customer width={120} style={style} />;
          }}
        </Trail>
      </div>
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
    },
    title: {
      whiteSpace: "nowrap",
      fontSize: "64px",
      color: "red",
      fontFamily: "BrandonGrotesque-Black, Arial, sans-serif",
      zIndex: 15,
      position: "absolute",
      left: "50%",
      top: "20%",
      transform: "translateX(-50%) translateY(-50%)"
    },
    customers: {
      position: "absolute",
      bottom: "200px",
      width: "100%",
      left: "0",
      display: "flex",
      flexWrap: "nowrap",
      justifyContent: "center"
    }
  });

export default withStyles(styles)(CustomersTitle);
