/*Find all airports within 300 miles of the Starbucks closest to the UCSC extension [37.379697,-121.976548]  in the collection of 10 Starbucks*/

db = connect('localhost:27017/geo')


db.starbucks.createIndex({'loc':'2dsphere'})

closest_star = db.starbucks.find(
  {
    "loc":{$near:{$geometry:{'coordinates':[-121.976548,37.379697]}}}
  }
).limit(1)
closest_star = closest_star.next()

db.airports.createIndex({'loc':'2dsphere'})
airports_300m = db.airports.find(
 {
   "loc":{
      $near:{
         $geometry:{'coordinates':closest_star.loc.coordinates},
         $maxDistance:482803 /* 300 miles is equal to 482803 meters*/
      }
      
   }
 }
)

while(airports_300m.hasNext()){
    doc = airports_300m.next()
    printjson(doc)
}
