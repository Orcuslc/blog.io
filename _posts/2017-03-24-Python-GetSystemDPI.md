---
layout: post
title: Python Get System DPI and Resolution
description: Python, Win32
<!-- image: assets/images/IMG_20161221_181014.jpg -->
---
I bumped into a problem when testing [BingBest]{https://github.com/orcuslc/bingbest}:

When performing unit test on my main PC, all things works fine; But at testing on other PCs, the resolution got by the `screeninfo` module is just not the same as the hardware. I once thought it may be caused by the different resolution of the testing PCs (Lenovo Y50, Surface Pro 4), but until today I tested with my X1 Carbon (5th gen), with a resolution of 1920x1080, the same as my main PC; The result shows it has a resolution of 1536x864. I started to wonder if it is caused by system DPI settings (which I changed this morning.)

Firstly, I tried with the `pywin32` module:
	
	import win32api
	def get_screen_resolution():
		return win32api.GetSystemMetrics(0), win32api.GetSystemMetrics(1)

But it failed to get the untransformed resolution.

Then I tried to get system DPI with `win32print`:

	import win32print
	def get_system_dpi():
	 	hdc = win32gui.GetDC(0)
	 	para_x = 88
	 	para_y = 90
	 	x_dpi = win32print.GetDeviceCaps(hdc, para_x)
	 	y_dpi = win32print.GetDeviceCaps(hdc, para_y)
	 	return x_dpi, y_dpi

But the return value were (96, 96), the default DPI of Windows.

Finally, at [StackOverflow]{http://stackoverflow.com/questions/3129322/how-do-i-get-monitor-resolution-in-python} I found that Python is by default a "System DPI Aware" appliction; and with the help of the demo, I used the `ctypes` module to get the true values:

	def get_screen_resolution():
		user32 = ctypes.windll.user32
		user32.SetProcessDPIAware()
		return user32.GetSystemMetrics(0), user32.GetSystemMetrics(1)


