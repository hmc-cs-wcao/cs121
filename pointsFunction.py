# FOR MYMAPS ONLY: Must take out the the link in the KML (of the file before this will work). **POSSIBLY FIX THIS***

# This function will take in a KML file that has points at each of the intersections and create a file 
# that has the lat and lng separated by commas and each of these separated by a new line


import xml.etree.ElementTree as ET

def kmlParse(kml, text_file="/Users/m/Documents/GitHub/cs121old/summer_2016/out.txt"):

    tree = ET.parse(kml)
    root = tree.getroot()
    
    # starts at 2, since is first index with coordinate, will go until last element. 
    # basically: while num != NULL, add root[0][num][0][0].text + \n to file
    # indexes represent: document, description/placemark/name*, point, coordinate
    # * this index can also represent the name of the school, which is why added the part where third index is 1
    num = 2

    while ( (root[0][num][1][0] != root[0][-1][1][0]) or (root[0][num][0][0] != root[0][-1][0][0])  ):
        # if the tag is the name, set the third index to 1, not 0 
        if (root[0][num][0].tag == '{http://www.opengis.net/kml/2.2}name'):
             text_file.write( (root[0][num][1][0]).text + '\n')
        else:
            text_file.write( (root[0][num][0][0]).text + '\n')

        # increment the coordinate being read
        num += 1
        
    
    #will go through KML file - skips this step with Overpass - only works for myMaps manual generation KML
    # for x in root.findall(".//Placemark"):
    #     # text_file.write(x.find("Point/coordinates").text + '\n')
    #     print ('im working!!!')
    fname = text_file.name

    text_file.close()
    
    return fname
