#!/usr/bin/env python3

import googlemaps, polyline, copy
import addRouteToMap, pointsFunction, intersectionParse, pygmaps
import argparse


# Initial map properties
LAT = 34.09668
LNG = -117.71978
MAP_ZOOM = 15
THE_MAP = pygmaps.maps(LAT, LNG, MAP_ZOOM)

def main(kml_file, html_file, text_file):
   
    # API key 
    gmaps = googlemaps.Client(key='AIzaSyDaPfA_TUTlbHLDH0K48qS-Jh2ETfCTz_0')
    
    #control for arrow colour: for debugging
    colors = ['#000000','#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF']
    color_count = 3
    
    #get intersection data
    intersection_file = pointsFunction.kmlParse(kml_file,text_file)
    intersections = intersectionParse.createIntersections(intersection_file)
    directionIntersections = copy.deepcopy(intersections)

    #create an empty dict for the nodes
    mapOfNodes = {}

    #iterate through intersections
    while(directionIntersections):
        
        #get our node from the intersection data
        temp_node = directionIntersections.pop()
        
        #find the arrow endpoints
        start = [temp_node.lng, temp_node.lat]
        end   = [34.10185, -117.71747]

        #making a call to the google maps api
        dirs = gmaps.directions(start, end, "walking")
        points = [intersectionParse.Node(lng, lat) for lat, lng in polyline.decode(dirs[0]["overview_polyline"]["points"])]
        # Note from Erin: the distance of the route will possibly be helpful in the future if I am changing the colors of the arrows
        points = addRouteToMap.snapToIntersection(points, intersections)

        #add to map
        mapOfNodes = addRouteToMap.addRoute(mapOfNodes, intersections, directionIntersections, points)

    # iterate through arrows
    for key in mapOfNodes:
        if(mapOfNodes[key] is not None):
            
            # Print statements for debugging:
            #print("Map leg: ", mapOfNodes[key], key)
            #print(key.lat, key.lng)
            #print(mapOfNodes[key].lat, mapOfNodes[key].lng)
            THE_MAP.addpath([key, mapOfNodes[key]], key.value, colors[color_count])
            
            #Colour control
            # color_count +=1
            # if color_count == 6:
                # color_count = 0

            
    THE_MAP.addpoint(34.10185, -117.71747, "#FF0000")

    THE_MAP.draw(html_file)


if __name__=="__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument('--kml','-k', metavar='FILE', type=argparse.FileType('r'),
                        required=True,
                   help='Read intersections from kml FILE')
    parser.add_argument('--html','-m', metavar='FILE', type=argparse.FileType('w'),
                        required=True,
                        help='Write the output to html FILE')
    parser.add_argument('--text','-t', metavar='FILE', type=argparse.FileType('w'),
                        required=True,
                        help='Write the text version of the coordinates to FILE')

    args = parser.parse_args()
    main(args.kml, args.html, args.text)
