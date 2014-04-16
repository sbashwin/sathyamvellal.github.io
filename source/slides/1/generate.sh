#!/bin/bash 

pandoc -t revealjs --template ../../revealjs/template-revealjs.html -s content.markdown -o index.html -V transition=linear -V font="PT Sans" -V center=true
