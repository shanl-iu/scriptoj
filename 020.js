// #20 正则表达式删除两端多余空白字符
// https://scriptoj.com/problems/20
const TRIM_REGX = /(^[\s]+|[\s]+$)/g;
console.log(' ScriptOJ   '.replace(TRIM_REGX, ''));

/*
 ^ : Beginning of String / Line
 \s : whitespace character
 + : one or more
 $ : End of String / Line
*/