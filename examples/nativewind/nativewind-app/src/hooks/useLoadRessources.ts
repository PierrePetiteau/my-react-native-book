import * as Font from "expo-font";
import { useCallback, useEffect, useState } from "react";

export const useLoadResources = () => {
  const [isAppReady, setIsAppReady] = useState(false);

  const loadFonts = useCallback(async () => {
    try {
      await Font.loadAsync({
        "raleway-black": require("../../assets/fonts/Raleway-Black.ttf"),
        "raleway-black-italic": require("../../assets/fonts/Raleway-BlackItalic.ttf"),
        "raleway-bold": require("../../assets/fonts/Raleway-Bold.ttf"),
        "raleway-bold-italic": require("../../assets/fonts/Raleway-BoldItalic.ttf"),
        "raleway-extrabold": require("../../assets/fonts/Raleway-ExtraBold.ttf"),
        "raleway-extrabold-italic": require("../../assets/fonts/Raleway-ExtraBoldItalic.ttf"),
        "raleway-extralight": require("../../assets/fonts/Raleway-ExtraLight.ttf"),
        "raleway-extralight-italic": require("../../assets/fonts/Raleway-ExtraLightItalic.ttf"),
        "raleway-italic": require("../../assets/fonts/Raleway-Italic.ttf"),
        "raleway-light": require("../../assets/fonts/Raleway-Light.ttf"),
        "raleway-light-italic": require("../../assets/fonts/Raleway-LightItalic.ttf"),
        "raleway-medium": require("../../assets/fonts/Raleway-Medium.ttf"),
        "raleway-medium-italic": require("../../assets/fonts/Raleway-MediumItalic.ttf"),
        "raleway-regular": require("../../assets/fonts/Raleway-Regular.ttf"),
        "raleway-semibold": require("../../assets/fonts/Raleway-SemiBold.ttf"),
        "raleway-semibold-italic": require("../../assets/fonts/Raleway-SemiBoldItalic.ttf"),
        "raleway-thin": require("../../assets/fonts/Raleway-Thin.ttf"),
        "raleway-thin-italic": require("../../assets/fonts/Raleway-ThinItalic.ttf"),
      });
    } catch (e) {
      // We might want to provide this error information to an error reporting service
      console.warn(e);
    } finally {
      setIsAppReady(true);
    }
  }, []);

  useEffect(() => {
    loadFonts();
  }, [loadFonts]);

  return { isAppReady };
};
