import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CsvService {

  // ─── EXPORT ───────────────────────────────────────────────────

  /**
   * Wandelt ein Array von Objekten in eine CSV-Datei um und lädt sie herunter.
   * @param data    Array von Datensätzen
   * @param headers Spaltenköpfe  { key: Feldname, label: Anzeigename }
   * @param filename Dateiname ohne .csv
   */
  export<T extends Record<string, any>>(
    data: T[],
    headers: { key: keyof T; label: string }[],
    filename: string,
  ): void {
    if (!data.length) return;

    // BOM für korrekte Umlaute in Excel
    const BOM = '\uFEFF';

    // Kopfzeile
    const headerRow = headers.map(h => this.escape(h.label)).join(';');

    // Datenzeilen
    const rows = data.map(row =>
      headers.map(h => this.escape(String(row[h.key] ?? ''))).join(';')
    );

    const csv  = BOM + [headerRow, ...rows].join('\r\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url  = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href     = url;
    link.download = `${filename}_${this.dateStamp()}.csv`;
    link.click();

    URL.revokeObjectURL(url);
  }

  // ─── IMPORT ───────────────────────────────────────────────────

  /**
   * Liest eine CSV-Datei ein und gibt die Zeilen als Objekt-Array zurück.
   * Erwartet Semikolon (;) als Trennzeichen — Excel-Standard für Deutschland.
   * @param file      File-Objekt vom <input type="file">
   * @param delimiter Trennzeichen (Standard: ;)
   */
  import(file: File, delimiter = ';'): Promise<Record<string, string>[]> {
    return new Promise((resolve, reject) => {
      if (!file.name.endsWith('.csv')) {
        reject(new Error('Nur CSV-Dateien erlaubt (.csv)'));
        return;
      }

      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const text = e.target?.result as string;

          // BOM entfernen falls vorhanden
          const clean = text.replace(/^\uFEFF/, '');

          const lines = clean.split(/\r?\n/).filter(l => l.trim() !== '');
          if (lines.length < 2) {
            reject(new Error('CSV leer oder hat keine Datenzeilen'));
            return;
          }

          const headers = this.parseLine(lines[0], delimiter);
          const result: Record<string, string>[] = [];

          for (let i = 1; i < lines.length; i++) {
            const values = this.parseLine(lines[i], delimiter);
            const row: Record<string, string> = {};
            headers.forEach((h, idx) => {
              row[h] = values[idx] ?? '';
            });
            result.push(row);
          }

          resolve(result);
        } catch (err) {
          reject(err);
        }
      };

      reader.onerror = () => reject(new Error('Fehler beim Lesen der Datei'));
      reader.readAsText(file, 'UTF-8');
    });
  }

  // ─── VORLAGEN ─────────────────────────────────────────────────

  /** Leere CSV-Vorlage herunterladen (für Import) */
  downloadTemplate(
    headers: { key: string; label: string }[],
    filename: string,
  ): void {
    const BOM       = '\uFEFF';
    const headerRow = headers.map(h => this.escape(h.label)).join(';');
    const example   = headers.map(() => '').join(';');
    const csv       = BOM + [headerRow, example].join('\r\n');
    const blob      = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url       = URL.createObjectURL(blob);
    const link      = document.createElement('a');
    link.href       = url;
    link.download   = `${filename}_vorlage.csv`;
    link.click();
    URL.revokeObjectURL(url);
  }

  // ─── PRIVATE HELPERS ──────────────────────────────────────────

  /** Zellen-Wert escapen: Anführungszeichen und Semikolon absichern */
  private escape(value: string): string {
    const str = String(value ?? '');
    if (str.includes(';') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
      return '"' + str.replace(/"/g, '""') + '"';
    }
    return str;
  }

  /** Eine CSV-Zeile korrekt parsen (berücksichtigt "Wert mit; Semikolon") */
  private parseLine(line: string, delimiter: string): string[] {
    const result: string[] = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const ch   = line[i];
      const next = line[i + 1];

      if (ch === '"') {
        if (inQuotes && next === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (ch === delimiter && !inQuotes) {
        result.push(current.trim());
        current = '';
      } else {
        current += ch;
      }
    }
    result.push(current.trim());
    return result;
  }

  /** Datums-Stempel für Dateinamen: 2025-03-07 */
  private dateStamp(): string {
    return new Date().toISOString().slice(0, 10);
  }
}
