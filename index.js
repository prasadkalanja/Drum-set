
//Detecting button press
var numberOfDrumButton=document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButton; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){
var buttonInnerHTML = this.innerHTML;
makeSound(buttonInnerHTML)

  })
}

//Detecting keyboard press
document.addEventListener("keypress", function(event){
makeSound(event.key)
})

function makeSound(key){
  switch (key) {
    case "w":
    var tum1=new Audio("sound/tom1.mp3");
    tum1.play();
      break;
      case "a":
      var tum2=new Audio("sound/tom2.mp3");
      tum2.play();
      break;
      case "s":
      var tum3=new Audio("sound/tom3.mp3");
      tum3.play();
        break;
        case "d":
        var tum4=new Audio("sound/tom4.mp3");
        tum4.play();
          break;
          case "j":
          var tum5=new Audio("sound/tom5.mp3");
          tum5.play();
            break;
            case "k":
            var tum6=new Audio("sound/cymbal-k.mp3");
            tum6.play();
              break;
              case "l":
              var tum7=new Audio("sound/snare-l.mp3");
              tum7.play();
                break;
    default:console.log(buttonInnerHTML);

  }
}
