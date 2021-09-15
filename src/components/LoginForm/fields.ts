import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import AuthField from "../AuthField/AuthField";

export const fields = [
  {
    name: "username",
    label: "Username",
    component: AuthField,
    icon: AccountCircleOutlinedIcon,
    type: 'text'
  },
  {
    name: "password",
    label: "Password",
    component: AuthField,
    icon: VpnKeyIcon,
    type: 'password'
  },
];
