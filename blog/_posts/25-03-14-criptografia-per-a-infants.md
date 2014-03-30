---
layout: blog
title:  "Criptografia per a infants"
date:   2014-03-25 
tags: reptes competencies mates
author: sergi
---

Aquesta setmana, els alumnes de 5è i 6è curs del CodeClub de Besalú s'han trobat amb una sorpresa quan han arribat a la sala d'ordinadors. Resulta que un dia han deixat de ser alumnes de primària per passar a ser experts ciberespies que es dediquen a desxifrar missatges secrets provinents d'uns pirates informàtics que tenen la intenció de robar un banc molt important. L'objectiu d'aquests joves ciberespies és desxifrar una sèrie de missatges que s'han interceptat per la xarxa i que s'està segur que contenen informació molt vàlida de quan serà el cop al banc. 

 
![perill](/blog/images_blog/hackers_scaled.png)


S'està segur que els missatges s'han codificat utilitzant el [xifratge del Cèsar](http://en.wikipedia.org/wiki/Caesar_cipher). Aquest sistema de xifratge deu el seu nom al mateix emperador romà, que el feia servir sovint per protegir les comunicacions amb els seus oficials.  El sistema consisteix en una translació determinada de les lletres de l'abecedari, on la clau secreta és el nombre de lletres rotades. Per exemple, suposem que l'emissor i el receptor del missatge es posen d'acord en utilitzar la clau secreta "3". Llavors, cada lletra de l'abecedari es canviaria per la lletra que estigués tres posicions endavant. Mireu l'exemple següent:


![cesar](/blog/images_blog/rotacio.png)


En el cas que volguéssim xifrar la paraula *HOLA* ens trobaríem que es transformaria en *KROD*. Fixeu-vos perquè:

* la 'H' que està a la posició 8, passaria a la 8 + 3 = 11, i per tant es xifraria amb una 'K'.
* la 'O' que està a la posició 15, passaria a la 15 + 3 = 18, i per tant es xifraria amb una 'R'.
* la 'L' que està a la posició 12, passaria a la 12 + 3 = 15, i per tant es xifraria amb una 'O'.
* la 'A' que està a la posició 1, passaria a la 1 + 3 = 4, i per tant es xifraria amb una 'D'.


L'objectiu de cada un dels nens és fer un programa amb l'[Scratch](http://www.scratch.mit.edu) que desxifri un missatge que ha estat codificat utilitzant aquest mètode. Els infants que vulguin acceptar el repte i aconsegueixin desxifrar el missatge secret seran recompensats amb 10 punts positius i sobretot amb la medalla d'honor del CodeClub Catalunya. A més a més, per fer més interessant el repte, s'ha estipulat que els nens poden demanar ajuda externa a pares, germans, etcètera. Podeu veure amb més detall les instruccions del repte [aquí](/materials/reptes/perill_imminent/index.html).


Activitats com aquesta són molt valuoses pels caps de club, perquè ens permet introduir problemes reals de forma divertida. En aquest cas, tot l'entremat gira al voltant de les [llistes o vectors](http://ca.wikipedia.org/wiki/Array). Aquesta activitat és la primera que introdueix aquesta estructura de dades (el currículum del primer trimestre no inclou el treball amb llistes). De fet, s'introdueixen varis conceptes com el recorregut, l'assignació o les operacions a través de la lectura i escriptura del missatge secret. Per exemple, el següent programa de codi extret del mateix repte realitza un recorregut de les posicions a l'alfabet d'un missatge xifrat i mostra el missatge per pantalla.  


![codi_scratch](/blog/images_blog/res_final.png)


Paral.lelament estem treballant el pensament logico-matemàtic, degut a que els nens s'enfronten a un repte important tant per assimilar el codi de xifratge, com per descobrir per ells mateixos que el sistema és reversible, i que per tant, per desxifrar el missatge cal desfer els passos que els espies han realitzat. Tot i això, no s'ha fet incís en conceptes com les operacions amb mòdul. Tots els missatges a desxifrar han estat pensats per evitar aquest tipus d'operacions. Tot i que el problema aquí està simplificat, el fet d'existir 26 possibles claus fa que els nens hagin de plantejar la necessitat de trobar estratègies alternatives a provar totes les claus possibles, a part d'intuir els problemes que comporta l'algorisme per força bruta en el temps de càlcul. 


Finalment, l'activitat també ens permet introduir als infants la problemàtica de la seguretat informàtica, com funciona i com s'utilitza a nivell d'usuari tant en dispositius electrònics com en altres casos on es requereixi seguretat, com per exemple en l'ús de les targetes de crèdit. 
