/**
* @author Pierre-Henry Soria <pierrehs@hotmail.com>
* @copyright Copyright pH7 Script All Rights Reserved.
* @license CC-BY - http://creativecommons.org/licenses/by/3.0/
*/
var sJsUrl = 'http://static.hizup.com/styles/hizup/js/';
var aJsFileList = [
    'lib/tipsy',
    'common'
];

for(i in aJsFileList) 
    document.write('<script src="' + sJsUrl + aJsFileList[i] + '.js"></script>\n');
