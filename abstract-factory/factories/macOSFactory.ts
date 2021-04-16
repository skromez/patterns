import { GUIFactory } from '../interfaces/guiFactory';
import { MacButton, MacCheckBox } from "../classes/macOS";
import { Button } from "../interfaces/button";
import { CheckBox } from '../interfaces/checkbox';

export class MacFactory implements GUIFactory {
    createButton(): Button {
        return new MacButton()
    }
    createCheckBox(): CheckBox {
        return new MacCheckBox()
    }
}
