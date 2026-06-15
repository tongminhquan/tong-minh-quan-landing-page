"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import {
  FacebookLogo,
  InstagramLogo,
  Palette,
  TiktokLogo,
} from "@phosphor-icons/react/dist/ssr";
import { motion, useReducedMotion } from "motion/react";
import { Group, Mesh } from "three";
import { useTheme } from "next-themes";
import clsx from "clsx";
import { Locale } from "@/data/translations";

type ThreeHeroProps = {
  locale: Locale;
};

const orbitIcons = [FacebookLogo, InstagramLogo, TiktokLogo, Palette];
const orbitPlacements = [
  "left-[8%] top-[14%] sm:left-[14%] sm:top-[18%]",
  "right-[10%] top-[16%] sm:right-[16%] sm:top-[20%]",
  "right-[12%] bottom-[18%] sm:right-[18%] sm:bottom-[22%]",
  "left-[12%] bottom-[22%] sm:left-[18%] sm:bottom-[26%]",
] as const;

export function ThreeHero({ locale }: ThreeHeroProps) {
  const { resolvedTheme } = useTheme();
  const reducedMotion = useReducedMotion();
  const canUseWebGl = supportsWebGl() && !reducedMotion;

  return (
    <div className="relative isolate h-[420px] overflow-hidden rounded-[32px] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,255,255,0.6))] shadow-[0_24px_60px_var(--color-shadow)] dark:bg-[linear-gradient(180deg,rgba(9,18,37,0.96),rgba(9,18,37,0.72))] lg:h-[520px]">
      {canUseWebGl ? (
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 5], fov: 42 }}
          gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        >
          <Suspense fallback={null}>
            <Scene dark={resolvedTheme === "dark"} />
          </Suspense>
        </Canvas>
      ) : (
        <StaticFallback locale={locale} />
      )}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.24),transparent_34%)] dark:bg-[radial-gradient(circle_at_top,rgba(157,176,214,0.12),transparent_34%)]" />
      <AvatarCard locale={locale} />
      <OrbitBadges />
    </div>
  );
}

function Scene({ dark }: { dark: boolean }) {
  const groupRef = useRef<Group>(null);
  const orbRef = useRef<Mesh>(null);
  const accent = dark ? "#8aaeff" : "#5270ff";
  const secondary = dark ? "#ae90ff" : "#7e54ff";
  const particleColor = dark ? "#dce7ff" : "#8ca4ff";

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.18;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.65) * 0.12;
    }

    if (orbRef.current) {
      orbRef.current.rotation.x += delta * 0.2;
      orbRef.current.rotation.z -= delta * 0.12;
    }
  });

  return (
    <>
      <ambientLight intensity={dark ? 1.3 : 1.1} />
      <directionalLight position={[3, 4, 3]} intensity={dark ? 2.2 : 1.8} color="#ffffff" />
      <pointLight position={[-4, -2, 2]} intensity={1.4} color={secondary} />
      <Sparkles
        count={70}
        scale={[6, 4.2, 4]}
        size={2.6}
        speed={0.6}
        opacity={0.75}
        color={particleColor}
      />
      <group ref={groupRef}>
        <Float speed={1.6} rotationIntensity={0.55} floatIntensity={1.4}>
          <mesh ref={orbRef} position={[0.7, 0.15, 0]}>
            <icosahedronGeometry args={[1.25, 12]} />
            <MeshDistortMaterial
              color={accent}
              roughness={0.04}
              metalness={0.35}
              distort={0.42}
              speed={2}
            />
          </mesh>
        </Float>
        <mesh rotation={[Math.PI / 2.6, 0.35, 0]} position={[0.65, 0.1, 0]}>
          <torusGeometry args={[1.95, 0.032, 24, 120]} />
          <meshStandardMaterial color={secondary} emissive={secondary} emissiveIntensity={0.45} />
        </mesh>
        <mesh rotation={[Math.PI / 3.1, -0.8, 0]} position={[0.55, 0.1, 0]}>
          <torusGeometry args={[2.3, 0.018, 18, 120]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.12} />
        </mesh>
      </group>
    </>
  );
}

function AvatarCard({ locale }: { locale: Locale }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="absolute bottom-5 left-5 z-10 max-w-[240px] rounded-[28px] border border-white/28 bg-white/72 p-5 shadow-[0_26px_50px_rgba(31,47,95,0.22)] backdrop-blur-xl dark:border-white/12 dark:bg-slate-950/58 sm:bottom-7 sm:left-7"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] text-2xl font-semibold text-white shadow-[0_18px_32px_rgba(79,107,255,0.32)]">
          TMQ
        </div>
        <div>
          <div className="text-lg font-semibold text-[var(--color-foreground)]">
            Tống Minh Quân
          </div>
          <p className="text-sm text-[var(--color-muted)]">
            {locale === "vi" ? "Marketing Intern" : "Marketing Intern"}
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-[var(--color-muted)]">
        {locale === "vi"
          ? "Thẻ nhận diện tối giản khi chưa có ảnh đại diện được xác nhận công khai."
          : "A clean identity card while no verified public portrait is supplied."}
      </p>
    </motion.div>
  );
}

function OrbitBadges() {
  return (
    <>
      {orbitIcons.map((Icon, index) => (
        <motion.div
          key={index}
          animate={{ y: [0, -10, 0], rotate: [0, index % 2 === 0 ? 5 : -5, 0] }}
          transition={{
            duration: 5 + index,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            delay: index * 0.25,
          }}
          className={clsx(
            "absolute z-10 flex h-14 w-14 items-center justify-center rounded-[20px] border border-white/24 bg-white/80 text-[var(--color-accent)] shadow-[0_18px_32px_rgba(31,47,95,0.18)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/56",
            orbitPlacements[index],
          )}
        >
          <Icon size={22} weight="fill" />
        </motion.div>
      ))}
    </>
  );
}

function StaticFallback({ locale }: { locale: Locale }) {
  return (
    <div className="flex h-full items-center justify-center px-6">
      <div className="grid w-full gap-4">
        <div className="rounded-[28px] border border-white/24 bg-[radial-gradient(circle_at_top,rgba(125,163,255,0.42),transparent_52%),linear-gradient(180deg,rgba(255,255,255,0.64),rgba(255,255,255,0.24))] p-6 dark:border-white/10 dark:bg-[radial-gradient(circle_at_top,rgba(125,163,255,0.32),transparent_48%),linear-gradient(180deg,rgba(18,31,56,0.92),rgba(10,18,33,0.7))]">
          <div className="text-sm font-medium text-[var(--color-accent)]">
            {locale === "vi" ? "3D fallback" : "3D fallback"}
          </div>
          <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[var(--color-foreground)]">
            {locale === "vi"
              ? "Không gian hero vẫn giữ chiều sâu ngay cả khi WebGL không sẵn sàng."
              : "The hero keeps its depth even when WebGL is unavailable."}
          </h3>
        </div>
      </div>
    </div>
  );
}

function supportsWebGl() {
  if (typeof document === "undefined") {
    return false;
  }

  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      canvas.getContext("webgl") ?? canvas.getContext("experimental-webgl"),
    );
  } catch {
    return false;
  }
}
