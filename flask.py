from flask import Flask, request, render_template
import joblib
import pandas as pd

app = Flask(__name__)

# Load the saved model from file
model = joblib.load('movie_success_model.joblib')

# Set up the list of genres
genres_list = ['Action', 'Romance', 'Thriller', 'Comedy', 'Drama']

@app.route('/')
def home():
    return render_template('index.html', genres=genres_list)

@app.route('/predict', methods=['POST'])
def predict():
    # Get the input data from the form
    budget = int(request.form['budget'])
    popularity = float(request.form['popularity'])
    runtime = int(request.form['runtime'])
    vote_average = float(request.form['vote_average'])
    revenue = int(request.form['revenue'])
    selected_genres = request.form.getlist('genres')

    # Create a dictionary to hold the input data
    input_data = {
        'budget': budget,
        'popularity': popularity,
        'runtime': runtime,
        'vote_average': vote_average,
        'revenue': revenue
    }
    
    # Set the values of the selected genres to 1 in the input data
    for genre in selected_genres:
        input_data[f'genres_{genre}'] = 1
    
    # Set the values of the non-selected genres to 0 in the input data
    for genre in genres_list:
        if genre not in selected_genres:
            input_data[f'genres_{genre}'] = 0
    
    # Convert the input data to a dataframe
    input_df = pd.DataFrame([input_data])

    # Use the model to make predictions on the input data
    predictions = model.predict(input_df)

    # Return the prediction to the user
    if predictions[0] == 1:
        result = 'successful'
    else:
        result = 'unsuccessful'
    
    return render_template('index.html', result=result)
