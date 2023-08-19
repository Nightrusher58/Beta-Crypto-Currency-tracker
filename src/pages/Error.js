import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section">
      <h2>Error</h2>
      <p>404 Page not Found</p>
      <Link to="/"> Back to Home Page</Link>
    </section>
  );
};
export default Error;
