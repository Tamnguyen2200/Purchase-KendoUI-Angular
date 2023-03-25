export interface data {
    reportId: string;
    reportName: string;
    reportDecription: string
}
export interface dataImport{
    importId: string;
    importName: string;
    importDecription: string
}

export interface Item{
    text: string;
    path: string;
    selected?: boolean;
}