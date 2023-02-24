# Coming-to-A-Theater-Near-You

## Check out our website here! --> https://powerful-eyrie-38585.herokuapp.com/

## Overview
The purpose of this project is to utilize Machine Learning to determine whether a movie is successful based on attributes such as: budget, original language, runtime, revenue, popularity, rating, director, and genre. We wanted to observe any trends that occur when comparing these different attributes and answer the question: What is the most important factor in determining the success of a movie?


### Methods Used
* Machine Learning
* Data Visualization
* Predictive Modeling
* etc.

### Technologies
* Python
* Pandas, jupyter
* HTML
* JavaScript
* etc. 

## ETL
Our data was in .csv format initially. We used the combination of Python and Pandas to clean and organize the data. Issues we encouraged inclined our initial data set being ill-suited for our purposes. The structure appeared fine at first but as we worked with it, we encountered fundamental problems with the structure, namely over-complicated connections being required for even simple queries, and columns that were composed of strings that were inconsistently actually lists.

We opted to use a flask app for this project, as, as our data simplified, so did our needs.
Similarly, our initial plan was to host on AWS and deploy with Lambda or SageMaker. As the project continued, we ended up choosing to deploy our model pre-trained. This removed the need for AWS, and Heroku became our best option. 


## Machine Learning
We used a logistic regression model for our project. We trained it locally, then uploaded it as a pre-trained model using joblib. It hads an overall accuracy of 81% for predicting the success of a movie, with the breakdown favoring the unsuccessful movie prediction, 84% verses 71% for sucessful ones. The recall again favored unsucessful, at 0.9 verses 0.59 for successful movies. Finally, the f1-score is 0.87 for unsuccessful movies and 0.64 for successful movies.

## Analysis
The successfulness of a movie can be determined in many different ways. While the highest revenue-generating genres were Animation, Adventure, and Science; viewers voted higher on average for Foreign, History, and War. When comparing the Top 10 List of films based on Revenue and Rating, they were two completely different lists. While we expected a positive relationship between budget and revenue (thought process: higher budget = better production = more revenue), but there was too much variability in the data to see a significant correlation. Additionally, most average voter ratings ranged from 5-8 out of 10 and having a higher revenue did not necessarily equate to having a higher voter rating.

Overall, it seems that there is no one clear determinant and we have to consider multiple factors. 

### Challenges
We faced many challenges in creating this project. 
Our data source was one of the first we encountered. THe data set we found that inspired the project immediately proved too small to be used for ML purposes, so we looked for additional ones. We found what we were looking for with IMDB and the massive datafiles they had.
Unfortunately this led to the opposite problem: too much information. The data was split between several files and a variety of tables. After assembling what we needed, we found it to be formatted in such a way to render ML too complicated for our purposes. It took finding a third source to get the model trained.

The second major challenge we faced was encountered immediately afterwards. Our original goal was to create a website that would take in movies the user liked and, having run it through our model, output similar movies they would like. We hoped to base this on factors such as starring actors, genre, and budget. As we quickly found out, recommendation models were complex enough when hosted locally, and down right difficult when deployed as we were intending to. We went through several ideas for models to use afterwards, and ultimately we had to opt for a much less complex idea due to time constraints.
