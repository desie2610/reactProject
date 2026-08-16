import { useFormik } from "formik";
import { FiX } from "react-icons/fi";
import { toast } from "react-toastify";
import { useLanguage } from "../../i18n";

import {
  Overlay,
  ModalWrapper,
  CloseButton,
  Title,
  Form,
  Input,
  SubmitButton,
  LoginText,
  LoginLink,
} from "./Modal.styled";

export default function Modal({ onClose, onSubmit }) {
  const { t } = useLanguage();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },

    onSubmit: (values, { resetForm }) => {
      if (onSubmit) {
        onSubmit(values);
      } else {
        localStorage.setItem(
          "weatherUser",
          JSON.stringify(values)
        );

        toast.success("Registration successful!");
      }

      resetForm();
      onClose();
    },
  });

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalWrapper>
        <CloseButton
          type="button"
          onClick={onClose}
          aria-label="Close"
        >
          <FiX size={24} />
        </CloseButton>

        <Title>{t("signUp")}</Title>

        <Form onSubmit={formik.handleSubmit}>
          <Input
            type="text"
            name="username"
            placeholder={t("username")}
            value={formik.values.username}
            onChange={formik.handleChange}
            required
          />

          <Input
            type="email"
            name="email"
            placeholder={t("email")}
            value={formik.values.email}
            onChange={formik.handleChange}
            required
          />

          <Input
            type="password"
            name="password"
            placeholder={t("password")}
            value={formik.values.password}
            onChange={formik.handleChange}
            required
          />

          <SubmitButton type="submit">
            {t("signUp")}
          </SubmitButton>
        </Form>

        <LoginText>
          {t("alreadyHaveAccount")} {" "}
          <LoginLink href="#login">
            {t("logIn")}
          </LoginLink>
        </LoginText>
      </ModalWrapper>
    </Overlay>
  );
}
/88888888888888/