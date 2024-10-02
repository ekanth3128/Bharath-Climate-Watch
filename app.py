from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/airquality")
def airquality():
    return render_template("airquality.html")

@app.route("/forecast")
def forecast():
    return render_template("forecast.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/takeAction")
def takeaction():
    return render_template("take-action.html")

if __name__ == "__main__":
    app.run(debug=True)