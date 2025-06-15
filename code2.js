gdjs.BOMB_32DEACTIVATOR2Code = {};
gdjs.BOMB_32DEACTIVATOR2Code.localVariables = [];
gdjs.BOMB_32DEACTIVATOR2Code.GDfundoObjects1= [];
gdjs.BOMB_32DEACTIVATOR2Code.GDfundoObjects2= [];
gdjs.BOMB_32DEACTIVATOR2Code.GDacesso_9595negadoObjects1= [];
gdjs.BOMB_32DEACTIVATOR2Code.GDacesso_9595negadoObjects2= [];
gdjs.BOMB_32DEACTIVATOR2Code.GDbackObjects1= [];
gdjs.BOMB_32DEACTIVATOR2Code.GDbackObjects2= [];
gdjs.BOMB_32DEACTIVATOR2Code.GDdataObjects1= [];
gdjs.BOMB_32DEACTIVATOR2Code.GDdataObjects2= [];
gdjs.BOMB_32DEACTIVATOR2Code.GDremainingObjects1= [];
gdjs.BOMB_32DEACTIVATOR2Code.GDremainingObjects2= [];
gdjs.BOMB_32DEACTIVATOR2Code.GDattemptsObjects1= [];
gdjs.BOMB_32DEACTIVATOR2Code.GDattemptsObjects2= [];
gdjs.BOMB_32DEACTIVATOR2Code.GDMyQRScannerObjects1= [];
gdjs.BOMB_32DEACTIVATOR2Code.GDMyQRScannerObjects2= [];
gdjs.BOMB_32DEACTIVATOR2Code.GDscoreObjects1= [];
gdjs.BOMB_32DEACTIVATOR2Code.GDscoreObjects2= [];
gdjs.BOMB_32DEACTIVATOR2Code.GDnext_9595sceneObjects1= [];
gdjs.BOMB_32DEACTIVATOR2Code.GDnext_9595sceneObjects2= [];
gdjs.BOMB_32DEACTIVATOR2Code.GDURLObjects1= [];
gdjs.BOMB_32DEACTIVATOR2Code.GDURLObjects2= [];
gdjs.BOMB_32DEACTIVATOR2Code.GDfundopistagmObjects1= [];
gdjs.BOMB_32DEACTIVATOR2Code.GDfundopistagmObjects2= [];
gdjs.BOMB_32DEACTIVATOR2Code.GDpistagmObjects1= [];
gdjs.BOMB_32DEACTIVATOR2Code.GDpistagmObjects2= [];
gdjs.BOMB_32DEACTIVATOR2Code.GDdigitsObjects1= [];
gdjs.BOMB_32DEACTIVATOR2Code.GDdigitsObjects2= [];
gdjs.BOMB_32DEACTIVATOR2Code.GDlocal_9595erradoObjects1= [];
gdjs.BOMB_32DEACTIVATOR2Code.GDlocal_9595erradoObjects2= [];
gdjs.BOMB_32DEACTIVATOR2Code.GDtask_9595confirmationObjects1= [];
gdjs.BOMB_32DEACTIVATOR2Code.GDtask_9595confirmationObjects2= [];
gdjs.BOMB_32DEACTIVATOR2Code.GDgmapsObjects1= [];
gdjs.BOMB_32DEACTIVATOR2Code.GDgmapsObjects2= [];


gdjs.BOMB_32DEACTIVATOR2Code.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.BOMB_32DEACTIVATOR2Code.GDMyQRScannerObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BOMB_32DEACTIVATOR2Code.GDMyQRScannerObjects1.length;i<l;++i) {
    if ( gdjs.BOMB_32DEACTIVATOR2Code.GDMyQRScannerObjects1[i].DetectedText((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == "open-scene-x" ) {
        isConditionTrue_0 = true;
        gdjs.BOMB_32DEACTIVATOR2Code.GDMyQRScannerObjects1[k] = gdjs.BOMB_32DEACTIVATOR2Code.GDMyQRScannerObjects1[i];
        ++k;
    }
}
gdjs.BOMB_32DEACTIVATOR2Code.GDMyQRScannerObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "BOMB DEACTIVATOR", false);
}}

}


};gdjs.BOMB_32DEACTIVATOR2Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MyQRScanner"), gdjs.BOMB_32DEACTIVATOR2Code.GDMyQRScannerObjects1);
{for(var i = 0, len = gdjs.BOMB_32DEACTIVATOR2Code.GDMyQRScannerObjects1.length ;i < len;++i) {
    gdjs.BOMB_32DEACTIVATOR2Code.GDMyQRScannerObjects1[i].SetBarcodeType("qr_code", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BOMB_32DEACTIVATOR2Code.GDMyQRScannerObjects1.length ;i < len;++i) {
    gdjs.BOMB_32DEACTIVATOR2Code.GDMyQRScannerObjects1[i].setPosition((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.BOMB_32DEACTIVATOR2Code.GDMyQRScannerObjects1[i].getWidth())) / 2,(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - (gdjs.BOMB_32DEACTIVATOR2Code.GDMyQRScannerObjects1[i].getHeight())) / 2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MyQRScanner"), gdjs.BOMB_32DEACTIVATOR2Code.GDMyQRScannerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BOMB_32DEACTIVATOR2Code.GDMyQRScannerObjects1.length;i<l;++i) {
    if ( gdjs.BOMB_32DEACTIVATOR2Code.GDMyQRScannerObjects1[i].HasJustScanned((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BOMB_32DEACTIVATOR2Code.GDMyQRScannerObjects1[k] = gdjs.BOMB_32DEACTIVATOR2Code.GDMyQRScannerObjects1[i];
        ++k;
    }
}
gdjs.BOMB_32DEACTIVATOR2Code.GDMyQRScannerObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.BOMB_32DEACTIVATOR2Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.BOMB_32DEACTIVATOR2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BOMB_32DEACTIVATOR2Code.GDfundoObjects1.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDfundoObjects2.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDacesso_9595negadoObjects1.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDacesso_9595negadoObjects2.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDbackObjects1.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDbackObjects2.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDdataObjects1.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDdataObjects2.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDremainingObjects1.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDremainingObjects2.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDattemptsObjects1.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDattemptsObjects2.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDMyQRScannerObjects1.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDMyQRScannerObjects2.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDscoreObjects1.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDscoreObjects2.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDnext_9595sceneObjects1.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDnext_9595sceneObjects2.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDURLObjects1.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDURLObjects2.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDfundopistagmObjects1.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDfundopistagmObjects2.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDpistagmObjects1.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDpistagmObjects2.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDdigitsObjects1.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDdigitsObjects2.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDlocal_9595erradoObjects1.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDlocal_9595erradoObjects2.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDtask_9595confirmationObjects1.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDtask_9595confirmationObjects2.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDgmapsObjects1.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDgmapsObjects2.length = 0;

gdjs.BOMB_32DEACTIVATOR2Code.eventsList1(runtimeScene);
gdjs.BOMB_32DEACTIVATOR2Code.GDfundoObjects1.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDfundoObjects2.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDacesso_9595negadoObjects1.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDacesso_9595negadoObjects2.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDbackObjects1.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDbackObjects2.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDdataObjects1.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDdataObjects2.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDremainingObjects1.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDremainingObjects2.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDattemptsObjects1.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDattemptsObjects2.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDMyQRScannerObjects1.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDMyQRScannerObjects2.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDscoreObjects1.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDscoreObjects2.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDnext_9595sceneObjects1.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDnext_9595sceneObjects2.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDURLObjects1.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDURLObjects2.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDfundopistagmObjects1.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDfundopistagmObjects2.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDpistagmObjects1.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDpistagmObjects2.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDdigitsObjects1.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDdigitsObjects2.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDlocal_9595erradoObjects1.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDlocal_9595erradoObjects2.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDtask_9595confirmationObjects1.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDtask_9595confirmationObjects2.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDgmapsObjects1.length = 0;
gdjs.BOMB_32DEACTIVATOR2Code.GDgmapsObjects2.length = 0;


return;

}

gdjs['BOMB_32DEACTIVATOR2Code'] = gdjs.BOMB_32DEACTIVATOR2Code;
