const axios = require('axios');

require('dotenv').config();

// News routes
// async function searchArticle(value_to_search) {
//   try {
//     // Replace with your actual API key
//     const apiUrl = `https://newsapi.org/v2/everything?q=${value_to_search}&apiKey=${apiKey}`;

//     const response = await axios.get(apiUrl);
//     // Handle the response data here
//     return response.data;
//   } catch (error) {
//     // Handle any errors here
//     throw error;
//   }
// }

// async function searchArticleByDate(value_to_search, from_date , to_date) {
//     try {     
//       const apiUrl = `https://newsapi.org/v2/everything?q=${value_to_search}&from=${from_date}&to=${to_date}&sortBy=popularity&apiKey=${apiKey}`;
  
//       const response = await axios.get(apiUrl);
//       // Handle the response data here
//       return response.data;
//     } catch (error) {
//       // Handle any errors here
//       throw error;
//     }
// }

// async function searchArticleByDomain(domain_to_search){
//     try {
//       const apiUrl = `https://newsapi.org/v2/everything?domains=${domain_to_search}&apiKey=${apiKey}`;
//       const response = await axios.get(apiUrl);
//       return response.data;
//     } catch (err) {
//       throw err;
//     }
// }

// // Top headlines routes

// async function searchTopHeadlines_ByCountry(country){
//     try {
//       const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;
//       const response = await axios.get(apiUrl);
//       return response.data;
//     } catch (err) {
//       throw err;
//     }
// }

// async function searchTopHeadlines_ByCountry_Category(country,category){
//     try {
//       const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;
//       const response = await axios.get(apiUrl);
//       return response.data;
//     } catch (err) {
//       throw err;
//     }  
// }

// module.exports = { searchArticle , searchArticleByDate , searchArticleByDomain };

module.exports = {
  sourceByTop(source) {
    return 'https://newsapi.org/v2/top-headlines?sources='
      + source
      + '&apiKey='
      + process.env.API_KEY; // Set API key via environment or dotenv file
  },
  countryByTop(country) {
    return 'https://newsapi.org/v2/top-headlines?country='
      + country
      + '&apiKey='
      + process.env.API_KEY; // Set API key via environment or dotenv file
  },
}
