import DfaState from './DfaState'
import TokenType from './TokenType'
class SimpleToken {
    type = null;
    text = ''
}


class SimpleLexer {
    tokenText = ''; // 临时保存的token文本
    tokens = []; //保存解析出来的Token
    token = null; //当前正在解析的Token

    // 是否是字母
    isAlpha(ch) {
        return /[a-zA-Z]/.test(ch);
    }
    // 是否是数字
    isDigit(ch) {
        return /[0-9]/.test(ch);
    }

    // 是否是空白字符
    isBlank(ch) {
        return /\s/.test(ch)
    }

    /**
     * 有限状态机进入初始化状态。
     * 这个初始化状态其实并不做停留，它马上进入其他状态。
     * 开始解析的时候，进入初始状态；某个Token解析完毕，也进入初始状态，在这里把Token记下来，然后建立一个新的Token。
     * 
     * @param {String} ch 
     */
    initToken(ch) {
        if (this.tokenText.length > 0) {
            this.token.text = this.tokenText;
            this.tokens.add(token);

            this.tokenText = '';
            this.token = new SimpleToken();
        }
        let newState = DfaState.Initial;
        if(this.isAlpha(ch)){
            if(ch === 'i'){
                newState = DfaState.Id_int1;
            }else{
                newState = DfaState.Id; //进入Id状态
            }
            this.token.type = TokenType.Identifier;
            this.tokenText += ch;
        }else if(this.isDigit(ch)){
            newState = DfaState.IntLiteral;
            this.token.type = TokenType.IntLiteral;
            this.tokenText += ch;
        }else if(ch === '>'){
            newState = DfaState.GT;
            this.token.type = TokenType.GT;
            this.tokenText += ch; 
        }else if(){

        }
    }
}


