import { Select, MultiSelect } from "@blueprintjs/select";
import {
  Switch,
  InputGroup,
  Classes,
  Popover,
  MenuItem,
  Menu,
} from "@blueprintjs/core";
import { DropdownOption } from "widgets/DropdownWidget";
import { ContainerOrientation } from "constants/WidgetConstants";
import { DateInput, DateRangeInput } from "@blueprintjs/datetime";
import { Colors } from "constants/Colors";
import styled, { Skin, createGlobalStyle } from "constants/DefaultTheme";
import { AnyStyledComponent } from "styled-components";
import { ControlIcons } from "icons/ControlIcons";
import Button from "components/ads/Button";

type ControlWrapperProps = {
  orientation?: ContainerOrientation;
  isAction?: boolean;
};

export const ControlWrapper = styled.div<ControlWrapperProps>`
  display: ${(props) =>
    props.orientation === "HORIZONTAL" ? "flex" : "block"};
  justify-content: space-between;
  align-items: center;
  flex-direction: ${(props) =>
    props.orientation === "VERTICAL" ? "column" : "row"};
  padding: ${(props) => (props.isAction ? "0" : "4px 0 ")};
  & > label {
    color: ${(props) => props.theme.colors.paneText};
    margin-bottom: ${(props) => props.theme.spaces[1]}px;
    font-size: ${(props) => props.theme.fontSizes[3]}px;
  }
  &&& > label:first-of-type {
    display: block;
  }
  &&& > label {
    display: inline-block;
  }
`;

export const ControlPropertyLabelContainer = styled.div`
  display: flex;
  align-items: center;
  label {
    color: ${(props) => props.theme.colors.propertyPane.label};
    margin-bottom: ${(props) => props.theme.spaces[1]}px;
    font-size: ${(props) => props.theme.fontSizes[3]}px;
  }
  .underline {
    color: ${(props) => props.theme.colors.paneTextUnderline};
  }
`;

export const JSToggleButton = styled.span<{ active: boolean }>`
  margin: 0 4px;
  cursor: pointer;
  border-radius: 4px;
  height: auto;
  width: 28px;
  height: 16px;
  border: 0.5px solid #6a86ce;
  background-color: ${(props) =>
    props.active ? "#6A86CE" : props.theme.colors.propertyPane.addButtonBG};

  &:hover {
    background-color: ${(props) =>
      props.theme.colors.propertyPane.jsButtonHoverBG};

    &&& svg {
      path {
        fill: ${(props) => (props.active ? "#6A86CE" : "#6A86CE")};
      }
    }
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &&& svg {
    width: 28px;
    height: 16px;
    transform: scale(1.6);

    rect {
      fill: transparent;
    }

    path {
      fill: ${(props) => (props.active ? "#ffffff" : "#6A86CE")};
    }
  }
`;

export const StyledDropDownContainer = styled.div`
  &&&& .${Classes.BUTTON} {
    box-shadow: none;
    border-radius: 4px;
    background-color: ${Colors.SHARK};
    color: ${Colors.CADET_BLUE};
    background-image: none;
    &.code-highlight {
      .language-javascript {
        border: none;
        box-shadow: none;
        background: transparent;
        white-space: normal;
        word-break: break-word;
      }
      .bp3-button-text {
        white-space: normal;
        word-break: break-word;
        display: block;
        overflow: auto;
        overflow-y: hidden;
      }
    }
  }
  width: 100%;
`;

export const DropdownStyles = createGlobalStyle`
  .select-popover-wrapper {
    width: 100%;
    border-radius: ${(props) => props.theme.radii[1]}px;
    box-shadow:  0px 2px 4px rgba(67, 70, 74, 0.14);
    padding: ${(props) => props.theme.spaces[3]}px;
    background: white;
    && .${Classes.MENU} {
      max-width: 100%;
      max-height: auto;
    }
    &&&& .${Classes.MENU_ITEM} {
      padding: ${(props) => props.theme.spaces[3]}px
      ${(props) => props.theme.spaces[4]}px;
      background: ${(props) =>
        props.theme.colors.treeDropdown.darkMenuBg.normal};
      color: ${(props) => props.theme.colors.treeDropdown.darkMenuText.normal};
      border-radius: 0px;
      &:hover {
        background: ${(props) =>
          props.theme.colors.treeDropdown.darkMenuBg.hover};
      }
      &.${Classes.ACTIVE} {
        background: ${(props) =>
          props.theme.colors.treeDropdown.darkMenuBg.hover};
        color: ${(props) => props.theme.colors.treeDropdown.darkMenuText.hover};
        position: relative;
        &.single-select {
          &:before {
            left: 0;
            top: -2px;
            position: absolute;
            content: "";
            background: ${(props) => props.theme.colors.primaryOld};
            border-radius: 0px;
            width: 4px;
            height: 100%;
          }
        }
      }
    }
  }
`;

export const StyledMenu = styled(Menu)`
  && {
    background: ${(props) => props.theme.dropdown[Skin.DARK].background};
    border-radius: unset;
  }
  .bp3-submenu .bp3-menu {
    background: ${(props) => props.theme.dropdown[Skin.DARK].background};
  }
`;

const DropDown = Select.ofType<DropdownOption>();
export const StyledDropDown = styled(DropDown)`
  div {
    flex: 1 1 auto;
  }
  span {
    width: 100%;
    position: relative;
  }
  &&&& .${Classes.BUTTON} {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    border-radius: 0px;
    background-color: ${(props) => props.theme.colors.treeDropdown.targetBg};
    color: ${(props) => props.theme.colors.treeDropdown.darkMenuText.normal};
  }
  &&&& .${Classes.BUTTON_TEXT} {
    text-overflow: ellipsis;
    text-align: left;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  &&&& .${Classes.ICON} {
    width: fit-content;
    color: ${Colors.SLATE_GRAY};
  }
`;

export const StyledPopover = styled(Popover)`
  .${Classes.POPOVER_TARGET} {
    display: flex;
  }
  div {
    flex: 1 1 auto;
  }
  span {
    width: 100%;
    position: relative;
  }
  .${Classes.BUTTON} {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
  .${Classes.BUTTON_TEXT} {
    text-overflow: ellipsis;
    text-align: left;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  && {
    .${Classes.ICON} {
      width: fit-content;
      color: ${Colors.SLATE_GRAY};
    }
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  &&&&&& {
    border-radius: ${(props) => props.theme.radii[1]}px;
    background: ${(props) => props.theme.dropdown[Skin.DARK].background};
    color: ${(props) => props.theme.dropdown[Skin.DARK].inActiveText};
    padding: 4px 8px;
    margin: 4px 0px;
    &:hover {
      background: ${(props) => props.theme.dropdown[Skin.DARK].hoverBG};
      &&&.bp3-menu-item.bp3-intent-danger:hover {
        background: ${(props) => props.theme.colors.error};
      }
    }
    &.${Classes.ACTIVE} {
      background: ${(props) => props.theme.dropdown[Skin.DARK].hoverBG};
      color: ${(props) => props.theme.dropdown[Skin.DARK].hoverText};
      position: relative;
      &.single-select {
        &:before {
          left: 0;
          top: -2px;
          position: absolute;
          content: "";
          background: ${(props) => props.theme.dropdown[Skin.DARK].hoverBG};
          border-radius: 4px 0 0 4px;
          width: 4px;
          height: 100%;
        }
      }
    }
    &&&& .${Classes.MENU} {
      background: ${(props) => props.theme.dropdown[Skin.DARK].inActiveBG};
    }
  }
`;

const MultiSelectDropDown = MultiSelect.ofType<DropdownOption>();
export const StyledMultiSelectDropDown = styled(MultiSelectDropDown)`
  &&& button {
    background: ${(props) => props.theme.colors.paneInputBG};
    color: ${(props) => props.theme.colors.textOnDarkBG};
    box-shadow: none;
  }
`;

export const StyledSwitch = styled(Switch)`
  &&&&& input:checked ~ span {
    background: ${(props) => props.theme.colors.primaryOld};
  }
`;

export const StyledDynamicInput = styled.div`
  width: 100%;
  &&& {
    input {
      border: none;
      color: ${(props) => props.theme.colors.textOnDarkBG};
      background: ${(props) => props.theme.colors.paneInputBG};
      &:focus {
        border: none;
        color: ${(props) => props.theme.colors.textOnDarkBG};
        background: ${(props) => props.theme.colors.paneInputBG};
      }
    }
  }
`;

export const StyledInputGroup = styled(InputGroup)`
  & > input {
    placeholder-text: ${(props) => props.placeholder};
    background: ${(props) => props.theme.colors.propertyPane.radioGroupBg};
    color: ${(props) => props.theme.colors.propertyPane.radioGroupText};
  }
`;

export const StyledDatePicker = styled(DateInput)`
  > input {
    color: ${(props) => props.theme.colors.textOnDarkBG};
    background: ${(props) => props.theme.colors.paneInputBG};
    border: 1px solid green;
  }
`;

export const StyledDateRangePicker = styled(DateRangeInput)`
  > input {
    color: ${(props) => props.theme.colors.textOnDarkBG};
    background: ${(props) => props.theme.colors.paneInputBG};
    border: 1px solid green;
  }
`;

export const FieldWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledEditIcon = styled(
  ControlIcons.SETTINGS_CONTROL as AnyStyledComponent,
)`
  padding: 0;
  position: absolute;
  margin-left: 0;
  cursor: pointer;
  right: 35px;
  & svg {
    width: 12px;
    height: 12px;
    position: relative;
    top: 2px;
    path {
      fill: ${(props) => props.theme.colors.paneSectionLabel};
    }
  }
`;

export const StyledDragIcon = styled(
  ControlIcons.DRAG_CONTROL as AnyStyledComponent,
)`
  padding: 0;
  position: absolute;
  margin-right: 15px;
  cursor: move;
  z-index: 1;
  left: 4px;
  svg {
    width: 16px;
    height: 16px;
    position: relative;
    top: 2px;
    path {
      fill: ${(props) => props.theme.colors.paneSectionLabel};
    }
  }
`;

export const StyledDeleteIcon = styled(
  ControlIcons.DELETE_COLUMN as AnyStyledComponent,
)`
  padding: 0;
  position: absolute;
  margin-left: 15px;
  cursor: pointer;
  right: 16px;
  svg {
    width: 24px;
    height: 24px;
    top: -2px;
    position: relative;
    path {
      fill: ${(props) => props.theme.colors.paneSectionLabel};
    }
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
`;

export const StyledVisibleIcon = styled(
  ControlIcons.SHOW_COLUMN as AnyStyledComponent,
)`
  padding: 0;
  position: absolute;
  margin-left: 15px;
  cursor: pointer;
  right: 16px;
  svg {
    width: 24px;
    height: 24px;
    top: -2px;
    position: relative;
    path {
      fill: ${(props) => props.theme.colors.paneSectionLabel};
    }
  }
`;

export const StyledHiddenIcon = styled(
  ControlIcons.HIDE_COLUMN as AnyStyledComponent,
)`
  padding: 0;
  position: absolute;
  margin-left: 15px;
  cursor: pointer;
  right: 16px;
  svg {
    width: 14px;
    top: 3px;
    height: 14px;
    left: 3px;
    position: relative;
    path {
      fill: ${(props) => props.theme.colors.paneSectionLabel};
    }
  }
`;

export const StyledPropertyPaneButton = styled(Button)`
  margin-top: 4px;
  margin-left: auto;
  display: flex;
  justify-content: flex-end;

  &,
  &:active,
  &:hover {
    border-color: transparent;
    color: ${(props) => props.theme.colors.propertyPane.addButtonBG};
    background-color: ${(props) => props.theme.colors.propertyPane.buttonBg};
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;
