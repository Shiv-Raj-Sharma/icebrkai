import { Stack } from "expo-router";
import React from 'react';

interface Props { }

const RootLayout: React.FC<Props> = () => {
  return (
    <Stack screenOptions={{
      headerShown: true
    }}>
    </Stack>
  );
}

export default RootLayout;

