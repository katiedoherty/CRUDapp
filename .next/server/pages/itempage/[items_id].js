"use strict";
(() => {
var exports = {};
exports.id = 34;
exports.ids = [34];
exports.modules = {

/***/ 9791:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);

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
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { 0: manufacturer , 1: setmanufacturer  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: model , 1: setModel  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: price , 1: setPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: postsState , 1: setPostsState  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: searchmanufacture , 1: manufacturername  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: currentmanufacturername , 1: currentmanufacturer  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: updatedmanufacturer , 1: newmanufacturername  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: deletemanufacturername , 1: deletemanufacturer  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: deletemmodel , 1: deletemodel  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: deletemprice , 1: deleteprice  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setPostsState(posts);
    }, [
        posts
    ]);
    //Delete customer function
    let deleteCustomer = async (e)=>{
        setLoading(true);
        e.preventDefault();
        let res = await fetch("http://localhost:3000/api/items", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Manufacturer: deletemanufacturername
            }, {
                Model: deletemmodel
            }, {
                Price: deletemprice
            })
        });
        res = await res.json();
        deletemanufacturer("");
        deletemodel("");
        deleteprice("");
        setLoading(false);
        console.log(JSON.stringify(res));
        window.location.reload(false);
    };
    //update customer function
    let updatecustomername = async (e)=>{
        setLoading(true);
        e.preventDefault();
        let res = await fetch(`http://localhost:3000/api/items?items_id=${currentmanufacturername}`, {
            method: "PUT",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true
            },
            body: updatedmanufacturer
        });
        res = await res.json();
        currentmanufacturer("");
        newmanufacturername("");
        setLoading(false);
        console.log(JSON.stringify(res));
        router.push(`/itempage/${updatedmanufacturer}`);
    };
    //The Read in CRUD function
    let readfunction = async (e)=>{
        setLoading(true);
        e.preventDefault();
        //https://www.youtube.com/watch?v=yqXj7Jnqg9o&t=4012s = helped pass in user input to database and showed me how to do dynamic routing.
        //let searchedname = {FirstName:"Jimmy"};
        router.push(`/itempage/${searchmanufacture}`);
        manufacturername("");
        setLoading(false);
    };
    let submitForm = async (e)=>{
        setLoading(true);
        e.preventDefault();
        let res = await fetch(`http://localhost:3000/api/items`, {
            method: "POST",
            body: JSON.stringify({
                Manufacturer: manufacturer,
                Model: model,
                Price: price
            })
        });
        res = await res.json();
        console.log(res);
        setmanufacturer("");
        setModel("");
        setPrice("");
        window.location.reload(false);
    //console.log(body.HomeAddress.firstLine);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Phone Items"
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: "Customer Information"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "Phone Items"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: "Manufacturer"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: "Model"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: "Price"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            children: properties === null || properties === void 0 ? void 0 : properties.Manufacturer
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            children: properties === null || properties === void 0 ? void 0 : properties.Model
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            children: properties === null || properties === void 0 ? void 0 : properties.Price
                                        })
                                    ]
                                }, properties === null || properties === void 0 ? void 0 : properties._id)
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: "Create New Item"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "Manufacturer"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "fname",
                        onChange: (e)=>setmanufacturer(e.target.value)
                        ,
                        value: manufacturer
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "Model"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "lname",
                        onChange: (e)=>setModel(e.target.value)
                        ,
                        value: model
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "Price"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "mobile",
                        onChange: (e)=>setPrice(e.target.value)
                        ,
                        value: price
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: submitForm,
                        children: "Submit"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: "Search For Item"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "Enter Manufacturer Name"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "eircode",
                        onChange: (e)=>manufacturername(e.target.value)
                        ,
                        value: searchmanufacture
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: readfunction,
                        children: "Search"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: "Update Manufacturer Name"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "Enter Manufacturer Current Name"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "eircode",
                        onChange: (e)=>currentmanufacturer(e.target.value)
                        ,
                        value: currentmanufacturername
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "Enter Manufacturer Updated Name"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "eircode",
                        onChange: (e)=>newmanufacturername(e.target.value)
                        ,
                        value: updatedmanufacturer
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: updatecustomername,
                        children: "Update"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: "Delete A Item From The Database"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "Enter Manufacturers Name"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "eircode",
                        onChange: (e)=>deletemanufacturer(e.target.value)
                        ,
                        value: deletemanufacturername
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "Enter Model name"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "eircode",
                        onChange: (e)=>deletemodel(e.target.value)
                        ,
                        value: deletemmodel
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "Enter Price"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "eircode",
                        onChange: (e)=>deleteprice(e.target.value)
                        ,
                        value: deletemprice
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: deleteCustomer,
                        children: "Delete Item"
                    })
                ]
            })
        ]
    });
};
//allows us o get the data from out server side and send to frontend
async function getServerSideProps(context) {
    try {
        const manufacturer = context.query.items_id;
        console.log(manufacturer);
        let data = await fetch(`http://localhost:3000/api/items?items_id=${manufacturer}`);
        const properties = await data.json();
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664], () => (__webpack_exec__(9791)));
module.exports = __webpack_exports__;

})();