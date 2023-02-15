import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

const HeaderMenu = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={12}
    viewBox="20 26 16 12"
    {...props}
  >
    <G
      data-name="header_menu_normal"
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth={2.5}
      stroke="#000"
      fill="transparent"
    >
      <Path d="M20 26h16" data-name="Line 144" />
      <Path d="M20 32h16" data-name="Line 145" />
      <Path d="M20 38h16" data-name="Line 146" />
    </G>
  </Svg>
)

export default HeaderMenu
