import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: 'https://closing-mustang-68.hasura.app/v1/graphql',
    headers: {'x-hasura-admin-secret': '5aS4HdUJukcNScc7zpIgUjEIZKu0v90sY0GiOgUWFrrCg4AUeEuVlZM5f5Tgb6KM'},
    cache: new InMemoryCache()
});

export default client;