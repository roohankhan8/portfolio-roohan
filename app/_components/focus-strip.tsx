"use client";

import { useState, type CSSProperties, type PointerEvent } from "react";
import type { IconType } from "react-icons";
import {
  FaBolt,
  FaBrain,
  FaChartBar,
  FaChartLine,
  FaCloud,
  FaCode,
  FaCompassDrafting,
  FaCreditCard,
  FaDatabase,
  FaFileExcel,
  FaMoneyBillWave,
  FaRobot,
  FaShieldHalved,
  FaTableCellsLarge,
  FaWandMagicSparkles,
} from "react-icons/fa6";
import { SiGoogleanalytics, SiMongodb, SiNumpy, SiPandas, SiPython, SiScikitlearn, SiSqlite } from "react-icons/si";

import { focusAreas } from "../_lib/portfolio-data";
import { getTechIcon } from "../_lib/tech-icons";

const focusAreaBadges: Record<string, string[]> = {
  "Backend Systems": ["Laravel", "Django", "Flask", "Angular", ".NET", "NestJS"],
  Frontend: ["React", "Next.js", "Blade", "Vue", "HTML", "CSS"],
  "Payment Integration": ["Stripe", "Tap Payment", "Safepay"],
  AI: ["Claude", "Codex", "Ollama", "Copilot", "OpenClaw"],
  "Data and ML": [
    "Python",
    "Pandas",
    "Matplotlib",
    "NumPy",
    "scikit-learn",
    "Excel",
    "Power BI",
    "SQL",
    "MongoDB",
  ],
};

const focusAreaIconOverrides: Record<string, Record<string, IconType>> = {
  "Payment Integration": {
    Stripe: FaCreditCard,
    "Tap Payment": FaBolt,
    Safepay: FaShieldHalved,
  },
  AI: {
    Claude: FaWandMagicSparkles,
    Codex: FaCode,
    Ollama: FaCloud,
    Copilot: FaCompassDrafting,
    OpenClaw: FaRobot,
  },
  "Data and ML": {
    Python: SiPython,
    Pandas: SiPandas,
    Matplotlib: FaChartLine,
    NumPy: SiNumpy,
    "scikit-learn": SiScikitlearn,
    Excel: FaFileExcel,
    "Power BI": FaChartBar,
    SQL: SiSqlite,
    MongoDB: SiMongodb,
  },
};

type PointerState = {
  active: boolean;
  height: number;
  width: number;
  x: number;
  y: number;
};

const idlePointer: PointerState = {
  active: false,
  height: 0,
  width: 0,
  x: 0,
  y: 0,
};

function LogoField({ areaLabel, names }: { areaLabel: string; names: string[] }) {
  const [pointer, setPointer] = useState<PointerState>(idlePointer);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    setPointer({
      active: true,
      height: rect.height,
      width: rect.width,
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  }

  function handlePointerLeave() {
    setPointer(idlePointer);
  }

  const columnCount = Math.max(1, Math.ceil(names.length / 2));
  const hasSecondRow = names.length > columnCount;

  return (
    <div
      aria-hidden="true"
      className="relative mb-4 h-28 overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--accent)_12%,transparent),transparent)]"
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.7),transparent_60%)]" />
      <div className="absolute inset-x-3 top-3 h-px bg-[linear-gradient(90deg,transparent,color-mix(in_srgb,var(--accent)_35%,transparent),transparent)]" />
      {names.map((name, index) => {
        const Icon = focusAreaIconOverrides[areaLabel]?.[name] ?? getTechIcon(name);

        if (!Icon) {
          return null;
        }

        const column = index % columnCount;
        const row = Math.floor(index / columnCount);
        const anchorX = ((column + 0.5) / columnCount) * 100;
        const anchorY = hasSecondRow ? (row === 0 ? 34 : 72) : 54;
        const anchorXPx = (pointer.width * anchorX) / 100;
        const anchorYPx = (pointer.height * anchorY) / 100;
        const deltaX = anchorXPx - pointer.x;
        const deltaY = anchorYPx - pointer.y;
        const distance = Math.hypot(deltaX, deltaY) || 1;
        const influence = pointer.active ? Math.max(0, 1 - distance / 180) : 0;
        const escapeX = (deltaX / distance) * influence * 56;
        const escapeY = (deltaY / distance) * influence * 40;
        const scale = pointer.active ? 1 + influence * 0.14 : 1;
        const shellStyle: CSSProperties = {
          left: `${anchorX}%`,
          top: `${anchorY}%`,
          transform: `translate(calc(-50% + ${escapeX}px), calc(-50% + ${escapeY}px)) scale(${scale})`,
          zIndex: pointer.active ? Math.round(100 - distance) : 1,
        };
        const driftStyle: CSSProperties = {
          animationDelay: `${index * -0.9}s`,
          animationDuration: `${6.8 + (index % 4) * 1.2}s`,
        };
        const tilt = column % 2 === 0 ? -7 : 7;
        const glowStyle: CSSProperties = {
          boxShadow: pointer.active && influence > 0
            ? `0 16px 30px rgba(16,32,51,0.14), 0 0 ${18 + influence * 18}px color-mix(in srgb, var(--accent) 28%, transparent)`
            : "0 12px 26px rgba(16,32,51,0.1)",
        };

        return (
          <span
            key={name}
            className="absolute transition-transform duration-75 ease-out will-change-transform"
            style={shellStyle}
          >
            <span
              className="focus-strip-logo-node flex h-11 w-11 items-center justify-center rounded-2xl border border-[color:var(--border)] bg-[color:var(--chip-bg)] text-[var(--accent)]"
              style={{ ...driftStyle, ...glowStyle }}
              title={name}
            >
              <Icon
                aria-label={name}
                className="text-[1.25rem]"
                style={{ transform: `rotate(${tilt}deg)` }}
              />
            </span>
          </span>
        );
      })}
      <style jsx>{`
        .focus-strip-logo-node {
          animation-name: focus-strip-drift;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          will-change: transform;
        }

        @keyframes focus-strip-drift {
          0% {
            transform: translate3d(-4px, 3px, 0) scale(0.98);
          }
          25% {
            transform: translate3d(6px, -6px, 0) scale(1.04);
          }
          50% {
            transform: translate3d(-2px, -10px, 0) scale(1);
          }
          75% {
            transform: translate3d(-8px, 5px, 0) scale(1.03);
          }
          100% {
            transform: translate3d(-4px, 3px, 0) scale(0.98);
          }
        }
      `}</style>
    </div>
  );
}

export function FocusStrip() {
  return (
    <section aria-label="Focus areas" className="pb-4">
      <div className="container-shell">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {focusAreas.map((area) => (
            <article
              key={area.label}
              className="surface-panel rounded-2xl p-5 transition-transform hover:-translate-y-1"
            >
              <LogoField areaLabel={area.label} names={focusAreaBadges[area.label] ?? []} />
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                {area.label}
              </p>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
