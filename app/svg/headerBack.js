import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={6}
    height={12.5}
    viewBox="19 80 6 13"
    {...props}
  >
    <G
      data-name="tab_back_white"
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth={3}
      stroke="#fff"
      fill="transparent"
    >
      <Path d="m27 80.085-6 6" data-name="Line 15" />
      <Path d="m27 92.585-6-6" data-name="Line 16" />
    </G>
  </Svg>
)

export default SvgComponent