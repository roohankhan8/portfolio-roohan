const sceneLayers = [
  {
    name: "API Mesh",
    className:
      "left-[10%] top-[16%] h-24 w-24 -rotate-[14deg] [animation-delay:-1.6s]",
  },
  {
    name: "Data Core",
    className:
      "right-[18%] top-[9%] h-18 w-18 rotate-[18deg] [animation-delay:-3.1s]",
  },
  {
    name: "Service Node",
    className:
      "left-[22%] bottom-[14%] h-14 w-14 rotate-[10deg] [animation-delay:-2.2s]",
  },
];

const orbitLabels = ["Auth", "Queues", "Payments"];

export function Hero3DScene() {
  return (
    <div className="hero-scene">
      <div className="hero-scene-card">
        <div className="hero-scene-glow" />
        <div className="hero-scene-grid" />
        <div className="hero-scene-orbit hero-scene-orbit-a" />
        <div className="hero-scene-orbit hero-scene-orbit-b" />
        <div className="hero-scene-stack">
          <div className="hero-scene-platform hero-scene-platform-back" />
          <div className="hero-scene-platform hero-scene-platform-mid" />
          <div className="hero-scene-platform hero-scene-platform-front" />
          <div className="hero-scene-column hero-scene-column-left" />
          <div className="hero-scene-column hero-scene-column-right" />
          <div className="hero-scene-core">
            <div className="hero-scene-core-ring" />
            <div className="hero-scene-core-face hero-scene-core-face-front" />
            <div className="hero-scene-core-face hero-scene-core-face-back" />
          </div>
          {sceneLayers.map((layer) => (
            <div
              key={layer.name}
              aria-label={layer.name}
              className={`hero-scene-cube ${layer.className}`}
            />
          ))}
        </div>
        <div className="hero-scene-labels">
          {orbitLabels.map((label) => (
            <span key={label} className="hero-scene-label">
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
