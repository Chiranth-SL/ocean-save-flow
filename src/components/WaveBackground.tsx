const WaveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute bottom-0 w-[200%] animate-wave"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{ height: "120px" }}
      >
        <path
          d="M0,0 C300,80 600,80 900,40 C1200,0 1500,40 1800,60 L1800,120 L0,120 Z"
          fill="hsl(var(--primary))"
          fillOpacity="0.1"
        />
      </svg>
      <svg
        className="absolute bottom-0 w-[200%] animate-wave-slow"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{ height: "100px" }}
      >
        <path
          d="M0,20 C300,60 600,20 900,50 C1200,80 1500,40 1800,60 L1800,120 L0,120 Z"
          fill="hsl(var(--secondary))"
          fillOpacity="0.15"
        />
      </svg>
    </div>
  );
};

export default WaveBackground;
