import VpnKeyIcon from "@material-ui/icons/VpnKey";
import AuthField from "../AuthField/AuthField";

export const fields = [
  {
    name: "password",
    label: "Password",
    component: AuthField,
    icon: VpnKeyIcon,
    type: "password",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    component: AuthField,
    icon: VpnKeyIcon,
    type: "password",
  },
];
