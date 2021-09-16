
import AuthField from "../AuthField/AuthField";
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

export const fields = [
  {
    name: "email",
    label: "Email",
    component: AuthField,
    icon: AlternateEmailIcon,
    type: 'email'
  },
  
];
