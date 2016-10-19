#!/usr/bin/env python3

import googlemaps, polyline, copy
import addRouteToMap, pointsFunction, intersectionParse, pygmaps
import argparse
import math


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
            # print("Map leg: ", mapOfNodes[key], key)

            # Marina note - for now will use this lat/long for determining color. Will work out logic, and then decide if there is a better solution.
            # print(key.lat, key.lng)

            # center = LAT = 34.09668, LNG = -117.71978
            # start by trying blue if less than 117.2, red if within, see what happens

            # is greater than LNG + .05 for all key.lng 
            #  + .01445
            # if (key.lng > LAT ):
            #     # if (key.lng > LAT + .0005):
            #     #     color_count = 2
            #     #     print("it worked")
            #     # else:
            #     color_count = 6
            #         # print ("also worked")
            # else:
            #     print("ah ha!")
            #     color_count = 3
            # print(key.lng)
            # print (LAT)
            # print (key.lat)
            # print (LNG)

            #34.101850, -117.717470 = marker

            markerLAT = -117.717470
            markerLNG = 34.101850

            dist = math.sqrt( (abs((markerLAT - key.lat) * (markerLAT - key.lat)) )  + (abs((markerLNG - key.lng) * (markerLNG - key.lng)) )  )
            # dist0 = float.hex(dist * 3)
            # hexdist = repr(dist0) #converts hex to string
            # redhex0 = hexdist[5:]
            # redhex = redhex0[:2]
 
            # modifier = float.hex(dist)
            # modifier1 = repr(modifier)
            # mod0 = modifier1[5:]
            # mod1 = mod0[:2]

            # modifier2 = float.hex(dist * 3)
            # modifier3 = repr(modifier2)
            # mod2 = modifier3[5:]
            # mod3 = mod2[:2]

            # color = '#' + redhex + 'AA' + 'AA'
            # print(color)

            # colors[3] = color

            # print(hexdist)
            # print(modifier1)
            # print(modifier3)

            # trying to get hex to work
            base = 0xFFFFFF
            # percent = dist #800 is the max distance away
            hexpercent = 0xFF - (dist * 0x0A * 0xFF)
            first = (base & 0xFF0000) >> 16
            second = (base & 0xFF00) >> 8
            third = base & 0xFF
            color1 = hex((int (2* (first - hexpercent)) << 16) | (int (4*(second - hexpercent)) << 8) | int(third - hexpercent))

            # print (color1)
            # print (hex(int(first - hexpercent) << 16))
            # print (hex(int(second - hexpercent) << 8))
            # print (hex(int(third - hexpercent)))

            color2 = repr(color1)
            color3 = color2[3:]
            color4 = color3[:6]
            color5 = '#' + color4
            print(color5)

            # first = (hex(8 * int(dist)) & 0xFF0000) >> 16
            # second = (hex(40 * int(dist)) & 0xFF00) >> 8
            # third = (hex(20 * int(dist)) & 0xFF)
            # color1 = hex((int(first) << 16) | (int(second ) << 8) | int(third ))

            colors[3] = color5

            # print(color1)
            # print(first)
            # print(second)
            # print(third)

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
