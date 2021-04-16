import { Button } from "./button";
import { CheckBox } from "./checkbox";

export interface GUIFactory {
    createButton(): Button
    createCheckBox(): CheckBox
}
