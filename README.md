#Active Transportation Maps
##Harvey Mudd College CS121 Project FALL 2016

##Overview
Our project can be represented as three connected components: (1) Back End, which is made of several pipeline steps that together generate our maps, (2) Firebase, which stores information of each school and its corresponding map, and (3) Frond End, which is the website that the user engages with.  
####Back End (pipeline)
- Pipeline Step 0: Decide over a List of Schools
- Pipeline Step 1: Collect Intersections
- Pipeline Step 2: Generate Arrowed Paths
- Pipeline Step 3: Generate Map HTML

####Firebase

####Front End: The Website
- flaskStart.py: Flask Framework
- mapScript.js: the generated map
- CSS styling
- HTML pages


##Files Descriptions
###Back End (pipeline)
####Pipeline Step 0: Decide Over a List of Schools
- In this step, we decide which schools we want to display on our site, and find their geographical - locations. 


#### Pipeline Step 1: Collect Intersections
In this step we will collect all longtitude and latitude coordinates of the nodes on the intersections and middle of the rodes. We have a list of files:
- **Overpass-turbo.eu**: Use this website to automate intersection and dead-end generation into KML file. 
 - Input: school address (input manually-
 - Output: a KML file (which i sa file used to display geographic data) containing intersection coordinates, dead-end road coordinates
 - Benefit: Using this method can replace manual selection of clicking each intersection nodes on the KML file with automatic generation of intersection coordinates.
 - Limits: Overpass map is more complete for European countries than the US. We have found that Overpass map has a missing road on one map of a school compared to Google Maps. 
- **pointFunction.py** generates a text file containing a list of the coordinates of all the nodes for generating the arrowed path on a map. 
 - Input: KML file
 - Output: text file of node coordinates
- **intersectionParse.py** generates nodes for a map
 - Input: text file of node coordinates
 - Output: nodes to be added to a map


####Pipeline Step 2: Generate Arrowed Paths
- **addRouteToMap.py** create the paths with arrows.
 - Input: takes the output of pointFunction.py and intersectionParse.py, which are the list of intersections, along with their information as nodes on a map (direction, points, map)
 - Output: removes intersection data if two arrows overlays each other on the same road within a distance and determine length of arrows to put on map


####Pipeline Step 3: Generate HTML
In this step we use dirProject.py to call everything to produce a map and updateJS.py to put HTML file of map on flask.
- **dirProject.py** generates an HTML page, by calling addRouteToMap.py, pointFunction.py, and intersectionParse.py.It calls each function separately so that each one can do a discrete task: pointFunction.py generates a text file for intersectionParse.py to use, which does the pre-processing for the mapping. addRouteToMap.py then take that data and determine the direction and number of arrows to add to the map, which dirProject.py takes and add to a Google Map. 
 - Input: KML file, text output file name, HTML output file name
 - Output: HTML file with a Google Map with arrows on it
- **updateJS.py** takes javascript file from HTML page and puts it on Flask
 - Input:  HTML file of a map generated from dirProject.py
 - Output: none
 - Benefit: This allows us to use a script to update the Google Map on Flask, instead of manually updating the javascript.
###Firebase
**Firebase** stores all the Map.html(s)
- Benefit: The HTMLs of the maps are ready for display without the need to generate a new map each time. Our client has talked about the future goal of the project to be able to display a large amount of schools. Therefore, it is a priority for us to set up Firebase for future scaling at this stage.
- Limit: We currently only have around 12 schools, therefore using Firebase to store all their maps is not necessarily. However this choice of design is for future benefit. 


###Front End: The Website
- **flaskStart.py**: runs flask and renders the final website, which displays About.html and Map.html(s)
- **CSS: Main.css** is our stylesheet for all the html pages
This file is used for all HTMLs. 
 - **HTML pages**
  - **Layout.html**: dictates layout that can be applied for for all pages of the website
    - Benefit: We can use this in all other htmls and making our webpages more consistent and our code more concise.
  - **About.html**
    - It is the main page. It displays an introductory paragraph that explains the purpose of the website to the user, and how to understand the map. It includes a dropdown menu to select one school and go to its map page.
   - **Map.html**
   - We have a list of map pages. Each page displays the embedded mapScript javascript of one school with arrowed paths on the map.
 - mapScript.js: The JavaScript file containing the corresponding map for the specified school.
 
##External dependencies 

####Google Maps API
 - This is responsible for displaying our map and creating the paths on it. If Google maps were no longer usable, we would have to find another way of creating the routes and arrows on our map. 

####Overpass turbo (https://Overpass-turbo.eu)
 - This is responsible for automating our KML generation for nodes on the map. Without Overpass, we could go back to manual entry on Google My Maps, but would be a much longer process. 

####Firebase
 - This is where we currently store our school information, and where we intend to store our generated map information. Were Firebase no longer available, we could find another data storing site, so that the maps would not have to be dynamically generated each time someone accessed the site. 

