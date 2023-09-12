"use strict";

/** Routes for users. */

const jsonschema = require("jsonschema");

const express = require("express");
const { ensureCorrectUserOrAdmin, ensureAdmin } = require("../middleware/auth");
const { BadRequestError } = require("../expressError");
const User = require("../models/user");
const { createToken } = require("../helpers/tokens");
const search = require("../helpers/search")

const router = express.Router();

// // News routes
// router.get("/search-news/:value",  async function (req, res, next) {
//     try {
//         const article = await search.searchArticle(req.params.value)
//         // Filter articles to exclude those with null values for the specified fields
//         const filteredArticles = article.articles.filter((article) => {
//             return (
//             article.source.name !== null &&
//             article.title !== null &&
//             article.description !== null &&
//             article.url !== null &&
//             article.urlToImage !== null && 
//             article.publishedAt !== null
//             );
//         });

//         if (filteredArticles.length === 0) {
//             // Return "not found" message if no articles match the criteria
//             return res.status(404).json({ message: 'Your article is not found' });
//         }
    
//         // Map the filtered articles to extract the desired fields
//         const extractedData = filteredArticles.map((article) => {
//             return {
//             sourceName: article.source.name,
//             title: article.title,
//             description: article.description,
//             url: article.url,
//             urlToImage: article.urlToImage,
//             publishedAt: article.publishedAt
//             };
//         });
    
//         return res.json({ news: extractedData });
        
    
//     } catch (err) {
//       return next(err);
//     }
// });


// router.get("/search-news-by-date/:value/:from_date/:to_date",  async function (req, res, next) {
//     try {
//         const article = await search.searchArticleByDate(req.params.value , req.params.from_date , req.params.to_date)        

//         // Filter articles to exclude those with null values for the specified fields
//         const filteredArticles = article.articles.filter((article) => {
//             return (
//             article.source.name !== null &&
//             article.title !== null &&
//             article.description !== null &&
//             article.url !== null &&
//             article.urlToImage !== null &&
//             article.publishedAt !== null
//             );
//         });

//         if (filteredArticles.length === 0) {
//             // Return "not found" message if no articles match the criteria
//             return res.status(404).json({ message: 'Your article is not found' });
//         }
    
//         // Map the filtered articles to extract the desired fields
//         const extractedData = filteredArticles.map((article) => {
//             return {
//             sourceName: article.source.name,
//             title: article.title,
//             description: article.description,
//             url: article.url,
//             urlToImage: article.urlToImage,
//             publishedAt : article.publishedAt
//             };
//         });
    
//         return res.json({ news: extractedData });
        
    
//     } catch (err) {
//       return next(err);
//     }
// });

// router.get("/search-news-by-domains/:value", async function (req, res, next) {
//     try {
//         const article = await search.searchArticleByDomain(req.params.value);

//         // Filter articles to exclude those with null values for the specified fields
//         const filteredArticles = article.articles.filter((article) => {
//             return (
//                 article.source.name !== null &&
//                 article.title !== null &&
//                 article.description !== null &&
//                 article.url !== null &&
//                 article.urlToImage !== null &&
//                 article.publishedAt !== null
//             );
//         });

//         if (filteredArticles.length === 0) {
//             // Return "not found" message if no articles match the criteria
//             return res.status(404).json({ message: "Your article's domain is not found. Please separate each domain by 'comma , ' if you are searching over 1 domain." });
//         }

//         // Map the filtered articles to extract the desired fields
//         const extractedData = filteredArticles.map((article) => {
//             return {
//                 sourceName: article.source.name,
//                 title: article.title,
//                 description: article.description,
//                 url: article.url,
//                 urlToImage: article.urlToImage,
//                 publishedAt: article.publishedAt
//             };
//         });

//         return res.json({ news: extractedData });


//     } catch (err) {
//         return next(err);
//     }
// });

// Top headlines routes

router.get("/search-top-headlines-by-source/:value",async function(req,res,next){
    try {
        const results = search.sourceByTop(req.params.value)
        return res.json({results})

    } catch {err} {
        return next(err);

    }
});



module.exports = router;