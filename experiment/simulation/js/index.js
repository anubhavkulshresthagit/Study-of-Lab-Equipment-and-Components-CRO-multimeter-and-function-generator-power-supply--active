
// ------------------------------Active and assive components -------------------------------------------


console.log("running");
var x;
var y;
////////////////////////////show information///////////////////////////////////
const backDiv = document.querySelector('.backGround');
//const TotDiv = document.querySelectorAll('div');

  document.querySelector('.left-strip').addEventListener('mouseenter',function(e){
      console.log("left mouse enter");
      const divCords =  document.querySelector('.left-strip').getBoundingClientRect();
      backDiv.classList.add('open');
      backDiv.innerHTML = "<h4>Bus-strips:</h4>Each bus strip has two rows of contacts. Each of the two rows of contacts are a node. That is, each contact along a row on a bus strip is connected together (inside the breadboard). Bus strips are used primarily for power supply connections, but are also used for any node requiring a large number of connections. ";
      //const x=e.clientX + window.scrollX;
      //const y=e.clientY + window.scrollY;
       x=e.pageX;
       y=e.pageY;
      console.log(x ,y);
       if(y>560)
       {y-=100;}
       if(x>1050)
        {x-=150;}
      backDiv.style.setProperty('transform',`translate(${x+44}px , ${y - 720}px )`);
  });

  document.querySelector('.left-strip').addEventListener('mouseleave',function(){
        backDiv.classList.remove('open');
  });

  document.querySelector('.right-strip').addEventListener('mouseenter',function(e){
      const divCords =  document.querySelector('.right-strip').getBoundingClientRect();
      backDiv.classList.add('open');
      backDiv.innerHTML = "<h4>Bus-strips:</h4>Each bus strip has two rows of contacts. Each of the two rows of contacts are a node. That is, each contact along a row on a bus strip is connected together (inside the breadboard). Bus strips are used primarily for power supply connections, but are also used for any node requiring a large number of connections. ";
      //const x=e.clientX + window.scrollX;
      //const y=e.clientY + window.scrollY;
      x=e.pageX;
      y=e.pageY;
      console.log(x ,y);
       if(y>590)
       {y-=100;}
       if(x>1050)
        {x-=150;}
      backDiv.style.setProperty('transform',`translate(${x-140}px , ${y - 720}px )`);
  });

  document.querySelector('.right-strip').addEventListener('mouseleave',function(){
        backDiv.classList.remove('open');
  });

  document.querySelector('.right-band').addEventListener('mouseenter',function(e){
      const divCords =  document.querySelector('.right-band').getBoundingClientRect();
      backDiv.classList.add('open');
      backDiv.innerHTML = "<h4>Terminal-strips:</h4> Each terminal strip has 60 rows and 5 columns of contacts on each side of the center gap. Each row of 5 contacts is a node. ";
      //const x=e.clientX + window.scrollX;
      //const y=e.clientY + window.scrollY;
      x=e.pageX;
      y=e.pageY;
      console.log(x ,y);
       if(y>590)
       {y-=100;}
       if(x>1050)
        {x-=150;}
      backDiv.style.setProperty('transform',`translate(${x-130}px , ${y - 720}px )`);
  });

  document.querySelector('.right-band').addEventListener('mouseleave',function(){
        backDiv.classList.remove('open');
  });


  document.querySelector('.left-band').addEventListener('mouseenter',function(e){
      const divCords =  document.querySelector('.left-band').getBoundingClientRect();
      backDiv.classList.add('open');
      backDiv.innerHTML = "<h4>Terminal-strips:</h4> Each terminal strip has 60 rows and 5 columns of contacts on each side of the center gap. Each row of 5 contacts is a node. ";
      //const x=e.clientX + window.scrollX;
      //const y=e.clientY + window.scrollY;
       x=e.pageX;
       y=e.pageY;
      console.log(x ,y);
       if(y>560)
       {y-=100;}
       if(x>1050)
        {x-=150;}
      backDiv.style.setProperty('transform',`translate(${x+44}px , ${y - 720}px )`);
  });

  document.querySelector('.left-band').addEventListener('mouseleave',function(){
        backDiv.classList.remove('open');
  });

  document.querySelector('.battery').addEventListener('mouseenter',function(e){
      const divCords =  document.querySelector('.battery').getBoundingClientRect();
      backDiv.classList.add('open');
      backDiv.innerHTML = "<h4>battery:</h4>Positive side connected along red side and negative side connected along black side.";
      //const x=e.clientX + window.scrollX;
      //const y=e.clientY + window.scrollY;
       x=e.pageX;
       y=e.pageY;
      console.log(x ,y);
       if(y>560)
       {y-=100;}
       if(x>1050)
        {x-=150;}
      backDiv.style.setProperty('transform',`translate(${x}px , ${y - 725}px )`);
  });

  document.querySelector('.battery').addEventListener('mouseleave',function(){
        backDiv.classList.remove('open');
  });

  document.querySelector('.switch').addEventListener('mouseenter',function(e){
      const divCords =  document.querySelector('.switch').getBoundingClientRect();
      backDiv.classList.add('open');
      backDiv.innerHTML = "<h4>switch:</h4>";
      //const x=e.clientX + window.scrollX;
      //const y=e.clientY + window.scrollY;
       x=e.pageX;
       y=e.pageY;
      console.log(x ,y);
       if(y>560)
       {y-=100;}
       if(x>1050)
        {x-=150;}
      backDiv.style.setProperty('transform',`translate(${x}px , ${y - 725}px )`);
  });

  document.querySelector('.switch').addEventListener('mouseleave',function(){
        backDiv.classList.remove('open');
  });

  document.querySelector('.bulbs').addEventListener('mouseenter',function(e){
      const divCords =  document.querySelector('.bulbs').getBoundingClientRect();
      backDiv.classList.add('open');
      backDiv.innerHTML = "<h4>LED</h4>";
      //const x=e.clientX + window.scrollX;
      //const y=e.clientY + window.scrollY;
       x=e.pageX;
       y=e.pageY;
      console.log(x ,y);
       if(y>560)
       {y-=100;}
       if(x>1050)
        {x-=150;}
      backDiv.style.setProperty('transform',`translate(${x}px , ${y - 725}px )`);
  });

  document.querySelector('.bulbs').addEventListener('mouseleave',function(){
        backDiv.classList.remove('open');
  });


  document.querySelector('.resistor').addEventListener('mouseenter',function(e){
      const divCords =  document.querySelector('.resistor').getBoundingClientRect();
      backDiv.classList.add('open');
      backDiv.innerHTML = "<h4>Resistor:</h4> ";
      //const x=e.clientX + window.scrollX;
      //const y=e.clientY + window.scrollY;
       x=e.pageX;
       y=e.pageY;
      console.log(x ,y);
       if(y>560)
       {y-=100;}
       if(x>1050)
        {x-=150;}
      backDiv.style.setProperty('transform',`translate(${x}px , ${y - 725}px )`);
  });

  document.querySelector('.resistor').addEventListener('mouseleave',function(){
        backDiv.classList.remove('open');
  });







var image;
var i=0;
let txt="";
var j=0;
let txt1="";

function type(){
  if(i<txt.length){
    document.getElementById('regularDetail').innerHTML+=txt.charAt(i);
    i++;
    setTimeout(type,20);
  }
}

function type1(){
  if(j<txt1.length){
    document.getElementById('regularDetail1').innerHTML+=txt1.charAt(j);
    j++;
    setTimeout(type1,20);
  }
}


function led() {

	document.getElementById('upperImage').src =  "images/ledpinon.png";
    document.getElementById('regularDetail').innerHTML="";
  i=0;
  txt="LED shall be an active component as it requires a minimum voltage across its terminals to function. All diodes are bipolar devices which allow current flow in only one direction.";
   type();
}

function battery() {

   document.getElementById('upperImage').src =  "images/batteryicon.png";
   document.getElementById('regularDetail').innerHTML="";
   i=0;
   txt="Battery can be considered as an active element, as it continuously delivers energy to the circuit during discharging."
   type();
}

function typeWriter2() {
  console.log("study");
   document.getElementById('upperImage').src =  "images/active.png";
   document.getElementById('regularDetail').innerHTML="";
   i=0;
   txt="Active components are devices that can amplify an electric signal and produce power. Any characteristic active component will comprise an oscillator, transistor or an integrated circuit. ";
   type();
}



function diode() {
   document.getElementById('upperImage').src =  "images/diodepin.png";
   document.getElementById('regularDetail').innerHTML="";
   i=0;
   txt= "A diode is a two terminal device having two electrodes, the anode and the cathode. ... In this case the diode will be active. ";
   type();
}

function transistor() {
   document.getElementById('upperImage').src =  "images/transistorpin2.png";
   document.getElementById('regularDetail').innerHTML="";
   i=0;
   txt =  "Transistor is an active element because it requires external DC source to operate or it turns on and do certain operations with input signal only if it is connected with that DC source. ";
  type();
}

function integrated() {
   document.getElementById('upperImage').src =  "images/integratedpin.png";
   document.getElementById('regularDetail').innerHTML="";
   i=0;
   txt="Integrated circuits are supposed as an active components because IC is small chip that can function as an amplifier, oscillator, timer. They are able to manipulate the flow of electricity in some way. ";
  type();
}

// next tab


function typeWriter1() {
	document.getElementById('upperImage1').src =  "images/passive.png";
  document.getElementById('regularDetail1').innerHTML="";
  j=0;
  txt1 =  " Passive component is an electronic component which can only receive energy, which it can either dissipate, absorb or store it in an electric field or a magnetic field.  ";
  type1();
}

function resistor() {
	document.getElementById('upperImage1').src =  "images/circuit.png";
  document.getElementById('regularDetail1').innerHTML="";
  j=0;
  txt1=  "A resistor is taken as a passive element since it can not deliver any energy to a circuit. Instead resistors can only receive energy which they can dissipate as heat as long as current flows through it. ";
  type1();
}


function capacitor() {
	document.getElementById('upperImage1').src =  "images/capacitorCircuit.png";
  document.getElementById('regularDetail1').innerHTML="";
  j=0;
  txt1 =  "A capacitor is considered as a passive element because it can store energy in it as electricfield. As such it is not considered an active component since no energy is being supplied or amplified. ";
  type1();
}

function inductor() {
	document.getElementById('upperImage1').src =  "images/inductorCircuit.png";
  document.getElementById('regularDetail1').innerHTML="";
  j=0;
  txt1=  "An inductor is considered as passive element, because it can store energy in it as a magnetic field, and can deliver that energy to the circuit, but not in continuous basis.";
  type1();
}

function switchpin() {
	document.getElementById('upperImage1').src =  "images/switchicon.png";
  document.getElementById('regularDetail1').innerHTML="";
  j=0;
  txt1=  "A switch would be considered an electromechanical device. Switches are passive since they do not require an external power source to cause change in the flow of energy.";
  type1();
}


function thermister() {
	document.getElementById('upperImage1').src =  "images/thermicon.png";
  document.getElementById('regularDetail1').innerHTML="";
  j=0;
  txt1 =  "A thermistor is an passive type of a sensor, that is, it requires an excitation signal, any changes in its resistance as a result of changes in temperature can be converted into a voltage change.";
  type1();
}








//////////////////////////////////////       CRO       //////////////////////////////////////////////////////////





console.log('anubhav');


var amp;
var fre;
var amp1;
var fre2;
var state;
var p=100;    // period
var o=150;   // oscillation

var amp2 = 100;
var bin;
var bin2;

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');



canvas.width = innerWidth;
canvas.height= innerHeight;


// triangle sine	
var can;
function triY(x){
    return(((Math.abs((10*fre*(x++) % amp2) - amp2/2)) * amp/20) + (200 - can));
}

// squared sine
var xan;
function squareY(x) {
     return( (((10*(fre/2)*x++)%p)<p/2?p/2+2*amp:0) + 200 - 12*(xan%10)  );
}



var click=0;

function sinClick() {
	document.getElementById('sinClick').style.border = "4px solid blue";
	document.getElementById('squareClick').style.border = "none";
	document.getElementById('triangleClick').style.border = "none";
	click = 1;
}

function squareClick() {
	document.getElementById('squareClick').style.border = "4px solid blue";
	document.getElementById('sinClick').style.border = "none";
	document.getElementById('triangleClick').style.border = "none";	
	click = 2;
}

function triangleClick() {
	document.getElementById('triangleClick').style.border = "4px solid blue";
	document.getElementById('sinClick').style.border = "none";
	document.getElementById('squareClick').style.border = "none";
	click = 3;
}





function myFunction() {
  if(state == 2 && (click == 1 || click == 2 || click == 3 )) {

       

if(click == 1) {
	
 amp = document.getElementById('Amplitude').value *10;
 fre = document.getElementById('Frequency').value /100;
 


 console.log(amp);
 console.log(fre);

 c.beginPath();
 c.moveTo(0, canvas.height / 2);
 for (let i=0 ;i<canvas.width; i++) {
    c.lineTo(i, canvas.height/2 + Math.sin(i*fre) * amp)
    c.stroke();
    c.strokeStyle = "#33cc33";
 }


 
}

else if(click == 2) {
	
amp = document.getElementById('Amplitude').value*10;
fre = document.getElementById('Frequency').value/100;
xan = amp - 150;

 console.log(amp);
 console.log(fre);
    
c.beginPath();
c.moveTo(0, canvas.height / 2);
for(var x=0;x<canvas.width;x++){
    var y=squareY(x);
   // just offsetting so drawings don't overlap
    c.lineTo(x,y);
    c.stroke();
    c.strokeStyle = "#33cc33";
}





}



else if(click == 3) {
	

amp = document.getElementById('Amplitude').value*10;
fre = document.getElementById('Frequency').value/100;
can = amp -150;

console.log(amp);
console.log(fre);
console.log(can);
    
c.beginPath();
for(var x=0;x<canvas.width;x++){
    var y=triY(x);
        // just offsetting so drawings don't overlap
    c.lineTo(x,y);
    c.stroke();
    c.strokeStyle = "#33cc33";
    

}

}
  
 
 document.getElementById('go').style.display = "none";
 document.getElementById('reload').style.display = "block";

  }

else {
    if(state!=2 && (click==1 || click==2 || click==3))
	alert("Please turn on the function generator.");
	else
	{
	if(click==0 && state==2)
	alert("please select the type of wave.")
	else{
	if(state!=0 && click==0)
	alert("please turn on the function generator and select type of wave.")
	}
	}
}

}


	





//For making Graph :-
	

// turn on and off function generator

function changeImage() {

  document.getElementById('go').style.display = "block";
  document.getElementById('reload').style.display = "none";
  
  var image = document.getElementById('onOff');
  if (image.src.match("bulbon")) {
    image.src = "images/pic_bulboff.png";
    image.style.transform = "rotate(0deg)";
    state = 1;
    document.getElementById("canvas").style.backgroundColor = "black";
    c.beginPath();
    c.fillRect(0, 0, 1550, 1000);
    c.stroke();


  } else {

    image.src = "images/pic_bulbon.png";
    image.style.transform = "rotate(-8deg)";
    state = 2;

for (i = 0; i < 1534; i += 42) {
	 

    c.beginPath();
    c.moveTo(i,0);
    c.lineTo(i,800);
    c.stroke();
    c.strokeStyle = "#ff6666";
    
}

for (i = 0; i < 800; i += 43) {
	
    c.beginPath();
    c.moveTo(0,i);
    c.lineTo(1800,i);
    c.stroke();
    c.strokeStyle = "#ff6666";

}

for (i = 0; i < 1534; i += 29) {
	 

    c.beginPath();
    c.moveTo(754,0);
    c.lineTo(754,800);
    c.stroke();
    c.strokeStyle = "#ffffff";
    
}

for (i = 0; i < 1534; i += 25) {
	 

    c.beginPath();
    c.moveTo(0,385);
    c.lineTo(1600,385);
    c.stroke();
    c.strokeStyle = "#ffffff";
    
}

for (i = 0; i < 1534; i += 29) {
	 

    c.beginPath();
    c.moveTo(754,0);
    c.lineTo(754,800);
    c.stroke();
    c.strokeStyle = "#ffffff";
    
}

for (i = 0; i < 1534; i += 25) {
	 

    c.beginPath();
    c.moveTo(0,385);
    c.lineTo(1600,385);
    c.stroke();
    c.strokeStyle = "#ffffff";
    
}

  }
}


// value of sliders

var slider = document.getElementById("Amplitude");
var output = document.getElementById("demo1");
output.innerHTML = slider.value ;

slider.oninput = function() {
  output.innerHTML = this.value;
}


var slider2 = document.getElementById("Frequency");
var output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value;

slider2.oninput = function() {
  output2.innerHTML = this.value;
}


console.log(canvas.height);














  const backDiv1 = document.querySelector('.backGround1');
  const TotDiv = document.querySelectorAll('div');

    document.querySelector('.div1').addEventListener('mouseenter',function(e){
        const divCords =  document.querySelector('.div1').getBoundingClientRect();
        console.log(divCords);
        backDiv1.classList.add('open');
        backDiv1.innerHTML = "<h4> ON/OFF : </h4>This is required to turn the CRO on or off as per the requirement";
        backDiv1.style.setProperty('transform',`translate(${divCords.left + window.scrollX}px , ${divCords.top + window.scrollY}px)`);
        //backDiv.style.transform = "translate(1005px , 150px)";
        console.log(e);

    });

      document.querySelector('.div1').addEventListener('mouseleave',function(){
          backDiv1.classList.remove('open');
      });

      document.querySelector('.div2').addEventListener('mouseenter',function(e){
          const divCords =  document.querySelector('.div2').getBoundingClientRect();
          console.log(divCords);
          backDiv1.classList.add('open');
          backDiv1.innerHTML = "<h4> Channel Select :</h4>Mostly of the CRO can work simultaneously with two signals and thus there is a toggle switch for controls regarding the selection, ";
          backDiv1.style.setProperty('transform',`translate(${divCords.left + window.scrollX}px , ${divCords.top + window.scrollY}px)`);
          //backDiv1.style.transform = "translate(1005px , 150px)";
          console.log(e);

      });

        document.querySelector('.div2').addEventListener('mouseleave',function(){
            backDiv1.classList.remove('open');
        });

        document.querySelector('.div3').addEventListener('mouseenter',function(e){
            const divCords =  document.querySelector('.div3').getBoundingClientRect();
            console.log(divCords);
            backDiv1.classList.add('open');
            backDiv1.innerHTML = "<h4>Trigger Hold-Off: </h4>The trace in a CRO is performed by the sweeping of electrons for a small period of time on the phosphorous screen by the voltage generated due to the signal. This voltage is known as sweep voltage. When the ‘sweep’ is completed the voltage returns to its original value and thus forcing the beam of electrons to move back. This process is called ‘retrace’, when the retrace is completed again sweep starts. Hold-Off determines the time that tends to pass between ‘retrace’ and ‘sweep’.Initially it is 0  ";
            backDiv1.style.setProperty('transform',`translate(${divCords.left + window.scrollX}px , ${divCords.top + window.scrollY}px)`);
            //backDiv1.style.transform = "translate(1005px , 150px)";
            console.log(e);

        });

          document.querySelector('.div3').addEventListener('mouseleave',function(){
              backDiv1.classList.remove('open');
          });

          document.querySelector('.div4').addEventListener('mouseenter',function(e){
              const divCords =  document.querySelector('.div4').getBoundingClientRect();
              backDiv1.classList.add('open');
              backDiv1.innerHTML = "<h4>AC/DC/GD: </h4>This is a toggle switch to tell the CRO about the filtering of the i/p signal channel";
              backDiv1.style.setProperty('transform',`translate(${divCords.left + window.scrollX -330}px , ${divCords.top + window.scrollY}px)`);
          });

            document.querySelector('.div4').addEventListener('mouseleave',function(){
                backDiv1.classList.remove('open');
            });

            document.querySelector('.div5').addEventListener('mouseenter',function(e){
                const divCords =  document.querySelector('.div5').getBoundingClientRect();
                backDiv1.classList.add('open');
                backDiv1.innerHTML = "<h4>Focus: </h4>This rotating knob is used to improve the sharpness of an image of the signal on the screen by adjusting the focus of the electronic beam. Thus, it helps in taking the proper measurements and to study the correct shape of the signal by removing the blurriness of the signal";
                backDiv1.style.setProperty('transform',`translate(${divCords.left + window.scrollX}px , ${divCords.top + window.scrollY}px)`);
            });

          document.querySelector('.div5').addEventListener('mouseleave',function(){
                  backDiv1.classList.remove('open');
              });

        document.querySelector('.div6').addEventListener('mouseenter',function(e){
                  const divCords =  document.querySelector('.div6').getBoundingClientRect();
                  backDiv1.classList.add('open');
                  backDiv1.innerHTML = "<h4>Intensity:</h4> This knob is used to increase the intensity of the input signal for better examination of the displayed output on the screen . This knob is marked as ‘Intens’ on the CRO.";
                  backDiv1.style.setProperty('transform',`translate(${divCords.left + window.scrollX}px , ${divCords.top + window.scrollY}px)`);
              });

       document.querySelector('.div6').addEventListener('mouseleave',function(){
                    backDiv1.classList.remove('open');
                });


          document.querySelector('.div7').addEventListener('mouseenter',function(e){
                          const divCords =  document.querySelector('.div7').getBoundingClientRect();
                          backDiv1.classList.add('open');
                          backDiv1.innerHTML = "<h4>+/- :</h4>This determines if the signal is triggered during the positive flank or the negative flank. Now, the many of you must be wondering ‘what is triggering?’, it is the synchronization of the horizontal sweep of the CRO with the proper point of the signal. If the button is on descending slope of the signal is used while triggering otherwise the ascending slope of the signal is used.";
                          backDiv1.style.setProperty('transform',`translate(${divCords.left + window.scrollX -80}px , ${divCords.top + window.scrollY +20}px)`);
                      });

        document.querySelector('.div7').addEventListener('mouseleave',function(){
                            backDiv1.classList.remove('open');
                        });

        document.querySelector('.div8').addEventListener('mouseenter',function(e){
                         const divCords =  document.querySelector('.div8').getBoundingClientRect();
                         backDiv1.classList.add('open');
                        backDiv1.innerHTML = "<h4>At/Norm.:</h4> Using this button you can select between Automatic triggering (At.) and manual triggering level selection";
                         backDiv1.style.setProperty('transform',`translate(${divCords.left + window.scrollX -330}px , ${divCords.top + window.scrollY}px)`);
                    });

        document.querySelector('.div8').addEventListener('mouseleave',function(){
                              backDiv1.classList.remove('open');
                          });

        document.querySelector('.div9').addEventListener('mouseenter',function(e){
                const divCords =  document.querySelector('.div9').getBoundingClientRect();
                backDiv1.classList.add('open');
                backDiv1.innerHTML = "<h4>Level:</h4> When the triggering is set to manual mode this wheel is used to set the level of manual triggering, the +/- button will make sure ascending level triggering or descending level triggering is used";
               backDiv1.style.setProperty('transform',`translate(${divCords.left + window.scrollX - 330}px , ${divCords.top + window.scrollY}px)`);
                      });

        document.querySelector('.div9').addEventListener('mouseleave',function(){
                      backDiv1.classList.remove('open');
                });

        document.querySelector('.div10').addEventListener('mouseenter',function(e){
                const divCords =  document.querySelector('.div10').getBoundingClientRect();
                backDiv1.classList.add('open');
                backDiv1.innerHTML = "<h4>Ext.: </h4>This button is used when the timing of the CRO is not determined by the input waveform but from some another external waveform. There is an input connector beside the button where the external input is connected for the display of the waveform.";
                backDiv1.style.setProperty('transform',`translate(${divCords.left + window.scrollX - 330}px , ${divCords.top + window.scrollY}px)`);
                              });

        document.querySelector('.div10').addEventListener('mouseleave',function(){
                backDiv1.classList.remove('open');
                });

        document.querySelector('.div11').addEventListener('mouseenter',function(e){
                const divCords =  document.querySelector('.div11').getBoundingClientRect();
                backDiv1.classList.add('open');
                backDiv1.innerHTML = "<h4>The “Time/Div.”</h4> wheel determines, how long the electronic beam that draws the curve takes for moving from the left to the right edge of a division. The wheel controls the “time scale”. A “division” is one square on the screen of the oscilloscope.";
                backDiv1.style.setProperty('transform',`translate(${divCords.left + window.scrollX -330}px , ${divCords.top + window.scrollY + 30}px)`);
                        });

        document.querySelector('.div11').addEventListener('mouseleave',function(){
                backDiv1.classList.remove('open');
                });








//////////////////////////////////////// Mutlimeter ////////////////////////////////////////////






console.log('hello');

const redpin = document.querySelector('.redpin');
const blackpin = document.querySelector('.blackpin');

const redpinDrages = document.getElementsByClassName('redpinDrag');
const blackpinDrages = document.getElementsByClassName('blackpinDrag');

let one=0;
let two=0;
let three=0;
let five=0;
let six=0;
let four=0;
var check;




// window.onload=typeWriter;
// Redpin drag

function back(){

  if(three==1 && four==1){
    let child = document.getElementsByClassName('blackpin')[0];
		//document.getElementsByClassName('blackpinDrag').innerHTML='';
    document.getElementById('black').appendChild(child);
    document.getElementById('screenText').style.color = "#8a9e61";
    console.log(child);
		three=0;
    six=0;
    four=0;
    typeWriter(3);
    typeWriter(4);
    
	}

  else if(three==1)
  {
    let child = document.getElementsByClassName('blackpin')[0];
		//document.getElementsByClassName('blackpinDrag').innerHTML='';
    document.getElementById('black').appendChild(child);
    document.getElementById('screenText').style.color = "#8a9e61";
    console.log(child);
		three=0;
    six=0;
    typeWriter(3);
    
  }



  else if(six==1 && four==1)
  {
    document.getElementById('screenText').style.color = "#8a9e61";
    document.getElementById('blackRemove').src ='images/blackpin.png';
   
    document.getElementById('blackRemove').style.height = "320px";
    document.getElementById('blackRemove').style.width ="80px";
    document.getElementById('phoneBlack').src = "";
    document.getElementById('phoneBlack').style.height = "0px";
    document.getElementById('phoneBlack').style.width ="0px";
    document.getElementById('phoneBlack').style.marginTop = "0px";
    document.getElementById('phoneBlack').style.marginLeft = "0px";
    console.log('donejsa');
     six=0;
     three=0;
     four=0;
     typeWriter(3);
     typeWriter(4);

  }

  else if(six==1)
  {
    document.getElementById('screenText').style.color = "#8a9e61";
    document.getElementById('blackRemove').src ='images/blackpin.png';
   
    document.getElementById('blackRemove').style.height = "320px";
    document.getElementById('blackRemove').style.width ="80px";
    document.getElementById('phoneBlack').src = "";
    document.getElementById('phoneBlack').style.height = "0px";
    document.getElementById('phoneBlack').style.width ="0px";
    document.getElementById('phoneBlack').style.marginTop = "0px";
    document.getElementById('phoneBlack').style.marginLeft = "0px";
    console.log('donejsa');
     six=0;
     three=0;
     typeWriter(3);
     

  }


  else if(two==1){
    let child = document.getElementsByClassName('redpin')[0];
		//document.getElementsByClassName('redpinDrag').innerHTML='';
    document.getElementById('red').appendChild(child);
    console.log(child);
		two=0;
    typeWriter(2);
	}

 



  else if(five==1)
  {
    console.log('ready to back');
    document.getElementById('redRemove').src ='images/redpin.png';
    
    document.getElementById('redRemove').style.height = "320px";
    document.getElementById('redRemove').style.width ="80px";
    document.getElementById('phoneRed').src = "";
    document.getElementById('phoneRed').style.height = "0px";
    document.getElementById('phoneRed').style.width ="0px";
    document.getElementById('phoneRed').style.marginTop = "0px";
    document.getElementById('phoneRed').style.marginLeft = "0px";
    console.log('donejsa');
     five=0;
     typeWriter(2);
  }


	else if(one==1){
		document.getElementById('myimg').src ="";
    console.log('imageselect');
  document.getElementById('instruction1').classList.remove('active1');
  
	//	document.getElementById('instruction').innerHTML ="";
		one=0;
	 }

  
}

redpin.addEventListener('dragstart', (e)=>{

	var k = document.getElementById('myimg');

	if(k.getAttribute('src')==""){
		console.log("1");
		alert("FIRST SELECT THE IMAGE");
	}else{

	console.log('drag start');
	e.target.className += ' hold';
	setTimeout(() => {
	   e.target.className = 'hide';

	}, 0);
}
})

redpin.addEventListener('dragend', (e)=>{
	console.log('drag end');
	e.target.className = 'redpin';
})

for (redpinDrag of redpinDrages){
	redpinDrag.addEventListener('dragover', (e)=>{
	  e.preventDefault();

	});

	redpinDrag.addEventListener('dragenter', ()=>{

	});

	redpinDrag.addEventListener('dragleave', ()=>{

	});

	redpinDrag.addEventListener('drop', (e)=>{
		  two=1;
    	e.target.append(redpin);
			typeWriter(2);
			setTimeout(typeWriter,90);
		});
}


// for mobile view

function redclick()
{
  var k = document.getElementById('myimg');

	if(k.getAttribute('src')==""){
		console.log("1");
		alert("FIRST SELECT THE IMAGE");
	}else{
    console.log('yes');

	document.getElementById('phoneRed').src ='images/redpin.png';
  document.getElementById('phoneRed').style.height = "320px";
  document.getElementById('phoneRed').style.width ="80px";
  document.getElementById('phoneRed').style.marginTop = "-270px";
  document.getElementById('phoneRed').style.marginLeft = "90px";
  document.getElementById("redRemove").src="";
  document.getElementById('redRemove').style.height = "0px";
  document.getElementById('redRemove').style.width ="0px";
  
  five=1;
  typeWriter(2);

	}
}




// blackpin drag

blackpin.addEventListener('dragstart', (e)=>{

	var k = document.getElementById('myimg');

	if(k.getAttribute('src')==""){
		console.log("1");
		alert("FIRST SELECT THE IMAGE");
	}else if(two==1 || five==1){
    e.target.className += ' hold';

	setTimeout(() => {
	   e.target.className = 'hide';
   }, 0);
			
	}else{
    alert("FIRST DRAG THE RED PIN");
 }
});

blackpin.addEventListener('dragend', (e)=>{
	console.log('drag end');
	e.target.className = 'blackpin';
});

for (blackpinDrag of blackpinDrages){
	blackpinDrag.addEventListener('dragover', (e)=>{
	e.preventDefault();

	});

	blackpinDrag.addEventListener('dragenter', ()=>{

	});

	blackpinDrag.addEventListener('dragleave', ()=>{

	});

	blackpinDrag.addEventListener('drop', (e)=>{
    three=1;

    if(two==1 || five==1 ){
      e.target.append(blackpin);
      typeWriter(3);
      
    }else{
 	   three=0;
       alert("Join the Redpin to POSITIVE SIDE");
 }
    });
}


// black pin for mobile view

function blackclick()
{
  var k = document.getElementById('myimg');

	if(k.getAttribute('src')==""){
		console.log("1");
		alert("FIRST SELECT THE IMAGE");
	}else
  {
    if(five==1 || two==1)
    {
      document.getElementById('phoneBlack').src ='images/blackpin.png';
      document.getElementById('phoneBlack').style.width = "80px";
      document.getElementById('phoneBlack').style.height = "320px";
      document.getElementById('phoneBlack').style.marginTop = "-270px";
      document.getElementById('phoneBlack').style.marginLeft = "-10px";
      document.getElementById('blackRemove').src="";
      document.getElementById('blackRemove').style.height = "0px";
      document.getElementById('blackRemove').style.width ="0px";
      typeWriter(3);
     
      six=1;
    }
    else
    {
      alert("FIRST DRAG RED PIN TO POSITIVE SIDE");
    }
    
  }
}




//text function
var i=0;
//var text="SELECT ANY IMAGE TO START";
function typeWriter(k){
    if(k==1)
		    document.getElementById('instruction1').classList.add('active1');
     else if(k==2)
        document.getElementById('instruction2').classList.toggle('active1');
    else if(k==3)
        document.getElementById('instruction3').classList.toggle('active1');
    else if(k==4)
        document.getElementById('instruction4').classList.toggle('active1');  

}

function drags1() {
	one=1;
	check=1;
	document.getElementById('myimg').src ='images/battery.png';
  rotate(1);
	typeWriter(1);
}


function drags2() {
	one=1;
	document.getElementById('myimg').src ='images/resistor.png';
	check=2;
  rotate(2);
	typeWriter(1);
}

function drags3() {
		one=1;
	document.getElementById('myimg').src ='images/npn.png';
	check=3;
	typeWriter(1);
}

function drags4() {
		one=1;
	document.getElementById('myimg').src ='images/diode.png';
	check=4;
	typeWriter(1);
}

function drags5() {
	one=1;
	document.getElementById('myimg').src ='images/trans.png';
	check=5;
	typeWriter(1);
}

function drags6() {
		one=1;
	document.getElementById('myimg').src ='images/Resistor (3).png';
	check=6;
	typeWriter(1);
}


function drags7() {
		one=1;
	document.getElementById('myimg').src ='images/capacitor.png';
	check=7;
	typeWriter(1);
}

function drags8() {
		one=1;
	document.getElementById('myimg').src ='images/battery.png';
	check=8;
	typeWriter(1);
}

function drags9() {
		one=1;
	document.getElementById('myimg').src ='images/battery.png';
	check=9;
	typeWriter(1);
}

function drags10() {
		one=1;
	document.getElementById('myimg').src ='images/battery.png';
	check=10;
	typeWriter(1);
}

function drags11() {
		one=1;
	document.getElementById('myimg').src ='images/battery.png';
	check=11;
	typeWriter(1);
}



function rotate(k){
  if(k==1)
    vdash();
  else if(k==2)
    ohm1();
}

// Nob rotate

function off() {

	var img = document.getElementById("circle");
	img.setAttribute("class", "off-rotate");
}

function V() {

	var img = document.getElementById("circle");
	img.setAttribute("class", "V-rotate");
}

function A() {

	var img = document.getElementById("circle");
	img.setAttribute("class", "A-rotate");
}

function temp() {

	var img = document.getElementById("circle");
	img.setAttribute("class", "temp-rotate");
}

function wi() {

	var img = document.getElementById("circle");
	img.setAttribute("class", "wi-rotate");
}


function ohm() {

	var img = document.getElementById("circle");
	img.setAttribute("class", "ohm-rotate");
}

function ohm1() {

	var img = document.getElementById("circle");
	img.setAttribute("class", "ohm1-rotate");
}

function vdash() {

	var img = document.getElementById("circle");
	img.setAttribute("class", "vdash-rotate");
}

function vdash1() {

	var img = document.getElementById("circle");
	img.setAttribute("class", "vdash1-rotate");
}

function vdash2() {

	var img = document.getElementById("circle");
	img.setAttribute("class", "vdash2-rotate");
}


function proceed() {
    if(six==1){
    var text =  document.getElementById('screenText');
    console.log(check);
    if(check==1) {
      text.innerHTML = '1.5V';
	  text.style.textAlign = "center";
	  text.style.fontSize = "xxx-large";
	  text.style.color = "black";
	  text.style.fontFamily = "Orbitron, sans-serif";
    }
    else if(check==2) {
      text.innerHTML = '4.5K Ω';
	  text.style.textAlign = "center";
	  text.style.fontSize = "xxx-large";
	  text.style.color = "black";
    text.style.fontFamily = "Orbitron, sans-serif";
    }
    else if(check==3) {
      text.innerHTML = '685';
	  text.style.textAlign = "center";
	  text.style.fontSize = "xxx-large";
	  text.style.color = "black";
    text.style.fontFamily = "Orbitron, sans-serif";
    }
    else if(check==4) {
      text.innerHTML = '4.5V';
	  text.style.textAlign = "center";
	  text.style.fontSize = "xxx-large";
	  text.style.color = "black";
	  text.style.fontFamily = "Orbitron, sans-serif";
    }
    else if(check==5) {
      text.innerHTML = '460';
	  text.style.textAlign = "center";
	  text.style.fontSize = "xxx-large";
	  text.style.color = "black";
	  text.style.fontFamily = "Orbitron, sans-serif";
    }
    else if(check==6) {
      text.innerHTML = '4.6K Ω';
	  text.style.textAlign = "center";
	  text.style.fontSize = "xxx-large";
	  text.style.color = "black";
    text.style.fontFamily = "Orbitron, sans-serif";
    }
    else if(check==7) {
      text.innerHTML = '2 µF';
	  text.style.textAlign = "center";
	  text.style.fontSize = "xxx-large";
	  text.style.color = "black";
    text.style.fontFamily = "Orbitron, sans-serif";
    }
    else if(check==8) {
      text.innerHTML = '8.5V';
	  text.style.textAlign = "center";
	  text.style.fontSize = "xxx-large";
	  text.style.color = "black";
	  text.style.fontFamily = "Orbitron, sans-serif";
    }
    else if(check==9) {
      text.innerHTML = '9.5V';
	  text.style.textAlign = "center";
	  text.style.fontSize = "xxx-large";
	  text.style.color = "black";
	  text.style.fontFamily = "Orbitron, sans-serif";
    }
    else if(check==10) {
      text.innerHTML = '10.5V';
	  text.style.textAlign = "center";
	  text.style.fontSize = "xxx-large";
	  text.style.color = "black";
    text.style.fontFamily = "Orbitron, sans-serif";
    }
    else if(check==11) {
      text.innerHTML = '11.5V';
	  text.style.textAlign = "center";
	  text.style.fontSize = "xxx-large";
	  text.style.color = "black";
    text.style.fontFamily = "Orbitron, sans-serif";
    }

    four=1;
    three=0;
    
    typeWriter(4);

    }
    else if(three==1){
      var text =  document.getElementById('screenText');
      console.log(check);
      if(check==1) {
        text.innerHTML = '1.5V';
      text.style.textAlign = "center";
      text.style.fontSize = "xxx-large";
      text.style.color = "black";
      text.style.fontFamily = "Orbitron, sans-serif";
      }
      else if(check==2) {
        text.innerHTML = '4.5K Ω';
      text.style.textAlign = "center";
      text.style.fontSize = "xxx-large";
      text.style.color = "black";
      text.style.fontFamily = "Orbitron, sans-serif";
      }
      else if(check==3) {
        text.innerHTML = '685';
      text.style.textAlign = "center";
      text.style.fontSize = "xxx-large";
      text.style.color = "black";
      text.style.fontFamily = "Orbitron, sans-serif";
      }
      else if(check==4) {
        text.innerHTML = '4.5V';
      text.style.textAlign = "center";
      text.style.fontSize = "xxx-large";
      text.style.color = "black";
      text.style.fontFamily = "Orbitron, sans-serif";
      }
      else if(check==5) {
        text.innerHTML = '460';
      text.style.textAlign = "center";
      text.style.fontSize = "xxx-large";
      text.style.color = "black";
      text.style.fontFamily = "Orbitron, sans-serif";
      }
      else if(check==6) {
        text.innerHTML = '4.6K Ω';
      text.style.textAlign = "center";
      text.style.fontSize = "xxx-large";
      text.style.color = "black";
      text.style.fontFamily = "Orbitron, sans-serif";
      }
      else if(check==7) {
        text.innerHTML = '2 µF';
      text.style.textAlign = "center";
      text.style.fontSize = "xxx-large";
      text.style.color = "black";
      text.style.fontFamily = "Orbitron, sans-serif";
      }
      else if(check==8) {
        text.innerHTML = '8.5V';
      text.style.textAlign = "center";
      text.style.fontSize = "xxx-large";
      text.style.color = "black";
      text.style.fontFamily = "Orbitron, sans-serif";
      }
      else if(check==9) {
        text.innerHTML = '9.5V';
      text.style.textAlign = "center";
      text.style.fontSize = "xxx-large";
      text.style.color = "black";
      text.style.fontFamily = "Orbitron, sans-serif";
      }
      else if(check==10) {
        text.innerHTML = '10.5V';
      text.style.textAlign = "center";
      text.style.fontSize = "xxx-large";
      text.style.color = "black";
      text.style.fontFamily = "Orbitron, sans-serif";
      }
      else if(check==11) {
        text.innerHTML = '11.5V';
      text.style.textAlign = "center";
      text.style.fontSize = "xxx-large";
      text.style.color = "black";
      text.style.fontFamily = "Orbitron, sans-serif";
      }
  
      four=1;
      six=1;
      
      typeWriter(4);
  
      }
    else
    alert("Go with  the instruction");



}







//////////////  active and passive working ///////////////////

function sim3() {
    document.getElementById("sim3").style.width = "100%";
    document.getElementById("sim3").style.height = "100vh";
    document.getElementById("sim3").style.display = "inline";
    document.getElementById("sim3").style.position = "absolute";
    document.getElementById("sim3").style.top = "0";
    document.getElementById("sim3").style.left = "0";

    
}
    
function sim3normal() {

    document.getElementById("sim3").style.position = "static";
    document.getElementById("sim3").style.width = "0%";
    document.getElementById("sim3").style.height = "0%";
    document.getElementById("sim3").style.display = "none";   


}

//////////    CRO  //////////////////////////////////

function sim2() {
    document.getElementById("sim2").style.width = "100%";
    document.getElementById("sim2").style.height = "100vh";
    document.getElementById("sim2").style.display = "inline";
    document.getElementById("sim2").style.position = "absolute";
    document.getElementById("sim2").style.top = "0";
    document.getElementById("sim2").style.left = "0";

    
}
    
function sim2normal() {

    document.getElementById("sim2").style.position = "static";
    document.getElementById("sim2").style.width = "0%";
    document.getElementById("sim2").style.height = "0%";
    document.getElementById("sim2").style.display = "none";   


}


/////////////// Multimeter   //////////////////////////////////////////



function sim1() {
  document.getElementById("sim1").style.width = "100%";
  document.getElementById("sim1").style.height = "100vh";
  document.getElementById("sim1").style.display = "inline";
  document.getElementById("sim1").style.position = "absolute";
  document.getElementById("sim1").style.top = "0";
  document.getElementById("sim1").style.left = "0";

  
}
  
function sim1normal() {

  document.getElementById("sim1").style.position = "static";
  document.getElementById("sim1").style.width = "0%";
  document.getElementById("sim1").style.height = "0%";
  document.getElementById("sim1").style.display = "none";   


}


