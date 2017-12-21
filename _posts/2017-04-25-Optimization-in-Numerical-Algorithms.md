---
title: Optimization in Numerical Algorithms, A Simulated Annealing example
category: programming
tags: [algorithm, numerical optimization]
---


I was asked to help accelerate a classmate's code of Simulated Annealing. In his code, the likelihood function is at first as follows:

{%highlight Python%}
def intensity(miu, alpha, beta, t, N):
	return sum(alpha*np.exp(-beta*(range(t-1, 0, -1)))*N[0:t-1])+miu

def likelihood(miu, alpha, beta, T, N, n):
	N = np.array(N)
	n = np.array(N)
	L1 = np.array([intensity(miu, alpha, beta, i+1, N) for i in range(T)])
	L = sum(np.log(L1)*n[0:T])-sum(L1)
{%endhighlight%}

<!-- more -->


Using the `timeit` wrapper, one can find the average processing time for the `likelihood` function is 0.8s when `N=1000`.  

I firstly replaced the computations with some functions that runs faster, and used some tricks to avoid repeated computations:
{%highlight Python%}
def intensity(miu, alpha, beta, t, N):
	return alpha*(np.exp(-beta*(np.linspace(t-1, 1, t-1))*N[0:t-1]).sum()+miu

def likelihood(miu, alpha, beta, T, N, n):
	N = np.asarray(N)
	n = np.asarray(N)
	L1 = np.asarray([intensity(miu, alpha, beta, i+1, N) for i in range(T)])
	L = (np.log(L1)*n[0:T]).sum()-L1.sum()
{%endhighlight%}

And the processing time was decreased to 0.4s now, with such little changes; But it is still not an acceptable time since in each iteration, the `likelihood` function need to be called for 3,000 times.
I wondered about the reason that the computations being so slow, since when choose `N = 100`, the processing time is just 0.008s, and I found that in the computation of `L1`, the complexity is $O(n^2)$, because for each `i`, the intensity need to generate a sequence of length `i`.
So I finally get an iteration version of the likelihood:
$
x_(t+1) = x_(t)*e^{-\beta} + \alpha*e^{-\beta}*N[t]
$
{%highlight Python%}
def likelihood(miu, alpha, beta, T, N, n):
	N = np.asarray(N)
	n = np.asarray(N)
	L1 = np.zeros(T)
	L1[0] = alpha*N[0]
	x = np.exp(-beta)
	y = alpha*x
	for i in range(1, T):
		L1[i] = x*L1[i-1] + y*N[i-1]
	L = (np.log(L1)*n[0:T]).sum()-L1.sum()
{%endhighlight%}

And when testing with `N = 1000`, the processing time is 0.002s.