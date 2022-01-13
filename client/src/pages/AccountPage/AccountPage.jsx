import { AccountPageProfile } from './components/AccountPageProfile';
import { AccountPageProjects } from './components/AccountPageProjects';


const AccountPage = () => {
  return (
    <>
      <div>
        <AccountPageProfile />
        <AccountPageProjects/>
      </div>
    </>
  );
  
};
    
export default AccountPage;