const key = 'pk.eyJ1IjoibGluZHNheWthdHoiLCJhIjoiY2ttY2dwd2VlMmJoazJ4bzluMXZoZjg1MSJ9.IG-ynLP6iLDhBQWFCY-67w';

const options = {
  
  
  
  lat: 39.329239,
  lng: -82.101257,
  zoom: 3,
  style: 'mapbox://styles/lindsaykatz/ckmcsx6ko41k917p09anvss9f',
  pitch: 0
};

const mappa = new Mappa('MapboxGL', key);
let myMap;
let canvas;

function setup() {
  
  
  canvas = createCanvas(windowWidth, windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  


 
  //img = createImg('https://www.usnews.com/dims4/USNEWS/bb996bf/17177859217/thumbnail/256x256/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F8d%2F8f3c53319d560b2f4139af68c9a77c%2Fcollege-photo_28775.jpg');
  //img.hide();
}


function draw() {
  
 
   clear();
  fill(189,216,238,100);
  stroke(189,216,238);
  strokeWeight(3);
  const zoom = myMap.zoom();
  const athens = myMap.latLngToPixel(39.3292, -82.1013);
  ellipse(athens.x, athens.y, 15 * zoom, 15 * zoom);
  
  const cleveland = myMap.latLngToPixel(41.4993, -81.6944);  
  ellipse(cleveland.x, cleveland.y, 15 * zoom, 15 * zoom);
        
  const vail = myMap.latLngToPixel(39.6403, -106.3742);
  ellipse(vail.x, vail.y, 15 * zoom, 15 * zoom);
    
  const hayward = myMap.latLngToPixel(46.0130, -91.4846);
  ellipse(hayward.x, hayward.y, 15 * zoom, 15 * zoom);
    
  const westBend = myMap.latLngToPixel(43.4253, -88.1834);
  ellipse(westBend.x, westBend.y, 15 * zoom, 15 * zoom);
  
  const orlando = myMap.latLngToPixel(28.5383, -81.3792);
  ellipse(orlando.x, orlando.y, 15 * zoom, 15 * zoom);
    
  const parkersburg = myMap.latLngToPixel(39.2667, -81.5615);
  ellipse(parkersburg.x, parkersburg.y, 15 * zoom, 15 * zoom);
    
  const niagara = myMap.latLngToPixel(43.2550, -79.0773);
  ellipse(niagara.x, niagara.y, 15 * zoom, 15 * zoom);
    
  const stratford = myMap.latLngToPixel(43.3700, -80.9822);
  ellipse(stratford.x, stratford.y, 15 * zoom, 15 * zoom);
    
  const madrid =myMap.latLngToPixel(40.4168, -3.7038);
  ellipse(madrid.x, madrid.y, 15 * zoom, 15 * zoom);
    
  const barcelona = myMap.latLngToPixel(41.3851, 2.1734);
  ellipse(barcelona.x, barcelona.y, 15 * zoom, 15 * zoom);
    
  const london = myMap.latLngToPixel(51.5074, 0.1278);
  ellipse(london.x, london.y, 15 * zoom, 15 * zoom);
    
  const paris = myMap.latLngToPixel(48.8566, 2.3522);
  ellipse(paris.x, paris.y, 15 * zoom, 15 * zoom);
  
  const bordeaux = myMap.latLngToPixel(44.8378, -0.5792);
  ellipse(bordeaux.x, bordeaux.y, 15 * zoom, 15 * zoom);
    
  const biarritz =myMap.latLngToPixel(43.4832, -1.5586);
  ellipse(biarritz.x, biarritz.y, 15 * zoom, 15 * zoom);
    
  const dominicanRepublic = myMap.latLngToPixel(18.7357, -70.1627);
  ellipse(dominicanRepublic.x, dominicanRepublic.y, 15 * zoom, 15 * zoom);
  
  
  
  stroke(300,45,100);
  fill(300,45,100,100);
  const athensGreece = myMap.latLngToPixel(37.9838, 23.7275);
  ellipse(athensGreece.x, athensGreece.y, 15*zoom, 15*zoom);
  
  const italy = myMap.latLngToPixel(41.8719, 12.5674);
  ellipse(italy.x, italy.y, 15 * zoom, 15 * zoom);
  
  const russia = myMap.latLngToPixel(61.5240, 105.3188);
  ellipse(russia.x, russia.y, 15 * zoom, 15 * zoom);
    
  const israel = myMap.latLngToPixel(31.0461, 34.8516);
  ellipse(israel.x, israel.y, 15 * zoom, 15 * zoom);
  
  const iceland = myMap.latLngToPixel(64.9631, 19.0208);
  ellipse(iceland.x, iceland.y, 15 * zoom, 15 * zoom);
    
  const japan = myMap.latLngToPixel(36.2048, 138.2529);
  ellipse(japan.x, japan.y, 15 * zoom, 15 * zoom);
    
  const southKorea = myMap.latLngToPixel(35.9078, 127.7669);
  ellipse(southKorea.x, southKorea.y, 15 * zoom, 15 * zoom);
    
  const sweden = myMap.latLngToPixel(60.1282, 18.6435);
  ellipse(sweden.x, sweden.y, 15 * zoom, 15 * zoom);
    
  
    
  

  
 
}

$(window).bind('resize', function(e)
{
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
    this.location.reload(false); /* false to get page from cache */
  }, 200);
});


