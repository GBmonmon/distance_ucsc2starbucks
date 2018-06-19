# distance_ucsc2starbucks

load.json contains 10 starbucks info
ucsc.json contains ucsc info



Goto https://www.starbucks.com/store-locator

enter the address of the UCSC extension:

3175 Bowers Ave, Santa Clara, CA 95054
Take down the addresses of the first 10 Starbucks on the list

Hint – hit “i” to get to a page where you can copy and paste the address
Goto to site:

http://www.latlong.net/convert-address-to-lat-long.html (Links to an external site.)Links to an external site.

and get the longitude and latitude for each Starbucks. For example:
 

Once you have the following info create a new collection within the GeoDB called starbucks and add documents for the 10 Starbucks you got addresses and coordinate for:

address:
city:
state:
zip:
loc:[ longitude, latitude]
Write Javascript MongoDB shell code to do the following:
Find all airports within 300 miles of the Starbucks closest to the UCSC extension in the collection of 10 Starbucks
Find all airports within 500 miles of the furthest Starbucks in the collection of 10 Starbucks
Find the average distance to a Starbucks (from the collection of 10) from the UCSC extension.
