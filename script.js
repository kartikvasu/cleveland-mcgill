function experiment() {
  
  this.list = ['insert/intro.html', 'insert/first.html', 'insert/second.html',
  'insert/third.html', 'insert/results.html', 'insert/thanks.html']; //list of insertions to be loaded
  this.counter = 0, //counter for looping the list
  this.userData = []; //array for holding all the user inputs
  this.corrects = []; //array for holding all the correct answers

  var that = this;

  this.goNext = function() {
    console.log(this)
    console.log(that)
    if(that.counter < that.list.length){
      d3.select('#nextbtn').on('click', function() {  
      d3.html(that.list[that.counter], function(error, data) {
        if(error) console.log(error);
        handleClick();
        d3.select('#container').html('');
        d3.select('#container').node().appendChild(data);
        ++that.counter; //increment index of the array
        })
      });
    }
  }

  function handleClick(){

    for(var i = 0; i < list.length; i++){
      if(document.getElementById('result' + i)){
        console.log(document.getElementById('result' + i).value);
        userData.push(document.getElementById('result' + i).value);
      }
    }
  return false;
  }

  return this;

}





