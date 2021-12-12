import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { confirmUser } from "../../redux/actions/auth";
import AuthLayout from "../AuthLayot/index";
import { Message, MessageBox, FormButtons } from "./styles";

import { AuthMain } from "../../styles/buttons";
import { StyledLink } from "../../styles/utils";
import { useParams } from "react-router";

interface IParams {
  hash: string;
}

export const InfoPage: React.FC = () => {
  const dispatch = useDispatch();
  const message =
    useSelector(({ auth }: any) => auth.message) || "Invalid token";

  const { hash }: IParams = useParams();

  useEffect(() => {
    dispatch(confirmUser(hash));
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
