import { 
    Configuration, 
    IndexApi,
    UpdateApi,
    IndexDataRequest,
    UpdateAttributesRequest, 
    UpdateEmbeddingsRequest,
    ClearVectorSpaceRequest,
    DeleteRequest, 
} from 'vecto-sdk';

const config = new Configuration({
    accessToken: process.env.VECTO_ACCESS_TOKEN
});

const api = new UpdateApi(config);
const indexApi = new IndexApi(config);
let index_ids: Array<number>;

async function indexSampleData(): Promise<void> {
    const textBlob1 = new Blob(["Hello Vecto"]);
    const textBlob2 = new Blob(["Second Blob"]);

    const params: IndexDataRequest = {
        vectorSpaceId: Number(process.env.VECTO_VECTOR_SPACE_ID),
        modality: "TEXT",
        attributes: [JSON.stringify("sample attribute"), JSON.stringify("second attribute")],
        input: [textBlob1, textBlob2]
    };

    const indexResponse = await indexApi.indexData(params);
    index_ids = indexResponse.ids as Array<number>;
}

describe("Vecto Update Api Test", () => {
    beforeAll(async () => {
        // Index sample data before running tests
        await indexSampleData();
    });
    it('should update attribute ', async () => {
        
        const updateAttributeStr = "updated attribute"

        const updateAttributeParams: UpdateAttributesRequest = {
            vectorSpaceId: Number(process.env.VECTO_VECTOR_SPACE_ID),
            id: [index_ids[0]], 
            attributes: [JSON.stringify(updateAttributeStr)]
        };

        const updateResponse = await api.updateAttributes(updateAttributeParams);
        expect(updateResponse).toBeDefined();
    });

    it('should update embedding', async () => {
        const updateEmbeddingsParams: UpdateEmbeddingsRequest = {
            vectorSpaceId: Number(process.env.VECTO_VECTOR_SPACE_ID),
            modality: "TEXT",
            id: [index_ids[0]],
            input: [new Blob(["Updated Hello Vecto"])]
        };

        const updateEmbeddingResponse = await api.updateEmbeddings(updateEmbeddingsParams);
        expect(updateEmbeddingResponse).toBeDefined();
    });


    it('should delete an entry', async () => {
        const deleteRequest: DeleteRequest = {
            vectorSpaceId: Number(process.env.VECTO_VECTOR_SPACE_ID),
            id: [index_ids[0]],
        };

        const updateEmbeddingResponse = await api._delete(deleteRequest);
        expect(updateEmbeddingResponse).toBeDefined();

    });

    it('should clear vector space', async () => {
        const clearVectorSpaceParams: ClearVectorSpaceRequest = {
            vectorSpaceId: Number(process.env.VECTO_VECTOR_SPACE_ID)
        };

        const clearResponse = await api.clearVectorSpaceRaw(clearVectorSpaceParams);
        expect(clearResponse).toBeDefined();
    });
});
