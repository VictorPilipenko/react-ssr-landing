import React from "react";
import { Helmet } from "react-helmet";
import { routes } from "../../constants/routes";
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text,
} from "./styles";

function SignIn() {
  return (
    <>
      <Helmet>
        <title>{'SSR Landing Sign In'}</title>
        <meta name="description" content={'Landing Sign In'} />
      </Helmet>
      <Container>
        <FormWrap>
          <Icon to={routes.home}>Logo</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign In to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot Password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
}

export default SignIn;
