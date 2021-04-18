import Screen from './components/app-screen';
import AppToolbar from './components/app-toolbar';
import AppForm from './components/app-form';
import AppInput from './components/app-input';
import Sidebar, {SidebarItem, SidebarButton} from './components/app-sidebar';
import SidebarExtended from './components/app-sidebar-extended';
import AppTree from './components/tree';
import AppMasterDetails from './components/master-details';
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
    AppTable: AppMasterDetails,
    AppAlert: AppAlert
}