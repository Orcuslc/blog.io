---
title: Install CUDA 9.0 and TensorFlow 1.4 on Ubuntu 16.04LTS
category: Dev
tags: [CUDA, TensorFlow]
---
This morning, when I woke from troubled dreams, I found myself transformed in my bed into a horrible bug... Ah, five system errors were hovering on my Ubuntu desktop, and then it turned black and never woke up again. So I need to give up my last two days for preparing the Qualifying Exam on ODE/PDE to fix my computer. In fact, I don't think I can pass the Qual this time even if nothing happened today: I was sufferring from a cold, a fever, a spondylitis, a high IOP, a stomachache, and finally a PC broke down in the last five days. Crazy! 

Ok, let's come to the topic. After a clean reinstallment with `/home` partition kept unchanged, we need to do the following steps to install CUDA and TensorFlow.

1. Install the graphic card driver. Be careful to choose the correct version. I tried `nvidia-387` many times today, but after installing the CUDA, there is an error saying that the driver and runtime version are different. Use `nvidia-384` instead.
2. Install CUDA using `.deb`, it's much easier then the run file. Remember to choose the corrosponding deb file with the graphic driver version. Use `CUDA-9.0` here. (CUDA-9.1 made me much trouble today. I hate it.) Notice: Never change the method after an unsuccessful installation!!! If you really want to change the installing method, PLEASE purge all the components of the previous installation.
3. Install Python-related packages.
5. Install TensorFlow from sources. Just follow the instructions from [TensorFlow](https://www.tensorflow.org/install/install_sources).
6. Test~