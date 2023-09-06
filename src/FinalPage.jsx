import React from "react";
import { withStyles, createStyles } from "@material-ui/core/styles";
import { Keyframes } from "react-spring/renderprops";

const WineGlasses = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...props}>
    <path
      fill="#FA743E"
      d="M29.156 4.159c-.492-.245-.694-.849-.449-1.341l1.07-2.146c.245-.492.849-.694 1.341-.449s.694.849.449 1.341l-1.07 2.146c-.245.492-.849.694-1.341.449m.98 2.199l-.027-.083c-.167-.499.104-1.043.603-1.21l3.904-1.296c.498-.167 1.044.104 1.21.603l.027.083c.167.499-.105 1.044-.604 1.211l-3.903 1.295c-.498.167-1.043-.104-1.21-.603m.514 2.264c-.245.492-.043 1.096.449 1.341l2.146 1.07c.492.245 1.096.043 1.341-.449s.043-1.096-.449-1.341l-2.146-1.07c-.492-.245-1.096-.043-1.341.449"
    />
    <path
      fill="#E1E8ED"
      d="M11.13 32.026c-1.042-.349-3.118-.951-2.678-4.476l.646-5.174c.121-.97 1.177-1.265 2.329-1.811 1.001-.475 3.415-2.103 4.009-6.857.518-4.156-.265-10.722-.47-12.307L10.388.872l-4.58-.53c-.562 1.497-2.823 7.71-3.267 11.875-.507 4.764 1.472 6.9 2.338 7.591.997.794 1.958 1.322 1.854 2.294-.103.972-.177 1.652-.552 5.185-.376 3.532-2.535 3.644-3.629 3.746-2.077.193-2.192 1.882-1.188 1.988 1.006.108 5.235.603 5.235.603s4.231.484 5.234.608c1.002.127 1.275-1.544-.703-2.206z"
    />
    <path
      fill="#FFCC4D"
      d="M13.783 3.516c-.383.243-2.359 1.308-4.743 1.508-1.653.14-3.701-.07-4.037 1.041-.678 2.241-1.217 4.221-1.434 6.262-.412 3.865.928 5.729 1.73 6.48l.022.019c.098.079 1.052.808 2.85 1.016 1.786.207 2.917-.273 3.047-.332.014-.006.018-.009.031-.016.953-.549 2.68-2.058 3.161-5.913.354-2.842.069-6.934-.194-9.597-.02-.204-.05-.711-.433-.468z"
    />
    <circle fill="#FFD983" cx="12.352" cy="6.533" r=".645" />
    <circle fill="#FFD983" cx="10.241" cy="8.682" r=".645" />
    <circle fill="#FFD983" cx="12.661" cy="11.159" r=".645" />
    <circle fill="#FFD983" cx="9.173" cy="12.769" r=".645" />
    <circle fill="#FFD983" cx="7.112" cy="10.095" r=".645" />
    <circle fill="#FFD983" cx="6.768" cy="7.044" r=".645" />
    <path
      fill="#E1E8ED"
      d="M20.793 33.477c1.042-.349 3.118-.951 2.678-4.476l-.646-5.174c-.121-.97-1.177-1.265-2.329-1.811-1.001-.475-3.415-2.103-4.009-6.857-.518-4.156.265-10.722.47-12.307l4.578-.529 4.578-.529c.562 1.497 2.823 7.71 3.267 11.875.507 4.764-1.472 6.9-2.338 7.591-.997.794-1.958 1.322-1.854 2.294.103.972.177 1.652.552 5.185.376 3.532 2.535 3.644 3.629 3.746 2.077.193 2.192 1.882 1.188 1.988-1.006.108-5.235.603-5.235.603s-4.231.484-5.234.608c-1 .126-1.273-1.544.705-2.207z"
    />
    <path
      fill="#FFCC4D"
      d="M18.14 4.967c.383.243 2.36 1.308 4.743 1.508 1.653.139 3.702-.071 4.038 1.041.678 2.241 1.217 4.221 1.434 6.262.412 3.865-.928 5.729-1.73 6.48l-.022.019c-.098.079-1.052.808-2.85 1.016-1.786.207-2.917-.273-3.047-.332-.014-.006-.018-.009-.031-.016-.953-.549-2.68-2.058-3.161-5.913-.354-2.842-.069-6.934.194-9.597.019-.204.049-.711.432-.468z"
    />
    <circle fill="#FFD983" cx="19.571" cy="7.985" r=".645" />
    <circle fill="#FFD983" cx="21.682" cy="10.133" r=".645" />
    <circle fill="#FFD983" cx="19.262" cy="12.61" r=".645" />
    <circle fill="#FFD983" cx="22.75" cy="14.221" r=".645" />
    <circle fill="#FFD983" cx="24.811" cy="11.546" r=".645" />
    <circle fill="#FFD983" cx="25.155" cy="8.496" r=".645" />
  </svg>
);

const Spring = Keyframes.Spring({
  animating: [
    {
      opacity: "0",
      isPaused: "0",
      transform: "translateX(-50%) translateY(100%)"
    },
    {
      opacity: "1",
      transform: "translateX(-50%) translateY(-50%)"
    }
  ]
});

const FinalPage = (props) => {
  const { classes } = props;
  return (
    <Spring state="animating">
      {(spring) => {
        const { opacity, transform } = spring;
        return (
          <div className={classes.wrapper}>
            <div className={classes.result} style={{ transform }}>
              <div className={classes.title} style={{ opacity }}>
                From all of us at Drizly,
                <br />
                Thanks for spending this year with us.
                <br />
                <WineGlasses width={160} style={{ marginTop: 16 }} />
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
    result: {
      position: "absolute",
      transform: "translateX(-50%) translateY(-50%)",
      left: "50%",
      top: "50%"
    }
  });

export default withStyles(styles)(FinalPage);
