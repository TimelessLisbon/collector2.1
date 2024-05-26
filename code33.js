gdjs.Noticia_32FinalCode = {};
gdjs.Noticia_32FinalCode.GDfundoObjects1= [];
gdjs.Noticia_32FinalCode.GDfundoObjects2= [];
gdjs.Noticia_32FinalCode.GDfundoObjects3= [];
gdjs.Noticia_32FinalCode.GDnoticiaObjects1= [];
gdjs.Noticia_32FinalCode.GDnoticiaObjects2= [];
gdjs.Noticia_32FinalCode.GDnoticiaObjects3= [];
gdjs.Noticia_32FinalCode.GDscoreObjects1= [];
gdjs.Noticia_32FinalCode.GDscoreObjects2= [];
gdjs.Noticia_32FinalCode.GDscoreObjects3= [];
gdjs.Noticia_32FinalCode.GDnext_9595sceneObjects1= [];
gdjs.Noticia_32FinalCode.GDnext_9595sceneObjects2= [];
gdjs.Noticia_32FinalCode.GDnext_9595sceneObjects3= [];
gdjs.Noticia_32FinalCode.GDURLObjects1= [];
gdjs.Noticia_32FinalCode.GDURLObjects2= [];
gdjs.Noticia_32FinalCode.GDURLObjects3= [];
gdjs.Noticia_32FinalCode.GDfundopistagmObjects1= [];
gdjs.Noticia_32FinalCode.GDfundopistagmObjects2= [];
gdjs.Noticia_32FinalCode.GDfundopistagmObjects3= [];
gdjs.Noticia_32FinalCode.GDpistagmObjects1= [];
gdjs.Noticia_32FinalCode.GDpistagmObjects2= [];
gdjs.Noticia_32FinalCode.GDpistagmObjects3= [];
gdjs.Noticia_32FinalCode.GDdigitsObjects1= [];
gdjs.Noticia_32FinalCode.GDdigitsObjects2= [];
gdjs.Noticia_32FinalCode.GDdigitsObjects3= [];
gdjs.Noticia_32FinalCode.GDlocal_9595erradoObjects1= [];
gdjs.Noticia_32FinalCode.GDlocal_9595erradoObjects2= [];
gdjs.Noticia_32FinalCode.GDlocal_9595erradoObjects3= [];
gdjs.Noticia_32FinalCode.GDtask_9595confirmationObjects1= [];
gdjs.Noticia_32FinalCode.GDtask_9595confirmationObjects2= [];
gdjs.Noticia_32FinalCode.GDtask_9595confirmationObjects3= [];
gdjs.Noticia_32FinalCode.GDgmapsObjects1= [];
gdjs.Noticia_32FinalCode.GDgmapsObjects2= [];
gdjs.Noticia_32FinalCode.GDgmapsObjects3= [];


gdjs.Noticia_32FinalCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18437668);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField("Firebase::GetUserUID()", "Nomes", runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue"))), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Track", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), runtimeScene.getScene().getVariables().get("error"));
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18782900);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "news.mp3", 1, false, 100, 1);
}}

}


};gdjs.Noticia_32FinalCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11964524);
}
if (isConditionTrue_0) {
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, "Os membros de um grupo de detectives, contratados para desvendar o roubo dos Lusíadas, foram agora divulgados como sendo aliados do Coleccionador. Os nomes dos envolvidos agora divulgados, são:" + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) + "," + "Continuaremos a divulgar quaisquer atualizações!", "Joana", 100, 92, 100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.Noticia_32FinalCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Leaderboard", false);
}}

}


};gdjs.Noticia_32FinalCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18706724);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}
{ //Subevents
gdjs.Noticia_32FinalCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Noticia_32FinalCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.Noticia_32FinalCode.GDfundoObjects1);
gdjs.copyArray(runtimeScene.getObjects("noticia"), gdjs.Noticia_32FinalCode.GDnoticiaObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "voz");
}{for(var i = 0, len = gdjs.Noticia_32FinalCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.Noticia_32FinalCode.GDfundoObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.Noticia_32FinalCode.GDnoticiaObjects1.length ;i < len;++i) {
    gdjs.Noticia_32FinalCode.GDnoticiaObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(32);
}
{ //Subevents
gdjs.Noticia_32FinalCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.Noticia_32FinalCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.Noticia_32FinalCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.Noticia_32FinalCode.GDfundoObjects1[i].getBehavior("Opacity").setOpacity(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "voz") * 90);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "voz") >= 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.Noticia_32FinalCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.Noticia_32FinalCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.Noticia_32FinalCode.GDfundoObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "voz") >= 3.5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("noticia"), gdjs.Noticia_32FinalCode.GDnoticiaObjects1);
{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 20);
}{for(var i = 0, len = gdjs.Noticia_32FinalCode.GDnoticiaObjects1.length ;i < len;++i) {
    gdjs.Noticia_32FinalCode.GDnoticiaObjects1[i].getBehavior("Text").setText("Os membros de um grupo de detectives, contratados para desvendar o roubo dos Lusíadas, foram agora divulgados como sendo aliados do Coleccionador. Os nomes dos envolvidos agora divulgados, são: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) + " Continuaremos a divulgar quaisquer atualizações!");
}
}{for(var i = 0, len = gdjs.Noticia_32FinalCode.GDnoticiaObjects1.length ;i < len;++i) {
    gdjs.Noticia_32FinalCode.GDnoticiaObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.Noticia_32FinalCode.GDnoticiaObjects1.length ;i < len;++i) {
    gdjs.Noticia_32FinalCode.GDnoticiaObjects1[i].setWrapping(true);
}
}{for(var i = 0, len = gdjs.Noticia_32FinalCode.GDnoticiaObjects1.length ;i < len;++i) {
    gdjs.Noticia_32FinalCode.GDnoticiaObjects1[i].setWrappingWidth(680);
}
}{for(var i = 0, len = gdjs.Noticia_32FinalCode.GDnoticiaObjects1.length ;i < len;++i) {
    gdjs.Noticia_32FinalCode.GDnoticiaObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.Noticia_32FinalCode.GDnoticiaObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.Noticia_32FinalCode.GDnoticiaObjects1.length ;i < len;++i) {
    gdjs.Noticia_32FinalCode.GDnoticiaObjects1[i].setY((gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - (gdjs.Noticia_32FinalCode.GDnoticiaObjects1[i].getHeight())) / 2);
}
}{for(var i = 0, len = gdjs.Noticia_32FinalCode.GDnoticiaObjects1.length ;i < len;++i) {
    gdjs.Noticia_32FinalCode.GDnoticiaObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Noticia_32FinalCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "voz") >= 18;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.Noticia_32FinalCode.GDfundoObjects1);
gdjs.copyArray(runtimeScene.getObjects("noticia"), gdjs.Noticia_32FinalCode.GDnoticiaObjects1);
{for(var i = 0, len = gdjs.Noticia_32FinalCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.Noticia_32FinalCode.GDfundoObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Noticia_32FinalCode.GDfundoObjects1[i].getBehavior("Opacity").getOpacity() / (gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "voz") * 0.04));
}
}{for(var i = 0, len = gdjs.Noticia_32FinalCode.GDnoticiaObjects1.length ;i < len;++i) {
    gdjs.Noticia_32FinalCode.GDnoticiaObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Noticia_32FinalCode.GDnoticiaObjects1[i].getBehavior("Opacity").getOpacity() / (gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "voz") * 0.04));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "voz") >= 27.5;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Noticia_32FinalCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.Noticia_32FinalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Noticia_32FinalCode.GDfundoObjects1.length = 0;
gdjs.Noticia_32FinalCode.GDfundoObjects2.length = 0;
gdjs.Noticia_32FinalCode.GDfundoObjects3.length = 0;
gdjs.Noticia_32FinalCode.GDnoticiaObjects1.length = 0;
gdjs.Noticia_32FinalCode.GDnoticiaObjects2.length = 0;
gdjs.Noticia_32FinalCode.GDnoticiaObjects3.length = 0;
gdjs.Noticia_32FinalCode.GDscoreObjects1.length = 0;
gdjs.Noticia_32FinalCode.GDscoreObjects2.length = 0;
gdjs.Noticia_32FinalCode.GDscoreObjects3.length = 0;
gdjs.Noticia_32FinalCode.GDnext_9595sceneObjects1.length = 0;
gdjs.Noticia_32FinalCode.GDnext_9595sceneObjects2.length = 0;
gdjs.Noticia_32FinalCode.GDnext_9595sceneObjects3.length = 0;
gdjs.Noticia_32FinalCode.GDURLObjects1.length = 0;
gdjs.Noticia_32FinalCode.GDURLObjects2.length = 0;
gdjs.Noticia_32FinalCode.GDURLObjects3.length = 0;
gdjs.Noticia_32FinalCode.GDfundopistagmObjects1.length = 0;
gdjs.Noticia_32FinalCode.GDfundopistagmObjects2.length = 0;
gdjs.Noticia_32FinalCode.GDfundopistagmObjects3.length = 0;
gdjs.Noticia_32FinalCode.GDpistagmObjects1.length = 0;
gdjs.Noticia_32FinalCode.GDpistagmObjects2.length = 0;
gdjs.Noticia_32FinalCode.GDpistagmObjects3.length = 0;
gdjs.Noticia_32FinalCode.GDdigitsObjects1.length = 0;
gdjs.Noticia_32FinalCode.GDdigitsObjects2.length = 0;
gdjs.Noticia_32FinalCode.GDdigitsObjects3.length = 0;
gdjs.Noticia_32FinalCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.Noticia_32FinalCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.Noticia_32FinalCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.Noticia_32FinalCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.Noticia_32FinalCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.Noticia_32FinalCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.Noticia_32FinalCode.GDgmapsObjects1.length = 0;
gdjs.Noticia_32FinalCode.GDgmapsObjects2.length = 0;
gdjs.Noticia_32FinalCode.GDgmapsObjects3.length = 0;

gdjs.Noticia_32FinalCode.eventsList4(runtimeScene);

return;

}

gdjs['Noticia_32FinalCode'] = gdjs.Noticia_32FinalCode;
