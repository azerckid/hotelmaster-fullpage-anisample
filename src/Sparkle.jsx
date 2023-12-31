import React from "react";
import { Keyframes, config } from "react-spring/renderprops";

const SparkleSpring = Keyframes.Spring({
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

const Sparkle = (props) => (
  <div className={props.className}>
    <SparkleSpring delay={props.delay} state="show">
      {(spring) => {
        // console.log(spring.size);
        return (
          <div
            style={{
              transform: spring.transform,
              transformOrigin: `${props.width / 2}px ${props.width / 2}px`
            }}
          >
            <svg
              width={props.width}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 36 36"
            >
              <path
                fill="#FFAC33"
                d="M34.347 16.893l-8.899-3.294-3.323-10.891c-.128-.42-.517-.708-.956-.708-.439 0-.828.288-.956.708l-3.322 10.891-8.9 3.294c-.393.146-.653.519-.653.938 0 .418.26.793.653.938l8.895 3.293 3.324 11.223c.126.424.516.715.959.715.442 0 .833-.291.959-.716l3.324-11.223 8.896-3.293c.391-.144.652-.518.652-.937 0-.418-.261-.792-.653-.938z"
              />
            </svg>
          </div>
        );
      }}
    </SparkleSpring>
  </div>
);

export default Sparkle;
