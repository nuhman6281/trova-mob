import AppLoader from '../loader/index';
import React, { FC, memo, useState } from 'react';
import FastImage, { FastImageProps } from 'react-native-fast-image';

type ImageSourcePropType = React.ComponentProps<typeof FastImage>;
export const CustomFastImage: FC<ImageSourcePropType> = ({
  style,
  source: imageSource,
}: FastImageProps) => {
  const [loading, setLoading] = useState(false);
  const customSource =
    typeof imageSource === 'number'
      ? imageSource
      : {
          ...imageSource,
          priority: FastImage.priority.high,
        };
  return (
    <>
      <FastImage
        style={style}
        resizeMode={FastImage.resizeMode.stretch}
        source={customSource}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
      {loading ? <AppLoader loading={loading} /> : null}
    </>
  );
};

export default memo(CustomFastImage);
