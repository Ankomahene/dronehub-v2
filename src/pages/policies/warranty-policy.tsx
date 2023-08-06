import { PortableText } from '@portabletext/react';
import React from 'react';
import { RichTextComponents } from '../../components/RichTextComponent';
import { PoliciesLayout } from '../../features/policies';
import { client } from '../../lib';
import { warrantyPolicyQuery } from '../../queries';

const title = 'Warranty Policy';
const description = 'Building a community of people & drones';

interface Props {
  warrantyPolicy: any;
}

const WarrantyPolicyPage = ({ warrantyPolicy }: Props) => {
  return (
    <PoliciesLayout
      title={title}
      description={description}
      name="warranty-policy"
    >
      <PortableText value={warrantyPolicy} components={RichTextComponents} />
    </PoliciesLayout>
  );
};

export default WarrantyPolicyPage;

export const getServerSideProps = async () => {
  const { warrantyPolicy } = await client.fetch(warrantyPolicyQuery);
  return {
    props: { warrantyPolicy },
  };
};
