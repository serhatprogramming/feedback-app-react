import spinner from "../assets/spinner.gif";

export default function Spinner() {
  return (
    <img
      src={spinner}
      alt="spinner"
      style={{
        height: "100px",
        margin: "40px auto",
        display: "block",
      }}
    />
  );
}
