import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
function Sculpture({ paused, compact }) {
  const group = useRef();
  useFrame(({ clock, pointer }) => {
    if (paused) return;
    const t = clock.getElapsedTime();
    group.current.rotation.y =
      0.35 + Math.sin(t * 0.12) * 0.16 + pointer.x * 0.09;
    group.current.rotation.x =
      0.45 + Math.cos(t * 0.1) * 0.07 - pointer.y * 0.06;
    group.current.position.y = Math.sin(t * 0.2) * 0.08;
  });
  return (
    <group ref={group} rotation={[0.45, 0.35, -0.48]}>
      <mesh>
        <torusGeometry
          args={[2.05, 0.48, compact ? 16 : 24, compact ? 48 : 80]}
        />
        <meshStandardMaterial
          color="#657681"
          metalness={0.94}
          roughness={0.28}
        />
      </mesh>
      <mesh rotation={[0.6, 0.95, 0.4]}>
        <torusGeometry
          args={[1.45, 0.16, compact ? 12 : 16, compact ? 40 : 64]}
        />
        <meshStandardMaterial color="#9ba6ac" metalness={1} roughness={0.24} />
      </mesh>
      <mesh position={[2.3, 0.7, -0.6]} rotation={[0.4, 0.5, 0.1]}>
        <boxGeometry args={[0.45, 0.45, 0.45]} />
        <meshStandardMaterial
          color="#84949b"
          metalness={0.9}
          roughness={0.35}
        />
      </mesh>
    </group>
  );
}
export default function Scene() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(true);
  const [compact, setCompact] = useState(() => window.innerWidth <= 768);
  const reduced = useReducedMotion();
  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const resize = () => setCompact(media.matches);
    media.addEventListener("change", resize);
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting),
    );
    observer.observe(ref.current);
    const visibility = () =>
      setVisible(
        !document.hidden && ref.current.getBoundingClientRect().bottom > 0,
      );
    document.addEventListener("visibilitychange", visibility);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", resize);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);
  return (
    <div ref={ref} className="scene" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        frameloop={visible && !reduced ? "always" : "demand"}
        camera={{ position: [0, 0, 8], fov: 42 }}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[-4, 5, 5]}
          intensity={3.5}
          color="#dce5ea"
        />
        <directionalLight
          position={[4, -2, 1]}
          intensity={1.1}
          color="#7dd3fc"
        />
        <pointLight position={[0, 3, -2]} intensity={20} />
        <Sculpture paused={!visible || reduced} compact={compact} />
      </Canvas>
    </div>
  );
}
