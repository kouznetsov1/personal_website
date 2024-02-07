export const Planets = () => {
  return (
    <div className="-z-10">
      <div className="h-16 rounded-full shadow-xl aspect-square bg-gradient-to-r from-purple-400 to-blue-600 animate-spin-slow">
        <div className="absolute h-6 transform -translate-x-1/2 -translate-y-1/2 rounded-full shadow-xl aspect-square bg-gradient-to-r from-green-400 to-blue-200 animate-up-and-down-30px" />
      </div>
    </div>
  );
};

export const MelloriPlanets = () => {
  return (
    <div className="-z-10">
      <div className="h-16 rounded-full shadow-xl aspect-square bg-gradient-to-r from-neutral-800 to-neutral-950 animate-spin-slow">
        <div className="absolute h-6 transform -translate-x-1/2 -translate-y-1/2 rounded-full aspect-square bg-gradient-to-r from-neutral-400 to-neutral-200 animate-up-and-down-30px shadow-neutral-50 shadow-[0_0px_5px_0px_rgba(255,255,255,0.01)]" />
      </div>
    </div>
  );
};
