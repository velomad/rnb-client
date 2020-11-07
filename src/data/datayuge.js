import React, { useEffect,useState } from 'react';
import _ from 'lodash';
import axios from "axios";

const DataYuge = () => {
    const [categories, setcategories] = useState([]);
    const [lastPage, setlastPage] = useState(null);
    const [categoryHeading, setcategoryHeading] = useState([]);
    const [currentPage, setcurrentPage] = useState(0);
    const [allRawData, setallRawData] = useState([]);

    useEffect(() => {
        axios.get("https://price-api.datayuge.com/api/v1/compare/list/categories?api_key=nt5N7VXa0hYPHiIwRTJKZpwFiMjzvcicnoS").then(res => {
            // lastPage = res.data.last_page;
        }).then(() => {
            var refreshIntervalId = setInterval(() => {
                if (currentPage !== 2) {
                    setcurrentPage(currentPage += 1);
                    axios.get(`https://price-api.datayuge.com/api/v1/compare/list/categories?api_key=nt5N7VXa0hYPHiIwRTJKZpwFiMjzvcicnoS&page=${currentPage}`).then((response) => {
                        // console.log('response.data ================================>',response.data.data)
                        setallRawData(response.data.data);
                        console.log('allRawData ==================================================>', allRawData.length);
                    }).then(() => {
                        if (currentPage >= 2) {
                            console.log('Calculation Started...');
                            
                            let groupBy_CategoryName = _.groupBy(allRawData, 'category_name');
                            console.log('groupBy_CategoryName =======================>', groupBy_CategoryName);

                            for (let item in groupBy_CategoryName) {
                                console.log('itemitemitemitemitem ==================================================================>', typeof (item));
                                if (!!item && item !== 'undefined') {
                                    setcategoryHeading({ 'heading': item });

                                    console.log('groupBy_CategoryName', item);
                                    console.log('groupBy_CategoryName', groupBy_CategoryName[item].length);

                                    for (let i = 0; i < groupBy_CategoryName[item].length; i++) {
                                        setcategories({ 'heading': item, 'sub_category': groupBy_CategoryName[item][i].child_category_name });
                                    }
                                }
                            }
                            console.log('Cal Data categories...', categories);
                            console.log('Cal Data categoryHeading...', categoryHeading);
                        }
                    })
                } else {
                    clearInterval(refreshIntervalId);
                }
            }, 10000)
        });
    }, []);
    return (
        <React.Fragment>
            <h1 style={{color:'#fff'}}>hello</h1>
        </React.Fragment>
    );
}

export default DataYuge;