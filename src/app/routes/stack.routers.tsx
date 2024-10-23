import { Stack } from "expo-router";
import * as React from "react";

export default function Nav() {
    return (
        <Stack>
            <Stack.Screen name="mainpage" />
            <Stack.Screen name="extinguisherpage" />
            <Stack.Screen name="reportpage" />
            <Stack.Screen name="camerapage" />
        </Stack>
    );
}
