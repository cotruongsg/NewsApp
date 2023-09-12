import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import NewsItem from './NewsItem'
import Spinner from './Spinner';

const News = (props) => {

    const [article, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [dataLoaded, setDataLoaded] = useState(false); // Track if data has been loaded    

    const capitalize = (str) => {
        const lower = str.toLowerCase();
        return str.charAt(0).toUpperCase() + lower.slice(1);
    }

    const filteredArticles = ( data ) => {
        return data.articles.filter((article) => {
            return (
                article.author !== null &&
                article.content !== '[Removed]' &&
                article.description !== '[Removed]' &&
                article.publishedAt !== "1970-01-01T00:00:00Z" &&
                article.source.name !== '[Removed]' &&
                article.title !== '[Removed]' &&
                article.url !== "https://removed.com" &&
                article.urlToImage !== null
            );
        });
    };

    const newsUpdate = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page - 1}&pageSize=${props.pageSize}`;
        
        try {
            setLoading(true);
            const response = await axios.get(url);
            props.setProgress(30);
            const parsedData = response.data;            
            props.setProgress(50);
            const filter = filteredArticles(parsedData)
            console.log(filter)
            setArticles(filter);
            setTotalResults(parsedData.totalResults);
            setLoading(false);
            props.setProgress(100);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    }

    useEffect(() => {
        document.title = `${capitalize(props.category)} - The Breaking News`;
        // newsUpdate();
        // Check if data has not been loaded, and if not, fetch data
        if (!dataLoaded) {
            newsUpdate();
            setDataLoaded(true); // Mark data as loaded
        }
    }, [newsUpdate, props.category, dataLoaded]);


    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        
        try {
            const response = await axios.get(url);
            const parsedData = response.data;         
            const filter = filteredArticles(parsedData)          
            setArticles((prevArticles) => [...prevArticles, ...filter]);
            setTotalResults(parsedData.totalResults);
            setPage((prevPage) => prevPage + 1);
        } catch (error) {
            console.error('Error fetching more data:', error);
        }
    }

    return (
        <>
            <h3 className='text-center' style={{ marginTop: "35px" }}>News - Top Headlines</h3>
            <p className='text-center' style={{ padding: '10px' }}>
                Category: <strong>{capitalize(props.category)}</strong>
            </p>
            {loading && <Spinner/>}
            <InfiniteScroll
                dataLength={article.length}
                next={fetchMoreData}
                hasMore={article.length !== totalResults}
                loader={<Spinner />}>
                <div className="container">
                    <div className="row">
                        {article.map((element) => {
                            return <div key={element.url} className="col-md-4">
                                <NewsItem title={element.title ? element.title.slice(0, 40) + "..." : ""} description={element.description ? element.description.slice(0, 190) + "..." : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} newsSource={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>           
        </>
    )

}

News.defaultProps = {
    country: 'in',
    pageSize: 3,
    category: 'general',
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News