// 用户名正则，4到16位（字母，数字，下划线，减号）
export const usernameReg = /^[a-zA-Z0-9_-]{4,20}$/
/**
 * 至少一个大写英文字母，(?=.*?[A-Z])
 * 至少一个小写英文字母， (?=.*?[a-z])
 * 至少一位数字 (?=.*?[0-9])
 * 至少一个特殊字符， (?=.*?[#?!@$%^&*-])
 * 长度至少为八.{8,}（带锚）
 */
export const passwordReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[.,?~!@#$%^&*-+_]).{8,}$/
// 合法uri
export const urlReg = /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+$/
// 手机号
export const phoneReg = /^1[3456789]\d{9}$/
// 邮箱
export const emailReg = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/
// 手机号验证码
export const smsCode = /^\d{6}$/
// code 或 key 值
export const codeReg = /^[a-zA-Z0-9][a-zA-Z0-9-_]*$/
// 身份证号
export const userCardReg =
    /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
// 中文
export const chineseReg = /^[\u4E00-\u9FA5]+$/
// 小写字母
export const lowerCaseReg = /^[a-z]+$/
// 大写字母
export const upperCaseReg = /^[A-Z]+$/
// 大小写字母
export const alphabetsReg = /^[A-Za-z]+$/
// 统一信用代码
export const uniformCreditCode = /^(?:[\dA-Z]{18}|[\dA-Z]{15})$/
export const addColonIfMissing = (text) => {
    if (!text) return text || ''
    // 如果文本以半角冒号结尾，则替换为全角冒号
    if (text.match(/:$/)) {
        text = text.replace(/:$/, '：')
    }
    // 如果文本没有全角冒号结尾，则添加一个全角冒号
    else if (!text.match(/：$/)) {
        text += '：'
    }
    return text
}
export const test=()=>{
    
}
export const removeColonIfMissing = (text) => {
    if (!text) return text || ''
    return text.replace(/[:：]+$/, '')
}
