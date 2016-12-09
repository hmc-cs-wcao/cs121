from flask import Flask, render_template
import pyrebase

firebaseConfig = {
	"apiKey": "AIzaSyAogjWCe3ZwjkRjfaZ2cug44yCCDoJoHSM",
	"authDomain": "active-transportation-maps.firebaseapp.com",
	"databaseURL": "https://active-transportation-maps.firebaseio.com",
	"storageBucket": "active-transportation-maps.appspot.com",
	"messagingSenderId": "577755931894"
}

firebase = pyrebase.initialize_app(firebaseConfig)

storage = firebase.storage()

app = Flask(__name__)

@app.route('/')
def about():
    return render_template('about.html')

@app.route('/map/')
def map():
    return render_template('map.html')

def mapSwitch(id):
	"""takes in string uuid of school and replaces mapScript.js
	    with that school's map from Firebase"""
	print(id)
	pathtoMap = id + "/mapScript.js"
	storage.child(pathtoMap).put("static/js/mapScript.js")

app.jinja_env.globals.update(mapSwitch=mapSwitch) # assign mapSwitch() as a Flask global

if __name__ == '__main__':
	# app.run(host='0.0.0.0')
    app.run(debug=True)