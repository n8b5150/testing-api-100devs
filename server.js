const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const parks = {
    'Pearson' : {
        'website' : 'https://metroparkstoledo.com/explore-your-parks/pearson-metropark/',
        'address' : 'https://www.google.com/maps/place/Pearson+Park/@41.6445834,-83.4457582,15z/data=!4m2!3m1!1s0x0:0xf0aca62ce98a7bea',
        'playground' : true,
        'bike path' : true,
        'campground' : false,
        'kayak' : false,
    },
    'Swan Creek' : {
        'website' : 'https://metroparkstoledo.com/explore-your-parks/swan-creek-preserve-metropark/',
        'address' : 'https://www.google.com/maps/place/Swan+Creek+Preserve+Metropark/@41.6169674,-83.6392584,15z/data=!4m2!3m1!1s0x0:0xccf047eabd5b034f',
        'playground' : true,
        'bike path' : true,
        'campground' : false,
        'kayak' : false,
    },
    'Middlegrounds' : {
        'website' : 'https://metroparkstoledo.com/explore-your-parks/middlegrounds-metropark/',
        'address' : 'https://www.google.com/maps/place/111+Ottawa+St,+Toledo,+OH+43604/@41.640679,-83.5397667,17z/data=!3m1!4b1!4m5!3m4!1s0x883b86c2e840ee95:0x91f64b7a12d1d24a!8m2!3d41.640675!4d-83.537578',
        'playground' : true,
        'bike path' : true,
        'campground' : false,
        'kayak' : true,
    },
    'Oak Openings' : {
        'website' : 'https://metroparkstoledo.com/explore-your-parks/oak-openings-preserve-metropark/',
        'address' : 'https://www.google.com/maps/place/4139+Girdham+Rd,+Swanton,+OH+43558/@41.5658139,-83.856178,17z/data=!3m1!4b1!4m2!3m1!1s0x883c68cef344ee93:0xf212c397b903440a',
        'playground' : true,
        'bike path' : true,
        'campground' : true,
        'kayak' : false,
    },
    'Side Cut' : {
        'website' : 'https://metroparkstoledo.com/explore-your-parks/side-cut-metropark/',
        'address' : 'https://www.google.com/maps/place/Side+Cut+Metropark/@41.5557134,-83.6741978,17z/data=!3m1!4b1!4m2!3m1!1s0x883c7724b8c4f3e7:0xd69a842afa6312f9',
        'playground' : true,
        'bike path' : true,
        'campground' : false,
        'kayak' : true,
    },
    'Wiregrass' : {
        'website' : 'https://metroparkstoledo.com/explore-your-parks/wiregrass-lake-metropark/',
        'address' : 'https://www.google.com/maps/place/Wiregrass+Lake+Metropark/@41.6396816,-83.789641,15z/data=!4m2!3m1!1s0x0:0x7a8b0d0dc1c3b4b6',
        'playground' : true,
        'bike path' : true,
        'campground' : true,
        'kayak' : true,
    },
    'Farnsworth' : {
        'website' : 'https://metroparkstoledo.com/explore-your-parks/farnsworth-metropark/',
        'address' : 'https://www.google.com/maps/place/Farnsworth+Metropark/@41.4826752,-83.7450169,17z/data=!3m1!4b1!4m2!3m1!1s0x883c72423f255e83:0x85eaaf867337c22a',
        'playground' : true,
        'bike path' : true,
        'campground' : true,
        'kayak' : true,
    },
    'Providence' : {
        'website' : 'https://metroparkstoledo.com/explore-your-parks/providence-metropark/',
        'address' : 'https://www.google.com/maps/place/Providence+Metropark/@41.4164322,-83.8583055,17z/data=!3m1!4b1!4m2!3m1!1s0x883c14951772b66f:0xaa0d95c06a696a56',
        'playground' : true,
        'bike path' : true,
        'campground' : false,
        'kayak' : true,
    },
    'Fallen Timbers' : {
        'website' : 'https://metroparkstoledo.com/explore-your-parks/fallen-timbers-battlefield-fort-miamis-metropark/',
        'address' : 'https://www.google.com/maps/search/Fallen+Timbers+Battlefield/@41.5469726,-83.7005741,17z/data=!3m1!4b1',
        'playground' : false,
        'bike path' : true,
        'campground' : false,
        'kayak' : false,
    },
    'Howard Marsh' : {
        'website' : 'https://metroparkstoledo.com/explore-your-parks/howard-marsh-metropark/',
        'address' : 'https://www.google.com/maps/place/621+S+Howard+Rd,+Curtice,+OH+43412/@41.6422379,-83.2740178,704m/data=!3m1!1e3!4m5!3m4!1s0x883b9f3549cc59e9:0x7a5d7a9c32d9d3bc!8m2!3d41.6420528!4d-83.2732317',
        'playground' : false,
        'bike path' : false,
        'campground' : false,
        'kayak' : true,
    },
    'Secor' : {
        'website' : 'https://metroparkstoledo.com/explore-your-parks/secor-metropark/',
        'address' : 'https://www.google.com/maps/place/Secor+Metropark/@41.6676645,-83.7889479,15z/data=!4m2!3m1!1s0x0:0x7f2d881785b12bf9',
        'playground' : true,
        'bike path' : true,
        'campground' : false,
        'kayak' : false,
    },
    'Cannonball Prairie' : {
        'website' : 'https://metroparkstoledo.com/explore-your-parks/cannonball-prairie-metropark/',
        'address' : 'https://goo.gl/maps/f4CT9JbyMYGcP2oF9',
        'playground' : false,
        'bike path' : true,
        'campground' : true,
        'kayak' : true,
    },
    'Glass City' : {
        'website' : 'https://metroparkstoledo.com/explore-your-parks/glass-city-metropark/',
        'address' : 'https://www.google.com/maps/place/Glass+City+Metropark/@41.6527704,-83.5216505,17z/data=!3m1!4b1!4m5!3m4!1s0x883b87899b41dfc9:0x2c165b77e3f2c681!8m2!3d41.6527664!4d-83.5194618',
        'playground' : true,
        'bike path' : true,
        'campground' : false,
        'kayak' : true,
    },
    'Wildwood' : {
        'website' : 'https://metroparkstoledo.com/explore-your-parks/wildwood-preserve-metropark/',
        'address' : 'https://www.google.com/maps/place/5100+W+Central+Ave,+Toledo,+OH+43615/@41.677798,-83.6704022,16z/data=!4m2!3m1!1s0x883c7eba17d2fbc5:0x89e0f32bd311dbd2',
        'playground' : true,
        'bike path' : true,
        'campground' : false,
        'kayak' : false,
    },
}


app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on ${PORT}. You better go catch it!`)
})

app.get('/api/:parkName', (request,response)=>{
    const parksName = request.params.parkName
    if (parks[parksName]){
        console.log(parks[parksName].entries())
        response.json(parks[parksName].entries())
    }else {
        response.json(parks)
    }
})