export class Formatter {
  public formatData(s: string): string {
    const explodeData = s.split(new RegExp('\r\n\r\n', 'g'));
    let formattedData = '';
    for (const row in explodeData) {
      if (explodeData[row] !== undefined) {
        // Unix-style newline
        let tempFormat = explodeData[row].replace('\r\n', '\n');
        // remove leading whitespace
        tempFormat = tempFormat.replace(/\A\s*/, '');
        // remove leading horizontal whitespace per line
        tempFormat = tempFormat.replace(/^[ \t]*/, '');
        // remove trailing horizontal whitespace per line
        tempFormat = tempFormat.replace(/[ \t]*$/, '');
        // remove single new lines
        tempFormat = tempFormat.replace(/(\S[^\S\n]*)\n([^\S\n]*\S)/, '$1$2');
        formattedData += tempFormat;
      }
    }
    formattedData = formattedData.substring(0, formattedData.length - 8);
    return formattedData;
  }
}
