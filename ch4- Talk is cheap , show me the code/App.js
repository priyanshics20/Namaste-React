/* Food Villa 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
    return (
        <a href="/">
            <img
                className="logo"
                alt="Food Villa"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTauCznWKaU4fzPW1EBqygdqX3OHuQNM4d3GibmPBYqK57CjWqo3Ni5wZY36Q7tth-sGzg&usqp=CAU" />
        </a>
    );
}
const Header = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>

    );
}

// React.Fragment is a component which is exported by React
//it is like an empty tag
//JSX can only have one parent
// if we want out tag to be in root directly so we use this

// const Jsx = () => {
//     return (<React.Fragment>
//         <h1>1st</h1>
//         <h1>2nd</h1>
//     </React.Fragment>
//     );
// }

//we can also write it as like an empty tag
// const Jsx = (
//     <>
//         <h1>1st</h1>
//         <h1>2nd</h1>
//     </>
//  );

//Config Driven UI
const restraurantList =[
    {
        type: "restaurant",
        data: {
        type: "F",
        id: "74453",
        name: "Domino's Pizza",
        uuid: "87727dbd-7f2b-4857-9763-359624165845",
        city: "21",
        area: "Athwa",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "bz9zkh2aqywjhpankb07",
        cuisines: ["Pizzas"],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 45,
        minDeliveryTime: 45,
        maxDeliveryTime: 45,
        slaString: "45 MINS",
        lastMileTravel: 0,
        slugs: {
            restaurant: "dominos-pizza-majura-nondh-test_surat",
            city: "surat",
        },
        cityState: "21",
        address:
            "Shop 32 To 35, Sheetal Shopping Square,Near Lb Turning Point, Bhatar Road,MAJURA NONDH, Surat,GUJARAT-395001",
        locality: "Bhatar Road",
        parentId: 2456,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
            header: "FREE DELIVERY",
            shortDescriptionList: [
            {
                meta: "FREE DELIVERY",
                discountType: "FREE_DELIVERY",
                operationType: "RESTAURANT",
            },
            ],
            descriptionList: [
            {
                meta: "FREE DELIVERY",
                discountType: "FREE_DELIVERY",
                operationType: "RESTAURANT",
            },
            ],
            subHeader: "",
            headerType: 0,
            superFreedel: "",
        },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "74453",
        deliveryTime: 45,
        minDeliveryTime: 45,
        maxDeliveryTime: 45,
        lastMileTravel: 0,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
        type: "F",
        id: "81094",
        name: "Richie Rich Juices & Shakes",
        uuid: "40b0b55b-e9af-43e7-aeae-be1b012d0b1d",
        city: "21",
        area: "Athwa",
        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "nyp7yrzwc1dc2xqfkydk",
        cuisines: ["Ice Cream"],
        tags: [],
        costForTwo: 25000,
        costForTwoString: "₹250 FOR TWO",
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        slaString: "30-40 MINS",
        lastMileTravel: 5.599999904632568,
        slugs: {
            restaurant: "juices-shakes-by-richie-rich-athwa-athwa",
            city: "surat",
        },
        cityState: "21",
        address:
            "Richie Rich Building , Opposite Golden Square Complex, Parle Point, Athwa, Surat",
        locality: "Parle Point",
        parentId: 771,
        unserviceable: true,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
            header: "FREE DELIVERY",
            shortDescriptionList: [
            {
                meta: "FREE DELIVERY",
                discountType: "FREE_DELIVERY",
                operationType: "RESTAURANT",
            },
            ],
            descriptionList: [
            {
                meta: "FREE DELIVERY",
                discountType: "FREE_DELIVERY",
                operationType: "RESTAURANT",
            },
            ],
            subHeader: "",
            headerType: 0,
            superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
            header: "",
            shortDescriptionList: [
            {
                meta: "Free Delivery",
                discountType: "FREE_DELIVERY",
                operationType: "RESTAURANT",
            },
            ],
            descriptionList: [
            {
                meta: "FREE DELIVERY",
                discountType: "FREE_DELIVERY",
                operationType: "RESTAURANT",
            },
            ],
            subHeader: "",
            headerType: 0,
            superFreedel: "",
        },
        chain: [],
        feeDetails: {
            fees: [],
            totalFees: 0,
            message: "",
            title: "",
            amount: "",
            icon: "",
        },
        availability: {
            opened: true,
            nextOpenMessage: "",
            nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
            imageBased: [],
            textBased: [],
            textExtendedBadges: [],
        },
        lastMileTravelString: "5.5 kms",
        hasSurge: false,
        sla: {
            restaurantId: "81094",
            deliveryTime: 30,
            minDeliveryTime: 30,
            maxDeliveryTime: 40,
            lastMileTravel: 5.599999904632568,
            lastMileDistance: 0,
            serviceability: "SERVICEABLE_WITH_BANNER",
            rainMode: "NONE",
            longDistance: "NOT_LONG_DISTANCE",
            preferentialService: false,
            iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.9",
        totalRatings: 500,
        new: false,
        },
        subtype: "basic",
    },
    {
    type: "restaurant",
    data: {
      type: "F",
      id: "307070",
      name: "Pizza Pie",
      uuid: "68598bcb-7460-4466-a8b2-113158c6cf8c",
      city: "21",
      area: "Nanpura",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "bvr70adr30ejyr5ua79k",
      cuisines: ["Pizzas"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 37,
      minDeliveryTime: 35,
      maxDeliveryTime: 45,
      slaString: "35-45 MINS",
      lastMileTravel: 4,
      slugs: {
        restaurant: "pizza-pie-athwa-athwa",
        city: "surat",
      },
      cityState: "21",
      address:
        "1/704 Sarang building, Nanpura New Rd, opposite river palace, near Ramji Mandir, Nanpura, Surat, Gujarat",
      locality: "Nanpura",
      parentId: 158854,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "307070",
        deliveryTime: 37,
        minDeliveryTime: 35,
        maxDeliveryTime: 45,
        lastMileTravel: 4,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
    },
    {
    type: "restaurant",
    data: {
      type: "F",
      id: "76858",
      name: "Feeling Hungry",
      uuid: "45f9ea54-f3cf-4f6b-8d85-e3468657fe51",
      city: "21",
      area: "Athwa",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "oxsb5mr1xsmhnxhunjsc",
      cuisines: ["Chinese", "North Indian", "Biryani"],
      tags: [],
      costForTwo: 2000,
      costForTwoString: "₹20 FOR TWO",
      deliveryTime: 35,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "30-40 MINS",
      lastMileTravel: 3.700000047683716,
      slugs: {
        restaurant: "feeling-hungry-adajan-gam-adajan",
        city: "surat",
      },
      cityState: "21",
      address:
        "GF shop no 1, Babubhai Chambers, Beside Sardar Bridge , Athwagate, surat",
      locality: "Royal Residency, Adajan Gam",
      parentId: 79237,
      unserviceable: true,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "76858",
        deliveryTime: 35,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        lastMileTravel: 3.700000047683716,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.2",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
    },
    {
    type: "restaurant",
    data: {
      type: "F",
      id: "395204",
      name: "McDonald's Gourmet Burger Collection",
      uuid: "55c33a9b-bb51-4b9d-8c94-708d48b08ebd",
      city: "21",
      area: "Piplod",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "wzbo5xivr8hstl0vxzcm",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "30-40 MINS",
      lastMileTravel: 8.199999809265137,
      slugs: {
        restaurant:
          "mcdonalds-gourmet-burger-collection-valentine-cinema-piplod",
        city: "surat",
      },
      cityState: "21",
      address:
        "MC Donalds Family Restaurant Valentine Mall Valentine Cine Vision Surat , Dhumas Road, Nr Govardhan Haveli, Surat 395007",
      locality: "Valentine Cinema",
      parentId: 10761,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "8.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "395204",
        deliveryTime: 31,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        lastMileTravel: 8.199999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
    },
    {
    type: "restaurant",
    data: {
      type: "F",
      id: "193541",
      name: "Behrouz Biryani",
      uuid: "abc2e9d1-df00-4449-bde3-4c35982d0ef3",
      city: "21",
      area: "Adajan Patiya",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "craozjakzx7sll2uracb",
      cuisines: [
        "Biryani",
        "Mughlai",
        "Lucknowi",
        "Hyderabadi",
        "Kebabs",
        "North Indian",
        "Persian",
        "Desserts",
      ],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 49,
      minDeliveryTime: 45,
      maxDeliveryTime: 55,
      slaString: "45-55 MINS",
      lastMileTravel: 6.400000095367432,
      slugs: {
        restaurant: "behrouz-biryani-adajan-adajan",
        city: "surat",
      },
      cityState: "21",
      address:
        "Chalta no 23, Ground Floor, Guru Ashish Building, Below Stallon Gym, Opp Kotyark Nagar, Near Navyug College, Adajan, Surat 395005",
      locality: "Nr Navyug College, Rander Road",
      parentId: 1803,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "193541",
        deliveryTime: 49,
        minDeliveryTime: 45,
        maxDeliveryTime: 55,
        lastMileTravel: 6.400000095367432,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.3",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
    },
]

const RestaurantCard = ({name,cuisines,avgRating, cloudinaryImageId}) => {
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} /> 
            <h2>{ name }</h2>
            <h3>{ cuisines.join(', ') }</h3>
            <h4>{ avgRating }</h4>
      </div>  
    );
}

const Body = () => {
    return (
        
        <div className="restraurant-list">
            {
                restraurantList.map((restaurant) => {
                    return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
                })
            }

            {/* Instead of writing this we use map function */}
            {/* <RestaurantCard restaurant={restraurantList[0]}/> */}
            
        </div>
    );
};

const Footer = () => {
    return (
        <h4>Footer</h4>
    );
};

const AppLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <Body />
            <Footer />
        </React.Fragment>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);