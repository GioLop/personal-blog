const getHtmlBreakLInes = (text: string) => text.replace(/\r?\n/g, '<br/>');

const getRawBreakLines = (text:string) => text.replace(/<br\s*\/?>/gi, '\r\n'); 

export {
    getHtmlBreakLInes,
    getRawBreakLines
};