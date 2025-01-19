from flask import Flask, render_template

app = Flask(__name__)

# Route for the Volunteer page
@app.route("/")
def volunteer_page():
    return render_template("volunteer.html")

# Route for the About Us page (Who We Are)
@app.route("/aboutwho")
def aboutwho_page():
    return render_template("aboutwho.html")

# Route for the About Us page (What We Do)
@app.route("/aboutwhat")
def aboutwhat_page():
    return render_template("aboutwhat.html")

# Route for the Donation page
@app.route("/donate")
def donate_page():
    return render_template("donate.html")

# Route for the Signup page
@app.route("/signup")
def signup_page():
    return render_template("signup.html")

# Route for the Login page
@app.route("/login")
def login_page():
    return render_template("login.html")
# Route for the Approach page
@app.route("/approach")
def approach_page():
    return render_template("approach.html")
@app.route("/where")
def where_page():
    return render_template("where.html")

if __name__ == "__main__":
    app.run(debug=True)
