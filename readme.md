<!-- Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Consigli:
Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while -->

1 creo un array listaSpesa;
2 creo un ulElement che seleziona l'elemento ul nel dom;
3 creo sum = 0;
4 apro il ciclo while con condizione sum < listaSpesa.length;
5 creo l'elemento li;
6 definisco li figlio di ul con appendChild; 
7 aggiungo nel elemento li append listaSpesa[sum];
8 aggiungo sum = sum + 1;
9 chiudo il ciclo while;