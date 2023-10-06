// Lookup.test.ts

import { Configuration, LookupApi, LookupRequest } from 'vecto-sdk'
import fs from 'fs';

const config = new Configuration({
    accessToken: process.env.VECTO_ACCESS_TOKEN
});

const api = new LookupApi(config);

async function LookupText(query: string) {
    const params: LookupRequest = {
        vectorSpaceId: Number(process.env.VECTO_VECTOR_SPACE_ID),
        modality: 'TEXT',
        topK: 3,
        query: query, 
    };

    try {
        return await api.lookup(params);
    } catch (error) {
        throw error;
    }
}

async function LookupImage(query: Blob) {
    const params: LookupRequest = {
        vectorSpaceId: Number(process.env.VECTO_VECTOR_SPACE_ID),
        modality: 'IMAGE',
        topK: 3,
        query: query, 
    };

    try {
        return await api.lookup(params);
    } catch (error) {
        throw error;
    }
}

describe('LookupText Integration Test', () => {
    it('should fetch nearest vectors for a given text query', async () => {
        const query = 'sample';
        
        const response = await LookupText(query);
        expect(response).toBeDefined();
    });
});

describe('LookupImage Integration Test', () => {
    it('should fetch nearest vectors for a given image', async () => {

        const fileContent = fs.readFileSync('tests/assets/blue.png');
        const imageBlob = new Blob([fileContent]);
        
        // Call the function
        const response = await LookupImage(imageBlob);
        
        expect(response).toBeDefined();
    });
});