const Container = ({children}:{children: React.ReactNode}) => {
  return (
    <div className="w-full max-w-[1280px] mx-auto">{children}</div>
  );
};

export default Container;