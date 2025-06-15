gdjs.BOMB_32DEACTIVATORCode = {};
gdjs.BOMB_32DEACTIVATORCode.localVariables = [];
gdjs.BOMB_32DEACTIVATORCode.GDfundoObjects1= [];
gdjs.BOMB_32DEACTIVATORCode.GDfundoObjects2= [];
gdjs.BOMB_32DEACTIVATORCode.GDfundoObjects3= [];
gdjs.BOMB_32DEACTIVATORCode.GDacesso_9595negadoObjects1= [];
gdjs.BOMB_32DEACTIVATORCode.GDacesso_9595negadoObjects2= [];
gdjs.BOMB_32DEACTIVATORCode.GDacesso_9595negadoObjects3= [];
gdjs.BOMB_32DEACTIVATORCode.GDbackObjects1= [];
gdjs.BOMB_32DEACTIVATORCode.GDbackObjects2= [];
gdjs.BOMB_32DEACTIVATORCode.GDbackObjects3= [];
gdjs.BOMB_32DEACTIVATORCode.GDdataObjects1= [];
gdjs.BOMB_32DEACTIVATORCode.GDdataObjects2= [];
gdjs.BOMB_32DEACTIVATORCode.GDdataObjects3= [];
gdjs.BOMB_32DEACTIVATORCode.GDremainingObjects1= [];
gdjs.BOMB_32DEACTIVATORCode.GDremainingObjects2= [];
gdjs.BOMB_32DEACTIVATORCode.GDremainingObjects3= [];
gdjs.BOMB_32DEACTIVATORCode.GDattemptsObjects1= [];
gdjs.BOMB_32DEACTIVATORCode.GDattemptsObjects2= [];
gdjs.BOMB_32DEACTIVATORCode.GDattemptsObjects3= [];
gdjs.BOMB_32DEACTIVATORCode.GDscoreObjects1= [];
gdjs.BOMB_32DEACTIVATORCode.GDscoreObjects2= [];
gdjs.BOMB_32DEACTIVATORCode.GDscoreObjects3= [];
gdjs.BOMB_32DEACTIVATORCode.GDnext_9595sceneObjects1= [];
gdjs.BOMB_32DEACTIVATORCode.GDnext_9595sceneObjects2= [];
gdjs.BOMB_32DEACTIVATORCode.GDnext_9595sceneObjects3= [];
gdjs.BOMB_32DEACTIVATORCode.GDURLObjects1= [];
gdjs.BOMB_32DEACTIVATORCode.GDURLObjects2= [];
gdjs.BOMB_32DEACTIVATORCode.GDURLObjects3= [];
gdjs.BOMB_32DEACTIVATORCode.GDfundopistagmObjects1= [];
gdjs.BOMB_32DEACTIVATORCode.GDfundopistagmObjects2= [];
gdjs.BOMB_32DEACTIVATORCode.GDfundopistagmObjects3= [];
gdjs.BOMB_32DEACTIVATORCode.GDpistagmObjects1= [];
gdjs.BOMB_32DEACTIVATORCode.GDpistagmObjects2= [];
gdjs.BOMB_32DEACTIVATORCode.GDpistagmObjects3= [];
gdjs.BOMB_32DEACTIVATORCode.GDdigitsObjects1= [];
gdjs.BOMB_32DEACTIVATORCode.GDdigitsObjects2= [];
gdjs.BOMB_32DEACTIVATORCode.GDdigitsObjects3= [];
gdjs.BOMB_32DEACTIVATORCode.GDlocal_9595erradoObjects1= [];
gdjs.BOMB_32DEACTIVATORCode.GDlocal_9595erradoObjects2= [];
gdjs.BOMB_32DEACTIVATORCode.GDlocal_9595erradoObjects3= [];
gdjs.BOMB_32DEACTIVATORCode.GDtask_9595confirmationObjects1= [];
gdjs.BOMB_32DEACTIVATORCode.GDtask_9595confirmationObjects2= [];
gdjs.BOMB_32DEACTIVATORCode.GDtask_9595confirmationObjects3= [];
gdjs.BOMB_32DEACTIVATORCode.GDgmapsObjects1= [];
gdjs.BOMB_32DEACTIVATORCode.GDgmapsObjects2= [];
gdjs.BOMB_32DEACTIVATORCode.GDgmapsObjects3= [];


gdjs.BOMB_32DEACTIVATORCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18836932);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}}

}


{



}


};gdjs.BOMB_32DEACTIVATORCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("acesso_negado"), gdjs.BOMB_32DEACTIVATORCode.GDacesso_9595negadoObjects1);
{for(var i = 0, len = gdjs.BOMB_32DEACTIVATORCode.GDacesso_9595negadoObjects1.length ;i < len;++i) {
    gdjs.BOMB_32DEACTIVATORCode.GDacesso_9595negadoObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "access");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene2");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scene_start");
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}
{ //Subevents
gdjs.BOMB_32DEACTIVATORCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scene_start") >= 1;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber());
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "hour"));
}{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "min"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() < 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() >= 10);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("data"), gdjs.BOMB_32DEACTIVATORCode.GDdataObjects1);
{for(var i = 0, len = gdjs.BOMB_32DEACTIVATORCode.GDdataObjects1.length ;i < len;++i) {
    gdjs.BOMB_32DEACTIVATORCode.GDdataObjects1[i].getBehavior("Text").setText("0" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "hour")) + ":" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "min")));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() >= 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() < 10);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("data"), gdjs.BOMB_32DEACTIVATORCode.GDdataObjects1);
{for(var i = 0, len = gdjs.BOMB_32DEACTIVATORCode.GDdataObjects1.length ;i < len;++i) {
    gdjs.BOMB_32DEACTIVATORCode.GDdataObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "hour")) + ":" + "0" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "min")));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() < 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() < 10);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("data"), gdjs.BOMB_32DEACTIVATORCode.GDdataObjects1);
{for(var i = 0, len = gdjs.BOMB_32DEACTIVATORCode.GDdataObjects1.length ;i < len;++i) {
    gdjs.BOMB_32DEACTIVATORCode.GDdataObjects1[i].getBehavior("Text").setText("0" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "hour")) + ":" + "0" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "min")));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() >= 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() >= 10);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("data"), gdjs.BOMB_32DEACTIVATORCode.GDdataObjects1);
{for(var i = 0, len = gdjs.BOMB_32DEACTIVATORCode.GDdataObjects1.length ;i < len;++i) {
    gdjs.BOMB_32DEACTIVATORCode.GDdataObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "hour")) + ":" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "min")));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.BOMB_32DEACTIVATORCode.GDbackObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.BOMB_32DEACTIVATORCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.BOMB_32DEACTIVATORCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.BOMB_32DEACTIVATORCode.GDfundoObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)));
}
}{for(var i = 0, len = gdjs.BOMB_32DEACTIVATORCode.GDbackObjects1.length ;i < len;++i) {
    gdjs.BOMB_32DEACTIVATORCode.GDbackObjects1[i].SetLabelText("BACK", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() == gdjs.evtTools.firebaseTools.auth.userManagement.getUID());
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene2");
}{runtimeScene.getScene().getVariables().getFromIndex(7).setString("");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene2") >= 0.5;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene2");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene2");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "S. Pedro Alcantara Enigma", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.BOMB_32DEACTIVATORCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BOMB_32DEACTIVATORCode.GDfundoObjects1.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDfundoObjects2.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDfundoObjects3.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDacesso_9595negadoObjects1.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDacesso_9595negadoObjects2.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDacesso_9595negadoObjects3.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDbackObjects1.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDbackObjects2.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDbackObjects3.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDdataObjects1.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDdataObjects2.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDdataObjects3.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDremainingObjects1.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDremainingObjects2.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDremainingObjects3.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDattemptsObjects1.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDattemptsObjects2.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDattemptsObjects3.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDscoreObjects1.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDscoreObjects2.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDscoreObjects3.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDnext_9595sceneObjects1.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDnext_9595sceneObjects2.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDnext_9595sceneObjects3.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDURLObjects1.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDURLObjects2.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDURLObjects3.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDfundopistagmObjects1.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDfundopistagmObjects2.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDfundopistagmObjects3.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDpistagmObjects1.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDpistagmObjects2.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDpistagmObjects3.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDdigitsObjects1.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDdigitsObjects2.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDdigitsObjects3.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDgmapsObjects1.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDgmapsObjects2.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDgmapsObjects3.length = 0;

gdjs.BOMB_32DEACTIVATORCode.eventsList1(runtimeScene);
gdjs.BOMB_32DEACTIVATORCode.GDfundoObjects1.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDfundoObjects2.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDfundoObjects3.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDacesso_9595negadoObjects1.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDacesso_9595negadoObjects2.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDacesso_9595negadoObjects3.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDbackObjects1.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDbackObjects2.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDbackObjects3.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDdataObjects1.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDdataObjects2.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDdataObjects3.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDremainingObjects1.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDremainingObjects2.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDremainingObjects3.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDattemptsObjects1.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDattemptsObjects2.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDattemptsObjects3.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDscoreObjects1.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDscoreObjects2.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDscoreObjects3.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDnext_9595sceneObjects1.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDnext_9595sceneObjects2.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDnext_9595sceneObjects3.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDURLObjects1.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDURLObjects2.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDURLObjects3.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDfundopistagmObjects1.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDfundopistagmObjects2.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDfundopistagmObjects3.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDpistagmObjects1.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDpistagmObjects2.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDpistagmObjects3.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDdigitsObjects1.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDdigitsObjects2.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDdigitsObjects3.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDgmapsObjects1.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDgmapsObjects2.length = 0;
gdjs.BOMB_32DEACTIVATORCode.GDgmapsObjects3.length = 0;


return;

}

gdjs['BOMB_32DEACTIVATORCode'] = gdjs.BOMB_32DEACTIVATORCode;
