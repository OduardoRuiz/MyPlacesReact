import { gql } from '@apollo/client';

export const GET_PLACES = gql`
query get_places {
    place(order_by: {created_at: desc}) {
      adress
      city
      id
      country
      link
      name
      site
      created_at
    }
  }`;