import Card from "../components/shared/Card";
import { Link } from "react-router-dom";
function AboutPage() {
  return (
    <div className="container">
      <Card>
        <div className="about">
          <h1>About Feedback UI</h1>
          <p>This is a React application that you can leave feedback.</p>
          <p>Version 1.0.0</p>
          <Link to="/">Back to Home Page</Link>
        </div>
      </Card>
    </div>
  );
}

export default AboutPage;
