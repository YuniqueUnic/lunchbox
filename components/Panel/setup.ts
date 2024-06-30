//   ___               _           _
//  | _ \__ _ _ _  ___| |  ___ ___| |_ _  _ _ __
//  |  _/ _` | ' \/ -_) | (_-</ -_)  _| || | '_ \
//  |_| \__,_|_||_\___|_| /__/\___|\__|\_,_| .__/
//                                         |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<Panel />` component.
 *
 * @module
 */
import { o, part } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';
import { styles } from './styles.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Panel />` component. */
export type iPanel = iComponent<HTMLDivElement>;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Panel />` component. */
export default (props: Partial<iPanel>) => {
  const p = props;

  const classes = part({
    panel: o([styles, 'panel'], { ...p }),
  });

  delete p.class;
  return { c: classes, ...p };
};
