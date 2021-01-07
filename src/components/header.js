import "../styles/header.css";

function Header(props) {
  return (
    <div className="title">
      <input
        className="inputTitle"
        type="text"
        value={props.title}
        onChange={props.updateTitle}
      />
    </div>
  );
}

export default Header;
