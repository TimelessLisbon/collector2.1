gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.localVariables = [];
gdjs.LeaderboardCode.GDscoreObjects1= [];
gdjs.LeaderboardCode.GDscoreObjects2= [];
gdjs.LeaderboardCode.GDnext_9595sceneObjects1= [];
gdjs.LeaderboardCode.GDnext_9595sceneObjects2= [];
gdjs.LeaderboardCode.GDURLObjects1= [];
gdjs.LeaderboardCode.GDURLObjects2= [];
gdjs.LeaderboardCode.GDfundopistagmObjects1= [];
gdjs.LeaderboardCode.GDfundopistagmObjects2= [];
gdjs.LeaderboardCode.GDpistagmObjects1= [];
gdjs.LeaderboardCode.GDpistagmObjects2= [];
gdjs.LeaderboardCode.GDdigitsObjects1= [];
gdjs.LeaderboardCode.GDdigitsObjects2= [];
gdjs.LeaderboardCode.GDlocal_9595erradoObjects1= [];
gdjs.LeaderboardCode.GDlocal_9595erradoObjects2= [];
gdjs.LeaderboardCode.GDtask_9595confirmationObjects1= [];
gdjs.LeaderboardCode.GDtask_9595confirmationObjects2= [];
gdjs.LeaderboardCode.GDgmapsObjects1= [];
gdjs.LeaderboardCode.GDgmapsObjects2= [];


gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

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
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_vermelha"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_azulclara"));
}
}
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


};gdjs.LeaderboardCode.eventsList1 = function(runtimeScene) {

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
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Amarela", runtimeScene.getScene().getVariables().get("UID_amarela"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Azul", runtimeScene.getScene().getVariables().get("UID_azul"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Castanha", runtimeScene.getScene().getVariables().get("UID_castanha"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Rosa", runtimeScene.getScene().getVariables().get("UID_rosa"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Roxa", runtimeScene.getScene().getVariables().get("UID_roxa"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Verde", runtimeScene.getScene().getVariables().get("UID_verde"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Vermelha", runtimeScene.getScene().getVariables().get("UID_vermelha"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "AzulClara", runtimeScene.getScene().getVariables().get("UID_azulclara"), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "UID") > 5;
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)), true);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(31);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19383396);
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


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDscoreObjects1.length = 0;
gdjs.LeaderboardCode.GDscoreObjects2.length = 0;
gdjs.LeaderboardCode.GDnext_9595sceneObjects1.length = 0;
gdjs.LeaderboardCode.GDnext_9595sceneObjects2.length = 0;
gdjs.LeaderboardCode.GDURLObjects1.length = 0;
gdjs.LeaderboardCode.GDURLObjects2.length = 0;
gdjs.LeaderboardCode.GDfundopistagmObjects1.length = 0;
gdjs.LeaderboardCode.GDfundopistagmObjects2.length = 0;
gdjs.LeaderboardCode.GDpistagmObjects1.length = 0;
gdjs.LeaderboardCode.GDpistagmObjects2.length = 0;
gdjs.LeaderboardCode.GDdigitsObjects1.length = 0;
gdjs.LeaderboardCode.GDdigitsObjects2.length = 0;
gdjs.LeaderboardCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.LeaderboardCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.LeaderboardCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.LeaderboardCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.LeaderboardCode.GDgmapsObjects1.length = 0;
gdjs.LeaderboardCode.GDgmapsObjects2.length = 0;

gdjs.LeaderboardCode.eventsList1(runtimeScene);
gdjs.LeaderboardCode.GDscoreObjects1.length = 0;
gdjs.LeaderboardCode.GDscoreObjects2.length = 0;
gdjs.LeaderboardCode.GDnext_9595sceneObjects1.length = 0;
gdjs.LeaderboardCode.GDnext_9595sceneObjects2.length = 0;
gdjs.LeaderboardCode.GDURLObjects1.length = 0;
gdjs.LeaderboardCode.GDURLObjects2.length = 0;
gdjs.LeaderboardCode.GDfundopistagmObjects1.length = 0;
gdjs.LeaderboardCode.GDfundopistagmObjects2.length = 0;
gdjs.LeaderboardCode.GDpistagmObjects1.length = 0;
gdjs.LeaderboardCode.GDpistagmObjects2.length = 0;
gdjs.LeaderboardCode.GDdigitsObjects1.length = 0;
gdjs.LeaderboardCode.GDdigitsObjects2.length = 0;
gdjs.LeaderboardCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.LeaderboardCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.LeaderboardCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.LeaderboardCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.LeaderboardCode.GDgmapsObjects1.length = 0;
gdjs.LeaderboardCode.GDgmapsObjects2.length = 0;


return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
