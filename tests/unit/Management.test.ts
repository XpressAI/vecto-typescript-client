import { Configuration, ManagementApi } from 'vecto-sdk';  

const config = new Configuration({
    accessToken: process.env.VECTO_ACCESS_TOKEN
});

const managementApi = new ManagementApi(config);

async function listUserInformation() {
    try {
        return await managementApi.getUserInformation();
    } catch (error) {
        throw new Error(`Failed to get user information: ${JSON.stringify(error)}`);
    }
}

// Test suite
describe('Management API Tests', () => {
    it('should list user information successfully', async () => {
        // Call the function
        const response = await listUserInformation();
        
        // Assertions to check if response is as expected
        expect(response).toBeDefined();
    });
});

