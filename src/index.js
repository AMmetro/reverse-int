module.exports = function reverse (n) {


    modul = Math.abs(n);
   
  // приведеник к стринг здесь нужно?
  
    let  strii = String(modul)

    strNumb=strii.split("");

    reverseNumb=strNumb.reverse();
 
    joinNumb=reverseNumb.join('');
  
    return joinNumb;

  
}
