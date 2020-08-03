


function main(){
console.log('hello world');
$('#js-form').submit(event => {
  event.preventDefault();
  const name = $('#name-entry').val();  
  $('.results').html(`It's so nice to meet you, ${name}!`);
})

}

$(main)