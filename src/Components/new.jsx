const News = () => {
    console.log("from news component")
 const data =    [
        {
        "brand": "Apple ",
        "phone_name": "iPhone 13 mini",
        "slug": "apple_iphone_13_mini-11104",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-mini.jpg"
        },
        {
        "brand": "Apple ",
        "phone_name": "iPhone 13 Pro",
        "slug": "apple_iphone_13_pro-11102",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro.jpg"
        },
        {
        "brand": "Apple ",
        "phone_name": "iPhone 13 Pro Max",
        "slug": "apple_iphone_13_pro_max-11089",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro-max.jpg"
        },
        {
        "brand": "Apple ",
        "phone_name": "iPhone 13",
        "slug": "apple_iphone_13-11103",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13.jpg"
        },
        {
        "brand": "Apple ",
        "phone_name": "iPhone 12 Pro Max",
        "slug": "apple_iphone_12_pro_max-10237",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro-max-.jpg"
        },
        {
        "brand": "Apple ",
        "phone_name": "iPhone 12 Pro",
        "slug": "apple_iphone_12_pro-10508",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro--.jpg"
        },
        {
        "brand": "Apple ",
        "phone_name": "iPhone 12",
        "slug": "apple_iphone_12-10509",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12.jpg"
        },
        {
        "brand": "Apple ",
        "phone_name": "iPhone 12 mini",
        "slug": "apple_iphone_12_mini-10510",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-mini.jpg"
        },
        {
        "brand": "Apple ",
        "phone_name": "iPhone SE (2020)",
        "slug": "apple_iphone_se_(2020)-10170",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-se-2020.jpg"
        },
        {
        "brand": "Apple ",
        "phone_name": "iPhone 11 Pro Max",
        "slug": "apple_iphone_11_pro_max-9846",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11-pro.jpg"
        },
        {
        "brand": "Apple ",
        "phone_name": "iPhone 11 Pro",
        "slug": "apple_iphone_11_pro-9847",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11-pro-max-.jpg"
        },
        {
        "brand": "Apple ",
        "phone_name": "iPhone 11",
        "slug": "apple_iphone_11-9848",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11.jpg"
        },
        {
        "brand": "Apple ",
        "phone_name": "iPhone XS Max",
        "slug": "apple_iphone_xs_max-9319",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xs-max-new1.jpg"
        },
        {
        "brand": "Apple ",
        "phone_name": "iPhone XR",
        "slug": "apple_iphone_xr-9320",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xr-new.jpg"
        },
        {
        "brand": "Apple ",
        "phone_name": "iPhone XS",
        "slug": "apple_iphone_xs-9318",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xs-new.jpg"
        }
        ]
return (
    <>
    {
        data?.map(data => {
            <h1>data = {data?.phone_name}</h1>
        })
    }
    </>
)
}

export default News ;