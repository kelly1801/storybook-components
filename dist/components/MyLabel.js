import { jsx as _jsx } from "react/jsx-runtime";
import "./label.css";
export const MyLabel = ({ label = "No label", size = "normal", color = "primary", allCaps = false, fontColor = "#FFF", backgroundColor = "#3F2E56" }) => {
    return (_jsx("span", Object.assign({ style: { color: fontColor, backgroundColor }, className: `label ${size}  text-${color}` }, { children: allCaps ? label.toLocaleUpperCase() : label })));
};
export default MyLabel;
