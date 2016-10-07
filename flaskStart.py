from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def about():
    return render_template('about.html')

@app.route('/map/')
def map():
    return render_template('map.html')

@app.route('/dirProject/')
def dirProject():
	return render_template('dirProject.html')

if __name__ == '__main__':
	# app.run(host='0.0.0.0')
    app.run(debug=True)