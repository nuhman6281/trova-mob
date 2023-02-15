import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

const Search = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16.5}
    viewBox="78 24 16 16.5"
    {...props}
  >
    <G data-name="header_search_normal">
      <G data-name="Path 1260">
        <Path
          d="M88 24a7 7 0 1 1 0 14 7 7 0 0 1 0-14Z"
          fill="rgba(0,0,0,0 )"
          fillRule="evenodd"
        />
        <Path
          d="M88 24a7 7 0 1 1 0 14 7 7 0 0 1 0-14Z"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth={2}
          stroke="#000"
          fill="transparent"
        />
      </G>
      <G data-name="Path 1261">
        <Path d="m93 36.5 4 4" fill="rgba(0,0,0,0 )" fillRule="evenodd" />
        <Path
          d="m93 36.5 4 4"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth={3}
          stroke="#000"
          fill="transparent"
        />
      </G>
    </G>
  </Svg>
)

export default Search
