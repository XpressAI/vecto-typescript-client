import { Configuration, IndexApi, IndexDataRequest } from "../../dist";


const config = new Configuration({
    accessToken: process.env.TEST_MANAGEMENT_ACCESS_TOKEN
});

const indexApi = new IndexApi(config);

export async function indexSampleData(): Promise<Array<number>> {
    const textBlob1 = new Blob(["Hello Vecto"]);
    const textBlob2 = new Blob(["Second Blob"]);

    const params: IndexDataRequest = {
        vectorSpaceId: Number(process.env.TEST_VECTOR_SPACE_ID),
        modality: "TEXT",
        attributes: [JSON.stringify("sample attribute"), JSON.stringify("second attribute")],
        input: [textBlob1, textBlob2]
    };

    const indexResponse = await indexApi.indexData(params);
    return indexResponse.ids as Array<number>;
}
