import { HTMLAttributes, PropsWithChildren } from 'react';
import {
  WiredToggle,
  WiredCard,
  WiredListbox,
  WiredItem
} from 'wired-elements';

export type RouterParams = {
  topic?: string;
};

// TODO: Contribute this to community
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wired-button': any;
      'wired-calendar': any;
      'wired-card': HTMLAttributes<HTMLDivElement> &
        PropsWithChildren<Pick<WiredCard, 'fill' | 'elevation'>>;
      'wired-checkbox': any;
      'wired-combo': any;
      'wired-dialog': any;
      'wired-divider': any;
      'wired-fab': any;
      'wired-icon-button': any;
      'wired-image': any;
      'wired-input': any;
      'wired-item': HTMLAttributes<WiredItem> &
        PropsWithChildren<Pick<WiredItem, 'value' | 'name' | 'selected'>>;
      'wired-link': any;
      'wired-listbox': HTMLAttributes<WiredListbox> &
        PropsWithChildren<
          Pick<WiredListbox, 'value' | 'selected' | 'horizontal'>
        >;
      'wired-progress': any;
      'wired-radio-group': any;
      'wired-radio': any;
      'wired-search-input': any;
      'wired-slider': any;
      'wired-spinner': any;
      'wired-tab': any;
      'wired-tabs': any;
      'wired-textarea': any;
      'wired-toggle': HTMLAttributes<WiredToggle> &
        Partial<Pick<WiredToggle, 'checked' | 'disabled' | 'style'>> & {
          onchange?: (e: CustomEvent) => void;
        };
      'wired-video': any;
    }
  }
}
