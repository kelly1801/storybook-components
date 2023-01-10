/// <reference types="react" />
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
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor }: LabelProps) => JSX.Element;
export default MyLabel;
