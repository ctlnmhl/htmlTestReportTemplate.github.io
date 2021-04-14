### html test report template

Here's a preview example for a set of generated test data: https://ctlnmhl.github.io/htmlTestReportTemplate.github.io/reportTemplate/report.html

The template reads a `reportData.js` file containing test data vars:

```
var data = [{
  "count": "1",
  "className": "testClass",
  "method": "testMethod",
  "testParams": "",
  "testDescription": "",
  "time": "6622",
  "status": "SUCCESS/FAILED/SKIPPED",
  "exception": ""
},
{
  "count": "2",
  "className": "testClass",
  "method": "testMethod",
  "testParams": "",
  "testDescription": "",
  "time": "2725",
  "status": "SUCCESS/FAILED/SKIPPED",
  "exception": ""
}]
var testRunName = 'Test Run Name'; 
var footerText='ProjectName';
```

#### Other notes
- The reporter can indentify a set of different exception types based on the exception message but this can be customized based on your needs by modifyig [this method here](https://github.com/ctlnmhl/htmlTestReportTemplate.github.io/blob/master/reportTemplate/reportUtil/report.js#L254).
- In case you're generating the reportData.js file in your workspace, you can clone this repository directly from your project code into your workspace. The `report.html` file should be auto populated with the test data you generated. 
