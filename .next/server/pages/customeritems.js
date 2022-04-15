"use strict";
(() => {
var exports = {};
exports.id = 234;
exports.ids = [234];
exports.modules = {

/***/ 4397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9328);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);

/*
DATABASE DESIGN:
I created one database with two collections in mongodb. One was with with customer information in it and item information in it and the
other contained item information. I then created another collection which was intended to hold the customers orders 
when the users id was entered into the searchbar on the orders page along with the id of the item then the customers information along with the item 
information will be pulled from both collections and added to one document to the orders collection. This way a 
new order is created everytime a customer makes a new purchase and you can easily search 
all the customers orders by looking up their id.
I used vsCode to build this application
I am using NextJS on the frontend.

*/ 




function Home({ properties , posts  }) {
    //console.log(properties);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { 0: searchcustomer , 1: searchedCustomer  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: additem , 1: addeditem  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: postsState , 1: setPostsState  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: deleteitem , 1: deleteitemorder  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: updateitem , 1: currentupdateitem  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: newupdateitem , 1: updateditem  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: id , 1: addedid  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: searchcust , 1: searchcustomernameanddeleteitem  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setPostsState(posts);
    }, [
        posts
    ]);
    //Delete customer function
    let deleteCustomer = async (e)=>{
        setLoading(true);
        e.preventDefault();
        let res = await fetch(`http://localhost:3000/api/orders?customeritems_id=${searchcust}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "itemfromdatabase._id": deleteitem
            })
        });
        res = await res.json();
        deleteitemorder("");
        searchcustomernameanddeleteitem("");
        setLoading(false);
        console.log(JSON.stringify(res));
        window.location.reload(false);
    };
    //update customer function
    let updatecustomername = async (e)=>{
        setLoading(true);
        e.preventDefault();
        let res = await fetch(`http://localhost:3000/api/orders?customeritems_id=${updateitem}`, {
            method: "PUT",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true
            },
            body: newupdateitem
        });
        res = await res.json();
        currentupdateitem("");
        updateditem("");
        setLoading(false);
        console.log(JSON.stringify(res));
        window.location.reload(false);
    };
    //The Read in CRUD function
    let readfunction = async (e)=>{
        setLoading(true);
        e.preventDefault();
        //https://www.youtube.com/watch?v=yqXj7Jnqg9o&t=4012s = helped pass in user input to database and showed me how to do dynamic routing.
        //let searchedname = {FirstName:"Jimmy"};
        router.push(`/customerorders/searchcustomerorder/${searchcustomer}`);
        searchedCustomer("");
        setLoading(false);
    };
    //send to database
    let submitForm = async (e)=>{
        setLoading(true);
        e.preventDefault();
        let customer = await fetch(`http://localhost:3000/api/customerid?index_id=${id}`);
        let items = await fetch(`http://localhost:3000/api/itemid?items_id=${additem}`);
        let itemfromdatabase = await items.json();
        let customerfromdatabase = await customer.json();
        console.log(itemfromdatabase);
        let res = await fetch(`http://localhost:3000/api/orders`, {
            method: "POST",
            body: JSON.stringify({
                itemfromdatabase,
                customerfromdatabase
            })
        });
        res = await res.json();
        console.log(res);
        addedid("");
        addeditem("");
        window.location.reload(false);
    //console.log(body.HomeAddress.firstLine);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Orders"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "Navigate the site using the links below"
                    }),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                        href: "/items",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: "Phone Items"
                        })
                    }),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: "Customer Information"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "Customer Orders"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: "Customer Id"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: "Customer Details"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: "Item ID"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: "Item details"
                                        })
                                    ]
                                }),
                                properties && properties.map((property)=>{
                                    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12, ref13, ref14, ref15;
                                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: (ref = property.customerfromdatabase) === null || ref === void 0 ? void 0 : ref._id
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                children: [
                                                    (ref1 = property.customerfromdatabase) === null || ref1 === void 0 ? void 0 : ref1.FirstName,
                                                    " ",
                                                    (ref2 = property.customerfromdatabase) === null || ref2 === void 0 ? void 0 : ref2.Surname,
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    " ",
                                                    (ref3 = property.customerfromdatabase) === null || ref3 === void 0 ? void 0 : (ref4 = ref3.ShippingAddress) === null || ref4 === void 0 ? void 0 : ref4.firstLine,
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    (ref5 = property.customerfromdatabase) === null || ref5 === void 0 ? void 0 : (ref6 = ref5.ShippingAddress) === null || ref6 === void 0 ? void 0 : ref6.secondline,
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    (ref7 = property.customerfromdatabase) === null || ref7 === void 0 ? void 0 : (ref8 = ref7.ShippingAddress) === null || ref8 === void 0 ? void 0 : ref8.Town,
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    (ref9 = property.customerfromdatabase) === null || ref9 === void 0 ? void 0 : (ref10 = ref9.ShippingAddress) === null || ref10 === void 0 ? void 0 : ref10.County,
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    (ref11 = property.customerfromdatabase) === null || ref11 === void 0 ? void 0 : (ref12 = ref11.ShippingAddress) === null || ref12 === void 0 ? void 0 : ref12.Eircode
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: property.itemfromdatabase._id
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                children: [
                                                    "Model: ",
                                                    (ref13 = property.itemfromdatabase) === null || ref13 === void 0 ? void 0 : ref13.Model,
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    "Manufacturer: ",
                                                    (ref14 = property.itemfromdatabase) === null || ref14 === void 0 ? void 0 : ref14.Manufacturer,
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    "Price: ",
                                                    (ref15 = property.itemfromdatabase) === null || ref15 === void 0 ? void 0 : ref15.Price
                                                ]
                                            })
                                        ]
                                    }, property._id);
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        children: "Add an Order"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                children: "Enter Customer ID"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "ID",
                                onChange: (e)=>addedid(e.target.value)
                                ,
                                value: id
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                children: "Enter Item ID"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "ID",
                                onChange: (e)=>addeditem(e.target.value)
                                ,
                                value: additem
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: submitForm,
                                children: "Add Order"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: "Search For Order By Customer ID"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "Enter Customer ID"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "searchcustomer",
                        onChange: (e)=>searchedCustomer(e.target.value)
                        ,
                        value: searchcustomer
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: readfunction,
                        children: "Search"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: "Update Customer Name"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "Enter Customer ID"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "eircode",
                        onChange: (e)=>currentupdateitem(e.target.value)
                        ,
                        value: updateitem
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "Enter Updated Customer Name"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "custname",
                        onChange: (e)=>updateditem(e.target.value)
                        ,
                        value: newupdateitem
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: updatecustomername,
                        children: "Update"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: "Delete An Order From The Database"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "Enter Customer ID"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "deleteorder",
                        onChange: (e)=>searchcustomernameanddeleteitem(e.target.value)
                        ,
                        value: searchcust
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "Enter Item ID That You Want To Delete"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "deleteorder",
                        onChange: (e)=>deleteitemorder(e.target.value)
                        ,
                        value: deleteitem
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: deleteCustomer,
                        children: "Delete Order"
                    })
                ]
            })
        ]
    });
};
//allows us o get the data from out server side and send to frontend
async function getServerSideProps(context) {
    try {
        let customername = context.query.index_id;
        console.log(customername);
        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z;
        const orders = await client.db("mobile-phone-store").collection("customeritems").find({}).sort({
            metacritic: -1
        }).limit(20).toArray();
        const properties = JSON.parse(JSON.stringify(orders));
        return {
            props: {
                properties: properties
            }
        };
    } catch (e) {
        console.error(e);
        return {
            props: {
                isConnected: false
            }
        };
    }
} //https://www.geeksforgeeks.org/how-to-update-nested-state-properties-in-reactjs/
 //helped with calling dynamic data 


/***/ }),

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 4241:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664,328], () => (__webpack_exec__(4397)));
module.exports = __webpack_exports__;

})();