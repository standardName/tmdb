

export default function Header({ children }) {
  return (
    <div className="header">
      <h1 className="logo">Search Movie</h1>
      {children}
    </div>
  );
}
