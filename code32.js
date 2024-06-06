gdjs.FimCode = {};
gdjs.FimCode.GDfundoObjects1= [];
gdjs.FimCode.GDfundoObjects2= [];
gdjs.FimCode.GDfundoObjects3= [];
gdjs.FimCode.GDconfettiObjects1= [];
gdjs.FimCode.GDconfettiObjects2= [];
gdjs.FimCode.GDconfettiObjects3= [];
gdjs.FimCode.GDscoreObjects1= [];
gdjs.FimCode.GDscoreObjects2= [];
gdjs.FimCode.GDscoreObjects3= [];
gdjs.FimCode.GDnext_9595sceneObjects1= [];
gdjs.FimCode.GDnext_9595sceneObjects2= [];
gdjs.FimCode.GDnext_9595sceneObjects3= [];
gdjs.FimCode.GDURLObjects1= [];
gdjs.FimCode.GDURLObjects2= [];
gdjs.FimCode.GDURLObjects3= [];
gdjs.FimCode.GDfundopistagmObjects1= [];
gdjs.FimCode.GDfundopistagmObjects2= [];
gdjs.FimCode.GDfundopistagmObjects3= [];
gdjs.FimCode.GDpistagmObjects1= [];
gdjs.FimCode.GDpistagmObjects2= [];
gdjs.FimCode.GDpistagmObjects3= [];
gdjs.FimCode.GDdigitsObjects1= [];
gdjs.FimCode.GDdigitsObjects2= [];
gdjs.FimCode.GDdigitsObjects3= [];
gdjs.FimCode.GDlocal_9595erradoObjects1= [];
gdjs.FimCode.GDlocal_9595erradoObjects2= [];
gdjs.FimCode.GDlocal_9595erradoObjects3= [];
gdjs.FimCode.GDtask_9595confirmationObjects1= [];
gdjs.FimCode.GDtask_9595confirmationObjects2= [];
gdjs.FimCode.GDtask_9595confirmationObjects3= [];
gdjs.FimCode.GDgmapsObjects1= [];
gdjs.FimCode.GDgmapsObjects2= [];
gdjs.FimCode.GDgmapsObjects3= [];


gdjs.FimCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)) != "4a6bed99-f0a7-4a39-a974-6a4e0dceeae5";
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9409988);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score_Finish", "1", runtimeScene.getScene().getVariables().get("error"));
}}

}


};gdjs.FimCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9849660);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(120 - (((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("hour_finish")) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5))) * 60) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("min_finish")) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6))));
}
{ //Subevents
gdjs.FimCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.FimCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9415764);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Track", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Team", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Hour", runtimeScene.getScene().getVariables().get("hour"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Minute", runtimeScene.getScene().getVariables().get("minute"), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) == 0;
if (isConditionTrue_0) {

{ //Subevents
gdjs.FimCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.FimCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9409820);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "PT_Presente.MP3", 2, true, 100, 1);
}}

}


};gdjs.FimCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18168156);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "gift_EN.MP3", 2, true, 100, 1);
}}

}


};gdjs.FimCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18169132);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "FR_Presente.AAC", 1, true, 100, 1);
}}

}


};gdjs.FimCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18170396);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ES_Presente.AAC", 1, true, 100, 1);
}}

}


};gdjs.FimCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
if (isConditionTrue_0) {

{ //Subevents
gdjs.FimCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
if (isConditionTrue_0) {

{ //Subevents
gdjs.FimCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 2;
if (isConditionTrue_0) {

{ //Subevents
gdjs.FimCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 3;
if (isConditionTrue_0) {

{ //Subevents
gdjs.FimCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.FimCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18176996);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "tada-fanfare-a-6313.mp3", false, 100, 1);
}}

}


};gdjs.FimCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18177996);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "fairy-dust-shimmer-1-175611.mp3", false, 100, 1);
}}

}


};gdjs.FimCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17015012);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(20);
}}

}


};gdjs.FimCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("lusiadas_win")) == "encontrado";
if (isConditionTrue_0) {

{ //Subevents
gdjs.FimCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.FimCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)) != "4a6bed99-f0a7-4a39-a974-6a4e0dceeae5";
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18183204);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Leaderboard", false);
}}

}


};gdjs.FimCode.eventsList13 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("confetti"), gdjs.FimCode.GDconfettiObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(30);
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "confetti");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scene_start");
}{for(var i = 0, len = gdjs.FimCode.GDconfettiObjects1.length ;i < len;++i) {
    gdjs.FimCode.GDconfettiObjects1[i].hide();
}
}{runtimeScene.getGame().getVariables().get("min_finish").setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "min"));
}{runtimeScene.getGame().getVariables().get("hour_finish").setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "hour"));
}
{ //Subevents
gdjs.FimCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") <= 0;
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Next", runtimeScene.getScene().getVariables().get("next"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Language", runtimeScene.getScene().getVariables().get("language"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Lusiadas", runtimeScene.getScene().getVariables().get("lusiadas_win"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("Lusiadas", "Status", runtimeScene.getScene().getVariables().get("lusiadas_global"), runtimeScene.getScene().getVariables().get("error"));
}
{ //Subevents
gdjs.FimCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scene_start") >= 1;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("language")));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.FimCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.FimCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.FimCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 10;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 100;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.FimCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.FimCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.FimCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.FimCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.FimCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.FimCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.FimCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.FimCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.FimCode.GDfundoObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("next")) == gdjs.evtTools.firebaseTools.auth.userManagement.getUID();
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("lusiadas_win")) == "encontrado";
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("lusiadas_global")) == "encontrado";
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("confetti"), gdjs.FimCode.GDconfettiObjects1);
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "confetti");
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}{runtimeScene.getScene().getVariables().get("next").setString("");
}{for(var i = 0, len = gdjs.FimCode.GDconfettiObjects1.length ;i < len;++i) {
    gdjs.FimCode.GDconfettiObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.FimCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "confetti") >= 2;
if (isConditionTrue_0) {

{ //Subevents
gdjs.FimCode.eventsList9(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 7;
if (isConditionTrue_0) {

{ //Subevents
gdjs.FimCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 8;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("confetti"), gdjs.FimCode.GDconfettiObjects1);
{for(var i = 0, len = gdjs.FimCode.GDconfettiObjects1.length ;i < len;++i) {
    gdjs.FimCode.GDconfettiObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.FimCode.GDconfettiObjects1.length ;i < len;++i) {
    gdjs.FimCode.GDconfettiObjects1[i].hide();
}
}
{ //Subevents
gdjs.FimCode.eventsList12(runtimeScene);} //End of subevents
}

}


};

gdjs.FimCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FimCode.GDfundoObjects1.length = 0;
gdjs.FimCode.GDfundoObjects2.length = 0;
gdjs.FimCode.GDfundoObjects3.length = 0;
gdjs.FimCode.GDconfettiObjects1.length = 0;
gdjs.FimCode.GDconfettiObjects2.length = 0;
gdjs.FimCode.GDconfettiObjects3.length = 0;
gdjs.FimCode.GDscoreObjects1.length = 0;
gdjs.FimCode.GDscoreObjects2.length = 0;
gdjs.FimCode.GDscoreObjects3.length = 0;
gdjs.FimCode.GDnext_9595sceneObjects1.length = 0;
gdjs.FimCode.GDnext_9595sceneObjects2.length = 0;
gdjs.FimCode.GDnext_9595sceneObjects3.length = 0;
gdjs.FimCode.GDURLObjects1.length = 0;
gdjs.FimCode.GDURLObjects2.length = 0;
gdjs.FimCode.GDURLObjects3.length = 0;
gdjs.FimCode.GDfundopistagmObjects1.length = 0;
gdjs.FimCode.GDfundopistagmObjects2.length = 0;
gdjs.FimCode.GDfundopistagmObjects3.length = 0;
gdjs.FimCode.GDpistagmObjects1.length = 0;
gdjs.FimCode.GDpistagmObjects2.length = 0;
gdjs.FimCode.GDpistagmObjects3.length = 0;
gdjs.FimCode.GDdigitsObjects1.length = 0;
gdjs.FimCode.GDdigitsObjects2.length = 0;
gdjs.FimCode.GDdigitsObjects3.length = 0;
gdjs.FimCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.FimCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.FimCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.FimCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.FimCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.FimCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.FimCode.GDgmapsObjects1.length = 0;
gdjs.FimCode.GDgmapsObjects2.length = 0;
gdjs.FimCode.GDgmapsObjects3.length = 0;

gdjs.FimCode.eventsList13(runtimeScene);

return;

}

gdjs['FimCode'] = gdjs.FimCode;
