type SurfaceProps = {
  children: React.ReactNode;
};

export function Surface({ children }: SurfaceProps) {
  return <div className="surface">{children}</div>;
}
