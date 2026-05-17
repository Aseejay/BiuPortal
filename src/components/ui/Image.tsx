// components/ui/AppImage.tsx

import React from "react";

interface AppImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  rounded?: boolean;
}

const AppImage: React.FC<AppImageProps> = ({
  rounded = false,
  className = "",
  alt = "image",
  ...props
}) => {
  return (
    <img
      alt={alt}
      className={`${rounded ? "rounded-full" : "rounded-xl"} object-cover ${className}`}
      {...props}
    />
  );
};

export default AppImage;
