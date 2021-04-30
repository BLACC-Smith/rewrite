import { GraphQLClient } from 'graphql-request';
import { JumbotronInfoType } from '../types';
import { GET_JUMBO_INFO } from './queries';

const graphQLClient = new GraphQLClient(process.env.GQL_SERVER, {
	headers: {
		authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
	},
});

export const getInfo = async (): Promise<JumbotronInfoType[]> => {
	const data = await graphQLClient.request(GET_JUMBO_INFO);
	return data.jumbotronInfoCollection.items[0];
};
