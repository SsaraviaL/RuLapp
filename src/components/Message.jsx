
function Message({ type = "info", children }) {
  return (
    <div
      className={`app-message app-message-${type}`}
      role={type === "error" ? "alert" : "status"}
      aria-live={type === "error" ? "assertive" : "polite"}
    >
      {children}
    </div>
  );
}

export default Message;
