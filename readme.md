<p align="center">
<a href="https://www.vecto.ai/">
<img src="https://user-images.githubusercontent.com/68586800/192857099-499146bb-5570-4702-a88f-bb4582e940c0.png" width="300"/>
</a>
</p>
<p align="center">
  <a href="https://docs.vecto.ai/">Docs</a> •
  <a href="https://www.xpress.ai/blog/">Blog</a> •
  <a href="https://discord.com/invite/wtYbXvPPfD">Discord</a> •
  <a href="https://github.com/XpressAI/vecto-tutorials">Tutorials</a>
</p>

<br>

# Vecto TypeScript SDK
Welcome to the Vecto TypeScript SDK! This SDK provides convenient access to the Vecto API.

## Installation

```
npm install vecto-sdk
```


For the token, sign up for your access [here](https://www.vecto.ai/contactus).

## Local Testing
Ensure that you have Node 18+ installed and tsc. Clone this directory then run

```
export TEST_MANAGEMENT_ACCESS_TOKEN="your token" &&
export TEST_VECTOR_SPACE_ID="your vs id" &&
npm test
```



## Sample Usage

### Indexing
```
const api = new IndexApi(config);

const textDataParams: IndexDataRequest = {
    vectorSpaceId: 'your-vector-space-id',
    modality: 'TEXT',
    attributes: ['attr1', 'attr2'],
    input: [new Blob(['sample'])], 
};

await api.indexData(textDataParams);
```

### Lookup
```
const api = new LookupApi(config);

const textParams: LookupRequest = {
    vectorSpaceId: 'your-vector-space-id',
    modality: 'TEXT',
    topK: 3,
    query: 'sample', 
};

const results = await api.lookup(textParams);
```

## Documentation
For detailed documentation of the methods and models, refer to our [official documentation](https://docs.vecto.ai/).

## Developers Discord
Have any questions or need support? Feel free to chat with the devs at our [Discord](https://discord.com/invite/wtYbXvPPfD)!

## Support
For issues with the SDK, please raise a GitHub issue. For issues related to the API or other inquiries, please contact Vecto support.