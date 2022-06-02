import { gql } from "@apollo/client";

export const INSERT_PLACES = gql`
mutation insert_places($adress: String!, $city: String!, $country: String, $link: String!, $name: String, $site: String!) {
    insert_place(objects: {adress: $adress, city: $city, country: $country, link: $link, name: $name, site: $site}) {
      affected_rows
    }
  }`;


  

  export const DELETE_PLACE = gql`
  mutation delete_place($id: uuid!) {
    delete_place(where: {id: {_eq: $id}}) {
      affected_rows
    }
  }`;

