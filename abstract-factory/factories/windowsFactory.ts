import { CheckBox } from "../interfaces/checkbox";
import { WinButton, WinCheckBox } from "../classes/windows";
import { GUIFactory } from "../interfaces/guiFactory";
import { Button } from "../interfaces/button";

export class WinFactory implements GUIFactory {
    createButton(): Button {
        return new WinButton()
    }
    createCheckBox(): CheckBox {
        return new WinCheckBox()
    }
}
