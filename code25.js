gdjs.Manteigaria_32FimCode = {};
gdjs.Manteigaria_32FimCode.localVariables = [];
gdjs.Manteigaria_32FimCode.GDyesObjects1_1final = [];

gdjs.Manteigaria_32FimCode.GDprox_9595localObjects1= [];
gdjs.Manteigaria_32FimCode.GDprox_9595localObjects2= [];
gdjs.Manteigaria_32FimCode.GDprox_9595localObjects3= [];
gdjs.Manteigaria_32FimCode.GDnoObjects1= [];
gdjs.Manteigaria_32FimCode.GDnoObjects2= [];
gdjs.Manteigaria_32FimCode.GDnoObjects3= [];
gdjs.Manteigaria_32FimCode.GDyesObjects1= [];
gdjs.Manteigaria_32FimCode.GDyesObjects2= [];
gdjs.Manteigaria_32FimCode.GDyesObjects3= [];
gdjs.Manteigaria_32FimCode.GDfundoObjects1= [];
gdjs.Manteigaria_32FimCode.GDfundoObjects2= [];
gdjs.Manteigaria_32FimCode.GDfundoObjects3= [];
gdjs.Manteigaria_32FimCode.GDrevelation_9595PTObjects1= [];
gdjs.Manteigaria_32FimCode.GDrevelation_9595PTObjects2= [];
gdjs.Manteigaria_32FimCode.GDrevelation_9595PTObjects3= [];
gdjs.Manteigaria_32FimCode.GDrevelation_9595ENObjects1= [];
gdjs.Manteigaria_32FimCode.GDrevelation_9595ENObjects2= [];
gdjs.Manteigaria_32FimCode.GDrevelation_9595ENObjects3= [];
gdjs.Manteigaria_32FimCode.GDscoreObjects1= [];
gdjs.Manteigaria_32FimCode.GDscoreObjects2= [];
gdjs.Manteigaria_32FimCode.GDscoreObjects3= [];
gdjs.Manteigaria_32FimCode.GDnext_9595sceneObjects1= [];
gdjs.Manteigaria_32FimCode.GDnext_9595sceneObjects2= [];
gdjs.Manteigaria_32FimCode.GDnext_9595sceneObjects3= [];
gdjs.Manteigaria_32FimCode.GDURLObjects1= [];
gdjs.Manteigaria_32FimCode.GDURLObjects2= [];
gdjs.Manteigaria_32FimCode.GDURLObjects3= [];
gdjs.Manteigaria_32FimCode.GDfundopistagmObjects1= [];
gdjs.Manteigaria_32FimCode.GDfundopistagmObjects2= [];
gdjs.Manteigaria_32FimCode.GDfundopistagmObjects3= [];
gdjs.Manteigaria_32FimCode.GDpistagmObjects1= [];
gdjs.Manteigaria_32FimCode.GDpistagmObjects2= [];
gdjs.Manteigaria_32FimCode.GDpistagmObjects3= [];
gdjs.Manteigaria_32FimCode.GDdigitsObjects1= [];
gdjs.Manteigaria_32FimCode.GDdigitsObjects2= [];
gdjs.Manteigaria_32FimCode.GDdigitsObjects3= [];
gdjs.Manteigaria_32FimCode.GDlocal_9595erradoObjects1= [];
gdjs.Manteigaria_32FimCode.GDlocal_9595erradoObjects2= [];
gdjs.Manteigaria_32FimCode.GDlocal_9595erradoObjects3= [];
gdjs.Manteigaria_32FimCode.GDtask_9595confirmationObjects1= [];
gdjs.Manteigaria_32FimCode.GDtask_9595confirmationObjects2= [];
gdjs.Manteigaria_32FimCode.GDtask_9595confirmationObjects3= [];
gdjs.Manteigaria_32FimCode.GDgmapsObjects1= [];
gdjs.Manteigaria_32FimCode.GDgmapsObjects2= [];
gdjs.Manteigaria_32FimCode.GDgmapsObjects3= [];


gdjs.Manteigaria_32FimCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("revelation_PT"), gdjs.Manteigaria_32FimCode.GDrevelation_9595PTObjects2);
{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDrevelation_9595PTObjects2.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDrevelation_9595PTObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDrevelation_9595PTObjects2.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDrevelation_9595PTObjects2[i].play();
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber((( gdjs.Manteigaria_32FimCode.GDrevelation_9595PTObjects2.length === 0 ) ? 0 :gdjs.Manteigaria_32FimCode.GDrevelation_9595PTObjects2[0].getDuration()));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("revelation_EN"), gdjs.Manteigaria_32FimCode.GDrevelation_9595ENObjects2);
{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDrevelation_9595ENObjects2.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDrevelation_9595ENObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDrevelation_9595ENObjects2.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDrevelation_9595ENObjects2[i].play();
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber((( gdjs.Manteigaria_32FimCode.GDrevelation_9595ENObjects2.length === 0 ) ? 0 :gdjs.Manteigaria_32FimCode.GDrevelation_9595ENObjects2[0].getDuration()));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 2);
}
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 3);
}
if (isConditionTrue_0) {
}

}


};gdjs.Manteigaria_32FimCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber() == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Manteigaria_32FimCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Manteigaria_32FimCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsString() != "4a6bed99-f0a7-4a39-a974-6a4e0dceeae5");
}
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23322932);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", runtimeScene.getGame().getVariables().getFromIndex(1).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Manteigaria_32FimCode.GDnext_9595sceneObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next_scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next_scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, (( gdjs.Manteigaria_32FimCode.GDnext_9595sceneObjects1.length === 0 ) ? "" :gdjs.Manteigaria_32FimCode.GDnext_9595sceneObjects1[0].getBehavior("Text").getText()), false);
}}

}


};gdjs.Manteigaria_32FimCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23243996);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Track", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Team", runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", runtimeScene.getGame().getVariables().getFromIndex(1).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", runtimeScene.getGame().getVariables().getFromIndex(2).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.getField("Optional", "Revelations", runtimeScene.getScene().getVariables().getFromIndex(8), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Hour", runtimeScene.getScene().getVariables().getFromIndex(4), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Minute", runtimeScene.getScene().getVariables().getFromIndex(5), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 0, 1);
}}

}


};gdjs.Manteigaria_32FimCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23284076);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Manteigaria_32FimCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23286308);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Manteigaria_32FimCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23290932);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Manteigaria_32FimCode.eventsList7 = function(runtimeScene) {

{

gdjs.Manteigaria_32FimCode.GDyesObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Manteigaria_32FimCode.GDyesObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Manteigaria_32FimCode.GDyesObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32FimCode.GDyesObjects2.length;i<l;++i) {
    if ( gdjs.Manteigaria_32FimCode.GDyesObjects2[i].isVisible() ) {
        isConditionTrue_2 = true;
        gdjs.Manteigaria_32FimCode.GDyesObjects2[k] = gdjs.Manteigaria_32FimCode.GDyesObjects2[i];
        ++k;
    }
}
gdjs.Manteigaria_32FimCode.GDyesObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32FimCode.GDyesObjects2.length;i<l;++i) {
    if ( gdjs.Manteigaria_32FimCode.GDyesObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_2 = true;
        gdjs.Manteigaria_32FimCode.GDyesObjects2[k] = gdjs.Manteigaria_32FimCode.GDyesObjects2[i];
        ++k;
    }
}
gdjs.Manteigaria_32FimCode.GDyesObjects2.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Manteigaria_32FimCode.GDyesObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Manteigaria_32FimCode.GDyesObjects1_1final.indexOf(gdjs.Manteigaria_32FimCode.GDyesObjects2[j]) === -1 )
            gdjs.Manteigaria_32FimCode.GDyesObjects1_1final.push(gdjs.Manteigaria_32FimCode.GDyesObjects2[j]);
    }
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() == gdjs.evtTools.firebaseTools.auth.userManagement.getUID());
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.Manteigaria_32FimCode.GDyesObjects1_1final, gdjs.Manteigaria_32FimCode.GDyesObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}{runtimeScene.getScene().getVariables().getFromIndex(7).setString("");
}
{ //Subevents
gdjs.Manteigaria_32FimCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.Manteigaria_32FimCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23302196);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Manteigaria_32FimCode.eventsList9 = function(runtimeScene) {

{

gdjs.Manteigaria_32FimCode.GDyesObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Manteigaria_32FimCode.GDyesObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Manteigaria_32FimCode.GDyesObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32FimCode.GDyesObjects2.length;i<l;++i) {
    if ( gdjs.Manteigaria_32FimCode.GDyesObjects2[i].isVisible() ) {
        isConditionTrue_2 = true;
        gdjs.Manteigaria_32FimCode.GDyesObjects2[k] = gdjs.Manteigaria_32FimCode.GDyesObjects2[i];
        ++k;
    }
}
gdjs.Manteigaria_32FimCode.GDyesObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32FimCode.GDyesObjects2.length;i<l;++i) {
    if ( gdjs.Manteigaria_32FimCode.GDyesObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_2 = true;
        gdjs.Manteigaria_32FimCode.GDyesObjects2[k] = gdjs.Manteigaria_32FimCode.GDyesObjects2[i];
        ++k;
    }
}
gdjs.Manteigaria_32FimCode.GDyesObjects2.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Manteigaria_32FimCode.GDyesObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Manteigaria_32FimCode.GDyesObjects1_1final.indexOf(gdjs.Manteigaria_32FimCode.GDyesObjects2[j]) === -1 )
            gdjs.Manteigaria_32FimCode.GDyesObjects1_1final.push(gdjs.Manteigaria_32FimCode.GDyesObjects2[j]);
    }
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() == gdjs.evtTools.firebaseTools.auth.userManagement.getUID());
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.Manteigaria_32FimCode.GDyesObjects1_1final, gdjs.Manteigaria_32FimCode.GDyesObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}{runtimeScene.getScene().getVariables().getFromIndex(7).setString("");
}
{ //Subevents
gdjs.Manteigaria_32FimCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.Manteigaria_32FimCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsString() != "4a6bed99-f0a7-4a39-a974-6a4e0dceeae5");
}
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23306452);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", runtimeScene.getGame().getVariables().getFromIndex(1).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Manteigaria_32FimCode.GDnext_9595sceneObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, (( gdjs.Manteigaria_32FimCode.GDnext_9595sceneObjects1.length === 0 ) ? "" :gdjs.Manteigaria_32FimCode.GDnext_9595sceneObjects1[0].getBehavior("Text").getText()), false);
}}

}


};gdjs.Manteigaria_32FimCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(19);
}{gdjs.evtTools.firebaseTools.database.getField("Optional", "Adamastor", runtimeScene.getScene().getVariables().getFromIndex(9), runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(9).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Manteigaria_32FimCode.GDnext_9595sceneObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDnext_9595sceneObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDnext_9595sceneObjects1[i].setString("Percurso Bica");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(9).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Manteigaria_32FimCode.GDnext_9595sceneObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDnext_9595sceneObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDnext_9595sceneObjects1[i].setString("Percurso Sta Catarina");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("revelation_EN"), gdjs.Manteigaria_32FimCode.GDrevelation_9595ENObjects1);
gdjs.copyArray(runtimeScene.getObjects("revelation_PT"), gdjs.Manteigaria_32FimCode.GDrevelation_9595PTObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDrevelation_9595PTObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDrevelation_9595PTObjects1[i].pause();
}
}{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDrevelation_9595ENObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDrevelation_9595ENObjects1[i].pause();
}
}{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDrevelation_9595PTObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDrevelation_9595PTObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDrevelation_9595ENObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDrevelation_9595ENObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next_scene");
}}

}


{



}


{

gdjs.Manteigaria_32FimCode.GDyesObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.Manteigaria_32FimCode.GDyesObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Manteigaria_32FimCode.GDyesObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32FimCode.GDyesObjects2.length;i<l;++i) {
    if ( gdjs.Manteigaria_32FimCode.GDyesObjects2[i].isVisible() ) {
        isConditionTrue_2 = true;
        gdjs.Manteigaria_32FimCode.GDyesObjects2[k] = gdjs.Manteigaria_32FimCode.GDyesObjects2[i];
        ++k;
    }
}
gdjs.Manteigaria_32FimCode.GDyesObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32FimCode.GDyesObjects2.length;i<l;++i) {
    if ( gdjs.Manteigaria_32FimCode.GDyesObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_2 = true;
        gdjs.Manteigaria_32FimCode.GDyesObjects2[k] = gdjs.Manteigaria_32FimCode.GDyesObjects2[i];
        ++k;
    }
}
gdjs.Manteigaria_32FimCode.GDyesObjects2.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Manteigaria_32FimCode.GDyesObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Manteigaria_32FimCode.GDyesObjects1_1final.indexOf(gdjs.Manteigaria_32FimCode.GDyesObjects2[j]) === -1 )
            gdjs.Manteigaria_32FimCode.GDyesObjects1_1final.push(gdjs.Manteigaria_32FimCode.GDyesObjects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(7)) == gdjs.evtTools.firebaseTools.auth.userManagement.getUID();
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.Manteigaria_32FimCode.GDyesObjects1_1final, gdjs.Manteigaria_32FimCode.GDyesObjects1);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(1);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next_scene");
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next_scene") >= 0.5;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
{ //Subevents
gdjs.Manteigaria_32FimCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next_scene") >= runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() + 0.5;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(2);
}{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(0);
}
{ //Subevents
gdjs.Manteigaria_32FimCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Manteigaria_32FimCode.GDnext_9595sceneObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Manteigaria_32FimCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.Manteigaria_32FimCode.GDtask_9595confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Manteigaria_32FimCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDnext_9595sceneObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDnext_9595sceneObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDtask_9595confirmationObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDtask_9595confirmationObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scene_start");
}
{ //Subevents
gdjs.Manteigaria_32FimCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") <= 0;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber());
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Next", runtimeScene.getScene().getVariables().getFromIndex(7), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Language", runtimeScene.getScene().getVariables().getFromIndex(6), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.getField("Voucher", "Status", runtimeScene.getScene().getVariables().getFromIndex(3), runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scene_start") >= 1;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber());
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() < 10);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Manteigaria_32FimCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDscoreObjects1[i].setString("00" + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() < 100);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Manteigaria_32FimCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDscoreObjects1[i].setString("0" + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= 100);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Manteigaria_32FimCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDscoreObjects1[i].setString(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.Manteigaria_32FimCode.GDtask_9595confirmationObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDtask_9595confirmationObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDtask_9595confirmationObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) != "Manteigaria Fim");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) != "Bolo de Bacalhau");
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.Manteigaria_32FimCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDfundoObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Manteigaria_32FimCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("prox_local"), gdjs.Manteigaria_32FimCode.GDprox_9595localObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Manteigaria_32FimCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDyesObjects1[i].SetLabelText("SIM", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDnoObjects1[i].SetLabelText("NÃO", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDprox_9595localObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDprox_9595localObjects1[i].SetLabelText("Prox. local", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Manteigaria_32FimCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("prox_local"), gdjs.Manteigaria_32FimCode.GDprox_9595localObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Manteigaria_32FimCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDyesObjects1[i].SetLabelText("YES", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDnoObjects1[i].SetLabelText("NO", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDprox_9595localObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDprox_9595localObjects1[i].SetLabelText("Next Place", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Manteigaria_32FimCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("prox_local"), gdjs.Manteigaria_32FimCode.GDprox_9595localObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Manteigaria_32FimCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDyesObjects1[i].SetLabelText("OUI", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDnoObjects1[i].SetLabelText("NON", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDprox_9595localObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDprox_9595localObjects1[i].SetLabelText("Suivant", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Manteigaria_32FimCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("prox_local"), gdjs.Manteigaria_32FimCode.GDprox_9595localObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Manteigaria_32FimCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDyesObjects1[i].SetLabelText("SI", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDnoObjects1[i].SetLabelText("NO", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDprox_9595localObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDprox_9595localObjects1[i].SetLabelText("Siguiente", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) == "Manteigaria Fim");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "not selected");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "bacalhau");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.Manteigaria_32FimCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDfundoObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) == "Bolo de Bacalhau");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "not selected");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "manteigaria");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.Manteigaria_32FimCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDfundoObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) == "Manteigaria Fim");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "ambos");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "manteigaria");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.Manteigaria_32FimCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDfundoObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() + 4);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) == "Bolo de Bacalhau");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "ambos");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "bacalhau");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.Manteigaria_32FimCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDfundoObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() + 4);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("prox_local"), gdjs.Manteigaria_32FimCode.GDprox_9595localObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32FimCode.GDprox_9595localObjects1.length;i<l;++i) {
    if ( gdjs.Manteigaria_32FimCode.GDprox_9595localObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Manteigaria_32FimCode.GDprox_9595localObjects1[k] = gdjs.Manteigaria_32FimCode.GDprox_9595localObjects1[i];
        ++k;
    }
}
gdjs.Manteigaria_32FimCode.GDprox_9595localObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Manteigaria_32FimCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.Manteigaria_32FimCode.GDtask_9595confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Manteigaria_32FimCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDnoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDyesObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDtask_9595confirmationObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDtask_9595confirmationObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Manteigaria_32FimCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Manteigaria_32FimCode.GDnoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32FimCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.Manteigaria_32FimCode.GDnoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Manteigaria_32FimCode.GDnoObjects1[k] = gdjs.Manteigaria_32FimCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.Manteigaria_32FimCode.GDnoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32FimCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.Manteigaria_32FimCode.GDnoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Manteigaria_32FimCode.GDnoObjects1[k] = gdjs.Manteigaria_32FimCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.Manteigaria_32FimCode.GDnoObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Manteigaria_32FimCode.GDnoObjects1 */
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.Manteigaria_32FimCode.GDtask_9595confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Manteigaria_32FimCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDtask_9595confirmationObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDtask_9595confirmationObjects1[i].hide();
}
}
{ //Subevents
gdjs.Manteigaria_32FimCode.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber() == 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Manteigaria_32FimCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) != "S. Roque fim");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) != "Brasileira Fim");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) != "Manteigaria Fim");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) != "Bica Fim");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) != "Camoes Fim");
}
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Manteigaria_32FimCode.eventsList9(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 0.5;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(2);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
{ //Subevents
gdjs.Manteigaria_32FimCode.eventsList10(runtimeScene);} //End of subevents
}

}


};

gdjs.Manteigaria_32FimCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Manteigaria_32FimCode.GDprox_9595localObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDprox_9595localObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDprox_9595localObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDnoObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDnoObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDnoObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDyesObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDyesObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDyesObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDfundoObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDfundoObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDfundoObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDrevelation_9595PTObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDrevelation_9595PTObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDrevelation_9595PTObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDrevelation_9595ENObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDrevelation_9595ENObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDrevelation_9595ENObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDscoreObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDscoreObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDscoreObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDnext_9595sceneObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDnext_9595sceneObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDnext_9595sceneObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDURLObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDURLObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDURLObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDfundopistagmObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDfundopistagmObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDfundopistagmObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDpistagmObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDpistagmObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDpistagmObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDdigitsObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDdigitsObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDdigitsObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDgmapsObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDgmapsObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDgmapsObjects3.length = 0;

gdjs.Manteigaria_32FimCode.eventsList11(runtimeScene);
gdjs.Manteigaria_32FimCode.GDprox_9595localObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDprox_9595localObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDprox_9595localObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDnoObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDnoObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDnoObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDyesObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDyesObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDyesObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDfundoObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDfundoObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDfundoObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDrevelation_9595PTObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDrevelation_9595PTObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDrevelation_9595PTObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDrevelation_9595ENObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDrevelation_9595ENObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDrevelation_9595ENObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDscoreObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDscoreObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDscoreObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDnext_9595sceneObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDnext_9595sceneObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDnext_9595sceneObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDURLObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDURLObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDURLObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDfundopistagmObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDfundopistagmObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDfundopistagmObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDpistagmObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDpistagmObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDpistagmObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDdigitsObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDdigitsObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDdigitsObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDgmapsObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDgmapsObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDgmapsObjects3.length = 0;


return;

}

gdjs['Manteigaria_32FimCode'] = gdjs.Manteigaria_32FimCode;
