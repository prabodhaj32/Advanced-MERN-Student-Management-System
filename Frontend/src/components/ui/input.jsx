export function Input({ type = "text", className = "", ...props }) {
    return (
      <input
        type={type}
        className={`border rounded-md p-2 w-full focus:ring-2 focus:ring-blue-500 ${className}`}
        {...props}
      />
    );
  }
  