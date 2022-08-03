const Header = ({ theme }) => {
  return (
    <div className="w-[]">
      <div className={!theme ? "header" : "header2"}></div>
    </div>
  );
};

export default Header;
