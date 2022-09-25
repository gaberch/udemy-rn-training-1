import { useEffect, useState } from "react";
import * as Font from "expo-font";
import {clearWorkouts, getWorkouts, initWorkouts} from "../storage/workout";

export default function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {

      try {
        await initWorkouts();
        await Font.loadAsync({
          "montserrat": require("../assets/fonts/Montserrat-Regular.ttf"),
          "montserrat-bold": require("../assets/fonts/Montserrat-Bold.ttf"),
          "handwriting": require("../assets/fonts/QwitcherGrypen-Regular.ttf"),
        })
      } catch (e) {
        console.warn(e);
      } finally {
        setIsLoadingComplete(true);
      }

    }

    loadResourcesAndDataAsync();

  }, [])

  return isLoadingComplete;
}