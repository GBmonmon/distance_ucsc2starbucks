/* Find all airports within 500 miles of the furthest Starbucks in the collection of 10 Starbucks  */
db = connect('localhost:27017/geo')

function find_furthest_star(ucsc_log_lat){
  star = db.starbucks.find(
    {   
      'loc':{$near:{$geometry:{'coordinates':ucsc_log_lat}}}
    }   
  )
  while(star.hasNext()){
      doc = star.next()
  } 
  return doc
}

furthest_star = find_furthest_star([-121.976548,37.379697])

airports_500m = db.airports.find(
 {
   'loc':{
      $near:{
        $geometry:{'coordinates':furthest_star.loc.coordinates},
        $maxDistance:804672 /* 500 miles is equal to 804672 meter */
      }
   }
 }
)

while(airports_500m.hasNext()){
    doc = airports_500m.next()
    printjson(doc)
}
