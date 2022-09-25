import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Navigation from "./navigation";
import useCachedResources from "./hooks/useCachedResources";

export default function App() {

  const isLoaded = useCachedResources();

  if (isLoaded) {
    return (
      <>
        <Navigation />
        <StatusBar style="auto" />
      </>
    );
  } else {
    return null;
  }
}
