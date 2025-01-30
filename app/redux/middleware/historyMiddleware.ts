import { Middleware } from "@reduxjs/toolkit";
import { addToPast } from "../slices/historySlice";

const undoableActions = new Set([
    'color/setHeaderFooter',
    'color/setBodyColor',
    'color/setIconsColor',
    'color/setIconTextColor',
    'color/setHeadTextColor',
    'color/setBodyTextColor',
    'color/setButtonColor',
    'color/setProductBgColor',
    'color/setMrpTextColor',
    'typography/setHeadFontFamily',
    'typography/setBodyFontFamily',
    'typography/setHeadFontScaleSize',
    'typography/setBodyFontScaleSize',
    'button/setBtnThickness',
    'button/setBtnBroderStyle',
    'button/setBorderRadius',
    'button/setBorderColor',
    'button/setBtnConstrastColor',
    'button/setBtnHorizontalOffset',
    'button/setBtnVerticalOffset',
    'button/setBtnBlur',
    'button/setBtnShadowColor',
    'product/setImgPadding',
    'product/setImgRadius',
    'product/setTextAlignment',
    'product/setProductBorderThickness',
    'product/setProductBorderStyle',
    'product/setProductBorderRadius',
    'product/setProductBorderColor',
    'product/setProductHorizontalOffset',
    'product/setProductverticalOffeset',
    'product/setProductBlur',
    'product/setProductShadowColor',
]);

export const historyMiddleware: Middleware = (store) => (next) => (action) => {
    // Type-safe check for action type
    if (typeof action === 'object' && action !== null && 'type' in action && 
        typeof action.type === 'string' && 
        undoableActions.has(action.type)) {
        
        const previousState = {
            color: store.getState().color,
            typography: store.getState().typography,
            button: store.getState().button,
            product: store.getState().product
        };

        const result = next(action);
        store.dispatch(addToPast(previousState));
        return result;
    }
    return next(action);
};