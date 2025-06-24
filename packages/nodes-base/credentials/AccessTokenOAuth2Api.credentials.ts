import type {
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class AccessTokenOAuth2Api implements ICredentialType {
	name = 'accessTokenOAuth2Api';

	displayName = 'Access Token OAuth2 API';

	documentationUrl = 'https://docs.n8n.io/credentials/access-token-oauth2/'; // TODO: Create this documentation page

	properties: INodeProperties[] = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'The OAuth2 access token',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.accessToken}}',
			},
		},
	};
}
