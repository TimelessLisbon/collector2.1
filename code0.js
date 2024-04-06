gdjs.StartCode = {};
gdjs.StartCode.GDUIDObjects1= [];
gdjs.StartCode.GDUIDObjects2= [];
gdjs.StartCode.GDUIDObjects3= [];
gdjs.StartCode.GDUIDObjects4= [];
gdjs.StartCode.GDfundoObjects1= [];
gdjs.StartCode.GDfundoObjects2= [];
gdjs.StartCode.GDfundoObjects3= [];
gdjs.StartCode.GDfundoObjects4= [];
gdjs.StartCode.GDloadingObjects1= [];
gdjs.StartCode.GDloadingObjects2= [];
gdjs.StartCode.GDloadingObjects3= [];
gdjs.StartCode.GDloadingObjects4= [];
gdjs.StartCode.GDleaderboard_9595errorObjects1= [];
gdjs.StartCode.GDleaderboard_9595errorObjects2= [];
gdjs.StartCode.GDleaderboard_9595errorObjects3= [];
gdjs.StartCode.GDleaderboard_9595errorObjects4= [];
gdjs.StartCode.GDscoreObjects1= [];
gdjs.StartCode.GDscoreObjects2= [];
gdjs.StartCode.GDscoreObjects3= [];
gdjs.StartCode.GDscoreObjects4= [];
gdjs.StartCode.GDnext_9595sceneObjects1= [];
gdjs.StartCode.GDnext_9595sceneObjects2= [];
gdjs.StartCode.GDnext_9595sceneObjects3= [];
gdjs.StartCode.GDnext_9595sceneObjects4= [];
gdjs.StartCode.GDURLObjects1= [];
gdjs.StartCode.GDURLObjects2= [];
gdjs.StartCode.GDURLObjects3= [];
gdjs.StartCode.GDURLObjects4= [];
gdjs.StartCode.GDfundopistagmObjects1= [];
gdjs.StartCode.GDfundopistagmObjects2= [];
gdjs.StartCode.GDfundopistagmObjects3= [];
gdjs.StartCode.GDfundopistagmObjects4= [];
gdjs.StartCode.GDpistagmObjects1= [];
gdjs.StartCode.GDpistagmObjects2= [];
gdjs.StartCode.GDpistagmObjects3= [];
gdjs.StartCode.GDpistagmObjects4= [];
gdjs.StartCode.GDdigitsObjects1= [];
gdjs.StartCode.GDdigitsObjects2= [];
gdjs.StartCode.GDdigitsObjects3= [];
gdjs.StartCode.GDdigitsObjects4= [];
gdjs.StartCode.GDlocal_9595erradoObjects1= [];
gdjs.StartCode.GDlocal_9595erradoObjects2= [];
gdjs.StartCode.GDlocal_9595erradoObjects3= [];
gdjs.StartCode.GDlocal_9595erradoObjects4= [];
gdjs.StartCode.GDtask_9595confirmationObjects1= [];
gdjs.StartCode.GDtask_9595confirmationObjects2= [];
gdjs.StartCode.GDtask_9595confirmationObjects3= [];
gdjs.StartCode.GDtask_9595confirmationObjects4= [];
gdjs.StartCode.GDgmapsObjects1= [];
gdjs.StartCode.GDgmapsObjects2= [];
gdjs.StartCode.GDgmapsObjects3= [];
gdjs.StartCode.GDgmapsObjects4= [];


gdjs.StartCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_amarela"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_azul"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_castanha"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_rosa"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_roxa"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_verde"));
}
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Logout", false);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "UID");
}}

}


};gdjs.StartCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(10)) == "";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("leaderboard_error"), gdjs.StartCode.GDleaderboard_9595errorObjects2);
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "UID");
}{for(var i = 0, len = gdjs.StartCode.GDleaderboard_9595errorObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDleaderboard_9595errorObjects2[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(10)) != "";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("leaderboard_error"), gdjs.StartCode.GDleaderboard_9595errorObjects1);
gdjs.copyArray(runtimeScene.getObjects("loading"), gdjs.StartCode.GDloadingObjects1);
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "UID");
}{for(var i = 0, len = gdjs.StartCode.GDleaderboard_9595errorObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDleaderboard_9595errorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.StartCode.GDloadingObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDloadingObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.StartCode.GDloadingObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDloadingObjects1[i].getBehavior("Animation").resumeAnimation();
}
}}

}


};gdjs.StartCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16760164);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)), "Score", runtimeScene.getScene().getVariables().getFromIndex(2), runtimeScene.getScene().getVariables().getFromIndex(4));
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)), "Progress", runtimeScene.getScene().getVariables().getFromIndex(3), runtimeScene.getScene().getVariables().getFromIndex(4));
}{gdjs.evtTools.firebaseTools.database.getField("Leaderboard", "ID", runtimeScene.getScene().getVariables().getFromIndex(10), runtimeScene.getScene().getVariables().getFromIndex(4));
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)), "Team", runtimeScene.getScene().getVariables().getFromIndex(1), runtimeScene.getScene().getVariables().getFromIndex(4));
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)), "Language", runtimeScene.getScene().getVariables().getFromIndex(9), runtimeScene.getScene().getVariables().getFromIndex(4));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().getFromIndex(4));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "", runtimeScene.getScene().getVariables().getFromIndex(4));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Next", "", runtimeScene.getScene().getVariables().getFromIndex(4));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Hour", runtimeScene.getScene().getVariables().get("hour"), runtimeScene.getScene().getVariables().getFromIndex(4));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Minute", runtimeScene.getScene().getVariables().get("minute"), runtimeScene.getScene().getVariables().getFromIndex(4));
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(0).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)));
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)));
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("hour")));
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("minute")));
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(9)));
}{runtimeScene.getGame().getVariables().getFromIndex(4).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(10)));
}}

}


};gdjs.StartCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8), true);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "progress");
}
{ //Subevents
gdjs.StartCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8), false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Language", false);
}}

}


{



}


};gdjs.StartCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Login", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Safeguard_app", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 2;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "S. Pedro Alcantara Enigma", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 3;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "S. Pedro Alcantara Fim", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 5;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Percurso S. Roque", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 6;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "S. Roque Entrada", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 7;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "S. Roque Cruzadas 1", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 8;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "S. Roque Cruzadas 2", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 9;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "S. Roque fim", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 10;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Percurso Carmo", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 11;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Carmo Escadas", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 12;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Carmo Enigma", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 13;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Bolo de Bacalhau", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 14;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Percurso Brasileira", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 15;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Brasileira Enigma", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 16;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Brasileira Fim", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 17;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Percurso Manteigaria", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 18;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Manteigaria Enigma", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 19;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Manteigaria Fim", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 20;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Percurso Bica", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 21;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Bica Enigma", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 22;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Bica Fim", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 23;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Percurso Camoes", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 24;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Camoes Enigma", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 25;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Camoes Fim", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 26;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Percurso S. Carlos", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 27;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "S. Carlos", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 28;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Fim", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 29;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Leaderboard", false);
}}

}


};gdjs.StartCode.eventsList5 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "UID");
}{gdjs.evtsExt__Geolocation__LocatePlayer.func(runtimeScene, runtimeScene.getScene().getVariables().get("GPS"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().get("UID_atual").setString(gdjs.evtTools.firebaseTools.auth.userManagement.getUID());
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Amarela", runtimeScene.getScene().getVariables().get("UID_amarela"), runtimeScene.getScene().getVariables().getFromIndex(4));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Azul", runtimeScene.getScene().getVariables().get("UID_azul"), runtimeScene.getScene().getVariables().getFromIndex(4));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Castanha", runtimeScene.getScene().getVariables().get("UID_castanha"), runtimeScene.getScene().getVariables().getFromIndex(4));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Rosa", runtimeScene.getScene().getVariables().get("UID_rosa"), runtimeScene.getScene().getVariables().getFromIndex(4));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Roxa", runtimeScene.getScene().getVariables().get("UID_roxa"), runtimeScene.getScene().getVariables().getFromIndex(4));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Verde", runtimeScene.getScene().getVariables().get("UID_verde"), runtimeScene.getScene().getVariables().getFromIndex(4));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "UID") > 5;
if (isConditionTrue_0) {

{ //Subevents
gdjs.StartCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("leaderboard_error"), gdjs.StartCode.GDleaderboard_9595errorObjects1);
gdjs.copyArray(runtimeScene.getObjects("loading"), gdjs.StartCode.GDloadingObjects1);
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "UID");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "progress");
}{for(var i = 0, len = gdjs.StartCode.GDleaderboard_9595errorObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDleaderboard_9595errorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.StartCode.GDloadingObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDloadingObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.StartCode.GDloadingObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDloadingObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setString(gdjs.evtTools.firebaseTools.auth.userManagement.getUID());
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("loading"), gdjs.StartCode.GDloadingObjects1);
{for(var i = 0, len = gdjs.StartCode.GDloadingObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDloadingObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.StartCode.GDloadingObjects1[i].getWidth())) / 2);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(gdjs.evtTools.firebaseTools.auth.userManagement.getUID());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) != "";
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.hasVariable(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)), runtimeScene.getScene().getVariables().getFromIndex(8), runtimeScene.getScene().getVariables().getFromIndex(4));
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.firebaseTools.database.getField("Leaderboard", "ID", runtimeScene.getScene().getVariables().getFromIndex(10), runtimeScene.getScene().getVariables().getFromIndex(4));
}
{ //Subevents
gdjs.StartCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "UID") > 2;
if (isConditionTrue_0) {

{ //Subevents
gdjs.StartCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "progress") > 1;
if (isConditionTrue_0) {

{ //Subevents
gdjs.StartCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDUIDObjects1.length = 0;
gdjs.StartCode.GDUIDObjects2.length = 0;
gdjs.StartCode.GDUIDObjects3.length = 0;
gdjs.StartCode.GDUIDObjects4.length = 0;
gdjs.StartCode.GDfundoObjects1.length = 0;
gdjs.StartCode.GDfundoObjects2.length = 0;
gdjs.StartCode.GDfundoObjects3.length = 0;
gdjs.StartCode.GDfundoObjects4.length = 0;
gdjs.StartCode.GDloadingObjects1.length = 0;
gdjs.StartCode.GDloadingObjects2.length = 0;
gdjs.StartCode.GDloadingObjects3.length = 0;
gdjs.StartCode.GDloadingObjects4.length = 0;
gdjs.StartCode.GDleaderboard_9595errorObjects1.length = 0;
gdjs.StartCode.GDleaderboard_9595errorObjects2.length = 0;
gdjs.StartCode.GDleaderboard_9595errorObjects3.length = 0;
gdjs.StartCode.GDleaderboard_9595errorObjects4.length = 0;
gdjs.StartCode.GDscoreObjects1.length = 0;
gdjs.StartCode.GDscoreObjects2.length = 0;
gdjs.StartCode.GDscoreObjects3.length = 0;
gdjs.StartCode.GDscoreObjects4.length = 0;
gdjs.StartCode.GDnext_9595sceneObjects1.length = 0;
gdjs.StartCode.GDnext_9595sceneObjects2.length = 0;
gdjs.StartCode.GDnext_9595sceneObjects3.length = 0;
gdjs.StartCode.GDnext_9595sceneObjects4.length = 0;
gdjs.StartCode.GDURLObjects1.length = 0;
gdjs.StartCode.GDURLObjects2.length = 0;
gdjs.StartCode.GDURLObjects3.length = 0;
gdjs.StartCode.GDURLObjects4.length = 0;
gdjs.StartCode.GDfundopistagmObjects1.length = 0;
gdjs.StartCode.GDfundopistagmObjects2.length = 0;
gdjs.StartCode.GDfundopistagmObjects3.length = 0;
gdjs.StartCode.GDfundopistagmObjects4.length = 0;
gdjs.StartCode.GDpistagmObjects1.length = 0;
gdjs.StartCode.GDpistagmObjects2.length = 0;
gdjs.StartCode.GDpistagmObjects3.length = 0;
gdjs.StartCode.GDpistagmObjects4.length = 0;
gdjs.StartCode.GDdigitsObjects1.length = 0;
gdjs.StartCode.GDdigitsObjects2.length = 0;
gdjs.StartCode.GDdigitsObjects3.length = 0;
gdjs.StartCode.GDdigitsObjects4.length = 0;
gdjs.StartCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.StartCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.StartCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.StartCode.GDlocal_9595erradoObjects4.length = 0;
gdjs.StartCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.StartCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.StartCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.StartCode.GDtask_9595confirmationObjects4.length = 0;
gdjs.StartCode.GDgmapsObjects1.length = 0;
gdjs.StartCode.GDgmapsObjects2.length = 0;
gdjs.StartCode.GDgmapsObjects3.length = 0;
gdjs.StartCode.GDgmapsObjects4.length = 0;

gdjs.StartCode.eventsList5(runtimeScene);

return;

}

gdjs['StartCode'] = gdjs.StartCode;
