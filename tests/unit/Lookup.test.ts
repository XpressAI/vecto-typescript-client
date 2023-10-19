import { Configuration, LookupApi, LookupRequest, LookupWithDynamicAnalogyRequest } from '../../dist/'
import fs from 'fs';

const config = new Configuration({
    accessToken: process.env.TEST_MANAGEMENT_ACCESS_TOKEN
});

const api = new LookupApi(config);

describe('Lookup Text Test', () => {
    it('should fetch nearest vectors for a given text query', async () => {
        const params: LookupRequest = {
            vectorSpaceId: Number(process.env.TEST_VECTOR_SPACE_ID),
            modality: 'TEXT',
            topK: 3,
            query: 'sample', 
        };
        const response = await api.lookup(params);
        expect(response).toBeDefined();
    });
});

describe('Lookup Image Test', () => {
    it('should fetch nearest vectors for a given image', async () => {
        const fileContent = fs.readFileSync('tests/assets/blue.png');
        const imageBlob = new Blob([fileContent]);

        const params: LookupRequest = {
            vectorSpaceId: Number(process.env.TEST_VECTOR_SPACE_ID),
            modality: 'IMAGE',
            topK: 3,
            query: imageBlob, 
        };
        const response = await api.lookup(params);
        expect(response).toBeDefined();
    });
});

describe('Dynamic Image Analogy Test', () => {
    it('should fetch nearest vectors given two images', async () => {
        const fileContent = fs.readFileSync('tests/assets/blue.png');
        const imageBlob = new Blob([fileContent]);

        const params: LookupWithDynamicAnalogyRequest = {
            vectorSpaceId: Number(process.env.TEST_VECTOR_SPACE_ID),
            modality: 'IMAGE',
            topK: 3,
            query: imageBlob,
            start: [imageBlob],
            end: [imageBlob]
        };
        const response = await api.lookupWithDynamicAnalogy(params);
        expect(response).toBeDefined();
    }, 20000); // Increased timeout to 20 seconds
});

describe('Dynamic Text Analogy Test', () => {
    it('should fetch nearest vectors given two text blob', async () => {

        const params: LookupWithDynamicAnalogyRequest = {
            vectorSpaceId: Number(process.env.TEST_VECTOR_SPACE_ID),
            modality: 'TEXT',
            topK: 3,
            query: "Man",
            start: [new Blob(["King"]), new Blob(["Husband"])],
            end: [new Blob(["Queen"]), new Blob(["Wife"])],
        };
        const response = await api.lookupWithDynamicAnalogy(params);
        expect(response).toBeDefined();
    });
});