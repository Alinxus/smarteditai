import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
  params: {
    url: 'https://time.com/6266679/musk-ai-open-letter/',
    length: '3'
  },
  headers: {
    'X-RapidAPI-Key': '17a0363c65msh06aecbd4a12ad4ep1428dbjsnff0b43e7cd65',
    'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })


} catch (error) {
	console.error(error);
}
    
