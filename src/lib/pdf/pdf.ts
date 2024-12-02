import { t } from "$lib/i18n";
import { get } from 'svelte/store';
import jsPDF from "jspdf";
import experience from "$lib/data/experience";

const FONT_SIZE = Object.freeze({
  TITLE: 22,
  SUBTITLE: 16,
  BODY: 12,
});
const MARGIN = Object.freeze({
  PAGE: 10,
  TEXT: 5,
});

function getCurrentJob() {
  const ongoing = experience.filter((exp) => !exp.endDate);
  const curPosition = ongoing.reduce((acc, cur) => {
    if (cur.startDate > acc.startDate) return cur;
    return acc;
  });
  return curPosition;
}

class PdfWriter {
  private doc: jsPDF;
  private y = MARGIN.PAGE;
  private contentWidth;

  constructor() {
    this.doc = new jsPDF();
    this.contentWidth = this.doc.internal.pageSize.width - MARGIN.PAGE * 2;
  }

  private addPage() {
    this.doc.addPage();
    this.y = MARGIN.PAGE;
  }

  private addComponent(dimensions: { w: number, h: number }, writeFn: () => void) {
    if (this.y + dimensions.h > this.doc.internal.pageSize.height - MARGIN.PAGE) {
      this.addPage();
    }
    writeFn();
  }

  addText(text: string, fontSize: number = FONT_SIZE.BODY) {
    this.doc.setFontSize(fontSize);

    this.addComponent(
      this.doc.getTextDimensions(text),
    )

    this.doc.text(text, MARGIN.PAGE, this.y, { maxWidth: this.contentWidth });
    this.y += fontSize;
  }

  download() {
    this.doc.save(get(t)("pdf.fileName"));
  }
}

export function downloadPdf() {
  const pdf = new PdfWriter();
  pdf.addText(get(t)("home.name"), FONT_SIZE.TITLE);

  const curPosition = getCurrentJob();
  pdf.addText(`${get(t)(curPosition.txTitle)} at ${get(t)(curPosition.txOrg)}`);
  pdf.addText(get(t)("pdf.summary.title"), FONT_SIZE.SUBTITLE);
  pdf.addText(get(t)("pdf.summary.content"));

  return pdf.download();
}

