"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "kodebloxui/components/ui/dialog";
import { UserContext } from "kodebloxui/Providers/user-provider";
import React, { useContext, useEffect, useState } from "react";
import modal_conts from "kodebloxui/constants/MODAL_CONSTANTS.json";
import Login from "kodebloxui/customComponents/_authentication/Login/LoginForm";
import Register from "kodebloxui/customComponents/_authentication/Register/RegisterForm";
import USER from "kodebloxui/customComponents/_authentication/User/users";
import { VerifyForm } from "kodebloxui/customComponents/_authentication/VerifyForm";
import ForgotEmail from "kodebloxui/customComponents/_authentication/ForgotPassword/EmailSubmission";
import { ForgotVerifyForm } from "kodebloxui/customComponents/_authentication/ForgotPassword/VerificationForm";
import SETFORGOTPWD from "kodebloxui/customComponents/_authentication/ForgotPassword/PasswordChangeForm";

function ModalPage() {
  const { modalInfo, setModalInfo } = useContext(UserContext);
  return (
    // @ts-ignore
    <Dialog open={modalInfo?.isOpen} onOpenChange={setModalInfo}>
      <DialogContent className="w-full max-h-[92vh] overflow-scroll max-w-[450px]">
        {(() => {
          switch (modalInfo.modalName) {
            case modal_conts.SIGNIN_MODAL:
              return (
                <>
                  <DialogTitle>Login</DialogTitle>
                  <DialogDescription></DialogDescription>
                  <Login />
                </>
              );
            // case modal_conts.USER_MODAL:
            //   return (
            //     <>
            //       <DialogTitle>USER INFO</DialogTitle>
            //       <DialogDescription></DialogDescription>
            //       <USER />{" "}
            //     </>
            //   );

            case modal_conts.SIGNUP_MODAL:
              return (
                <>
                  <DialogTitle>Register</DialogTitle>
                  <DialogDescription></DialogDescription>
                  <Register />
                </>
              );
            case modal_conts.VERIFICATION_MODAL:
              return (
                <>
                  <DialogTitle>Verify</DialogTitle>
                  <DialogDescription></DialogDescription>
                  <VerifyForm />
                </>
              );
            case modal_conts.FP_EMAIL_MODAL:
              return (
                <>
                  <DialogTitle>Your email</DialogTitle>
                  <DialogDescription>
                    you will receive otp to this mail
                  </DialogDescription>
                  <ForgotEmail />
                </>
              );
            case modal_conts.FP_OTP_MODAL:
              return (
                <>
                  <DialogTitle>Verify</DialogTitle>
                  <DialogDescription>
                    Verify to change password
                  </DialogDescription>
                  <ForgotVerifyForm />
                </>
              );
            case modal_conts.FP_CHANGE_PWD_MODAL:
              return (
                <>
                  <DialogTitle>Change Password</DialogTitle>
                  <DialogDescription></DialogDescription>
                  <SETFORGOTPWD />
                </>
              );
            default:
              return null;
          }
        })()}
      </DialogContent>
    </Dialog>
  );
}

export default ModalPage;
