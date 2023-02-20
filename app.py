from flask import Flask, request, jsonify
import joblib

# Load the trained model from the Joblib file
my_model = joblib.load('random_forest_regressor.h5')

# Create a Flask app object
app = Flask(__name__)

# Define a route for the API endpoint to be used for testing
@app.route('/test-predict', methods=['POST'])
def test_predict():
    # Get the input data from the API request
    input_data = request.json

    # Use the loaded model to make predictions on the input data
    prediction = my_model.predict(input_data)

    # Return the prediction result as a JSON response
    return jsonify({'prediction': prediction.tolist()})

# Define a route for the home page of your website
@app.route('/')
def home():
    # You can return an HTML template here that includes a form for inputting data
    # When the user submits the form, it should make a request to the '/test-predict' endpoint
    return render_template('index.html')