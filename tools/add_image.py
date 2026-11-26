#!/usr/bin/env python3
"""Prepare an echo image for the library.

Usage: python3 tools/add_image.py SOURCE NAME [--crop TOP BOTTOM LEFT RIGHT]
  Crop values are fractions of the image to keep, e.g. --crop 0.1 0.8 0 1
  keeps from 10% to 80% of the height and the full width (use it to cut off
  names, dates, MRNs and hospital labels).
Writes img/NAME.jpg (max 1100 px) and img/t/NAME.jpg (360 px thumbnail),
with EXIF metadata stripped. Then add an entry to bank.js and bump the version.
"""
import argparse, os
from PIL import Image
ap = argparse.ArgumentParser()
ap.add_argument("src"); ap.add_argument("name")
ap.add_argument("--crop", nargs=4, type=float, metavar=("TOP", "BOTTOM", "LEFT", "RIGHT"))
a = ap.parse_args()
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
im = Image.open(a.src).convert("RGB")
w, h = im.size
if a.crop:
    t, b, l, r = a.crop
    im = im.crop((int(w * l), int(h * t), int(w * r), int(h * b)))
full = im.copy(); full.thumbnail((1100, 1100))
full.save(os.path.join(root, "img", a.name + ".jpg"), quality=82)
th = im.copy(); th.thumbnail((360, 360))
os.makedirs(os.path.join(root, "img", "t"), exist_ok=True)
th.save(os.path.join(root, "img", "t", a.name + ".jpg"), quality=75)
print("saved", a.name, full.size)
