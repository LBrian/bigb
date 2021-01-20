import { WiredToggle } from 'wired-elements';

declare module 'preact' {
  namespace JSX {
    interface IntrinsicElements {
      'wired-toggle': HTMLAttributes<WiredToggle> &
        Partial<Pick<WiredToggle, 'checked' | 'disabled' | 'style'>> & {
          onchange?: (e: CustomEvent) => void;
        };
      'content-visibility': HTMLAttributes<HTMLDivElement> &
        PropsWithChildren<{
          containIntrinsicSize?: string;
          threshold?: number;
        }>;
    }
  }
}
