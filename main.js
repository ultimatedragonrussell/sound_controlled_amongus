function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/lX2t2pi_1/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
         document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
          document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")"; 
          document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
         
          img1=document.getElementById('amongus1');
          img2=document.getElementById('amongus2');
          img3=document.getElementById('amongus3');
          img4=document.getElementById('amongus4');

          if(results[0].label=="clap"){
            img1.src='red11.webp';
            img2.src='blue.png';
            img3.src='green.png';
            img4.src='yellow.png';
          }

          else if(results[0].label=="whistle"){
            img1.src='rred.png';
            img2.src='blue1.gif';
            img3.src='green.png';
            img4.src='yellow.png';
          }

           else if(results[0].label=="snap"){
            img1.src='rred.png';
            img2.src='blue.png';
            img3.src='green1.gif';
            img4.src='yellow.png';
          }

          else{
            img1.src='rred.png';
            img2.src='blue.png';
            img3.src='green.png';
            img4.src='yellow1.gif';
          }
    }
}

