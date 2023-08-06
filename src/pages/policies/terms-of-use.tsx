import { PortableText } from '@portabletext/react';
import React from 'react';
import { RichTextComponents } from '../../components/RichTextComponent';
import { PoliciesLayout } from '../../features/policies';
import { client } from '../../lib';
import { termsOfUseQuery } from '../../queries';

const title = 'Terms of Use';
const description = 'Building a community of people & drones';

interface Props {
  termsOfUse: any;
}

const TermsOfUsePage = ({ termsOfUse }: Props) => {
  return (
    <PoliciesLayout title={title} description={description} name="terms-of-use">
      <PortableText value={termsOfUse} components={RichTextComponents} />
    </PoliciesLayout>
  );
};

export default TermsOfUsePage;

export const getServerSideProps = async () => {
  const { termsOfUse } = await client.fetch(termsOfUseQuery);
  return {
    props: { termsOfUse },
  };
};
