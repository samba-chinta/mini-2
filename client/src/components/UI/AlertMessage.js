import { Alert } from "@mui/material";

const AlertMessage = (props) => {
  return <Alert severity={props.severity}>{props.message}</Alert>;
};

export default AlertMessage;