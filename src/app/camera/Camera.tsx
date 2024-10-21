import { BrowserMultiFormatReader } from "@zxing/library";
import React, { useRef, useCallback } from "react";
import Webcam from "react-webcam";

export default function QRCodeScanner() {
    const webcamRef = useRef<Webcam>(null);

    const scanQRCode = useCallback(() => {
        const codeReader = new BrowserMultiFormatReader();
        if (webcamRef.current) {
            codeReader.decodeFromVideoDevice(
                null,
                webcamRef.current.video!,
                (result: { getText: () => any }, err: any) => {
                    if (result) {
                        console.log(result.getText());
                    }
                    if (err) {
                        console.error(err);
                    }
                }
            );
        }
    }, [webcamRef]);

    return (
        <div>
            <Webcam ref={webcamRef} />
            <button onClick={scanQRCode}>Scanear o QR Code</button>
        </div>
    );
}
