### Code Kata - 1
Urnfield

Urnfield is a simplistic numeral system used around 1200 BC in central Europe. It uses only 2 characters which are both slashes.
Urnfield Symbol 	Arabic Value
/ 	1
~ 	5

Each forward slash represents 1 and appears first, there is at most 4. After that downward slashes each represent 5. For example //~~~ (17) is interpreted as 1 + 1 + 5 + 5 + 5.

Example 1: Arabic -> Urnfield  for 1..10
1, 2, 3, 4, 5, 6, 7, 8, 9, 10
-> /, //, ///, ////, ~, /~, //~, ///~, ////~, ~~

Example 2: Arabic -> Urnfield for 10..29
11, 12, 15, 20, 21, 28, 29
-> /~~,
  //~~, 
  ~~~,
  ~~~~,
  /~~~~, 
  ///~~~~~, 
  ////~~~~~