import {setErrorMap, ZodErrorMap, ZodInvalidTypeIssue, ZodIssueCode, ZodIssueOptionalMessage, ZodTooBigIssue, ZodTooSmallIssue} from 'zod';

const unknownIssueMessage = 'לא ניתן לבצע את הפעולה עם הנתונים שהוזנו, נסה שוב מאוחר יותר';
const unrecognizedKeysIssueMessage = 'שדה לא ידוע הוזן, רענן ונסה שוב';
const invalidEnumValueIssueMessage = 'אפשרות לא תקינה, נסה לבחור באפשרות אחרת';
const invalidDateIssueMessage = 'תאריך לא תקין';

const getInvalidTypeIssueMessage = (issue: ZodInvalidTypeIssue): string => {
  if (issue.received === 'undefined' || issue.received === 'null') {
    return 'שדה לא הוזן';
  }

  return 'סוג שדה לא תקין';
};

const getTooSmallIssueMessage = (issue: ZodTooSmallIssue): string => {
  if (issue.type === 'string') {
    return `נא להזין לפחות ${issue.minimum} תווים`;
  }

  if (issue.type === 'number') {
    return `נא להזין מספר גבוה מ ${issue.minimum}`;
  }

  if (issue.type === 'date') {
    return `התאריך שהוזן מוקדם מדי`;
  }

  return `נא לבחור לפחות ${issue.minimum} אפשרויות`;
};

const getTooBigIssueMessage = (issue: ZodTooBigIssue): string => {
  if (issue.type === 'string') {
    return `נא להזין פחות מ ${issue.maximum} תווים`;
  }

  if (issue.type === 'number') {
    return `נא להזין מספר נמוך מ ${issue.maximum}`;
  }

  if (issue.type === 'date') {
    return `התאריך שהוזן מאוחר מדי`;
  }

  return `נא לבחור פחות מ ${issue.maximum} אפשרויות`;
};

const getIssueMessage = (issue: ZodIssueOptionalMessage): string => {
  const issueCode = issue.code;

  switch (issueCode) {
    case ZodIssueCode.invalid_type:
      return getInvalidTypeIssueMessage(issue);
    case ZodIssueCode.unrecognized_keys:
      return unrecognizedKeysIssueMessage;
    case ZodIssueCode.invalid_enum_value:
      return invalidEnumValueIssueMessage;
    case ZodIssueCode.invalid_date:
      return invalidDateIssueMessage;
    case ZodIssueCode.too_small:
      return getTooSmallIssueMessage(issue);
    case ZodIssueCode.too_big:
      return getTooBigIssueMessage(issue);
    default:
      return unknownIssueMessage;
  }
};

const zodErrorMap: ZodErrorMap = issue => {
  const message = getIssueMessage(issue);

  return {
    message
  };
};

export default () => {
  setErrorMap(zodErrorMap);
};
