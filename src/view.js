var symbols = [
    "AARTIIND",
    "ABB",
    "ABBOTINDIA",
    "ABCAPITAL",
    "ABFRL",
    "ACC",
    "ADANIENT",
    "ADANIPORTS",
    "ALKEM",
    "AMARAJABAT",
    "AMBUJACEM",
    "APOLLOHOSP",
    "APOLLOTYRE",
    "ASHOKLEY",
    "ASIANPAINT",
    "ASTRAL",
    "ATUL",
    "AUBANK",
    "AUROPHARMA",
    "AXISBANK",
    "BAJAJ-AUTO",
    "BAJAJFINSV",
    "BAJFINANCE",
    "BALKRISIND",
    "BALRAMCHIN",
    "BANDHANBNK",
    "BANKBARODA",
    "BATAINDIA",
    "BEL",
    "BERGEPAINT",
    "BHARATFORG",
    "BHARTIARTL",
    "BHEL",
    "BIOCON",
    "BOSCHLTD",
    "BPCL",
    "BRITANNIA",
    "BSOFT",
    "CANBK",
    "CANFINHOME",
    "CHAMBLFERT",
    "CHOLAFIN",
    "CIPLA",
    "COALINDIA",
    "COFORGE",
    "COLPAL",
    "CONCOR",
    "COROMANDEL",
    "CROMPTON",
    "CUB",
    "CUMMINSIND",
    "DABUR",
    "DALBHARAT",
    "DEEPAKNTR",
    "DELTACORP",
    "DIVISLAB",
    "DIXON",
    "DLF",
    "DRREDDY",
    "EICHERMOT",
    "ESCORTS",
    "EXIDEIND",
    "FEDERALBNK",
    "FSL",
    "GAIL",
    "GLENMARK",
    "GMRINFRA",
    "GNFC",
    "GODREJCP",
    "GODREJPROP",
    "GRANULES",
    "GRASIM",
    "GUJGASLTD",
    "HAL",
    "HAVELLS",
    "HCLTECH",
    "HDFC",
    "HDFCAMC",
    "HDFCBANK",
    "HDFCLIFE",
    "HEROMOTOCO",
    "HINDALCO",
    "HINDCOPPER",
    "HINDPETRO",
    "HINDUNILVR",
    "HONAUT",
    "IBULHSGFIN",
    "ICICIBANK",
    "ICICIGI",
    "ICICIPRULI",
    "IDEA",
    "IDFC",
    "IDFCFIRSTB",
    "IEX",
    "IGL",
    "INDHOTEL",
    "INDIACEM",
    "INDIAMART",
    "INDIGO",
    "INDUSINDBK",
    "INDUSTOWER",
    "INFY",
    "INTELLECT",
    "IOC",
    "IPCALAB",
    "IRCTC",
    "ITC",
    "JINDALSTEL",
    "JKCEMENT",
    "JSWSTEEL",
    "JUBLFOOD",
    "KOTAKBANK",
    "L&TFH",
    "LALPATHLAB",
    "LAURUSLABS",
    "LICHSGFIN",
    "LT",
    "LTI",
    "LTIM",
    "LTTS",
    "LUPIN",
    "M&M",
    "M&MFIN",
    "MANAPPURAM",
    "MARICO",
    "MARUTI",
    "MCDOWELL-N",
    "MCX",
    "METROPOLIS",
    "MFSL",
    "MGL",
    "MOTHERSON",
    "MPHASIS",
    "MRF",
    "MUTHOOTFIN",
    "NATIONALUM",
    "NAUKRI",
    "NAVINFLUOR",
    "NESTLEIND",
    "NMDC",
    "NTPC",
    "OBEROIRLTY",
    "OFSS",
    "ONGC",
    "PAGEIND",
    "PEL",
    "PERSISTENT",
    "PETRONET",
    "PFC",
    "PIDILITIND",
    "PIIND",
    "PNB",
    "POLYCAB",
    "POWERGRID",
    "PVR",
    "RAIN",
    "RAMCOCEM",
    "RBLBANK",
    "RECLTD",
    "RELIANCE",
    "SAIL",
    "SBICARD",
    "SBILIFE",
    "SBIN",
    "SHREECEM",
    "SIEMENS",
    "SRF",
    "SRTRANSFIN",
    "SUNPHARMA",
    "SUNTV",
    "SYNGENE",
    "TATACHEM",
    "TATACOMM",
    "TATACONSUM",
    "TATAMOTORS",
    "TATAPOWER",
    "TATASTEEL",
    "TCS",
    "TECHM",
    "TITAN",
    "TORNTPHARM",
    "TORNTPOWER",
    "TRENT",
    "TVSMOTOR",
    "UBL",
    "ULTRACEMCO",
    "UPL",
    "VEDL",
    "VOLTAS",
    "WHIRLPOOL",
    "WIPRO",
    "ZEEL",
    "ZYDUSLIFE"
]
const bg = {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#1b5364",
    width: "100vw",
    height: "13vh",
}
const logo = {
    margin: "0px",
    padding: "1.5%",
}
const logotext = {
    fontSize: "5vh",
    color: "aliceblue",
    margin: "0px",
}
const eqdiv = {
    padding: "2.3%",
}
const eqlink = {
    color: "aliceblue",
    fontSize: "3vh",
    textDecoration: "none",
}
const optiontext = {
    fontSize: "3vh"

}
const optiondiv = {
    width: "17vw"
}
const label = {
    fontSize: "3vh",
    color: "CCCCCC",
    marginLeft: "4vw"
}
const datas = {
    fontSize: "4vh",
    marginLeft: "4vw"
}
const bsdata = {
    display: "flex",
    flexDirection: "row",
}
const leftdata = {
    marginLeft: "25vw",
    marginTop: "20vh",
}
const rightdata = {
    marginTop: "12vh",
    marginLeft: "4vw",
}
function View() {
    async function data() {
        var sname = document.getElementById('symbol').value
        var month = document.getElementById('month').value
        await fetch(`http://tickertradz.co.in:9000/futures/NFO:${sname}${month}FUT`)
            .then(res => res.json())
            .then((result) => {
                document.getElementById("time").innerHTML = result.timestamp;
                document.getElementById("buy").innerHTML = result.buy_quantity;
                document.getElementById("sell").innerHTML = result.sell_quantity;
                document.getElementById("oi").innerHTML = result.oi;
                document.getElementById("bs").innerHTML = result.buy_quantity / result.sell_quantity;
                document.getElementById("sb").innerHTML = result.sell_quantity / result.buy_quantity;
                console.log(result.buy_quantity)
            })

    }
    function call() {
        var call = window.location.href.split('3000');
        var fetchurl = 'http://tickertradz.co.in:9000' + call[1];
        fetch(fetchurl);
        document.getElementById("call").innerHTML = "Connected"
    }
    return (

        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" >
                <div className="container-fluid">
                    <a className="navbar-brand" href="http://tickertradz.co.in:3000/?status=success&request_token=Gmlha3PYsldx8o0kn6vY9c5HI9LfGg65&action=login&type=login">TickerTradz</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="http://tickertradz.co.in:3000/equity">Equity</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="http://tickertradz.co.in:3000/data">Data</a>
                            </li>
                            <div style={optiondiv}>
                                <select id="symbol" className="form-select" aria-label="Default select example">
                                    {
                                        symbols.map((item) => (
                                            <option key={item} value={item}>
                                                {item}
                                            </option>
                                        ))};
                                </select>
                            </div>
                        
                        <div style={optiondiv}>
                            <select id="month" className="form-select " aria-label="Default select example">
                                <option value="23FEB">Febuary</option>
                                <option value="23MAR">March</option>
                                <option value="23APR">April</option>
                            </select>
                        </div>
                        </ul>
                            <button className="btn btn-outline-dark" onClick={data}>Search</button>
                            <button id="call" className="btn btn-outline-dark" onClick={call}>Call</button>
                    </div>
                </div>
            </nav>
            <div style={bsdata}>
                <div style={rightdata}>
                    <label style={label}>Time</label>
                    <p style={datas} id="time"></p>
                    <label style={label}>Buy Quantity</label>
                    <p style={datas} id="buy"></p>
                    <label style={label}>Sell Quantity</label>
                    <p style={datas} id="sell"></p>
                    <label style={label}>Open Interest</label>
                    <p style={datas} id="oi"></p>
                </div>
                <div style={leftdata}>
                    <label style={label}>Buyers/Sellers</label>
                    <p style={datas} id="bs"></p>
                    <label style={label}>Sellers/Buyers</label>
                    <p style={datas} id="sb"></p>
                </div>
            </div>
        </>
    );
}
export default View;