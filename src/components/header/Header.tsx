import "./header.scss";

interface HeaderElements {
  image: string;
  children?: React.ReactNode;
}

export const Header: React.FC<HeaderElements> = ({ image, children }) => {
  return (
    <div
      className="header-wrapper"
      style={{ backgroundImage: `url(${image})` }}
    >
      {children}
    </div>
  );
};
