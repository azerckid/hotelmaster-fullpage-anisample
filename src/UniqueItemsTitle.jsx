import React from "react";
import { withStyles, createStyles } from "@material-ui/core/styles";
import { Keyframes, config } from "react-spring/renderprops";
import GenericAnimatedSvg from "./GenericAnimatedSvg";

const Whiskey = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...props}>
    <path fill="#CCD6DD" d="M6.719 9.987L8.667 31h18.5l2.145-21.719z" />
    <path
      fill="#E27E00"
      d="M28.583 19.229l-21.476.146s1.06 10.875 3.372 10.875H25.5c2.362 0 3.083-11.021 3.083-11.021z"
    />
    <path
      fill="#FFB900"
      d="M17.984 17.438c-5.468 0-9.901.831-9.901 1.855 0 .028.016.055.022.082.15.642 2.037 1.199 4.809 1.51l10.344-.023c2.661-.315 4.459-.86 4.606-1.486.006-.027.022-.054.022-.082-.001-1.026-4.434-1.856-9.902-1.856z"
    />
    <path
      fill="#F4BD61"
      d="M16.396 21.122l1.937.961 5.473-.92-.565-.302c-1.523.181-3.322.287-5.257.287-.542 0-1.07-.01-1.588-.026z"
    />
    <path
      fill="#F1F2F2"
      d="M19 18.292l-6.203.833 3.599 1.997c.518.016 1.046.026 1.588.026 1.935 0 3.734-.106 5.257-.287L19 18.292z"
    />
    <path fill="#E9AB61" d="M18.299 27.76l4.439-1.359 1.068-5.238-5.473.92z" />
    <path
      fill="#E4973E"
      d="M16.396 21.122c-1.251-.038-2.421-.12-3.467-.238l.464 5.264 4.906 1.612.034-5.677-1.937-.961z"
    />
    <path
      fill="#D1D3D4"
      d="M12.797 19.125l.132 1.76c1.046.118 2.216.2 3.467.238l-3.599-1.998z"
    />
    <path
      fill="#8899A6"
      d="M30.088 7.83c-.649-.048-1.217.418-1.276 1.064l-1.478 16.255C26.764 28.233 25.376 30 21 30h-6c-4.596 0-5.896-1.947-6.414-5.324L7.151 8.894c-.059-.646-.624-1.12-1.276-1.064-.646.059-1.122.63-1.063 1.276l2.005 22.049c.256 1.919 1.41 3.02 3.165 3.02h16c2.535 0 3.022-1.737 3.17-3.068l2-22c.058-.647-.418-1.218-1.064-1.277z"
    />
    <path
      fill="#CCD6DD"
      d="M31.2 8.998c0 1.85-4.028 3.35-13.2 3.35s-13.2-1.5-13.2-3.35c0-1.851 4.028-3.35 13.2-3.35s13.2 1.499 13.2 3.35z"
    />
    <path
      fill="#FFF"
      d="M30.529 9.103c-.286-.471-.901-.621-1.374-.336-2.333 1.416-8.813 1.604-11.121 1.546-.008 0-.014.004-.022.004-.007 0-.014-.004-.021-.004-2.3.057-8.785-.129-11.121-1.546-.472-.286-1.087-.137-1.374.336s-.136 1.087.336 1.374c2.795 1.696 9.322 1.842 11.495 1.842.37 0 .607-.004.685-.005.078.001.314.005.685.005 2.173 0 8.7-.147 11.495-1.842.473-.288.623-.902.337-1.374z"
    />
  </svg>
);

const Wine = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...props}>
    <circle fill="#CCD6DD" cx="7.189" cy="27.5" r="1.5" />
    <path
      fill="#CCD6DD"
      d="M9.609 13.234c.051-.237.08-.482.08-.734 0-1.933-1.567-3.5-3.5-3.5-1.764 0-3.208 1.308-3.45 3.005-.017 0-.033-.005-.05-.005-1.104 0-2 .896-2 2s.896 2 2 2c.033 0 .063-.008.095-.01-.058.16-.095.33-.095.51 0 .46.212.867.539 1.143-.332.357-.539.831-.539 1.357 0 1.104.896 2 2 2 0 .375.11.721.289 1.021-.727.103-1.289.723-1.289 1.479 0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5c0-.18-.037-.35-.095-.51.032.002.062.01.095.01 1.104 0 2-.896 2-2 0-.601-.27-1.133-.69-1.5.419-.367.69-.899.69-1.5 0-.378-.111-.728-.294-1.03.097.015.193.03.294.03 1.104 0 2-.896 2-2 0-.771-.441-1.432-1.08-1.766z"
    />
    <circle fill="#E4EBEF" cx="5.689" cy="19" r="1" />
    <path
      fill="#E4EBEF"
      d="M8.689 13c0-1.105-.895-2-2-2s-2 .895-2 2c0 .032.008.063.01.095-.16-.058-.33-.095-.51-.095-.829 0-1.5.671-1.5 1.5s.671 1.5 1.5 1.5c.198 0 .385-.04.558-.11.172.638.749 1.11 1.442 1.11.829 0 1.5-.671 1.5-1.5 0-.248-.066-.478-.172-.684.69-.315 1.172-1.007 1.172-1.816z"
    />
    <path
      fill="#C1694F"
      d="M7.301 3.076s-.817-.798-.873-.842c.233-.618.164-1.269-.25-1.692-.627-.616-1.758-.488-2.536.29L1.521 2.953c-.777.777-.906 1.909-.29 2.536.423.413 1.073.483 1.692.25.045.055.842.873.842.873.781.78 2.047.78 2.828 0l.707-.708c.781-.781.781-2.047.001-2.828z"
    />
    <path
      fill="#A95233"
      d="M6.727 3.985c.096-.096.395-.412.703-.75-.043-.053-.08-.109-.13-.159 0 0-.817-.798-.873-.842-.112.298-.289.59-.542.842L3.766 5.197c-.253.253-.545.43-.843.542.045.055.842.873.842.873.049.049.106.086.159.13.291-.261.584-.537.682-.634l2.121-2.123z"
    />
    <path
      fill="#264612"
      d="M34.9 23.787l-5.067-5.067c-3.664-3.664-7.322-4.14-14.358-6.945l-3.149 3.149c3.231 6.61 3.236 10.739 6.9 14.403l5.068 5.068c.993.993 1.787 1.81 2.782.816l8.409-8.412c.996-.996.408-2.019-.585-3.012z"
    />
    <path
      fill="#FFE8B6"
      d="M16.205 12.164s1.739.644-.56 2.943c-2.122 2.122-2.917.651-2.917.651l-3.447-3.447 3.536-3.536 3.388 3.389z"
    />
    <path
      fill="#FFD983"
      d="M13.124 9.083L12.11 8.068l-3.536 3.535 1.014 1.015c.994.993.819 1.055 2.644-.77l.592-.593c1.442-1.443 1.293-1.179.3-2.172z"
    />
    <path
      fill="#264612"
      d="M12.463 7.007c.586.586.586 1.536-.001 2.122l-2.827 2.827c-.586.587-1.536.587-2.122 0-.586-.585-.586-1.536 0-2.122l2.827-2.827c.587-.585 1.537-.586 2.123 0z"
    />
    <path
      fill="#FFE8B6"
      d="M28.373 20.089c-.781-.78-2.048-.78-2.829 0l-4.949 4.95c-.781.78-.781 2.047 0 2.828l4.242 4.242c.781.781 2.048.781 2.829 0l4.949-4.949c.781-.781.781-2.048 0-2.828l-4.242-4.243z"
    />
  </svg>
);

const Beer = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...props}>
    <path
      fill="#FFAC33"
      d="M31 5.718h-6v4h4s2 0 2 2v12c0 2-2 2-2 2h-4v4h6c2.206 0 4-1.794 4-4v-16c0-2.206-1.794-4-4-4z"
    />
    <path
      fill="#FFCC4D"
      d="M27 6H3v26c0 2.209 1.791 4 4 4h16c2.209 0 4-1.791 4-4V6z"
    />
    <path
      fill="#F4900C"
      d="M8.5 32c-.552 0-1-.447-1-1V15c0-.552.448-1 1-1s1 .448 1 1v16c0 .553-.448 1-1 1zm6.5 0c-.552 0-1-.447-1-1V15c0-.552.448-1 1-1s1 .448 1 1v16c0 .553-.448 1-1 1zm6.5 0c-.553 0-1-.447-1-1V15c0-.552.447-1 1-1s1 .448 1 1v16c0 .553-.447 1-1 1z"
    />
    <path
      fill="#FFAC33"
      d="M3 5v7.445c.59.344 1.268.555 2 .555 1.674 0 3.104-1.031 3.701-2.491.35.302.801.491 1.299.491.677 0 1.273-.338 1.635-.853C12.345 11.258 13.583 12 15 12c1.301 0 2.445-.631 3.176-1.593C18.54 11.338 19.44 12 20.5 12c.949 0 1.765-.535 2.188-1.314l.147-.361c.497.271 1.059.439 1.665.439.981 0 1.865-.406 2.5-1.056V5H3z"
    />
    <path
      fill="#EEE"
      d="M24 0H4C2.343 0 1 1.343 1 3v4c0 2.209 1.791 4 4 4 1.674 0 3.104-1.031 3.701-2.491.35.302.801.491 1.299.491.677 0 1.273-.338 1.635-.853C12.345 9.258 13.583 10 15 10c1.301 0 2.445-.631 3.176-1.593C18.54 9.338 19.44 10 20.5 10c.949 0 1.765-.535 2.188-1.314.398.195.839.314 1.312.314 1.657 0 3-1.343 3-3V3c0-1.657-1.343-3-3-3z"
    />
  </svg>
);

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

const UniqueItemsTitle = (props) => {
  const { classes, onEnd } = props;
  return (
    <Spring state="animating" onRest={onEnd}>
      {(spring) => {
        const { opacity } = spring;
        return (
          <div className={classes.wrapper}>
            <GenericAnimatedSvg
              width={160}
              delay={0}
              className={classes.sparkleOne}
            >
              <Beer width={160} delay={50} />
            </GenericAnimatedSvg>
            <GenericAnimatedSvg
              width={160}
              delay={50}
              className={classes.sparkleTwo}
            >
              <Wine width={160} delay={100} />
            </GenericAnimatedSvg>
            <GenericAnimatedSvg
              width={140}
              delay={100}
              className={classes.sparkleThree}
            >
              <Whiskey width={140} delay={150} />
            </GenericAnimatedSvg>
            <GenericAnimatedSvg
              width={160}
              delay={150}
              className={classes.sparkleFour}
            >
              <Wine width={160} delay={200} />
            </GenericAnimatedSvg>
            <GenericAnimatedSvg
              width={120}
              delay={200}
              className={classes.sparkleFive}
            >
              <Whiskey width={120} delay={300} />
            </GenericAnimatedSvg>
            <GenericAnimatedSvg
              width={200}
              delay={250}
              className={classes.sparkleSix}
            >
              <Beer width={200} delay={450} />
            </GenericAnimatedSvg>
            <div className={classes.title} style={{ opacity }}>
              Unique Items Sold
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

export default withStyles(styles)(UniqueItemsTitle);
