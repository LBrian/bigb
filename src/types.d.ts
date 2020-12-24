import { WiredToggle } from "wired-elements";

// TODO: Contribute this to community
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "wired-button": any;
      "wired-calendar": any;
      "wired-card": any;
      "wired-checkbox": any;
      "wired-combo": any;
      "wired-dialog": any;
      "wired-divider": any;
      "wired-fab": any;
      "wired-icon-button": any;
      "wired-image": any;
      "wired-input": any;
      "wired-item": any;
      "wired-link": any;
      "wired-listbox": any;
      "wired-progress": any;
      "wired-radio-group": any;
      "wired-radio": any;
      "wired-search-input": any;
      "wired-slider": any;
      "wired-spinner": any;
      "wired-tab": any;
      "wired-tabs": any;
      "wired-textarea": any;
      "wired-toggle": Partial<
        Pick<WiredToggle, "checked" | "disabled" | "style">
      > & {
        onchange?: (e: CustomEvent) => void;
      };
      "wired-video": any;
    }
  }
}
