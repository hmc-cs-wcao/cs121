import re
import subprocess
import imp

def main():

	#Import
	#intersectionParse = imp.load_source('intersectionParse', './summer_2016/python/intersectionParse.py')
	#dirProject = imp.load_source('dirProject', './summer_2016/python/dirProject.py')
	#addRouteToMap = imp.load_source('addRouteToMap', './summer_2016/python/addRouteToMap.py')	

	#Execute pygmaps
	#dirProject.main("./summer_2016/python/KML/IntersectionPoints.kml", "./summer_2016/python/dirProject.html", "./summer_2016/python/out.txt")
	subprocess.call(["python", "./summer_2016/python/dirProject.py", "-k", "./summer_2016/python/KML/IntersectionPoints.kml", "-m", "./summer_2016/python/dirProject.html", "-t", "./summer_2016/python/out.txt"])

	#Save script
	with open("./summer_2016/python/dirProject.html", 'r') as htmlfile:
		html = htmlfile.read()
	jsPattern = re.compile("(?<=<script type=\"text\/javascript\">)([^<])+")
	findScript = jsPattern.search(html)
	script = findScript.group(0)
	
	#Write script to JS file
	with open('./static/js/mapScript.js', 'w') as outputScript:
		outputScript.write(script)

if __name__ == "__main__":
	main()