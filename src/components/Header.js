import PropTypes from "prop-types";

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h3>{text}</h3>
      </div>
    </header>
  );
}

// default value if any of the props is not passed by value
Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};
// to check if the prop types is correct otherwise gives warning. not necessary.
Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
