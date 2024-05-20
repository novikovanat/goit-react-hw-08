import { Link } from "react-router-dom";
export default function NotFoundPage() {
  return (
    <div>
      <Link to="/">Home</Link>
      <h2>This page not found</h2>
    </div>
  );
}
