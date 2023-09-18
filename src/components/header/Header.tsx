import "./header.scss";

interface HeaderElements {
  image: string;
}

export const Header: React.FC<HeaderElements> = ({ image }) => {
  return (
    <div
      className="header-wrapper"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
};
