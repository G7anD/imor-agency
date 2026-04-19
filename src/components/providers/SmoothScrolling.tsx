"use client";

import { ReactNode, useEffect, useState } from "react";

// Lenis is only loaded and rendered on desktop (non-touch) devices.
// On mobile/touch: plain children with no wrapper to avoid Intersection Observer interference.
export default function SmoothScrolling({ children }: { children: ReactNode }) {
    const [LenisComponent, setLenisComponent] = useState<React.ComponentType<any> | null>(null);

    useEffect(() => {
        const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
        if (!isTouch) {
            import("@studio-freight/react-lenis").then(({ ReactLenis }) => {
                setLenisComponent(() => ReactLenis);
            });
        }
    }, []);

    if (!LenisComponent) {
        // Mobile: no wrapper, native scroll — safe for Intersection Observer
        return <>{children}</>;
    }

    return (
        <LenisComponent root options={{ lerp: 0.12, smoothWheel: true, syncTouch: false }}>
            {children}
        </LenisComponent>
    );
}
