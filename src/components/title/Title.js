import "./Title.scss";

export default function Title({ title, subtitle }) {
  return (
    <div className="title-block">
      <h1 className="title">{title}</h1>
      <br />
      <a href="https://github.com/HOVSEP93">{subtitle}</a>
    </div>
  );
}
