import { groq } from 'next-sanity';

export const productCategoryQuery = groq`
*[_type == "category"]{
  "id": _id,
  name,
  "iconUrl": image.asset->url
}
`;

export const homeBannerDataQuery = groq`
  *[_type == "homeBannerData"]{
    ...,
    heading,
    tagline,
    "featuredProducts": featuredProducts[]->{
      "id": _id,
      "slug": slug.current,
      "name": title,
      tagline,
      "imageUrl": mainImage.asset->url
    }
  }
`;

export const productsBannerDataQuery = groq`
*[_type == "productsBannerData"] {
     "bannerProducts": bannerProducts[]->{
       "id": _id,
      "imageUrl": mainImage.asset->url,
      "name": title,
      "slug": slug.current,
      type,
      series,
      outOfStock,
      industry,
      tagline,
      "productType": _type ,
      }
}
`;

export const dronesQuery = groq`
*[_type == "drone"] {
  "id": _id,
  "imageUrl": mainImage.asset->url,
  "name": title,
  "slug": slug.current,
  type,
  series,
  outOfStock,
  industry,
  tagline,
  "productType": _type ,
}`;

export const cameraQuery = groq`
*[_type == "camera"] {
  "id": _id,
  "imageUrl": mainImage.asset->url,
  "name": title,
  "slug": slug.current,
  type,
  series,
  outOfStock,
  tagline,
  "productType": _type ,
}`;

export const otherProductsQuery = groq`
  *[_type == "other-product"]{
  "id": _id,
  "imageUrl": mainImage.asset->url,
  "name": title,
  "slug": slug.current,
  type,
  outOfStock,
  description,
  "productType": _type ,
}
`;

export const softwareQuery = groq`
  *[_type == "software"]{
  "id": _id,
  "imageUrl": mainImage.asset->url,
  "name": title,
  "slug": slug.current,
  type,
  outOfStock,
  description,
  "productType": _type ,
}
`;

export const productQuery = groq`
  *[_type in ["drone", "camera", "software", "other-product"] && slug.current == $slug][0] {
    ...,
    "id": _id,
    "mainImage": mainImage.asset->url,
    "gallery": gallery[].asset->url,
    "productType": _type ,
    "inBox": inBox[]{
      title,
      "images": images[].asset->url
    },
    "accessories": accessories[]{
      name,
      "imageUrl": image.asset->url
    },
    "recommended": recommended[]->{
      "id": _id,
      "imageUrl": mainImage.asset->url,
      "name": title,
      "slug": slug.current,
      type,
      series,
      outOfStock,
      industry,
      tagline,
      description,
    }
  }
`;

export const faqQuery = groq`
  *[_type == 'faq' ] {
    "id": _id,
    category,
    target,
    question,
    answer 
  }
`;

export const blogQuery = groq`
  *[_type == 'blog' ] {
    "id": _id,
    title,
    "slug": slug.current,
      type
  }
`;

export const blogDetailsQuery = groq`
  *[_type in ['blog', 'customerStories'] && slug.current == $slug ] {
    ...,
    "id": _id,
    title,
    "slug": slug.current,
      type
  }
`;

export const storyQuery = groq`
 *[_type == "customerStories"] {
  "id": _id,
  "profilePhoto": profilePhoto.asset->url,
  "name": title,
  "slug": slug.current,
  customerName,
  industryVertical
}
`;

export const privacyPolicyQuery = groq`
*[_type == "policies"][0] {
  privacyPolicy,
}
`;

export const afterSalesPolicyQuery = groq`
*[_type == "policies"][0] {
  afterSalesPolicy,
}
`;

export const warrantyPolicyQuery = groq`
*[_type == "policies"][0] {
  warrantyPolicy,
}
`;

export const termsOfUseQuery = groq`
*[_type == "policies"][0] {
  termsOfUse,
}
`;
