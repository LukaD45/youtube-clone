interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex items-center min-h-screen justify-center">
      {children}
    </div>
  );
};

export default Layout;
