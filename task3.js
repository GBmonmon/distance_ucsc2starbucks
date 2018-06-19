/* Find the average distance to a Starbucks (from the collection of 10) from the UCSC extension. */
db = connect('localhost:27017/geo')
/*
one_star = db.starbucks.find().limit(1)
one_star = one_star.next()
printjson(one_star)

one_airport = db.airports.find().limit(1)
one_airport = one_airport.next()
printjson(one_airport)


coordinate_star = one_star["loc"]["coordinates"]
printjson(coordinate_star

*/


dis = db.starbucks.aggregate([
    {
        $geoNear:{
            "near":{"type":"Point","coordinates":[-121.976548,37.379697]},
            "distanceField":"distance_to_ucsc",
            "spherical":true,
            "distanceMultiplier":0.0006213712 /* one meter equals to 0.0006213712 mile */
        } 
    }
])


total = 0
count = 0
while(dis.hasNext())
{
    doc = dis.next()
    total = total + doc["distance_to_ucsc"]
    count+=1
    avg_dis = total/count
}
print('+-----+-----Answer-----+-----+')
print('Average distance to a Starbucks from the UCSC extension is ',avg_dis,'miles')
