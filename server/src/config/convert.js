const xmljs = require('xml-js');
const pdf = require('html-pdf');

const pdfOptions = { format: 'A4' };

const pdfTo = {
  buffer: 'buffer',
  file: 'file',
  stream: 'stream',
};

const xmlJsoptions = {
  compact: true,
  spaces: 5,
  ignoreDoctype: true,
  attributesKey: 'attributes',
};

module.exports = {
  xml2json: (xml) => {
    const result = xmljs.xml2json(xml, xmlJsoptions);
    try {
      return JSON.parse(result);
    } catch (error) {
      return {};
    }
  },

  html2pdf: (contents = '', handle = () => {}, to = pdfTo.buffer) => {
    const p = pdf.create(contents, pdfOptions);

    switch (to) {
      case pdfTo.file:
        p.toFile(handle);
        break;

      case pdfTo.stream:
        p.toStream(handle);
        break;

      case pdfTo.buffer:
      default:
        p.toBuffer(handle);
        break;
    }
  },
};
