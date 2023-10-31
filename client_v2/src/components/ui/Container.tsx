import '../../assets/styles/components/ui/container.scss';

const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={`container ${className ? className : ''}`}>{children}</div>;
};

export default Container;
