function updateAll() {
  autoUpdation1();
  autoUpdation2();
  autoUpdation3();
  autoUpdation4();
  autoUpdation5();
}

function autoUpdation1() {
  // 1 // A:O
  const ss = SpreadsheetApp.openByUrl('target sheet link');
  var lr = ss.getLastRow() + 1;
  var col = "A";
  var range = col.concat(lr);
  ss.getRange(range).setFormula(`=QUERY(IMPORTRANGE("master sheet link","Overall Data!A:O"),"where Col3 = '1'")`);
}

function autoUpdation2() {
  // 2 // A:O
  const ss = SpreadsheetApp.openByUrl('target sheet link');
  var lr = ss.getLastRow() + 1;
  var col = "A";
  var range = col.concat(lr);
  ss.getRange(range).setFormula(`=QUERY(IMPORTRANGE("master sheet link","Overall Data!A:O"),"where Col3 = '2'")`);
}

function autoUpdation3() {
  // 3 // A:O
  const ss = SpreadsheetApp.openByUrl('target sheet link');
  var lr = ss.getLastRow() + 1;
  var col = "A";
  var range = col.concat(lr);
  ss.getRange(range).setFormula(`=QUERY(IMPORTRANGE("master sheet link","Overall Data!A:O"),"where Col3 = '3'")`);
}

function autoUpdation4() {
  // 4 // A:O
  const ss = SpreadsheetApp.openByUrl('target sheet link');
  var lr = ss.getLastRow() + 1;
  var col = "A";
  var range = col.concat(lr);
  ss.getRange(range).setFormula(`=QUERY(IMPORTRANGE("master sheet link","Overall Data!A:O"),"where Col3 = '4'")`);
}

function autoUpdation5() {
  // 5 // A:O
  const ss = SpreadsheetApp.openByUrl('target sheet link');
  var lr = ss.getLastRow() + 1;
  var col = "A";
  var range = col.concat(lr);
  ss.getRange(range).setFormula(`=QUERY(IMPORTRANGE("master sheet link","Overall Data!A:O"),"where Col3 = '5'")`);
}

