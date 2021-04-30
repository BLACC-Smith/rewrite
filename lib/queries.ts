import { gql } from 'graphql-request';

export const GET_JUMBO_INFO = gql`
	query getJumbotronInfo {
		jumbotronInfoCollection {
			items {
				title
				subtitle
			}
		}
	}
`;
