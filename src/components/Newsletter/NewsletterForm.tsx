import { Box, Flex, Input, useToast } from '@chakra-ui/react';
import { FormikHelpers, useFormik } from 'formik';
import { FormEvent, useRef, useState } from 'react';
import { validateNewsLetterFormValues as validate } from '../../functions';
import { INewsletterFormValues } from '../../models/app';
import { Button } from '../Buttons/Button';
import { IndustrySelect } from './IndustrySelect';
import { inputStyles, submitBtnStyles } from './_styles';
import emailjs from '@emailjs/browser';
import { emailPublicKey, emailServiceId } from '../../consts';

const initialValues: INewsletterFormValues = {
  name: '',
  email: '',
  industry: '',
};

export const NewsletterForm = () => {
  const [industry, setIndustry] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const form = useRef<any>();
  const toast = useToast();

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (industry.trim() === '' || industry.trim() === 'Your Industry') {
      toast({
        title: 'Select Industry',
        status: 'error',
      });
      return;
    }

    if (name.trim() === '') {
      toast({
        title: 'Enter name',
        status: 'error',
      });
      return;
    }

    if (email.trim() === '') {
      toast({
        title: 'Enter Email',
        status: 'error',
      });
      return;
    }

    emailjs
      .sendForm(
        emailServiceId,
        'template_u3v3r9z',
        form.current,
        emailPublicKey
      )
      .then(
        (_result) => {
          toast({
            title: 'Subscription Added successfully',
            status: 'success',
          });
          setIndustry('');
          setEmail('');
          setName('');
        },
        (_error) => {
          toast({
            title: 'Failed to subscribe',
            status: 'error',
          });
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} autoComplete="off" className="w-100">
      <Flex
        justifyContent="center"
        alignItems="center"
        display={{ md: 'block', lg: 'flex' }}
      >
        <Box w="100%" mx={1} position="relative">
          <IndustrySelect
            value={industry}
            handleChange={(e) => setIndustry(e.target.value)}
          />
        </Box>
        <Box w="100%" mx={1} position="relative">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            name="name"
            {...inputStyles}
          />
        </Box>
        <Box w="100%" mx={1} position="relative">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            {...inputStyles}
          />
        </Box>
        <Button {...submitBtnStyles} />
      </Flex>
    </form>
  );
};
