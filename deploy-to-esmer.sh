#!/bin/bash
# deploy DalorWeb Business Card to esmerelda HTML doc_root

cp *.shtml /var/www/html
cp LICENSE /var/www/html
cp robots.txt /var/www/html
cp index.html /var/www/html
cp assets/* /var/www/html/assets
cp css/* /var/www/html/css
cp js/* /var/www/html/js
cp fonts/* /var/www/html/fonts

sudo chown -R esmerelda:www-data /var/www/html/*
