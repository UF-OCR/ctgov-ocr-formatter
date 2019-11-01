import { Formatter } from '../index';
import xml2js = require('xml2js');
import fs = require('fs');

test('basic', () => {
  const parser = new xml2js.Parser();
  fs.readFile('./__tests__/clinicalTrials.xml', (err, data) => {
    parser.parseString(data, (err: Error, result: any) => {
      let iFormatter = new Formatter();
      let detailedEligibility = result['clinical_study']['eligibility'][0].criteria[0].textblock[0].toLocaleString();
      let formattedDetailedEligibility = iFormatter.formatData(detailedEligibility);
      expect(formattedDetailedEligibility).not.toBe(detailedEligibility);
    });
  });
});
