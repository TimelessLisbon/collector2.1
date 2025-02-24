gdjs.S_46_32Roque_32fimCode = {};
gdjs.S_46_32Roque_32fimCode.localVariables = [];
gdjs.S_46_32Roque_32fimCode.GDyesObjects1_1final = [];

gdjs.S_46_32Roque_32fimCode.GDprox_9595localObjects1= [];
gdjs.S_46_32Roque_32fimCode.GDprox_9595localObjects2= [];
gdjs.S_46_32Roque_32fimCode.GDprox_9595localObjects3= [];
gdjs.S_46_32Roque_32fimCode.GDnoObjects1= [];
gdjs.S_46_32Roque_32fimCode.GDnoObjects2= [];
gdjs.S_46_32Roque_32fimCode.GDnoObjects3= [];
gdjs.S_46_32Roque_32fimCode.GDyesObjects1= [];
gdjs.S_46_32Roque_32fimCode.GDyesObjects2= [];
gdjs.S_46_32Roque_32fimCode.GDyesObjects3= [];
gdjs.S_46_32Roque_32fimCode.GDfundoObjects1= [];
gdjs.S_46_32Roque_32fimCode.GDfundoObjects2= [];
gdjs.S_46_32Roque_32fimCode.GDfundoObjects3= [];
gdjs.S_46_32Roque_32fimCode.GDscoreObjects1= [];
gdjs.S_46_32Roque_32fimCode.GDscoreObjects2= [];
gdjs.S_46_32Roque_32fimCode.GDscoreObjects3= [];
gdjs.S_46_32Roque_32fimCode.GDnext_9595sceneObjects1= [];
gdjs.S_46_32Roque_32fimCode.GDnext_9595sceneObjects2= [];
gdjs.S_46_32Roque_32fimCode.GDnext_9595sceneObjects3= [];
gdjs.S_46_32Roque_32fimCode.GDURLObjects1= [];
gdjs.S_46_32Roque_32fimCode.GDURLObjects2= [];
gdjs.S_46_32Roque_32fimCode.GDURLObjects3= [];
gdjs.S_46_32Roque_32fimCode.GDfundopistagmObjects1= [];
gdjs.S_46_32Roque_32fimCode.GDfundopistagmObjects2= [];
gdjs.S_46_32Roque_32fimCode.GDfundopistagmObjects3= [];
gdjs.S_46_32Roque_32fimCode.GDpistagmObjects1= [];
gdjs.S_46_32Roque_32fimCode.GDpistagmObjects2= [];
gdjs.S_46_32Roque_32fimCode.GDpistagmObjects3= [];
gdjs.S_46_32Roque_32fimCode.GDdigitsObjects1= [];
gdjs.S_46_32Roque_32fimCode.GDdigitsObjects2= [];
gdjs.S_46_32Roque_32fimCode.GDdigitsObjects3= [];
gdjs.S_46_32Roque_32fimCode.GDlocal_9595erradoObjects1= [];
gdjs.S_46_32Roque_32fimCode.GDlocal_9595erradoObjects2= [];
gdjs.S_46_32Roque_32fimCode.GDlocal_9595erradoObjects3= [];
gdjs.S_46_32Roque_32fimCode.GDtask_9595confirmationObjects1= [];
gdjs.S_46_32Roque_32fimCode.GDtask_9595confirmationObjects2= [];
gdjs.S_46_32Roque_32fimCode.GDtask_9595confirmationObjects3= [];
gdjs.S_46_32Roque_32fimCode.GDgmapsObjects1= [];
gdjs.S_46_32Roque_32fimCode.GDgmapsObjects2= [];
gdjs.S_46_32Roque_32fimCode.GDgmapsObjects3= [];


gdjs.S_46_32Roque_32fimCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19464532);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Track", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Team", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Hour", runtimeScene.getScene().getVariables().get("hour"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Minute", runtimeScene.getScene().getVariables().get("minute"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 0, 1);
}}

}


};gdjs.S_46_32Roque_32fimCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("voucher")) == "not selected";
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("voucher")) == "";
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.S_46_32Roque_32fimCode.GDfundoObjects2);
{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDfundoObjects2.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDfundoObjects2[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("voucher")) == "selected";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.S_46_32Roque_32fimCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDfundoObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) + 4);
}
}}

}


};gdjs.S_46_32Roque_32fimCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19483316);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Roque_32fimCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19484892);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Roque_32fimCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19487716);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Roque_32fimCode.eventsList5 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19489724);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.S_46_32Roque_32fimCode.GDnext_9595sceneObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, (( gdjs.S_46_32Roque_32fimCode.GDnext_9595sceneObjects1.length === 0 ) ? "" :gdjs.S_46_32Roque_32fimCode.GDnext_9595sceneObjects1[0].getString()), false);
}}

}


};gdjs.S_46_32Roque_32fimCode.eventsList6 = function(runtimeScene) {

{



}


{



}


{



}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.S_46_32Roque_32fimCode.GDnext_9595sceneObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(9);
}{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDnext_9595sceneObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDnext_9595sceneObjects1[i].setString("Percurso Carmo");
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
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.S_46_32Roque_32fimCode.GDnext_9595sceneObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.S_46_32Roque_32fimCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.S_46_32Roque_32fimCode.GDtask_9595confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.S_46_32Roque_32fimCode.GDyesObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDnext_9595sceneObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDnext_9595sceneObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDtask_9595confirmationObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDtask_9595confirmationObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scene_start");
}{runtimeScene.getScene().getVariables().get("scene").setString(gdjs.evtTools.runtimeScene.getSceneName(runtimeScene));
}
{ //Subevents
gdjs.S_46_32Roque_32fimCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") <= 0;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("hour")));
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("minute")));
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Next", runtimeScene.getScene().getVariables().get("next"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Language", runtimeScene.getScene().getVariables().get("language"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("Voucher", "Status", runtimeScene.getScene().getVariables().get("voucher"), runtimeScene.getScene().getVariables().get("error"));
}}

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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32Roque_32fimCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32Roque_32fimCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32Roque_32fimCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.S_46_32Roque_32fimCode.GDtask_9595confirmationObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDtask_9595confirmationObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDtask_9595confirmationObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("scene")) != "Bolo de Bacalhau";
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("scene")) != "Manteigaria Fim";
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.S_46_32Roque_32fimCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDfundoObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.S_46_32Roque_32fimCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("prox_local"), gdjs.S_46_32Roque_32fimCode.GDprox_9595localObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.S_46_32Roque_32fimCode.GDyesObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDyesObjects1[i].SetLabelText("SIM", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDnoObjects1[i].SetLabelText("NÃO", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDprox_9595localObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDprox_9595localObjects1[i].SetLabelText("Prox. local", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.S_46_32Roque_32fimCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("prox_local"), gdjs.S_46_32Roque_32fimCode.GDprox_9595localObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.S_46_32Roque_32fimCode.GDyesObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDyesObjects1[i].SetLabelText("YES", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDnoObjects1[i].SetLabelText("NO", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDprox_9595localObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDprox_9595localObjects1[i].SetLabelText("Next Place", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.S_46_32Roque_32fimCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("prox_local"), gdjs.S_46_32Roque_32fimCode.GDprox_9595localObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.S_46_32Roque_32fimCode.GDyesObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDyesObjects1[i].SetLabelText("OUI", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDnoObjects1[i].SetLabelText("NON", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDprox_9595localObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDprox_9595localObjects1[i].SetLabelText("Suivant", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.S_46_32Roque_32fimCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("prox_local"), gdjs.S_46_32Roque_32fimCode.GDprox_9595localObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.S_46_32Roque_32fimCode.GDyesObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDyesObjects1[i].SetLabelText("SI", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDnoObjects1[i].SetLabelText("NO", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDprox_9595localObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDprox_9595localObjects1[i].SetLabelText("Siguiente", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
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
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("scene")) == "Bolo de Bacalhau";
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("scene")) == "Manteigaria Fim";
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S_46_32Roque_32fimCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("prox_local"), gdjs.S_46_32Roque_32fimCode.GDprox_9595localObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32fimCode.GDprox_9595localObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32fimCode.GDprox_9595localObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32fimCode.GDprox_9595localObjects1[k] = gdjs.S_46_32Roque_32fimCode.GDprox_9595localObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32fimCode.GDprox_9595localObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.S_46_32Roque_32fimCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.S_46_32Roque_32fimCode.GDtask_9595confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.S_46_32Roque_32fimCode.GDyesObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDnoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDyesObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDtask_9595confirmationObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDtask_9595confirmationObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.S_46_32Roque_32fimCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.S_46_32Roque_32fimCode.GDnoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32fimCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32fimCode.GDnoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32fimCode.GDnoObjects1[k] = gdjs.S_46_32Roque_32fimCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32fimCode.GDnoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32fimCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32fimCode.GDnoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32fimCode.GDnoObjects1[k] = gdjs.S_46_32Roque_32fimCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32fimCode.GDnoObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.S_46_32Roque_32fimCode.GDnoObjects1 */
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.S_46_32Roque_32fimCode.GDtask_9595confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.S_46_32Roque_32fimCode.GDyesObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDtask_9595confirmationObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDtask_9595confirmationObjects1[i].hide();
}
}
{ //Subevents
gdjs.S_46_32Roque_32fimCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.S_46_32Roque_32fimCode.GDyesObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.S_46_32Roque_32fimCode.GDyesObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.S_46_32Roque_32fimCode.GDyesObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32fimCode.GDyesObjects2.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32fimCode.GDyesObjects2[i].isVisible() ) {
        isConditionTrue_2 = true;
        gdjs.S_46_32Roque_32fimCode.GDyesObjects2[k] = gdjs.S_46_32Roque_32fimCode.GDyesObjects2[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32fimCode.GDyesObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32fimCode.GDyesObjects2.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32fimCode.GDyesObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_2 = true;
        gdjs.S_46_32Roque_32fimCode.GDyesObjects2[k] = gdjs.S_46_32Roque_32fimCode.GDyesObjects2[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32fimCode.GDyesObjects2.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.S_46_32Roque_32fimCode.GDyesObjects2.length; j < jLen ; ++j) {
        if ( gdjs.S_46_32Roque_32fimCode.GDyesObjects1_1final.indexOf(gdjs.S_46_32Roque_32fimCode.GDyesObjects2[j]) === -1 )
            gdjs.S_46_32Roque_32fimCode.GDyesObjects1_1final.push(gdjs.S_46_32Roque_32fimCode.GDyesObjects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("next")) == gdjs.evtTools.firebaseTools.auth.userManagement.getUID();
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.S_46_32Roque_32fimCode.GDyesObjects1_1final, gdjs.S_46_32Roque_32fimCode.GDyesObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}{runtimeScene.getScene().getVariables().get("next").setString("");
}
{ //Subevents
gdjs.S_46_32Roque_32fimCode.eventsList4(runtimeScene);} //End of subevents
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
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
{ //Subevents
gdjs.S_46_32Roque_32fimCode.eventsList5(runtimeScene);} //End of subevents
}

}


};

gdjs.S_46_32Roque_32fimCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S_46_32Roque_32fimCode.GDprox_9595localObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDprox_9595localObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDprox_9595localObjects3.length = 0;
gdjs.S_46_32Roque_32fimCode.GDnoObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDnoObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDnoObjects3.length = 0;
gdjs.S_46_32Roque_32fimCode.GDyesObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDyesObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDyesObjects3.length = 0;
gdjs.S_46_32Roque_32fimCode.GDfundoObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDfundoObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDfundoObjects3.length = 0;
gdjs.S_46_32Roque_32fimCode.GDscoreObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDscoreObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDscoreObjects3.length = 0;
gdjs.S_46_32Roque_32fimCode.GDnext_9595sceneObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDnext_9595sceneObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDnext_9595sceneObjects3.length = 0;
gdjs.S_46_32Roque_32fimCode.GDURLObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDURLObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDURLObjects3.length = 0;
gdjs.S_46_32Roque_32fimCode.GDfundopistagmObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDfundopistagmObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDfundopistagmObjects3.length = 0;
gdjs.S_46_32Roque_32fimCode.GDpistagmObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDpistagmObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDpistagmObjects3.length = 0;
gdjs.S_46_32Roque_32fimCode.GDdigitsObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDdigitsObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDdigitsObjects3.length = 0;
gdjs.S_46_32Roque_32fimCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.S_46_32Roque_32fimCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.S_46_32Roque_32fimCode.GDgmapsObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDgmapsObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDgmapsObjects3.length = 0;

gdjs.S_46_32Roque_32fimCode.eventsList6(runtimeScene);
gdjs.S_46_32Roque_32fimCode.GDprox_9595localObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDprox_9595localObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDprox_9595localObjects3.length = 0;
gdjs.S_46_32Roque_32fimCode.GDnoObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDnoObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDnoObjects3.length = 0;
gdjs.S_46_32Roque_32fimCode.GDyesObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDyesObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDyesObjects3.length = 0;
gdjs.S_46_32Roque_32fimCode.GDfundoObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDfundoObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDfundoObjects3.length = 0;
gdjs.S_46_32Roque_32fimCode.GDscoreObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDscoreObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDscoreObjects3.length = 0;
gdjs.S_46_32Roque_32fimCode.GDnext_9595sceneObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDnext_9595sceneObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDnext_9595sceneObjects3.length = 0;
gdjs.S_46_32Roque_32fimCode.GDURLObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDURLObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDURLObjects3.length = 0;
gdjs.S_46_32Roque_32fimCode.GDfundopistagmObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDfundopistagmObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDfundopistagmObjects3.length = 0;
gdjs.S_46_32Roque_32fimCode.GDpistagmObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDpistagmObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDpistagmObjects3.length = 0;
gdjs.S_46_32Roque_32fimCode.GDdigitsObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDdigitsObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDdigitsObjects3.length = 0;
gdjs.S_46_32Roque_32fimCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.S_46_32Roque_32fimCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.S_46_32Roque_32fimCode.GDgmapsObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDgmapsObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDgmapsObjects3.length = 0;


return;

}

gdjs['S_46_32Roque_32fimCode'] = gdjs.S_46_32Roque_32fimCode;
