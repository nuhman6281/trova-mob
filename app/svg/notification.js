import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

const Notification = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={18}
    viewBox="338 24 15 18"
    {...props}
  >
    <G data-name="menu_notification_normal">
      <G data-name="Path 1347">
        <Path
          d="M338.421 39h14.17c1.572-.594-1.89-2.786-1.89-4.643v-3.714c0-2.786-.944-4.643-5.667-4.643s-4.723 4.643-4.723 4.643v3.714c0 1.857-3.494 4.036-1.89 4.643Z"
          fill="rgba(0,0,0,0 )"
          fillRule="evenodd"
        />
        <Path
          d="M338.421 39h14.17c1.572-.594-1.89-2.786-1.89-4.643v-3.714c0-2.786-.944-4.643-5.667-4.643s-4.723 4.643-4.723 4.643v3.714c0 1.857-3.494 4.036-1.89 4.643Z"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth={2}
          stroke="#000"
          fill="transparent"
        />
      </G>
      <G data-name="Path 1348">
        <Path d="M345.5 25v-1" fill="rgba(0,0,0,0 )" fillRule="evenodd" />
        <Path
          d="M345.5 25v-1"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth={3}
          stroke="#000"
          fill="transparent"
        />
      </G>
      <Path
        d="M343.05 38h4.9c.033.215.05.438.05.667 0 1.841-1.119 3.333-2.5 3.333-1.38 0-2.5-1.492-2.5-3.333 0-.229.017-.452.05-.667Z"
        fillRule="evenodd"
        data-name="Path 1349"
      />
    </G>
  </Svg>
)

export default Notification
