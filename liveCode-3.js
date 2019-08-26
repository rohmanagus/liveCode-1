function addTitle (person1, person2, person3, person4) {
  var mr = 'Mr.';
  console.log(mr + person1 + ',', mr + person2 + ',', mr + person3 + ',', mr + person4)
}

function changeSpacesWith (str, to) {

 var x = str.split(' ').join(to)
  // Code disini
  return x;
}

function cutString (str) {
  return str.slice(0,6)
}




addTitle('Steve Fox', 'Jin Kazama', 'Eddie Gordo', 'Geese Howard')
console.log(changeSpacesWith('Steve Fox', '-'))
console.log(cutString('Kazuya Mishima'));