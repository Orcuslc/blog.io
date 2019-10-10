---
title: Accelerating Multi-NN model in Keras
category: [Machine Learning, Dev]
tag: [Keras, Neural Networks]
layout: post
---

#### Part I: Instead of saving the whole model using `model.save()`, use `model.to_json()` and `model.save_weights()`.

<!-- more -->

Example:
```python
from tensorflow.keras.models import model_from_json

def save(model, path):
    model.save_weights("{0}/weights.h7".format(path))
    model_json = model.to_json()
    with open("{0}/model.json".format(path), "w") as f:
        f.write(model_json)

def load(path):
    with open("{0}/model.json".format(path), "r") as f:
        model_json = f.read()
    model = model_from_json(model_json)
    model.load_weights("{0}/weights.h5".format(path))
    return model
```
In this approach, the saving time for 11 two-dense-layer models of 24 units in each layer decreased from 129 seconds to 59 seconds, so it is a 2x speedup.

#### Part II: Instead of training a series of models and storing them in memory, train and store the models one by one and store to the hard disks. When using the series of trained models, load and use them one by one. In both training and using, after each step, use `K.clear_session()` to clear the memory in GPU.

Notice: after calling `K.clear_session()`, all the models in the memory will be destroyed.

Example:
```python
import tensorflow.keras.backend as K

class Multi_NN:
    def __init__(self):
        self.models = []

    def train(self):
        for model in self.models:
            model.train()
            model.save()
            K.clear_session()

    def predict(self, num_predict):
        for i in range(num_predict):
            model = load()
            model.predict()
            K.clear_session()
```

In this approach, the training time for 11 two-dense-layer models of 24 hidden units in each layer trained on 400 samples with 10000 epochs and early_stopping used decreased from 360s to 80s, and the saving time decreased from 59 seconds to 6 seconds.