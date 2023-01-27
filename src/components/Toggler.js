export default function Toggler(props) {
  return (
    <div className="toggler_wrapper">
      <span>Dark</span>
      <div
        className={props.darkMode ? "toggler" : "toggler light"}
        onClick={props.clickHandler}
      >
        <div className={props.darkMode ? "circle" : "circle light"}></div>
      </div>
      <span>Light</span>
    </div>
  );
}
