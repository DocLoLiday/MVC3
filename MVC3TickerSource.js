/*******************************************************************************
*
*   'Kai_Ticker.js', 
*
*   Global settings for Kai Ticker
*
*
*      Skreens Entertainment Technologies, Incorporated                                          
*      __________________________________
*
*     [2014-2015] Skreens Entertainment Incorporated
*     All Rights Reserved
*
*  NOTICE: All information contained herein is, and remains and the property of Skreens
*  Entertainment Technologies Incorporated and its suppliers, if any.  The intellectual and technical concepts 
*  contained herein are proprietary to Skreens Entertainment Technologies incorporated and its 
*  suppliers and may be covered by U.S. and Foreign Patents and Patents in process, and
* are protected by trade secret or copyright law.  Dissemination of this information or
* reproduction of this material is strictly forbidden unless prior written permission is obtained
* from Skreens Entertainment Technologies Incorporated.
*******************************************************************************/

       
// group: is the groups of elements in the ticker
// element: is the number of the element in a group ** element 0 is special to show alertArea the right side of the ticker that is the skreens hold off area
//      image: is the image in a element (or NONE) ** if there is an image but not text then the image is the size of the full element
//      text: is the text in an element (or NONE) ** if there is text then the image is to be small center left of the element
//      skreensCommand: is the url action when activiated (or NONE)(commands will grow but first couple POPUP and LAYOUT <name> are first two)
//          url: url for the popup in skreens
//          pos: x,y location of skreen
//          size: height, width of skreen

var scrollTimePerElement = 2    //number of seconds between scrolling one element

var characters = [ 
            { element:0, image:"images/IronMan.png", moves:"images/IronManMoves.jpg", posX:0, posY:0, height:146, width:274 },
            { element:1, image:"images/Hulk.png", moves:"images/HulkMoves.jpg", posX:0, posY:0, height:146, width:274 },
            { element:2, image:"images/Magneto.png", moves:"images/MagnetoMoves.jpg", posX:0, posY:0, height:146, width:274 },
            { element:3, image:"images/Amaterasu.png", moves:"images/AmaterasuMoves.jpg", posX:0, posY:0, height:146, width:274 },
            { element:4, image:"images/Wolverine.png", moves:"images/WolverineMoves.jpg", posX:0, posY:0, height:146, width:274 },
            { element:5, image:"images/Ryu.png", moves:"images/RyuMoves.jpg", posX:0, posY:0, height:146, width:274 },
            { element:6, image:"images/Zero.png", moves:"images/ZeroMoves.jpg", posX:0, posY:0, height:146, width:274 },
            { element:7, image:"images/She-Hulk.png", moves:"images/SheHulkMoves.jpg", posX:0, posY:0, height:146, width:274 },
            { element:8, image:"images/IronMan.png", moves:"images/IronManMoves.jpg", posX:0, posY:0, height:146, width:274 },
            { element:9, image:"images/Hulk.png", moves:"images/HulkMoves.jpg", posX:0, posY:0, height:146, width:274 },
            { element:10, image:"images/Magneto.png", moves:"images/MagnetoMoves.jpg", posX:0, posY:0, height:146, width:274 },
            { element:11, image:"images/Amaterasu.png", moves:"images/AmaterasuMoves.jpg", posX:0, posY:0, height:146, width:274 },
            { element:12, image:"images/Wolverine.png", moves:"images/WolverineMoves.jpg", posX:0, posY:0, height:146, width:274 },
            { element:13, image:"images/Ryu.png", moves:"images/RyuMoves.jpg", posX:0, posY:0, height:146, width:274 },
            { element:14, image:"images/Zero.png", moves:"images/ZeroMoves.jpg", posX:0, posY:0, height:146, width:274 },
            { element:15, image:"images/She-Hulk.png", moves:"images/SheHulkMoves.jpg", posX:0, posY:0, height:146, width:274 },

];