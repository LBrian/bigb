import type { FC, JSX } from 'preact/compat';

import IconBase from './IconBase';

const IconSlack: FC<JSX.SVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <IconBase {...props}>
      <g>
        <g>
          <path
            style={{ fillRule: 'nonzero' }}
            d='M107.57,323.544c0,29.603 -24.182,53.785 -53.785,53.785c-29.602,0 -53.785,-24.182 -53.785,-53.785c0,-29.602 24.183,-53.785 53.785,-53.785l53.785,0l0,53.785Z'
          />
          <path
            style={{ fillRule: 'nonzero' }}
            d='M134.671,323.544c0,-29.602 24.183,-53.785 53.785,-53.785c29.603,0 53.785,24.183 53.785,53.785l0,134.671c0,29.603 -24.182,53.785 -53.785,53.785c-29.602,0 -53.785,-24.182 -53.785,-53.785l0,-134.671Z'
          />
        </g>
        <g>
          <path
            style={{ fillRule: 'nonzero' }}
            d='M188.456,107.57c-29.602,0 -53.785,-24.182 -53.785,-53.785c0,-29.602 24.183,-53.785 53.785,-53.785c29.603,0 53.785,24.183 53.785,53.785l0,53.785l-53.785,0Z'
          />
          <path
            style={{ fillRule: 'nonzero' }}
            d='M188.456,134.671c29.603,0 53.785,24.183 53.785,53.785c0,29.603 -24.182,53.785 -53.785,53.785l-134.671,0c-29.602,0 -53.785,-24.182 -53.785,-53.785c0,-29.602 24.183,-53.785 53.785,-53.785l134.671,0Z'
          />
        </g>
        <g>
          <path
            style={{ fillRule: 'nonzero' }}
            d='M404.43,188.456c0,-29.602 24.183,-53.785 53.785,-53.785c29.603,0 53.785,24.183 53.785,53.785c0,29.603 -24.182,53.785 -53.785,53.785l-53.785,0l0,-53.785Z'
          />
          <path
            style={{ fillRule: 'nonzero' }}
            d='M377.329,188.456c0,29.603 -24.182,53.785 -53.785,53.785c-29.602,0 -53.785,-24.182 -53.785,-53.785l0,-134.671c0,-29.602 24.183,-53.785 53.785,-53.785c29.603,0 53.785,24.183 53.785,53.785l0,134.671Z'
          />
        </g>
        <g>
          <path
            style={{ fillRule: 'nonzero' }}
            d='M323.544,404.43c29.603,0 53.785,24.183 53.785,53.785c0,29.603 -24.182,53.785 -53.785,53.785c-29.602,0 -53.785,-24.182 -53.785,-53.785l0,-53.785l53.785,0Z'
          />
          <path
            d='M323.544,377.329c-29.602,0 -53.785,-24.182 -53.785,-53.785c0,-29.602 24.183,-53.785 53.785,-53.785l134.671,0c29.603,0 53.785,24.183 53.785,53.785c0,29.603 -24.182,53.785 -53.785,53.785l-134.671,0Z'
            style={{ fillRule: 'nonzero' }}
          />
        </g>
      </g>
    </IconBase>
  );
};

export default IconSlack;
