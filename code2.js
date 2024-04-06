gdjs.LoginCode = {};
gdjs.LoginCode.GDcodeObjects1= [];
gdjs.LoginCode.GDcodeObjects2= [];
gdjs.LoginCode.GDcodeObjects3= [];
gdjs.LoginCode.GDokObjects1= [];
gdjs.LoginCode.GDokObjects2= [];
gdjs.LoginCode.GDokObjects3= [];
gdjs.LoginCode.GDloading_9595animationObjects1= [];
gdjs.LoginCode.GDloading_9595animationObjects2= [];
gdjs.LoginCode.GDloading_9595animationObjects3= [];
gdjs.LoginCode.GDfundoObjects1= [];
gdjs.LoginCode.GDfundoObjects2= [];
gdjs.LoginCode.GDfundoObjects3= [];
gdjs.LoginCode.GDnameObjects1= [];
gdjs.LoginCode.GDnameObjects2= [];
gdjs.LoginCode.GDnameObjects3= [];
gdjs.LoginCode.GDfundo2Objects1= [];
gdjs.LoginCode.GDfundo2Objects2= [];
gdjs.LoginCode.GDfundo2Objects3= [];
gdjs.LoginCode.GDwrongObjects1= [];
gdjs.LoginCode.GDwrongObjects2= [];
gdjs.LoginCode.GDwrongObjects3= [];
gdjs.LoginCode.GDemptyObjects1= [];
gdjs.LoginCode.GDemptyObjects2= [];
gdjs.LoginCode.GDemptyObjects3= [];
gdjs.LoginCode.GDscoreObjects1= [];
gdjs.LoginCode.GDscoreObjects2= [];
gdjs.LoginCode.GDscoreObjects3= [];
gdjs.LoginCode.GDnext_9595sceneObjects1= [];
gdjs.LoginCode.GDnext_9595sceneObjects2= [];
gdjs.LoginCode.GDnext_9595sceneObjects3= [];
gdjs.LoginCode.GDURLObjects1= [];
gdjs.LoginCode.GDURLObjects2= [];
gdjs.LoginCode.GDURLObjects3= [];
gdjs.LoginCode.GDfundopistagmObjects1= [];
gdjs.LoginCode.GDfundopistagmObjects2= [];
gdjs.LoginCode.GDfundopistagmObjects3= [];
gdjs.LoginCode.GDpistagmObjects1= [];
gdjs.LoginCode.GDpistagmObjects2= [];
gdjs.LoginCode.GDpistagmObjects3= [];
gdjs.LoginCode.GDdigitsObjects1= [];
gdjs.LoginCode.GDdigitsObjects2= [];
gdjs.LoginCode.GDdigitsObjects3= [];
gdjs.LoginCode.GDlocal_9595erradoObjects1= [];
gdjs.LoginCode.GDlocal_9595erradoObjects2= [];
gdjs.LoginCode.GDlocal_9595erradoObjects3= [];
gdjs.LoginCode.GDtask_9595confirmationObjects1= [];
gdjs.LoginCode.GDtask_9595confirmationObjects2= [];
gdjs.LoginCode.GDtask_9595confirmationObjects3= [];
gdjs.LoginCode.GDgmapsObjects1= [];
gdjs.LoginCode.GDgmapsObjects2= [];
gdjs.LoginCode.GDgmapsObjects3= [];


gdjs.LoginCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16855076);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Track", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), runtimeScene.getScene().getVariables().get("error"));
}}

}


};gdjs.LoginCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16863476);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.auth.anonymSignIn(runtimeScene.getScene().getVariables().get("error"));
}}

}


};gdjs.LoginCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16877964);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}}

}


};gdjs.LoginCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16879980);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField("Timer", "Hour", runtimeScene.getScene().getVariables().get("hour"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Minute", runtimeScene.getScene().getVariables().get("minute"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("Leaderboard", "ID", runtimeScene.getScene().getVariables().get("leaderboard"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Next", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Team", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Language", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7))), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))), runtimeScene.getScene().getVariables().get("error"));
}}

}


};gdjs.LoginCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("amarela")) == 1;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("amarela")) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("UID", "Amarela", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("azul")) == 1;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("azul")) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("UID", "Azul", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("castanha")) == 1;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("castanha")) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("UID", "Castanha", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("rosa")) == 1;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("rosa")) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("UID", "Rosa", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("roxa")) == 1;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("roxa")) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("UID", "Roxa", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("verde")) == 1;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("verde")) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("UID", "Verde", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getScene().getVariables().get("error"));
}}

}


};gdjs.LoginCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16896908);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.LoginCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16899580);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.LoginCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("equipa")) == "1101";
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("equipa")) == "1202";
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("equipa")) == "1303";
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("equipa")) == "1404";
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("equipa")) == "1505";
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("equipa")) == "1606";
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("code"), gdjs.LoginCode.GDcodeObjects2);
gdjs.copyArray(runtimeScene.getObjects("empty"), gdjs.LoginCode.GDemptyObjects2);
gdjs.copyArray(gdjs.LoginCode.GDnameObjects1, gdjs.LoginCode.GDnameObjects2);

gdjs.copyArray(gdjs.LoginCode.GDokObjects1, gdjs.LoginCode.GDokObjects2);

{runtimeScene.getScene().getVariables().get("equipa").setString("");
}{for(var i = 0, len = gdjs.LoginCode.GDcodeObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDcodeObjects2[i].setDisabled(true);
}
}{for(var i = 0, len = gdjs.LoginCode.GDnameObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDnameObjects2[i].setDisabled(true);
}
}{for(var i = 0, len = gdjs.LoginCode.GDcodeObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDcodeObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.LoginCode.GDnameObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDnameObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.LoginCode.GDokObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDokObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.LoginCode.GDemptyObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDemptyObjects2[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "invalid");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16904236);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.LoginCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("empty"), gdjs.LoginCode.GDemptyObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundo2"), gdjs.LoginCode.GDfundo2Objects1);
gdjs.copyArray(runtimeScene.getObjects("loading_animation"), gdjs.LoginCode.GDloading_9595animationObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.LoginCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.LoginCode.GDwrongObjects1);
{for(var i = 0, len = gdjs.LoginCode.GDokObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDokObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.LoginCode.GDokObjects1[i].getWidth())) / 2);
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "invalid");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "inscrito");
}{for(var i = 0, len = gdjs.LoginCode.GDloading_9595animationObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDloading_9595animationObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LoginCode.GDfundo2Objects1.length ;i < len;++i) {
    gdjs.LoginCode.GDfundo2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.LoginCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDwrongObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LoginCode.GDemptyObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDemptyObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().get("equipa").setString("");
}{runtimeScene.getScene().getVariables().get("amarela").setNumber(3);
}{runtimeScene.getScene().getVariables().get("azul").setNumber(3);
}{runtimeScene.getScene().getVariables().get("castanha").setNumber(3);
}{runtimeScene.getScene().getVariables().get("rosa").setNumber(3);
}{runtimeScene.getScene().getVariables().get("roxa").setNumber(3);
}{runtimeScene.getScene().getVariables().get("verde").setNumber(3);
}{gdjs.evtsExt__Geolocation__LocatePlayer.func(runtimeScene, runtimeScene.getScene().getVariables().get("GPS"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.LoginCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("code"), gdjs.LoginCode.GDcodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("loading_animation"), gdjs.LoginCode.GDloading_9595animationObjects1);
gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.LoginCode.GDnameObjects1);
{for(var i = 0, len = gdjs.LoginCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDcodeObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.LoginCode.GDcodeObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.LoginCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDnameObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.LoginCode.GDnameObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.LoginCode.GDloading_9595animationObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDloading_9595animationObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.LoginCode.GDloading_9595animationObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.LoginCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDnameObjects1[i].setText(gdjs.evtTools.string.toUpperCase((gdjs.LoginCode.GDnameObjects1[i].getText())));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.LoginCode.GDfundoObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.LoginCode.GDwrongObjects1);
{for(var i = 0, len = gdjs.LoginCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDfundoObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}{for(var i = 0, len = gdjs.LoginCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDwrongObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("code"), gdjs.LoginCode.GDcodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.LoginCode.GDnameObjects1);
{for(var i = 0, len = gdjs.LoginCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDcodeObjects1[i].setPlaceholder("TOQUE PARA INSERIR");
}
}{for(var i = 0, len = gdjs.LoginCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDnameObjects1[i].setPlaceholder("TOQUE PARA INSERIR");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("code"), gdjs.LoginCode.GDcodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.LoginCode.GDnameObjects1);
{for(var i = 0, len = gdjs.LoginCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDcodeObjects1[i].setPlaceholder("TOUCH TO ADD");
}
}{for(var i = 0, len = gdjs.LoginCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDnameObjects1[i].setPlaceholder("TOUCH TO ADD");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("code"), gdjs.LoginCode.GDcodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.LoginCode.GDnameObjects1);
{for(var i = 0, len = gdjs.LoginCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDcodeObjects1[i].setPlaceholder("TAP POUR INSERER");
}
}{for(var i = 0, len = gdjs.LoginCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDnameObjects1[i].setPlaceholder("TAP POUR INSERER");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("code"), gdjs.LoginCode.GDcodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.LoginCode.GDnameObjects1);
{for(var i = 0, len = gdjs.LoginCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDcodeObjects1[i].setPlaceholder("PULSE PARA INSERTAR");
}
}{for(var i = 0, len = gdjs.LoginCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDnameObjects1[i].setPlaceholder("PULSE PARA INSERTAR");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.LoginCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.LoginCode.GDokObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.LoginCode.GDokObjects1[k] = gdjs.LoginCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.LoginCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.LoginCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LoginCode.GDokObjects1[k] = gdjs.LoginCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.LoginCode.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("code"), gdjs.LoginCode.GDcodeObjects1);
{runtimeScene.getScene().getVariables().get("equipa").setString((( gdjs.LoginCode.GDcodeObjects1.length === 0 ) ? "" :gdjs.LoginCode.GDcodeObjects1[0].getText()));
}
{ //Subevents
gdjs.LoginCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.LoginCode.GDnameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.LoginCode.GDnameObjects1[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_0 = true;
        gdjs.LoginCode.GDnameObjects1[k] = gdjs.LoginCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.LoginCode.GDnameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("equipa")) == "1101";
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.hasVariable("UID/Amarela", runtimeScene.getScene().getVariables().get("amarela"), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("amarela")) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("amarela")) == 1;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField("UID", "Amarela", runtimeScene.getScene().getVariables().get("UID"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.LoginCode.GDnameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.LoginCode.GDnameObjects1[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_0 = true;
        gdjs.LoginCode.GDnameObjects1[k] = gdjs.LoginCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.LoginCode.GDnameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("equipa")) == "1202";
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.hasVariable("UID/Azul", runtimeScene.getScene().getVariables().get("azul"), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("azul")) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("azul")) == 1;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField("UID", "Azul", runtimeScene.getScene().getVariables().get("UID"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.LoginCode.GDnameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.LoginCode.GDnameObjects1[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_0 = true;
        gdjs.LoginCode.GDnameObjects1[k] = gdjs.LoginCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.LoginCode.GDnameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("equipa")) == "1303";
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.hasVariable("UID/Castanha", runtimeScene.getScene().getVariables().get("castanha"), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("castanha")) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("castanha")) == 1;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField("UID", "Castanha", runtimeScene.getScene().getVariables().get("UID"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.LoginCode.GDnameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.LoginCode.GDnameObjects1[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_0 = true;
        gdjs.LoginCode.GDnameObjects1[k] = gdjs.LoginCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.LoginCode.GDnameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("equipa")) == "1404";
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.hasVariable("UID/Rosa", runtimeScene.getScene().getVariables().get("rosa"), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("rosa")) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("rosa")) == 1;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField("UID", "Rosa", runtimeScene.getScene().getVariables().get("UID"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.LoginCode.GDnameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.LoginCode.GDnameObjects1[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_0 = true;
        gdjs.LoginCode.GDnameObjects1[k] = gdjs.LoginCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.LoginCode.GDnameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("equipa")) == "1505";
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.hasVariable("UID/Roxa", runtimeScene.getScene().getVariables().get("roxa"), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("roxa")) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("roxa")) == 1;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField("UID", "Roxa", runtimeScene.getScene().getVariables().get("UID"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.LoginCode.GDnameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.LoginCode.GDnameObjects1[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_0 = true;
        gdjs.LoginCode.GDnameObjects1[k] = gdjs.LoginCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.LoginCode.GDnameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("equipa")) == "1606";
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.hasVariable("UID/Verde", runtimeScene.getScene().getVariables().get("verde"), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("verde")) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("verde")) == 1;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField("UID", "Verde", runtimeScene.getScene().getVariables().get("UID"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 0.1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("code"), gdjs.LoginCode.GDcodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundo2"), gdjs.LoginCode.GDfundo2Objects1);
gdjs.copyArray(runtimeScene.getObjects("loading_animation"), gdjs.LoginCode.GDloading_9595animationObjects1);
gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.LoginCode.GDnameObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.LoginCode.GDokObjects1);
{for(var i = 0, len = gdjs.LoginCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDcodeObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LoginCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDnameObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LoginCode.GDokObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDokObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LoginCode.GDfundo2Objects1.length ;i < len;++i) {
    gdjs.LoginCode.GDfundo2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.LoginCode.GDloading_9595animationObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDloading_9595animationObjects1[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString((( gdjs.LoginCode.GDnameObjects1.length === 0 ) ? "" :gdjs.LoginCode.GDnameObjects1[0].getText()));
}
{ //Subevents
gdjs.LoginCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") > 0.1;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") <= 4;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LoginCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") <= 4;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("leaderboard")));
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("minute")));
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("hour")));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 5;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Safeguard_app", false);
}
{ //Subevents
gdjs.LoginCode.eventsList4(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("equipa")) != "";
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("equipa")) != "1101";
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("equipa")) != "1202";
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("equipa")) != "1303";
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("equipa")) != "1404";
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("equipa")) != "1505";
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("equipa")) != "1606";
}
}
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("code"), gdjs.LoginCode.GDcodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.LoginCode.GDnameObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.LoginCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.LoginCode.GDwrongObjects1);
{runtimeScene.getScene().getVariables().get("equipa").setString("");
}{for(var i = 0, len = gdjs.LoginCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDcodeObjects1[i].setDisabled(true);
}
}{for(var i = 0, len = gdjs.LoginCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDnameObjects1[i].setDisabled(true);
}
}{for(var i = 0, len = gdjs.LoginCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDcodeObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LoginCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDnameObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LoginCode.GDokObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDokObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LoginCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDwrongObjects1[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "invalid");
}
{ //Subevents
gdjs.LoginCode.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("code"), gdjs.LoginCode.GDcodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.LoginCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.LoginCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LoginCode.GDokObjects1[k] = gdjs.LoginCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.LoginCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginCode.GDcodeObjects1.length;i<l;++i) {
    if ( gdjs.LoginCode.GDcodeObjects1[i].getBehavior("Text").getText() == "" ) {
        isConditionTrue_0 = true;
        gdjs.LoginCode.GDcodeObjects1[k] = gdjs.LoginCode.GDcodeObjects1[i];
        ++k;
    }
}
gdjs.LoginCode.GDcodeObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.LoginCode.GDcodeObjects1 */
gdjs.copyArray(runtimeScene.getObjects("empty"), gdjs.LoginCode.GDemptyObjects1);
gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.LoginCode.GDnameObjects1);
/* Reuse gdjs.LoginCode.GDokObjects1 */
{runtimeScene.getScene().getVariables().get("equipa").setString("");
}{for(var i = 0, len = gdjs.LoginCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDcodeObjects1[i].setDisabled(true);
}
}{for(var i = 0, len = gdjs.LoginCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDnameObjects1[i].setDisabled(true);
}
}{for(var i = 0, len = gdjs.LoginCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDcodeObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LoginCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDnameObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LoginCode.GDokObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDokObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LoginCode.GDemptyObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDemptyObjects1[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "invalid");
}
{ //Subevents
gdjs.LoginCode.eventsList6(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.LoginCode.GDnameObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.LoginCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.LoginCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LoginCode.GDokObjects1[k] = gdjs.LoginCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.LoginCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.LoginCode.GDnameObjects1[i].getBehavior("Text").getText() == "" ) {
        isConditionTrue_0 = true;
        gdjs.LoginCode.GDnameObjects1[k] = gdjs.LoginCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.LoginCode.GDnameObjects1.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LoginCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "invalid") >= 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("code"), gdjs.LoginCode.GDcodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("empty"), gdjs.LoginCode.GDemptyObjects1);
gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.LoginCode.GDnameObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.LoginCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.LoginCode.GDwrongObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "invalid");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "invalid");
}{for(var i = 0, len = gdjs.LoginCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDcodeObjects1[i].setText("");
}
}{for(var i = 0, len = gdjs.LoginCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDcodeObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.LoginCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDnameObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.LoginCode.GDokObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDokObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.LoginCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDcodeObjects1[i].setDisabled(false);
}
}{for(var i = 0, len = gdjs.LoginCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDnameObjects1[i].setDisabled(false);
}
}{for(var i = 0, len = gdjs.LoginCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDwrongObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LoginCode.GDemptyObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDemptyObjects1[i].hide();
}
}}

}


};

gdjs.LoginCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoginCode.GDcodeObjects1.length = 0;
gdjs.LoginCode.GDcodeObjects2.length = 0;
gdjs.LoginCode.GDcodeObjects3.length = 0;
gdjs.LoginCode.GDokObjects1.length = 0;
gdjs.LoginCode.GDokObjects2.length = 0;
gdjs.LoginCode.GDokObjects3.length = 0;
gdjs.LoginCode.GDloading_9595animationObjects1.length = 0;
gdjs.LoginCode.GDloading_9595animationObjects2.length = 0;
gdjs.LoginCode.GDloading_9595animationObjects3.length = 0;
gdjs.LoginCode.GDfundoObjects1.length = 0;
gdjs.LoginCode.GDfundoObjects2.length = 0;
gdjs.LoginCode.GDfundoObjects3.length = 0;
gdjs.LoginCode.GDnameObjects1.length = 0;
gdjs.LoginCode.GDnameObjects2.length = 0;
gdjs.LoginCode.GDnameObjects3.length = 0;
gdjs.LoginCode.GDfundo2Objects1.length = 0;
gdjs.LoginCode.GDfundo2Objects2.length = 0;
gdjs.LoginCode.GDfundo2Objects3.length = 0;
gdjs.LoginCode.GDwrongObjects1.length = 0;
gdjs.LoginCode.GDwrongObjects2.length = 0;
gdjs.LoginCode.GDwrongObjects3.length = 0;
gdjs.LoginCode.GDemptyObjects1.length = 0;
gdjs.LoginCode.GDemptyObjects2.length = 0;
gdjs.LoginCode.GDemptyObjects3.length = 0;
gdjs.LoginCode.GDscoreObjects1.length = 0;
gdjs.LoginCode.GDscoreObjects2.length = 0;
gdjs.LoginCode.GDscoreObjects3.length = 0;
gdjs.LoginCode.GDnext_9595sceneObjects1.length = 0;
gdjs.LoginCode.GDnext_9595sceneObjects2.length = 0;
gdjs.LoginCode.GDnext_9595sceneObjects3.length = 0;
gdjs.LoginCode.GDURLObjects1.length = 0;
gdjs.LoginCode.GDURLObjects2.length = 0;
gdjs.LoginCode.GDURLObjects3.length = 0;
gdjs.LoginCode.GDfundopistagmObjects1.length = 0;
gdjs.LoginCode.GDfundopistagmObjects2.length = 0;
gdjs.LoginCode.GDfundopistagmObjects3.length = 0;
gdjs.LoginCode.GDpistagmObjects1.length = 0;
gdjs.LoginCode.GDpistagmObjects2.length = 0;
gdjs.LoginCode.GDpistagmObjects3.length = 0;
gdjs.LoginCode.GDdigitsObjects1.length = 0;
gdjs.LoginCode.GDdigitsObjects2.length = 0;
gdjs.LoginCode.GDdigitsObjects3.length = 0;
gdjs.LoginCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.LoginCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.LoginCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.LoginCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.LoginCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.LoginCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.LoginCode.GDgmapsObjects1.length = 0;
gdjs.LoginCode.GDgmapsObjects2.length = 0;
gdjs.LoginCode.GDgmapsObjects3.length = 0;

gdjs.LoginCode.eventsList8(runtimeScene);

return;

}

gdjs['LoginCode'] = gdjs.LoginCode;
