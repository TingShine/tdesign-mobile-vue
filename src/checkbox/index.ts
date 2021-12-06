import CheckBox from './checkbox.vue';
import { withInstall, WithInstallType } from '../shared';

import './style';

const _CheckBox: WithInstallType<typeof CheckBox> = withInstall(CheckBox);
export default _CheckBox;
