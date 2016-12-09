import '../css/app.scss';
import $ from "jquery";

$('.bid-view').hide()

const newLeaderTemplate = (name, nepo, corrup, wrights, gayrights, violence) => {
  return (`<li>
              <h3>${name}</h3>
              <p>Stats:</p>
              Nepotism: <input type='range' min='0' max='10' step='1' value='${nepo}'/><span class='slider-value'></span>
              Corruption: <input type='range' min='0' max='10' step='1' value='${corrup}'/><span class='slider-value'></span>
              Women's Rights: <input type='range' min='0' max='10' step='1' value='${wrights}'/><span class='slider-value'></span>
              LGBTQ Rights: <input type='range' min='0' max='10' step='1' value='${gayrights}'/><span class='slider-value'></span>
              Violence: <input type='range' min='0' max='10' step='1' value='${violence}'/><span class='slider-value'></span>
              <button class='bid-button'>Bid on this leader!</button>
            </li>`)
}

$('.submit-leader').on('click', function(){
  let name = $('.name').val();
  let nepo = $('.nepotism').val();
  let corrup = $('.corruption').val();
  let gayrights = $('.lgbt-rights').val();
  let women = $('.w-rights').val();
  let violence = $('.violence').val();
  $('.leaders-list').prepend(newLeaderTemplate(name, nepo, corrup, women, gayrights, violence))
})

$('.submit-bid').on('click', function(){
  alert('Your bid has been submitted!');
})

$('.leaders-list').on('click', 'button', function(e){
  e.preventDefault();
  $('.bid-view').slideToggle();
})
