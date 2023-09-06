import React from "react";
import { Keyframes, config } from "react-spring/renderprops";

const Spring = Keyframes.Spring({
  show: [
    {
      transform: "scale(0)",
      config: config.default
    },
    {
      transform: "scale(1.005)",
      config: config.wobbly
    },
    {
      transform: "scale(1)",
      config: config.default
    },
    {
      transform: "scale(0)",
      config: config.stiff
    },
    {
      reset: true
    }
  ]
});

const GenericAnimatedSvg = (props) => (
  <div className={props.className}>
    <Spring delay={props.delay} state="show">
      {(spring) => {
        return (
          <div
            style={{
              transform: spring.transform,
              transformOrigin: `${props.width / 2}px ${props.width / 2}px`
            }}
          >
            {props.children}
          </div>
        );
      }}
    </Spring>
  </div>
);

export default GenericAnimatedSvg;
