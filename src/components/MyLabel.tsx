import "./label.css";

export interface LabelProps {
  /**
   * Is the content of the tag
   */

  label: string;

  /**
   * Is the font size
   */

  size: "normal" | "h1" | "h2" | "h3";

  /**
   * Defines the capitalization of the tag
   */

  allCaps?: boolean;

  /**
   * Defines the font color
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Defines a custom font color
   */
  fontColor?: string;
   /**
   * Defines a custom bg-color
   */
  backgroundColor: string;

}
const MyLabel = ({
  label = "No label",
  size = "normal",
  color = "primary",
  allCaps = false,
  fontColor = "#FFF",
  backgroundColor = "#3F2E56"
}: LabelProps) => {
  return (
    <span
      style={{ color: fontColor, backgroundColor}}
      className={`label ${size}  text-${color}`}
    >
      {allCaps ? label.toLocaleUpperCase() : label}
    </span>
  );
};

export default MyLabel;
