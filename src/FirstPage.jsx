import * as React from "react";
import { useSpring, animated } from "react-spring";
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8}px,0)`;
const DrizlyLogo = (props) => (
  <svg width="303px" height="258px" viewBox="0 0 101 86" {...props}>
    <g id="Logo" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g fill="#E12C2C">
        <path
          d="M71.405487,33.8310594 L61.7703019,36.0741776 L61.9674253,16.0801667 L65.2275425,15.3211011 L65.056955,32.7757041 L71.4295699,31.2916515 L71.405487,33.8310594 Z M57.2032389,19.507575 L49.2273242,36.4614162 L57.0549504,34.639181 L57.0301985,37.1783718 L45.6157744,39.8358613 L45.6380734,37.5940454 L53.6133191,20.6397702 L46.3792929,22.3235198 L46.4042678,19.703799 L57.2255379,17.1843609 L57.2032389,19.507575 Z M40.6062987,41.0023523 L37.3459585,41.761635 L37.541298,21.7676241 L40.8018612,21.0083414 L40.6062987,41.0023523 Z M29.0761427,43.6871916 L26.0682274,36.6226932 L23.9333189,37.1199821 L23.8579482,44.9016532 L20.6861351,45.6403151 L20.8823665,25.6463042 L25.6849072,24.5282181 C29.8347555,23.5616412 32.1890864,24.7923825 32.1476102,29.0346413 C32.1253111,31.2771084 31.3343648,33.5640732 28.9815948,35.1636027 L32.3074942,42.9346378 L29.0761427,43.6871916 Z M90.7873522,10.9323254 C89.5782991,10.4443701 87.9932845,9.30653136 87.4077122,8.49406845 C86.8230318,7.68138849 84.4015808,5.08011801 82.5648103,4.43001746 C80.7278167,3.78013396 78.140015,3.6983016 77.1378969,3.6983016 C76.1342179,3.6983016 73.5461932,3.69916985 72.5449671,3.29239575 C71.5430719,2.88562164 70.1326587,-0.267637392 68.7869126,0.202952929 C68.7869126,0.202952929 66.449083,0.365749396 64.9459058,3.53593926 C63.4429517,6.705695 63.8610584,7.19321615 57.8492416,8.49406845 C51.8376479,9.79426957 45.5727373,9.30696548 42.9847126,10.688999 C40.3975799,12.0701642 37.6398597,16.7849669 30.7099921,17.0285104 C23.7810166,17.272271 21.441403,16.6221705 13.7596124,21.3358879 C8.56460893,24.5238768 6.5032872,27.3014016 5.42758231,29.2445402 L8.07759826,28.6274331 C13.176493,27.4401042 16.0013333,29.0192299 15.9250706,36.7475038 C15.8496999,44.4759947 12.8917344,47.4553871 7.88136685,48.621444 L3.55424135,49.6290456 L3.72237599,32.4622667 C2.5050723,34.6463441 0.414092866,38.8579972 0.0637752071,42.7948499 C-0.352770551,47.5085673 1.40104764,55.067967 1.65124269,57.5880563 C1.9021067,60.1079286 2.82060348,63.1967202 2.73765111,64.9846595 C2.65246884,66.7725988 1.81848536,71.4057863 2.73765111,72.3812627 C3.65458696,73.3576074 9.1682435,76.1197208 12.923845,74.1700703 C16.6821224,72.2184663 14.843568,70.9987951 14.1761582,70.4305269 C13.5085254,69.8620417 12.3409486,68.3176458 11.8398895,67.6675453 C11.3388304,67.0170106 11.5054041,66.2857289 11.7571601,65.7979907 C12.0062402,65.3096013 12.923845,61.9770491 13.174932,61.4079126 C13.425796,60.8398615 17.2674718,55.3123788 17.6003962,54.2546359 C17.9342126,53.1990636 20.9412359,53.5235712 21.6086457,54.0927076 C22.2778394,54.6618441 23.4463082,58.319121 23.5292606,59.9442638 C23.6135509,61.5707091 23.6965033,66.0424024 25.1158361,67.4220482 C26.5353919,68.8045158 32.2055876,69.0369892 33.2143955,69.0495788 C34.9129121,69.0708508 36.6321668,67.904794 35.5479883,66.8483535 C34.4622488,65.7923471 31.878461,63.2787696 31.4610232,62.708982 C31.0453694,62.1398455 31.8793529,59.6201903 32.630384,58.644931 C33.3831991,57.6694545 33.9025433,57.4252598 34.3944598,58.4819174 C34.8863762,59.5387921 37.2233139,66.0424024 37.7252649,69.9434399 C38.225432,73.8451286 38.3099453,79.290996 38.6437617,80.2664724 C38.9764631,81.2417318 43.82048,85.9565345 46.4091736,85.9565345 C48.9971983,85.9565345 57.178487,84.4110534 53.2563118,79.7778659 C49.3316836,75.1451126 48.912685,76.6888572 48.7470032,72.6248062 C48.5806525,68.5609723 49.3316836,60.5956668 49.5825477,58.4005192 C49.8327427,56.2062399 49.9154721,55.8815152 50.4165311,57.0180516 C50.9191511,58.1571928 51.9197083,67.01853 52.6725233,69.7806434 C53.4235544,72.5440592 53.821815,75.9434665 56.8462316,77.0958484 C59.828503,78.2326019 68.049038,79.638078 70.0390028,78.1527231 C71.2614353,77.2401946 69.2870797,75.794779 67.2837355,74.2514685 C65.2797222,72.7068557 62.0238418,70.9180481 61.9402205,68.7237688 C61.8557072,66.5292724 63.526573,58.1563245 64.5284681,55.800117 C65.5296943,53.442173 66.1143747,50.7605896 66.3654617,47.1022273 C66.6154337,43.4449505 67.0319795,37.511779 67.6166599,37.1866201 C68.0820405,36.9280994 72.4481893,34.8733909 76.6531162,32.4900506 L76.725365,25.1527053 L72.0762416,13.726564 L75.3655705,12.9607694 L78.4787372,21.4557061 L81.8293885,11.4560959 L84.8827938,10.7450009 L79.9578314,24.4001515 L79.8976241,30.547129 C84.6698381,27.5084787 86.2454871,26.9406446 87.2420304,26.2139212 C88.2441486,25.4819883 91.498691,25.7253148 94.2541814,24.1001719 C97.0103407,22.4745949 96.9157928,21.0925614 96.9157928,21.0925614 C96.9157928,21.0925614 98.5150788,19.8731074 98.9307326,18.2475304 C99.3481703,16.6226046 100.684774,15.8092734 100.684774,13.8589718 C100.684774,11.9078018 100.350288,11.5025472 98.5969162,11.3390995 C96.843767,11.176086 91.9957363,11.4200636 90.7873522,10.9323254 Z"
          id="Fill-1"
        ></path>
        <path
          d="M25.6003939,27.1086506 L24.0285357,27.4737488 L23.9580708,34.7153698 L25.6492288,34.3218365 C27.9904032,33.7765768 28.9477003,32.61052 28.9757971,29.8269175 C29.0023329,27.1787616 28.0905258,26.5282269 25.6003939,27.1086506"
          id="Fill-4"
        ></path>
        <path
          d="M12.6348497,37.5137325 C12.6870294,32.2178549 11.669302,30.3791231 8.43861945,31.1312428 L6.98539209,31.4698594 L6.83866452,46.3579219 L8.32199556,46.0127934 C11.5227974,45.2671856 12.581109,42.8910083 12.6348497,37.5137325"
          id="Fill-5"
        ></path>
      </g>
    </g>
  </svg>
);
const PageOne = (p) => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }));
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%"
      }}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <div>
        <animated.div
          style={{
            transform: props.xy.interpolate(trans1)
          }}
        >
          <DrizlyLogo style={{ marginBottom: 20 }} />
        </animated.div>
      </div>
      <div>
        <animated.div
          style={{
            transform: props.xy.interpolate(trans2)
          }}
        >
          <h1
            style={{
              fontSize: 64,
              margin: 0,
              padding: 0,
              color: "#e12c2c",
              textAlign: "center",
              fontFamily: "BrandonGrotesque-Black, Arial, sans-serif"
            }}
          >
            Your 2020 Year in Review
          </h1>
          <h4
            style={{
              margin: 0,
              padding: 0,
              fontSize: 36,
              fontFamily: "BrandonGrotesque-Black, Arial, sans-serif",
              color: "#24282f"
            }}
          >
            {p.storeName}
          </h4>
        </animated.div>
      </div>
    </div>
  );
};
export default PageOne;