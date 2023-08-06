import {
  Box,
  Button,
  ButtonProps,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Textarea,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import emailjs from '@emailjs/browser';
import { FormEvent, useRef, useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { IconButton } from '../../components';
import { IndustrySelect } from '../../components/Newsletter/IndustrySelect';
import { mainPublicKey, mainServiceId } from '../../consts';

interface ModalProps {
  btnLabel: string;
  btnStyle: ButtonProps;
}

export function JoinOurTeamModal({ btnLabel, btnStyle }: ModalProps) {
  const [industry, setIndustry] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const form = useRef<any>();

  function alertError(title: string) {
    toast({
      title,
      status: 'error',
    });
  }

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const formProps = Object.fromEntries(formData);

    const { email = '', firstName, lastName, phone, message } = formProps;

    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;

    if (!email || !emailPattern.test(email as string)) {
      alertError('Enter valid email');
    }

    if (!industry) {
      alertError('Please select Interested Role');
    }

    emailjs
      .send(
        mainServiceId,
        'template_vc3a99a',
        {
          title: btnLabel,
          email,
          firstName,
          lastName,
          industry,
          phone,
          message,
        },
        mainPublicKey
      )
      .then(
        (_res) => {
          toast({
            title: 'Request Submitted Successfully',
            status: 'success',
          });
        },
        (_err) => {
          const title = 'Fail to Submit Request. Please try again!';
          alertError(title);
        }
      );
  };

  return (
    <>
      <IconButton
        onClick={onOpen}
        title={btnLabel}
        icon={<BiChevronRight />}
        maxW={{ base: '100%', md: '200px' }}
        {...btnStyle}
      />

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{btnLabel}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <form ref={form} onSubmit={sendEmail}>
                <HStack spacing={8}>
                  <FormControl isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" placeholder="Louisa" name="firstName" />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" placeholder="Clinton" name="lastName" />
                  </FormControl>
                </HStack>
                <HStack spacing={8} my="1rem">
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      placeholder="Louisa@dronehubgh.com"
                      name="email"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Phone Number</FormLabel>
                    <Input
                      type="text"
                      placeholder="+233-98760004994"
                      name="phone"
                    />
                  </FormControl>
                </HStack>
                <HStack spacing={8} my="1rem">
                  <FormControl isRequired>
                    <FormLabel>Interested Role</FormLabel>
                    <IndustrySelect
                      value={industry}
                      handleChange={(e) => setIndustry(e.target.value)}
                    />
                  </FormControl>
                </HStack>

                <HStack spacing={8} my="1rem">
                  <FormControl>
                    <FormLabel>Your Message</FormLabel>
                    <Textarea placeholder="Kindly type here" name="message" />
                  </FormControl>
                </HStack>

                <Box textAlign="right" my="1rem">
                  <Button type="submit" bgColor="brand.blue" color="gray.100">
                    Submit
                  </Button>
                </Box>
              </form>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
