export default function Toggler(props) {
  return (
    <div className="toggler_wrapper">
      <span>Dark</span>
      <div
        className={props.color === "dark" ? "toggler" : "toggler light"}
        onClick={props.clickHandler}
      >
        <div
          className={props.color === "dark" ? "circle" : "circle light"}
        ></div>
      </div>
      <span>Light</span>
    </div>
  );
}
