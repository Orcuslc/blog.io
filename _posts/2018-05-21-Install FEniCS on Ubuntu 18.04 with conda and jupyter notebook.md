---
title: Install FEniCS on Ubuntu 18.04 with conda and jupyter notebook
category: Dev
tags: [FEniCS, Python]
---

## First of all, DO NOT build from source because there will be en error when compiling DOLFIN.

## Steps:
1. Install FEniCS with conda:
```bash
conda create -n fenicsproject -c conda-forge fenics
source activate fenicsproject
```

2. Install `nb_conda_kernels`:
```bash
conda install nb_conda_kernels
```

3. Copy `libstdc++` to the environment where the version installed is too old:
```bash
cp /usr/lib/x86_64-linux-gnu/libstdc++.so.6 ~/.conda/envs/fenicsproject/lib/
```

4. Open jupyter notebook, and choose Notebook:
```
Python [conda env:fenicsproject]
```

5. Test:
```python
from fenics import *
```
