export function Card({ children, className = "" }) {
    return <div className={`bg-white shadow-lg rounded-lg p-6 ${className}`}>{children}</div>;
  }
  
  export function CardHeader({ title }) {
    return <h2 className="text-xl font-bold mb-4">{title}</h2>;
  }
  
  export function CardContent({ children }) {
    return <div>{children}</div>;
  }
  
  export function CardTitle({ children }) {
    return <h3 className="text-lg font-semibold">{children}</h3>;
  }
  