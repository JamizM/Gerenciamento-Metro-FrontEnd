import { Stack } from "expo-router";
import * as React from "react";

import MainPage from "../MainPage";

export default function Nav() {
    return (
        <Stack>
            <Stack.Screen name="mainpage" />
            <Stack.Screen name="extinguisherpage" />
        </Stack>
    );
}
