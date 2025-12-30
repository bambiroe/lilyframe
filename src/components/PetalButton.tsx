type PetalButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export function PetalButton({ children, onClick }: PetalButtonProps) {
  return (
    <button className="petal" onClick={onClick}>
      {children}
    </button>
  );
}
