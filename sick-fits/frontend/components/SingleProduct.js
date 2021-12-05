import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import styled from 'styled-components';
import formatMoney from '../lib/formatMoney';
import DisplayError from './ErrorMessage';

const ProductStyles = styled.div`
  align-items: top;
  display: grid;
  gap: 2rem;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  margin: 0 auto;
  max-width: var(--max-width);

  img {
    object-fit: contain;
    object-position: top;
    width: 100%;
  }
`;

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      description
      name
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
      price
    }
  }
`;

export default function SingleProduct({ id }) {
  console.log(id);
  const { loading, error, data } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: { id },
  });
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) return DisplayError({ error });

  const { Product } = data;

  return (
    <ProductStyles>
      <Head>
        <title>{Product.name} - Sick Fits</title>
      </Head>
      <img
        src={Product.photo.image.publicUrlTransformed}
        alt={Product.photo.altText || Product.name}
      />
      <div className="details">
        <h2>{Product.name}</h2>
        <p>{Product.description}</p>
        <p>{formatMoney(Product.price)}</p>
      </div>
    </ProductStyles>
  );
}
