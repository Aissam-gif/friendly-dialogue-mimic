
const LoadingDots = () => {
  return (
    <div className="flex space-x-1.5 items-center h-6">
      <div className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-blink" />
      <div className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-blink [animation-delay:0.2s]" />
      <div className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-blink [animation-delay:0.4s]" />
    </div>
  );
};

export default LoadingDots;
