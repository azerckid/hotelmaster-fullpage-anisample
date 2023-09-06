import React from "react";
import {
  createGenerateClassName,
  jssPreset,
  MuiThemeProvider
} from "@material-ui/core/styles";
import JssProvider from "react-jss/lib/JssProvider";
import { create } from "jss";

const jss = create({
  ...jssPreset(),
  insertionPoint: "insertion-point-jss"
});

class ThemeProvider extends React.PureComponent {
  generateClassName = createGenerateClassName({
    productionPrefix: `${this.props.prefix}-`
  });

  render() {
    return (
      <JssProvider jss={jss} generateClassName={this.generateClassName}>
        <MuiThemeProvider theme={this.props.theme}>
          {this.props.children}
        </MuiThemeProvider>
      </JssProvider>
    );
  }
}

export default ThemeProvider;
