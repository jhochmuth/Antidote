# Antidote
Antidote is a browser extension that uses neural network models to block toxic content.
The extension currently only supports functionality with youtube comments, and it is only available as a chrome extension.

## Specifics
To make predictions of toxicity, a recursive neural network was trained on the Google Toxic Comment dataset. The current model was trained in Python using the Keras framework. This model was then converted to a format useable by Tensorflow.js. When the web extension is installed, the files that hold the saved model parameters are downloaded from One Drive. After recreating the model using the saved parameters, the extension is ready to make predictions.

When you visit a Youtube video and scroll down to the comments section, the extension will collect the text of each comment and make a prediction for each one. If any predictions are over the threshold, the respective comments are hidden from view. There is a small delay from the time that comments are loaded until predictions are completed, so toxic comments may still be visible for a few seconds or less before they are blocked.

While Youtube already has its own method of automatically hiding toxic comments from view, they only block comments with extremely high levels of toxicity. Users may find that undesired content will still appear even with the automatic Youtube filter. Antidote provides a blocker that is customizable to each individual's needs. Users can easily select their desired threshold in the user interface. This allows for different degrees of sensitivity to toxicity.
