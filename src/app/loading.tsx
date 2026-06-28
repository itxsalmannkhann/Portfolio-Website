export default function Loading() {
  return (
    <div className="fixed inset-0 z-[90] grid place-items-center bg-surface">
      <div className="flex flex-col items-center gap-5">
        <div className="relative h-16 w-16">
          <span className="absolute inset-0 animate-ping rounded-2xl bg-electric/30" />
          <span className="absolute inset-0 grid place-items-center rounded-2xl bg-gradient-to-br from-electric to-deep-blue font-display text-xl font-bold text-white shadow-glow">
            SK
          </span>
        </div>
        <div className="h-1 w-40 overflow-hidden rounded-full bg-white/10">
          <span className="block h-full w-1/2 animate-[shimmer_1.2s_infinite] rounded-full bg-gradient-to-r from-electric to-accent" />
        </div>
      </div>
    </div>
  );
}
