import routes from '../../configs/routes';
import dashboard from '../../assets/images/SideBarImages/dashboard.svg';
import projects from '../../assets/images/SideBarImages/projects.svg';
import CreateProject from '../../assets/images/SideBarImages/create_project.svg';
import settings from '../../assets/images/SideBarImages/settings.svg';
import bill from '../../assets/images/SideBarImages/bill.svg';
import account from '../../assets/images/SideBarImages/account.svg';

const fieldsForSideBar = {
  Admin: [
    {
      route: routes.pathToDashboard,
      image: dashboard,
      alt: 'dashboard',
      title: 'Dashboard',
    },
    {
      route: routes.pathToProjectList,
      image: projects,
      alt: 'projects',
      title: 'Projects',
    },
    {
      route: routes.pathToCreatingProject,
      image: CreateProject,
      alt: 'CreateProject',
      title: 'Creating project',
    },
    {
      route: routes.pathToSettings,
      image: settings,
      alt: 'settings',
      title: 'Settings',
    },
    {
      route: routes.pathToBillSettings,
      image: bill,
      alt: 'bill',
      title: 'Bill settings',
    },
    {
      route: routes.pathToAccount,
      image: account,
      alt: 'account',
      title: 'Account',
    },
  ],
  Customer: [
    {
      route: routes.pathToDashboard,
      image: dashboard,
      alt: 'dashboard',
      title: 'Dashboard',
    },
    {
      route: routes.pathToSettings,
      image: settings,
      alt: 'settings',
      title: 'Settings',
    },
    {
      route: routes.pathToAccount,
      image: account,
      alt: 'account',
      title: 'Account',
    },
  ],
};

export default fieldsForSideBar;
