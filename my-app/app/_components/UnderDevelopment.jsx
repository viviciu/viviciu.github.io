import PropTypes from "prop-types";

export default function UnderDevelopment({ text }) {
  return (
    <main>
      <h2 className="h-screen flex justify-center items-center">{text}</h2>
    </main>
  );
}

// Set default props
UnderDevelopment.defaultProps = {
  text: <p>under development</p>,
};

// Define prop types
UnderDevelopment.propTypes = {
  text: PropTypes.node,
};
