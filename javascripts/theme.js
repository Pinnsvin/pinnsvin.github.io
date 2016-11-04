function theme_dark() {
  document.body.style.backgroundColor="#333";
  document.body.style.color="#fff";
  document.getElementById("job").style.backgroundColor="#222";
  document.getElementById("skills").style.backgroundColor="#222";
  document.getElementById("edu_info").style.backgroundColor="#222";
  document.getElementById("social_practice").style.backgroundColor="#222";
  document.getElementById("certificate").style.background="#222";
  document.getElementById("skills_cvs").style.background="#222";
  document.getElementById("img_photo").style.background="#fff";
}
function theme_light() {
  document.body.style.backgroundColor="#fff";
  document.body.style.color="#000";
  document.getElementById("job").style.backgroundColor="#ddd";
  document.getElementById("skills").style.backgroundColor="#ddd";
  document.getElementById("edu_info").style.backgroundColor="#ddd";
  document.getElementById("social_practice").style.backgroundColor="#ddd";
  document.getElementById("certificate").style.background="#ddd";
  document.getElementById("skills_cvs").style.background="#ddd";
  document.getElementById("img_photo").style.background="#0099CC";
}
function myDraw() {
      data     = [30,20,15,10,5,10,10];
      labels   = ['Java','Mysql','Git','HTML','Javascript','Css','Others'];
      tooltips = [];
      
      labels.forEach(function (v, k, arr)
      {
          tooltips[k] = '<b>{1}</b><br><i>{2}</i>'.format(
              labels[k],
              data[k]
          );
          
          labels[k] = labels[k] + ' ' + data[k] ;
      });


      pie = new RGraph.Pie({
          id: 'cvs',
          data: data,
          options: {
              tooltips: tooltips,
              labels: labels,
              labelsBold: true,
              labelsSticks: true,
              labelsSticksLength: 45,
              labelsSticksUsecolors: false,
              shadow: false,
              strokestyle: 'rgba(0,0,0,0)',
              colors: ['#0099CC','#FFCC33','#FF6666','#009966','#CCCCCC','#FF6600','#009933'],
              textFont: '"Lucida Grande", "Lucida Sans Unicode", Arial',
              textSize: 14,
              textColor: '#FF6600',
              labelsColors: ['#FF6600'],
              tooltipsEvent: 'mousemove',
              highlightStyle: 'outline',
              title: '',
              titleY: -25,
              titleSize: 18,
              gutterTop: 50
          }
      }).roundRobin();
      
      // Align the tooltip text to the left
      RGraph.tooltips.style.textAlign = 'center';
}
