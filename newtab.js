let text = document.getElementsByTagName('h1')[0]
let splitted = text.textContent.split('')
let slicedText = splitted.slice(8,24);
text.innerHTML = '';
for(let i = 0; i<slicedText.length; i++){
    text.innerHTML += "<span>"+slicedText[i]+"</span>";
}
let interval = setInterval(loopt,50)     

let char = 0;
let spans = document.getElementsByTagName('span')
function loopt(){
   spans[char].classList.add('anim');
   char++;
   if(char == slicedText.length){
       return clearInterval(interval)
   }
}                    //    dealing with time by this time

let timeArea = document.querySelector('.time')
let div2 = document.querySelector('#time2')
let dates = document.querySelector('#dates')
let time,date,hoursAndMinutes,seconds

setInterval(timeGiver,1000)
function timeGiver(){
    time = new Date()
    date = time.toString().slice(0,16).split(' ').join(' ');
    hoursAndMinutes = time.toString().slice(16,21);
    seconds = time.toString().slice(22,24);
    div2.innerHTML = "<div>"+"<h1>"+hoursAndMinutes+"</h1>"+"</div>";
    div2.innerHTML += "<div>"+seconds+"</div>";
    dates.innerHTML = date;
}


                            //     Now dealing with MOUSE OUT ON THE SIDEBAR


 let sidebar = document.getElementsByClassName('side-bar')[0];
 let innercontainer = document.querySelector('.inner-container')

 sidebar.addEventListener('mouseleave', ()=>{
     innercontainer.style.transition = '1s ease-in-out';
     sidebar.style.transition = '1s ease-in-out';
 })
 

                                    //   Now dealing with the mouse out on the timediv

timeArea.addEventListener('mouseleave',()=>{
    div2.style.transition = '1s ease-in-out';
    timeArea.style.transition = '1s ease-in-out';
    dates.style.transition = '1s ease-in-out';
    div2.getElementsByTagName('div')[0].style.transition = '1s ease-in-out'
    div2.getElementsByTagName('div')[1].style.transition = '1s ease-in-out'
})                                    

                                    //   Now dealing with the border animation;

let border = document.getElementById('border')   
let search = document.querySelector('#search')

search.addEventListener('click',()=>{
    border.style.opacity = '1'
    border.style.animation = 'transBorder 1s ease'
})
search.addEventListener('mouseout',()=>{
    border.style.opacity = '0'
    border.style.animation = 'transBorderR 1s ease'
    border.style.transition = '1s ease';
})

                                            //   Now dealing with the search place

let url = 'https://www.google.com/search?q='

let button = document.querySelector('button')

const searchG = ()=>{
    if(search.value != ''){
        location.href = url+search.value
    }else{
        alert('Can\'t search empty term')
    }

}

button.addEventListener('click',()=>{
     searchG()
})

document.addEventListener('keypress',(event)=>{
    if(event.key === 'Enter'){
            searchG()
        }
})

                //    now dealing with the icons

let facebook = document.querySelector('#facebook')
let awesome = document.querySelector('#awesome')
let linkedin = document.querySelector('#linkedin')
let youtube = document.querySelector('#youtube')
let slack = document.querySelector('#slack')
let download = document.querySelector('#y2mate')
let github = document.querySelector('#github')



let iconsArray = [
    {'name': facebook,'url' :'http://www.facebook.com'},
    {'name': awesome,'url' :'https://fontawesome.com/'},
    {'name': linkedin,'url' :'http://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin'},
    {'name': youtube,'url' :'http://www.youtube.com'},
    {'name': slack,'url' :'https://app.slack.com/client/TG3A11QGL/G01J09VSTCK'},
    {'name': download,'url' :'https://www.y2mate.com/en278'},
    {'name': github,'url' :'http://github.com'},
];

iconsArray.forEach(e => {
    e.name.addEventListener('click',()=>{
        location.href = e.url
       })
    })



                                            //  Now dealing with the images

const images = [
    './Wallpapers/newtab5.jpg',
    './Wallpapers/newtab6.webp',
    './Wallpapers/newtab7.jpg',
    './Wallpapers/newtab8.webp',
] 

let answer;
let cover = document.getElementById('cover')

function imageChanger(){
    answer = images[Math.floor(Math.random()*images.length)]
    cover.style.backgroundImage = `url(${answer})`;
    cover.style.transition = '2s ease-in-out'
}

let intervaledImg = setInterval(imageChanger,96000)