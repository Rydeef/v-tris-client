import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import AuthField from "../AuthField/AuthField";
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

export const fields = [
  {
    name: "username",
    label: "Username",
    component: AuthField,
    icon: AccountCircleOutlinedIcon,
    type: 'text'
  },
  {
    name: "email",
    label: "E-mail",
    component: AuthField,
    icon: AlternateEmailIcon,
    type: 'email'
  },
  {
    name: "password",
    label: "Password",
    component: AuthField,
    icon: VpnKeyIcon,
    type: 'password'
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    component: AuthField,
    icon: VpnKeyIcon,
    type: 'password'
  },
];
