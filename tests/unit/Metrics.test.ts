import { Configuration, MetricsApi, UsageRequest } from '../../dist';

const config = new Configuration({
    accessToken: process.env.TEST_MANAGEMENT_ACCESS_TOKEN
});

const api = new MetricsApi(config);

describe("Vecto Usage Metrics Test", () => {
    it('should return the usage metrics for the selected month', async () => {

        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1;
        const currentYear = currentDate.getFullYear();

        const params: UsageRequest = {
            vectorSpaceId: Number(process.env.TEST_VECTOR_SPACE_ID),
            month: currentMonth,
            year: currentYear,
        };

        const indexResponse = await api.usage(params);
        expect(indexResponse).toBeDefined();
    });
});
