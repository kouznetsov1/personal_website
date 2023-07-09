import React, { useRef, useEffect, useState, CSSProperties } from "react";

interface FadeInSectionProps {
  children: React.ReactNode;
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const domRef = useRef<Element | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setHasBeenVisible(true);
          observer.unobserve(domRef.current!);
        }
      });
    });

    const domNode = domRef.current;
    if (domNode) {
      observer.observe(domNode);
    }

    return () => observer.unobserve(domNode!);
  }, []);

  const styles: CSSProperties =
    isVisible || hasBeenVisible
      ? {
          opacity: 1,
          transform: "translateY(0)",
          transition: "opacity 1000ms, transform 500ms",
        }
      : {
          opacity: 0,
          transform: "translateY(50px)",
          transition: "opacity 1000ms, transform 500ms",
        };

  return (
    <div
      className="fade-in-section"
      ref={domRef as React.LegacyRef<HTMLDivElement>}
      style={styles}
    >
      {children}
    </div>
  );
};
