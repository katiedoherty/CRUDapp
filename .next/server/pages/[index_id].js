"use strict";
(() => {
var exports = {};
exports.id = 455;
exports.ids = [455];
exports.modules = {

/***/ 9696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Searchcustomername),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
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



function Searchcustomername({ properties , posts  }) {
    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9;
    //console.log(properties);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: surname , 1: setSurname  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: mobile , 1: setMobile  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: firstline , 1: setfirstline  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: secondline , 1: setsecondline  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: town , 1: setTown  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: county , 1: setCounty  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: EIRCODE , 1: setEircode  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: sfirstline , 1: setshippingfirstline  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: ssecondline , 1: setshippingsecondline  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: stown , 1: setshippingTown  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: scounty , 1: setshippingCounty  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: sEIRCODE , 1: setshippingEircode  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: postsState , 1: setPostsState  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: searchname , 1: setsearchname  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: currentname , 1: setcurrentname  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: updatedname , 1: setupdatedname  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: errormessage , 1: seterrormessage  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: deletename , 1: deletecustomername  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: deleteemail , 1: deletecustomeremail  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: deletephone , 1: deletecustomerphone  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setPostsState(posts);
    }, [
        posts
    ]);
    //delete a customer function 
    let deleteCustomer = async (e)=>{
        setLoading(true);
        e.preventDefault();
        let res = await fetch("http://localhost:3000/api/posts", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                FirstName: deletename
            }, {
                EmailAddress: deleteemail
            }, {
                Mobile: deletephone
            })
        });
        res = await res.json();
        deletecustomername("");
        deletecustomeremail("");
        deletecustomerphone("");
        setLoading(false);
        console.log(JSON.stringify(res));
        window.location.reload(false);
    };
    //update customer function
    let updatecustomername = async (e)=>{
        setLoading(true);
        e.preventDefault();
        let res = await fetch(`http://localhost:3000/api/posts?index_id=${currentname}`, {
            method: "PUT",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true
            },
            body: updatedname
        });
        res = await res.json();
        setcurrentname("");
        setupdatedname("");
        setLoading(false);
        console.log(JSON.stringify(res));
        router.push(`/${updatedname}`);
    };
    //The Read in CRUD function
    let readfunction = async (e)=>{
        setLoading(true);
        e.preventDefault();
        router.push(`/${searchname}`);
        console.log(properties);
        setsearchname("");
        setLoading(false);
    };
    let submitForm = async (e)=>{
        setLoading(true);
        e.preventDefault();
        let res = await fetch(`http://localhost:3000/api/posts`, {
            method: "POST",
            body: JSON.stringify({
                FirstName: name,
                Surname: surname,
                Mobile: mobile,
                EmailAddress: email,
                HomeAddress: {
                    firstLine: firstline,
                    secondline: secondline,
                    Town: town,
                    County: county,
                    Eircode: EIRCODE
                },
                ShippingAddress: {
                    firstLine: sfirstline,
                    secondline: ssecondline,
                    Town: stown,
                    County: scounty,
                    Eircode: sEIRCODE
                }
            })
        });
        res = await res.json();
        setName("");
        setSurname("");
        setEmail("");
        setMobile("");
        setLoading(false);
        setfirstline("");
        setsecondline("");
        setTown("");
        setCounty("");
        setEircode("");
        setshippingfirstline("");
        setshippingsecondline("");
        setshippingTown("");
        setshippingCounty("");
        setshippingEircode("");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Customer Information"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "Navigate the site using the links below"
            }),
            " ",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                href: "/items",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    children: "Phone Items"
                })
            }),
            " ",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                href: "/customeritems",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    children: "Customer Orders"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "Customer Information"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: "Customer ID"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: "First Name"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: "Surname"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: "Mobile"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: "Email Address"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: "Home Address"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: "Shipping Address"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            children: properties === null || properties === void 0 ? void 0 : properties._id
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            children: properties === null || properties === void 0 ? void 0 : properties.FirstName
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            children: properties === null || properties === void 0 ? void 0 : properties.Surname
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            children: properties === null || properties === void 0 ? void 0 : properties.Mobile
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            children: properties === null || properties === void 0 ? void 0 : properties.EmailAddress
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                            children: [
                                                properties === null || properties === void 0 ? void 0 : (ref = properties.HomeAddress) === null || ref === void 0 ? void 0 : ref.firstLine,
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                properties === null || properties === void 0 ? void 0 : (ref1 = properties.HomeAddress) === null || ref1 === void 0 ? void 0 : ref1.secondline,
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                properties === null || properties === void 0 ? void 0 : (ref2 = properties.HomeAddress) === null || ref2 === void 0 ? void 0 : ref2.Town,
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                properties === null || properties === void 0 ? void 0 : (ref3 = properties.HomeAddress) === null || ref3 === void 0 ? void 0 : ref3.County,
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                properties === null || properties === void 0 ? void 0 : (ref4 = properties.HomeAddress) === null || ref4 === void 0 ? void 0 : ref4.Eircode
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                            children: [
                                                properties === null || properties === void 0 ? void 0 : (ref5 = properties.ShippingAddress) === null || ref5 === void 0 ? void 0 : ref5.firstLine,
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                properties === null || properties === void 0 ? void 0 : (ref6 = properties.ShippingAddress) === null || ref6 === void 0 ? void 0 : ref6.secondline,
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                properties === null || properties === void 0 ? void 0 : (ref7 = properties.ShippingAddress) === null || ref7 === void 0 ? void 0 : ref7.Town,
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                properties === null || properties === void 0 ? void 0 : (ref8 = properties.ShippingAddress) === null || ref8 === void 0 ? void 0 : ref8.County,
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                properties === null || properties === void 0 ? void 0 : (ref9 = properties.ShippingAddress) === null || ref9 === void 0 ? void 0 : ref9.Eircode
                                            ]
                                        })
                                    ]
                                }, properties === null || properties === void 0 ? void 0 : properties._id)
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: "Create New Customer"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "First Name"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "fname",
                        onChange: (e)=>setName(e.target.value)
                        ,
                        value: name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "Surname"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "lname",
                        onChange: (e)=>setSurname(e.target.value)
                        ,
                        value: surname
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "Mobile"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "mobile",
                        onChange: (e)=>setMobile(e.target.value)
                        ,
                        value: mobile
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "Email Address"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "email",
                        onChange: (e)=>setEmail(e.target.value)
                        ,
                        value: email
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                            children: "Home Address"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "First Line of Address"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "address1",
                        onChange: (e)=>setfirstline(e.target.value)
                        ,
                        value: firstline
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "Second Line of Address"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "address2",
                        onChange: (e)=>setsecondline(e.target.value)
                        ,
                        value: secondline
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "Town"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "town",
                        onChange: (e)=>setTown(e.target.value)
                        ,
                        value: town
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "County"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "county",
                        onChange: (e)=>setCounty(e.target.value)
                        ,
                        value: county
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "EIRCODE"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "eircode",
                        onChange: (e)=>setEircode(e.target.value)
                        ,
                        value: EIRCODE
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                            children: "Shipping Address"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "First Line of Address"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "address1",
                        onChange: (e)=>setshippingfirstline(e.target.value)
                        ,
                        value: sfirstline
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "Second Line of Address"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "address2",
                        onChange: (e)=>setshippingsecondline(e.target.value)
                        ,
                        value: ssecondline
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "Town"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "town",
                        onChange: (e)=>setshippingTown(e.target.value)
                        ,
                        value: stown
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "County"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "county",
                        onChange: (e)=>setshippingCounty(e.target.value)
                        ,
                        value: scounty
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "EIRCODE"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "eircode",
                        onChange: (e)=>setshippingEircode(e.target.value)
                        ,
                        value: sEIRCODE
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: submitForm,
                        children: "Create New User"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: "Search For Customer"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "Enter Customers Name"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "eircode",
                        onChange: (e)=>setsearchname(e.target.value)
                        ,
                        value: searchname
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: readfunction,
                        children: "Search"
                    })
                ]
            }),
            errormessage,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: "Update Customer Name"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "Enter Customers Current Name"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "eircode",
                        onChange: (e)=>setcurrentname(e.target.value)
                        ,
                        value: currentname
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "Enter Customers Updated Name"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "eircode",
                        onChange: (e)=>setupdatedname(e.target.value)
                        ,
                        value: updatedname
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: updatecustomername,
                        children: "Update"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: "Delete A Customer From The Database"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "Enter Customers Name"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "eircode",
                        onChange: (e)=>deletecustomername(e.target.value)
                        ,
                        value: deletename
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "Enter Customers Email"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "eircode",
                        onChange: (e)=>deletecustomeremail(e.target.value)
                        ,
                        value: deleteemail
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "Enter Customers Phone"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "eircode",
                        onChange: (e)=>deletecustomerphone(e.target.value)
                        ,
                        value: deletephone
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: deleteCustomer,
                        children: "Delete Customer"
                    })
                ]
            })
        ]
    });
};
//allows us o get the data from out server side and send to frontend
async function getServerSideProps(context) {
    try {
        //this var passes the users input into this function
        const custname = context.query.index_id;
        console.log(custname);
        let data = await fetch(`http://localhost:3000/api/posts?index_id=${custname}`);
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
var __webpack_exports__ = __webpack_require__.X(0, [895,664], () => (__webpack_exec__(9696)));
module.exports = __webpack_exports__;

})();