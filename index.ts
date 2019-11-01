export class Formatter {
  public formatData(s: string): string {
    const explodeData = s.split(new RegExp('\r\n\r\n', 'g'));
    let formattedData = '';
    for (const row in explodeData) {
      if (explodeData[row] !== undefined) {
        formattedData += explodeData[row].replace(/(?:\r\n|\r|\n|\s\s)/g, '') + '\r\n\r\n';
      }
    }
    formattedData = formattedData.substring(0, formattedData.length - 8);
    return formattedData;
  }
}
