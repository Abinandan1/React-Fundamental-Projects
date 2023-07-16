import { toast } from "react-toastify";

const SingleColor = ({ color, index }) => {
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${color.hex}`);
        toast.success("Color copied to clipboard");
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      toast.error("Clipboard access not available");
    }
  };
  return (
    <div
      onClick={saveToClipboard}
      style={{ background: `rgb(${[...color.rgb]})` }}
      className={`color ${index > 10 ? "color-light" : ""}`}
    >
      <p className="percent-value">{color.weight}%</p>
      <p className="color-value">#{color.hex}</p>
    </div>
  );
};
export default SingleColor;
