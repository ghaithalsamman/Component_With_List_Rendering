import "./clickStyle.css";
export default function Button({ title, children }) {
  return (
    <button className={"clkStyle"}>
      {title}
      {children}
    </button>
  );
}
