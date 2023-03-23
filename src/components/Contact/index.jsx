import Div from "../styles/Div";
import React from "react";
import { useForm } from 'react-hook-form';
import * as S from "./index.styled"

function Contact() {
    const { register, handleSubmit } = useForm();

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <>
        <Div>
            <h1>Contact Form</h1>
            <p>Feel free to get in touch with Smart Cart by filling in the contact form.</p>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <input placeholder="name"{...register('name')} />
              <input placeholder="email"{...register('email')} />
              <input placeholder="subject"{...register('subject')} />
              <textarea placeholder="message" rows={10} cols={30}{...register('message')} />
              <S.SubmitFormButton type="submit" />
            </S.Form>
        </Div>
      </>
    );
  }

  export default Contact;