import { PortableText } from '@portabletext/react';
import React from 'react';
import { RichTextComponents } from '../../components/RichTextComponent';
import { PoliciesLayout } from '../../features/policies';
import { client } from '../../lib';
import { afterSalesPolicyQuery } from '../../queries';

const title = 'After Sales Policy';
const description = 'Building a community of people & drones';

interface Props {
  afterSalesPolicy: any;
}

const AfterSalesPolicyPage = ({ afterSalesPolicy }: Props) => {
  return (
    <PoliciesLayout
      title={title}
      description={description}
      name="after-sales-policy"
    >
      <PortableText value={afterSalesPolicy} components={RichTextComponents} />
    </PoliciesLayout>
  );
};

export default AfterSalesPolicyPage;

export const getServerSideProps = async () => {
  const { afterSalesPolicy } = await client.fetch(afterSalesPolicyQuery);
  return {
    props: { afterSalesPolicy },
  };
};
