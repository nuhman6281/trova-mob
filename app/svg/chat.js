import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

const Chat = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    viewBox="278 22.5 17 17"
    {...props}
  >
    <G data-name="header_chat_normal">
      <Path
        d="M287 23.5c4.694 0 8.5 3.262 8.5 7.286 0 4.024-3.806 7.285-8.5 7.285a9.87 9.87 0 0 1-2.017-.206c-1.473.868-3.256 1.352-5.066 2.635.549-1.556.95-3.074 1.241-4.422-1.637-1.328-2.658-3.208-2.658-5.292 0-4.024 3.806-7.286 8.5-7.286Z"
        fill="rgba(0,0,0,0 )"
        fillRule="evenodd"
      />
      <Path
        d="M287 23.5c4.694 0 8.5 3.262 8.5 7.286 0 4.024-3.806 7.285-8.5 7.285a9.87 9.87 0 0 1-2.017-.206c-1.473.868-3.256 1.352-5.066 2.635.549-1.556.95-3.074 1.241-4.422-1.637-1.328-2.658-3.208-2.658-5.292 0-4.024 3.806-7.286 8.5-7.286Z"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth={2}
        stroke="#000"
        fill="transparent"
      />
    </G>
  </Svg>
)

export default Chat
