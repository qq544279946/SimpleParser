// Token的类型
export default (function() {
    const TokenType = {}
    const tokenTypeArr = [
        'Plus',
        'Minus',
        'Star',
        'Slash',
        'GE',   // >=
        'GT',   // >
        'EQ',   // ==
        'LE',   // <=
        'LT',   // <
        'SemiColon', // ;
        'LeftParen',  // （
        'RightParen', // ）
        'Assignment', // =
        'If',
        'Else',
        'Int',
        'Identifier',   //标识符
        'IntLiteral',   //整型字面量
        'StringLiteral' //字符串字面量
    ]
    tokenTypeArr.forEach((tokenSymbol) => TokenType[tokenSymbol] = Symbol(tokenSymbol));
    Object.freeze(TokenType);
    return TokenType;
})();