import React from "react";
import "./styles.css";
import TotalMilesTitle from "./TotalMilesTitle";
import VolumeTitle from "./VolumeTitle";
import RarestItemTitle from "./RarestItemTitle";
import ThemeProvider from "./ThemeProvider";
import FirstPage from "./FirstPage";
import GenericResult from "./GenericResult";
import GiftTitle from "./GiftTitle";
import CustomersTitle from "./CustomersTitle";
import UniqueItemsTitle from "./UniqueItemsTitle";
import BiggestWeekTitle from "./BiggestWeekTitle";
import MostCommonBasketTitle from "./MostCommonBasket";
import FinalPage from "./FinalPage";

import { createMuiTheme } from "@material-ui/core/styles";

import Fullpage, {
  FullPageSections,
  FullpageSection
} from "@ap.cx/react-fullpage";

const BLUE_JEANS = "#65a5f4";
const AZURE = "#8fbdf7";
const UNITED_NATIONS_BLUE = "#4a79b2";
const OUTER_SPACE = "#484d55";
const REPTAR = "#05ad6c";
const MELLOW_YELLOW = "#fed766";
const SMOKE = "#f7f7f7";
const GOBLIN_GAS = "#ffb535";
const ASH = "#c5c8cb";
const MANATEE = "#959fa4";
const NICKEL = "#6a7279";
const ONYX = "#24282f";
const TABLE_BORDER = "#e0e0e0";

const primary = {
  main: BLUE_JEANS,
  light: AZURE,
  dark: UNITED_NATIONS_BLUE,
  contrastText: OUTER_SPACE,
  blueSteel: "#166093",
  disco: "#65a5f4"
};

const grey = {
  main: "#d8d8d8",
  light: "#efefef",
  dark: "#9e9e9e",
  smoke: SMOKE,
  ash: ASH,
  manatee: MANATEE,
  nickel: NICKEL,
  tableBorder: TABLE_BORDER
};

const black = {
  main: "#24282F",
  light: "#6c6c6e",
  dark: "#272829",
  onyx: ONYX
};

const red = {
  main: "#e12c2c",
  light: "#ed8484",
  dark: "#a94040",
  apple: "#c72727",
  firebrick: "#a42121"
};

const theme = createMuiTheme({
  common: {
    black: "#24282F",
    borderBottom: `1px solid ${grey.main}`,
    borderRadius: "3px"
  },
  palette: {
    primary,
    black,
    grey,
    red,
    error: red,

    yellow: { main: MELLOW_YELLOW },
    white: { main: "#fff" },

    // These are the new colors we will be using for Retailer
    green: { main: REPTAR },
    goblinGas: { main: GOBLIN_GAS }
  },

  typography: {
    useNextVariants: true,
    lato: [
      "Lato-Regular",
      "OpenSans-Regular",
      "Open Sans",
      "Helvetica Neue",
      "Helvetica",
      "Arial",
      "sans-serif"
    ].join(", "),

    latoBlack: [
      "Lato-Black",
      "OpenSans-Bold",
      "Open Sans",
      "Helvetica Neue",
      "Helvetica",
      "Arial",
      "sans-serif"
    ].join(", "),

    fontFamily: [
      "Lato-Regular",
      "OpenSans-Regular",
      "Open Sans",
      "Helvetica Neue",
      "Helvetica",
      "Arial",
      "sans-serif"
    ].join(", "),

    fontFamilySemiBold: [
      "Lato-Regular",
      "OpenSans-SemiBold",
      "Open Sans",
      "Helvetica Neue",
      "Helvetica",
      "Arial",
      "sans-serif"
    ].join(", "),

    fontFamilyBold: [
      "Lato-Black",
      "OpenSans-Bold",
      "Open Sans",
      "Helvetica Neue",
      "Helvetica",
      "Arial",
      "sans-serif"
    ].join(", "),

    fontFamilySubset: [
      "Lato-Regular",
      "OpenSans-Subset",
      "Open Sans",
      "Helvetica Neue",
      "Helvetica",
      "Arial",
      "sans-serif"
    ].join(", ")
  }
});

const TitleWithResult = (props) => {
  const [didExit, setDidExit] = React.useState(false);
  if (didExit) {
    return (
      <GenericResult
        title={props.title}
        result={props.result}
        subtitle={props.subtitle}
      />
    );
  } else {
    const TitleComponent = props.titleComponent;
    return <TitleComponent onEnd={() => setDidExit(true)} />;
  }
};

const Section = (props) => {
  const [isMounted, setIsMounted] = React.useState(props.initialIsMounted);
  return (
    <FullpageSection
      style={{
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
      onShow={() => setIsMounted(true)}
      onHide={() => setIsMounted(false)}
    >
      {isMounted && props.children}
    </FullpageSection>
  );
};

const DownArrow = (props) => (
  <svg className="DownChevronIcon" viewBox="0 0 12 7" version="1.1" {...props}>
    <defs />
    <g
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
    >
      <g
        id="Elements"
        transform="translate(-185.000000, -1256.000000)"
        stroke="#24282f"
      >
        <g
          id="Icon/DownArrow-Small"
          transform="translate(183.000000, 1251.000000)"
        >
          <g id="Icon/DownArrow-Copy" transform="translate(3.000000, 6.000000)">
            <polyline
              strokeWidth="2"
              points="0 0.442627458 5.17517339 4.62903602 10 0.442627458"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

const FloatingArrow = () => (
  <div
    style={{
      fontFamily: "BrandonGrotesque-Black",
      fontSize: "16px",
      position: "fixed",
      bottom: 16,
      right: 16,
      zIndex: 111,
      background: "white",
      color: "#24282f",
      padding: 16,
      borderRadius: 4,
      display: "flex",
      alignItems: "center"
    }}
  >
    <DownArrow width="12" style={{ marginRight: 8 }} />
    Scroll down to continue
  </div>
);

export default function App() {
  const [isFinalPage, setIsFinalPage] = React.useState(false);
  return (
    <ThemeProvider theme={theme} prefix="dbo_app">
      {!isFinalPage && <FloatingArrow />}
      <Fullpage>
        <FullPageSections>
          <Section initialIsMounted>
            <FirstPage storeName="Artie's Liquors" />
          </Section>
          <Section>
            <TitleWithResult
              titleComponent={VolumeTitle}
              title="Total Volume of Liquid Sold"
              result="900 Olympic pools"
              subtitle="You were literally swimming in sales this year."
            />
          </Section>
          <Section>
            <TitleWithResult
              titleComponent={RarestItemTitle}
              title="Rarest Item"
              result="Louis Roederer Cristal Gift Box"
              subtitle="They tried to sell this. You succeeded. Let the bragging begin."
            />
          </Section>
          <Section>
            <TitleWithResult
              titleComponent={TotalMilesTitle}
              title="Total Miles Delivered"
              result="1,102,000"
              subtitle="Talk about going to the moon and back."
            />
          </Section>
          <Section>
            <TitleWithResult
              titleComponent={GiftTitle}
              title="Gift Orders"
              result="1,210"
              subtitle="And you didn't even have to slide down one chimney. Hopefully."
            />
          </Section>
          <Section>
            <TitleWithResult
              titleComponent={CustomersTitle}
              title="Customers Served"
              result="33,000"
              subtitle="That's a lot of soon-to-be-regulars."
            />
          </Section>
          <Section>
            <TitleWithResult
              titleComponent={UniqueItemsTitle}
              title="Unique Items Sold"
              result="3,000"
              subtitle="You could probably sell snow to a polar bear."
            />
          </Section>
          <Section>
            <TitleWithResult
              titleComponent={MostCommonBasketTitle}
              title="Most Common Basket"
              result="Corona Extra, White Claw"
              subtitle="Your customers loved to bundle these. We don't blame them."
            />
          </Section>
          <Section>
            <TitleWithResult
              titleComponent={BiggestWeekTitle}
              title="Biggest week of the year"
              result="March 14 - 20"
              subtitle="This is where your sales graph pointed up and to the right."
            />
          </Section>
          <FullpageSection
            style={{
              backgroundColor: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
            onShow={() => setIsFinalPage(true)}
            onHide={() => setIsFinalPage(false)}
          >
            {isFinalPage && <FinalPage />}
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </ThemeProvider>
  );
}
