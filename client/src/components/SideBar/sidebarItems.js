import routes from '../../configs/routes';
import dashboard from './images/dashboard.svg';
import projects from './images/projects.svg';
import create_project from './images/create_project.svg';
import settings from './images/settings.svg';
import bill from './images/bill.svg';
import account from './images/account.svg';

const Admin = [
    {route: routes.pathToDashboard, image: dashboard, alt: "dashboard", title: "Dashboard"},
    {route: routes.pathToProjectList, image: projects, alt: "projects", title: "Projects"},
    {route: routes.pathToCreatingProject, image: create_project, alt: "create_project", title: "Creating project"},
    {route: routes.pathToSettings, image: settings, alt: "settings", title: "Settings"},
    {route: routes.pathToBillSettings, image: bill, alt: "bill", title: "Bill settings"},
    {route: routes.pathToAccount, image: account, alt: "account", title: "Account"}
]

const Customer = [
    {route: routes.pathToDashboard, image: dashboard, alt: "dashboard", title: "Dashboard"},
    {route: routes.pathToSettings, image: settings, alt: "settings", title: "Settings"},
    {route: routes.pathToAccount, image: account, alt: "account", title: "Account"}

]

export default {Admin, Customer};