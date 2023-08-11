import React from 'react';
import { Contact } from '../../components';
import { Categories } from '../../components/Categories';
import { AllDeals, DealsCarousel } from '../../features';
import { client } from '../../lib';

import { IProductCategory } from '../../models/app';
import { productCategoryQuery } from '../../queries';

interface IDealsPageProps {
  categories: IProductCategory[];
}

const excludedCategories = ['Cameras & Gimbals', 'Software', 'Others'];

const DealsPage = ({ categories }: IDealsPageProps) => {
  return (
    <>
      <DealsCarousel />
      <Categories
        categories={categories.filter(
          (category) => !excludedCategories.includes(category.name)
        )}
      />
      <AllDeals />

      <Contact />
    </>
  );
};

export default DealsPage;

export const getServerSideProps = async () => {
  const categories: IProductCategory[] = await client.fetch(
    productCategoryQuery
  );

  return {
    props: { categories },
  };
};
