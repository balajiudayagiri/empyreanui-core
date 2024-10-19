"use client";
import React, { useEffect, useRef, useState, ReactNode } from "react";

/**
 * Props for the LazyMountWrapper component.
 *
 * @typedef {Object} LazyMountWrapperProps
 * @property {ReactNode} children - The content to be lazy-loaded and mounted only when it enters the viewport.
 * @property {Element | null} [root=null] - The root element for the intersection observer. This is the element used as the viewport for checking visibility of the target. If null, defaults to the browser's viewport.
 * @property {string} [rootMargin="0px"] - The margin around the root element. This margin is applied to the root’s bounding box when calculating intersections.
 * @property {number | number[]} [threshold=0.1] - A number or array of numbers which indicate at what percentage of the target's visibility the observer callback should be triggered.
 * @property {boolean} [triggerOnce=true] - If true, the component will unobserve and stop lazy loading after the first intersection.
 */

interface LazyMountWrapperProps {
  children: ReactNode;
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

/**
 * A wrapper component that lazy-loads and mounts its children only when they intersect with the viewport or a specified root element.
 *
 * @component
 * @param {LazyMountWrapperProps} props - The props object for this component.
 * @returns {ReactNode} A React component that mounts its children only when they intersect with the viewport.
 *
 * @example
 * <LazyMountWrapper rootMargin="20px" threshold={0.5}>
 *   <div>This content will be lazy-loaded when it enters the viewport.</div>
 * </LazyMountWrapper>
 */
const LazyMountWrapper: React.FC<LazyMountWrapperProps> = ({
  children,
  root = null,
  rootMargin = "0px",
  threshold = 0.1,
  triggerOnce = true,
}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current || isIntersecting) return;

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            if (triggerOnce) {
              observerInstance.unobserve(entry.target);
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
  }, [root, rootMargin, threshold, triggerOnce, isIntersecting]);

  return <div ref={ref}>{isIntersecting ? children : null}</div>;
};

export default LazyMountWrapper;
