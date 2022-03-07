import Screen from './components/screen/app-screen';
import AppToolbar from './components/app-toolbar';
import AppForm from './components/form-ctrls/app-form';
import AppInput from './components/form-ctrls/app-input';
import Sidebar, {SidebarItem, SidebarButton} from './components/sidebar/app-sidebar';
import SidebarExtended from './components/sidebar/app-sidebar-extended';
import AppTree from './components/tree';
import AppMasterDetails from './components/master-details';
import AppAlert from './components/alert-message/alert-message';
import AppTable from './components/table/app-table';
import AppTableExtended from './components/table/app-table-extended';

import './styles/layout.css';

export default {
    AppScreen: Screen,
    AppToolbar,
    AppForm,
    AppInput,
    AppSidebar: Sidebar,
    AppSidebarItem: SidebarItem,
    AppSidebarExtended: SidebarExtended,
    AppSidebarButton: SidebarButton,
    AppTree,
    AppMasterDetails,
    AppAlert,
    AppTable,
    AppTableExtended
};