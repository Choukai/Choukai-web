var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1-E0zuWrphWf16Onu_DfbWZleQCdWeaXolt8dl5_wQic/edit#gid=0';
var HRTemplate = Handlebars.compile($('#hr-template').html());

$('#academic').sheetrock({
  url: mySpreadsheet,
  query: "select A,B,C,D,E,F,G,H,I,J where F='學術'",
  rowTemplate: HRTemplate,
  callback: function(err, opt, res){
    console.log(res.rows)
  }
});

$('#art').sheetrock({
  url: mySpreadsheet,
  query: "select A,B,C,D,E,F,G,H,I,J where F='藝文'",
  rowTemplate: HRTemplate,
  callback: function(err, opt, res){
    console.log(res.rows)
  }
});

$('#service').sheetrock({
  url: mySpreadsheet,
  query: "select A,B,C,D,E,F,G,H,I,J where F='服務'",
  rowTemplate: HRTemplate,
  callback: function(err, opt, res){
    console.log(res.rows)
  }
});

$('#kl').sheetrock({
  url: mySpreadsheet,
  query: "select A,B,C,D,E,F,G,H,I,J where F='康樂'",
  rowTemplate: HRTemplate,
  callback: function(err, opt, res){
    console.log(res.rows)
  }
});

$('#pe').sheetrock({
  url: mySpreadsheet,
  query: "select A,B,C,D,E,F,G,H,I,J where F='體育'",
  rowTemplate: HRTemplate,
  callback: function(err, opt, res){
    console.log(res.rows)
  }
});

$('#event').sheetrock({
  url: mySpreadsheet,
  query: "select A,B,C,D,E,F,G,H,I,J where F='活動'",
  rowTemplate: HRTemplate,
  callback: function(err, opt, res){
    console.log(res.rows)
  }
});
