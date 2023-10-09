import { Configuration, IndexApi, IndexDataRequest } from 'vecto-sdk';
import fs from 'fs';

const config = new Configuration({
    accessToken: process.env.TEST_MANAGEMENT_ACCESS_TOKEN
});

const api = new IndexApi(config);

describe("Vecto Text Indexing Test", () => {
    it('should index text data to Vecto', async () => {
        const textBlob = new Blob(["Hello Vecto"]);

        const params: IndexDataRequest = {
            vectorSpaceId: Number(process.env.TEST_VECTOR_SPACE_ID),
            modality: "TEXT",
            attributes: [JSON.stringify("attribute1")],
            input: [textBlob]
        };

        const indexResponse = await api.indexData(params);
        expect(indexResponse).toBeDefined();
    });
});

describe("Vecto Image Indexing Test", () => {
    it('should index image data to Vecto', async () => {
        const fileContent = fs.readFileSync('tests/assets/blue.png');
        const imageBlob = new Blob([fileContent]);

        const params: IndexDataRequest = {
            vectorSpaceId: Number(process.env.TEST_VECTOR_SPACE_ID),
            modality: "IMAGE",
            attributes: [JSON.stringify("attribute1")],
            input: [imageBlob]
        };

        const indexResponse = await api.indexData(params);
        expect(indexResponse).toBeDefined();
    });
});
