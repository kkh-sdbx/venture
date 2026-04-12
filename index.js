require("dotenv").config();

const axios = require("axios");
const cors = require("cors");
const express = require("express");
const fs = require("fs");
const csv = require("csv-parser");

const SEARCH_KEY = process.env.SEARCH_KEY;
const CX_ID = process.env.CX_ID;

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const ventureList = [];
const test = [];
/*
const rawData = fs.createReadStream("./VENTURE_LIST.csv")
.pipe(csv())
.on("data",(data)=>{ventureList.push(data)})
.on("end", async ()=>{
/*
    NUM	COMPANY_NAME	CEO	VENTURE_TYPE	LOCATION	TYPE	TYPE_DETAIL	VENTURE_START_DATE	VENTURE_END_DATE
1	한솔농산	이**	혁신성장유형	강원	제조업	기타 과실ㆍ채소 가공 및 저장 처리업	20260331	20290330
2	(주)올곧	최**	혁신성장유형	경북	제조업	냉동식품	20260331	20290330

    for (let i=0;i<10;i++){

        test.push(ventureList[i]);
        const query = encodeURIComponent(`${ventureList[i]["지역"]} ${ventureList[i]["업체명"]} 공식 홈페이지`);
        const url = `https://www.googleapis.com/customsearch/v1?q=${query}&key=${SEARCH_KEY}&cx=${CX_ID}`;
        //console.log(url);
        const res = await axios.get(url);
        const items = res.data.items;
        console.log(items);
    }
    //console.log(test);


   

});
*/
// 네이버 검색 API 예제 - 블로그 검색
/*
   var api_url = 'https://openapi.naver.com/v1/search/webkr.json?query=' + encodeURI(req.query.query); // JSON 결과

   var request = require('request');
   var options = {
       url: api_url,
       headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };
*/

//const testResult = await axios.fetch('/search/webkr');
console.log(`X-Naver-Client-Id:${CLIENT_ID}, X-Naver-Client-Secret: ${CLIENT_SECRET}`);
async function searchTest(companyName){
    const naverSearch ='https://openapi.naver.com/v1/search/webkr.json?query=';
    console.log(companyName);
    try{
        const response = await axios.get(naverSearch,{
            params: {query:"테스트검색"},
            headers: {'X-Naver-Client-Id':CLIENT_ID, 'X-Naver-Client-Secret': CLIENT_SECRET}
        })
        console.log(response);


    }catch(error){
        console.log("error: ",error);
    }

}



searchTest();


























/*
// 스키마 : 연번,업체명,이메일 주소,대표자(익명),벤처확인유형,지역,간략주소,업종분류(기보),업종명(11차),주생산품,벤처유효시작일,벤처유효종료일,벤처확인기관,신규/재확인



// 일단 100개만 해 본다.

*/



//const result = [];



