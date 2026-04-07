const axios = require("axios");
const cors = require("cors");
const expres = require("express");
const fs = require("fs");
const csv = require("csv-parser");

// 스키마 : 연번,업체명,이메일 주소,대표자(익명),벤처확인유형,지역,간략주소,업종분류(기보),업종명(11차),주생산품,벤처유효시작일,벤처유효종료일,벤처확인기관,신규/재확인
const ventureList = [];

fs.createReadStream("/ventureList.csv")
.pipe(csv())
.on("data",(data)=>{ventureList.push(data)})
.on("end",()=>{
    console.log(ventureList);
});

const result = [];



