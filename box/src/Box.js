export default function Box(props) {
  const style = {
    backgroundColor: props.status ? "#222222" : "",
  };
  return (
    <div
      onClick={props.handleClick}
      style={style}
      className="box"
    ></div>
  );
}
