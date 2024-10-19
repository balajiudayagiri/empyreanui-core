"use client";
import React, { useEffect, useRef, useState, ReactNode } from "react";

/**
 * Props for the IntersectionObserverWrapper component.
 *
 * @typedef {Object} IntersectionObserverWrapperProps
 * @property {ReactNode} children - The content to be observed within the wrapper. This is the component or element that will be wrapped and observed for intersection.
 * @property {Element | null} [root=null] - The root element for the intersection observer. This is the element used as the viewport for checking visibility of the target. If null, defaults to the browser's viewport.
 * @property {string} [rootMargin="0px"] - The margin around the root element. This margin is applied to the root’s bounding box when calculating intersections. Can have values similar to CSS margin properties (e.g., "10px", "5%").
 * @property {number | number[]} [threshold=0.1] - A single number or array of numbers which indicate at what percentage of the target's visibility the observer callback should be triggered. A value of 0.1 means the callback will be triggered when 10% of the target is visible.
 * @property {function(IntersectionObserverEntry, IntersectionObserver): void} [onIntersect] - A callback function that will be executed whenever the observed element intersects with the root. It provides the `IntersectionObserverEntry` and the `IntersectionObserver` instance.
 * @property {boolean} [triggerOnce=false] - If set to true, the observer will only trigger the intersection callback once and then stop observing the target element.
 */

interface IntersectionObserverWrapperProps {
  children: ReactNode;
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  onIntersect?: (
    entry: IntersectionObserverEntry,
    observer: IntersectionObserver
  ) => void;
  triggerOnce?: boolean;
}

/**
 * A wrapper component that uses the Intersection Observer API to detect when the child component or element enters or exits the viewport or a specific root element.
 *
 * @component
 * @param {IntersectionObserverWrapperProps} props - The props object for this component.
 * @returns {ReactNode} A React wrapper that detects the intersection of its children with the root viewport.
 *
 * @example
 * // Example usage:
 * <IntersectionObserverWrapper
 *   onIntersect={(entry, observer) => console.log(entry.isIntersecting)}
 *   triggerOnce={true}
 *   rootMargin="10px"
 * >
 *   <div>Content to observe</div>
 * </IntersectionObserverWrapper>
 */
const IntersectionObserverWrapper: React.FC<
  IntersectionObserverWrapperProps
> = ({
  children,
  root = null,
  rootMargin = "0px",
  threshold = 0.1,
  onIntersect = () => {},
  triggerOnce = false,
}) => {
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current || hasIntersected) return;

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onIntersect(entry, observerInstance);
            if (triggerOnce) {
              observerInstance.unobserve(entry.target);
              setHasIntersected(true);
            }
          }
        });
      },
      {
        root: root || null,
        rootMargin,
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [root, rootMargin, threshold, onIntersect, triggerOnce, hasIntersected]);

  return <div ref={ref}>{children}</div>;
};

export default IntersectionObserverWrapper;
