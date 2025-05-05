"use client";
import styles from "./page.module.scss";
import ZoomParallax from "../../ZoomParallax/index";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function ProjectPage() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className={styles.main}>
      <ZoomParallax />
    </main>
  );
}
