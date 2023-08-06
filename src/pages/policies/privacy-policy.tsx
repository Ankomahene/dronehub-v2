import { PortableText } from '@portabletext/react';
import React from 'react';
import { RichTextComponents } from '../../components/RichTextComponent';
import { PoliciesLayout } from '../../features/policies';
import { client } from '../../lib';
import { privacyPolicyQuery } from '../../queries';

const title = 'Privacy Policy';
const description = 'Building a community of people & drones';

interface Props {
  privacyPolicy: any;
}

const PrivacyPolicyPage = ({ privacyPolicy }: Props) => {
  return (
    <PoliciesLayout
      title={title}
      description={description}
      name="privacy-policy"
    >
      <PortableText value={privacyPolicy} components={RichTextComponents} />
    </PoliciesLayout>
  );
};

export default PrivacyPolicyPage;

export const getServerSideProps = async () => {
  const { privacyPolicy } = await client.fetch(privacyPolicyQuery);
  return {
    props: { privacyPolicy },
  };
};
