# Must take out the the link in the KML (of the file before this will work). **POSSIBLY FIX THIS***
# This function will take in a KML file that has points at each of the intersections and create a file 
# that has the lat and lng separated by commas and each of these separated by a new line


import xml.etree.ElementTree as ET

#text file will have long, lat separated by new lines
# has a problem with the files? maybe with the outfile?

def kmlParse(kml, text_file="/Users/m/Documents/GitHub/cs121old/summer_2016/out.txt"):

    tree = ET.parse(kml)
    root = tree.getroot()
    
    # just need to loop through entire file, should return correct output
    #starts at 2, will go until null. Only need to do a while loop, I think. 
    # while num != NULL, add root[0][num][0][0].text + \n to file
    #text_file.close

    # also check to see if it's just taking out the link that is the problem
    # document, description/placemark, point, coordinate
    num = 2
    while root[0][num][0][0] != root[0][-1][0][0]:
        text_file.write( (root[0][num][0][0]).text + '\n')
        num += 1

    
    #will go through KML file - skips this step with the new file
    # for x in root.findall(".//Placemark"):
    #     # text_file.write(x.find("Point/coordinates").text + '\n')
    #     print ('im working!!!')
    fname = text_file.name

    text_file.close()
    
    return fname