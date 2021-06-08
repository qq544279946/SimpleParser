// 有限状态机的各种状态
export default (function() {
    const DfaState = {}
    const dfaStateArr = [
        'Initial',
        'Id',
        'If', 'Id_if1', 'Id_if2',
        'Else', 'Id_else1', 'Id_else2', 'Id_else3', 'Id_else4',
        'Int', 'Id_int1', 'Id_int2', 'Id_int3',
        'GT', 'GE',
        'Assignment',
        'Plus', 'Minus', 'Star', 'Slash',
        'SemiColon','LeftParen','RightParen',
        'IntLiteral'
    ]
    dfaStateArr.forEach((stateSymbol) => DfaState[stateSymbol] = Symbol(stateSymbol));
    Object.freeze(DfaState);
    return DfaState;
})();