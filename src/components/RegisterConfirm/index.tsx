import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { confirmUser } from "../../redux/actions/auth";
import AuthLayout from "../AuthLayot/index";
import { Message, MessageBox, FormButtons } from "./styles";

import { AuthMain } from "../../styles/buttons";
import { StyledLink } from "../../styles/utils";

export const InfoPage: React.FC = () => {
  const dispatch = useDispatch();
  const message =
    useSelector(({ auth }: any) => auth.message) || "Invalid token";
  const hash = window.location.pathname.split("/");
  useEffect(() => {
    dispatch(confirmUser(hash[hash.length - 1]));
  }, [dispatch, hash]);

  return (
    <AuthLayout>
      <>
        <MessageBox>
          <Message>{message}</Message>
          <FormButtons>
            <AuthMain type="button">
              <StyledLink to="/login">Log in</StyledLink>
            </AuthMain>
          </FormButtons>
        </MessageBox>
      </>
    </AuthLayout>
  );
};

export default InfoPage;
