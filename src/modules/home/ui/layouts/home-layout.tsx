interface LayoutProps {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div className="p-4 bg-blue-500">
        <p>Home navbar</p>
      </div>
      {children}
    </div>
  );
};
