import Screen from './components/screen/app-screen';
import AppToolbar from './components/app-toolbar';
import AppForm from './components/app-form';
import AppInput from './components/app-input';
import Sidebar, {SidebarItem, SidebarButton} from './components/sidebar/app-sidebar';
import SidebarExtended from './components/sidebar/app-sidebar-extended';
import AppTree from './components/tree';
import AppMasterDetails, {AppTable} from './components/master-details';
import AppAlert from './components/alert-message/alert-message';

import './styles/layout.css';
import './styles/components.css';

export default {
    AppScreen: Screen,
    AppToolbar: AppToolbar,
    AppForm: AppForm,
    AppInput: AppInput,
    AppSidebar: Sidebar,
    AppSidebarItem: SidebarItem,
    AppSidebarExtended: SidebarExtended,
    AppSidebarButton: SidebarButton,
    AppTree: AppTree,
    AppMasterDetails: AppMasterDetails,
    AppAlert: AppAlert
};

export {AppTable}