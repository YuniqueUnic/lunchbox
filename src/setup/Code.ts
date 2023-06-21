import { applyDefaults, cn } from '../../deps.ts';
import { iCode } from '../types/props.ts';

export default (props: Partial<iCode>) => {
  const defaults: iCode = {
    children: undefined,
  };

  const p = applyDefaults<iCode>(defaults, props);

  const classes = {
    code: cn('comp-code clr-txt-personality'),
    wrapper: cn('comp-code_wrapper clr-bg-panel'),
  };

  return { c: classes, ...p };
};
