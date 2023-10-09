import { 
    Configuration, 
    ManagementApi, 
    CreateVectorSpaceRequest, 
    DeleteVectorSpaceRequest,
    CreateTokenRequest,
    DeleteTokenRequest,
    ListDataRequest,
    UpdateVectorSpaceOperationRequest
} from 'vecto-sdk';

const config = new Configuration({
    accessToken: process.env.VECTO_ACCESS_TOKEN
});

const api = new ManagementApi(config);

describe('Management API Tests - List User', () => {
    it('should list user information successfully', async () => {
        const response = await api.getUserInformation();
        expect(response).toBeDefined();
    });
});

describe('Management API Tests - List Data', () => {
    it('should list the attributes of all entries in the given vector space successfully', async () => {
        const params: ListDataRequest = {
            vectorSpaceId: Number(process.env.VECTO_VECTOR_SPACE_ID),
        }
        const response = await api.listData(params);
        expect(response).toBeDefined();
    });
});

describe('Management API Tests - Vector Space', () => {

    let vector_space_id: number;

    it('should create a new vector space', async () => {
        const params: CreateVectorSpaceRequest = {
            newVectorSpaceRequest: {
                name: 'js-sdk-test-vs',
                modelId: 1
            }
        };

        const response = await api.createVectorSpace(params);
        expect(response).toBeDefined();
        vector_space_id = response.id as number
    });

    it('should rename the new vector space', async () => {

        const updatedVSName = 'updated-js-sdk-test-vs'

        const params: UpdateVectorSpaceOperationRequest = {
            id: vector_space_id,
            updateVectorSpaceRequest:{
                name: updatedVSName,
            }
        };

        const response = await api.updateVectorSpace(params);
        expect(response).toBeDefined();
    });

    it('should delete the newly created vector space', async () => {

        const params: DeleteVectorSpaceRequest = {
                id: vector_space_id
            }

        if (vector_space_id) {
            const response = await api.deleteVectorSpace(params);
            expect(response).toBeDefined();
        } else {
            throw new Error("Vector space was not created in the previous test");
        }
    });

});

describe('Management API Tests - Tokens', () => {

    let token_id: number;

    it('should create a new token', async () => {
        const params: CreateTokenRequest = {
            newTokenRequest:{
                tokenType: "PUBLIC",
                name: "test-token",
            }
        };

        const response = await api.createToken(params);
        expect(response).toBeDefined();
        token_id = response.id as number
    });

    it('should delete the newly created token', async () => {

        const params: DeleteTokenRequest = {
                id: token_id
            }

        if (token_id) {
            const response = await api.deleteToken(params);
            expect(response).toBeDefined();
        } else {
            throw new Error("Token was not created in the previous test");
        }
    });

});