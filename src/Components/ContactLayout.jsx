import { Outlet } from 'react-router-dom';
import ContactNavbar from './ContactNavbar'; 

const ContactLayout = () => {
  return (
    <>
      <ContactNavbar />
      <Outlet />
    </>
  );
};

export default ContactLayout;
