import "./AuthLayout.css";

export default function AuthLayout({ children, title }) {
  return (
    <div className="auth-layout-container">
      <div className="auth-layout-box">
        <h2 className="auth-layout-title">{title}</h2>
        {children}
      </div>
    </div>
  );
}
