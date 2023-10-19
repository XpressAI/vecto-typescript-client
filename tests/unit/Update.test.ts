import { 
    Configuration, 
    UpdateApi,
    UpdateAttributesRequest, 
    UpdateEmbeddingsRequest,
    ClearVectorSpaceRequest,
    DeleteRequest, 
} from '../../dist/';
import { indexSampleData } from '../utils/vecto_test_utils';

const config = new Configuration({
    accessToken: process.env.TEST_MANAGEMENT_ACCESS_TOKEN
});

const api = new UpdateApi(config);

describe("Vecto Update Api Test", () => {

    let index_ids: Array<number>;

    beforeAll(async () => {
        // Index sample data before running tests
        index_ids = await indexSampleData();
    });
    it('should update attribute ', async () => {
        
        const updateAttributeStr = "updated attribute"

        const updateAttributeParams: UpdateAttributesRequest = {
            vectorSpaceId: Number(process.env.TEST_VECTOR_SPACE_ID),
            id: [index_ids[0]], 
            attributes: [JSON.stringify(updateAttributeStr)]
        };

        const updateResponse = await api.updateAttributes(updateAttributeParams);
        expect(updateResponse).toBeDefined();
    });

    it('should update embedding', async () => {
        const updateEmbeddingsParams: UpdateEmbeddingsRequest = {
            vectorSpaceId: Number(process.env.TEST_VECTOR_SPACE_ID),
            modality: "TEXT",
            id: [index_ids[0]],
            input: [new Blob(["Updated Hello Vecto"])]
        };

        const updateEmbeddingResponse = await api.updateEmbeddings(updateEmbeddingsParams);
        expect(updateEmbeddingResponse).toBeDefined();
    });


    it('should delete an entry', async () => {
        const deleteRequest: DeleteRequest = {
            vectorSpaceId: Number(process.env.TEST_VECTOR_SPACE_ID),
            id: [index_ids[0]],
        };

        const updateEmbeddingResponse = await api._delete(deleteRequest);
        expect(updateEmbeddingResponse).toBeDefined();

    });

    it('should clear vector space', async () => {
        const clearVectorSpaceParams: ClearVectorSpaceRequest = {
            vectorSpaceId: Number(process.env.TEST_VECTOR_SPACE_ID)
        };

        const clearResponse = await api.clearVectorSpaceRaw(clearVectorSpaceParams);
        expect(clearResponse).toBeDefined();
    });
});
