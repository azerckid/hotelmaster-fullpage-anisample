import React from "react";
import { Keyframes, config } from "react-spring/renderprops";

const GiftSpring = Keyframes.Spring({
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

const Gift = (props) => (
  <div className={props.className}>
    <GiftSpring delay={props.delay} state="show">
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
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 36 36"
              width={props.width}
            >
              <path
                fill="#FDD888"
                d="M33 31c0 2.2-1.8 4-4 4H7c-2.2 0-4-1.8-4-4V14c0-2.2 1.8-4 4-4h22c2.2 0 4 1.8 4 4v17z"
              />
              <path
                fill="#FDD888"
                d="M36 11c0 2.2-1.8 4-4 4H4c-2.2 0-4-1.8-4-4s1.8-4 4-4h28c2.2 0 4 1.8 4 4z"
              />
              <path fill="#FCAB40" d="M3 15h30v2H3z" />
              <path
                fill="#DA2F47"
                d="M19 3h-2c-1.657 0-3 1.343-3 3v29h8V6c0-1.656-1.343-3-3-3z"
              />
              <path
                fill="#DA2F47"
                d="M16 7c1.1 0 1.263-.516.361-1.147L9.639 1.147c-.902-.631-2.085-.366-2.631.589L4.992 5.264C4.446 6.219 4.9 7 6 7h10zm4 0c-1.1 0-1.263-.516-.361-1.147l6.723-4.706c.901-.631 2.085-.366 2.631.589l2.016 3.527C31.554 6.219 31.1 7 30 7H20z"
              />
            </svg>
          </div>
        );
      }}
    </GiftSpring>
  </div>
);

export default Gift;
