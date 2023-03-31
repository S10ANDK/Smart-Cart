import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as S from './index.styled';

const schema = yup
  .object({
    name: yup.string().trim().min(3).max(30).required(),
    email: yup.string().email().trim().min(3).max(40).required(),
    subject: yup.string().trim().min(3).max(20).required(),
    message: yup.string().trim().min(3).max(250).required(),
  })
  .required();

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
    reset();
    setIsSubmitted(true);
  }

  return (
    <>
      <S.ContactDiv>
        <h1>Contact Form</h1>

        {!isSubmitted ? (
          <>
            <p>
              Feel free to get in touch with Smart Cart by filling in the
              contact form.
            </p>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <input placeholder="name" {...register('name')} />
              <S.FormErrorMessage>{errors.name?.message}</S.FormErrorMessage>
              <input placeholder="email" {...register('email')} />
              <S.FormErrorMessage>{errors.email?.message}</S.FormErrorMessage>
              <input placeholder="subject" {...register('subject')} />
              <S.FormErrorMessage>{errors.subject?.message}</S.FormErrorMessage>
              <textarea
                placeholder="message"
                rows={10}
                cols={30}
                {...register('message')}
              />
              <S.FormErrorMessage>{errors.message?.message}</S.FormErrorMessage>
              <S.SubmitFormButton type="submit" value="Submit" />
            </S.Form>
          </>
        ) : (
          <S.ConfirmationMessage>
            Your message has been sent successfully!
          </S.ConfirmationMessage>
        )}
      </S.ContactDiv>
    </>
  );
}

export default Contact;
