define(function(require, exports, module) {
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var HeaderFooterLayout = require('famous/views/HeaderFooterLayout');
    var GridLayout = require('famous/views/GridLayout');
    var Modifier = require('famous/modifiers/StateModifier');
    var StateModifier = require('famous/core/Modifier');
    var View = require('famous/core/View');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var Scrollview = require('famous/views/Scrollview');
    var Easing = require('famous/transitions/Easing');
    var Transform = require('famous/core/Transform');
    var RenderNode = require('famous/core/RenderNode');
    var Draggable = require('famous/modifiers/Draggable');
    var mainContext = Engine.createContext();
    var layout;
    var mainView = new View();
    var scrollviewAR = new Scrollview({
        direction: 0,
        paginated: true
    });
    var scrollviewMED = new Scrollview({
        direction: 0,
        paginated: true
    });
    var scrollviewOTHER = new Scrollview({
        direction: 0,
        paginated: true
    });
    setBackground();
    createLayout();
    addHeader();
    addContent();
    addFooter();
    addLogos();
    function setBackground() {
      var bgSurface = new Surface({
            properties: {
              backgroundColor: 'black',
              size: [window.innerWidth,window.innerHeight]
            }
       });
       mainView.add(bgSurface);
    }
    function createLayout() {
      layout = new HeaderFooterLayout({
        headerSize: (50),
        footerSize: (50)
      });
      mainView.add(layout);
      mainContext.add(mainView);
    }

    function addHeader() {
      layout.header.add(new Surface({
        content: 'Make a selection',
        properties: {
          backgroundColor: 'black',
          lineHeight: '50px',
          fontSize: '30px',
          textAlign: 'center',
          color: 'white'
        }
      }));
    }

    function addFooter() {
      layout.footer.add(new Surface({
        content: 'EPR Emergency App',
        properties: {
          backgroundColor: 'black',
          lineHeight: '50px',
          fontSize: '25px',
          textAlign: 'center',
          color: 'white'
        }
      }));
    }
    function addLogos() {
        var smallLogoSurface1 = new ImageSurface({
          content: 'content/images/EPR LOGO ICON SMALL2 VER 2.png',
          properties: {
            backgroundColor: 'black',
            backgroundImage: '',
            lineHeight: '',
            color: 'white',
            textAlign: '',
            borderRadius:'2px'
          }
        });
        var smallLogoSurface2 = new ImageSurface({
          content: 'content/images/EPR LOGO ICON SMALL2 VER 2.png',
          properties: {
            backgroundColor: 'black',
            backgroundImage: '',
            fontSize: '',
            lineHeight: '',
            color: 'white',
            textAlign: '',
            borderRadius:'2px'
          }
        });
        var modifierFooterLimg = new Modifier({origin: [0.005, 0.995],size: [45,45]});
        var modifierFooterRimg = new Modifier({origin: [0.995, 0.995],size: [45,45]});
        mainContext.add(modifierFooterLimg).add(smallLogoSurface1);
        mainContext.add(modifierFooterRimg).add(smallLogoSurface2);
    }
    function addContent() {
      layout.content.add(createMainScreen('', ''));
    }
    function createMainScreen(section, gridDimensions) {
      var grid = new GridLayout({
        dimensions: [1,3]
      });
      var views = [];
      grid.sequenceFrom(views);
      var surfaceHeightRatios = window.innerHeight*.26;
      var surfacesAR = [];
      scrollviewAR.sequenceFrom(surfacesAR);
      addSurfacesAR();
      function addSurfacesAR() {
        var viewAR1 = new View();
        var modifierAR1 = new Modifier({
            size: [mainContext.length, surfaceHeightRatios]
        });
        var surfaceAR1 = new Surface({
            content: '<div style="font-size:'+(surfaceHeightRatios*0.2)+'px; line-height:'+(surfaceHeightRatios*0.2)+'px">ARMED RESPONSE<br></div><div style="font-size:'+(surfaceHeightRatios*0.13)+'px; line-height:'+(surfaceHeightRatios*0.13)+'px">Ensure your <b>Caller ID is on</b> and you have <b>airtime</b>.<br><div><a href="tel:0792689107" data-rel="external" style="font-size:'+(surfaceHeightRatios*0.2)+'px; line-height:'+(surfaceHeightRatios*0.2)+'px; letter-spacing: -1px; text-decoration: none; color: red" >PRESS HERE</a></div><div style="font-size:'+(surfaceHeightRatios*0.13)+'px; line-height:'+(surfaceHeightRatios*0.13)+'px"> Activate missed call to alert EPR of your emergency</div>',
          properties: {
             backgroundColor: 'hsl(0, 50%, 50%)',
             textAlign: 'center',
             color: 'white',
             fontFamily: '"Times New Roman", Times, serif',
             letterSpacing: '-1px',
             fontWeight: 'bold'
         }
        });
        var surfaceLeftGunLogo = new ImageSurface({
          content: 'content/images/Gun Icon.png',
          properties: {
            borderRadius: surfaceHeightRatios*0.05+'px'
          }
        });
        var modifierLeftGunLogo = new Modifier({
            origin: [0.1, 0.45],
            size: [surfaceHeightRatios*0.25, surfaceHeightRatios*0.25],
            transform: Transform.scale(0, 0, 1),opacity: 1
        });
          // animates x- and y-scale to 1
        modifierLeftGunLogo.setTransform(
          Transform.scale(1, 1, 1),
          { duration : 2500, curve: Easing.outBounce }
        );
        // animates opacity to 1
        modifierLeftGunLogo.setOpacity(1, {
          duration: 2500, curve: Easing.outBounce
        });
        viewAR1.add(modifierLeftGunLogo).add(surfaceLeftGunLogo);
        var surfaceRightGunLogo = new ImageSurface({
          content: 'content/images/Gun Icon.png',
          properties: {
            borderRadius: surfaceHeightRatios*0.05+'px'
          }
        });
        var modifierRightGunLogo = new Modifier({
            origin: [0.9, 0.45],
            size: [surfaceHeightRatios*0.25, surfaceHeightRatios*0.25],
            transform: Transform.scale(0, 0, 1),opacity: 1
        });
          // animates x- and y-scale to 1
        modifierRightGunLogo.setTransform(
          Transform.scale(1, 1, 1),
          { duration : 1500, curve: Easing.outBounce }
        );
        // animates opacity to 1
        modifierRightGunLogo.setOpacity(1, {
          duration: 1500, curve: Easing.outBounce
        });
        viewAR1.add(modifierRightGunLogo).add(surfaceRightGunLogo);
        viewAR1.add(modifierAR1).add(surfaceAR1);
        surfaceAR1.pipe(scrollviewAR);
        surfacesAR[0] = viewAR1;
        var viewAR2 = new View();
        var modifierAR2 = new Modifier({
            size: [mainContext.length, surfaceHeightRatios]
        });
        var surfaceAR2 = new Surface({
            content: '<br><div style="font-size:'+(surfaceHeightRatios*0.18)+'px; line-height:'+(surfaceHeightRatios*0.18)+'px">CANCEL FALSE ALARM<br></div><div style="font-size:'+(surfaceHeightRatios*0.15)+'px; line-height:'+(surfaceHeightRatios*0.15)+'px">Ensure your <b>Caller ID is on</b> and you have <b>airtime</b>.<br><div><a href="tel:0000000000" name="test" style="font-size:'+(surfaceHeightRatios*0.2)+'px; line-height:'+(surfaceHeightRatios*0.2)+'px; text-decoration: none; letter-spacing: -1px ;color: black" >PRESS HERE</a></div><br></div>',
          properties: {
             backgroundColor: 'hsl(-1, 50%, 50%)',
             textAlign: 'center',
             color: 'white',
             fontFamily: '"Times New Roman", Times, serif',
             letterSpacing: '-1px',
             fontWeight: 'bold'
         }
        });
        viewAR2.add(modifierAR2).add(surfaceAR2);
        surfaceAR2.pipe(scrollviewAR);
        surfacesAR[1] = viewAR2;
        var viewAR3 = new View();
        var modifierAR3 = new Modifier({
            size: [mainContext.length, surfaceHeightRatios]
        });
        var surfaceAR3 = new Surface({
            content: '<br><div style="font-size:'+(surfaceHeightRatios*0.15)+'px; line-height:'+(surfaceHeightRatios*0.15)+'px"><b>EPR NUMBERS</b></div><br><div style="font-size:'+(surfaceHeightRatios*0.13)+'px; line-height:'+(surfaceHeightRatios*0.13)+'px"><b>Control Room</b> - <a href="tel:08616921956" name="test" style="font-size:'+(surfaceHeightRatios*0.13)+'px; line-height:'+(surfaceHeightRatios*0.13)+'px; text-decoration: none; color: black" >0861 692 1956</a><br></div><br><div style="font-size:'+(surfaceHeightRatios*0.13)+'px; line-height:'+(surfaceHeightRatios*0.13)+'px"><b>Control Room #2</b> - <a href="tel:0112786000" name="test" style="font-size:'+(surfaceHeightRatios*0.13)+'px; line-height:'+(surfaceHeightRatios*0.13)+'px; text-decoration: none; color: black" >(011)278 6000</a><br></div>',
          properties: {
             backgroundColor: 'hsl(-2, 50%, 50%)',
             textAlign: 'center',
             color: 'white',
             fontFamily: '"Times New Roman", Times, serif'
         }
        });
        viewAR3.add(modifierAR3).add(surfaceAR3);
        surfaceAR3.pipe(scrollviewAR);
        surfacesAR[2] = viewAR3;
      }
      var surfacesMED = [];
      scrollviewMED.sequenceFrom(surfacesMED);
      addSurfacesMED();
      function addSurfacesMED() {
        var viewMED1 = new View();
        var modifierMED1 = new Modifier({
            size: [mainContext.length, surfaceHeightRatios]
        });
        var surfaceMED1 = new Surface({
          content: '<div style="letter-spacing: -3px; font-size:'+(surfaceHeightRatios*0.2)+'px; line-height:'+(surfaceHeightRatios*0.2)+'px">MEDICAL EMERGENCY<br></div><div style="font-size:'+(surfaceHeightRatios*0.13)+'px; line-height:'+(surfaceHeightRatios*0.13)+'px">Ensure your <b>Caller ID is on</b> and you have <b>airtime</b>.<br><div><a href="tel:0766486689" name="test" style="font-size:'+(surfaceHeightRatios*0.2)+'px; line-height:'+(surfaceHeightRatios*0.2)+'px;letter-spacing: -1px; text-decoration: none; color: orange" >PRESS HERE</a></div><div style="font-size:'+(surfaceHeightRatios*0.13)+'px; line-height:'+(surfaceHeightRatios*0.13)+'px"> Activate missed call to alert EPR of your emergency</div>',
          properties: {
             backgroundColor: 'hsl(200, 50%, 50%)',
             textAlign: 'center',
             color: 'white',
             fontFamily: '"Times New Roman", Times, serif',
             letterSpacing: '-1px',
             fontWeight: 'bold'
          }
        });
        var surfaceLeftAmbulanceLogo = new ImageSurface({
          content: 'content/images/Ambulance Icon.png',
          properties: {
            borderRadius: surfaceHeightRatios*0.05+'px'
          }
        });
        var modifierLeftAmbulanceLogo = new Modifier({
            origin: [0.1, 0.45],
            size: [surfaceHeightRatios*0.25, surfaceHeightRatios*0.25],
            transform: Transform.scale(0, 0, 1),opacity: 0
        });
          // animates x- and y-scale to 1
        modifierLeftAmbulanceLogo.setTransform(
          Transform.scale(1, 1, 1),
          { duration : 1200, curve: Easing.outBounce }
        );
        // animates opacity to 1
        modifierLeftAmbulanceLogo.setOpacity(1, {
          duration: 1200, curve: Easing.outBounce
        });
        viewMED1.add(modifierLeftAmbulanceLogo).add(surfaceLeftAmbulanceLogo);
        var surfaceRightAmbulanceLogo = new ImageSurface({
          content: 'content/images/Ambulance Icon.png',
          properties: {
            borderRadius: surfaceHeightRatios*0.05+'px'
          }
        });
        var modifierRightAmbulanceLogo = new Modifier({
            origin: [0.9, 0.45],
            size: [surfaceHeightRatios*0.25, surfaceHeightRatios*0.25],
            transform: Transform.scale(0, 0, 1),opacity: 0
        });
          // animates x- and y-scale to 1
        modifierRightAmbulanceLogo.setTransform(
          Transform.scale(1, 1, 1),
          { duration : 2200, curve: Easing.outBounce }
        );
        // animates opacity to 1
        modifierRightAmbulanceLogo.setOpacity(1, {
          duration: 2200, curve: Easing.outBounce
        });
        viewMED1.add(modifierRightAmbulanceLogo).add(surfaceRightAmbulanceLogo);
        viewMED1.add(modifierMED1).add(surfaceMED1);
        surfaceMED1.pipe(scrollviewMED);
        surfacesMED[0] = viewMED1;
        var viewMED2 = new View();
        var modifierMED2 = new Modifier({
            size: [mainContext.length, surfaceHeightRatios]
        });
        var surfaceMED2 = new Surface({
            content: '<br><div style="font-size:'+(surfaceHeightRatios*0.18)+'px; line-height:'+(surfaceHeightRatios*0.18)+'px">CANCEL FALSE ALARM<br></div><div style="font-size:'+(surfaceHeightRatios*0.15)+'px; line-height:'+(surfaceHeightRatios*0.15)+'px">Ensure your <b>Caller ID is on</b> and you have <b>airtime</b>.<br><div><a href="tel:0000000000" name="test" style="font-size:'+(surfaceHeightRatios*0.2)+'px; line-height:'+(surfaceHeightRatios*0.2)+'px; text-decoration: none; color: black" >PRESS HERE</a></div><br></div>',
          properties: {
             backgroundColor: 'hsl(199, 50%, 50%)',
             textAlign: 'center',
             color: 'white',
             fontFamily: '"Times New Roman", Times, serif',
             letterSpacing: '-1px',
             fontWeight: 'bold'
         }
        });
        viewMED2.add(modifierMED2).add(surfaceMED2);
        surfaceMED2.pipe(scrollviewMED);
        surfacesMED[1] = viewMED2;
        var viewMED3 = new View();
        var modifierMED3 = new Modifier({
            size: [mainContext.length, surfaceHeightRatios]
        });
        var surfaceMED3 = new Surface({
            content: '<br><div style="font-size:'+(surfaceHeightRatios*0.15)+'px; line-height:'+(surfaceHeightRatios*0.15)+'px"><b>EPR NUMBERS</b></div><br><div style="font-size:'+(surfaceHeightRatios*0.13)+'px; line-height:'+(surfaceHeightRatios*0.13)+'px"><b>Control Room</b> - <a href="tel:08616921956" name="test" style="font-size:'+(surfaceHeightRatios*0.13)+'px; line-height:'+(surfaceHeightRatios*0.13)+'px; text-decoration: none; color: black" >0861 692 1956</a><br></div><br><div style="font-size:'+(surfaceHeightRatios*0.13)+'px; line-height:'+(surfaceHeightRatios*0.13)+'px"><b>Control Room #2</b> - <a href="tel:0112786000" name="test" style="font-size:'+(surfaceHeightRatios*0.13)+'px; line-height:'+(surfaceHeightRatios*0.13)+'px; text-decoration: none; color: black" >(011)278 6000</a><br></div>',
          properties: {
             backgroundColor: 'hsl(198, 50%, 50%)',
             textAlign: 'center',
             color: 'white',
             fontFamily: '"Times New Roman", Times, serif'
         }
        });
        viewMED3.add(modifierMED3).add(surfaceMED3);
        surfaceMED3.pipe(scrollviewMED);
        surfacesMED[2] = viewMED3;
      }
      var surfacesOTHER = [];
      scrollviewOTHER.sequenceFrom(surfacesOTHER);
      addSurfacesOTHER();
      function addSurfacesOTHER() {
        var viewOTHER1 = new View();
        var modifierOTHER1 = new Modifier({
            size: [mainContext.length, surfaceHeightRatios]
        });
        var surfaceOTHER1 = new Surface({
          content: '<div style="font-size:'+(surfaceHeightRatios*0.18)+'px; line-height:'+(surfaceHeightRatios*0.18)+'px; text-decoration:underline">Directory<br></div><br><div style="font-size:'+(surfaceHeightRatios*0.13)+'px; line-height:'+(surfaceHeightRatios*0.13)+'px">Police, Fire Bridgade</div><div style="font-size:'+(surfaceHeightRatios*0.13)+'px; line-height:'+(surfaceHeightRatios*0.13)+'px">Doctors, Tow Aways</div><div style="font-size:'+(surfaceHeightRatios*0.13)+'px; line-height:'+(surfaceHeightRatios*0.13)+'px">Pharmacies, Dentists</div><div style="font-size:'+(surfaceHeightRatios*0.13)+'px; line-height:'+(surfaceHeightRatios*0.13)+'px">Plumbers, Electicians</div><div style="font-size:'+(surfaceHeightRatios*0.13)+'px; line-height:'+(surfaceHeightRatios*0.13)+'px">Vets **</div>',
          properties: {
             backgroundColor: 'hsl(37, 50%, 50%)',
             textAlign: 'center',
             color: 'white',
             fontFamily: '"Times New Roman", Times, serif'
          }
        });
        var surfaceInfoLogo = new ImageSurface({
          content: 'content/images/Info Icon.png',
          classes: ['backfaceVisibility'],
          properties: {
            backgroundColor: 'black',
//            zIndex: 100,
            borderRadius: '15px'
          }
        });
        var modifierInfoLogo = new Modifier({
            origin: [0.1, 0.45],
//            align: [1, 1],
            size: [50, 50],
            transform: Transform.scale(0, 0, 1),opacity: 0
        });
          // animates x- and y-scale to 1
        modifierInfoLogo.setTransform(
          Transform.scale(1, 1, 1),
          { duration : 1000, curve: Easing.outBounce }
        );
        // animates opacity to 1
        modifierInfoLogo.setOpacity(1, {
          duration: 2000, curve: Easing.outBounce
        });
        var initialTime = Date.now();
        var centerSpinModifier = new StateModifier({
            origin: [0.5, 0.5],
            size: [50, 50],
          transform : function() {
            return Transform.rotateY(-0.0005 * (Date.now() - initialTime));
          }
        });
        var modifierZLevel = new Modifier({
            transform:Transform.translate(0,0,8)
        });
        surfaceOTHER1.pipe(scrollviewOTHER);
        viewOTHER1.add(modifierOTHER1).add(surfaceOTHER1);
 //       viewOTHER1.add(modifierZLevel).add(modifierInfoLogo).add(centerSpinModifier).add(surfaceInfoLogo);
        surfacesOTHER[0] = viewOTHER1;
        var viewOTHER2 = new View();
        var modifierOTHER2 = new Modifier({
            size: [mainContext.length, surfaceHeightRatios]
        });
        var surfaceOTHER2 = new Surface({
          content: '<div style="font-size:'+(surfaceHeightRatios*0.3)+'px; line-height:'+(surfaceHeightRatios*0.3)+'px">POLICE Numbers<br></div>',
          properties: {
             backgroundColor: 'hsl(36, 50%, 50%)',
             textAlign: 'center',
             color: 'black',
             fontFamily: '"Times New Roman", Times, serif'
          }
        });
        viewOTHER2.add(modifierOTHER2).add(surfaceOTHER2);
//        viewOTHER2.pipe(scrollviewOTHER); //DOES NOT WORK!!!
        surfaceOTHER2.pipe(scrollviewOTHER);
        surfacesOTHER[1] = viewOTHER2;
        var viewOTHER3 = new View();
        var modifierOTHER3 = new Modifier({
            size: [mainContext.length, surfaceHeightRatios]
        });
        var surfaceOTHER3 = new Surface({
          content: '<div style="font-size:'+(surfaceHeightRatios*0.3)+'px; line-height:'+(surfaceHeightRatios*0.3)+'px">FIRE BRIGADE Numbers<br></div>',
          properties: {
             backgroundColor: 'hsl(35, 50%, 50%)',
             textAlign: 'center',
             color: 'black',
             fontFamily: '"Times New Roman", Times, serif'
          }
        });
        viewOTHER3.add(modifierOTHER3).add(surfaceOTHER3);
        surfaceOTHER3.pipe(scrollviewOTHER);
        surfacesOTHER[2] = viewOTHER3;
        var viewOTHER4 = new View();
        var modifierOTHER4 = new Modifier({
            size: [mainContext.length, surfaceHeightRatios]
        });
        var surfaceOTHER4 = new Surface({
          content: '<div style="font-size:'+(surfaceHeightRatios*0.3)+'px; line-height:'+(surfaceHeightRatios*0.3)+'px">DOCTORS Numbers<br></div>',
          properties: {
             backgroundColor: 'hsl(34, 50%, 50%)',
             textAlign: 'center',
             color: 'black',
             fontFamily: '"Times New Roman", Times, serif'
          }
        });
        viewOTHER4.add(modifierOTHER4).add(surfaceOTHER4);
        surfaceOTHER4.pipe(scrollviewOTHER);
        surfacesOTHER[3] = viewOTHER4;
        var viewOTHER5 = new View();
        var modifierOTHER5 = new Modifier({
            size: [mainContext.length, surfaceHeightRatios]
        });
        var surfaceOTHER5 = new Surface({
          content: '<div style="font-size:'+(surfaceHeightRatios*0.3)+'px; line-height:'+(surfaceHeightRatios*0.3)+'px">TOW AWAYS Numbers<br></div>',
          properties: {
             backgroundColor: 'hsl(33, 50%, 50%)',
             textAlign: 'center',
             color: 'black',
             fontFamily: '"Times New Roman", Times, serif'
          }
        });
        viewOTHER5.add(modifierOTHER5).add(surfaceOTHER5);
        surfaceOTHER5.pipe(scrollviewOTHER);
        surfacesOTHER[4] = viewOTHER5;
      }
      var viewARMain = new View();
      var viewMEDMain = new View();
      var viewOTHERMain = new View();
      viewARMain.add(scrollviewAR);
      viewMEDMain.add(scrollviewMED);
      viewOTHERMain.add(scrollviewOTHER);
      views[0]=(viewARMain);
      views[1]=(viewMEDMain);
      views[2]=(viewOTHERMain);
      return grid;
    }
});
