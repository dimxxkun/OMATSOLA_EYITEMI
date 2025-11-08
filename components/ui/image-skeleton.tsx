export function ImageSkeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`animate-pulse bg-muted rounded ${className}`}
      aria-hidden="true"
    >
      <div className="w-full h-full bg-gradient-to-br from-muted via-muted/50 to-muted" />
    </div>
  );
}

