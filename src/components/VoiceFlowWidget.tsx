import { useEffect } from "react";

const VoiceflowWidget = () => {
    useEffect(() => {
        const d = document;
        const t = "script";
        const v = d.createElement(t);
        const s = d.getElementsByTagName(t)[0];

        v.onload = () => {
            // @ts-ignore
            window.voiceflow.chat.load({
                verify: { projectID: "6925f65b0bf9d34b37514fc0" },
                url: "https://general-runtime.voiceflow.com",
                versionID: "production",
                voice: {
                    url: "https://runtime-api.voiceflow.com",
                },
            });
        };

        v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
        v.type = "text/javascript";
        s.parentNode?.insertBefore(v, s);

        // Optional cleanup if widget supports unload (not required here)
        return () => {
            // If Voiceflow exposes unload method, call it here
        };
    }, []);

    return null; // Does not render anything visible itself
};

export default VoiceflowWidget;