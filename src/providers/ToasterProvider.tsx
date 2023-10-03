"use client"

import { Toaster } from "react-hot-toast";

export default function ToasterProvider() {
    return <Toaster
        toastOptions={{
        style: {
            userSelect: 'none',
            fontWeight: "600"
        }
        }}
        containerStyle={{
            top: 80
        }}
        />
}