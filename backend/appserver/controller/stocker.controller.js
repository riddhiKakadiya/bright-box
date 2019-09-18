    // Saving the context of this module inside the _the variable

    var each = require('async-each');
    var rp = require('request-promise');

    _this = this


    let stockApi="https://www.alphavantage.co/query?function=";
    let cryptoApi="https://www.alphavantage.co/query?function=";

    // var sleep = npm install request --savequire('thread-sleep');


    let apiKey=["P7CTANYWRIY3VJLM","PBJS1EMBQEAR7P7T","AEHS3A75QVYLBSS7","P9SHSIG4AMWUIR8D"];


    // let apiKey="P7CTANYWRIY3VJLM";
    //let apiKey = "P9SHSIG4AMWUIR8D";
    let cryptointraday="DIGITAL_CURRENCY_INTRADAY";
    let cryptoweekly="DIGITAL_CURRENCY_WEEKLY";
    let cryptomonthly="DIGITAL_CURRENCY_MONTHLY";
    let cryptodaily="DIGITAL_CURRENCY_DAILY";

    let intraday="TIME_SERIES_INTRADAY";
    let weekly="TIME_SERIES_WEEKLY";
    let monthly="TIME_SERIES_MONTHLY";
    let daily="TIME_SERIES_DAILY";
    let stocks=["FB","AAPL","NVDA","TSLA"];
    const https = require("https");



    // Get Intraday value of crypto currency

    exports.getIntradayCryptoValues= async function(req, res) {

        let symbol = req.query.symbol;
        let result={};
        let priceArray=[];

        //https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_INTRADAY&symbol=BTC&market=USD&apikey=P7CTANYWRIY3VJLM

        cryptoURL=cryptoApi+cryptointraday+"&symbol="+symbol+"&market=USD&apikey="+apiKey[getRandomInt(4)];


        console.log(cryptoURL);
            https.get(cryptoURL, resp => {
                resp.setEncoding("utf8");
                let body = "";
                resp.on("data", data => {
                    body += data;
                });
                resp.on("end", () => {
                   try {
                       body = JSON.parse(body);


                       console.log(body);


                       if (body["Information"] || body["Error Message"]) {
                           res.status(500).send("Server Error! Too many requests")

                       }
                       else {
                           timeSeries = body["Time Series (Digital Currency Intraday)"];

                           let keys = Object.keys(timeSeries);

                           for (let i = 0; i < keys.length; i++) {

                               priceArray.push(timeSeries[keys[i]]["1a. price (USD)"]);
                           }

                           keys = keys.reverse();
                           priceArray = priceArray.reverse();

                           result["Dates"] = keys;
                           result["Prices"] = priceArray;


                           // console.log(result);
                           res.send(result);


                       }

                   }

                   catch(e)
                   {
                       res.status(500).send("Server Error! Too many requests")
                   }

                });


            }
        )
        };




    //Get Daily values of crypto

    exports.getDailyCryptoValues= async function(req, res) {

        let symbol = req.query.symbol;
        let result={};
        let priceArray=[];

        //https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=USD&apikey=P7CTANYWRIY3VJLM

        cryptoURL=cryptoApi+cryptodaily+"&symbol="+symbol+"&market=USD&apikey="+apiKey[getRandomInt(4)];


        console.log(cryptoURL);
        https.get(cryptoURL, resp => {
                resp.setEncoding("utf8");
                let body = "";
                resp.on("data", data => {
                    body += data;
                });
                resp.on("end", () => {
                try {
                    body = JSON.parse(body);
                    console.log(body);

                    if (body["Information"] || body["Error Message"]) {
                        res.status(500).send("Server Error! Too many requests")

                    }

                    else {
                        timeSeries = body["Time Series (Digital Currency Daily)"];
                        let keys = Object.keys(timeSeries);

                        for (let i = 0; i < keys.length; i++) {

                            priceArray.push(timeSeries[keys[i]]["4b. close (USD)"]);
                        }

                        keys = keys.reverse();
                        priceArray = priceArray.reverse();

                        result["Dates"] = keys;
                        result["Prices"] = priceArray;


                        // console.log(result);
                        res.send(result);

                    }
                }
                catch(e)
                {
                    res.status(500).send("Server Error! Too many requests")
                }

                    });


            }
        )
    };





    //Get Weekly values of crypto


    exports.getWeeklyCryptoValues= async function(req, res) {

        let symbol = req.query.symbol;
        let result={};
        let priceArray=[];

        //https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_WEEKLY&symbol=BTC&market=CNY&apikey=P7CTANYWRIY3VJLM

        cryptoURL=cryptoApi+cryptoweekly+"&symbol="+symbol+"&market=USD&apikey="+apiKey[getRandomInt(4)];


        console.log(cryptoURL);
        https.get(cryptoURL, resp => {
                resp.setEncoding("utf8");
                let body = "";
                resp.on("data", data => {
                    body += data;
                });
                resp.on("end", () => {

                   try {
                        body = JSON.parse(body);


                        console.log(body);


                        if (body["Information"] || body["Error Message"]) {
                            res.status(500).send("Server Error! Too many requests")

                        }

                        else {

                            timeSeries = body["Time Series (Digital Currency Weekly)"];
                            let keys = Object.keys(timeSeries);

                            for (let i = 0; i < keys.length; i++) {

                                priceArray.push(timeSeries[keys[i]]["4b. close (USD)"]);
                            }

                            keys = keys.reverse();
                            priceArray = priceArray.reverse();

                            result["Dates"] = keys;
                            result["Prices"] = priceArray;


                            // console.log(result);
                            res.send(result);

                        }

                    }

                    catch(e)
                   {
                       res.status(500).send("Server Error! Too many requests")
                   }
                });


            }
        )
    };




    //Get Monthly values of crypto




    exports.getMonthlyCryptoValues= async function(req, res) {

        let symbol = req.query.symbol;
        let result={};
        let priceArray=[];

        //https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=BTC&market=USD&apikey=P7CTANYWRIY3VJLM

        cryptoURL=cryptoApi+cryptomonthly+"&symbol="+symbol+"&market=USD&apikey="+apiKey[getRandomInt(4)];


        console.log(cryptoURL);
        https.get(cryptoURL, resp => {
                resp.setEncoding("utf8");
                let body = "";
                resp.on("data", data => {
                    body += data;
                });
                resp.on("end", () => {
                    try {
                        body = JSON.parse(body);

                        console.log(body);


                        if (body["Information"] || body["Error Message"]) {
                            res.status(500).send("Server Error! Too many requests")

                        }

                        else {

                            timeSeries = body["Time Series (Digital Currency Monthly)"];
                            let keys = Object.keys(timeSeries);

                            for (let i = 0; i < keys.length; i++) {

                                priceArray.push(timeSeries[keys[i]]["4b. close (USD)"]);
                            }

                            keys = keys.reverse();
                            priceArray = priceArray.reverse();

                            result["Dates"] = keys;
                            result["Prices"] = priceArray;


                            // console.log(result);
                            res.send(result);

                        }

                    }
                catch(e)
            {
                res.status(500).send("Server Error! Too many requests")
            }


        });


            }
        )
    };




    //URL to test if the primary API is working fine
    exports.getStockValuesOfAmzn = function(req, res) {
        stockURL=stockApi+intraday+"&symbol="+"AMZN"+"&interval=1min"+"&apikey="+apiKey[getRandomInt(4)];
        console.log(stockURL);

        https.get(stockURL, resp => {
            resp.setEncoding("utf8");
            let body = "";
            resp.on("data", data => {
                body += data;
            });
            resp.on("end", () => {
               try{
                    body = JSON.parse(body);

                    if (body["Information"] || body["Error Message"]) {
                        res.status(500).send("Server Error! Too many requests")

                    }

                    else {
                        timeSeriesbody = body["Time Series (1min)"];
                        var keybody = Object.keys(timeSeriesbody);
                        // console.log(timeSeriesbody[keybody[0]]);
                        res.send(keybody);
                    }
                }
               catch(e)
               {
                   res.status(500).send("Server Error! Too many requests")
               }

            });
        });
        };



    // Get Weekly Stock Value

    exports.getWeeklyStockValues= async function(req, res) {

        let symbol = req.query.symbol;
        let result={};
        let priceArray=[];
        //https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=MSFT&apikey=P7CTANYWRIY3VJLM

        stockURL=stockApi+weekly+"&symbol="+symbol+"&apikey="+apiKey[getRandomInt(4)];


        console.log(stockURL);

        https.get(stockURL, resp => {
            resp.setEncoding("utf8");
            let body = "";
            resp.on("data", data => {
                body += data;
            });
            resp.on("end", () => {
                try
                {
                    body = JSON.parse(body);


                    console.log(body);

                }

                catch(e)
                {
                    res.status(500).send("Server Error! Too many requests")
                }

                if (body["Information"] || body["Error Message"]) {
                        res.status(500).send("Server Error! Too many requests")

                    }

                    else {

                        weeklyTimeSeries = body["Weekly Time Series"];


                        let keys = Object.keys(weeklyTimeSeries);

                        for (let i = 0; i < keys.length; i++) {

                            priceArray.push(weeklyTimeSeries[keys[i]]["4. close"]);
                            //result[keys[i]]=weeklyTimeSeries[keys[i]]["4. close"];
                        }

                        keys = keys.reverse();
                        priceArray = priceArray.reverse();

                        result["Dates"] = keys;
                        result["Prices"] = priceArray;


                        console.log(result);
                        res.send(result);

                    }
                 });


        }

        );


    };

    //Get Daily Stock Values

    exports.getDailyStockValues= async function(req, res) {

        let symbol = req.query.symbol;
        let priceArray=[];
        let result={};

    //https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=P7CTANYWRIY3VJLM

        stockURL=stockApi+daily+"&symbol="+symbol+"&apikey="+apiKey[getRandomInt(4)];

        console.log(stockURL);

        https.get(stockURL, resp => {
            resp.setEncoding("utf8");
            let body = "";
            resp.on("data", data => {
                body += data;
            });
            resp.on("end", () => {
                try
                {
                    body = JSON.parse(body);


                    console.log(body);

                }

                catch(e)
                {
                    res.status(500).send("Server Error! Too many requests")
                }

                    if (body["Information"] || body["Error Message"]) {
                        res.status(500).send("Server Error! Too many requests")

                    }

                    else {
                        dailyTimeSeries = body["Time Series (Daily)"];
                        let keys = Object.keys(dailyTimeSeries);

                        for (let i = 0; i < keys.length; i++) {

                            priceArray.push(dailyTimeSeries[keys[i]]["4. close"]);
                        }

                        keys = keys.reverse();
                        priceArray = priceArray.reverse();

                        result["Dates"] = keys;
                        result["Prices"] = priceArray;

                        res.send(result);

                    }
                });

        });

    };



    // Get Intraday Stock Values

    exports.getIntradayStockValues= async function(req, res) {

        let symbol = req.query.symbol;
        let priceArray=[];
        let result={};

    //https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=P7CTANYWRIY3VJLM

        stockURL=stockApi+intraday+"&symbol="+symbol+"&interval=1min&apikey="+apiKey[getRandomInt(4)];

        console.log(stockURL);

        https.get(stockURL, resp => {
            resp.setEncoding("utf8");
            let body = "";
            resp.on("data", data => {
                body += data;
            });
            resp.on("end", () => {
                try {
                    body = JSON.parse(body);
                    console.log(body);


                    if (body["Information"] || body["Error Message"] || body.charAt(0) === "<") {
                        res.status(500).send("Server Error! Too many requests")

                    }

                    else {
                        console.log(body);
                        dailyTimeSeries = body["Time Series (1min)"];
                        let keys = Object.keys(dailyTimeSeries);

                        for (let i = 0; i < keys.length; i++) {

                            priceArray.push(dailyTimeSeries[keys[i]]["4. close"]);
                        }

                        keys = keys.reverse();
                        priceArray = priceArray.reverse();

                        result["Dates"] = keys;
                        result["Prices"] = priceArray;
                        // console.log(result);
                        res.send(result);
                    }
                }
                catch (e) {
                    res.status(500).send("Server Error! Too many requests")
                }
            });

        });
    };





    // Get Monthly Stock Values

    exports.getMonthlyStockValues= async function(req, res) {

        let symbol = req.query.symbol;
        let priceArray=[];
        let result={};

    //https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=MSFT&apikey=P7CTANYWRIY3VJLM

        stockURL=stockApi+monthly+"&symbol="+symbol+"&apikey="+apiKey[getRandomInt(4)];

        console.log(stockURL);

        https.get(stockURL, resp => {
            resp.setEncoding("utf8");
            let body = "";
            resp.on("data", data => {
                body += data;
            });
            resp.on("end", () => {

                try
                {
                    body = JSON.parse(body);


                    console.log(body);

                }

                catch(e)
                {
                    res.status(500).send("Server Error! Too many requests")
                }
                    if (body["Information"] || body["Error Message"]) {
                        res.status(500).send("Server Error! Too many requests")

                    }

                    else {
                        dailyTimeSeries = body["Monthly Time Series"];
                        let keys = Object.keys(dailyTimeSeries);

                        for (let i = 0; i < keys.length; i++) {

                            priceArray.push(dailyTimeSeries[keys[i]]["4. close"]);
                        }

                        keys = keys.reverse();
                        priceArray = priceArray.reverse();

                        result["Dates"] = keys;
                        result["Prices"] = priceArray;
                        // console.log(result);
                        res.send(result);
                    }
                 });

        });

    };



    //Get default stock values for loading up on the dashboard
    exports.getDefaultStockValues =  function(req, res) {

        console.log("In default stock");



        let stockApi = "https://www.alphavantage.co/query?function=";
        let apiKey = ["P7CTANYWRIY3VJLM", "PBJS1EMBQEAR7P7T", "AEHS3A75QVYLBSS7", "P9SHSIG4AMWUIR8D"];
        let stocks = ["FB", "AAPL", "NVDA", "TSLA"];

        let intraday = "TIME_SERIES_INTRADAY";

        let defaultStocks = [];

        each(stocks, (stock, callback) => {
            getData(stock, defaultStocks, callback);
        }, (err) => {
            // if any of the processing produced an error, err would equal that error
            if (err) {
                // One of the iterations produced an error.
                // All processing will now stop.
                console.log("Error", err);
                res.status(404).send(err);
            } else {
                res.status(200).send(defaultStocks);
            }
        });
    }



    let getData = (stock, defaultStocks, callback) => {
        let options = {
            uri: stockApi + intraday + "&symbol=" + stock +
            "&interval=1min" + "&apikey=" + apiKey[getRandomInt(4)],
            json: true // Automatically parses the JSON string in the response
        };

        rp(options)
            .then(data => {

                let dailyTimeSeries = data["Time Series (1min)"];
                let keys = Object.keys(dailyTimeSeries);

                let priceArray = [];
                let result = {};

                for (let j = 0; j < keys.length; j++) {
                    priceArray.push(dailyTimeSeries[keys[j]]["4. close"]);
                }

                keys = keys.reverse();
                priceArray = priceArray.reverse();
                result["Symbol"] = stock;
                result["Dates"] = keys;
                result["Prices"] = priceArray;

                defaultStocks.push(result);
                callback();
            })
            .catch(err => {
                console.log(err);
            });

    };











    exports.getStockValues = function(req, res) {


        let symbol = req.query.symbol;
        let resultBody="";

            stockURL=stockApi+intraday+"&symbol="+symbol+"&interval=1min"+"&apikey="+apiKey[getRandomInt(4)];
            console.log(stockURL);

            https.get(stockURL, resp => {
                resp.setEncoding("utf8");
                let body = "";
                resp.on("data", data => {
                    body += data;
                });
                resp.on("end", () => {

                    try
                    {
                        body = JSON.parse(body);


                        console.log(body);

                    if (body["Information"] || body["Error Message"])
                    {
                        res.status(500).send("Server Error! Too many requests")

                    }

                    else {
                        timeSeriesbody = body["Time Series (1min)"];
                        var keybody = Object.keys(timeSeriesbody);
                        resultBody = timeSeriesbody[keybody[0]]["4. close"];
                        console.log("Result is ", resultBody);

                        res.send(resultBody);
                    }
                    }

                    catch(e)
                    {
                        res.status(500).send("Server Error! Too many requests")
                    }

                });

            });




    };




    exports.getCryptoValues = function(req, res) {

        let symbol = req.query.symbol;
        let resultBody="";

        cryptoURL=cryptoApi+cryptointraday+"&symbol="+symbol+"&market=USD&apikey="+apiKey[getRandomInt(4)];

        console.log(cryptoURL);

        https.get(cryptoURL, resp => {
            resp.setEncoding("utf8");
            let body = "";
            resp.on("data", data => {
                body += data;
            });
            resp.on("end", () => {
                try
                {
                    body = JSON.parse(body);


                    console.log(body);

                }

                catch(e)
                {
                    res.status(500).send("Server Error! Too many requests")
                }
                if (body["Information"] || body["Error Message"])
                {
                    res.status(500).send("Server Error! Too many requests")

                }

                else
                {
                timeSeriesbody=body["Time Series (Digital Currency Intraday)"];
                var keybody = Object.keys(timeSeriesbody);
                resultBody = timeSeriesbody[keybody[0]]["1a. price (USD)"];
                console.log("Result is ",resultBody);

                res.send(resultBody);

                    }
            });

        });




    };


    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    exports.currentTime=function (req,res) {

        let DateJSON={};
        DateJSON["Date"]=Date();

        console.log(DateJSON);
        res.send(DateJSON);

    }

