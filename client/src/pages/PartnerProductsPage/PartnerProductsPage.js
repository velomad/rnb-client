import React, { useEffect, useState } from "react";
import axios from "axios";

const PartnerProductsPage = () => {
    const [data, setData] = useState([])

    useEffect(async () => {
        try {
            const response = await axios.get("https://cors-anywhere.herokuapp.com/https://a07c92b5-a36f-447a-b131-469f99987059.mysimplestore.com/api/v2/products?page_fallback=true&app=vnext&page=255&per_page=16&q[descend_by_popularity]=true&timestamp=1609412596868")
            setData(response.data.products)
            console.log(response.data.products)
        }
        catch (e) {
            console.log(e)
        }
    }, [])

    return (
        <div>
            <div class="grid gap-0 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center px-2 mb-6">
                {data && data.map((el, index) => (
                    <div>
                        <img src={el.default_asset_url} width="80px"/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PartnerProductsPage