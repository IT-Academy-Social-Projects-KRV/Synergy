import routes from '../../configs/routes';
import projects from '../../assets/images/SideBarImages/projects.svg';
import customers from '../../assets/images/SideBarImages/customers.svg';
import CreateProject from '../../assets/images/SideBarImages/create_project.svg';
import settings from '../../assets/images/SideBarImages/settings.svg';
import bill from '../../assets/images/SideBarImages/bill.svg';
import account from '../../assets/images/SideBarImages/account.svg';

const fieldsForSideBar = {
  Admin: [
    {
      route: routes.AuthRoutes.pathToCustomers,
      image: customers,
      alt: 'customers',
      title: 'Customers',
    },
    {
      route: routes.AuthRoutes.pathToProjectList,
      image: projects,
      alt: 'projects',
      title: 'Projects',
    },
    {
      route: routes.AuthRoutes.pathToCreatingProject,
      image: CreateProject,
      alt: 'CreateProject',
      title: 'Creating project',
    },
    {
      route: routes.AuthRoutes.pathToSettings,
      image: settings,
      alt: 'settings',
      title: 'Settings',
    },
    {
      route: routes.AuthRoutes.pathToBillSettings,
      image: bill,
      alt: 'bill',
      title: 'Bill settings',
    },
    {
      route: routes.AuthRoutes.pathToAccount,
      image: account,
      alt: 'account',
      title: 'Account',
    },
  ],
  Customer: [
    {
      route: routes.AuthRoutes.pathToProjectList,
      image: projects,
      alt: 'projects',
      title: 'Projects',
    },
    {
      route: routes.AuthRoutes.pathToBillSettings,
      image: bill,
      alt: 'bill',
      title: 'Bill settings',
    },
    {
      route: routes.AuthRoutes.pathToSettings,
      image: settings,
      alt: 'settings',
      title: 'Settings',
    },
    {
      route: routes.AuthRoutes.pathToAccount,
      image: account,
      alt: 'account',
      title: 'Account',
    },
  ],
};

export default fieldsForSideBar;
